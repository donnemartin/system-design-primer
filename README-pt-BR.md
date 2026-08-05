*[English](README.md) ∙ [日本語](README-ja.md) ∙ [简体中文](README-zh-Hans.md) ∙ [繁體中文](README-zh-TW.md) | [العَرَبِيَّة‎](https://github.com/donnemartin/system-design-primer/issues/170) ∙ [বাংলা](https://github.com/donnemartin/system-design-primer/issues/220) ∙ [Português do Brasil](README-pt-BR.md) ∙ [Deutsch](https://github.com/donnemartin/system-design-primer/issues/186) ∙ [ελληνικά](https://github.com/donnemartin/system-design-primer/issues/130) ∙ [עברית](https://github.com/donnemartin/system-design-primer/issues/272) ∙ [Italiano](https://github.com/donnemartin/system-design-primer/issues/104) ∙ [한국어](https://github.com/donnemartin/system-design-primer/issues/102) ∙ [فارسی](https://github.com/donnemartin/system-design-primer/issues/110) ∙ [Polski](https://github.com/donnemartin/system-design-primer/issues/68) ∙ [русский язык](https://github.com/donnemartin/system-design-primer/issues/87) ∙ [Español](https://github.com/donnemartin/system-design-primer/issues/136) ∙ [ภาษาไทย](https://github.com/donnemartin/system-design-primer/issues/187) ∙ [Türkçe](https://github.com/donnemartin/system-design-primer/issues/39) ∙ [tiếng Việt](https://github.com/donnemartin/system-design-primer/issues/127) ∙ [Français](https://github.com/donnemartin/system-design-primer/issues/250) | [Adicionar tradução](https://github.com/donnemartin/system-design-primer/issues/28)*

**Ajude a [revisar e manter](https://github.com/donnemartin/system-design-primer/issues/40) este guia!**

> [!IMPORTANT]
> A tradução principal para português brasileiro foi concluída e acompanha o [`README.md`](README.md) original em inglês. O conteúdo está em fase de revisão técnica e linguística, e contribuições são bem-vindas por meio de pull requests neste repositório.

# Guia de Design de Sistemas

<p align="center">
  <img src="images/jj3A5N8.png">
  <br/>
</p>

## Motivação

> Aprenda a projetar sistemas de grande escala.
>
> Prepare-se para entrevistas de design de sistemas.

### Aprenda a projetar sistemas de grande escala

Aprender a projetar sistemas escaláveis ajudará você a aprimorar sua atuação como profissional de engenharia.

Design de sistemas é um tema amplo. Existe uma **grande quantidade de recursos espalhados pela internet** sobre seus princípios.

Este repositório é uma **coleção organizada** de recursos para ajudar você a aprender como construir sistemas em escala.

### Aprenda com a comunidade open source

Este é um projeto open source atualizado continuamente.

[Contribuições](#como-contribuir) são bem-vindas!

### Prepare-se para entrevistas de design de sistemas

Além das entrevistas de programação, design de sistemas é um **componente obrigatório** do **processo de entrevista técnica** em muitas empresas de tecnologia.

**Pratique perguntas comuns de entrevistas de design de sistemas** e **compare** seus resultados com **soluções de exemplo**, incluindo discussões, código e diagramas.

Outros tópicos para preparação de entrevistas:

* [Guia de estudos](#guia-de-estudos)
* [Como abordar uma pergunta de entrevista de design de sistemas](#como-abordar-uma-pergunta-de-entrevista-de-design-de-sistemas)
* [Perguntas de entrevista de design de sistemas, **com soluções**](#perguntas-de-entrevista-de-design-de-sistemas-com-solucoes)
* [Perguntas de entrevista de design orientado a objetos, **com soluções**](#perguntas-de-entrevista-de-design-orientado-a-objetos-com-solucoes)
* [Outras perguntas de entrevista de design de sistemas](#outras-perguntas-de-entrevista-de-design-de-sistemas)

## Flashcards do Anki

<p align="center">
  <img src="images/zdCAkB3.png">
  <br/>
</p>

Os [baralhos de flashcards do Anki](https://apps.ankiweb.net/) disponibilizados utilizam repetição espaçada para ajudar você a reter os principais conceitos de design de sistemas.

* [Baralho de design de sistemas](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design.apkg)
* [Baralho de exercícios de design de sistemas](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design%20Exercises.apkg)
* [Baralho de exercícios de design orientado a objetos](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/OO%20Design.apkg)

Esses baralhos são ótimos para estudar durante deslocamentos ou fora de casa.

### Recurso de programação: desafios interativos

Está procurando recursos para se preparar para uma [**entrevista de programação**](https://github.com/donnemartin/interactive-coding-challenges)?

<p align="center">
  <img src="images/b4YtAEN.png">
  <br/>
</p>

Consulte o repositório relacionado [**Interactive Coding Challenges**](https://github.com/donnemartin/interactive-coding-challenges), que contém um baralho adicional do Anki:

* [Baralho de programação](https://github.com/donnemartin/interactive-coding-challenges/tree/master/anki_cards/Coding.apkg)

## Como contribuir

> Aprenda com a comunidade.

Sinta-se à vontade para enviar pull requests para ajudar a:

* Corrigir erros;
* Melhorar seções;
* Adicionar novas seções;
* [Revisar e manter a tradução](https://github.com/donnemartin/system-design-primer/issues/40).

O conteúdo que ainda precisa de melhorias está indicado na seção [Em desenvolvimento](#em-desenvolvimento).

Antes de contribuir com a tradução, consulte as [diretrizes de contribuição em português brasileiro](CONTRIBUTING-pt-BR.md). Para as regras gerais do projeto original, consulte o [`CONTRIBUTING.md`](CONTRIBUTING.md) em inglês.

## Índice de tópicos de design de sistemas

> Resumos de diversos tópicos de design de sistemas, incluindo vantagens e desvantagens. **Tudo envolve trade-offs**.
>
> Cada seção contém links para recursos mais aprofundados.

<p align="center">
  <img src="images/jrUBAF7.png">
  <br/>
</p>

> [!NOTE]
> A tradução principal está concluída. Todos os itens do índice abaixo apontam para seções deste documento.

* [Tópicos de design de sistemas: comece aqui](#tópicos-de-design-de-sistemas-comece-aqui)
    * [Etapa 1: assista à aula em vídeo sobre escalabilidade](#etapa-1-assista-à-aula-em-vídeo-sobre-escalabilidade)
    * [Etapa 2: leia o artigo sobre escalabilidade](#etapa-2-leia-o-artigo-sobre-escalabilidade)
    * [Próximas etapas](#próximas-etapas)
* [Desempenho versus escalabilidade](#desempenho-versus-escalabilidade)
* [Latência versus throughput](#latência-versus-throughput)
* [Disponibilidade versus consistência](#disponibilidade-versus-consistência)
    * [Teorema CAP](#teorema-cap)
        * [CP — consistência e tolerância a partições](#cp-consistencia-e-tolerancia-a-particoes)
        * [AP — disponibilidade e tolerância a partições](#ap-disponibilidade-e-tolerancia-a-particoes)
* [Padrões de consistência](#padrões-de-consistência)
    * [Consistência fraca](#consistência-fraca)
    * [Consistência eventual](#consistência-eventual)
    * [Consistência forte](#consistência-forte)
* [Padrões de disponibilidade](#padrões-de-disponibilidade)
    * [Failover](#failover)
    * [Replicação](#replicação)
    * [Disponibilidade em números](#disponibilidade-em-números)
* [Sistema de nomes de domínio](#sistema-de-nomes-de-dominio)
* [Rede de distribuição de conteúdo](#rede-de-distribuicao-de-conteudo)
    * [CDNs push](#cdns-push)
    * [CDNs pull](#cdns-pull)
* [Balanceador de carga](#balanceador-de-carga)
    * [Ativo-passivo](#ativo-passivo)
    * [Ativo-ativo](#ativo-ativo)
    * [Balanceamento de carga na camada 4](#balanceamento-de-carga-na-camada-4)
    * [Balanceamento de carga na camada 7](#balanceamento-de-carga-na-camada-7)
    * [Escalabilidade horizontal](#escalabilidade-horizontal)
* [Proxy reverso — servidor web](#proxy-reverso-servidor-web)
    * [Balanceador de carga versus proxy reverso](#balanceador-de-carga-versus-proxy-reverso)
* [Camada de aplicação](#camada-de-aplicacao)
    * [Microsserviços](#microsservicos)
    * [Descoberta de serviços](#descoberta-de-servicos)
* [Banco de dados](#banco-de-dados)
    * [Sistema gerenciador de banco de dados relacional — SGBDR](#sistema-gerenciador-de-banco-de-dados-relacional-sgbdr)
        * [Replicação master-slave](#replicacao-master-slave)
        * [Replicação master-master](#replicacao-master-master)
        * [Federação](#federacao)
        * [Particionamento horizontal — sharding](#particionamento-horizontal-sharding)
        * [Desnormalização](#desnormalizacao)
        * [Otimização de SQL](#otimizacao-de-sql)
    * [NoSQL](#nosql)
        * [Armazenamento chave-valor](#armazenamento-chave-valor)
        * [Armazenamento de documentos](#armazenamento-de-documentos)
        * [Armazenamento em colunas largas](#armazenamento-em-colunas-largas)
        * [Banco de dados de grafos](#banco-de-dados-de-grafos)
    * [SQL ou NoSQL](#sql-ou-nosql)
* [Cache](#cache)
    * [Cache no cliente](#cache-no-cliente)
    * [Cache em CDN](#cache-em-cdn)
    * [Cache no servidor web](#cache-no-servidor-web)
    * [Cache no banco de dados](#cache-no-banco-de-dados)
    * [Cache na aplicação](#cache-na-aplicacao)
    * [Cache no nível de consulta ao banco de dados](#cache-no-nivel-de-consulta-ao-banco-de-dados)
    * [Cache no nível de objeto](#cache-no-nivel-de-objeto)
    * [Quando atualizar o cache](#quando-atualizar-o-cache)
        * [Cache-aside](#cache-aside)
        * [Write-through](#write-through)
        * [Write-behind — write-back](#write-behind-write-back)
        * [Refresh-ahead](#refresh-ahead)
* [Assincronismo](#assincronismo)
    * [Filas de mensagens](#filas-de-mensagens)
    * [Filas de tarefas](#filas-de-tarefas)
    * [Backpressure](#backpressure)
* [Comunicação](#comunicacao)
    * [Protocolo de transferência de hipertexto — HTTP](#protocolo-de-transferencia-de-hipertexto-http)
    * [Protocolo de controle de transmissão — TCP](#protocolo-de-controle-de-transmissao-tcp)
    * [Protocolo de datagrama do usuário — UDP](#protocolo-de-datagrama-do-usuario-udp)
    * [Chamada de procedimento remoto — RPC](#chamada-de-procedimento-remoto-rpc)
    * [Transferência de estado representacional — REST](#transferencia-de-estado-representacional-rest)
* [Segurança](#seguranca)
* [Apêndice](#apendice)
    * [Tabela de potências de dois](#tabela-de-potencias-de-dois)
    * [Números de latência que todo programador deve conhecer](#numeros-de-latencia-que-todo-programador-deve-conhecer)
    * [Outras perguntas de entrevista de design de sistemas](#outras-perguntas-de-entrevista-de-design-de-sistemas)
    * [Arquiteturas do mundo real](#arquiteturas-do-mundo-real)
    * [Arquiteturas de empresas](#arquiteturas-de-empresas)
    * [Blogs de engenharia de empresas](#blogs-de-engenharia-de-empresas)
* [Em desenvolvimento](#em-desenvolvimento)
* [Créditos](#creditos)
* [Informações de contato](#informacoes-de-contato)
* [Licença](#licenca)

## Guia de estudos

> Tópicos sugeridos para revisão de acordo com o prazo disponível para sua entrevista: curto, médio ou longo.

![Imgur](images/OfVllex.png)

**P: Para as entrevistas, preciso conhecer tudo o que está neste guia?**

**R: Não. Você não precisa conhecer todo o conteúdo deste guia para se preparar para uma entrevista.**

O que será perguntado em uma entrevista depende de fatores como:

* Seu nível de experiência;
* sua formação e experiência técnica;
* os cargos para os quais está se candidatando;
* as empresas nas quais está participando de processos seletivos;
* sorte.

Em geral, espera-se que profissionais mais experientes conheçam mais sobre design de sistemas. Pode-se esperar que arquitetos ou líderes técnicos tenham mais conhecimento do que contribuidores individuais. Grandes empresas de tecnologia provavelmente incluem uma ou mais etapas de entrevista de design.

Comece de forma abrangente e aprofunde-se em algumas áreas. É útil conhecer um pouco sobre os principais tópicos de design de sistemas. Adapte o guia abaixo de acordo com o tempo disponível, sua experiência, os cargos desejados e as empresas nas quais pretende se candidatar.

* **Prazo curto** — priorize a **amplitude** dos tópicos de design de sistemas. Pratique resolvendo **algumas** perguntas de entrevista.
* **Prazo médio** — priorize a **amplitude** e obtenha **alguma profundidade** nos tópicos. Pratique resolvendo **muitas** perguntas de entrevista.
* **Prazo longo** — priorize a **amplitude** e obtenha **maior profundidade** nos tópicos. Pratique resolvendo **a maioria** das perguntas de entrevista.

| | Curto | Médio | Longo |
|---|---|---|---|
| Leia os [tópicos de design de sistemas](#índice-de-tópicos-de-design-de-sistemas) para obter uma visão ampla de como os sistemas funcionam | :+1: | :+1: | :+1: |
| Leia alguns artigos nos [blogs de engenharia de empresas](#blogs-de-engenharia-de-empresas) para as quais você está se candidatando | :+1: | :+1: | :+1: |
| Analise algumas [arquiteturas do mundo real](#arquiteturas-do-mundo-real) | :+1: | :+1: | :+1: |
| Revise [como abordar uma pergunta de entrevista de design de sistemas](#como-abordar-uma-pergunta-de-entrevista-de-design-de-sistemas) | :+1: | :+1: | :+1: |
| Resolva [perguntas de entrevista de design de sistemas com soluções](#perguntas-de-entrevista-de-design-de-sistemas-com-solucoes) | Algumas | Muitas | A maioria |
| Resolva [perguntas de entrevista de design orientado a objetos com soluções](#perguntas-de-entrevista-de-design-orientado-a-objetos-com-solucoes) | Algumas | Muitas | A maioria |
| Revise [outras perguntas de entrevista de design de sistemas](#outras-perguntas-de-entrevista-de-design-de-sistemas) | Algumas | Muitas | A maioria |

## Como abordar uma pergunta de entrevista de design de sistemas

> Como conduzir a discussão durante uma entrevista de design de sistemas.

A entrevista de design de sistemas é uma **conversa aberta**. Espera-se que você conduza a discussão.

Você pode usar as etapas a seguir para orientar a conversa. Para consolidar esse processo, aplique-as às [perguntas de entrevista de design de sistemas com soluções](#perguntas-de-entrevista-de-design-de-sistemas-com-solucoes).

### Etapa 1: descreva casos de uso, restrições e premissas

Colete os requisitos e delimite o problema. Faça perguntas para esclarecer os casos de uso e as restrições. Discuta as premissas adotadas.

* Quem utilizará o sistema?
* Como essas pessoas utilizarão o sistema?
* Quantos usuários o sistema terá?
* O que o sistema deve fazer?
* Quais são as entradas e saídas do sistema?
* Qual volume de dados esperamos que o sistema processe?
* Quantas requisições por segundo esperamos receber?
* Qual é a proporção esperada entre leituras e escritas?

### Etapa 2: crie um design de alto nível

Esboce um design de alto nível que inclua todos os componentes importantes.

* Desenhe os principais componentes e suas conexões;
* justifique suas decisões.

### Etapa 3: projete os componentes centrais

Aprofunde-se nos detalhes de cada componente central. Por exemplo, caso seja solicitado que você [projete um serviço de encurtamento de URLs](solutions/system_design/pastebin/README.md), discuta:

* A geração e o armazenamento de um hash da URL completa:
    * [MD5](solutions/system_design/pastebin/README.md) e [Base62](solutions/system_design/pastebin/README.md);
    * colisões de hash;
    * SQL ou NoSQL;
    * esquema do banco de dados.
* A conversão do hash de uma URL em sua URL completa:
    * consulta ao banco de dados.
* O design da API e o design orientado a objetos.

### Etapa 4: escale o design

Identifique e trate os gargalos considerando as restrições. Por exemplo, você precisa dos seguintes componentes ou técnicas para resolver problemas de escalabilidade?

* Balanceador de carga;
* escalabilidade horizontal;
* cache;
* particionamento horizontal do banco de dados — sharding.

Discuta possíveis soluções e trade-offs. Tudo envolve trade-offs. Trate os gargalos utilizando os [princípios de design de sistemas escaláveis](#índice-de-tópicos-de-design-de-sistemas).

### Cálculos de ordem de grandeza

Talvez você precise fazer algumas estimativas à mão. Consulte o [apêndice](#apendice) para acessar os seguintes recursos:

* [Use back of the envelope calculations](http://highscalability.com/blog/2011/1/26/google-pro-tip-use-back-of-the-envelope-calculations-to-choo.html)
* [Tabela de potências de dois](#tabela-de-potencias-de-dois)
* [Números de latência que todo programador deve conhecer](#numeros-de-latencia-que-todo-programador-deve-conhecer)

### Fontes e leituras complementares

Consulte os links abaixo para ter uma ideia melhor do que esperar:

* [How to ace a systems design interview](https://web.archive.org/web/20210505130322/https://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/)
* [The system design interview](http://www.hiredintech.com/system-design)
* [Intro to Architecture and Systems Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70)
* [System design template](https://leetcode.com/discuss/career/229177/My-System-Design-Template)

<a id="perguntas-de-entrevista-de-design-de-sistemas-com-solucoes"></a>
## Perguntas de entrevista de design de sistemas com soluções

> Perguntas comuns de entrevista de design de sistemas com exemplos de discussão, código e diagramas.
>
> As soluções estão vinculadas ao conteúdo da pasta `solutions/`.

| Pergunta | |
|---|---|
| Projete o Pastebin.com — ou Bit.ly | [Solução](solutions/system_design/pastebin/README.md) |
| Projete a timeline e a pesquisa do Twitter — ou o feed e a pesquisa do Facebook | [Solução](solutions/system_design/twitter/README.md) |
| Projete um rastreador web | [Solução](solutions/system_design/web_crawler/README.md) |
| Projete o Mint.com | [Solução](solutions/system_design/mint/README.md) |
| Projete as estruturas de dados de uma rede social | [Solução](solutions/system_design/social_graph/README.md) |
| Projete um armazenamento chave-valor para um mecanismo de busca | [Solução](solutions/system_design/query_cache/README.md) |
| Projete o recurso de ranking de vendas da Amazon por categoria | [Solução](solutions/system_design/sales_rank/README.md) |
| Projete um sistema que escale para milhões de usuários na AWS | [Solução](solutions/system_design/scaling_aws/README.md) |
| Adicione uma pergunta de design de sistemas | [Contribua](#como-contribuir) |

### Projete o Pastebin.com — ou Bit.ly

[Veja o exercício e a solução](solutions/system_design/pastebin/README.md)

![Imgur](images/4edXG0T.png)

### Projete a timeline e a pesquisa do Twitter — ou o feed e a pesquisa do Facebook

[Veja o exercício e a solução](solutions/system_design/twitter/README.md)

![Imgur](images/jrUBAF7.png)

### Projete um rastreador web

[Veja o exercício e a solução](solutions/system_design/web_crawler/README.md)

![Imgur](images/bWxPtQA.png)

### Projete o Mint.com

[Veja o exercício e a solução](solutions/system_design/mint/README.md)

![Imgur](images/V5q57vU.png)

### Projete as estruturas de dados de uma rede social

[Veja o exercício e a solução](solutions/system_design/social_graph/README.md)

![Imgur](images/cdCv5g7.png)

### Projete um armazenamento chave-valor para um mecanismo de busca

[Veja o exercício e a solução](solutions/system_design/query_cache/README.md)

![Imgur](images/4j99mhe.png)

### Projete o recurso de ranking de vendas da Amazon por categoria

[Veja o exercício e a solução](solutions/system_design/sales_rank/README.md)

![Imgur](images/MzExP06.png)

### Projete um sistema que escale para milhões de usuários na AWS

[Veja o exercício e a solução](solutions/system_design/scaling_aws/README.md)

![Imgur](images/jj3A5N8.png)

<a id="perguntas-de-entrevista-de-design-orientado-a-objetos-com-solucoes"></a>
## Perguntas de entrevista de design orientado a objetos com soluções

> Perguntas comuns de entrevista de design orientado a objetos com exemplos de discussão, código e diagramas.
>
> As soluções estão vinculadas ao conteúdo da pasta `solutions/`.

> **Observação: esta seção está em desenvolvimento.**

| Pergunta | |
|---|---|
| Projete um mapa de hash | [Solução](solutions/object_oriented_design/hash_table/hash_map.ipynb) |
| Projete um cache LRU — Least Recently Used | [Solução](solutions/object_oriented_design/lru_cache/lru_cache.ipynb) |
| Projete uma central de atendimento | [Solução](solutions/object_oriented_design/call_center/call_center.ipynb) |
| Projete um baralho de cartas | [Solução](solutions/object_oriented_design/deck_of_cards/deck_of_cards.ipynb) |
| Projete um estacionamento | [Solução](solutions/object_oriented_design/parking_lot/parking_lot.ipynb) |
| Projete um servidor de chat | [Solução](solutions/object_oriented_design/online_chat/online_chat.ipynb) |
| Projete um array circular | [Contribua](#como-contribuir) |
| Adicione uma pergunta de design orientado a objetos | [Contribua](#como-contribuir) |

## Tópicos de design de sistemas: comece aqui

Está começando a estudar design de sistemas?

Primeiro, você precisará compreender os princípios mais comuns: o que são, como são utilizados e quais são suas vantagens e desvantagens.

### Etapa 1: assista à aula em vídeo sobre escalabilidade

[Scalability Lecture at Harvard](https://www.youtube.com/watch?v=-W9F__D3oY4)

* Tópicos abordados:
    * escalabilidade vertical;
    * escalabilidade horizontal;
    * cache;
    * balanceamento de carga;
    * replicação de banco de dados;
    * particionamento de banco de dados.

### Etapa 2: leia o artigo sobre escalabilidade

[Scalability](https://web.archive.org/web/20221030091841/http://www.lecloud.net/tagged/scalability/chrono)

* Tópicos abordados:
    * [Clones](https://web.archive.org/web/20220530193911/https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones);
    * [Databases](https://web.archive.org/web/20220602114024/https://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database);
    * [Caches](https://web.archive.org/web/20230126233752/https://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache);
    * [Asynchronism](https://web.archive.org/web/20220926171507/https://www.lecloud.net/post/9699762917/scalability-for-dummies-part-4-asynchronism).

### Próximas etapas

A seguir, analisaremos trade-offs de alto nível:

* **desempenho** versus **escalabilidade**;
* **latência** versus **throughput**;
* **disponibilidade** versus **consistência**.

Lembre-se de que **tudo envolve trade-offs**.

Depois, aprofundaremos tópicos mais específicos, como DNS, CDNs e balanceadores de carga.

## Desempenho versus escalabilidade

Um serviço é **escalável** quando o aumento dos recursos resulta em um aumento proporcional de **desempenho**. Em geral, aumentar o desempenho significa processar mais unidades de trabalho, mas também pode significar lidar com unidades maiores de trabalho, como ocorre quando os conjuntos de dados crescem.<sup><a href="http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html">1</a></sup>

Outra maneira de entender a diferença entre desempenho e escalabilidade:

* Caso exista um problema de **desempenho**, o sistema é lento para um único usuário.
* Caso exista um problema de **escalabilidade**, o sistema é rápido para um único usuário, mas fica lento sob carga elevada.

### Fontes e leituras complementares

* [A word on scalability](http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html)
* [Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)

## Latência versus throughput

**Latência** é o tempo necessário para executar uma ação ou produzir um resultado.

**Throughput**, ou vazão, é a quantidade dessas ações ou resultados processada por unidade de tempo.

Em geral, deve-se buscar o **maior throughput possível** mantendo uma **latência aceitável**.

### Fontes e leituras complementares

* [Understanding latency vs throughput](https://community.cadence.com/cadence_blogs_8/b/fv/posts/understanding-latency-vs-throughput)

## Disponibilidade versus consistência

### Teorema CAP

<p align="center">
  <img src="images/bgLMI2u.png">
  <br/>
  <i><a href="https://robertgreiner.com/cap-theorem-revisited">Fonte: CAP theorem revisited</a></i>
</p>

Em um sistema computacional distribuído, é possível oferecer apenas duas das seguintes garantias:

* **Consistência** — toda leitura recebe a escrita mais recente ou um erro;
* **disponibilidade** — toda requisição recebe uma resposta, sem garantia de que ela contenha a versão mais recente das informações;
* **tolerância a partições** — o sistema continua operando mesmo diante de partições arbitrárias causadas por falhas de rede.

*Redes não são confiáveis; portanto, é necessário oferecer tolerância a partições. Isso exige um trade-off de software entre consistência e disponibilidade.*

<a id="cp-consistencia-e-tolerancia-a-particoes"></a>
#### CP — consistência e tolerância a partições

Aguardar a resposta de um nó isolado por uma partição de rede pode resultar em um erro de timeout. CP é uma boa escolha quando as necessidades do negócio exigem leituras e escritas atômicas.

<a id="ap-disponibilidade-e-tolerancia-a-particoes"></a>
#### AP — disponibilidade e tolerância a partições

As respostas retornam a versão dos dados mais prontamente disponível em qualquer nó, que pode não ser a mais recente. As escritas podem levar algum tempo para se propagar depois que a partição é resolvida.

AP é uma boa escolha quando o negócio admite [consistência eventual](#consistência-eventual) ou quando o sistema precisa continuar funcionando apesar de falhas externas.

### Fontes e leituras complementares

* [CAP theorem revisited](https://robertgreiner.com/cap-theorem-revisited/)
* [A plain english introduction to CAP theorem](http://ksat.me/a-plain-english-introduction-to-cap-theorem)
* [CAP FAQ](https://github.com/henryr/cap-faq)
* [The CAP theorem](https://www.youtube.com/watch?v=k-Yaq8AHlFA)

## Padrões de consistência

Quando existem várias cópias dos mesmos dados, é necessário decidir como sincronizá-las para que os clientes tenham uma visão consistente das informações. Retome a definição de consistência apresentada no [teorema CAP](#teorema-cap): toda leitura recebe a escrita mais recente ou um erro.

### Consistência fraca

Depois de uma escrita, as leituras podem ou não refletir a alteração. O sistema adota uma abordagem de melhor esforço.

Essa abordagem é encontrada em sistemas como o Memcached. A consistência fraca funciona bem em casos de uso em tempo real, como VoIP, videochamadas e jogos multiplayer em tempo real. Por exemplo, ao perder o sinal por alguns segundos durante uma ligação, você não escuta o que foi falado durante a interrupção quando a conexão é restabelecida.

### Consistência eventual

Depois de uma escrita, as leituras acabarão refletindo a alteração, normalmente em alguns milissegundos. Os dados são replicados de maneira assíncrona.

Essa abordagem é encontrada em sistemas como DNS e e-mail. A consistência eventual funciona bem em sistemas altamente disponíveis.

### Consistência forte

Depois de uma escrita, as leituras refletirão a alteração. Os dados são replicados de maneira síncrona.

Essa abordagem é encontrada em sistemas de arquivos e SGBDRs. A consistência forte funciona bem em sistemas que precisam de transações.

### Fontes e leituras complementares

* [Transactions across data centers](http://snarfed.org/transactions_across_datacenters_io.html)

## Padrões de disponibilidade

Existem dois padrões complementares para oferecer alta disponibilidade: **failover** e **replicação**.

### Failover

#### Ativo-passivo

No failover ativo-passivo, sinais de heartbeat são enviados entre o servidor ativo e o servidor passivo em espera. Quando o heartbeat é interrompido, o servidor passivo assume o endereço IP do servidor ativo e retoma o serviço.

A duração da indisponibilidade depende de o servidor passivo já estar em execução no modo *hot standby* ou precisar ser iniciado a partir do modo *cold standby*. Apenas o servidor ativo processa o tráfego.

O failover ativo-passivo também pode ser chamado de failover master-slave.

#### Ativo-ativo

No modelo ativo-ativo, os dois servidores processam tráfego e distribuem a carga entre si.

Quando os servidores são expostos publicamente, o DNS precisa conhecer os endereços IP públicos de ambos. Quando os servidores são internos, a lógica da aplicação precisa conhecer os dois servidores.

O failover ativo-ativo também pode ser chamado de failover master-master.

### Desvantagens do failover

* O failover exige mais hardware e adiciona complexidade.
* Existe a possibilidade de perda de dados caso o sistema ativo falhe antes que dados recém-gravados sejam replicados para o servidor passivo.

### Replicação

#### Master-slave e master-master

Este tópico é discutido com mais detalhes na seção de [banco de dados](#banco-de-dados):

* [Replicação master-slave](#replicacao-master-slave)
* [Replicação master-master](#replicacao-master-master)

### Disponibilidade em números

A disponibilidade costuma ser quantificada pelo tempo de atividade — ou de indisponibilidade — como uma porcentagem do período em que o serviço está acessível. Geralmente, ela é expressa pela quantidade de noves: um serviço com disponibilidade de 99,99% é descrito como tendo quatro noves.

#### Disponibilidade de 99,9% — três noves

| Período | Indisponibilidade aceitável |
|---|---|
| Por ano | 8h 45min 57s |
| Por mês | 43min 49,7s |
| Por semana | 10min 4,8s |
| Por dia | 1min 26,4s |

#### Disponibilidade de 99,99% — quatro noves

| Período | Indisponibilidade aceitável |
|---|---|
| Por ano | 52min 35,7s |
| Por mês | 4min 23s |
| Por semana | 1min 5s |
| Por dia | 8,6s |

#### Disponibilidade em paralelo versus em sequência

Quando um serviço é composto por vários componentes sujeitos a falhas, sua disponibilidade total depende de esses componentes estarem organizados em sequência ou em paralelo.

###### Em sequência

A disponibilidade total diminui quando dois componentes com disponibilidade inferior a 100% estão em sequência:

```
Disponibilidade (Total) = Disponibilidade (Foo) * Disponibilidade (Bar)
```

Caso `Foo` e `Bar` tenham, cada um, 99,9% de disponibilidade, a disponibilidade total em sequência será de aproximadamente 99,8%.

###### Em paralelo

A disponibilidade total aumenta quando dois componentes com disponibilidade inferior a 100% estão em paralelo:

```
Disponibilidade (Total) = 1 - (1 - Disponibilidade (Foo)) * (1 - Disponibilidade (Bar))
```

Caso `Foo` e `Bar` tenham, cada um, 99,9% de disponibilidade, a disponibilidade total em paralelo será de 99,9999%.

<a id="sistema-de-nomes-de-dominio"></a>
## Sistema de nomes de domínio

<p align="center">
  <img src="images/IOyLj4i.jpg">
  <br/>
  <i><a href="http://www.slideshare.net/srikrupa5/dns-security-presentation-issa">Fonte: DNS security presentation</a></i>
</p>

Um sistema de nomes de domínio (DNS) traduz um nome de domínio, como `www.example.com`, para um endereço IP.

O DNS é hierárquico, com alguns servidores autoritativos no nível superior. O roteador ou o provedor de internet informa quais servidores DNS devem ser consultados durante a resolução. Servidores DNS de níveis inferiores armazenam mapeamentos em cache, que podem ficar desatualizados devido a atrasos na propagação do DNS. Os resultados também podem ser armazenados em cache pelo navegador ou sistema operacional durante um período determinado pelo [tempo de vida — time to live (TTL)](https://en.wikipedia.org/wiki/Time_to_live).

* **Registro NS — name server** — especifica os servidores DNS do domínio ou subdomínio.
* **Registro MX — mail exchange** — especifica os servidores de e-mail que recebem mensagens.
* **Registro A — address** — aponta um nome para um endereço IP.
* **CNAME — canonical name** — aponta um nome para outro nome, que pode apontar para outro `CNAME` ou para um registro `A`, como ao associar `example.com` a `www.example.com`.

Serviços como [Cloudflare](https://www.cloudflare.com/dns/) e [Route 53](https://aws.amazon.com/route53/) oferecem DNS gerenciado. Alguns serviços DNS podem rotear o tráfego por diferentes métodos:

* [Round robin ponderado](https://www.jscape.com/blog/load-balancing-algorithms):
    * impedir que o tráfego seja enviado para servidores em manutenção;
    * equilibrar clusters de tamanhos diferentes;
    * realizar testes A/B.
* [Baseado em latência](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html).
* [Baseado em geolocalização](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html).

### Desvantagens do DNS

* O acesso a um servidor DNS introduz um pequeno atraso, embora ele seja reduzido pelo cache descrito anteriormente.
* O gerenciamento de servidores DNS pode ser complexo e geralmente é realizado por [governos, provedores de internet e grandes empresas](http://superuser.com/questions/472695/who-controls-the-dns-servers/472729).
* Serviços DNS podem sofrer [ataques DDoS](http://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/), impedindo o acesso a sites quando os usuários não conhecem seus endereços IP.

### Fontes e leituras complementares

* [DNS architecture](https://technet.microsoft.com/en-us/library/dd197427(v=ws.10).aspx)
* [Wikipedia](https://en.wikipedia.org/wiki/Domain_Name_System)
* [DNS articles](https://support.dnsimple.com/categories/dns/)

<a id="rede-de-distribuicao-de-conteudo"></a>
## Rede de distribuição de conteúdo

<p align="center">
  <img src="images/h9TAuGI.jpg">
  <br/>
  <i><a href="https://www.cloudflare.com/pt-br/learning/cdn/cdn-benefits/">Referência: benefícios da CDN</a></i>
</p>

Uma rede de distribuição de conteúdo (CDN) é uma rede globalmente distribuída de servidores proxy que entrega conteúdo a partir de locais mais próximos do usuário. Em geral, arquivos estáticos, como HTML, CSS, JavaScript, fotos e vídeos, são servidos por uma CDN, embora algumas CDNs, como o Amazon CloudFront, também ofereçam suporte a conteúdo dinâmico. A resolução DNS do site informa aos clientes qual servidor deve ser consultado.

Distribuir conteúdo por meio de CDNs pode melhorar significativamente o desempenho de duas maneiras:

* os usuários recebem conteúdo de data centers próximos;
* seus servidores deixam de processar as requisições atendidas pela CDN.

<a id="cdns-push"></a>
### CDNs push

CDNs push recebem conteúdo novo sempre que ocorrem alterações no servidor. Você assume a responsabilidade de fornecer o conteúdo, enviá-lo diretamente à CDN e reescrever as URLs para que apontem para ela. Também pode configurar quando o conteúdo expira e quando é atualizado. O conteúdo é enviado apenas quando é novo ou foi modificado, minimizando o tráfego, mas aumentando o uso de armazenamento.

Sites com pouco tráfego ou cujo conteúdo não é atualizado com frequência funcionam bem com CDNs push. O conteúdo é colocado na CDN uma única vez, em vez de ser buscado novamente em intervalos regulares.

<a id="cdns-pull"></a>
### CDNs pull

CDNs pull buscam conteúdo novo no servidor quando o primeiro usuário o solicita. O conteúdo permanece em seu servidor, e as URLs são reescritas para apontar para a CDN. A primeira requisição é mais lenta, até que o conteúdo seja armazenado em cache na CDN.

Um [tempo de vida — time to live (TTL)](https://en.wikipedia.org/wiki/Time_to_live) determina por quanto tempo o conteúdo permanece no cache. CDNs pull minimizam o espaço de armazenamento utilizado na CDN, mas podem produzir tráfego redundante quando os arquivos expiram e são buscados novamente antes de terem sido realmente alterados.

Sites com muito tráfego funcionam bem com CDNs pull, pois o tráfego é distribuído de forma mais uniforme e apenas o conteúdo solicitado recentemente permanece na CDN.

### Desvantagens das CDNs

* O custo de uma CDN pode ser significativo, dependendo do tráfego, embora deva ser comparado aos custos adicionais de não utilizar uma CDN.
* O conteúdo pode ficar desatualizado caso seja modificado antes do término do TTL.
* O uso de CDNs exige que as URLs do conteúdo estático sejam alteradas para apontar para a CDN.

### Fontes e leituras complementares

* [Globally distributed content delivery](https://figshare.com/articles/Globally_distributed_content_delivery/6605972)
* [The differences between push and pull CDNs](https://www.geeksforgeeks.org/system-design/pull-cdn-vs-push-cdn/)
* [Wikipedia](https://en.wikipedia.org/wiki/Content_delivery_network)

<a id="balanceador-de-carga"></a>
## Balanceador de carga

<p align="center">
  <img src="images/h81n9iK.png">
  <br/>
  <i><a href="http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html">Fonte: Scalable system design patterns</a></i>
</p>

Balanceadores de carga distribuem as requisições recebidas dos clientes entre recursos computacionais, como servidores de aplicação e bancos de dados. Em cada caso, o balanceador retorna ao cliente apropriado a resposta produzida pelo recurso computacional. Balanceadores de carga são eficazes para:

* impedir que requisições sejam enviadas a servidores com falhas ou indisponíveis;
* impedir a sobrecarga de recursos;
* ajudar a eliminar pontos únicos de falha.

Balanceadores de carga podem ser implementados em hardware, geralmente mais caro, ou em software, como o HAProxy.

Outros benefícios incluem:

* **Terminação SSL** — descriptografar requisições recebidas e criptografar respostas dos servidores, evitando que os servidores de backend executem essas operações potencialmente custosas.
    * Elimina a necessidade de instalar [certificados X.509](https://en.wikipedia.org/wiki/X.509) em cada servidor.
* **Persistência de sessão** — emitir cookies e direcionar as requisições de um cliente para a mesma instância quando as aplicações web não gerenciam as sessões de outra maneira.

Para proteger o sistema contra falhas, é comum configurar vários balanceadores de carga nos modos [ativo-passivo](#ativo-passivo) ou [ativo-ativo](#ativo-ativo).

Os balanceadores podem rotear tráfego com base em diferentes métricas e estratégias, incluindo:

* distribuição aleatória;
* servidor menos carregado;
* sessão ou cookies;
* [round robin ou round robin ponderado](https://www.g33kinfo.com/info/round-robin-vs-weighted-round-robin-lb);
* [camada 4](#balanceamento-de-carga-na-camada-4);
* [camada 7](#balanceamento-de-carga-na-camada-7).

<a id="balanceamento-de-carga-na-camada-4"></a>
### Balanceamento de carga na camada 4

Balanceadores de carga da camada 4 analisam informações da [camada de transporte](#comunicacao) para decidir como distribuir as requisições. Em geral, isso envolve os endereços IP de origem e destino e as portas presentes no cabeçalho, mas não o conteúdo do pacote. Esses balanceadores encaminham pacotes de rede para o servidor upstream e recebem seus pacotes de resposta, realizando [tradução de endereços de rede — Network Address Translation (NAT)](https://web.archive.org/web/20240117134735/https://www.nginx.com/resources/glossary/layer-4-load-balancing/).

<a id="balanceamento-de-carga-na-camada-7"></a>
### Balanceamento de carga na camada 7

Balanceadores de carga da camada 7 analisam informações da [camada de aplicação](#comunicacao) para decidir como distribuir as requisições. Isso pode envolver o conteúdo de cabeçalhos, mensagens e cookies. Esses balanceadores terminam a conexão de rede, leem a mensagem, tomam a decisão de balanceamento e abrem uma nova conexão com o servidor selecionado. Por exemplo, um balanceador da camada 7 pode direcionar tráfego de vídeo para servidores que hospedam vídeos e encaminhar tráfego sensível de faturamento para servidores com segurança reforçada.

Em troca de menor flexibilidade, o balanceamento na camada 4 exige menos tempo e recursos computacionais do que o balanceamento na camada 7, embora o impacto de desempenho possa ser pequeno em hardware moderno de uso geral.

<a id="escalabilidade-horizontal"></a>
### Escalabilidade horizontal

Balanceadores de carga também auxiliam na escalabilidade horizontal, melhorando o desempenho e a disponibilidade. Escalar horizontalmente com máquinas comuns é mais econômico e oferece maior disponibilidade do que ampliar um único servidor com hardware mais caro, abordagem conhecida como **escalabilidade vertical**. Também costuma ser mais fácil contratar profissionais com experiência em hardware comum do que em sistemas corporativos especializados.

#### Desvantagens da escalabilidade horizontal

* A escalabilidade horizontal introduz complexidade e exige a clonagem de servidores:
    * os servidores devem ser stateless (sem estado), sem armazenar dados relacionados ao usuário, como sessões ou fotos de perfil;
    * as sessões podem ser armazenadas em um repositório centralizado, como um [banco de dados](#banco-de-dados), SQL ou NoSQL, ou um [cache](#cache) persistente, como Redis ou Memcached.
* Servidores downstream, como caches e bancos de dados, precisam lidar com mais conexões simultâneas conforme os servidores upstream são escalados horizontalmente.

### Desvantagens do balanceador de carga

* O balanceador pode se tornar um gargalo de desempenho quando não possui recursos suficientes ou está configurado incorretamente.
* Introduzir um balanceador para ajudar a eliminar um ponto único de falha aumenta a complexidade.
* Um único balanceador também é um ponto único de falha; configurar vários balanceadores aumenta ainda mais a complexidade.

### Fontes e leituras complementares

* [NGINX architecture](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
* [HAProxy architecture guide](http://www.haproxy.org/download/1.2/doc/architecture.txt)
* [Scalability](https://web.archive.org/web/20220530193911/https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
* [Wikipedia](https://en.wikipedia.org/wiki/Load_balancing_(computing))
* [Layer 4 load balancing](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)
* [Layer 7 load balancing](https://www.nginx.com/resources/glossary/layer-7-load-balancing/)
* [ELB listener config](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html)

<a id="proxy-reverso-servidor-web"></a>
## Proxy reverso — servidor web

<p align="center">
  <img src="images/n41Azff.png">
  <br/>
  <i><a href="https://upload.wikimedia.org/wikipedia/commons/6/67/Reverse_proxy_h2g2bob.svg">Fonte: Wikipedia</a></i>
  <br/>
</p>

Um proxy reverso é um servidor web que centraliza serviços internos e fornece interfaces unificadas ao público. As requisições dos clientes são encaminhadas a um servidor capaz de atendê-las; em seguida, o proxy reverso devolve a resposta do servidor ao cliente.

Outros benefícios incluem:

* **Maior segurança** — ocultar informações sobre servidores de backend, bloquear endereços IP e limitar o número de conexões por cliente.
* **Maior escalabilidade e flexibilidade** — os clientes enxergam apenas o endereço IP do proxy reverso, permitindo escalar servidores ou alterar suas configurações.
* **Terminação SSL** — descriptografar requisições recebidas e criptografar respostas dos servidores, evitando que os servidores de backend executem essas operações potencialmente custosas.
    * Elimina a necessidade de instalar [certificados X.509](https://en.wikipedia.org/wiki/X.509) em cada servidor.
* **Compressão** — compactar respostas dos servidores.
* **Cache** — devolver respostas armazenadas para requisições em cache.
* **Conteúdo estático** — servir conteúdo estático diretamente:
    * HTML, CSS e JavaScript;
    * fotos;
    * vídeos;
    * outros conteúdos.

<a id="balanceador-de-carga-versus-proxy-reverso"></a>
### Balanceador de carga versus proxy reverso

* Implantar um balanceador de carga é útil quando existem vários servidores. Em geral, os balanceadores direcionam tráfego para um conjunto de servidores que desempenham a mesma função.
* Um proxy reverso pode ser útil mesmo quando existe apenas um servidor web ou servidor de aplicação, disponibilizando os benefícios descritos anteriormente.
* Soluções como NGINX e HAProxy oferecem tanto proxy reverso na camada 7 quanto balanceamento de carga.

### Desvantagens do proxy reverso

* Introduzir um proxy reverso aumenta a complexidade.
* Um único proxy reverso é um ponto único de falha; configurar vários proxies reversos, por exemplo em um [failover](https://en.wikipedia.org/wiki/Failover), aumenta ainda mais a complexidade.

### Fontes e leituras complementares

* [Reverse proxy vs load balancer](https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/)
* [NGINX architecture](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
* [HAProxy architecture guide](http://www.haproxy.org/download/1.2/doc/architecture.txt)
* [Wikipedia](https://en.wikipedia.org/wiki/Reverse_proxy)

<a id="camada-de-aplicacao"></a>
## Camada de aplicação

<p align="center">
  <img src="images/yB5SYwm.png">
  <br/>
  <i><a href="http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer">Fonte: Intro to architecting systems for scale</a></i>
</p>

Separar a camada web da camada de aplicação, também conhecida como camada de plataforma, permite escalar e configurar as duas de forma independente. A inclusão de uma nova API pode exigir novos servidores de aplicação sem necessariamente demandar servidores web adicionais. O **princípio da responsabilidade única** defende serviços pequenos e autônomos que trabalham em conjunto. Equipes pequenas responsáveis por serviços pequenos podem planejar de forma mais agressiva para um crescimento rápido.

Workers (processos de trabalho) na camada de aplicação também ajudam a viabilizar o [assincronismo](#assincronismo).

<a id="microsservicos"></a>
### Microsserviços

Relacionados a essa discussão estão os [microsserviços](https://en.wikipedia.org/wiki/Microservices), que podem ser descritos como um conjunto de serviços pequenos, modulares e implantáveis de forma independente. Cada serviço executa um processo próprio e se comunica por um mecanismo leve e bem definido para atender a um objetivo de negócio.<sup><a href="https://smartbear.com/learn/api-design/microservices/?lang=en-us">1</a></sup>

O Pinterest, por exemplo, poderia ter microsserviços para perfil de usuário, seguidores, feed, pesquisa, upload de fotos e outras funções.

<a id="descoberta-de-servicos"></a>
### Descoberta de serviços

Sistemas como [Consul](https://www.consul.io/docs/index.html), [etcd](https://coreos.com/etcd/docs/latest) e [ZooKeeper](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) podem ajudar os serviços a se encontrar, mantendo registros de nomes, endereços e portas. [Verificações de integridade — health checks](https://www.consul.io/intro/getting-started/checks.html) ajudam a verificar a integridade dos serviços e frequentemente utilizam um endpoint [HTTP](#protocolo-de-transferencia-de-hipertexto-http). Consul e etcd também possuem um [armazenamento chave-valor](#armazenamento-chave-valor) integrado, útil para guardar valores de configuração e outros dados compartilhados.

### Desvantagens da camada de aplicação

* Adicionar uma camada de aplicação com serviços fracamente acoplados exige uma abordagem diferente sob as perspectivas de arquitetura, operações e processos, em comparação com um sistema monolítico.
* Microsserviços podem aumentar a complexidade de implantação e operação.

### Fontes e leituras complementares

* [Intro to architecting systems for scale](http://lethain.com/introduction-to-architecting-systems-for-scale)
* [Crack the system design interview](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)
* [Service oriented architecture](https://en.wikipedia.org/wiki/Service-oriented_architecture)
* [Introduction to ZooKeeper](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper)
* [Here's what you need to know about building microservices](https://cloudncode.wordpress.com/2016/07/22/msa-getting-started/)

<a id="banco-de-dados"></a>
## Banco de dados

<p align="center">
  <img src="images/Xkm5CXz.png">
  <br/>
  <i><a href="https://www.youtube.com/watch?v=kKjm4ehYiMs">Fonte: Scaling up to your first 10 million users</a></i>
</p>

<a id="sistema-gerenciador-de-banco-de-dados-relacional-sgbdr"></a>
### Sistema gerenciador de banco de dados relacional — SGBDR

Um banco de dados relacional organiza dados em tabelas relacionadas e normalmente utiliza SQL para definir, consultar e manipular essas informações.

**ACID** é um conjunto de propriedades das [transações](https://en.wikipedia.org/wiki/Database_transaction) de bancos de dados relacionais.

* **Atomicidade** — cada transação é executada por completo ou não é executada.
* **Consistência** — cada transação leva o banco de dados de um estado válido para outro estado válido.
* **Isolamento** — a execução concorrente de transações produz os mesmos resultados que sua execução serial.
* **Durabilidade** — depois que uma transação é confirmada, seus efeitos permanecem registrados.

Existem diversas técnicas para escalar um banco de dados relacional: **replicação master-slave**, **replicação master-master**, **federação**, **sharding**, **desnormalização** e **otimização de SQL**.

<a id="replicacao-master-slave"></a>
#### Replicação master-slave

O servidor master atende leituras e escritas e replica as escritas para um ou mais servidores slave, que atendem somente leituras. Os slaves também podem replicar dados para outros slaves em uma estrutura semelhante a uma árvore. Caso o master fique indisponível, o sistema pode continuar operando em modo somente leitura até que um slave seja promovido a master ou um novo master seja provisionado.

<p align="center">
  <img src="images/C9ioGtn.png">
  <br/>
  <i><a href="http://www.slideshare.net/jboner/scalability-availability-stability-patterns/">Fonte: Scalability, availability, stability, patterns</a></i>
</p>

##### Desvantagens da replicação master-slave

* É necessária lógica adicional para promover um slave a master.
* Consulte [Desvantagens da replicação](#desvantagens-da-replicacao) para os pontos relacionados **tanto** à replicação master-slave quanto à master-master.

<a id="replicacao-master-master"></a>
#### Replicação master-master

Os dois servidores master atendem leituras e escritas e coordenam entre si as operações de escrita. Caso um dos masters fique indisponível, o sistema pode continuar processando leituras e escritas.

<p align="center">
  <img src="images/krAHLGg.png">
  <br/>
  <i><a href="http://www.slideshare.net/jboner/scalability-availability-stability-patterns/">Fonte: Scalability, availability, stability, patterns</a></i>
</p>

##### Desvantagens da replicação master-master

* É necessário utilizar um balanceador de carga ou alterar a lógica da aplicação para determinar em qual servidor realizar cada escrita.
* A maioria dos sistemas master-master apresenta consistência fraca, violando ACID, ou maior latência de escrita devido à sincronização.
* A resolução de conflitos se torna mais relevante à medida que novos nós de escrita são adicionados e a latência aumenta.
* Consulte [Desvantagens da replicação](#desvantagens-da-replicacao) para os pontos relacionados **tanto** à replicação master-slave quanto à master-master.

<a id="desvantagens-da-replicacao"></a>
##### Desvantagens da replicação

* Existe a possibilidade de perda de dados quando o master falha antes que dados recém-gravados sejam replicados para os outros nós.
* As escritas são reproduzidas nas réplicas de leitura. Quando há muitas escritas, essas réplicas podem ficar ocupadas reproduzindo as alterações e ter menor capacidade para processar leituras.
* Quanto maior o número de réplicas de leitura, maior o volume de dados a replicar e, consequentemente, maior pode ser o atraso de replicação.
* Em alguns sistemas, a escrita no master pode utilizar várias threads em paralelo, enquanto as réplicas de leitura suportam somente a aplicação sequencial das escritas por uma única thread.
* A replicação exige mais hardware e adiciona complexidade.

##### Fontes e leituras complementares: replicação

* [Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)
* [Multi-master replication](https://en.wikipedia.org/wiki/Multi-master_replication)

<a id="federacao"></a>
#### Federação

<p align="center">
  <img src="images/U3qV33e.png">
  <br/>
  <i><a href="https://www.youtube.com/watch?v=kKjm4ehYiMs">Fonte: Scaling up to your first 10 million users</a></i>
</p>

A federação, também chamada de particionamento funcional, divide os bancos de dados de acordo com suas funções. Por exemplo, em vez de um único banco monolítico, podem existir três bancos separados: **fóruns**, **usuários** e **produtos**. Isso reduz o tráfego de leitura e escrita em cada banco e, portanto, o atraso de replicação. Bancos menores permitem que uma parcela maior dos dados permaneça em memória, aumentando os acertos de cache devido à melhor localidade. Como não existe um único master central serializando todas as escritas, é possível escrever em paralelo e aumentar o throughput.

##### Desvantagens da federação

* A federação não é eficaz quando o esquema exige funções ou tabelas muito grandes.
* É necessário atualizar a lógica da aplicação para determinar em qual banco realizar cada leitura ou escrita.
* Combinar dados de dois bancos fica mais complexo e pode exigir um [servidor vinculado](http://stackoverflow.com/questions/5145637/querying-data-by-joining-two-tables-in-two-database-on-different-servers).
* A federação exige mais hardware e adiciona complexidade.

##### Fontes e leituras complementares: federação

* [Scaling up to your first 10 million users](https://www.youtube.com/watch?v=kKjm4ehYiMs)

<a id="particionamento-horizontal-sharding"></a>
#### Particionamento horizontal — sharding

<p align="center">
  <img src="images/wU8x5Id.png">
  <br/>
  <i><a href="http://www.slideshare.net/jboner/scalability-availability-stability-patterns/">Fonte: Scalability, availability, stability, patterns</a></i>
</p>

O sharding distribui os dados entre bancos distintos, de modo que cada banco gerencie somente um subconjunto das informações. Em um banco de usuários, por exemplo, novos shards podem ser adicionados ao cluster à medida que a quantidade de usuários aumenta.

Assim como na [federação](#federacao), o sharding reduz o tráfego de leitura e escrita, o volume de replicação e aumenta os acertos de cache. O tamanho dos índices também é reduzido, o que normalmente melhora o desempenho e acelera as consultas. Caso um shard fique indisponível, os demais continuam operando, embora seja recomendável utilizar alguma forma de replicação para evitar perda de dados. Assim como na federação, não existe um único master central serializando as escritas; portanto, é possível escrever em paralelo e aumentar o throughput.

Formas comuns de particionar uma tabela de usuários incluem utilizar a inicial do sobrenome ou a localização geográfica do usuário.

##### Desvantagens do sharding

* É necessário atualizar a lógica da aplicação para trabalhar com shards, o que pode resultar em consultas SQL complexas.
* A distribuição de dados pode ficar desequilibrada. Por exemplo, concentrar usuários muito ativos em um shard pode gerar uma carga maior nele do que nos demais.
    * O rebalanceamento adiciona complexidade. Uma função de particionamento baseada em [hashing consistente](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html) pode reduzir a quantidade de dados transferidos.
* Combinar dados provenientes de vários shards é mais complexo.
* O sharding exige mais hardware e adiciona complexidade.

##### Fontes e leituras complementares: sharding

* [The coming of the shard](http://highscalability.com/blog/2009/8/6/an-unorthodox-approach-to-database-design-the-coming-of-the.html)
* [Shard database architecture](https://en.wikipedia.org/wiki/Shard_(database_architecture))
* [Consistent hashing](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html)

<a id="desnormalizacao"></a>
#### Desnormalização

A desnormalização busca melhorar o desempenho das leituras em troca de parte do desempenho das escritas. Cópias redundantes dos dados são gravadas em várias tabelas para evitar joins custosos. Alguns SGBDRs, como [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) e Oracle, oferecem [visões materializadas](https://en.wikipedia.org/wiki/Materialized_view), que armazenam informações redundantes e mantêm as cópias consistentes.

Quando os dados são distribuídos com técnicas como [federação](#federacao) e [sharding](#particionamento-horizontal-sharding), gerenciar joins entre data centers aumenta ainda mais a complexidade. A desnormalização pode evitar a necessidade desses joins complexos.

Na maioria dos sistemas, a quantidade de leituras pode superar a de escritas em proporções de 100 para 1 ou até 1.000 para 1. Uma leitura que exige um join complexo pode ser muito custosa e consumir um tempo significativo em operações de disco.

##### Desvantagens da desnormalização

* Os dados são duplicados.
* Restrições podem ajudar a manter as cópias redundantes sincronizadas, mas aumentam a complexidade do design do banco de dados.
* Um banco desnormalizado submetido a uma carga intensa de escritas pode apresentar desempenho inferior ao de sua versão normalizada.

##### Fontes e leituras complementares: desnormalização

* [Denormalization](https://en.wikipedia.org/wiki/Denormalization)

<a id="otimizacao-de-sql"></a>
#### Otimização de SQL

A otimização de SQL é um tema amplo, sobre o qual muitos [livros](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=sql+tuning) foram escritos.

É importante realizar **benchmarks** e **profiling** para simular cargas e identificar gargalos.

* **Benchmark** — simule situações de carga elevada com ferramentas como o [ab](http://httpd.apache.org/docs/2.2/programs/ab.html).
* **Profiling** — habilite ferramentas como o [log de consultas lentas](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html) para localizar problemas de desempenho.

Os resultados de benchmarks e profiling podem indicar as otimizações a seguir.

##### Otimize o esquema

* O MySQL grava dados em disco em blocos contíguos para permitir acesso rápido.
* Considere `CHAR` para campos realmente fixos e `VARCHAR` para comprimentos variáveis.
    * O impacto de desempenho e armazenamento depende do SGBDR, do conjunto de caracteres e do padrão de acesso.
* Considere `TEXT` para grandes blocos de texto, como publicações de blog. Os recursos de busca textual dependem do SGBDR e dos índices configurados. O armazenamento físico de campos `TEXT` também varia conforme o mecanismo utilizado.
* Use `INT` para valores inteiros; no MySQL, o intervalo depende de a coluna estar definida como assinada (`SIGNED`) ou não assinada (`UNSIGNED`).
* Use `DECIMAL` para valores monetários, evitando erros de representação de ponto flutuante.
* Evite armazenar `BLOBs` grandes; prefira armazenar a localização do objeto.
* `VARCHAR(255)` é comum por razões históricas e de compatibilidade, mas o tamanho deve ser definido conforme o domínio dos dados e o conjunto de caracteres, não como padrão universal.
* Defina a restrição `NOT NULL` quando aplicável para [melhorar o desempenho das buscas](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search).

##### Use índices adequados

* Colunas utilizadas em consultas com `SELECT`, `GROUP BY`, `ORDER BY` e `JOIN` podem se beneficiar de índices.
* Os índices normalmente são representados por [árvores B](https://en.wikipedia.org/wiki/B-tree) autoequilibradas, que mantêm os dados ordenados e permitem buscas, acesso sequencial, inserções e remoções em tempo logarítmico.
* Manter um índice pode conservar dados em memória, mas exige mais espaço.
* As escritas também podem ficar mais lentas, porque os índices precisam ser atualizados.
* Ao carregar grandes volumes de dados, pode ser mais rápido desabilitar os índices, carregar as informações e depois reconstruí-los.

##### Evite joins custosos

* [Desnormalize](#desnormalizacao) quando o desempenho exigir.

##### Particione as tabelas

* Divida uma tabela colocando pontos de acesso intenso em uma tabela separada, ajudando a manter esses dados em memória.

##### Ajuste o cache de consultas, quando disponível

* Em versões e SGBDRs que oferecem esse recurso, o [cache de consultas](https://dev.mysql.com/doc/refman/5.7/en/query-cache.html) pode causar [problemas de desempenho](https://www.percona.com/blog/2016/10/12/mysql-5-7-performance-tuning-immediately-after-installation/).

##### Fontes e leituras complementares: otimização de SQL

* [Optimizing SQL statements](https://dev.mysql.com/doc/refman/8.4/en/statement-optimization.html)
* [Is there a good reason i see VARCHAR(255) used so often?](http://stackoverflow.com/questions/1217466/is-there-a-good-reason-i-see-varchar255-used-so-often-as-opposed-to-another-l)
* [How do null values affect performance?](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search)
* [Slow query log](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html)

<a id="nosql"></a>
### NoSQL

NoSQL reúne modelos de armazenamento nos quais os dados podem ser representados em um **armazenamento chave-valor**, **armazenamento de documentos**, **armazenamento em colunas largas** ou **banco de dados de grafos**. Em geral, os dados são desnormalizados e os joins são realizados pelo código da aplicação. O suporte a transações ACID varia entre produtos e escopos de operação; muitos modelos NoSQL ainda favorecem a [consistência eventual](#consistência-eventual).

A sigla **BASE** é frequentemente utilizada para descrever propriedades de bancos NoSQL. Em comparação com o [teorema CAP](#teorema-cap), BASE prioriza disponibilidade em vez de consistência.

* **Basicamente disponível — Basically available** — o sistema garante disponibilidade.
* **Estado flexível — Soft state** — o estado do sistema pode mudar ao longo do tempo, mesmo sem novas entradas.
* **Consistência eventual — Eventual consistency** — o sistema se tornará consistente depois de determinado período, desde que não receba novas entradas durante esse intervalo.

Além de escolher entre [SQL ou NoSQL](#sql-ou-nosql), é importante compreender qual categoria de banco NoSQL atende melhor aos casos de uso. As próximas seções apresentam **armazenamentos chave-valor**, **armazenamentos de documentos**, **armazenamentos em colunas largas** e **bancos de dados de grafos**.

<a id="armazenamento-chave-valor"></a>
#### Armazenamento chave-valor

> Abstração: tabela hash

Um armazenamento chave-valor pode oferecer leituras e escritas próximas de `O(1)`, conforme a estrutura e a implementação, e costuma utilizar memória ou SSD como base. Esses armazenamentos podem manter as chaves em [ordem lexicográfica](https://en.wikipedia.org/wiki/Lexicographical_order), permitindo recuperar intervalos de chaves de maneira eficiente. Também podem associar metadados aos valores armazenados.

Armazenamentos chave-valor oferecem alto desempenho e são utilizados com frequência em modelos de dados simples ou em dados que mudam rapidamente, como uma camada de cache em memória. Como disponibilizam um conjunto limitado de operações, a complexidade é transferida para a camada de aplicação quando são necessárias operações adicionais.

O modelo chave-valor serve como base para sistemas mais complexos, como armazenamentos de documentos e, em alguns casos, bancos de dados de grafos.

##### Fontes e leituras complementares: armazenamento chave-valor

* [Key-value database](https://en.wikipedia.org/wiki/Key-value_database)
* [Disadvantages of key-value stores](http://stackoverflow.com/questions/4056093/what-are-the-disadvantages-of-using-a-key-value-table-over-nullable-columns-or)
* [Redis internals](https://redis.io/docs/latest/operate/oss_and_stack/reference/internals/)
* [Memcached architecture](https://adayinthelifeof.nl/2011/02/06/memcache-internals/)

<a id="armazenamento-de-documentos"></a>
#### Armazenamento de documentos

> Abstração: armazenamento chave-valor com documentos armazenados como valores

Um armazenamento de documentos é organizado em torno de documentos, como XML, JSON ou dados binários, nos quais cada documento reúne todas as informações de determinado objeto. Esses armazenamentos oferecem APIs ou linguagens de consulta capazes de pesquisar a estrutura interna do próprio documento. *Muitos armazenamentos chave-valor também oferecem recursos para trabalhar com metadados dos valores, tornando menos nítida a fronteira entre essas duas categorias.*

Conforme a implementação, os documentos são organizados em coleções, tags, metadados ou diretórios. Embora possam ser agrupados, documentos da mesma coleção podem conter campos completamente diferentes.

Alguns armazenamentos de documentos, como [MongoDB](https://www.mongodb.com/mongodb-architecture) e [CouchDB](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/), também oferecem linguagens semelhantes a SQL para consultas complexas. O [DynamoDB](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf) oferece suporte tanto ao modelo chave-valor quanto a documentos.

Armazenamentos de documentos oferecem grande flexibilidade e são utilizados com frequência para dados cuja estrutura muda ocasionalmente.

##### Fontes e leituras complementares: armazenamento de documentos

* [Document-oriented database](https://en.wikipedia.org/wiki/Document-oriented_database)
* [MongoDB architecture](https://www.mongodb.com/mongodb-architecture)
* [CouchDB architecture](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/)
* [Elasticsearch architecture](https://www.elastic.co/blog/found-elasticsearch-from-the-bottom-up)

<a id="armazenamento-em-colunas-largas"></a>
#### Armazenamento em colunas largas

<p align="center">
  <img src="images/n16iOGk.png">
  <br/>
  <i><a href="http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html">Fonte: SQL & NoSQL, a brief history</a></i>
</p>

> Abstração: mapa aninhado `ColumnFamily<RowKey, Columns<ColKey, Value, Timestamp>>`

A unidade básica de dados em um armazenamento em colunas largas é uma coluna, composta por nome e valor. Colunas podem ser agrupadas em famílias de colunas, de forma análoga a tabelas SQL. Superfamílias de colunas podem agrupar várias famílias. Cada coluna é acessada de forma independente por uma chave de linha; colunas com a mesma chave formam uma linha. Cada valor contém um timestamp utilizado para versionamento e resolução de conflitos.

O Google apresentou o [Bigtable](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf), primeiro armazenamento em colunas largas, que influenciou o [HBase](https://www.edureka.co/blog/hbase-architecture/) open source, frequentemente utilizado no ecossistema Hadoop, e o [Cassandra](http://docs.datastax.com/en/cassandra/3.0/cassandra/architecture/archIntro.html), criado pelo Facebook. Sistemas como Bigtable, HBase e Cassandra mantêm as chaves em ordem lexicográfica, permitindo recuperar intervalos específicos com eficiência.

Armazenamentos em colunas largas oferecem alta disponibilidade e elevada escalabilidade. São utilizados com frequência em conjuntos de dados muito grandes.

##### Fontes e leituras complementares: armazenamento em colunas largas

* [SQL & NoSQL, a brief history](http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html)
* [Bigtable architecture](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf)
* [HBase architecture](https://www.edureka.co/blog/hbase-architecture/)
* [Cassandra architecture](http://docs.datastax.com/en/cassandra/3.0/cassandra/architecture/archIntro.html)

<a id="banco-de-dados-de-grafos"></a>
#### Banco de dados de grafos

<p align="center">
  <img src="images/fNcl65g.png">
  <br/>
  <i><a href="https://en.wikipedia.org/wiki/File:GraphDatabase_PropertyGraph.png">Fonte: Graph database</a></i>
</p>

> Abstração: grafo

Em um banco de dados de grafos, cada nó representa um registro e cada aresta representa uma relação entre dois nós. Esses bancos são otimizados para representar relações complexas que, em um modelo relacional, poderiam exigir muitas chaves estrangeiras ou relações muitos-para-muitos.

Bancos de dados de grafos oferecem alto desempenho para modelos com relações complexas, como redes sociais. São relativamente recentes e ainda não são utilizados tão amplamente quanto outros modelos; por isso, pode ser mais difícil encontrar ferramentas e recursos de desenvolvimento. Muitos bancos de grafos também oferecem [APIs REST](#transferencia-de-estado-representacional-rest).

##### Fontes e leituras complementares: bancos de dados de grafos

* [Graph database](https://en.wikipedia.org/wiki/Graph_database)
* [Neo4j](https://neo4j.com/)
* [FlockDB](https://blog.twitter.com/2010/introducing-flockdb)

#### Fontes e leituras complementares: NoSQL

* [Explanation of base terminology](http://stackoverflow.com/questions/3342497/explanation-of-base-terminology)
* [NoSQL databases a survey and decision guidance](https://medium.com/baqend-blog/nosql-databases-a-survey-and-decision-guidance-ea7823a822d#.wskogqenq)
* [Scalability](https://web.archive.org/web/20220602114024/https://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
* [Introduction to NoSQL](https://www.youtube.com/watch?v=qI_g07C_Q5I)
* [NoSQL patterns](http://horicky.blogspot.com/2009/11/nosql-patterns.html)

<a id="sql-ou-nosql"></a>
### SQL ou NoSQL

<p align="center">
  <img src="images/wXGqG5f.png">
  <br/>
  <i><a href="https://www.infoq.com/articles/Transition-RDBMS-NoSQL/">Fonte: Transitioning from RDBMS to NoSQL</a></i>
</p>

Razões para utilizar **SQL**:

* dados estruturados;
* esquema rígido;
* dados relacionais;
* necessidade de joins complexos;
* transações;
* padrões bem estabelecidos de escalabilidade;
* ecossistema mais maduro, incluindo profissionais, comunidade, código e ferramentas;
* consultas por índice muito rápidas.

Razões para utilizar **NoSQL**:

* dados semiestruturados;
* esquema dinâmico ou flexível;
* dados não relacionais;
* ausência de necessidade de joins complexos;
* armazenamento de muitos terabytes ou petabytes de dados;
* cargas de trabalho intensivas em dados;
* taxa muito elevada de operações de entrada e saída por segundo — IOPS.

Exemplos de dados adequados a NoSQL:

* ingestão rápida de clickstream e logs;
* rankings ou pontuações;
* dados temporários, como um carrinho de compras;
* tabelas acessadas com muita frequência, ou *hot tables*;
* tabelas de metadados ou consulta.

##### Fontes e leituras complementares: SQL ou NoSQL

* [Scaling up to your first 10 million users](https://www.youtube.com/watch?v=kKjm4ehYiMs)
* [SQL vs NoSQL differences](https://www.sitepoint.com/sql-vs-nosql-differences/)

<a id="cache"></a>
## Cache

<p align="center">
  <img src="images/Q6z24La.png">
  <br/>
  <i><a href="http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html">Fonte: Scalable system design patterns</a></i>
</p>

O uso de cache melhora o tempo de carregamento das páginas e pode reduzir a carga sobre servidores e bancos de dados. Nesse modelo, o componente que atende à requisição verifica primeiro se existe um resultado anterior armazenado e o devolve, evitando uma nova execução.

Bancos de dados normalmente se beneficiam de uma distribuição uniforme de leituras e escritas entre suas partições. Itens populares podem desequilibrar essa distribuição e causar gargalos. Colocar um cache à frente do banco de dados ajuda a absorver cargas desiguais e picos de tráfego.

<a id="cache-no-cliente"></a>
### Cache no cliente

O cache pode ficar no lado do cliente, como no sistema operacional ou navegador, no [lado do servidor](#proxy-reverso-servidor-web) ou em uma camada de cache separada.

<a id="cache-em-cdn"></a>
### Cache em CDN

As [CDNs](#rede-de-distribuicao-de-conteudo) são consideradas uma forma de cache.

<a id="cache-no-servidor-web"></a>
### Cache no servidor web

[Proxies reversos](#proxy-reverso-servidor-web) e caches como o [Varnish](https://www.varnish-cache.org/) podem servir conteúdo estático e dinâmico diretamente. Servidores web também podem armazenar requisições em cache e devolver respostas sem precisar acessar os servidores de aplicação.

<a id="cache-no-banco-de-dados"></a>
### Cache no banco de dados

Normalmente, o banco de dados já inclui algum nível de cache em sua configuração padrão, otimizado para um caso de uso genérico. Ajustar essas configurações para padrões específicos de utilização pode melhorar ainda mais o desempenho.

<a id="cache-na-aplicacao"></a>
### Cache na aplicação

Caches em memória, como Memcached e Redis, são armazenamentos chave-valor posicionados entre a aplicação e o armazenamento de dados. Como as informações ficam na RAM, o acesso é muito mais rápido do que em bancos de dados tradicionais, nos quais os dados permanecem em disco. A RAM é mais limitada do que o disco; por isso, políticas de [substituição de cache](https://en.wikipedia.org/wiki/Cache_replacement_policies), como [least recently used — LRU](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)), ajudam a remover entradas *cold* e manter dados *hot* na memória.

O Redis também oferece recursos adicionais:

* opção de persistência;
* estruturas de dados integradas, como conjuntos ordenados e listas.

Existem vários níveis de cache, agrupados em duas categorias gerais: **consultas ao banco de dados** e **objetos**:

* nível de linha;
* nível de consulta;
* objetos serializáveis completos;
* HTML completamente renderizado.

Em geral, evite caches baseados em arquivos, pois eles dificultam a clonagem de servidores e o auto scaling (escalabilidade automática).

<a id="cache-no-nivel-de-consulta-ao-banco-de-dados"></a>
### Cache no nível de consulta ao banco de dados

Ao consultar o banco de dados, gere um hash da consulta para utilizá-lo como chave e armazene o resultado no cache. Essa abordagem apresenta problemas de expiração:

* é difícil remover do cache o resultado de consultas complexas;
* quando um dado é alterado, como o valor de uma coluna em determinada linha, é necessário remover todas as consultas armazenadas que possam conter o valor modificado.

<a id="cache-no-nivel-de-objeto"></a>
### Cache no nível de objeto

Trate os dados como objetos, de forma semelhante ao código da aplicação. A aplicação monta o conjunto de dados obtido do banco como uma instância de classe ou uma estrutura de dados:

* remova o objeto do cache quando os dados que o originaram forem alterados;
* essa abordagem permite processamento assíncrono: workers montam objetos a partir da versão mais recente armazenada em cache.

Exemplos do que pode ser armazenado em cache:

* sessões de usuários;
* páginas web completamente renderizadas;
* fluxos de atividades;
* dados do grafo de usuários.

<a id="quando-atualizar-o-cache"></a>
### Quando atualizar o cache

Como o cache possui capacidade limitada, é necessário determinar qual estratégia de atualização atende melhor ao caso de uso.

<a id="cache-aside"></a>
#### Cache-aside

<p align="center">
  <img src="images/ONjORqk.png">
  <br/>
  <i><a href="http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast">Fonte: From cache to in-memory data grid</a></i>
</p>

A aplicação é responsável por ler e escrever no armazenamento. O cache não interage diretamente com ele. A aplicação executa o seguinte fluxo:

* procura a entrada no cache e encontra um *cache miss*;
* carrega a entrada do banco de dados;
* adiciona a entrada ao cache;
* devolve a entrada.

```python
def get_user(self, user_id):
    user = cache.get("user.{0}", user_id)
    if user is None:
        user = db.query("SELECT * FROM users WHERE user_id = {0}", user_id)
        if user is not None:
            key = "user.{0}".format(user_id)
            cache.set(key, json.dumps(user))
    return user
```

O [Memcached](https://memcached.org/) costuma ser utilizado dessa maneira.

As leituras seguintes dos dados adicionados ao cache são rápidas. Cache-aside também é conhecido como *lazy loading*. Somente os dados solicitados são armazenados, evitando preencher o cache com informações que não são utilizadas.

##### Desvantagens do cache-aside

* Cada *cache miss* exige três acessos, o que pode causar um atraso perceptível.
* Os dados podem ficar desatualizados quando são modificados no banco. Esse problema pode ser reduzido definindo um tempo de vida — TTL — que force a atualização da entrada ou utilizando write-through.
* Quando um nó falha, ele é substituído por um nó novo e vazio, aumentando a latência.

<a id="write-through"></a>
#### Write-through

<p align="center">
  <img src="images/0vBc0hN.png">
  <br/>
  <i><a href="http://www.slideshare.net/jboner/scalability-availability-stability-patterns/">Fonte: Scalability, availability, stability, patterns</a></i>
</p>

A aplicação utiliza o cache como seu principal armazenamento, lendo e escrevendo dados nele, enquanto o cache fica responsável por ler e escrever no banco de dados:

* a aplicação adiciona ou atualiza a entrada no cache;
* o cache grava a entrada de forma síncrona no armazenamento de dados;
* a operação é concluída.

Código da aplicação:

```python
set_user(12345, {"foo":"bar"})
```

Código do cache:

```python
def set_user(user_id, values):
    user = db.query("UPDATE Users WHERE id = {0}", user_id, values)
    cache.set(user_id, user)
```

A operação write-through é mais lenta devido à escrita, mas as leituras seguintes dos dados recém-gravados são rápidas. Em geral, usuários toleram melhor a latência durante a atualização de dados do que durante sua leitura. Os dados armazenados no cache não ficam desatualizados.

##### Desvantagens do write-through

* Quando um nó novo é criado após uma falha ou durante a escalabilidade, ele não terá entradas em cache até que os dados correspondentes sejam atualizados no banco. Utilizar cache-aside em conjunto com write-through pode reduzir esse problema.
* Grande parte dos dados gravados talvez nunca seja lida, o que pode ser minimizado com um TTL.

<a id="write-behind-write-back"></a>
#### Write-behind — write-back

<p align="center">
  <img src="images/rgSrvjG.png">
  <br/>
  <i><a href="http://www.slideshare.net/jboner/scalability-availability-stability-patterns/">Fonte: Scalability, availability, stability, patterns</a></i>
</p>

No write-behind, a aplicação executa o seguinte fluxo:

* adiciona ou atualiza a entrada no cache;
* grava a entrada de forma assíncrona no armazenamento de dados, melhorando o desempenho das escritas.

##### Desvantagens do write-behind

* Pode ocorrer perda de dados quando o cache fica indisponível antes que seu conteúdo seja gravado no armazenamento de dados.
* Implementar write-behind é mais complexo do que implementar cache-aside ou write-through.

<a id="refresh-ahead"></a>
#### Refresh-ahead

<p align="center">
  <img src="images/kxtjqgE.png">
  <br/>
  <i><a href="http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast">Fonte: From cache to in-memory data grid</a></i>
</p>

O cache pode ser configurado para atualizar automaticamente entradas acessadas recentemente antes que expirem.

O refresh-ahead pode reduzir a latência em comparação com read-through quando o cache consegue prever com precisão quais itens provavelmente serão necessários no futuro.

##### Desvantagens do refresh-ahead

* Previsões imprecisas sobre quais itens serão necessários podem produzir desempenho inferior ao de um sistema sem refresh-ahead.

### Desvantagens do cache

* É necessário manter a consistência entre os caches e a fonte da verdade, como o banco de dados, por meio da [invalidação de cache](https://en.wikipedia.org/wiki/Cache_algorithms).
* Invalidar cache é um problema difícil; decidir quando atualizá-lo adiciona complexidade.
* É necessário alterar a aplicação para incorporar soluções como Redis ou Memcached.

### Fontes e leituras complementares

* [From cache to in-memory data grid](http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast)
* [Scalable system design patterns](http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html)
* [Introduction to architecting systems for scale](http://lethain.com/introduction-to-architecting-systems-for-scale/)
* [Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)
* [Scalability](https://web.archive.org/web/20230126233752/https://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
* [AWS ElastiCache strategies](http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/Strategies.html)
* [Wikipedia](https://en.wikipedia.org/wiki/Cache_(computing))

<a id="assincronismo"></a>
## Assincronismo

<p align="center">
  <img src="images/54GYsSx.png">
  <br/>
  <i><a href="http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer">Fonte: Intro to architecting systems for scale</a></i>
</p>

Fluxos assíncronos ajudam a reduzir o tempo das requisições em operações custosas que, de outra forma, seriam executadas no fluxo síncrono. Eles também permitem executar antecipadamente tarefas demoradas, como agregações periódicas de dados.

<a id="filas-de-mensagens"></a>
### Filas de mensagens

Filas de mensagens recebem, mantêm e entregam mensagens. Quando uma operação é lenta demais para ser executada no fluxo da requisição, pode-se utilizar uma fila com o seguinte processo:

* uma aplicação publica uma tarefa (*job*) na fila e informa ao usuário o status do processamento;
* um *worker* retira a tarefa da fila, processa-a e sinaliza sua conclusão.

O usuário não fica bloqueado, e a tarefa é processada em segundo plano. Durante esse período, o cliente pode executar uma pequena quantidade de processamento para transmitir a impressão de que a tarefa já foi concluída. Ao publicar um tweet, por exemplo, ele pode aparecer imediatamente na timeline do usuário, embora sua entrega efetiva a todos os seguidores ainda leve algum tempo.

O **[Redis](https://redis.io/)** é útil como um message broker simples, mas mensagens podem ser perdidas.

O **[RabbitMQ](https://www.rabbitmq.com/)** é popular, mas exige que a aplicação adote o protocolo AMQP e que a equipe gerencie os próprios nós.

O **[Amazon SQS](https://aws.amazon.com/sqs/)** é um serviço gerenciado, mas pode apresentar alta latência e entregar a mesma mensagem mais de uma vez.

<a id="filas-de-tarefas"></a>
### Filas de tarefas

Filas de tarefas recebem tarefas e seus dados relacionados, executam-nas e entregam os resultados. Elas podem oferecer agendamento e executar em segundo plano tarefas que exigem grande capacidade computacional.

O **[Celery](https://docs.celeryproject.org/en/stable/)** oferece suporte a agendamento e é utilizado principalmente com Python.

<a id="backpressure"></a>
### Backpressure

Quando as filas crescem de maneira significativa, seu tamanho pode ultrapassar a capacidade da memória, provocando *cache misses*, leituras em disco e desempenho ainda menor. O [backpressure](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html), ou contrapressão, ajuda a limitar o tamanho da fila, preservando throughput elevado e bons tempos de resposta para as tarefas que já estão aguardando processamento. Quando a fila atinge seu limite, os clientes recebem uma indicação de servidor ocupado ou o status HTTP 503 e devem tentar novamente mais tarde. As novas tentativas podem utilizar [backoff exponencial](https://en.wikipedia.org/wiki/Exponential_backoff).

### Desvantagens do assincronismo

* Casos de uso como cálculos de baixo custo e fluxos em tempo real podem funcionar melhor de forma síncrona, pois a introdução de filas adiciona atrasos e complexidade.

### Fontes e leituras complementares

* [It's all a numbers game](https://www.youtube.com/watch?v=1KRYH75wgy4)
* [Applying back pressure when overloaded](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)
* [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)
* [What is the difference between a message queue and a task queue?](https://www.quora.com/What-is-the-difference-between-a-message-queue-and-a-task-queue-Why-would-a-task-queue-require-a-message-broker-like-RabbitMQ-Redis-Celery-or-IronMQ-to-function)

<a id="comunicacao"></a>
## Comunicação

<p align="center">
  <img src="images/5KeocQs.jpg">
  <br/>
  <i><a href="https://www.cloudflare.com/pt-br/learning/ddos/glossary/open-systems-interconnection-model-osi/">Referência: O que é o modelo OSI?</a></i>
</p>

<a id="protocolo-de-transferencia-de-hipertexto-http"></a>
### Protocolo de transferência de hipertexto — HTTP

HTTP é um protocolo para codificar e transportar dados entre um cliente e um servidor. É um protocolo de requisição e resposta: clientes enviam requisições, e servidores devolvem respostas com o conteúdo relevante e informações sobre o status de processamento. O HTTP é autocontido, permitindo que requisições e respostas atravessem diversos roteadores e servidores intermediários responsáveis por balanceamento de carga, cache, criptografia e compressão.

Uma requisição HTTP básica é composta por um verbo, ou método, e um recurso, ou endpoint. A tabela a seguir apresenta verbos HTTP comuns:

| Verbo | Descrição | Idempotente* | Seguro | Armazenável em cache |
|---|---|---|---|---|
| GET | Lê um recurso | Sim | Sim | Sim |
| POST | Cria um recurso ou aciona um processo que trata dados | Não | Não | Sim, quando a resposta contém informações de validade |
| PUT | Cria ou substitui um recurso | Sim | Não | Não |
| PATCH | Atualiza parcialmente um recurso | Não | Não | Sim, quando a resposta contém informações de validade |
| DELETE | Exclui um recurso | Sim | Não | Não |

*Pode ser chamado várias vezes sem produzir efeitos diferentes.

HTTP é um protocolo da camada de aplicação que depende de protocolos de nível inferior, como **TCP** e **UDP**.

#### Fontes e leituras complementares: HTTP

* [What is HTTP?](https://www.nginx.com/resources/glossary/http/)
* [Difference between HTTP and TCP](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol)
* [Difference between PUT and PATCH](https://laracasts.com/discuss/channels/general-discussion/whats-the-differences-between-put-and-patch?page=1)

<a id="protocolo-de-controle-de-transmissao-tcp"></a>
### Protocolo de controle de transmissão — TCP

<p align="center">
  <img src="images/JdAsdvG.jpg">
  <br/>
  <i><a href="http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/">Fonte: How to make a multiplayer game</a></i>
</p>

TCP é um protocolo orientado a conexão utilizado sobre uma [rede IP](https://en.wikipedia.org/wiki/Internet_Protocol). A conexão é estabelecida e encerrada por meio de um [handshake](https://en.wikipedia.org/wiki/Handshaking). O protocolo fornece um fluxo confiável e ordenado de bytes, detectando corrupção e retransmitindo dados quando necessário, por meio de:

* números de sequência e [campos de checksum](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Checksum_computation) em cada pacote;
* pacotes de [confirmação — acknowledgement](https://en.wikipedia.org/wiki/Acknowledgement_(data_networks)) e retransmissão automática.

Quando o remetente não recebe uma resposta correta, ele reenvia os pacotes. Depois de vários timeouts, a conexão é encerrada. O TCP também implementa [controle de fluxo](https://en.wikipedia.org/wiki/Flow_control_(data)) e [controle de congestionamento](https://en.wikipedia.org/wiki/Network_congestion#Congestion_control). Essas garantias acrescentam overhead e podem aumentar a latência em comparação com UDP.

Para manter throughput elevado, servidores web podem conservar um grande número de conexões TCP abertas, aumentando o consumo de memória. Manter muitas conexões abertas entre threads do servidor web e, por exemplo, um servidor [Memcached](https://memcached.org/) pode ser custoso. O [pool de conexões](https://en.wikipedia.org/wiki/Connection_pool) pode ajudar, assim como a adoção de UDP quando aplicável.

TCP é útil para aplicações que exigem alta confiabilidade, mas são menos sensíveis ao tempo. Alguns exemplos incluem servidores web, comunicação com bancos de dados, SMTP, FTP e SSH.

Prefira TCP a UDP quando:

* todos os dados precisarem chegar intactos;
* você quiser que o protocolo ajuste automaticamente o uso do throughput disponível na rede.

<a id="protocolo-de-datagrama-do-usuario-udp"></a>
### Protocolo de datagrama do usuário — UDP

<p align="center">
  <img src="images/yzDrJtA.jpg">
  <br/>
  <i><a href="http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/">Fonte: How to make a multiplayer game</a></i>
</p>

UDP é um protocolo sem conexão. Os datagramas, equivalentes aos pacotes nesse contexto, recebem garantias apenas no nível individual do datagrama. Eles podem chegar ao destino fora de ordem ou nem sequer chegar. O UDP não oferece controle de congestionamento. Por não fornecer as garantias do TCP, normalmente é mais eficiente.

O UDP permite broadcast, enviando datagramas a todos os dispositivos de uma sub-rede. Isso é útil com o [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol), pois o cliente ainda não recebeu um endereço IP e, portanto, não poderia estabelecer um fluxo TCP utilizando esse endereço.

UDP é menos confiável, mas funciona bem em casos de uso em tempo real, como VoIP, videochamadas, streaming e jogos multiplayer em tempo real.

Prefira UDP a TCP quando:

* você precisar da menor latência possível;
* dados atrasados forem piores do que dados perdidos;
* você quiser implementar seu próprio mecanismo de correção de erros.

#### Fontes e leituras complementares: TCP e UDP

* [Networking for game programming](https://gafferongames.com/post/udp_vs_tcp/)
* [Key differences between TCP and UDP protocols](http://www.cyberciti.biz/faq/key-differences-between-tcp-and-udp-protocols/)
* [Difference between TCP and UDP](http://stackoverflow.com/questions/5970383/difference-between-tcp-and-udp)
* [Transmission control protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
* [User datagram protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
* [Scaling memcache at Facebook](http://www.cs.bu.edu/~jappavoo/jappavoo.github.com/451/papers/memcache-fb.pdf)

<a id="chamada-de-procedimento-remoto-rpc"></a>
### Chamada de procedimento remoto — RPC

<p align="center">
  <img src="images/iF4Mkb5.png">
  <br/>
  <i><a href="http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview">Fonte: Crack the system design interview</a></i>
</p>

Em uma RPC, um cliente solicita a execução de um procedimento em outro espaço de endereçamento, normalmente em um servidor remoto. O procedimento é programado como se fosse uma chamada local, abstraindo do código cliente os detalhes da comunicação com o servidor. Chamadas remotas geralmente são mais lentas e menos confiáveis do que chamadas locais; por isso, é útil distingui-las. Entre as tecnologias usadas em implementações RPC estão [Protocol Buffers](https://developers.google.com/protocol-buffers/), [Thrift](https://thrift.apache.org/) e [Avro](https://avro.apache.org/docs/current/).

A RPC utiliza o modelo de requisição e resposta:

* **Programa cliente** — chama o procedimento stub do cliente. Os parâmetros são colocados na pilha como em uma chamada local.
* **Procedimento stub do cliente** — serializa, ou empacota, o identificador do procedimento e seus argumentos em uma mensagem de requisição.
* **Módulo de comunicação do cliente** — o sistema operacional envia a mensagem do cliente ao servidor.
* **Módulo de comunicação do servidor** — o sistema operacional entrega os pacotes recebidos ao procedimento stub do servidor.
* **Procedimento stub do servidor** — desserializa os dados, chama o procedimento correspondente ao identificador e fornece os argumentos recebidos.
* A resposta do servidor repete as etapas anteriores na ordem inversa.

Exemplos de chamadas RPC:

```
GET /someoperation?data=anId

POST /anotheroperation
{
  "data": "anId",
  "anotherdata": "another value"
}
```

RPC concentra-se em expor comportamentos. RPCs são utilizadas com frequência na comunicação interna por motivos de desempenho, pois permitem criar chamadas nativas ajustadas aos casos de uso.

Escolha uma biblioteca nativa, também chamada de SDK, quando:

* você conhecer a plataforma de destino;
* quiser controlar como sua lógica será acessada;
* quiser controlar como os erros serão expostos e tratados pelos consumidores da biblioteca;
* desempenho e experiência do usuário final forem as principais prioridades.

APIs HTTP que seguem **REST** são utilizadas com mais frequência como APIs públicas.

#### Desvantagens de RPC

* Clientes RPC ficam fortemente acoplados à implementação do serviço.
* Uma nova API precisa ser definida para cada nova operação ou caso de uso.
* A depuração de RPC pode ser difícil.
* Nem sempre é possível aproveitar tecnologias existentes sem adaptações. Por exemplo, pode ser necessário trabalho adicional para garantir que [chamadas RPC sejam armazenadas corretamente em cache](https://web.archive.org/web/20170608193645/http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/) por servidores como o [Squid](http://www.squid-cache.org/).

<a id="transferencia-de-estado-representacional-rest"></a>
### Transferência de estado representacional — REST

REST é um estilo arquitetural que estabelece um modelo cliente-servidor no qual o cliente atua sobre um conjunto de recursos administrados pelo servidor. O servidor fornece representações dos recursos e ações que permitem manipulá-los ou obter novas representações. Toda comunicação deve ser stateless, e cada resposta deve indicar se pode ou não ser armazenada em cache.

Uma interface RESTful possui quatro características:

* **Identificação dos recursos — URI no HTTP** — utilize a mesma URI independentemente da operação.
* **Manipulação de recursos por representações — verbos no HTTP** — utilize verbos, cabeçalhos e corpo.
* **Mensagens de erro autodescritivas — status da resposta HTTP** — utilize códigos de status em vez de criar mecanismos próprios.
* **[HATEOAS](http://restcookbook.com/Basics/hateoas/) — hipermídia como motor do estado da aplicação** — as respostas incluem links que orientam o cliente sobre as ações e transições disponíveis.

Exemplos de chamadas REST:

```
GET /someresources/anId

PUT /someresources/anId
{"anotherdata": "another value"}
```

REST concentra-se em expor dados. Ele reduz o acoplamento entre cliente e servidor e é utilizado com frequência em APIs HTTP públicas. REST adota uma forma mais genérica e uniforme de expor recursos por URIs, representações negociadas por [cabeçalhos](https://github.com/for-GET/know-your-http-well/blob/master/headers.md) e corpos de mensagem, e ações por verbos como GET, POST, PUT, DELETE e PATCH. Por ser stateless, REST é adequado à escalabilidade horizontal e ao particionamento.

#### Desvantagens de REST

* Como REST se concentra em expor dados, pode não ser uma boa opção quando os recursos não são organizados naturalmente ou acessados por uma hierarquia simples. Por exemplo, não é fácil expressar como caminho a consulta de todos os registros atualizados na última hora que correspondam a determinado conjunto de eventos. Em REST, isso provavelmente seria implementado com uma combinação de caminho da URI, parâmetros de consulta e, possivelmente, corpo da requisição.
* REST normalmente utiliza poucos verbos, como GET, POST, PUT, DELETE e PATCH, que nem sempre se ajustam ao caso de uso. Mover documentos expirados para uma pasta de arquivamento, por exemplo, pode não se encaixar de maneira clara nesses verbos.
* A obtenção de recursos complexos com hierarquias aninhadas exige várias idas e voltas entre cliente e servidor para renderizar uma única visualização, como ao buscar uma publicação de blog e seus comentários. Em aplicações móveis sujeitas a condições variáveis de rede, essas várias idas e voltas são especialmente indesejáveis.
* Com o tempo, novos campos podem ser adicionados à resposta de uma API. Clientes antigos passam a receber todos esses campos, inclusive os desnecessários, aumentando o tamanho do payload e a latência.

<a id="comparacao-entre-chamadas-rpc-e-rest"></a>
### Comparação entre chamadas RPC e REST

| Operação | RPC | REST |
|---|---|---|
| Cadastro | **POST** /signup | **POST** /persons |
| Desligamento | **POST** /resign<br/>{<br/>"personid": "1234"<br/>} | **DELETE** /persons/1234 |
| Consultar uma pessoa | **GET** /readPerson?personid=1234 | **GET** /persons/1234 |
| Consultar a lista de itens de uma pessoa | **GET** /readUsersItemsList?personid=1234 | **GET** /persons/1234/items |
| Adicionar um item à lista de uma pessoa | **POST** /addItemToUsersItemsList<br/>{<br/>"personid": "1234",<br/>"itemid": "456"<br/>} | **POST** /persons/1234/items<br/>{<br/>"itemid": "456"<br/>} |
| Atualizar um item | **POST** /modifyItem<br/>{<br/>"itemid": "456",<br/>"key": "value"<br/>} | **PUT** /items/456<br/>{<br/>"key": "value"<br/>} |
| Excluir um item | **POST** /removeItem<br/>{<br/>"itemid": "456"<br/>} | **DELETE** /items/456 |

<p align="center">
  <i><a href="https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/">Fonte: Do you really know why you prefer REST over RPC</a></i>
</p>

#### Fontes e leituras complementares: REST e RPC

* [Do you really know why you prefer REST over RPC](https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/)
* [When are RPC-ish approaches more appropriate than REST?](http://programmers.stackexchange.com/a/181186)
* [REST vs JSON-RPC](http://stackoverflow.com/questions/15056878/rest-vs-json-rpc)
* [Debunking the myths of RPC and REST](https://web.archive.org/web/20170608193645/http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/)
* [What are the drawbacks of using REST](https://www.quora.com/What-are-the-drawbacks-of-using-RESTful-APIs)
* [Crack the system design interview](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)
* [Thrift](https://code.facebook.com/posts/1468950976659943/)
* [Why REST for internal use and not RPC](http://arstechnica.com/civis/viewtopic.php?t=1190508)

<a id="seguranca"></a>
## Segurança

Esta seção precisa de algumas atualizações. Considere [contribuir](#como-contribuir)!

Segurança é um tema amplo. A menos que você tenha experiência considerável, formação em segurança ou esteja se candidatando a uma posição que exija conhecimentos de segurança, provavelmente não precisará conhecer mais do que os fundamentos:

* Criptografe os dados em trânsito e em repouso.
* Valide e sanitize todos os dados fornecidos pelos usuários, assim como qualquer parâmetro que eles possam controlar, para evitar [cross-site scripting — XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) e [injeção de SQL](https://en.wikipedia.org/wiki/SQL_injection).
* Utilize consultas parametrizadas para evitar injeção de SQL.
* Aplique o [princípio do menor privilégio](https://en.wikipedia.org/wiki/Principle_of_least_privilege).

### Fontes e leituras complementares

* [API security checklist](https://github.com/shieldfy/API-Security-Checklist)
* [Security guide for developers](https://github.com/FallibleInc/security-guide-for-developers)
* [OWASP top ten](https://www.owasp.org/index.php/OWASP_Top_Ten_Cheat_Sheet)

<a id="apendice"></a>
## Apêndice

Em algumas entrevistas, poderão pedir que você realize estimativas de ordem de grandeza, também conhecidas como *back-of-the-envelope estimates*. Por exemplo, talvez seja necessário determinar quanto tempo levaria para gerar 100 miniaturas de imagens armazenadas em disco ou quanta memória uma estrutura de dados ocuparia. A **tabela de potências de dois** e os **números de latência que todo programador deve conhecer** são referências úteis para esses cálculos.

<a id="tabela-de-potencias-de-dois"></a>
### Tabela de potências de dois

```
Potência        Valor exato          Valor aproximado     Bytes
----------------------------------------------------------------
7                             128
8                             256
10                           1024    1 mil                 1 KB
16                         65.536                         64 KB
20                      1.048.576    1 milhão              1 MB
30                  1.073.741.824    1 bilhão              1 GB
32                  4.294.967.296                          4 GB
40              1.099.511.627.776    1 trilhão             1 TB
```

#### Fontes e leituras complementares

* [Powers of two](https://en.wikipedia.org/wiki/Power_of_two)

<a id="numeros-de-latencia-que-todo-programador-deve-conhecer"></a>
### Números de latência que todo programador deve conhecer

```
Comparação de números de latência
---------------------------------
Referência ao cache L1                         0,5 ns
Falha de predição de desvio                      5 ns
Referência ao cache L2                           7 ns                      14x o cache L1
Bloqueio/desbloqueio de mutex                   25 ns
Referência à memória principal                 100 ns                      20x o cache L2, 200x o cache L1
Compactar 1 KB com Zippy                    10.000 ns       10 us
Enviar 1 KB por rede de 1 Gbps              10.000 ns       10 us
Ler 4 KB aleatoriamente de SSD*             150.000 ns      150 us          ~1 GB/s no SSD
Ler 1 MB sequencialmente da memória         250.000 ns      250 us
Ida e volta no mesmo data center            500.000 ns      500 us
Ler 1 MB sequencialmente de SSD*          1.000.000 ns    1.000 us    1 ms  ~1 GB/s no SSD, 4x a memória
Tempo de busca do HDD                    10.000.000 ns   10.000 us   10 ms  20x a ida e volta no data center
Ler 1 MB sequencialmente por 1 Gbps      10.000.000 ns   10.000 us   10 ms  40x a memória, 10x o SSD
Ler 1 MB sequencialmente de HDD           30.000.000 ns   30.000 us   30 ms 120x a memória, 30x o SSD
Enviar pacote CA->Países Baixos->CA      150.000.000 ns  150.000 us  150 ms

Observações
-----------
1 ns = 10^-9 segundos
1 us = 10^-6 segundos = 1.000 ns
1 ms = 10^-3 segundos = 1.000 us = 1.000.000 ns
```

Métricas úteis com base nos números anteriores:

* leitura sequencial de HDD a 30 MB/s;
* leitura sequencial por Ethernet de 1 Gbps a 100 MB/s;
* leitura sequencial de SSD a 1 GB/s;
* leitura sequencial da memória principal a 4 GB/s;
* 6 a 7 viagens de ida e volta ao redor do mundo por segundo;
* 2.000 viagens de ida e volta por segundo dentro de um data center.

#### Números de latência visualizados

![Números de latência visualizados](https://camo.githubusercontent.com/77f72259e1eb58596b564d1ad823af1853bc60a3/687474703a2f2f692e696d6775722e636f6d2f6b307431652e706e67)

#### Fontes e leituras complementares

* [Latency numbers every programmer should know - 1](https://gist.github.com/jboner/2841832)
* [Latency numbers every programmer should know - 2](https://gist.github.com/hellerbarde/2843375)
* [Designs, lessons, and advice from building large distributed systems](http://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf)
* [Software Engineering Advice from Building Large-Scale Distributed Systems](https://static.googleusercontent.com/media/research.google.com/en//people/jeff/stanford-295-talk.pdf)

<a id="outras-perguntas-de-entrevista-de-design-de-sistemas"></a>
### Outras perguntas de entrevista de design de sistemas

> Perguntas comuns de entrevista de design de sistemas, com links para recursos que ajudam a resolver cada uma delas.

| Pergunta | Referência(s) |
|---|---|
| Projete um serviço de sincronização de arquivos como o Dropbox | [youtube.com](https://www.youtube.com/watch?v=PE4gwstWhmc) |
| Projete um mecanismo de busca como o Google | [queue.acm.org](http://queue.acm.org/detail.cfm?id=988407)<br/>[stackexchange.com](http://programmers.stackexchange.com/questions/38324/interview-question-how-would-you-implement-google-search)<br/>[ardendertat.com](http://www.ardendertat.com/2012/01/11/implementing-search-engines/)<br/>[stanford.edu](http://infolab.stanford.edu/~backrub/google.html) |
| Projete um rastreador web escalável como o Google | [quora.com](https://www.quora.com/How-can-I-build-a-web-crawler-from-scratch) |
| Projete o Google Docs | [code.google.com](https://code.google.com/p/google-mobwrite/)<br/>[neil.fraser.name](https://neil.fraser.name/writing/sync/) |
| Projete um armazenamento chave-valor como o Redis | [codecapsule.com](http://codecapsule.com/2012/11/07/ikvs-implementing-a-key-value-store-table-of-contents/)<br/>[allthingsdistributed.com](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf) |
| Projete um sistema de cache como o Memcached | [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached) |
| Projete um sistema de recomendação como o da Amazon | [hulu.com](https://web.archive.org/web/20170406065247/http://tech.hulu.com/blog/2011/09/19/recommendation-system.html)<br/>[ijcai13.org](http://ijcai13.org/files/tutorial_slides/td3.pdf) |
| Projete um sistema de URLs curtas como o Bitly | [n00tc0d3r.blogspot.com](http://n00tc0d3r.blogspot.com/) |
| Projete um aplicativo de chat como o WhatsApp | [highscalability.com](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html) |
| Projete um sistema de compartilhamento de imagens como o Instagram | [highscalability.com](http://highscalability.com/flickr-architecture)<br/>[highscalability.com](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html) |
| Projete a funcionalidade de feed de notícias do Facebook | [quora.com](http://www.quora.com/What-are-best-practices-for-building-something-like-a-News-Feed)<br/>[quora.com](http://www.quora.com/Activity-Streams/What-are-the-scaling-issues-to-keep-in-mind-while-developing-a-social-network-feed)<br/>[slideshare.net](http://www.slideshare.net/danmckinley/etsy-activity-feeds-architecture) |
| Projete a funcionalidade de timeline do Facebook | [facebook.com](https://www.facebook.com/note.php?note_id=10150468255628920)<br/>[highscalability.com](http://highscalability.com/blog/2012/1/23/facebook-timeline-brought-to-you-by-the-power-of-denormaliza.html) |
| Projete a funcionalidade de chat do Facebook | [erlang-factory.com](http://www.erlang-factory.com/upload/presentations/31/EugeneLetuchy-ErlangatFacebook.pdf)<br/>[facebook.com](https://www.facebook.com/note.php?note_id=14218138919&id=9445547199&index=0) |
| Projete uma funcionalidade de busca em grafos como a do Facebook | [facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-building-out-the-infrastructure-for-graph-search/10151347573598920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-indexing-and-ranking-in-graph-search/10151361720763920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-the-natural-language-interface-of-graph-search/10151432733048920) |
| Projete uma rede de distribuição de conteúdo como a Cloudflare | [figshare.com](https://figshare.com/articles/Globally_distributed_content_delivery/6605972) |
| Projete um sistema de tópicos em alta como o do Twitter | [michael-noll.com](http://www.michael-noll.com/blog/2013/01/18/implementing-real-time-trending-topics-in-storm/)<br/>[snikolov.wordpress.com](http://snikolov.wordpress.com/2012/11/14/early-detection-of-twitter-trends/) |
| Projete um sistema de geração de identificadores aleatórios | [blog.twitter.com](https://blog.twitter.com/2010/announcing-snowflake)<br/>[github.com](https://github.com/twitter/snowflake/) |
| Retorne as k requisições mais frequentes durante um intervalo de tempo | [cs.ucsb.edu](https://www.cs.ucsb.edu/sites/default/files/documents/2005-23.pdf)<br/>[wpi.edu](http://davis.wpi.edu/xmdv/docs/EDBT11-diyang.pdf) |
| Projete um sistema que forneça dados a partir de vários data centers | [highscalability.com](http://highscalability.com/blog/2009/8/24/how-google-serves-data-from-multiple-datacenters.html) |
| Projete um jogo de cartas multiplayer on-line | [indieflashblog.com](https://web.archive.org/web/20180929181117/http://www.indieflashblog.com/how-to-create-an-asynchronous-multiplayer-game.html)<br/>[buildnewgames.com](http://buildnewgames.com/real-time-multiplayer/) |
| Projete um sistema de coleta de lixo | [stuffwithstuff.com](http://journal.stuffwithstuff.com/2013/12/08/babys-first-garbage-collector/)<br/>[washington.edu](http://courses.cs.washington.edu/courses/csep521/07wi/prj/rick.pdf) |
| Projete um limitador de taxa para APIs | [stripe.com](https://stripe.com/blog/rate-limiters) |
| Projete uma bolsa de valores, como NASDAQ ou Binance | [Jane Street](https://youtu.be/b1e4t2k2KJY)<br/>[Golang Implementation](https://around25.com/blog/building-a-trading-engine-for-a-crypto-exchange/)<br/>[Go Implementation](http://bhomnick.net/building-a-simple-limit-order-in-go/) |
| Adicione uma pergunta de design de sistemas | [Contribua](#como-contribuir) |

<a id="arquiteturas-do-mundo-real"></a>
### Arquiteturas do mundo real

> Artigos sobre como sistemas do mundo real são projetados.

<p align="center">
  <img src="images/TcUo2fw.png">
  <br/>
  <i><a href="https://www.infoq.com/presentations/Twitter-Timeline-Scalability">Fonte: Twitter timelines at scale</a></i>
</p>

**Não se concentre nos detalhes minuciosos dos artigos a seguir. Em vez disso:**

* identifique princípios compartilhados, tecnologias comuns e padrões presentes nos artigos;
* estude quais problemas cada componente resolve, onde funciona e onde não funciona;
* revise as lições aprendidas.

| Tipo | Sistema | Referência(s) |
|---|---|---|
| Processamento de dados | **MapReduce** — processamento distribuído de dados do Google | [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/mapreduce-osdi04.pdf) |
| Processamento de dados | **Spark** — processamento distribuído de dados da Databricks | [slideshare.net](http://www.slideshare.net/AGrishchenko/apache-spark-architecture) |
| Processamento de dados | **Storm** — processamento distribuído de dados do Twitter | [slideshare.net](http://www.slideshare.net/previa/storm-16094009) |
| | | |
| Armazenamento de dados | **Bigtable** — banco de dados distribuído orientado a colunas do Google | [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf) |
| Armazenamento de dados | **HBase** — implementação open source do Bigtable | [slideshare.net](http://www.slideshare.net/alexbaranau/intro-to-hbase) |
| Armazenamento de dados | **Cassandra** — banco de dados distribuído orientado a colunas do Facebook | [slideshare.net](http://www.slideshare.net/planetcassandra/cassandra-introduction-features-30103666) |
| Armazenamento de dados | **DynamoDB** — banco de dados orientado a documentos da Amazon | [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf) |
| Armazenamento de dados | **MongoDB** — banco de dados orientado a documentos | [slideshare.net](http://www.slideshare.net/mdirolf/introduction-to-mongodb) |
| Armazenamento de dados | **Spanner** — banco de dados globalmente distribuído do Google | [research.google.com](http://research.google.com/archive/spanner-osdi2012.pdf) |
| Armazenamento de dados | **Memcached** — sistema distribuído de cache em memória | [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached) |
| Armazenamento de dados | **Redis** — sistema distribuído de cache em memória com persistência e tipos de valores | [slideshare.net](http://www.slideshare.net/dvirsky/introduction-to-redis) |
| | | |
| Sistema de arquivos | **Google File System — GFS** — sistema de arquivos distribuído | [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/gfs-sosp2003.pdf) |
| Sistema de arquivos | **Hadoop File System — HDFS** — implementação open source do GFS | [apache.org](http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html) |
| | | |
| Diversos | **Chubby** — serviço de bloqueio para sistemas distribuídos fracamente acoplados do Google | [research.google.com](http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/archive/chubby-osdi06.pdf) |
| Diversos | **Dapper** — infraestrutura de rastreamento de sistemas distribuídos | [research.google.com](http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36356.pdf) |
| Diversos | **Kafka** — fila de mensagens publish/subscribe do LinkedIn | [slideshare.net](http://www.slideshare.net/mumrah/kafka-talk-tri-hug) |
| Diversos | **ZooKeeper** — infraestrutura e serviços centralizados que permitem sincronização | [slideshare.net](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) |
| | Adicione uma arquitetura | [Contribua](#como-contribuir) |

<a id="arquiteturas-de-empresas"></a>
### Arquiteturas de empresas

| Empresa | Referência(s) |
|---|---|
| Amazon | [Amazon architecture](http://highscalability.com/amazon-architecture) |
| Cinchcast | [Producing 1,500 hours of audio every day](http://highscalability.com/blog/2012/7/16/cinchcast-architecture-producing-1500-hours-of-audio-every-d.html) |
| DataSift | [Realtime datamining At 120,000 tweets per second](http://highscalability.com/blog/2011/11/29/datasift-architecture-realtime-datamining-at-120000-tweets-p.html) |
| Dropbox | [How we've scaled Dropbox](https://www.youtube.com/watch?v=PE4gwstWhmc) |
| ESPN | [Operating At 100,000 duh nuh nuhs per second](http://highscalability.com/blog/2013/11/4/espns-architecture-at-scale-operating-at-100000-duh-nuh-nuhs.html) |
| Google | [Google architecture](http://highscalability.com/google-architecture) |
| Instagram | [14 million users, terabytes of photos](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html)<br/>[What powers Instagram](http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances) |
| Justin.tv | [Justin.Tv's live video broadcasting architecture](http://highscalability.com/blog/2010/3/16/justintvs-live-video-broadcasting-architecture.html) |
| Facebook | [Scaling memcached at Facebook](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/key-value/fb-memcached-nsdi-2013.pdf)<br/>[TAO: Facebook’s distributed data store for the social graph](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/data-store/tao-facebook-distributed-datastore-atc-2013.pdf)<br/>[Facebook’s photo storage](https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Beaver.pdf)<br/>[How Facebook Live Streams To 800,000 Simultaneous Viewers](http://highscalability.com/blog/2016/6/27/how-facebook-live-streams-to-800000-simultaneous-viewers.html) |
| Flickr | [Flickr architecture](http://highscalability.com/flickr-architecture) |
| Mailbox | [From 0 to one million users in 6 weeks](http://highscalability.com/blog/2013/6/18/scaling-mailbox-from-0-to-one-million-users-in-6-weeks-and-1.html) |
| Netflix | [A 360 Degree View Of The Entire Netflix Stack](http://highscalability.com/blog/2015/11/9/a-360-degree-view-of-the-entire-netflix-stack.html)<br/>[Netflix: What Happens When You Press Play?](http://highscalability.com/blog/2017/12/11/netflix-what-happens-when-you-press-play.html) |
| Pinterest | [From 0 To 10s of billions of page views a month](http://highscalability.com/blog/2013/4/15/scaling-pinterest-from-0-to-10s-of-billions-of-page-views-a.html)<br/>[18 million visitors, 10x growth, 12 employees](http://highscalability.com/blog/2012/5/21/pinterest-architecture-update-18-million-visitors-10x-growth.html) |
| Playfish | [50 million monthly users and growing](http://highscalability.com/blog/2010/9/21/playfishs-social-gaming-architecture-50-million-monthly-user.html) |
| PlentyOfFish | [PlentyOfFish architecture](http://highscalability.com/plentyoffish-architecture) |
| Salesforce | [How they handle 1.3 billion transactions a day](http://highscalability.com/blog/2013/9/23/salesforce-architecture-how-they-handle-13-billion-transacti.html) |
| Stack Overflow | [Stack Overflow architecture](http://highscalability.com/blog/2009/8/5/stack-overflow-architecture.html) |
| TripAdvisor | [40M visitors, 200M dynamic page views, 30TB data](http://highscalability.com/blog/2011/6/27/tripadvisor-architecture-40m-visitors-200m-dynamic-page-view.html) |
| Tumblr | [15 billion page views a month](http://highscalability.com/blog/2012/2/13/tumblr-architecture-15-billion-page-views-a-month-and-harder.html) |
| Twitter | [Making Twitter 10000 percent faster](http://highscalability.com/scaling-twitter-making-twitter-10000-percent-faster)<br/>[Storing 250 million tweets a day using MySQL](http://highscalability.com/blog/2011/12/19/how-twitter-stores-250-million-tweets-a-day-using-mysql.html)<br/>[150M active users, 300K QPS, a 22 MB/S firehose](http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html)<br/>[Timelines at scale](https://www.infoq.com/presentations/Twitter-Timeline-Scalability)<br/>[Big and small data at Twitter](https://www.youtube.com/watch?v=5cKTP36HVgI)<br/>[Operations at Twitter: scaling beyond 100 million users](https://www.youtube.com/watch?v=z8LU0Cj6BOU)<br/>[How Twitter Handles 3,000 Images Per Second](http://highscalability.com/blog/2016/4/20/how-twitter-handles-3000-images-per-second.html) |
| Uber | [How Uber scales their real-time market platform](http://highscalability.com/blog/2015/9/14/how-uber-scales-their-real-time-market-platform.html)<br/>[Lessons Learned From Scaling Uber To 2000 Engineers, 1000 Services, And 8000 Git Repositories](http://highscalability.com/blog/2016/10/12/lessons-learned-from-scaling-uber-to-2000-engineers-1000-ser.html) |
| WhatsApp | [The WhatsApp architecture Facebook bought for $19 billion](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html) |
| YouTube | [YouTube scalability](https://www.youtube.com/watch?v=w5WVu624fY8)<br/>[YouTube architecture](http://highscalability.com/youtube-architecture) |

<a id="blogs-de-engenharia-de-empresas"></a>
### Blogs de engenharia de empresas

> Arquiteturas das empresas nas quais você está participando de processos seletivos.
>
> As perguntas encontradas podem pertencer ao mesmo domínio de negócio.

* [Airbnb Engineering](http://nerds.airbnb.com/)
* [Atlassian Developers](https://developer.atlassian.com/blog/)
* [AWS Blog](https://aws.amazon.com/blogs/aws/)
* [Bitly Engineering Blog](http://word.bitly.com/)
* [Box Blogs](https://blog.box.com/blog/category/engineering)
* [Cloudera Developer Blog](http://blog.cloudera.com/)
* [Dropbox Tech Blog](https://tech.dropbox.com/)
* [Engineering at Quora](https://www.quora.com/q/quoraengineering)
* [eBay Tech Blog](http://www.ebaytechblog.com/)
* [Evernote Tech Blog](https://blog.evernote.com/tech/)
* [Etsy Code as Craft](http://codeascraft.com/)
* [Facebook Engineering](https://www.facebook.com/Engineering)
* [Flickr Code](http://code.flickr.net/)
* [Foursquare Engineering Blog](http://engineering.foursquare.com/)
* [GitHub Engineering Blog](https://github.blog/category/engineering)
* [Google Research Blog](http://googleresearch.blogspot.com/)
* [Groupon Engineering Blog](https://engineering.groupon.com/)
* [Heroku Engineering Blog](https://engineering.heroku.com/)
* [HubSpot Engineering Blog](http://product.hubspot.com/blog/topic/engineering)
* [High Scalability](http://highscalability.com/)
* [Instagram Engineering](http://instagram-engineering.tumblr.com/)
* [Intel Software Blog](https://software.intel.com/en-us/blogs/)
* [Jane Street Tech Blog](https://blogs.janestreet.com/category/ocaml/)
* [LinkedIn Engineering](http://engineering.linkedin.com/blog)
* [Microsoft Engineering](https://engineering.microsoft.com/)
* [Microsoft Python Engineering](https://blogs.msdn.microsoft.com/pythonengineering/)
* [Netflix Tech Blog](http://techblog.netflix.com/)
* [PayPal Developer Blog](https://developer.paypal.com/community/blog/)
* [Pinterest Engineering Blog](https://medium.com/@Pinterest_Engineering)
* [Reddit Blog](http://www.redditblog.com/)
* [Salesforce Engineering Blog](https://engineering.salesforce.com/)
* [Slack Engineering Blog](https://slack.engineering/)
* [Spotify Labs](https://labs.spotify.com/)
* [Stripe Engineering Blog](https://stripe.com/blog/engineering)
* [Twilio Engineering Blog](http://www.twilio.com/engineering)
* [Twitter Engineering](https://blog.twitter.com/engineering/)
* [Uber Engineering Blog](http://eng.uber.com/)
* [Yahoo Engineering Blog](http://yahooeng.tumblr.com/)
* [Yelp Engineering Blog](http://engineeringblog.yelp.com/)
* [Zynga Engineering Blog](https://www.zynga.com/blogs/engineering)

#### Fontes e leituras complementares

Deseja adicionar um blog? Para evitar duplicação de trabalho, considere adicionar o blog da sua empresa ao repositório abaixo:

* [kilimchoi/engineering-blogs](https://github.com/kilimchoi/engineering-blogs)

<a id="em-desenvolvimento"></a>
## Em desenvolvimento

Tem interesse em adicionar uma seção ou ajudar a concluir uma que está em andamento? [Contribua](#como-contribuir)!

* Computação distribuída com MapReduce;
* hashing consistente;
* scatter-gather — dispersão e agregação;
* [contribua](#como-contribuir).

<a id="creditos"></a>
## Créditos

Os créditos e as fontes são apresentados ao longo deste repositório.

Agradecimentos especiais a:

* [Hired in tech](http://www.hiredintech.com/system-design/the-system-design-process/)
* [Cracking the coding interview](https://www.amazon.com/dp/0984782850/)
* [High scalability](http://highscalability.com/)
* [checkcheckzz/system-design-interview](https://github.com/checkcheckzz/system-design-interview)
* [shashank88/system_design](https://github.com/shashank88/system_design)
* [mmcgrana/services-engineering](https://github.com/mmcgrana/services-engineering)
* [System design cheat sheet](https://gist.github.com/vasanthk/485d1c25737e8e72759f)
* [A distributed systems reading list](http://dancres.github.io/Pages/)
* [Cracking the system design interview](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)

<a id="informacoes-de-contato"></a>
## Informações de contato

Sinta-se à vontade para entrar em contato comigo para discutir problemas, dúvidas ou comentários.

Minhas informações de contato estão disponíveis na minha [página do GitHub](https://github.com/donnemartin).

<a id="licenca"></a>
## Licença

*Disponibilizo a você o código e os recursos deste repositório sob uma licença open source. Como este é meu repositório pessoal, a licença sobre meu código e meus recursos é concedida por mim, e não pelo meu empregador (Facebook).*

    Copyright 2017 Donne Martin

    Licença Creative Commons Atribuição 4.0 Internacional (CC BY 4.0)

    http://creativecommons.org/licenses/by/4.0/

## Status da tradução

A tradução do conteúdo principal, a revisão estrutural, duas passagens técnicas e linguísticas assistidas e a validação automatizada de links e renderização foram concluídas. O documento aguarda revisão técnica e linguística por falantes nativos.

- [x] Índice e guia de estudos;
- [x] abordagem para entrevistas de design de sistemas;
- [x] perguntas de entrevista de design de sistemas e design orientado a objetos com soluções;
- [x] fundamentos de escalabilidade, desempenho e disponibilidade;
- [x] componentes de infraestrutura e camada de aplicação;
- [x] bancos de dados relacionais, replicação e particionamento;
- [x] NoSQL e comparação entre SQL e NoSQL;
- [x] cache, estratégias de atualização e processamento assíncrono;
- [x] comunicação: HTTP, TCP, UDP, RPC e REST;
- [x] segurança;
- [x] apêndice: tabela de potências de dois e números de latência;
- [x] perguntas adicionais, arquiteturas e blogs de engenharia;
- [x] seção em desenvolvimento, créditos, informações de contato e licença;
- [x] revisão estrutural inicial, âncoras internas e comparação com o README original;
- [x] primeira passagem técnica e linguística assistida;
- [x] segunda passagem técnica e linguística assistida;
- [ ] revisão técnica e linguística por falantes nativos;
- [x] validação de links externos e renderização final.

A discussão oficial da tradução para português brasileiro está registrada na [issue #40](https://github.com/donnemartin/system-design-primer/issues/40).
