(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,233,e=>{"use strict";var a=e.i(46400),o=e.i(55967),r=e.i(38693);let s=(0,r.default)("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]),i=(0,r.default)("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);e.s(["BotaoTema",0,function({className:e}){let[r,t]=function(){let[e,a]=(0,o.useState)("light");return(0,o.useEffect)(()=>{a("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")},[]),[e,()=>{let o="dark"===e?"light":"dark";a(o),document.documentElement.setAttribute("data-theme",o),document.documentElement.style.colorScheme=o;try{localStorage.setItem("cf.theme",o)}catch{}}]}();return(0,a.jsx)("button",{onClick:t,"aria-label":"dark"===r?"Usar tema claro":"Usar tema escuro",className:e??"tap grid h-10 w-10 place-items-center rounded-full bg-card text-strong",children:"dark"===r?(0,a.jsx)(i,{size:18,strokeWidth:1.75}):(0,a.jsx)(s,{size:18,strokeWidth:1.75})})}],233)},51686,e=>{"use strict";let a=(0,e.i(38693).default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",0,a],51686)},55822,e=>{"use strict";var a=e.i(46400),o=e.i(88813),r=e.i(51686),s=e.i(25544),i=e.i(99102),t=e.i(38286),n=e.i(233);function d({href:e,icone:r,titulo:s,descricao:i}){return(0,a.jsxs)(o.default,{href:e,className:"tap flex items-center gap-3 rounded-[var(--radius-md)] bg-card p-4 hover:bg-card-alt",children:[(0,a.jsx)("span",{className:"grid h-11 w-11 shrink-0 place-items-center rounded-full bg-inset",children:(0,a.jsx)(r,{size:19,strokeWidth:1.75,className:"text-strong","aria-hidden":!0})}),(0,a.jsxs)("span",{className:"min-w-0 flex-1",children:[(0,a.jsx)("span",{className:"block text-[length:var(--body-lg)] font-medium leading-snug text-strong",children:s}),(0,a.jsx)("span",{className:"block text-[length:var(--body-sm)] text-muted",children:i})]})]})}e.s(["JornadaSuspensa",0,function({paciente:e}){return(0,a.jsxs)("main",{children:[(0,a.jsxs)("header",{className:"flex items-center justify-between gap-3 px-[var(--gutter-screen)] pb-4 pt-6",children:[(0,a.jsx)("p",{className:"truncate text-[length:var(--title-2)] font-semibold text-strong",children:e.nomePreferido}),(0,a.jsx)(n.BotaoTema,{})]}),(0,a.jsx)("section",{className:"px-[var(--gutter-screen)]",children:(0,a.jsxs)(t.Card,{alt:!0,className:"py-8!",children:[(0,a.jsx)("p",{className:"display text-[32px] text-strong",children:"Estamos aqui com você."}),(0,a.jsxs)("div",{className:"mt-4 grid gap-3 text-[length:var(--body-lg)] leading-relaxed text-body",children:[(0,a.jsx)("p",{children:"Seu acompanhamento está pausado. Você não vai receber lembretes nem avisos automáticos."}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"font-semibold text-strong",children:"Você não precisa decidir nada agora."})," ","Seus exames, documentos e registros continuam guardados aqui, do jeito que estavam. Nada foi apagado."]}),(0,a.jsx)("p",{children:"Quando e se quiser, você pode baixar tudo ou apagar tudo — está em Mais, e vai continuar lá."}),(0,a.jsx)("p",{children:"A Dra. Cristiane e a equipe seguem à sua disposição, no seu tempo."})]})]})}),(0,a.jsxs)("section",{className:"mt-6 grid gap-2 px-[var(--gutter-screen)]",children:[(0,a.jsx)(d,{href:"/exames",icone:r.FileText,titulo:"Meus documentos",descricao:"Exames e arquivos que você guardou aqui"}),(0,a.jsx)(d,{href:"/equipe",icone:s.MessageCircle,titulo:"Falar com a equipe",descricao:"Seg a sex, 9h às 18h"}),(0,a.jsx)(d,{href:"/mais",icone:i.Phone,titulo:"Contatos e configurações",descricao:"Inclui a opção de apagar seus dados"})]}),(0,a.jsx)("p",{className:"mt-10 px-[var(--gutter-screen)] text-[length:var(--body-sm)] leading-relaxed text-muted",children:"Se precisar conversar, o CVV atende 24 horas pelo 188, de graça e em sigilo."})]})}])},36468,96809,e=>{"use strict";var a=e.i(46400),o=e.i(88813);let r={aprovadoPor:"Dra. Cristiane Ferreira",aprovadoEm:"2026-07-31",revisarEm:"2027-07-31"},s=[{slug:"enjoo-na-gestacao",titulo:"Enjoo: por que acontece e o que costuma ajudar",resumo:"O enjoo do início da gestação tem explicação hormonal e tem manejo. Entenda o que testar em casa e quando ele deixa de ser só desconforto.",categoria:"gestacao",leitura:4,corpo:`O enjoo aparece em cerca de sete a oito de cada dez gesta\xe7\xf5es. Costuma come\xe7ar por volta da sexta semana, atingir o pico entre a nona e a d\xe9cima segunda, e ceder no in\xedcio do segundo trimestre. Em algumas mulheres ele dura mais. Isso n\xe3o significa que algo esteja errado, mas merece conversa na consulta.

## Por que acontece

A explica\xe7\xe3o mais aceita envolve o horm\xf4nio da gesta\xe7\xe3o, o hCG, que sobe r\xe1pido no primeiro trimestre. Ele age em \xe1reas do c\xe9rebro ligadas \xe0 n\xe1usea. O estrog\xeanio e a maior sensibilidade a cheiros completam o quadro. O nome "enjoo matinal" engana: ele pode aparecer em qualquer hora, inclusive \xe0 noite.

## O que costuma ajudar

Nada disso \xe9 rem\xe9dio, \xe9 organiza\xe7\xe3o do dia:

- **N\xe3o deixe o est\xf4mago vazio.** Coma pequenas quantidades a cada duas ou tr\xeas horas. Est\xf4mago vazio piora a n\xe1usea.
- **Coma algo seco antes de levantar.** Uma torrada ou um biscoito de \xe1gua e sal, ainda na cama.
- **Separe o l\xedquido da comida.** Beba entre as refei\xe7\xf5es, em goles pequenos, n\xe3o durante.
- **Gelado costuma incomodar menos que quente.** Alimentos frios exalam menos cheiro.
- **Identifique seus gatilhos.** Perfume, caf\xe9, fritura, transporte. Anote quais s\xe3o os seus.
- **Gengibre** tem evid\xeancia razo\xe1vel para n\xe1usea leve. Converse com a Dra. Cristiane sobre a forma e a quantidade antes de usar todo dia.

## Quando isso deixa de ser s\xf3 desconforto

Existe uma forma grave, chamada hiper\xeamese grav\xeddica, que causa desidrata\xe7\xe3o e perda de peso. Ela precisa de tratamento, \xe0s vezes com soro na veia. Procure a equipe se voc\xea:

- N\xe3o conseguir segurar l\xedquido por mais de 12 horas
- Vomitar mais de quatro ou cinco vezes ao dia
- Perder peso, urinar pouco ou ter urina muito escura
- Sentir tontura forte ao levantar

**Nunca tome antiem\xe9tico por conta pr\xf3pria.** Existem op\xe7\xf5es seguras na gesta\xe7\xe3o, e existem as que n\xe3o s\xe3o. Quem define qual serve para voc\xea \xe9 a Dra. Cristiane.

Se o enjoo estiver atrapalhando seu trabalho, seu sono ou sua alimenta\xe7\xe3o, n\xe3o espere a pr\xf3xima consulta chegar. Mande um recado pela equipe descrevendo quantas vezes por dia voc\xea vomita e o que j\xe1 tentou.`,procedencia:r},{slug:"sono-na-gestacao",titulo:"Sono: por que ele piora e como recuperar parte dele",resumo:"Insônia, sono picado e dificuldade de achar posição são frequentes na gestação. O que muda em cada trimestre e o que vale ajustar.",categoria:"gestacao",leitura:3,corpo:`Dormir mal na gesta\xe7\xe3o \xe9 comum, e a raz\xe3o muda conforme o trimestre. No primeiro, a sonol\xeancia excessiva vem da progesterona. No segundo, o sono costuma melhorar. No terceiro, ele piora de novo, agora por motivos mec\xe2nicos: peso da barriga, azia, bexiga cheia e movimentos do beb\xea.

## Posi\xe7\xe3o

A partir da metade da gesta\xe7\xe3o, dormir de lado \xe9 o mais recomendado, de prefer\xeancia sobre o lado esquerdo. Isso reduz a compress\xe3o de uma veia grande que corre \xe0 direita da coluna e melhora o fluxo de sangue para a placenta.

N\xe3o se culpe se acordar de barriga para cima. Vire e volte a dormir. Um travesseiro entre os joelhos e outro apoiando a barriga costumam resolver boa parte do desconforto.

## O que costuma ajudar

- Jantar mais cedo e mais leve, evitando deitar nas duas horas seguintes
- Reduzir l\xedquido nas duas horas antes de dormir, mantendo a hidrata\xe7\xe3o durante o dia
- Manter o quarto escuro e fresco, e o celular fora da cama
- Manter hor\xe1rio de dormir e de acordar parecidos nos dias de semana
- Caminhada leve durante o dia, mas n\xe3o perto da hora de dormir

## C\xe2imbras e pernas inquietas

C\xe2imbras noturnas na panturrilha s\xe3o frequentes no terceiro trimestre. Alongar a panturrilha antes de deitar, com o calcanhar apoiado e a ponta do p\xe9 puxada para cima, costuma reduzir a frequ\xeancia. Se as c\xe2imbras forem di\xe1rias ou muito intensas, mencione na consulta: \xe0s vezes h\xe1 rela\xe7\xe3o com anemia ou com defici\xeancias que aparecem no exame de sangue.

Uma sensa\xe7\xe3o de inquieta\xe7\xe3o nas pernas que s\xf3 melhora movendo-se, sempre \xe0 noite, tem nome — s\xedndrome das pernas inquietas — e \xe9 mais comum na gesta\xe7\xe3o. Conte isso \xe0 Dra. Cristiane, porque pode estar associada a ferro baixo.

## Quando avisar a equipe

**Nenhum indutor de sono, ch\xe1 calmante ou melatonina deve ser usado sem conversa.** V\xe1rios n\xe3o t\xeam seguran\xe7a estabelecida na gesta\xe7\xe3o.

Procure a equipe se voc\xea ronca alto e acorda engasgada, se acorda com dor de cabe\xe7a todos os dias, ou se a ins\xf4nia vier junto com ang\xfastia constante e falta de vontade de fazer as coisas. Esses tr\xeas casos precisam de avalia\xe7\xe3o, n\xe3o de ajuste de rotina.`,procedencia:r},{slug:"azia-e-refluxo",titulo:"Azia e refluxo: o que muda no seu estômago",resumo:"Queimação atrás do peito é uma das queixas mais frequentes do segundo e terceiro trimestres. Entenda a causa e o que ajustar antes de pensar em remédio.",categoria:"gestacao",leitura:3,corpo:`Azia \xe9 aquela queima\xe7\xe3o que sobe do est\xf4mago para o peito e \xe0s vezes chega \xe0 garganta, com gosto azedo na boca. Afeta perto de metade das gesta\xe7\xf5es e costuma piorar do segundo trimestre em diante.

## Por que acontece

Dois motivos somados. O primeiro \xe9 hormonal: a progesterona relaxa a musculatura lisa do corpo inteiro, inclusive o anel que separa o es\xf4fago do est\xf4mago. Com esse anel mais frouxo, o conte\xfado \xe1cido sobe. O segundo \xe9 mec\xe2nico: o \xfatero crescendo empurra o est\xf4mago para cima e reduz o espa\xe7o dele.

Por isso a azia costuma piorar deitada e depois de refei\xe7\xf5es grandes.

## O que costuma ajudar

- **Coma menos por vez e mais vezes ao dia.** Seis refei\xe7\xf5es pequenas funcionam melhor que tr\xeas grandes.
- **N\xe3o deite nas duas a tr\xeas horas depois de comer.** Se der sono, sente-se reclinada.
- **Eleve a cabeceira da cama** de 10 a 15 cent\xedmetros, com cal\xe7os sob os p\xe9s da cama. Empilhar travesseiros n\xe3o tem o mesmo efeito.
- **Mastigue devagar** e evite beber muito l\xedquido durante a refei\xe7\xe3o.
- **Identifique seus gatilhos.** Frituras, molho de tomate, chocolate, caf\xe9, refrigerante, pimenta e frutas c\xedtricas s\xe3o os mais citados. Nem todos valem para todo mundo — anote os seus.
- **Evite roupa apertada na cintura.**

## Sobre rem\xe9dios

Existem anti\xe1cidos e medicamentos considerados seguros na gesta\xe7\xe3o e outros que n\xe3o s\xe3o recomendados. **N\xe3o use nada por conta pr\xf3pria, nem o que sobrou de outra \xe9poca e nem o que funcionou para uma amiga.** Alguns anti\xe1cidos, por exemplo, atrapalham a absor\xe7\xe3o do ferro que voc\xea toma. Se as medidas acima n\xe3o resolverem, leve a queixa para a consulta e a Dra. Cristiane define o que serve para voc\xea.

## Quando isso n\xe3o \xe9 s\xf3 azia

Procure a equipe no mesmo dia se voc\xea tiver:

- Dor forte na parte alta da barriga, do lado direito, principalmente depois de 20 semanas — pode estar relacionada \xe0 press\xe3o alta e precisa de avalia\xe7\xe3o
- V\xf4mito com sangue ou fezes escuras como piche
- Dor no peito com falta de ar, suor frio ou dor irradiando para o bra\xe7o
- Dificuldade para engolir

Nessas situa\xe7\xf5es, ligue para a equipe antes de tomar qualquer coisa.`,procedencia:r},{slug:"inchaco-na-gestacao",titulo:"Inchaço: o que é esperado e o que precisa de avaliação",resumo:"Pés e tornozelos inchados no fim do dia são comuns. Inchaço súbito no rosto e nas mãos é outra conversa. Aprenda a diferença.",categoria:"gestacao",leitura:3,corpo:`Na gesta\xe7\xe3o seu volume de sangue aumenta em torno de 40%, e os horm\xf4nios fazem o corpo reter mais l\xedquido. Somado ao \xfatero, que dificulta o retorno do sangue das pernas, o resultado \xe9 incha\xe7o. Ele afeta a maioria das gestantes, principalmente no terceiro trimestre.

## O padr\xe3o que costuma ser esperado

- Aparece nos p\xe9s, tornozelos e pernas
- Piora ao longo do dia e melhora depois de uma noite deitada
- Piora no calor e depois de muitas horas em p\xe9 ou sentada
- \xc9 parecido dos dois lados

Mesmo esse padr\xe3o merece ser mencionado na consulta, para que sua press\xe3o e seu ganho de peso sejam acompanhados.

## O que costuma ajudar

- Eleve as pernas acima do n\xedvel do quadril por 15 a 20 minutos, algumas vezes ao dia
- Evite ficar mais de uma hora parada na mesma posi\xe7\xe3o: levante e caminhe um pouco
- Beba \xe1gua regularmente — reduzir l\xedquido n\xe3o reduz incha\xe7o, piora
- Reduza alimentos muito salgados e industrializados
- Durma de lado, preferindo o lado esquerdo
- Use cal\xe7ado confort\xe1vel e evite meia ou el\xe1stico que marque a perna
- **Meia de compress\xe3o** ajuda muitas mulheres, mas a compress\xe3o certa depende do seu caso. Pergunte \xe0 Dra. Cristiane antes de comprar.

## Quando procurar atendimento

Ligue para a equipe **no mesmo dia** se o incha\xe7o:

- Aparecer de forma s\xfabita no rosto, ao redor dos olhos ou nas m\xe3os
- Vier acompanhado de dor de cabe\xe7a forte, vis\xe3o emba\xe7ada ou pontos brilhantes
- Vier com dor na parte alta da barriga do lado direito
- Vier com ganho de peso muito r\xe1pido, como mais de um quilo em poucos dias

Essa combina\xe7\xe3o pode indicar pr\xe9-ecl\xe2mpsia, uma altera\xe7\xe3o de press\xe3o da gesta\xe7\xe3o que precisa ser identificada cedo.

**Procure atendimento agora, sem esperar**, se houver incha\xe7o, dor, calor ou vermelhid\xe3o em **uma perna s\xf3**, especialmente na panturrilha, ou se surgir falta de ar repentina. N\xe3o massageie a perna e n\xe3o fa\xe7a compressa: v\xe1 direto ao pronto-socorro e informe que voc\xea est\xe1 gr\xe1vida.`,procedencia:r},{slug:"movimentacao-fetal",titulo:"Movimentos do bebê: como contar e quando ligar",resumo:"Os movimentos são o principal sinal de bem-estar que está nas suas mãos. Como reconhecer o padrão do seu bebê e o que fazer quando ele muda.",categoria:"gestacao",leitura:4,corpo:`A movimenta\xe7\xe3o do beb\xea \xe9 a informa\xe7\xe3o de bem-estar que s\xf3 voc\xea tem. Nenhum aparelho substitui a sua percep\xe7\xe3o do padr\xe3o dele. Por isso vale aprender a acompanh\xe1-la direito.

## Quando voc\xea come\xe7a a sentir

Na primeira gesta\xe7\xe3o, normalmente entre 18 e 22 semanas. Em gesta\xe7\xf5es seguintes, um pouco antes, porque voc\xea j\xe1 sabe o que est\xe1 sentindo. No come\xe7o lembra bolhas, borboletas ou um m\xfasculo pulsando. Depois vira chute, rolamento e solu\xe7o.

A posi\xe7\xe3o da placenta influencia: se ela estiver na parede da frente do \xfatero, voc\xea pode demorar mais a perceber. Isso n\xe3o indica problema.

## O que importa \xe9 o padr\xe3o dele

N\xe3o existe um n\xfamero universal de movimentos por hora. Existe o padr\xe3o do **seu** beb\xea: os hor\xe1rios em que ele costuma estar ativo e a intensidade habitual. O que preocupa n\xe3o \xe9 ele se mexer pouco em um hor\xe1rio, \xe9 o padr\xe3o dele mudar.

Beb\xeas tamb\xe9m dormem, em ciclos de 20 a 40 minutos. Um per\xedodo parado dentro desse intervalo \xe9 esperado.

## Como fazer a contagem

A partir de 28 semanas, fa\xe7a uma vez por dia, sempre no mesmo hor\xe1rio, de prefer\xeancia quando o beb\xea costuma estar mais ativo:

1. Deite de lado, de prefer\xeancia do lado esquerdo, em um lugar tranquilo
2. Beba um copo de \xe1gua gelada ou coma algo antes
3. Marque a hora e conte cada chute, rolamento ou empurr\xe3o
4. Espere chegar a **10 movimentos**

Se chegar a 10 em at\xe9 2 horas, seu padr\xe3o est\xe1 mantido. Anote o hor\xe1rio no aplicativo.

## Quando ligar

**Se voc\xea contar por 2 horas e n\xe3o chegar a 10 movimentos, v\xe1 para a maternidade no mesmo dia** e pe\xe7a uma cardiotocografia — o exame que registra os batimentos do beb\xea e as contra\xe7\xf5es. Leve seu cart\xe3o de pr\xe9-natal.

**Procure atendimento agora, sem esperar**, se voc\xea perceber uma redu\xe7\xe3o clara em rela\xe7\xe3o ao habitual, ou se os movimentos mudarem muito de car\xe1ter em um curto per\xedodo.

N\xe3o espere amanhecer, n\xe3o espere a consulta e n\xe3o tente adivinhar. Ir \xe0 maternidade e sair de l\xe1 com um exame normal \xe9 o desfecho que a gente quer. Nunca \xe9 inc\xf4modo.`,procedencia:r},{slug:"saude-emocional-na-gestacao",titulo:"Saúde emocional na gestação: nem tudo é hormônio",resumo:"Ansiedade, medo e ambivalência aparecem em muitas gestações. O que costuma ser oscilação e o que merece acompanhamento.",categoria:"gestacao",leitura:4,corpo:`Existe uma expectativa social de que gesta\xe7\xe3o \xe9 um per\xedodo de felicidade cont\xednua. Para muitas mulheres n\xe3o \xe9. Medo, ansiedade, irrita\xe7\xe3o e ambival\xeancia sobre a maternidade s\xe3o frequentes, e sentir isso n\xe3o faz de voc\xea uma m\xe3e pior.

## O que costuma acontecer

Oscila\xe7\xe3o de humor \xe9 comum, sobretudo no primeiro e no terceiro trimestre. Chorar por coisas pequenas, ficar mais irritada, ter sonhos v\xedvidos ou preocupa\xe7\xe3o exagerada com detalhes da rotina — nada disso \xe9 incomum. Ansiedade sobre o parto costuma crescer a partir de 28 semanas.

Tamb\xe9m \xe9 comum se sentir estranha em rela\xe7\xe3o ao pr\xf3prio corpo, sentir falta da vida de antes ou n\xe3o sentir a "conex\xe3o instant\xe2nea" que os outros descrevem. Isso n\xe3o prev\xea o v\xednculo que voc\xea ter\xe1 com o beb\xea.

## O que muda de categoria

N\xe3o \xe9 s\xf3 horm\xf4nio quando:

- A tristeza ou a ansiedade dura mais de duas semanas quase todos os dias
- Voc\xea perde o interesse por coisas que gostava
- N\xe3o consegue dormir mesmo quando tem oportunidade, ou dorme demais
- Tem crises com cora\xe7\xe3o acelerado, falta de ar e sensa\xe7\xe3o de que algo terr\xedvel vai acontecer
- Sente culpa constante ou acha que n\xe3o vai dar conta
- Tem pensamentos de se machucar

Depress\xe3o e ansiedade na gesta\xe7\xe3o s\xe3o frequentes e trat\xe1veis, e o tratamento \xe9 seguro na gesta\xe7\xe3o quando bem indicado. Elas tamb\xe9m aumentam a chance de depress\xe3o p\xf3s-parto, o que torna o diagn\xf3stico precoce ainda mais importante.

## O que fazer

Conte para a Dra. Cristiane. N\xe3o espere a pergunta chegar na consulta e n\xe3o minimize: descreva h\xe1 quanto tempo voc\xea se sente assim e o quanto isso atrapalha seu dia. A partir da\xed \xe9 poss\xedvel pensar em psicoterapia, em rede de apoio e, quando for o caso, em medica\xe7\xe3o — **nada disso deve ser iniciado ou interrompido por conta pr\xf3pria**. Se voc\xea j\xe1 usava antidepressivo antes de engravidar, n\xe3o pare sozinha: converse antes.

Se em algum momento surgir pensamento de morte ou de se machucar, ligue para o **CVV no 188**, gratuito e dispon\xedvel 24 horas, e avise algu\xe9m de confian\xe7a para ficar com voc\xea. Depois, entre em contato com a equipe no mesmo dia.`,procedencia:r},{slug:"atividade-fisica-na-gestacao",titulo:"Atividade física: o que continuar, o que ajustar",resumo:"Exercício na gestação é recomendado na maior parte dos casos. O que fazer, em que intensidade e quais sinais mandam parar.",categoria:"gestacao",leitura:4,corpo:`Para a maioria das gesta\xe7\xf5es sem complica\xe7\xe3o, manter-se ativa \xe9 recomendado. A pr\xe1tica regular est\xe1 associada a menos dor lombar, melhor controle do ganho de peso, menor risco de diabetes gestacional e melhor qualidade de sono.

A recomenda\xe7\xe3o geral \xe9 de cerca de 150 minutos por semana de atividade moderada, distribu\xeddos em v\xe1rios dias. Isso pode ser 30 minutos, cinco vezes por semana.

## O que costuma funcionar bem

- **Caminhada** — a mais acess\xedvel, ajust\xe1vel em ritmo e dura\xe7\xe3o
- **Nata\xe7\xe3o e hidrogin\xe1stica** — a \xe1gua tira peso das articula\xe7\xf5es e ajuda no incha\xe7o
- **Bicicleta ergom\xe9trica** — est\xe1vel, sem risco de queda
- **Muscula\xe7\xe3o com carga moderada** — mantendo a respira\xe7\xe3o livre, sem prender o ar no esfor\xe7o
- **Pilates e ioga adaptados para gestantes**
- **Exerc\xedcios de assoalho p\xe9lvico** — treinam a musculatura que sustenta bexiga e \xfatero

## Como calibrar a intensidade

Use o teste da fala: voc\xea deve conseguir manter uma conversa enquanto se exercita. Se n\xe3o consegue falar frases inteiras, reduza. A frequ\xeancia card\xedaca isolada n\xe3o \xe9 bom guia na gesta\xe7\xe3o.

Se voc\xea j\xe1 treinava em alta intensidade antes de engravidar, converse com a Dra. Cristiane sobre manter parte disso — a orienta\xe7\xe3o para quem j\xe1 era ativa \xe9 diferente de quem est\xe1 come\xe7ando.

## O que evitar

- Esportes de contato e situa\xe7\xf5es com risco de queda, como skate, hipismo e esqui
- Mergulho com cilindro
- Exerc\xedcio deitada de barriga para cima por per\xedodos longos, depois do segundo trimestre
- Exerc\xedcio em calor extremo, sauna e banho de imers\xe3o muito quente
- Altitude elevada sem orienta\xe7\xe3o pr\xe9via

## Pare e ligue para a equipe se aparecer

- Sangramento vaginal
- Perda de l\xedquido
- Contra\xe7\xf5es dolorosas e regulares
- Dor no peito, falta de ar antes do esfor\xe7o, tontura ou desmaio
- Dor de cabe\xe7a forte
- Dor ou incha\xe7o na panturrilha de uma perna s\xf3
- Fraqueza muscular que atrapalhe o equil\xedbrio

## Antes de come\xe7ar

Existem situa\xe7\xf5es em que o exerc\xedcio \xe9 limitado ou contraindicado, como placenta pr\xe9via com sangramento, risco de parto prematuro, press\xe3o alta n\xe3o controlada e alguns casos de gesta\xe7\xe3o m\xfaltipla. Por isso: leve seu plano de treino para a consulta e confirme com a Dra. Cristiane o que serve para o seu caso.`,procedencia:r},{slug:"ultrassom-morfologico",titulo:"Ultrassom morfológico: o que ele avalia e quando fazer",resumo:"É o ultrassom mais detalhado da gestação. Tem duas janelas com prazo curto e não dá para remarcar depois.",categoria:"exames",leitura:4,corpo:`O ultrassom morfol\xf3gico examina a forma\xe7\xe3o do beb\xea \xf3rg\xe3o por \xf3rg\xe3o. \xc9 diferente do ultrassom de rotina, que avalia crescimento e batimentos. Ele exige mais tempo, equipamento adequado e profissional treinado.

## S\xe3o duas janelas, com prazo

**Morfol\xf3gico de primeiro trimestre — entre 11 e 14 semanas.** Avalia a forma\xe7\xe3o inicial e mede a transluc\xeancia nucal, uma pequena camada de l\xedquido atr\xe1s do pesco\xe7o do beb\xea. Essa medida, combinada com o osso nasal, o fluxo em determinados vasos e \xe0s vezes com exames de sangue, comp\xf5e o rastreamento de altera\xe7\xf5es cromoss\xf4micas. Tamb\xe9m \xe9 o melhor momento para confirmar a idade gestacional e o n\xfamero de beb\xeas.

**Morfol\xf3gico de segundo trimestre — entre 20 e 24 semanas.** \xc9 o exame mais detalhado. Avalia c\xe9rebro, cora\xe7\xe3o, rins, est\xf4mago, bexiga, coluna, parede da barriga, face, bra\xe7os e pernas. Mede tamb\xe9m o comprimento do colo do \xfatero, a posi\xe7\xe3o da placenta e a quantidade de l\xedquido.

**As duas janelas s\xe3o curtas de prop\xf3sito**: fora delas, as estruturas ou ainda n\xe3o est\xe3o formadas o suficiente ou j\xe1 n\xe3o s\xe3o bem visualizadas. Se a data passar, n\xe3o h\xe1 como refazer o mesmo exame depois. Confirme o agendamento assim que o pedido for emitido.

## Como \xe9 o exame

Dura de 30 a 60 minutos, mais que um ultrassom comum. Costuma ser feito pela barriga, com gel, e em alguns casos por via vaginal para ver bem o colo do \xfatero. N\xe3o d\xf3i e n\xe3o exige jejum. Em geral \xe9 pedido que voc\xea chegue com a bexiga parcialmente cheia — confirme a orienta\xe7\xe3o da cl\xednica ao agendar.

## Sobre o resultado

O morfol\xf3gico \xe9 um exame de rastreamento, n\xe3o um diagn\xf3stico definitivo. Ele identifica a maior parte das altera\xe7\xf5es estruturais importantes, mas n\xe3o todas. Um exame sem achados reduz muito a chance de problema, sem elimin\xe1-la.

Se aparecer algum achado, isso n\xe3o define o desfecho sozinho. Muitos achados s\xe3o leves e sem consequ\xeancia; outros levam a exames complementares ou a acompanhamento em servi\xe7o especializado.

**N\xe3o interprete o laudo sozinha e n\xe3o pesquise os termos na internet antes de conversar.** Envie o resultado pelo aplicativo e agende o retorno: a leitura \xe9 sempre da Dra. Cristiane, com o seu contexto na m\xe3o.`,procedencia:r},{slug:"curva-glicemica",titulo:"Curva glicêmica: como se preparar e o que o resultado significa",resumo:"O teste que investiga diabetes gestacional é feito entre 24 e 28 semanas, exige jejum e leva cerca de duas horas.",categoria:"exames",leitura:4,corpo:`O teste oral de toler\xe2ncia \xe0 glicose, conhecido como curva glic\xeamica, verifica como seu corpo lida com o a\xe7\xfacar durante a gesta\xe7\xe3o. Ele investiga o diabetes gestacional, uma altera\xe7\xe3o que costuma n\xe3o dar nenhum sintoma — por isso o rastreamento \xe9 feito em todas as gestantes, e n\xe3o apenas em quem tem fatores de risco.

## Quando \xe9 feito

Entre **24 e 28 semanas**. Se voc\xea tiver fatores de risco, a Dra. Cristiane pode pedir uma avalia\xe7\xe3o da glicemia j\xe1 no primeiro trimestre e repetir o teste completo depois.

## Como se preparar

- **Jejum de 8 a 12 horas.** \xc1gua pura \xe9 permitida.
- Nos tr\xeas dias anteriores, **coma normalmente**. Cortar carboidrato antes do exame n\xe3o "melhora" o resultado — atrapalha a interpreta\xe7\xe3o e pode gerar um resultado falso.
- N\xe3o fume e evite atividade f\xedsica intensa na manh\xe3 do exame.
- Leve o pedido, um casaco e algo para se distrair: voc\xea ficar\xe1 cerca de duas horas no laborat\xf3rio.
- Avise o laborat\xf3rio se voc\xea usa algum medicamento cont\xednuo, e confirme com a equipe se deve tom\xe1-lo naquela manh\xe3.

## Como \xe9 o exame

S\xe3o tr\xeas coletas de sangue. A primeira em jejum. Depois voc\xea bebe uma solu\xe7\xe3o doce, com 75 gramas de glicose, em at\xe9 cinco minutos. Novas coletas s\xe3o feitas 1 hora e 2 horas depois. **Voc\xea precisa permanecer no laborat\xf3rio, sentada, entre as coletas** — caminhar, comer ou fumar altera o resultado.

A solu\xe7\xe3o costuma ser enjoativa. Se voc\xea vomitar, avise imediatamente: o exame precisar\xe1 ser remarcado.

## O que o resultado significa

Basta **um** dos tr\xeas valores estar acima do limite para o diagn\xf3stico de diabetes gestacional. Os pontos de corte usados no Brasil s\xe3o 92 mg/dL em jejum, 180 mg/dL na primeira hora e 153 mg/dL na segunda.

Receber esse diagn\xf3stico n\xe3o \xe9 falha sua. Ele acontece porque horm\xf4nios da placenta aumentam a resist\xeancia \xe0 insulina, e nem todo corpo compensa isso. A maioria dos casos \xe9 controlada com ajuste alimentar e atividade f\xedsica; parte precisa de medica\xe7\xe3o.

Envie o resultado pelo aplicativo assim que sair e agende o retorno com a Dra. Cristiane. **N\xe3o inicie dieta restritiva nem qualquer medica\xe7\xe3o por conta pr\xf3pria** — o plano \xe9 individual e envolve nutri\xe7\xe3o, monitoramento de glicemia em casa e ajuste do acompanhamento.`,procedencia:r},{slug:"exames-de-sangue-de-rotina",titulo:"Exames de sangue de rotina: para que serve cada um",resumo:"Hemograma, tipagem, glicemia, tireoide e urina. O que a equipe está procurando em cada exame do pré-natal.",categoria:"exames",leitura:4,corpo:`Os exames de sangue do pr\xe9-natal se repetem ao longo da gesta\xe7\xe3o porque o corpo muda. Um resultado normal no primeiro trimestre n\xe3o garante o mesmo no terceiro. Entender para que cada um serve ajuda voc\xea a acompanhar seu pr\xf3prio cuidado.

## O que costuma ser pedido

**Hemograma completo.** Avalia gl\xf3bulos vermelhos, brancos e plaquetas. Serve principalmente para identificar anemia, muito comum na gesta\xe7\xe3o porque a demanda de ferro aumenta. Tamb\xe9m mostra sinais de infec\xe7\xe3o e acompanha as plaquetas, importantes na hora do parto.

**Tipagem sangu\xednea e fator Rh.** Define seu tipo de sangue. Se o seu Rh for negativo e o do pai for positivo, existe a possibilidade de o organismo produzir anticorpos contra o sangue do beb\xea. Nesse caso a equipe solicita o **Coombs indireto** periodicamente e programa a aplica\xe7\xe3o de imunoglobulina anti-D, em geral por volta de 28 semanas e depois do parto.

**Glicemia de jejum.** Uma primeira leitura do a\xe7\xfacar no sangue, no in\xedcio da gesta\xe7\xe3o. N\xe3o substitui a curva glic\xeamica de 24 a 28 semanas.

**Fun\xe7\xe3o da tireoide (TSH e, quando indicado, T4 livre).** A tireoide influencia o desenvolvimento do beb\xea, e a gesta\xe7\xe3o altera a demanda desse horm\xf4nio. Altera\xe7\xf5es s\xe3o trat\xe1veis e o ajuste \xe9 feito por exame, n\xe3o por sintoma.

**Urina tipo 1 e urocultura.** Procuram infec\xe7\xe3o urin\xe1ria. Na gesta\xe7\xe3o, mesmo uma infec\xe7\xe3o **sem nenhum sintoma** precisa ser tratada, porque est\xe1 associada a parto prematuro. A urocultura identifica a bact\xe9ria e orienta o antibi\xf3tico.

**Ferritina.** Mede o estoque de ferro do corpo. Pode estar baixa antes mesmo de a anemia aparecer no hemograma.

## Como acompanhar

- Confira no m\xf3dulo de Exames o que est\xe1 pendente e o prazo de cada um
- Verifique se o exame exige jejum antes de sair de casa
- Envie o resultado pelo aplicativo assim que ele sair, mesmo que a consulta esteja longe
- Guarde uma c\xf3pia impressa na pasta que vai para a maternidade

**N\xe3o conclua nada a partir de um valor fora da faixa de refer\xeancia do laborat\xf3rio.** V\xe1rios limites mudam na gesta\xe7\xe3o, e um n\xfamero isolado n\xe3o significa a mesma coisa que significaria fora dela. A leitura \xe9 sempre da Dra. Cristiane. Se algo no resultado preocupar voc\xea, mande um recado e a equipe responde antes da consulta.`,procedencia:r},{slug:"exames-infecciosos",titulo:"Exames infecciosos: o que são as sorologias do pré-natal",resumo:"HIV, sífilis, hepatites, toxoplasmose e rubéola. Por que esses exames se repetem e o que muda quando algo é detectado.",categoria:"exames",leitura:4,corpo:`As sorologias s\xe3o exames de sangue que verificam se voc\xea teve contato com determinadas infec\xe7\xf5es. Elas fazem parte do pr\xe9-natal de todas as gestantes, independentemente de hist\xf3rico ou de estilo de vida. O motivo \xe9 simples: v\xe1rias dessas infec\xe7\xf5es n\xe3o d\xe3o sintoma na m\xe3e e podem afetar o beb\xea — e quase todas t\xeam o que fazer quando identificadas a tempo.

## O que \xe9 pesquisado

**HIV.** Solicitado no primeiro e no terceiro trimestre, e novamente na maternidade. Com tratamento adequado durante a gesta\xe7\xe3o, a chance de transmiss\xe3o para o beb\xea cai para menos de 1%.

**S\xedfilis (VDRL ou teste trepon\xeamico).** Repetido em cada trimestre e na interna\xe7\xe3o. \xc9 trat\xe1vel na gesta\xe7\xe3o com antibi\xf3tico, e o tratamento protege o beb\xea. O parceiro tamb\xe9m precisa ser tratado.

**Hepatite B e hepatite C.** Identificam infec\xe7\xe3o ativa ou passada. No caso da hepatite B, o beb\xea recebe vacina e imunoglobulina logo ap\xf3s o nascimento, o que reduz muito a transmiss\xe3o.

**Toxoplasmose (IgG e IgM).** Se o resultado mostrar que voc\xea nunca teve contato, voc\xea \xe9 considerada suscet\xedvel e o exame se repete ao longo da gesta\xe7\xe3o. Nesse caso valem os cuidados de preven\xe7\xe3o: carne sempre bem passada, verduras e frutas bem lavadas, luvas para mexer em terra e cuidado com a caixa de areia do gato — se poss\xedvel, delegue essa tarefa.

**Rub\xe9ola.** Verifica se voc\xea tem anticorpos. A vacina n\xe3o pode ser aplicada durante a gesta\xe7\xe3o, mas quem n\xe3o tem imunidade deve ser vacinada no p\xf3s-parto, antes de uma pr\xf3xima gesta\xe7\xe3o.

**Citomegalov\xedrus**, quando indicado pelo seu contexto.

## Por que repetir

Porque voc\xea pode ter contato com alguma dessas infec\xe7\xf5es **durante** a gesta\xe7\xe3o. Um resultado negativo no in\xedcio n\xe3o garante o mesmo em setembro. Por isso o pr\xe9-natal repete, e n\xe3o porque houve d\xfavida sobre voc\xea.

## Se algum resultado vier alterado

Isso n\xe3o define o desfecho da gesta\xe7\xe3o. Significa que existe uma conduta espec\xedfica, e que ela funciona melhor quanto antes come\xe7a. Nenhum desses diagn\xf3sticos \xe9 motivo para julgamento: eles s\xe3o tratados como qualquer outro achado do pr\xe9-natal, com sigilo.

Envie o resultado pelo aplicativo e agende o retorno com a Dra. Cristiane. Se voc\xea tiver d\xfavida sobre o significado de uma sigla no laudo, mande um recado — a equipe responde antes da consulta.`,procedencia:r},{slug:"tipos-de-parto",titulo:"Tipos de parto: o que muda entre eles",resumo:"Parto normal, cesárea e as situações intermediárias. O que cada via envolve, o que influencia a decisão e o que é seu para escolher.",categoria:"parto",leitura:5,corpo:`A escolha da via de parto \xe9 uma decis\xe3o conjunta: voc\xea, com informa\xe7\xe3o, e a Dra. Cristiane, com o quadro cl\xednico. Ela merece ser conversada bem antes do dia, e revisada conforme a gesta\xe7\xe3o avan\xe7a.

## Parto normal (vaginal)

O beb\xea nasce pelo canal vaginal. O trabalho de parto pode come\xe7ar espontaneamente ou ser induzido.

O que costuma acompanhar: recupera\xe7\xe3o mais r\xe1pida, menos dor nos dias seguintes, alta hospitalar mais cedo, menor risco de infec\xe7\xe3o e de complica\xe7\xf5es em gesta\xe7\xf5es futuras. Para o beb\xea, a passagem pelo canal ajuda a eliminar l\xedquido dos pulm\xf5es e favorece a coloniza\xe7\xe3o por bact\xe9rias maternas.

O que considerar: o trabalho de parto pode ser longo e imprevis\xedvel. Pode haver lacera\xe7\xe3o do per\xedneo. Em uma parcela dos casos \xe9 necess\xe1rio converter para ces\xe1rea durante o processo — isso n\xe3o \xe9 falha, \xe9 conduta.

**Al\xedvio da dor.** A analgesia de parto, aplicada nas costas, \xe9 uma op\xe7\xe3o segura e dispon\xedvel na maioria dos servi\xe7os. Ela n\xe3o impede voc\xea de fazer for\xe7a nem atrasa o parto de forma relevante. Converse sobre isso antes, e n\xe3o em contra\xe7\xe3o.

## Parto normal assistido

Quando o beb\xea est\xe1 quase nascendo e \xe9 preciso ajudar a sa\xedda, pode ser usado f\xf3rceps ou v\xe1cuo-extrator. \xc9 uma alternativa \xe0 ces\xe1rea em fase avan\xe7ada e tem indica\xe7\xf5es espec\xedficas.

## Ces\xe1rea

Cirurgia com incis\xe3o na barriga e no \xfatero, feita com anestesia regional na maior parte dos casos — voc\xea fica acordada.

Existem situa\xe7\xf5es em que a ces\xe1rea \xe9 claramente a via indicada: placenta cobrindo o colo, beb\xea atravessado, algumas ces\xe1reas anteriores, sofrimento fetal, entre outras.

O que considerar: recupera\xe7\xe3o mais longa, mais dor nos primeiros dias, maior risco de infec\xe7\xe3o e de trombose, e impacto sobre gesta\xe7\xf5es futuras. A amamenta\xe7\xe3o pode demorar um pouco mais para engrenar.

## O que a evid\xeancia sustenta

Ces\xe1rea sem indica\xe7\xe3o cl\xednica, marcada apenas por conveni\xeancia de data, est\xe1 associada a mais complica\xe7\xf5es para voc\xea e para o beb\xea do que o parto normal. Isso n\xe3o significa que ces\xe1rea seja um mau desfecho — significa que ela deve ter motivo.

## O que levar para a consulta

- Nas minhas condi\xe7\xf5es de hoje, qual via voc\xea recomenda e por qu\xea?
- O que faria voc\xea mudar essa recomenda\xe7\xe3o?
- Como funciona a analgesia no servi\xe7o onde vou parir?
- Se eu j\xe1 tive ces\xe1rea, posso tentar parto normal desta vez?

Registre a conversa no seu plano de parto e revise-o a cada consulta do terceiro trimestre.`,procedencia:r},{slug:"sinais-de-trabalho-de-parto",titulo:"Sinais de trabalho de parto: como distinguir do alarme falso",resumo:"Contração de treinamento, tampão mucoso, bolsa rota. O que é aviso, o que é começo e o que é para ir agora.",categoria:"parto",leitura:4,corpo:`Muitas mulheres v\xe3o \xe0 maternidade e voltam para casa antes do parto. Isso \xe9 comum e n\xe3o \xe9 vexame. Ainda assim, conhecer os sinais ajuda voc\xea a decidir com mais seguran\xe7a.

## Contra\xe7\xf5es de treinamento

Tamb\xe9m chamadas de Braxton Hicks. A barriga endurece por alguns segundos e relaxa. Caracter\xedsticas:

- **Irregulares**: n\xe3o mant\xeam intervalo
- N\xe3o ficam mais fortes com o tempo
- Costumam melhorar se voc\xea mudar de posi\xe7\xe3o, caminhar ou tomar banho morno
- Incomodam mais do que doem

## Contra\xe7\xf5es de trabalho de parto

- **Regulares**: mant\xeam e reduzem o intervalo
- Ficam progressivamente mais fortes e mais longas
- N\xe3o melhoram com mudan\xe7a de posi\xe7\xe3o nem com banho
- A dor costuma come\xe7ar nas costas e irradiar para a frente

A refer\xeancia pr\xe1tica mais usada: contra\xe7\xf5es a cada **5 minutos**, durando cerca de **1 minuto**, por **1 hora** seguida. Se voc\xea j\xe1 teve filhos, o processo pode ser mais r\xe1pido — combine seu limite com a Dra. Cristiane.

## Perda do tamp\xe3o mucoso

Um corrimento espesso e gelatinoso, transparente, amarelado ou com raias de sangue. Indica que o colo est\xe1 se modificando, mas **n\xe3o** significa que o parto vai come\xe7ar nas pr\xf3ximas horas. Pode acontecer dias ou semanas antes.

Se vier sangue vermelho vivo em quantidade, ligue para a equipe e descreva o volume antes de sair de casa.

## Bolsa rota

Perda de l\xedquido pela vagina, em jato ou aos poucos, que continua molhando a roupa \xedntima e n\xe3o tem cheiro de urina. **\xc9 motivo para ir \xe0 maternidade agora, mesmo sem contra\xe7\xe3o.**

Anote o **hor\xe1rio** em que come\xe7ou e a **cor** do l\xedquido. L\xedquido claro \xe9 o esperado. Esverdeado, amarronzado ou com sangue precisa ser informado na chegada. N\xe3o use ducha, n\xe3o use absorvente interno e n\xe3o tente conferir com o dedo.

## Sinais de que ainda n\xe3o \xe9 hora

Contra\xe7\xf5es que somem quando voc\xea deita e descansa. Dor lombar sem ritmo. Aumento de corrimento sem l\xedquido escorrendo. Nesses casos, descanse, hidrate-se e reavalie em uma hora.

## Ligue para a equipe antes de sair

Sempre que houver d\xfavida, ligue. Descreva o intervalo entre as contra\xe7\xf5es, h\xe1 quanto tempo elas come\xe7aram, se houve perda de l\xedquido ou sangue, e como est\xe1 a movimenta\xe7\xe3o do beb\xea. A equipe orienta se \xe9 hora de ir.`,procedencia:r},{slug:"quando-ir-para-a-maternidade",titulo:"Quando ir para a maternidade",resumo:"A lista objetiva do que faz você sair de casa agora, do que exige um telefonema antes e do que pode esperar.",categoria:"parto",leitura:3,corpo:`Guarde este artigo nos favoritos e mostre para quem vai com voc\xea. Ele existe para ser lido \xe0s 3 da manh\xe3.

## V\xe1 agora, sem esperar

- **Bolsa rota**: perda de l\xedquido, em jato ou cont\xednua. Anote o hor\xe1rio e a cor.
- **Contra\xe7\xf5es a cada 5 minutos, com 1 minuto de dura\xe7\xe3o, por 1 hora**
- **Sangramento vermelho vivo** em quantidade, ou com co\xe1gulos
- **Redu\xe7\xe3o clara dos movimentos do beb\xea** em rela\xe7\xe3o ao padr\xe3o dele
- **Dor de cabe\xe7a forte com vis\xe3o emba\xe7ada**, pontos brilhantes ou dor no alto da barriga do lado direito
- **Febre acima de 38 graus**
- **Dor abdominal forte e cont\xednua**, sem pausa entre as contra\xe7\xf5es
- Qualquer sensa\xe7\xe3o de que **algo mudou muito** e voc\xea n\xe3o consegue explicar

Nesse \xfaltimo caso, v\xe1. Sua percep\xe7\xe3o conta como informa\xe7\xe3o cl\xednica.

## Ligue para a equipe antes de decidir

- Contra\xe7\xf5es regulares mas ainda espa\xe7adas, a cada 10 ou 15 minutos
- Perda do tamp\xe3o mucoso com pouco sangue
- D\xfavida se o l\xedquido \xe9 urina ou bolsa
- Queda leve na movimenta\xe7\xe3o, ainda dentro do padr\xe3o

## Antes de sair de casa

1. **Pegue a pasta de documentos**: identidade, cart\xe3o do conv\xeanio, cart\xe3o de pr\xe9-natal e os exames do terceiro trimestre, incluindo o do estreptococo do grupo B
2. **Pegue a mala** — ela j\xe1 deve estar pronta desde a semana 36
3. **Avise a equipe** pelo telefone e informe que voc\xea est\xe1 a caminho
4. **Anote o hor\xe1rio** do \xfaltimo movimento sentido e da \xfaltima refei\xe7\xe3o
5. N\xe3o dirija voc\xea mesma

## Ajuste o seu limite

V\xe1 antes do que diz a regra geral se:

- Voc\xea mora longe da maternidade ou o tr\xe2nsito \xe9 imprevis\xedvel
- J\xe1 teve um parto r\xe1pido antes
- Seu resultado do estreptococo do grupo B foi positivo, porque o antibi\xf3tico precisa de tempo para agir
- Sua gesta\xe7\xe3o tem alguma condi\xe7\xe3o em acompanhamento

Combine esse limite com a Dra. Cristiane na consulta de 36 semanas e anote a decis\xe3o no aplicativo.

## Se voc\xea chegar e n\xe3o estiver em trabalho de parto

Voc\xea ser\xe1 avaliada, provavelmente far\xe1 uma cardiotocografia (o exame que registra os batimentos do beb\xea e as contra\xe7\xf5es) e ser\xe1 liberada com orienta\xe7\xe3o. **Isso \xe9 um bom desfecho.** Ningu\xe9m na equipe considera isso inc\xf4modo, e voltar para casa n\xe3o impede voc\xea de voltar de novo no mesmo dia.`,procedencia:r},{slug:"plano-de-parto",titulo:"Plano de parto: como escrever um que funcione",resumo:"Um documento curto, realista e conversado com a equipe vale mais do que uma lista de exigências. O que incluir e como manter flexibilidade.",categoria:"parto",leitura:4,corpo:`Plano de parto \xe9 um documento em que voc\xea registra suas prefer\xeancias para o nascimento. Ele serve para organizar a conversa com a equipe e para que suas escolhas cheguem a quem estiver de plant\xe3o no dia. N\xe3o \xe9 contrato, e n\xe3o \xe9 garantia — \xe9 comunica\xe7\xe3o.

## O que faz um plano funcionar

- **Curto.** Uma p\xe1gina. Ningu\xe9m l\xea tr\xeas p\xe1ginas durante um plant\xe3o.
- **Priorizado.** Comece pelo que \xe9 inegoci\xe1vel para voc\xea, e deixe claro o que \xe9 prefer\xeancia.
- **Conversado antes.** Um plano que a Dra. Cristiane v\xea pela primeira vez no dia do parto perde metade da utilidade. Leve na consulta de 32 ou 36 semanas.
- **Compat\xedvel com o servi\xe7o.** Cada maternidade tem rotinas pr\xf3prias. Confirme o que \xe9 poss\xedvel onde voc\xea vai parir.
- **Com um plano B escrito.** Inclua suas prefer\xeancias para o caso de ces\xe1rea. Isso n\xe3o atrai azar, d\xe1 tranquilidade.

## O que costuma entrar

**Trabalho de parto**
- Quem voc\xea quer como acompanhante, e se haver\xe1 doula
- Liberdade para caminhar e mudar de posi\xe7\xe3o
- Prefer\xeancia sobre al\xedvio da dor: analgesia, banho morno, bola, massagem
- Prefer\xeancia sobre l\xedquidos e alimenta\xe7\xe3o leve
- Ambiente: luz, som, quem entra no quarto

**Nascimento**
- Posi\xe7\xe3o em que voc\xea prefere parir
- Prefer\xeancia quanto \xe0 episiotomia — hoje ela n\xe3o \xe9 feita de rotina
- Momento do corte do cord\xe3o: o clampeamento tardio, ap\xf3s 1 a 3 minutos, \xe9 a pr\xe1tica recomendada quando n\xe3o h\xe1 contraindica\xe7\xe3o
- Quem corta o cord\xe3o

**Primeira hora**
- Contato pele a pele imediato
- Primeira mamada ainda na sala
- Adiar procedimentos de rotina do beb\xea, quando poss\xedvel, at\xe9 a primeira mamada
- Acompanhamento do beb\xea pelo pai ou acompanhante se ele precisar sair da sala

**Se for ces\xe1rea**
- Acompanhante na sala
- Contato pele a pele na sala cir\xfargica
- Ver o momento do nascimento

## O que n\xe3o colocar

N\xe3o escreva exig\xeancias que impe\xe7am a equipe de agir em urg\xeancia. Um plano r\xedgido demais costuma ser ignorado por inteiro. Prefira frases do tipo "prefiro X; se n\xe3o for poss\xedvel, gostaria de ser informada do motivo".

## O que fazer com ele

Imprima **duas vias**, guarde na pasta de documentos da mala e leve uma c\xf3pia no celular. Revise com a Dra. Cristiane a cada consulta do terceiro trimestre — o que faz sentido \xe0s 32 semanas pode mudar \xe0s 39. Se alguma prefer\xeancia sua n\xe3o for poss\xedvel no seu caso, pe\xe7a para entender o motivo antes do dia.`,procedencia:r},{slug:"puerperio-primeiros-dias",titulo:"Puerpério: os primeiros dias em casa",resumo:"Sangramento, cólicas, cicatriz e exaustão. O que costuma acontecer nas primeiras semanas e o que exige telefonema.",categoria:"pos-parto",leitura:4,corpo:`O puerp\xe9rio \xe9 o per\xedodo de recupera\xe7\xe3o depois do parto. Ele dura em torno de seis a oito semanas, mas os primeiros dez dias concentram a maior parte das mudan\xe7as — e a maior parte dos sustos.

## O que costuma acontecer

**Sangramento (l\xf3quios).** Come\xe7a vermelho vivo e intenso, parecido com uma menstrua\xe7\xe3o forte, e vai clareando ao longo das semanas: rosado, depois amarelado, depois esbranqui\xe7ado. Pode aumentar quando voc\xea amamenta ou se esfor\xe7a. Co\xe1gulos pequenos s\xe3o frequentes nos primeiros dias.

**C\xf3licas.** O \xfatero se contrai para voltar ao tamanho anterior. Essas contra\xe7\xf5es costumam ser mais fortes durante a amamenta\xe7\xe3o e em quem j\xe1 teve filhos.

**Cicatriz.** No parto normal, os pontos do per\xedneo costumam incomodar mais entre o terceiro e o quinto dia. Na ces\xe1rea, a dor da incis\xe3o diminui de forma progressiva.

**Suor noturno e vontade de urinar muito.** O corpo elimina o l\xedquido acumulado na gesta\xe7\xe3o. \xc9 esperado nas primeiras duas semanas.

**Choro f\xe1cil.** Entre o terceiro e o quinto dia, a maioria das mulheres passa por uma fase de labilidade emocional. Costuma melhorar sozinha em at\xe9 duas semanas. Se n\xe3o melhorar, \xe9 outra conversa — veja o artigo sobre sa\xfade mental no p\xf3s-parto.

## Cuidados pr\xe1ticos

- Use absorvente p\xf3s-parto e troque a cada tr\xeas ou quatro horas. **N\xe3o use absorvente interno nem coletor.**
- Lave a regi\xe3o com \xe1gua e sabonete neutro no banho e seque bem, sem esfregar
- Beba \xe1gua durante toda a mamada — deixe uma garrafa perto da poltrona
- Descanse quando o beb\xea dorme, mesmo que a casa esteja bagun\xe7ada
- Aceite ajuda concreta: comida, roupa lavada, algu\xe9m segurando o beb\xea enquanto voc\xea toma banho
- **N\xe3o use nenhuma medica\xe7\xe3o, ch\xe1 ou pomada por conta pr\xf3pria**, principalmente se estiver amamentando

## Ligue para a equipe

**Agora, sem esperar:**
- Sangramento que encharca um absorvente por hora, por duas horas seguidas, ou co\xe1gulos maiores que um punho
- Febre acima de 38 graus
- Dor de cabe\xe7a forte ou vis\xe3o emba\xe7ada
- Dor, calor ou incha\xe7o em uma perna s\xf3, ou falta de ar s\xfabita

**No mesmo dia:**
- Sangramento com mau cheiro
- Cicatriz com secre\xe7\xe3o, vermelhid\xe3o que aumenta ou abertura
- Dificuldade ou dor para urinar
- Mama endurecida, quente e dolorida com febre

A consulta de revis\xe3o puerperal \xe9 parte do cuidado, n\xe3o formalidade. Confirme a data antes de sair da maternidade.`,procedencia:r},{slug:"amamentacao-pega-e-dor",titulo:"Amamentação: pega, dor e o que fazer quando dói",resumo:"Amamentar não deveria doer de forma persistente. Como reconhecer uma pega adequada e quando pedir ajuda.",categoria:"pos-parto",leitura:4,corpo:`Amamentar \xe9 aprendido, por voc\xea e pelo beb\xea. O desconforto dos primeiros segundos da mamada \xe9 frequente nos primeiros dias. **Dor durante toda a mamada, mamilo rachado ou sangrando n\xe3o \xe9 normal e quase sempre indica ajuste de pega.**

## Como \xe9 uma pega adequada

- A boca do beb\xea est\xe1 bem aberta, como um bocejo
- Ele abocanha o mamilo **e boa parte da ar\xe9ola**, n\xe3o s\xf3 a ponta
- O l\xe1bio inferior est\xe1 virado para fora
- O queixo toca a mama
- Voc\xea v\xea mais ar\xe9ola acima do l\xe1bio superior do que abaixo do inferior
- As bochechas ficam arredondadas, sem afundar
- Voc\xea ouve o beb\xea engolindo, em ritmo lento e ritmado
- Ao soltar, o mamilo sai arredondado, n\xe3o achatado nem em forma de bico

Se o mamilo sai amassado ou com um vinco branco, a pega precisa de corre\xe7\xe3o.

## Como corrigir

Interrompa a suc\xe7\xe3o colocando o dedo m\xednimo limpo no canto da boca do beb\xea — n\xe3o puxe. Reposicione: barriga do beb\xea encostada na sua, cabe\xe7a e corpo alinhados, nariz na altura do mamilo. Espere a boca abrir bem antes de aproximar.

Teste posi\xe7\xf5es diferentes: tradicional, invertida, deitada de lado. Uma delas costuma funcionar melhor para voc\xeas dois.

## Sinais de que est\xe1 indo bem

- Seis ou mais fraldas de xixi em 24 horas depois do quinto dia
- Evacua\xe7\xf5es amareladas e frequentes na primeira semana
- Beb\xea recuperando o peso de nascimento at\xe9 o d\xe9cimo quinto dia
- Beb\xea que solta a mama satisfeito

## Quando ligar para a equipe

**No mesmo dia:**
- Mamilo rachado, sangrando ou com dor que dura a mamada inteira
- Mama endurecida, avermelhada, quente e dolorida — sobretudo com febre acima de 38 graus, que pode indicar mastite e precisa de avalia\xe7\xe3o
- Beb\xea que n\xe3o consegue pegar a mama, chora na hora de mamar ou dorme em todas as mamadas
- Menos de seis fraldas de xixi em 24 horas depois do quinto dia

**N\xe3o interrompa a amamenta\xe7\xe3o por conta pr\xf3pria** e n\xe3o introduza f\xf3rmula, ch\xe1 ou bico sem conversar. Tamb\xe9m **n\xe3o use pomada, creme ou rem\xe9dio para dor sem confirmar** — nem tudo \xe9 compat\xedvel com a amamenta\xe7\xe3o.

Se voc\xea decidir n\xe3o amamentar, ou se n\xe3o for poss\xedvel, isso tamb\xe9m precisa de acompanhamento: a interrup\xe7\xe3o do leite tem manejo. Converse com a Dra. Cristiane sem medo de julgamento. A equipe pode indicar apoio com consultoria em amamenta\xe7\xe3o sempre que fizer diferen\xe7a.`,procedencia:r},{slug:"saude-mental-no-pos-parto",titulo:"Saúde mental no pós-parto: quando pedir ajuda",resumo:"Baby blues, depressão pós-parto e ansiedade. Como diferenciar, quanto tempo esperar e para quem ligar.",categoria:"pos-parto",leitura:4,corpo:`O p\xf3s-parto re\xfane priva\xe7\xe3o de sono, dor, mudan\xe7a hormonal abrupta e uma responsabilidade nova e permanente. Sentir-se sobrecarregada n\xe3o \xe9 fraqueza de car\xe1ter. Mas existe uma linha entre o que costuma passar sozinho e o que precisa de tratamento — e saber onde ela fica pode mudar meses da sua vida.

## Baby blues

Atinge entre 50% e 80% das mulheres. Come\xe7a por volta do terceiro dia ap\xf3s o parto e melhora sozinho **em at\xe9 duas semanas**.

Como se manifesta: choro f\xe1cil, oscila\xe7\xe3o de humor, irritabilidade, ansiedade leve, sensa\xe7\xe3o de estar sobrecarregada. Voc\xea continua conseguindo cuidar de si e do beb\xea, e h\xe1 momentos bons no meio.

O que ajuda: dormir sempre que poss\xedvel, aceitar ajuda concreta, comer com regularidade e falar sobre o que est\xe1 sentindo com algu\xe9m que n\xe3o julgue.

## Depress\xe3o p\xf3s-parto

Atinge cerca de uma em cada oito mulheres. Pode come\xe7ar logo ap\xf3s o parto ou at\xe9 um ano depois. **Diferente do baby blues, n\xe3o melhora sozinha.**

Sinais de alerta:
- Tristeza ou vazio na maior parte do dia, por **mais de duas semanas**
- Perda de interesse em tudo, inclusive no beb\xea
- Culpa intensa ou sensa\xe7\xe3o de ser uma m\xe3e ruim
- Incapacidade de dormir mesmo quando o beb\xea dorme, ou sono excessivo
- Falta de apetite ou comer compulsivamente
- Dificuldade de se concentrar ou de tomar decis\xf5es simples
- Afastamento das pessoas
- Pensamentos de fuga, de morte ou de se machucar

Ansiedade p\xf3s-parto tamb\xe9m \xe9 frequente: preocupa\xe7\xe3o constante, checagem repetida do beb\xea, cora\xe7\xe3o acelerado, pensamentos assustadores e intrusivos. Ter esses pensamentos n\xe3o significa que voc\xea far\xe1 algo — mas significa que voc\xea precisa contar para algu\xe9m.

## O que fazer

Depress\xe3o e ansiedade p\xf3s-parto **t\xeam tratamento e ele funciona**. Psicoterapia, rede de apoio e, quando indicado, medica\xe7\xe3o — inclusive op\xe7\xf5es compat\xedveis com a amamenta\xe7\xe3o. Nada disso deve ser iniciado ou interrompido por conta pr\xf3pria.

**Ligue para a Dra. Cristiane hoje** se qualquer item da lista acima descreve voc\xea. N\xe3o espere a consulta de revis\xe3o. Voc\xea tamb\xe9m pode mandar um recado pelo aplicativo descrevendo h\xe1 quanto tempo se sente assim.

Se voc\xea tiver pensamentos de morte, de se machucar ou de machucar o beb\xea, **ligue agora para o CVV no 188** — atendimento gratuito, sigiloso, 24 horas por dia, todos os dias. Pe\xe7a que algu\xe9m de confian\xe7a fique com voc\xea e n\xe3o fique sozinha at\xe9 conseguir ajuda. Em emerg\xeancia, ligue 192 para o SAMU.`,procedencia:r},{slug:"sexo-na-gestacao",titulo:"Sexo na gestação: o que muda e o que não é problema",resumo:"Desejo que sobe, desce ou some. Dúvidas sobre machucar o bebê, sangramento e contração. Respostas diretas.",categoria:"vergonha",leitura:4,corpo:`Essa \xe9 uma das perguntas que menos aparecem na consulta e mais aparecem no Google de madrugada. Ent\xe3o vamos direto ao ponto.

## Pode?

Na gesta\xe7\xe3o sem intercorr\xeancia, sim, do come\xe7o ao fim. N\xe3o h\xe1 motivo para suspender a vida sexual s\xf3 porque voc\xea est\xe1 gr\xe1vida.

O beb\xea n\xe3o \xe9 atingido. Ele est\xe1 protegido pelo l\xedquido amni\xf3tico, pela parede do \xfatero e pelo tamp\xe3o mucoso, que fecha o colo. O p\xeanis n\xe3o alcan\xe7a o beb\xea.

## Quando n\xe3o pode

Existem situa\xe7\xf5es em que a Dra. Cristiane pode orientar abstin\xeancia ou restri\xe7\xe3o — e nesses casos ela vai dizer isso a voc\xea de forma expl\xedcita:

- Placenta pr\xe9via, quando a placenta cobre o colo do \xfatero
- Sangramento vaginal em investiga\xe7\xe3o
- Bolsa rota
- Risco de parto prematuro ou colo curto
- Hist\xf3rico de perdas gestacionais em investiga\xe7\xe3o
- Infec\xe7\xe3o sexualmente transmiss\xedvel ativa, sua ou do parceiro

Se voc\xea tem alguma dessas condi\xe7\xf5es e n\xe3o conversou sobre isso, pergunte na pr\xf3xima consulta. Se a orienta\xe7\xe3o for restringir, pergunte tamb\xe9m o que exatamente est\xe1 restrito: penetra\xe7\xe3o, orgasmo, ou tudo.

## O desejo muda — e isso \xe9 sobre voc\xea, n\xe3o sobre o relacionamento

No primeiro trimestre, enjoo, cansa\xe7o e mamas doloridas costumam derrubar a libido. No segundo, muitas mulheres relatam aumento do desejo, com mais lubrifica\xe7\xe3o e maior sensibilidade pelo aumento do fluxo de sangue na pelve. No terceiro, o volume da barriga e o cansa\xe7o costumam reduzir de novo.

Qualquer desses cen\xe1rios \xe9 frequente, inclusive o desejo que simplesmente some. Vale conversar com seu parceiro sobre isso em vez de deixar virar mal-entendido.

## O que costuma assustar e tem explica\xe7\xe3o

**C\xf3lica leve ou contra\xe7\xe3o depois do orgasmo.** O orgasmo provoca contra\xe7\xf5es uterinas. Em gesta\xe7\xe3o sem risco, elas costumam ser passageiras e cedem em alguns minutos de repouso. Se as contra\xe7\xf5es continuarem, ficarem regulares ou doerem, ligue para a equipe.

**Pequeno sangramento ap\xf3s a rela\xe7\xe3o.** O colo do \xfatero fica mais vascularizado e sangra com mais facilidade ao contato. Ainda assim, **todo sangramento deve ser comunicado**: avise a equipe no mesmo dia, descrevendo a quantidade e a cor.

## Ajustes pr\xe1ticos

Posi\xe7\xf5es que tirem peso da barriga funcionam melhor a partir do segundo trimestre: de lado, voc\xea por cima, ou de quatro. Lubrificante \xe0 base de \xe1gua ajuda quando h\xe1 ressecamento. Preservativo continua indicado com parceiro novo ou sem exames recentes — infec\xe7\xe3o sexualmente transmiss\xedvel na gesta\xe7\xe3o afeta o beb\xea.

E sexo oral \xe9 permitido, com uma exce\xe7\xe3o importante: **n\xe3o se deve soprar ar dentro da vagina**, porque isso pode causar embolia. Fora isso, n\xe3o h\xe1 restri\xe7\xe3o.

Se ficou alguma d\xfavida, escreva no aplicativo. Nenhuma pergunta sobre isso \xe9 fora de lugar aqui.`,procedencia:r},{slug:"intestino-hemorroida-e-gases",titulo:"Intestino, hemorroida e gases: a conversa que ninguém puxa",resumo:"Prisão de ventre, hemorroida e gases afetam a maior parte das gestações e quase nunca são mencionados. O que fazer com cada um.",categoria:"vergonha",leitura:4,corpo:`Pris\xe3o de ventre atinge boa parte das gestantes. Hemorroida aparece em cerca de um ter\xe7o delas. Gases s\xe3o quase universais. Nada disso costuma ser mencionado na consulta, e nada disso \xe9 motivo de constrangimento — s\xe3o consequ\xeancias previs\xedveis do que a gesta\xe7\xe3o faz com o corpo.

## Por que acontece

A progesterona relaxa a musculatura do intestino, e ele passa a se mover mais devagar. Com o tr\xe2nsito mais lento, o corpo absorve mais \xe1gua das fezes, que ficam ressecadas. O \xfatero crescendo comprime o intestino. E o suplemento de ferro, quando indicado, agrava tudo isso.

O mesmo relaxamento retarda a digest\xe3o e produz mais g\xe1s, e a compress\xe3o do \xfatero completa o desconforto.

## Pris\xe3o de ventre: o que costuma ajudar

- **\xc1gua ao longo do dia inteiro.** Fibra sem \xe1gua piora a situa\xe7\xe3o.
- **Fibras**: frutas com casca, verduras, aveia, feij\xe3o, sementes de chia e linha\xe7a. Ameixa, mam\xe3o e kiwi funcionam bem para muitas mulheres.
- **Movimento**: caminhada di\xe1ria, mesmo curta, estimula o intestino.
- **Hor\xe1rio fixo**: sente-se no vaso ap\xf3s uma refei\xe7\xe3o, sem pressa e sem celular. O reflexo intestinal \xe9 maior depois de comer.
- **Apoie os p\xe9s** em um banquinho baixo, o que melhora o \xe2ngulo de evacua\xe7\xe3o.
- **N\xe3o segure a vontade.**

**Nenhum laxante deve ser usado por conta pr\xf3pria.** Alguns s\xe3o inadequados na gesta\xe7\xe3o e outros podem estimular contra\xe7\xf5es. Se o ferro for o problema principal, converse com a Dra. Cristiane — existem formas de ajustar isso.

## Hemorroida

S\xe3o veias dilatadas na regi\xe3o anal, causadas pela press\xe3o do \xfatero e pelo esfor\xe7o para evacuar. Podem causar dor, coceira, sensa\xe7\xe3o de n\xf3dulo e sangue vivo no papel.

O que costuma aliviar:
- Tratar a pris\xe3o de ventre — \xe9 a medida mais eficaz
- Banho de assento com \xe1gua morna por 10 a 15 minutos, algumas vezes ao dia
- Compressa fria por alguns minutos, se houver incha\xe7o
- Evitar ficar muito tempo sentada no vaso
- Limpar com \xe1gua ou len\xe7o \xfamido sem \xe1lcool, em vez de papel seco

**N\xe3o use pomada sem confirmar com a equipe.** Algumas cont\xeam subst\xe2ncias inadequadas na gesta\xe7\xe3o.

Ligue para a equipe no mesmo dia se houver dor intensa e s\xfabita com n\xf3dulo endurecido, sangramento em quantidade, ou sangue misturado \xe0s fezes e n\xe3o apenas no papel.

## Gases

Coma devagar, mastigue bem e evite falar durante a refei\xe7\xe3o — voc\xea engole ar. Reduza bebida com g\xe1s e canudo. Identifique quais alimentos s\xe3o gatilho para voc\xea, sem cortar grupos inteiros por conta pr\xf3pria. Caminhar depois de comer ajuda.

Se houver dor abdominal forte, sem al\xedvio e associada a v\xf4mito ou parada de elimina\xe7\xe3o de gases e fezes, procure atendimento agora — isso n\xe3o \xe9 g\xe1s.`,procedencia:r}];e.s(["ARTIGOS",0,s],96809);let i={gestacao:"Gestação",exames:"Exames",parto:"Parto","pos-parto":"Pós-parto",bebe:"Bebê",vergonha:"Sem vergonha de perguntar"};function t(e){return`/biblioteca/artigo/?slug=${e}`}function n(e){return`${e} min de leitura`}let d=["var(--cravo-rosa)","var(--agua-eletrica)","var(--creme-de-limao)","var(--polen-dourado)","var(--malva)"];function m({artigo:e,indice:r}){return(0,a.jsxs)(o.default,{href:t(e.slug),className:"tap flex w-[15.5rem] flex-col justify-between rounded-[var(--radius-lg)] p-4",style:{background:d[r%d.length]},children:[(0,a.jsx)("span",{className:"text-[length:var(--title-3)] font-semibold leading-snug",style:{color:"var(--preto-carbono)"},children:e.titulo}),(0,a.jsx)("span",{className:"mt-6 text-[length:var(--body-sm)]",style:{color:"var(--preto-carbono)",opacity:.75},children:n(e.leitura)})]})}e.s(["LinhaArtigo",0,function({artigo:e}){return(0,a.jsxs)(o.default,{href:t(e.slug),className:"tap block rounded-[var(--radius-md)] bg-card p-4 hover:bg-card-alt",children:[(0,a.jsx)("p",{className:"text-[length:var(--title-3)] font-medium leading-snug text-strong",children:e.titulo}),(0,a.jsx)("p",{className:"mt-1.5 text-[length:var(--body)] leading-relaxed text-muted",children:e.resumo}),(0,a.jsxs)("p",{className:"mt-2.5 text-[length:var(--body-sm)] text-muted",children:[i[e.categoria]," · ",n(e.leitura)]})]})},"ORDEM_CATEGORIA",0,["gestacao","exames","parto","pos-parto","bebe"],"ROTULO_CATEGORIA",0,i,"TrilhoArtigos",0,function({slugs:e}){let o=e.map(e=>s.find(a=>a.slug===e)).filter(e=>!!e);return 0===o.length?null:(0,a.jsx)("div",{className:"rail no-scrollbar pb-1",children:o.map((e,o)=>(0,a.jsx)(m,{artigo:e,indice:o},e.slug))})},"acharArtigo",0,function(e){return e?s.find(a=>a.slug===e):void 0},"semAcento",0,function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()},"tempoDeLeitura",0,n],36468)},36876,e=>{"use strict";let a=(0,e.i(38693).default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);e.s(["Search",0,a],36876)},51095,e=>{"use strict";var a=e.i(46400),o=e.i(55967),r=e.i(36876),s=e.i(96809),i=e.i(41447),t=e.i(38286),n=e.i(16228),d=e.i(55822),m=e.i(36468);let c=["movimentacao-fetal","quando-ir-para-a-maternidade","saude-emocional-na-gestacao","plano-de-parto"];function u({children:e,ativo:o,onClick:r}){return(0,a.jsx)("button",{onClick:r,"aria-pressed":o,className:(0,t.cx)("tap inline-flex min-h-11 items-center rounded-[var(--radius-pill)] px-4","text-[length:var(--body-sm)] font-medium whitespace-nowrap",o?"bg-invert text-page":"bg-card text-body hover:bg-card-alt"),children:e})}function x(){return(0,a.jsxs)("main",{className:"px-[var(--gutter-screen)] pt-8",children:[(0,a.jsx)(t.Esqueleto,{className:"h-9 w-3/4"}),(0,a.jsx)(t.Esqueleto,{className:"mt-4 h-5 w-1/2"}),(0,a.jsx)(t.Esqueleto,{className:"mt-8 h-11 w-full rounded-[var(--radius-field)]"}),(0,a.jsx)(t.Esqueleto,{className:"mt-6 h-44 w-full rounded-[var(--radius-lg)]"}),(0,a.jsx)(t.Esqueleto,{className:"mt-6 h-24 w-full rounded-[var(--radius-md)]"}),(0,a.jsx)(t.Esqueleto,{className:"mt-2 h-24 w-full rounded-[var(--radius-md)]"})]})}e.s(["default",0,function(){let{paciente:e,pronto:l}=(0,i.useDados)(),[p,g]=(0,o.useState)(""),[v,f]=(0,o.useState)("tudo"),h=(0,o.useMemo)(()=>m.ORDEM_CATEGORIA.filter(e=>s.ARTIGOS.some(a=>a.categoria===e)),[]),q=(0,o.useMemo)(()=>s.ARTIGOS.filter(e=>"vergonha"===e.categoria),[]),b=(0,o.useMemo)(()=>{let e=(0,m.semAcento)(p.trim());return s.ARTIGOS.filter(a=>("tudo"===v||a.categoria===v)&&(!e||(0,m.semAcento)(`${a.titulo} ${a.resumo}`).includes(e)))},[p,v]);if(!l||!e)return(0,a.jsx)(x,{});if("suspensa"===e.status)return(0,a.jsx)(d.JornadaSuspensa,{paciente:e});let j=p.trim().length>0;return(0,a.jsxs)("main",{children:[(0,a.jsx)(n.CabecalhoTela,{titulo:"Biblioteca",voltarPara:"/mais"}),(0,a.jsxs)("section",{className:"px-[var(--gutter-screen)] pb-6 pt-2",children:[(0,a.jsx)("p",{className:"display text-[32px] text-strong",children:"O que a consulta não teve tempo de explicar."}),(0,a.jsxs)("p",{className:"mt-3 text-[length:var(--body-lg)] leading-relaxed text-body",children:[s.ARTIGOS.length," textos escritos e revisados pela Dra. Cristiane. Sem promessa, sem susto, sem receita de internet."]})]}),(0,a.jsx)("section",{className:"px-[var(--gutter-screen)]",children:(0,a.jsx)(t.Campo,{rotulo:"Buscar na biblioteca",children:(0,a.jsx)(t.Entrada,{type:"search",value:p,onChange:e=>g(e.target.value),placeholder:"enjoo, curva glicêmica, contração…",autoComplete:"off"})})}),q.length>0&&(0,a.jsx)("section",{className:"mt-6 px-[var(--gutter-screen)]",children:(0,a.jsxs)("div",{className:"rounded-[var(--radius-lg)] px-6 py-7",style:{background:"var(--accent)"},children:[(0,a.jsx)("p",{className:"display-italic text-[34px]",style:{color:"var(--bordo)"},children:"Sem vergonha de perguntar"}),(0,a.jsx)("p",{className:"mt-3 text-[length:var(--body-lg)] leading-relaxed",style:{color:"var(--preto-carbono)"},children:"Sexo, gases, hemorroida, xixi que escapa. O que você engole na consulta é justamente o que continua atrapalhando o seu dia. Aqui está escrito com o nome que tem."}),(0,a.jsx)("button",{onClick:()=>{f("vergonha"===v?"tudo":"vergonha"),g("")},"aria-pressed":"vergonha"===v,className:"tap mt-5 inline-flex min-h-[var(--control-h-md)] items-center rounded-[var(--radius-control)] bg-card px-6 text-[length:var(--body)] font-semibold text-brand",children:"vergonha"===v?"Ver a biblioteca inteira":`Ler os ${q.length} assuntos`})]})}),(0,a.jsx)("section",{className:"mt-6",children:(0,a.jsxs)("div",{className:"rail no-scrollbar",role:"group","aria-label":"Filtrar por assunto",children:[(0,a.jsx)(u,{ativo:"tudo"===v,onClick:()=>f("tudo"),children:"Tudo"}),h.map(e=>(0,a.jsx)(u,{ativo:v===e,onClick:()=>f(v===e?"tudo":e),children:m.ROTULO_CATEGORIA[e]},e))]})}),!j&&"tudo"===v&&(0,a.jsxs)("section",{className:"mt-8",children:[(0,a.jsx)("div",{className:"px-[var(--gutter-screen)]",children:(0,a.jsx)(t.TituloSecao,{children:"Escolha da Dra. Cristiane"})}),(0,a.jsx)(m.TrilhoArtigos,{slugs:c})]}),(0,a.jsxs)("section",{className:"mt-8 px-[var(--gutter-screen)]",children:[(0,a.jsx)(t.TituloSecao,{children:"tudo"!==v||j?`${b.length} ${1===b.length?"texto":"textos"}`:"Todos os assuntos"}),b.length>0?(0,a.jsx)("ul",{className:"grid gap-2",children:b.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(m.LinhaArtigo,{artigo:e})},e.slug))}):(0,a.jsx)(t.Vazio,{icone:r.Search,titulo:"Nada com esse termo",descricao:"Tente uma palavra mais simples — enjoo, sono, parto, glicose. Se o assunto não estiver aqui, escreva para a equipe: alguém responde.",acao:{rotulo:"Falar com a equipe",href:"/equipe"}})]}),(0,a.jsx)("p",{className:"mt-10 px-[var(--gutter-screen)] text-[length:var(--body-sm)] leading-relaxed text-muted",children:"Todo texto daqui é orientação geral. O que vale para o seu caso é o que a Dra. Cristiane disser na consulta."})]})}])}]);