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

const VERSAO = "cf-v2";
const CACHE = `${VERSAO}`;

/** A raiz da instalação. No GitHub Pages é a subpasta do repositório. */
const RAIZ = new URL("./", self.location).pathname;

/**
 * O casco. São as telas que precisam abrir sem rede — todas as da
 * paciente, porque não dá para adivinhar em qual delas ela estará quando
 * o sinal cair.
 */
const CASCO = [
  "",
  "hoje/",
  "jornada/",
  "exames/",
  "consultas/",
  "saude/",
  "biblioteca/",
  "mala/",
  "equipe/",
  "mais/",
  "entrar/",
].map((r) => RAIZ + r);

self.addEventListener("install", (evento) => {
  evento.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      // Uma a uma: uma rota que falhe não pode abortar a instalação
      // inteira e deixar o app sem nenhum offline.
      await Promise.all(
        CASCO.map((rota) =>
          cache.add(new Request(rota, { cache: "reload" })).catch(() => {})
        )
      );
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

async function redePrimeiro(requisicao) {
  const cache = await caches.open(CACHE);
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
    if (resposta && resposta.ok) cache.put(requisicao, resposta.clone());
    return resposta;
  } catch (erro) {
    const guardado = await cache.match(requisicao);
    if (guardado) return guardado;
    // Navegação sem rede e sem cache da rota exata: entrega o casco.
    // É melhor abrir na tela inicial do que não abrir.
    if (requisicao.mode === "navigate") {
      const raiz = await cache.match(RAIZ);
      if (raiz) return raiz;
    }
    throw erro;
  }
}

async function cachePrimeiro(requisicao) {
  const cache = await caches.open(CACHE);
  const guardado = await cache.match(requisicao);
  if (guardado) return guardado;
  const resposta = await fetch(requisicao);
  if (resposta && resposta.ok) cache.put(requisicao, resposta.clone());
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
