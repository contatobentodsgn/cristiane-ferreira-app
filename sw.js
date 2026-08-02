/**
 * Service worker — o offline que estava escrito em cinco documentos e em
 * nenhuma linha de código.
 *
 * A cena que justifica isto: três da manhã, ela acorda com um sintoma, o
 * aparelho sem sinal. Sinais de Alerta é o único módulo cujo defeito tem
 * consequência clínica — e até aqui ele só abria se o app já estivesse
 * carregado. Do zero, sem rede, não abria nada.
 *
 * ---
 *
 * A estratégia é dividida por tipo de recurso, e a divisão é o que remove
 * o risco clássico de service worker (servir build velho):
 *
 *   navegação (HTML)  → rede primeiro, cache como rede de segurança
 *   /_next/static/*   → cache primeiro, para sempre
 *   resto (mesma origem, GET) → rede primeiro
 *
 * Rede primeiro no HTML significa que **um deploy novo é pego na hora**,
 * sempre que houver rede — mas só com o `cache: "no-cache"` de
 * `redePrimeiro()`, e a razão está lá embaixo. Sem ele, "rede primeiro"
 * era "cache do navegador primeiro" e um deploy levava dez minutos.
 * Cache primeiro nos estáticos é seguro porque o
 * Next põe hash de conteúdo no nome: `page.a1b2c3.js` nunca muda de
 * conteúdo — quando o conteúdo muda, o nome muda junto.
 *
 * Sem essa divisão, um cache agressivo serviria a versão da semana
 * passada na frente da cliente. Foi por isso que não subiu junto com a
 * apresentação.
 */

const VERSAO = "cf-v4";
const CACHE = `${VERSAO}`;

/** A raiz da instalação. No GitHub Pages é a subpasta do repositório. */
const RAIZ = new URL("./", self.location).pathname;

/**
 * O casco. São as telas que precisam abrir sem rede — todas as da
 * paciente, porque não dá para adivinhar em qual delas ela estará quando
 * o sinal cair.
 *
 * `biblioteca/artigo/` está aqui porque é uma tela de verdade, não um
 * detalhe da biblioteca: o slug vai na query (`?a=...`), então existe um
 * único HTML para todos os artigos. Sem ele no casco, abrir um artigo
 * offline caía no fallback da raiz e entregava a tela do Hoje com a URL
 * do artigo na barra — o pior tipo de erro, porque parece que funcionou.
 */
const CASCO = [
  "",
  "hoje/",
  "jornada/",
  "exames/",
  "consultas/",
  "saude/",
  "biblioteca/",
  "biblioteca/artigo/",
  "mala/",
  "equipe/",
  "mais/",
  "entrar/",
].map((r) => RAIZ + r);

/**
 * ============================================================
 * Como o casco descobre o JavaScript
 * ============================================================
 *
 * O bug que isto conserta: o casco trazia onze HTMLs e **nenhum chunk de
 * JavaScript**. Numa instalação a frio (abrir, entrar, parar), o cache
 * ficava com 40 entradas e só 6 arquivos .js — os da tela que ela tinha
 * visitado. Em modo avião, `/saude/` abria com 34 caracteres de HTML e
 * não hidratava: o botão de emergência **aparecia desenhado na tela e
 * não abria ao toque**. O teste anterior não pegou porque navegava
 * várias telas online antes, o que aquecia o cache sem querer.
 *
 * Não dá para listar os chunks à mão: o Next põe hash de conteúdo no
 * nome (`05t1j9-rg5hp_.js`) e todos mudam a cada build. Uma lista fixa
 * estaria errada no primeiro deploy seguinte — e errada em silêncio.
 *
 * **A estratégia: o HTML é o manifesto.** Na instalação, cada rota do
 * casco é baixada, guardada, e o corpo dela é varrido atrás de
 * referências a `/_next/static/`. O Next escreve essas referências duas
 * vezes em cada página — nas tags `<script src>`/`<link href>` e de novo
 * dentro do payload do React embutido — e a varredura pega as duas, o
 * que a torna imune a mudanças na forma como o Next emite as tags. A
 * união dos doze HTMLs é exatamente o conjunto de arquivos que o app
 * precisa para hidratar qualquer tela do casco. Sem lista fixa, sem
 * etapa de build, sem acoplamento a nome de manifesto interno do Next.
 *
 * **O que custa.** Medido no build atual: 12 HTMLs (218 KB brutos,
 * 49 KB comprimidos) + 25 estáticos descobertos (1,30 MB brutos,
 * 498 KB comprimidos) = **1,51 MB brutos / ~547 KB comprimidos na
 * primeira visita**, contra ~49 KB antes. É a conta que troca "um botão
 * desenhado que não abre" por "abre".
 *
 * Nem tudo isso vira tráfego: os HTMLs são baixados com
 * `cache: "reload"` (não se pode precachear HTML velho apontando para
 * chunk que já não existe), mas os estáticos vão com `fetch` normal de
 * propósito — os chunks da tela que ela acabou de ver já estão no cache
 * HTTP do navegador e não descem de novo. E tudo isto roda depois do
 * evento `load` (ver `components/offline.tsx`), então não disputa banda
 * com o que ela está esperando ver.
 *
 * **O que fica de fora, de propósito.** O casco são as telas da
 * paciente. Os 6 chunks que a varredura não descobre pertencem a
 * `painel/`, `convite/` e `boas-vindas/` — telas de médica e de
 * onboarding, que ninguém abre às três da manhã sem sinal — mais um
 * chunk morto que nada no `out/` referencia. Elas continuam funcionando
 * com rede, e o `cachePrimeiro` dos estáticos as guarda no primeiro uso.
 *
 * **O limite honesto.** A varredura só enxerga o que algum HTML do casco
 * referencia. Um chunk carregado por `import()` tardio, citado só de
 * dentro de outro chunk, escaparia — e o `cachePrimeiro` só o guardaria
 * depois de um primeiro uso com rede. Hoje não existe nenhum desse tipo;
 * se passar a existir numa tela do casco, é aqui que se percebe.
 */
const REFERENCIA_ESTATICA = /[\w./-]*\/_next\/static\/[\w./-]+/g;

async function instalarCasco() {
  const cache = await caches.open(CACHE);
  const estaticos = new Set();

  // Uma a uma: uma rota que falhe não pode abortar a instalação inteira
  // e deixar o app sem nenhum offline.
  await Promise.all(
    CASCO.map(async (rota) => {
      try {
        const resposta = await fetch(rota, {
          cache: "reload",
          credentials: "same-origin",
        });
        if (!resposta.ok) return;
        const html = await resposta.clone().text();
        await cache.put(rota, resposta);
        for (const [caminho] of html.matchAll(REFERENCIA_ESTATICA)) {
          if (caminho.startsWith("/")) estaticos.add(caminho);
        }
      } catch {
        /* Sem rede na instalação: o que der, dá. */
      }
    })
  );

  await Promise.all(
    [...estaticos].map((caminho) => cache.add(caminho).catch(() => {}))
  );
}

self.addEventListener("install", (evento) => {
  evento.waitUntil(
    (async () => {
      await instalarCasco();
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    (async () => {
      const nomes = await caches.keys();
      await Promise.all(
        nomes.filter((n) => n !== CACHE).map((n) => caches.delete(n))
      );
      await self.clients.claim();
    })()
  );
});

/**
 * A chave sob a qual uma requisição é guardada — e procurada.
 *
 * **Navegação: sempre pelo caminho, sem a query.** `cache.match()` casa a
 * URL inteira, query incluída. Como `output: export` proíbe rota
 * dinâmica, o slug do artigo viaja em `?slug=...` sobre um único HTML —
 * então `/biblioteca/artigo/?slug=inchaco-na-gestacao` não casava com o
 * `/biblioteca/artigo/` do casco, caía no fallback da raiz e entregava a
 * tela do Hoje com a URL do artigo na barra. Pôr a rota no casco não
 * bastava; era preciso guardar e procurar pelo caminho.
 *
 * Isso é correto por construção, não por conveniência: na exportação
 * estática existe **um** HTML por rota e a query é lida no cliente. O
 * mesmo arquivo serve toda query — e de quebra o cache deixa de guardar
 * uma cópia idêntica do mesmo HTML por artigo visitado.
 *
 * ---
 *
 * **Payload RSC: hash volátil trocado por um valor fixo.** A navegação
 * entre telas do Next busca o payload RSC com `?_rsc=<hash>` na ponta, e
 * esse hash muda a cada build. Uma varredura do cache em produção achou
 * **219 payloads RSC (~2 MB)** — a mesma meia dúzia de rotas, repetida a
 * cada deploy, com hashes que nenhuma requisição futura volta a pedir.
 * Lixo inalcançável, e crescendo, porque a única coisa que apagava cache
 * velho era o bump manual do `VERSAO` aqui em cima.
 *
 * A saída não é ignorar essas requisições — sem elas a navegação entre
 * telas offline vira recarga de página inteira a cada toque. É trocar o
 * hash volátil por um valor fixo: `?_rsc=1`. Uma entrada por rota, para
 * sempre, revalidada pela rede quando há sinal como todo o resto.
 *
 * O `1` fica no lugar do hash em vez de o parâmetro ser removido de
 * propósito: `/hoje/?_rsc=1` não pode colidir com `/hoje/`, que é o HTML
 * da mesma rota. Apagar o parâmetro faria as duas respostas — HTML e
 * payload RSC — brigarem pela mesma chave.
 *
 * Com isto o `VERSAO` deixa de ser o que segura o crescimento do cache e
 * volta a ser só o que ele deve ser: o interruptor de invalidar tudo
 * quando a estratégia daqui mudar.
 */
function chaveDeCache(requisicao) {
  const url = new URL(requisicao.url);
  if (requisicao.mode === "navigate") return url.origin + url.pathname;
  if (!url.searchParams.has("_rsc")) return requisicao;
  url.searchParams.set("_rsc", "1");
  return url.href;
}

/**
 * `respondWith()` **recusa** uma resposta redirecionada quando a
 * requisição é de navegação — e isso vale tanto para o que veio da rede
 * quanto para o que sai do cache. Uma resposta guardada preserva a marca
 * `redirected`, então servir do cache sem esta limpeza reproduziria o
 * mesmo erro, só que offline, onde não há como redirecionar de novo.
 *
 * Reconstruir a resposta com o mesmo corpo e os mesmos cabeçalhos tira a
 * marca e entrega a tela.
 */
function semRedirecionamento(resposta, requisicao) {
  if (!resposta.redirected || requisicao.mode !== "navigate") return resposta;
  return new Response(resposta.body, {
    status: resposta.status,
    statusText: resposta.statusText,
    headers: resposta.headers,
  });
}

async function redePrimeiro(requisicao) {
  const cache = await caches.open(CACHE);
  const chave = chaveDeCache(requisicao);
  try {
    /**
     * `cache: "no-cache"` não quer dizer "não use cache" — quer dizer
     * "revalide com o servidor antes de usar".
     *
     * Sem isto, um `fetch()` normal é atendido pelo cache HTTP do
     * navegador, e o GitHub Pages manda `cache-control: max-age=600`.
     * "Rede primeiro" viraria "cache do navegador primeiro" e um deploy
     * novo levaria até dez minutos para aparecer. Medido, não suposto.
     *
     * O custo é um 304 quando nada mudou: cabeçalhos, sem corpo.
     */
    const resposta = await fetch(requisicao.url, {
      cache: "no-cache",
      credentials: "same-origin",
    });

    /**
     * O site inteiro usa `trailingSlash`, então `/hoje` responde 301
     * para `/hoje/` — que é exatamente o endereço que alguém digita ou
     * compartilha.
     *
     * Sem este trecho, toda URL sem a barra final quebrava com o
     * service worker ativo, e só com ele: o bug não existia antes e
     * não aparecia em nenhuma navegação interna do app, porque essas
     * já vão com a barra. Apareceu na varredura das nove telas.
     *
     * Com rede, devolver o redirecionamento explicitamente faz o
     * navegador navegar de novo, agora para o endereço canônico.
     */
    if (resposta.redirected && requisicao.mode === "navigate") {
      return Response.redirect(resposta.url, 302);
    }

    if (resposta && resposta.ok) cache.put(chave, resposta.clone());
    return resposta;
  } catch (erro) {
    const guardado = await cache.match(chave);
    if (guardado) return semRedirecionamento(guardado, requisicao);

    if (requisicao.mode === "navigate") {
      /**
       * Sem rede não dá para responder com um redirecionamento: o
       * navegador tentaria buscar o destino e não há rede. Então a
       * canonização do `trailingSlash` acontece aqui, procurando a
       * mesma rota com a barra — é o que faz `/mala` abrir a mala, e
       * não a tela do Hoje, quando ela toca num link antigo offline.
       */
      const comBarra = await cache.match(`${chave}/`);
      if (comBarra) return semRedirecionamento(comBarra, requisicao);

      // Rota que não está no casco e nunca foi visitada: entrega a
      // inicial. É melhor abrir na tela inicial do que não abrir.
      const raiz = await cache.match(RAIZ);
      if (raiz) return semRedirecionamento(raiz, requisicao);
    }
    throw erro;
  }
}

async function cachePrimeiro(requisicao) {
  const cache = await caches.open(CACHE);
  const chave = chaveDeCache(requisicao);
  const guardado = await cache.match(chave);
  if (guardado) return guardado;
  const resposta = await fetch(requisicao);
  if (resposta && resposta.ok) cache.put(chave, resposta.clone());
  return resposta;
}

self.addEventListener("fetch", (evento) => {
  const req = evento.request;

  // Nada além de GET de mesma origem. POST não se guarda, e recurso de
  // terceiro não é nosso para cachear.
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const imutavel =
    url.pathname.includes("/_next/static/") ||
    url.pathname.endsWith(".woff2") ||
    url.pathname.endsWith(".svg");

  evento.respondWith(imutavel ? cachePrimeiro(req) : redePrimeiro(req));
});
