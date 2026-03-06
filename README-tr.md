*[English](README.md) ∙ [日本語](README-ja.md) ∙ [简体中文](README-zh-Hans.md) ∙ [繁體中文](README-zh-TW.md) ∙ [Türkçe](README-tr.md) | [العَرَبِيَّة‎](https://github.com/donnemartin/system-design-primer/issues/170) ∙ [বাংলা](https://github.com/donnemartin/system-design-primer/issues/220) ∙ [Português do Brasil](https://github.com/donnemartin/system-design-primer/issues/40) ∙ [Deutsch](https://github.com/donnemartin/system-design-primer/issues/186) ∙ [ελληνικά](https://github.com/donnemartin/system-design-primer/issues/130) ∙ [עברית](https://github.com/donnemartin/system-design-primer/issues/272) ∙ [Italiano](https://github.com/donnemartin/system-design-primer/issues/104) ∙ [한국어](https://github.com/donnemartin/system-design-primer/issues/102) ∙ [فارسی](https://github.com/donnemartin/system-design-primer/issues/110) ∙ [Polski](https://github.com/donnemartin/system-design-primer/issues/68) ∙ [русский язык](https://github.com/donnemartin/system-design-primer/issues/87) ∙ [Español](https://github.com/donnemartin/system-design-primer/issues/136) ∙ [ภาษาไทย](https://github.com/donnemartin/system-design-primer/issues/187) ∙ [tiếng Việt](https://github.com/donnemartin/system-design-primer/issues/127) ∙ [Français](https://github.com/donnemartin/system-design-primer/issues/250) | [Add Translation](https://github.com/donnemartin/system-design-primer/issues/28)*

**Bu kılavuzun çevirisine [yardımcı olun](TRANSLATIONS.md)!**

# Sistem Tasarımına Giriş

<p align="center">
  <img src="images/jj3A5N8.png">
  <br/>
</p>

## Hakkında

**The System Design Primer**, büyük ölçekli sistemler tasarlamayı öğrenmek ve sistem tasarım mülakatlarına hazırlanmak isteyen geliştiriciler için hazırlanmış kapsamlı bir kaynak koleksiyonudur.

Bu repo, web üzerinde dağınık halde bulunan sistem tasarım prensipleri hakkındaki kaynakları **düzenli bir koleksiyon** halinde bir araya getirerek, ölçeklenebilir sistemler inşa etmeyi öğrenmenize yardımcı olur.

## Motivation

> Büyük ölçekli sistemler tasarlamayı öğrenin.
>
> Sistem tasarım mülakatına hazırlanın.

### Büyük ölçekli sistemler tasarlamayı öğrenin

Ölçeklenebilir sistemler tasarlamayı öğrenmek, daha iyi bir mühendis olmanıza yardımcı olacaktır.

Sistem tasarımı geniş bir konudur. Web üzerinde sistem tasarım prensipleri hakkında **dağınık halde bulunan çok sayıda kaynak** mevcuttur.

Bu repo, ölçeklenebilir sistemler inşa etmeyi öğrenmenize yardımcı olmak için hazırlanmış **düzenli bir kaynak koleksiyonudur**.

### Açık kaynak topluluğundan öğrenin

Bu, sürekli güncellenen, açık kaynak bir projedir.

[Katkılar](#contributing) memnuniyetle karşılanır!

### Sistem tasarım mülakatına hazırlanın

Kodlama mülakatlarının yanı sıra, sistem tasarımı birçok teknoloji şirketinde **teknik mülakat sürecinin** **gerekli bir bileşenidir**.

**Yaygın sistem tasarım mülakat sorularını** pratik edin ve sonuçlarınızı **örnek çözümlerle** karşılaştırın: tartışmalar, kod ve diyagramlar.

Mülakat hazırlığı için ek konular:

* [Study guide](#study-guide)
* [How to approach a system design interview question](#how-to-approach-a-system-design-interview-question)
* [System design interview questions, **with solutions**](#system-design-interview-questions-with-solutions)
* [Object-oriented design interview questions, **with solutions**](#object-oriented-design-interview-questions-with-solutions)
* [Additional system design interview questions](#additional-system-design-interview-questions)

## Çalışma Kılavuzu

> Mülakat zaman çizelgenize (kısa, orta, uzun) göre gözden geçirmeniz önerilen konular.

![Study Guide](images/OfVllex.png)

**S: Mülakatlar için buradaki her şeyi bilmem gerekiyor mu?**

**C: Hayır, mülakata hazırlanmak için buradaki her şeyi bilmenize gerek yok**.

Bir mülakatta size sorulan sorular şu değişkenlere bağlıdır:

* Ne kadar deneyiminiz var
* Teknik geçmişiniz nedir
* Hangi pozisyonlar için mülakata giriyorsunuz
* Hangi şirketlerle mülakat yapıyorsunuz
* Şans

Daha deneyimli adayların genellikle sistem tasarımı hakkında daha fazla bilgi sahibi olmaları beklenir. Mimarlar veya takım liderlerinin, bireysel katkıda bulunanlardan daha fazla bilgi sahibi olmaları beklenebilir. Önde gelen teknoloji şirketleri muhtemelen bir veya daha fazla tasarım mülakat turuna sahiptir.

Geniş başlayın ve birkaç alanda derinleşin. Çeşitli önemli sistem tasarım konuları hakkında biraz bilgi sahibi olmak yardımcı olur. Aşağıdaki kılavuzu zaman çizelgenize, deneyiminize, hangi pozisyonlar için mülakata girdiğinize ve hangi şirketlerle mülakat yaptığınıza göre ayarlayın.

* **Kısa zaman çizelgesi** - Sistem tasarım konularında **genişlik** hedefleyin. **Bazı** mülakat sorularını çözerek pratik yapın.
* **Orta zaman çizelgesi** - Sistem tasarım konularında **genişlik** ve **biraz derinlik** hedefleyin. **Birçok** mülakat sorusunu çözerek pratik yapın.
* **Uzun zaman çizelgesi** - Sistem tasarım konularında **genişlik** ve **daha fazla derinlik** hedefleyin. **Çoğu** mülakat sorusunu çözerek pratik yapın.

| | Kısa | Orta | Uzun |
|---|---|---|---|
| Sistemlerin nasıl çalıştığına dair geniş bir anlayış elde etmek için [System design topics](#index-of-system-design-topics) bölümünü okuyun | :+1: | :+1: | :+1: |
| Mülakat yaptığınız şirketler için [Company engineering blogs](#company-engineering-blogs) bölümünden birkaç makale okuyun | :+1: | :+1: | :+1: |
| Birkaç [Real world architectures](#real-world-architectures) örneğini inceleyin | :+1: | :+1: | :+1: |
| [How to approach a system design interview question](#how-to-approach-a-system-design-interview-question) bölümünü gözden geçirin | :+1: | :+1: | :+1: |
| [System design interview questions with solutions](#system-design-interview-questions-with-solutions) bölümündeki soruları çalışın | Bazı | Birçok | Çoğu |
| [Object-oriented design interview questions with solutions](#object-oriented-design-interview-questions-with-solutions) bölümündeki soruları çalışın | Bazı | Birçok | Çoğu |
| [Additional system design interview questions](#additional-system-design-interview-questions) bölümünü gözden geçirin | Bazı | Birçok | Çoğu |

## Anki flashcards

<p align="center">
  <img src="images/zdCAkB3.png">
  <br/>
</p>

Sağlanan [Anki flashcard desteleri](https://apps.ankiweb.net/), önemli sistem tasarım kavramlarını hatırlamanıza yardımcı olmak için aralıklı tekrar kullanır.

* [System design deck](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design.apkg)
* [System design exercises deck](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design%20Exercises.apkg)
* [Object oriented design exercises deck](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/OO%20Design.apkg)

Yolda kullanım için harika.

### Kodlama Kaynağı: İnteraktif Kodlama Soruları

[**Kodlama Mülakatı**](https://github.com/donnemartin/interactive-coding-challenges) için hazırlanmanıza yardımcı olacak kaynaklar mı arıyorsunuz?

<p align="center">
  <img src="images/b4YtAEN.png">
  <br/>
</p>

Ek bir Anki destesi içeren kardeş repo [**Interactive Coding Challenges**](https://github.com/donnemartin/interactive-coding-challenges)'a göz atın:

* [Coding deck](https://github.com/donnemartin/interactive-coding-challenges/tree/master/anki_cards/Coding.apkg)

## Contributing

> Topluluktan öğrenin.

Yardımcı olmak için pull request göndermekten çekinmeyin:

* Hataları düzeltin
* Bölümleri iyileştirin
* Yeni bölümler ekleyin
* [Çeviri yapın](https://github.com/donnemartin/system-design-primer/issues/28)

Biraz cilalanması gereken içerik [under development](#under-development) altına yerleştirilmiştir.

[Contributing Guidelines](CONTRIBUTING.md) dosyasını inceleyin.

## Index of system design topics

> Çeşitli sistem tasarım konularının özetleri, artıları ve eksileri dahil.  **Her şey bir trade-off'tur**.
>
> Her bölüm, daha derinlemesine kaynaklara bağlantılar içerir.

<p align="center">
  <img src="images/jrUBAF7.png">
  <br/>
</p>

* [System design topics: start here](#system-design-topics-start-here)
    * [Step 1: Review the scalability video lecture](#step-1-review-the-scalability-video-lecture)
    * [Step 2: Review the scalability article](#step-2-review-the-scalability-article)
    * [Next steps](#next-steps)
* [Performance vs scalability](#performance-vs-scalability)
* [Latency vs throughput](#latency-vs-throughput)
* [Availability vs consistency](#availability-vs-consistency)
    * [CAP theorem](#cap-theorem)
        * [CP - consistency and partition tolerance](#cp---consistency-and-partition-tolerance)
        * [AP - availability and partition tolerance](#ap---availability-and-partition-tolerance)
* [Consistency patterns](#consistency-patterns)
    * [Weak consistency](#weak-consistency)
    * [Eventual consistency](#eventual-consistency)
    * [Strong consistency](#strong-consistency)
* [Availability patterns](#availability-patterns)
    * [Fail-over](#fail-over)
    * [Replication](#replication)
    * [Availability in numbers](#availability-in-numbers)
* [Domain name system](#domain-name-system)
* [Content delivery network](#content-delivery-network)
    * [Push CDNs](#push-cdns)
    * [Pull CDNs](#pull-cdns)
* [Load balancer](#load-balancer)
    * [Active-passive](#active-passive)
    * [Active-active](#active-active)
    * [Layer 4 load balancing](#layer-4-load-balancing)
    * [Layer 7 load balancing](#layer-7-load-balancing)
    * [Horizontal scaling](#horizontal-scaling)
* [Reverse proxy (web server)](#reverse-proxy-web-server)
    * [Load balancer vs reverse proxy](#load-balancer-vs-reverse-proxy)
* [Application layer](#application-layer)
    * [Microservices](#microservices)
    * [Service discovery](#service-discovery)
* [Database](#database)
    * [Relational database management system (RDBMS)](#relational-database-management-system-rdbms)
        * [Master-slave replication](#master-slave-replication)
        * [Master-master replication](#master-master-replication)
        * [Federation](#Federation)
        * [Sharding](#sharding)
        * [Denormalization](#denormalization)
        * [SQL tuning](#sql-tuning)
    * [NoSQL](#nosql)
        * [Key-value store](#key-value-store)
        * [Document store](#document-store)
        * [Wide column store](#wide-column-store)
        * [Graph Database](#graph-database)
    * [SQL or NoSQL](#sql-or-nosql)
* [Cache](#cache)
    * [Client caching](#client-caching)
    * [CDN caching](#cdn-caching)
    * [Web server caching](#web-server-caching)
    * [Database caching](#database-caching)
    * [Application caching](#application-caching)
    * [Caching at the database query level](#caching-at-the-database-query-level)
    * [Caching at the object level](#caching-at-the-object-level)
    * [When to update the cache](#when-to-update-the-cache)
        * [Cache-aside](#cache-aside)
        * [Write-through](#write-through)
        * [Write-behind (write-back)](#write-behind-write-back)
        * [Refresh-ahead](#refresh-ahead)
* [Asynchronism](#asynchronism)
    * [Message queues](#message-queues)
    * [Task queues](#task-queues)
    * [Back pressure](#back-pressure)
* [Communication](#communication)
    * [Transmission control protocol (TCP)](#transmission-control-protocol-tcp)
    * [User datagram protocol (UDP)](#user-datagram-protocol-udp)
    * [Remote procedure call (RPC)](#remote-procedure-call-rpc)
    * [Representational state transfer (REST)](#representational-state-transfer-rest)
* [Security](#security)
* [Appendix](#appendix)
    * [Powers of two table](#powers-of-two-table)
    * [Latency numbers every programmer should know](#latency-numbers-every-programmer-should-know)
    * [Additional system design interview questions](#additional-system-design-interview-questions)
    * [Real world architectures](#real-world-architectures)
    * [Company architectures](#company-architectures)
    * [Company engineering blogs](#company-engineering-blogs)
* [Under development](#under-development)
* [Credits](#credits)
* [Contact info](#contact-info)
* [License](#license)

## How to approach a system design interview question

> Bir sistem tasarım mülakat sorusuna nasıl yaklaşılır.

Sistem tasarım mülakatı **açık uçlu bir konuşmadır**. Siz yönlendirmelisiniz.

Tartışmayı yönlendirmek için aşağıdaki adımları kullanabilirsiniz. Bu süreci pekiştirmek için, aşağıdaki adımları kullanarak [System design interview questions with solutions](#system-design-interview-questions-with-solutions) bölümündeki soruları çalışın.

### Step 1: Outline use cases, constraints, and assumptions

Gereksinimleri toplayın ve sorunu kapsamlandırın. Use case'leri ve kısıtlamaları netleştirmek için sorular sorun. Varsayımları tartışın.

* Kim kullanacak?
* Nasıl kullanacaklar?
* Kaç kullanıcı var?
* Sistem ne yapıyor?
* Sistemin girdileri ve çıktıları nelerdir?
* Ne kadar veri işlemeyi bekliyoruz?
* Saniyede kaç istek bekliyoruz?
* Beklenen okuma/yazma oranı nedir?

### Step 2: Create a high level design

Tüm önemli bileşenlerle üst düzey bir tasarım oluşturun.

* Ana bileşenleri ve bağlantıları çizin
* Fikirlerinizi gerekçelendirin

### Step 3: Design core components

Her temel bileşen için detaylara inin. Örneğin, [bir URL kısaltma servisi tasarlamanız](solutions/system_design/pastebin/README.md) istenirse, şunları tartışın:

* Tam URL'nin hash'ini oluşturma ve saklama
    * [MD5](solutions/system_design/pastebin/README.md) ve [Base62](solutions/system_design/pastebin/README.md)
    * Hash çakışmaları
    * SQL veya NoSQL
    * Veritabanı şeması
* Hash'lenmiş URL'yi tam URL'ye çevirme
    * Veritabanı araması
* API ve nesne yönelimli tasarım

### Step 4: Scale the design

Kısıtlamalar göz önüne alındığında darboğazları belirleyin ve ele alın. Örneğin, ölçeklenebilirlik sorunlarını ele almak için aşağıdakilere ihtiyacınız var mı?

* Load balancer
* Horizontal scaling
* Caching
* Database sharding

Potansiyel çözümleri ve trade-off'ları tartışın. Her şey bir trade-off'tur. [Ölçeklenebilir sistem tasarım prensipleri](#index-of-system-design-topics) kullanarak darboğazları ele alın.

### Back-of-the-envelope calculations

Bazı tahminler yapmanız istenebilir. Aşağıdaki kaynaklar için [Appendix](#appendix) bölümüne bakın:

* [Back of the envelope hesaplamaları kullanın](http://highscalability.com/blog/2011/1/26/google-pro-tip-use-back-of-the-envelope-calculations-to-choo.html)
* [Powers of two table](#powers-of-two-table)
* [Latency numbers every programmer should know](#latency-numbers-every-programmer-should-know)

### Source(s) and further reading

Ne bekleyeceğiniz hakkında daha iyi bir fikir edinmek için aşağıdaki bağlantılara bakın:

* [How to ace a systems design interview](https://web.archive.org/web/20210505130322/https://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/)
* [The system design interview](http://www.hiredintech.com/system-design)
* [Intro to Architecture and Systems Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70)
* [System design template](https://leetcode.com/discuss/career/229177/My-System-Design-Template)

## System design interview questions with solutions

> Örnek tartışmalar, kod ve diyagramlarla yaygın sistem tasarım mülakat soruları.
>
> Çözümler `solutions/` klasöründeki içeriklere bağlantılıdır.

| Question | |
|---|---|
| Design Pastebin.com (or Bit.ly) | [Solution](solutions/system_design/pastebin/README.md) |
| Design the Twitter timeline and search (or Facebook feed and search) | [Solution](solutions/system_design/twitter/README.md) |
| Design a web crawler | [Solution](solutions/system_design/web_crawler/README.md) |
| Design Mint.com | [Solution](solutions/system_design/mint/README.md) |
| Design the data structures for a social network | [Solution](solutions/system_design/social_graph/README.md) |
| Design a key-value store for a search engine | [Solution](solutions/system_design/query_cache/README.md) |
| Design Amazon's sales ranking by category feature | [Solution](solutions/system_design/sales_rank/README.md) |
| Design a system that scales to millions of users on AWS | [Solution](solutions/system_design/scaling_aws/README.md) |
| Add a system design question | [Contribute](#contributing) |

### Design Pastebin.com (or Bit.ly)

[View exercise and solution](solutions/system_design/pastebin/README.md)

![Imgur](images/4edXG0T.png)

### Design the Twitter timeline and search (or Facebook feed and search)

[View exercise and solution](solutions/system_design/twitter/README.md)

![Imgur](images/jrUBAF7.png)

### Design a web crawler

[View exercise and solution](solutions/system_design/web_crawler/README.md)

![Imgur](images/bWxPtQA.png)

### Design Mint.com

[View exercise and solution](solutions/system_design/mint/README.md)

![Imgur](images/V5q57vU.png)

### Design the data structures for a social network

[View exercise and solution](solutions/system_design/social_graph/README.md)

![Imgur](images/cdCv5g7.png)

### Design a key-value store for a search engine

[View exercise and solution](solutions/system_design/query_cache/README.md)

![Imgur](images/4j99mhe.png)

### Design Amazon's sales ranking by category feature

[View exercise and solution](solutions/system_design/sales_rank/README.md)

![Imgur](images/MzExP06.png)

### Design a system that scales to millions of users on AWS

[View exercise and solution](solutions/system_design/scaling_aws/README.md)

![Imgur](images/jj3A5N8.png)

## Object-oriented design interview questions with solutions

> Örnek tartışmalar, kod ve diyagramlarla yaygın nesne yönelimli tasarım mülakat soruları.
>
> Çözümler `solutions/` klasöründeki içeriklere bağlantılıdır.

>**Not: Bu bölüm geliştirme aşamasındadır**

| Question | |
|---|---|
| Design a hash map | [Solution](solutions/object_oriented_design/hash_table/hash_map.ipynb)  |
| Design a least recently used cache | [Solution](solutions/object_oriented_design/lru_cache/lru_cache.ipynb)  |
| Design a call center | [Solution](solutions/object_oriented_design/call_center/call_center.ipynb)  |
| Design a deck of cards | [Solution](solutions/object_oriented_design/deck_of_cards/deck_of_cards.ipynb)  |
| Design a parking lot | [Solution](solutions/object_oriented_design/parking_lot/parking_lot.ipynb)  |
| Design a chat server | [Solution](solutions/object_oriented_design/online_chat/online_chat.ipynb)  |
| Design a circular array | [Contribute](#contributing)  |
| Add an object-oriented design question | [Contribute](#contributing) |

## System design topics: start here

Sistem tasarımına yeni misiniz?

Öncelikle, yaygın prensipler hakkında temel bir anlayışa ihtiyacınız olacak, bunların ne olduğunu, nasıl kullanıldığını ve artıları ile eksilerini öğrenmeniz gerekecek.

### Step 1: Review the scalability video lecture

[Scalability Lecture at Harvard](https://www.youtube.com/watch?v=-W9F__D3oY4)

* İşlenen konular:
    * Vertical scaling
    * Horizontal scaling
    * Caching
    * Load balancing
    * Database replication
    * Database partitioning

### Step 2: Review the scalability article

[Scalability](https://web.archive.org/web/20221030091841/http://www.lecloud.net/tagged/scalability/chrono)

* İşlenen konular:
    * [Clones](https://web.archive.org/web/20220530193911/https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
    * [Databases](https://web.archive.org/web/20220602114024/https://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
    * [Caches](https://web.archive.org/web/20230126233752/https://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
    * [Asynchronism](https://web.archive.org/web/20220926171507/https://www.lecloud.net/post/9699762917/scalability-for-dummies-part-4-asynchronism)

### Next steps

Sonra, üst düzey trade-off'lara bakacağız:

* **Performance** vs **scalability**
* **Latency** vs **throughput**
* **Availability** vs **consistency**

Unutmayın ki **her şey bir trade-off'tur**.

Ardından DNS, CDN'ler ve load balancer'lar gibi daha spesifik konulara dalacağız.

## Performance vs scalability

Bir servis, eklenen kaynaklarla orantılı olarak **performance** artışı sağlıyorsa **ölçeklenebilirdir**. Genel olarak, performance artışı daha fazla iş birimi sunmak anlamına gelir, ancak veri setleri büyüdüğünde olduğu gibi daha büyük iş birimlerini işlemek de olabilir.<sup><a href=http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html>1</a></sup>

Performance vs scalability'ye bakmanın başka bir yolu:

* **Performance** sorununuz varsa, sisteminiz tek bir kullanıcı için yavaştır.
* **Scalability** sorununuz varsa, sisteminiz tek bir kullanıcı için hızlıdır ancak ağır yük altında yavaştır.

### Source(s) and further reading

* [A word on scalability](http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html)
* [Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)

## Latency vs throughput

**Latency**, bir eylemi gerçekleştirmek veya bir sonuç üretmek için geçen süredir.

**Throughput**, birim zaman başına bu tür eylemlerin veya sonuçların sayısıdır.

Genel olarak, **kabul edilebilir latency** ile **maksimum throughput** hedeflemelisiniz.

### Source(s) and further reading

* [Understanding latency vs throughput](https://community.cadence.com/cadence_blogs_8/b/fv/posts/understanding-latency-vs-throughput)

## Availability vs consistency

### CAP theorem

<p align="center">
  <img src="images/bgLMI2u.png">
  <br/>
  <i><a href="https://robertgreiner.com/cap-theorem-revisited">Source: CAP theorem revisited</a></i>
</p>

Dağıtılmış bir bilgisayar sisteminde, aşağıdaki garantilerden yalnızca ikisini destekleyebilirsiniz:

* **Consistency** - Her okuma en son yazmayı veya bir hata alır
* **Availability** - Her istek bir yanıt alır, ancak bilginin en son sürümünü içerdiği garantisi yoktur
* **Partition Tolerance** - Sistem, ağ hataları nedeniyle keyfi bölünmelere rağmen çalışmaya devam eder

*Ağlar güvenilir değildir, bu yüzden partition tolerance'ı desteklemeniz gerekecek. Consistency ve availability arasında bir yazılım trade-off'u yapmanız gerekecek.*

#### CP - consistency and partition tolerance

Bölünmüş düğümden bir yanıt beklemek timeout hatasına neden olabilir. İş ihtiyaçlarınız atomik okuma ve yazma gerektiriyorsa CP iyi bir seçimdir.

#### AP - availability and partition tolerance

Yanıtlar, herhangi bir düğümde mevcut olan verinin en kolay erişilebilir sürümünü döndürür, bu en son sürüm olmayabilir. Bölünme çözüldüğünde yazmaların yayılması biraz zaman alabilir.

İş ihtiyaçları [eventual consistency](#eventual-consistency)'e izin veriyorsa veya sistem dış hatalara rağmen çalışmaya devam etmesi gerekiyorsa AP iyi bir seçimdir.

### Source(s) and further reading

* [CAP theorem revisited](https://robertgreiner.com/cap-theorem-revisited/))
* [A plain english introduction to CAP theorem](http://ksat.me/a-plain-english-introduction-to-cap-theorem)
* [CAP FAQ](https://github.com/henryr/cap-faq)
* [The CAP theorem](https://www.youtube.com/watch?v=k-Yaq8AHlFA)

## Consistency patterns

Aynı verinin birden fazla kopyasıyla, istemcilerin verinin tutarlı bir görünümüne sahip olması için bunları nasıl senkronize edeceğimiz konusunda seçeneklerle karşı karşıyayız. [CAP theorem](#cap-theorem)'den consistency tanımını hatırlayın - Her okuma en son yazmayı veya bir hata alır.

### Weak consistency

Bir yazmadan sonra, okumalar bunu görebilir veya görmeyebilir. En iyi çaba yaklaşımı benimsenir.

Bu yaklaşım memcached gibi sistemlerde görülür. Weak consistency, VoIP, video sohbet ve gerçek zamanlı çok oyunculu oyunlar gibi gerçek zamanlı kullanım durumlarında iyi çalışır. Örneğin, bir telefon görüşmesindeyken ve birkaç saniye alıcı kaybederseniz, bağlantıyı yeniden kazandığınızda bağlantı kaybı sırasında söylenenleri duymazsınız.

### Eventual consistency

Bir yazmadan sonra, okumalar sonunda bunu görecektir (genellikle milisaniyeler içinde). Veri asenkron olarak çoğaltılır.

Bu yaklaşım DNS ve e-posta gibi sistemlerde görülür. Eventual consistency, yüksek oranda kullanılabilir sistemlerde iyi çalışır.

### Strong consistency

Bir yazmadan sonra, okumalar bunu görecektir. Veri senkron olarak çoğaltılır.

Bu yaklaşım dosya sistemleri ve RDBMS'lerde görülür. Strong consistency, transaction'lara ihtiyaç duyan sistemlerde iyi çalışır.

### Source(s) and further reading

* [Transactions across data centers](http://snarfed.org/transactions_across_datacenters_io.html)

## Availability patterns

Yüksek kullanılabilirliği desteklemek için iki tamamlayıcı pattern vardır: **fail-over** ve **replication**.

### Fail-over

#### Active-passive

Active-passive fail-over ile, aktif ve beklemedeki pasif sunucu arasında heartbeat'ler gönderilir. Heartbeat kesilirse, pasif sunucu aktifin IP adresini devralır ve hizmete devam eder.

Downtime süresi, pasif sunucunun zaten 'hot' standby'da çalışıp çalışmadığına veya 'cold' standby'dan başlatılması gerekip gerekmediğine bağlıdır. Yalnızca aktif sunucu trafiği işler.

Active-passive failover, master-slave failover olarak da adlandırılabilir.

#### Active-active

Active-active'de, her iki sunucu da trafiği yönetir ve yükü aralarında dağıtır.

Sunucular dışa dönükse, DNS her iki sunucunun da genel IP'lerini bilmelidir. Sunucular içe dönükse, uygulama mantığı her iki sunucuyu da bilmelidir.

Active-active failover, master-master failover olarak da adlandırılabilir.

### Disadvantage(s): failover

* Fail-over daha fazla donanım ve ek karmaşıklık ekler.
* Aktif sistem, yeni yazılan veriler pasife çoğaltılmadan önce başarısız olursa veri kaybı potansiyeli vardır.

### Replication

#### Master-slave and master-master

Bu konu [Database](#database) bölümünde daha fazla tartışılmaktadır:

* [Master-slave replication](#master-slave-replication)
* [Master-master replication](#master-master-replication)

### Availability in numbers

Availability genellikle servisin kullanılabilir olduğu sürenin yüzdesi olarak uptime (veya downtime) ile ölçülür. Availability genellikle 9'ların sayısıyla ölçülür - %99.99 availability'a sahip bir servis dört 9'a sahip olarak tanımlanır.

#### 99.9% availability - three 9s

| Duration            | Acceptable downtime|
|---------------------|--------------------|
| Downtime per year   | 8h 45min 57s       |
| Downtime per month  | 43m 49.7s          |
| Downtime per week   | 10m 4.8s           |
| Downtime per day    | 1m 26.4s           |

#### 99.99% availability - four 9s

| Duration            | Acceptable downtime|
|---------------------|--------------------|
| Downtime per year   | 52min 35.7s        |
| Downtime per month  | 4m 23s             |
| Downtime per week   | 1m 5s              |
| Downtime per day    | 8.6s               |

#### Availability in parallel vs in sequence

Bir servis başarısızlığa eğilimli birden fazla bileşenden oluşuyorsa, servisin genel kullanılabilirliği bileşenlerin sıralı mı yoksa paralel mi olduğuna bağlıdır.

###### In sequence

Kullanılabilirliği < %100 olan iki bileşen sıralı olduğunda genel kullanılabilirlik azalır:

```
Availability (Total) = Availability (Foo) * Availability (Bar)
```

Hem `Foo` hem de `Bar` %99.9 kullanılabilirliğe sahipse, sıralı toplam kullanılabilirlikleri %99.8 olur.

###### In parallel

Kullanılabilirliği < %100 olan iki bileşen paralel olduğunda genel kullanılabilirlik artar:

```
Availability (Total) = 1 - (1 - Availability (Foo)) * (1 - Availability (Bar))
```

Hem `Foo` hem de `Bar` %99.9 kullanılabilirliğe sahipse, paralel toplam kullanılabilirlikleri %99.9999 olur.

## Domain name system

<p align="center">
  <img src="images/IOyLj4i.jpg">
  <br/>
  <i><a href=http://www.slideshare.net/srikrupa5/dns-security-presentation-issa>Source: DNS security presentation</a></i>
</p>

Bir Domain Name System (DNS), www.example.com gibi bir domain adını bir IP adresine çevirir.

DNS hiyerarşiktir, üst seviyede birkaç yetkili sunucu vardır. Router'ınız veya ISP'niz, bir arama yaparken hangi DNS sunucusuna başvurulacağı hakkında bilgi sağlar. Alt seviye DNS sunucuları eşlemeleri önbelleğe alır, bu da DNS yayılma gecikmeleri nedeniyle eski hale gelebilir. DNS sonuçları ayrıca tarayıcınız veya işletim sisteminiz tarafından [time to live (TTL)](https://en.wikipedia.org/wiki/Time_to_live) ile belirlenen belirli bir süre için önbelleğe alınabilir.

* **NS record (name server)** - Domain/subdomain'iniz için DNS sunucularını belirtir.
* **MX record (mail exchange)** - Mesajları kabul eden mail sunucularını belirtir.
* **A record (address)** - Bir adı bir IP adresine işaret eder.
* **CNAME (canonical)** - Bir adı başka bir ada veya `CNAME`'e (example.com'dan www.example.com'a) veya bir `A` kaydına işaret eder.

[CloudFlare](https://www.cloudflare.com/dns/) ve [Route 53](https://aws.amazon.com/route53/) gibi servisler yönetilen DNS servisleri sağlar. Bazı DNS servisleri trafiği çeşitli yöntemlerle yönlendirebilir:

* [Weighted round robin](https://www.jscape.com/blog/load-balancing-algorithms)
    * Bakım altındaki sunuculara trafik gitmesini önleme
    * Farklı cluster boyutları arasında dengeleme
    * A/B testi
* [Latency-based](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html)
* [Geolocation-based](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html)

### Disadvantage(s): DNS

* Bir DNS sunucusuna erişmek hafif bir gecikme yaratır, ancak yukarıda açıklanan önbelleğe alma ile hafifletilir.
* DNS sunucu yönetimi karmaşık olabilir ve genellikle [hükümetler, ISP'ler ve büyük şirketler](http://superuser.com/questions/472695/who-controls-the-dns-servers/472729) tarafından yönetilir.
* DNS servisleri son zamanlarda [DDoS saldırılarına](http://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/) maruz kalmıştır, bu da kullanıcıların Twitter'ın IP adresini bilmeden Twitter gibi web sitelerine erişmesini engellemiştir.

### Source(s) and further reading

* [DNS architecture](https://technet.microsoft.com/en-us/library/dd197427(v=ws.10).aspx)
* [Wikipedia](https://en.wikipedia.org/wiki/Domain_Name_System)
* [DNS articles](https://support.dnsimple.com/categories/dns/)

## Content delivery network

<p align="center">
  <img src="images/h9TAuGI.jpg">
  <br/>
  <i><a href=https://www.creative-artworks.eu/why-use-a-content-delivery-network-cdn/>Source: Why use a CDN</a></i>
</p>

Bir content delivery network (CDN), kullanıcıya daha yakın konumlardan içerik sunan, küresel olarak dağıtılmış bir proxy sunucu ağıdır. Genel olarak, HTML/CSS/JS, fotoğraflar ve videolar gibi statik dosyalar CDN'den sunulur, ancak Amazon'un CloudFront'u gibi bazı CDN'ler dinamik içeriği destekler. Sitenin DNS çözümlemesi, istemcilere hangi sunucuya başvurulacağını söyler.

CDN'lerden içerik sunmak, performansı iki şekilde önemli ölçüde iyileştirebilir:

* Kullanıcılar kendilerine yakın veri merkezlerinden içerik alır
* Sunucularınız CDN'in karşıladığı istekleri sunmak zorunda değildir

### Push CDNs

Push CDN'ler, sunucunuzda değişiklikler olduğunda yeni içerik alır. İçeriği sağlama sorumluluğunu tamamen üstlenirsiniz, doğrudan CDN'e yüklersiniz ve URL'leri CDN'e işaret edecek şekilde yeniden yazarsınız. İçeriğin ne zaman sona ereceğini ve ne zaman güncelleneceğini yapılandırabilirsiniz. İçerik yalnızca yeni veya değiştiğinde yüklenir, trafiği minimize eder ancak depolamayı maksimize eder.

Az trafikli siteler veya içeriği sık güncellenmeyen siteler push CDN'lerle iyi çalışır. İçerik CDN'lere bir kez yerleştirilir, düzenli aralıklarla yeniden çekilmek yerine.

### Pull CDNs

Pull CDN'ler, ilk kullanıcı içeriği istediğinde sunucunuzdan yeni içerik çeker. İçeriği sunucunuzda bırakırsınız ve URL'leri CDN'e işaret edecek şekilde yeniden yazarsınız. Bu, içerik CDN'de önbelleğe alınana kadar daha yavaş bir istekle sonuçlanır.

Bir [time-to-live (TTL)](https://en.wikipedia.org/wiki/Time_to_live), içeriğin ne kadar süre önbelleğe alınacağını belirler. Pull CDN'ler CDN'deki depolama alanını minimize eder, ancak dosyalar sona erer ve gerçekten değişmeden önce çekilirse gereksiz trafik oluşturabilir.

Ağır trafikli siteler pull CDN'lerle iyi çalışır, çünkü trafik daha eşit dağıtılır ve yalnızca yakın zamanda istenen içerik CDN'de kalır.

### Disadvantage(s): CDN

* CDN maliyetleri trafiğe bağlı olarak önemli olabilir, ancak bu, CDN kullanmamanız durumunda karşılaşacağınız ek maliyetlerle karşılaştırılmalıdır.
* İçerik TTL sona ermeden önce güncellenirse eski olabilir.
* CDN'ler statik içerik için URL'lerin CDN'e işaret edecek şekilde değiştirilmesini gerektirir.

### Source(s) and further reading

* [Globally distributed content delivery](https://figshare.com/articles/Globally_distributed_content_delivery/6605972)
* [The differences between push and pull CDNs](http://www.travelblogadvice.com/technical/the-differences-between-push-and-pull-cdns/)
* [Wikipedia](https://en.wikipedia.org/wiki/Content_delivery_network)

## Load balancer

<p align="center">
  <img src="images/h81n9iK.png">
  <br/>
  <i><a href=http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html>Source: Scalable system design patterns</a></i>
</p>

Load balancer'lar gelen istemci isteklerini uygulama sunucuları ve veritabanları gibi bilgi işlem kaynaklarına dağıtır. Her durumda, load balancer bilgi işlem kaynağından yanıtı uygun istemciye döndürür. Load balancer'lar şu konularda etkilidir:

* İsteklerin sağlıksız sunuculara gitmesini önleme
* Kaynakların aşırı yüklenmesini önleme
* Tek bir başarısızlık noktasını ortadan kaldırmaya yardımcı olma

Load balancer'lar donanımla (pahalı) veya HAProxy gibi yazılımla uygulanabilir.

Ek faydalar şunları içerir:

* **SSL termination** - Gelen istekleri şifresini çözme ve sunucu yanıtlarını şifreleme, böylece backend sunucuları bu potansiyel olarak pahalı işlemleri gerçekleştirmek zorunda kalmaz
    * Her sunucuya [X.509 sertifikaları](https://en.wikipedia.org/wiki/X.509) kurma ihtiyacını ortadan kaldırır
* **Session persistence** - Web uygulamaları oturumları takip etmiyorsa, cookie'ler verin ve belirli bir istemcinin isteklerini aynı instance'a yönlendirin

Hatalara karşı korunmak için, [active-passive](#active-passive) veya [active-active](#active-active) modunda birden fazla load balancer kurmak yaygındır.

Load balancer'lar çeşitli metrikler temelinde trafiği yönlendirebilir:

* Random
* Least loaded
* Session/cookies
* [Round robin or weighted round robin](https://www.g33kinfo.com/info/round-robin-vs-weighted-round-robin-lb)
* [Layer 4](#layer-4-load-balancing)
* [Layer 7](#layer-7-load-balancing)

### Layer 4 load balancing

Layer 4 load balancer'lar, isteklerin nasıl dağıtılacağına karar vermek için [transport layer](#communication)'daki bilgilere bakar. Genel olarak, bu başlıktaki kaynak, hedef IP adresleri ve portları içerir, ancak paketin içeriğini içermez. Layer 4 load balancer'lar, [Network Address Translation (NAT)](https://www.nginx.com/resources/glossary/layer-4-load-balancing/) gerçekleştirerek upstream sunucusuna ve upstream sunucusundan ağ paketlerini iletir.

### Layer 7 load balancing

Layer 7 load balancer'lar, isteklerin nasıl dağıtılacağına karar vermek için [application layer](#communication)'a bakar. Bu, başlık, mesaj ve cookie'lerin içeriğini içerebilir. Layer 7 load balancer'lar ağ trafiğini sonlandırır, mesajı okur, bir load-balancing kararı verir, ardından seçilen sunucuya bir bağlantı açar. Örneğin, bir layer 7 load balancer video trafiğini videoları barındıran sunuculara yönlendirebilirken, daha hassas kullanıcı faturalama trafiğini güvenlik sertleştirilmiş sunuculara yönlendirebilir.

Esneklik maliyetiyle, layer 4 load balancing Layer 7'den daha az zaman ve bilgi işlem kaynağı gerektirir, ancak performans etkisi modern ticari donanımda minimal olabilir.

### Horizontal scaling

Load balancer'lar ayrıca horizontal scaling'e yardımcı olabilir, performansı ve kullanılabilirliği iyileştirir. Ticari makineler kullanarak scale out yapmak, daha pahalı donanımda tek bir sunucuyu scale up etmekten daha maliyet etkindir ve daha yüksek kullanılabilirlik sağlar, buna **Vertical Scaling** denir. Ayrıca, özel kurumsal sistemler için olduğundan daha kolay, ticari donanımda çalışan yetenekler için işe almak daha kolaydır.

#### Disadvantage(s): horizontal scaling

* Horizontal scaling karmaşıklık ekler ve sunucuların klonlanmasını içerir
    * Sunucular stateless olmalıdır: oturumlar veya profil resimleri gibi kullanıcıyla ilgili herhangi bir veri içermemelidir
    * Oturumlar [database](#database) (SQL, NoSQL) gibi merkezi bir veri deposunda veya kalıcı bir [cache](#cache) (Redis, Memcached) içinde saklanabilir
* Cache'ler ve veritabanları gibi downstream sunucular, upstream sunucular scale out yaptıkça daha fazla eşzamanlı bağlantıyı işlemelidir

### Disadvantage(s): load balancer

* Load balancer yeterli kaynağa sahip değilse veya düzgün yapılandırılmamışsa performans darboğazı haline gelebilir.
* Tek bir başarısızlık noktasını ortadan kaldırmaya yardımcı olmak için bir load balancer eklemek karmaşıklığı artırır.
* Tek bir load balancer tek bir başarısızlık noktasıdır, birden fazla load balancer yapılandırmak karmaşıklığı daha da artırır.

### Source(s) and further reading

* [NGINX architecture](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
* [HAProxy architecture guide](http://www.haproxy.org/download/1.2/doc/architecture.txt)
* [Scalability](https://web.archive.org/web/20220530193911/https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
* [Wikipedia](https://en.wikipedia.org/wiki/Load_balancing_(computing))
* [Layer 4 load balancing](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)
* [Layer 7 load balancing](https://www.nginx.com/resources/glossary/layer-7-load-balancing/)
* [ELB listener config](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html)

## Reverse proxy (web server)

<p align="center">
  <img src="images/n41Azff.png">
  <br/>
  <i><a href=https://upload.wikimedia.org/wikipedia/commons/6/67/Reverse_proxy_h2g2bob.svg>Source: Wikipedia</a></i>
  <br/>
</p>

Bir reverse proxy, iç servisleri merkezileştiren ve halka birleşik arayüzler sağlayan bir web sunucusudur. İstemcilerden gelen istekler, reverse proxy sunucunun yanıtını istemciye döndürmeden önce bunu karşılayabilecek bir sunucuya iletilir.

Ek faydalar şunları içerir:

* **Artırılmış güvenlik** - Backend sunucular hakkında bilgi gizleme, IP'leri kara listeye alma, istemci başına bağlantı sayısını sınırlama
* **Artırılmış ölçeklenebilirlik ve esneklik** - İstemciler yalnızca reverse proxy'nin IP'sini görür, bu da sunucuları ölçeklendirmenize veya yapılandırmalarını değiştirmenize olanak tanır
* **SSL termination** - Gelen istekleri şifresini çözme ve sunucu yanıtlarını şifreleme, böylece backend sunucuları bu potansiyel olarak pahalı işlemleri gerçekleştirmek zorunda kalmaz
    * Her sunucuya [X.509 sertifikaları](https://en.wikipedia.org/wiki/X.509) kurma ihtiyacını ortadan kaldırır
* **Compression** - Sunucu yanıtlarını sıkıştırma
* **Caching** - Önbelleğe alınmış istekler için yanıt döndürme
* **Static content** - Statik içeriği doğrudan sunma
    * HTML/CSS/JS
    * Fotoğraflar
    * Videolar
    * Vb.

### Load balancer vs reverse proxy

* Birden fazla sunucunuz olduğunda bir load balancer dağıtmak yararlıdır. Genellikle, load balancer'lar aynı işlevi gören bir sunucu setine trafik yönlendirir.
* Reverse proxy'ler yalnızca bir web sunucusu veya uygulama sunucusuyla bile yararlı olabilir, önceki bölümde açıklanan faydaları açığa çıkarır.
* NGINX ve HAProxy gibi çözümler hem layer 7 reverse proxying hem de load balancing'i destekleyebilir.

### Disadvantage(s): reverse proxy

* Bir reverse proxy eklemek karmaşıklığı artırır.
* Tek bir reverse proxy tek bir başarısızlık noktasıdır, birden fazla reverse proxy yapılandırmak (yani bir [failover](https://en.wikipedia.org/wiki/Failover)) karmaşıklığı daha da artırır.

### Source(s) and further reading

* [Reverse proxy vs load balancer](https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/)
* [NGINX architecture](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
* [HAProxy architecture guide](http://www.haproxy.org/download/1.2/doc/architecture.txt)
* [Wikipedia](https://en.wikipedia.org/wiki/Reverse_proxy)

## Application layer

<p align="center">
  <img src="images/yB5SYwm.png">
  <br/>
  <i><a href=http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer>Source: Intro to architecting systems for scale</a></i>
</p>

Web katmanını uygulama katmanından (platform katmanı olarak da bilinir) ayırmak, her iki katmanı da bağımsız olarak ölçeklendirmenize ve yapılandırmanıza olanak tanır. Yeni bir API eklemek, ek web sunucuları eklemeden uygulama sunucuları eklemeyle sonuçlanır. **Single responsibility principle**, birlikte çalışan küçük ve özerk servisleri savunur. Küçük servisleri olan küçük ekipler, hızlı büyüme için daha agresif planlama yapabilir.

Uygulama katmanındaki worker'lar ayrıca [asynchronism](#asynchronism)'i etkinleştirmeye yardımcı olur.

### Microservices

Bu tartışmayla ilgili olan [microservices](https://en.wikipedia.org/wiki/Microservices), bağımsız olarak dağıtılabilen, küçük, modüler servislerden oluşan bir paket olarak tanımlanabilir. Her servis benzersiz bir süreç çalıştırır ve bir iş hedefine hizmet etmek için iyi tanımlanmış, hafif bir mekanizma aracılığıyla iletişim kurar. <sup><a href=https://smartbear.com/learn/api-design/what-are-microservices>1</a></sup>

Örneğin, Pinterest şu microservice'lere sahip olabilir: kullanıcı profili, takipçi, feed, arama, fotoğraf yükleme, vb.

### Service Discovery

[Consul](https://www.consul.io/docs/index.html), [Etcd](https://coreos.com/etcd/docs/latest) ve [Zookeeper](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) gibi sistemler, kayıtlı adları, adresleri ve portları takip ederek servislerin birbirini bulmasına yardımcı olabilir. [Health checks](https://www.consul.io/intro/getting-started/checks.html) servis bütünlüğünü doğrulamaya yardımcı olur ve genellikle bir [HTTP](#hypertext-transfer-protocol-http) endpoint kullanılarak yapılır. Hem Consul hem de Etcd, config değerlerini ve diğer paylaşılan verileri depolamak için yararlı olabilecek yerleşik bir [key-value store](#key-value-store)'a sahiptir.

### Disadvantage(s): application layer

* Gevşek bağlı servislerle bir uygulama katmanı eklemek, mimari, operasyon ve süreç açısından farklı bir yaklaşım gerektirir (monolitik bir sisteme karşı).
* Microservices, dağıtım ve operasyon açısından karmaşıklık ekleyebilir.

### Source(s) and further reading

* [Intro to architecting systems for scale](http://lethain.com/introduction-to-architecting-systems-for-scale)
* [Crack the system design interview](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)
* [Service oriented architecture](https://en.wikipedia.org/wiki/Service-oriented_architecture)
* [Introduction to Zookeeper](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper)
* [Here's what you need to know about building microservices](https://cloudncode.wordpress.com/2016/07/22/msa-getting-started/)

## Database

<p align="center">
  <img src="images/Xkm5CXz.png">
  <br/>
  <i><a href=https://www.youtube.com/watch?v=kKjm4ehYiMs>Source: Scaling up to your first 10 million users</a></i>
</p>

### Relational database management system (RDBMS)

SQL gibi bir ilişkisel veritabanı, tablolarda düzenlenmiş veri öğelerinin bir koleksiyonudur.

**ACID**, ilişkisel veritabanı [transaction](https://en.wikipedia.org/wiki/Database_transaction)'larının bir özellikler kümesidir.

* **Atomicity** - Her transaction ya hep ya hiçtir
* **Consistency** - Herhangi bir transaction veritabanını bir geçerli durumdan diğerine getirir
* **Isolation** - Transaction'ları eşzamanlı olarak çalıştırmak, transaction'lar seri olarak çalıştırılmış gibi aynı sonuçlara sahiptir
* **Durability** - Bir transaction commit edildikten sonra, öyle kalır

Bir ilişkisel veritabanını ölçeklendirmek için birçok teknik vardır: **master-slave replication**, **master-master replication**, **Federasyon**, **sharding**, **denormalization** ve **SQL tuning**.

#### Master-slave replication

Master okuma ve yazma işlemlerini sunar, yazmaları yalnızca okuma işlemlerini sunan bir veya daha fazla slave'e çoğaltır. Slave'ler ayrıca ağaç benzeri bir şekilde ek slave'lere çoğaltabilir. Master çevrimdışı olursa, sistem bir slave master'a terfi ettirilene veya yeni bir master sağlanana kadar salt okunur modda çalışmaya devam edebilir.

<p align="center">
  <img src="images/C9ioGtn.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

##### Disadvantage(s): master-slave replication

* Bir slave'i master'a terfi ettirmek için ek mantık gerekir.
* **Hem** master-slave hem de master-master ile ilgili noktalar için [Disadvantage(s): replication](#disadvantages-replication) bölümüne bakın.

#### Master-master replication

Her iki master da okuma ve yazma işlemlerini sunar ve yazmalarda birbirleriyle koordine eder. Master'lardan biri çökerse, sistem hem okuma hem de yazma işlemleriyle çalışmaya devam edebilir.

<p align="center">
  <img src="images/krAHLGg.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

##### Disadvantage(s): master-master replication

* Nereye yazılacağını belirlemek için bir load balancer'a ihtiyacınız olacak veya uygulama mantığınızda değişiklik yapmanız gerekecek.
* Çoğu master-master sistemi ya gevşek tutarlıdır (ACID'i ihlal eder) ya da senkronizasyon nedeniyle artan yazma latency'sine sahiptir.
* Daha fazla yazma düğümü eklendikçe ve latency arttıkça çakışma çözümü daha fazla devreye girer.
* **Hem** master-slave hem de master-master ile ilgili noktalar için [Disadvantage(s): replication](#disadvantages-replication) bölümüne bakın.

##### Disadvantage(s): replication

* Master, yeni yazılan veriler diğer düğümlere çoğaltılmadan önce başarısız olursa veri kaybı potansiyeli vardır.
* Yazmalar okuma replikalarına yeniden oynatılır. Çok fazla yazma varsa, okuma replikaları yazmaları yeniden oynatmakla tıkanabilir ve çok fazla okuma yapamaz.
* Ne kadar çok okuma slave'i varsa, o kadar çok çoğaltmanız gerekir, bu da daha büyük çoğaltma gecikmesine yol açar.
* Bazı sistemlerde, master'a yazmak paralel yazmak için birden fazla thread başlatabilir, oysa okuma replikaları yalnızca tek bir thread ile sıralı yazmayı destekler.
* Çoğaltma daha fazla donanım ve ek karmaşıklık ekler.

##### Source(s) and further reading: replication

* [Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)
* [Multi-master replication](https://en.wikipedia.org/wiki/Multi-master_replication)

#### Federasyon

<p align="center">
  <img src="images/U3qV33e.png">
  <br/>
  <i><a href=https://www.youtube.com/watch?v=kKjm4ehYiMs>Source: Scaling up to your first 10 million users</a></i>
</p>

Federasyon (veya fonksiyonel bölümleme), veritabanlarını işleve göre böler. Örneğin, tek, monolitik bir veritabanı yerine, üç veritabanınız olabilir: **forums**, **users** ve **products**, bu da her veritabanına daha az okuma ve yazma trafiği ve dolayısıyla daha az çoğaltma gecikmesi ile sonuçlanır. Daha küçük veritabanları, belleğe sığabilecek daha fazla veri ile sonuçlanır, bu da geliştirilmiş cache locality nedeniyle daha fazla cache hit ile sonuçlanır. Yazmaları serileştiren tek bir merkezi master olmadan paralel yazabilirsiniz, throughput'u artırırsınız.

##### Disadvantage(s): Federasyon

* Şemanız büyük fonksiyonlar veya tablolar gerektiriyorsa Federasyon etkili değildir.
* Hangi veritabanından okunacağını ve yazılacağını belirlemek için uygulama mantığınızı güncellemeniz gerekecek.
* İki veritabanından veri birleştirmek, [server link](http://stackoverflow.com/questions/5145637/querying-data-by-joining-two-tables-in-two-database-on-different-servers) ile daha karmaşıktır.
* Federasyon daha fazla donanım ve ek karmaşıklık ekler.

##### Source(s) and further reading: Federasyon

* [Scaling up to your first 10 million users](https://www.youtube.com/watch?v=kKjm4ehYiMs)

#### Sharding

<p align="center">
  <img src="images/wU8x5Id.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

Sharding, veriyi farklı veritabanları arasında dağıtır, böylece her veritabanı yalnızca verinin bir alt kümesini yönetebilir. Bir kullanıcı veritabanını örnek olarak alırsak, kullanıcı sayısı arttıkça cluster'a daha fazla shard eklenir.

[Federation](#Federation)'ın avantajlarına benzer şekilde, sharding daha az okuma ve yazma trafiği, daha az çoğaltma ve daha fazla cache hit ile sonuçlanır. Index boyutu da azalır, bu da genellikle daha hızlı sorgularla performansı iyileştirir. Bir shard çökerse, diğer shard'lar hala çalışır durumdadır, ancak veri kaybını önlemek için bir tür çoğaltma eklemek isteyeceksiniz. Federasyon gibi, yazmaları serileştiren tek bir merkezi master yoktur, bu da artan throughput ile paralel yazmanıza olanak tanır.

Bir kullanıcı tablosunu shard'lamanın yaygın yolları, kullanıcının soyadının baş harfi veya kullanıcının coğrafi konumudur.

##### Disadvantage(s): sharding

* Shard'larla çalışmak için uygulama mantığınızı güncellemeniz gerekecek, bu da karmaşık SQL sorgularıyla sonuçlanabilir.
* Veri dağılımı bir shard'da dengesiz hale gelebilir. Örneğin, bir shard'daki bir güç kullanıcıları seti, diğerlerine kıyasla o shard'a artan yük ile sonuçlanabilir.
    * Yeniden dengeleme ek karmaşıklık ekler. [Consistent hashing](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html) tabanlı bir sharding fonksiyonu, aktarılan veri miktarını azaltabilir.
* Birden fazla shard'dan veri birleştirmek daha karmaşıktır.
* Sharding daha fazla donanım ve ek karmaşıklık ekler.

##### Source(s) and further reading: sharding

* [The coming of the shard](http://highscalability.com/blog/2009/8/6/an-unorthodox-approach-to-database-design-the-coming-of-the.html)
* [Shard database architecture](https://en.wikipedia.org/wiki/Shard_(database_architecture))
* [Consistent hashing](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html)

#### Denormalization

Denormalization, bazı yazma performansı pahasına okuma performansını iyileştirmeye çalışır. Verinin yedek kopyaları, pahalı join'lerden kaçınmak için birden fazla tabloya yazılır. [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) ve Oracle gibi bazı RDBMS'ler, yedek bilgileri depolama ve yedek kopyaları tutarlı tutma işini yapan [materialized views](https://en.wikipedia.org/wiki/Materialized_view)'i destekler.

Veri [Federation](#Federation) ve [sharding](#sharding) gibi tekniklerle dağıtıldığında, veri merkezleri arasında join'leri yönetmek karmaşıklığı daha da artırır. Denormalization bu tür karmaşık join'lere olan ihtiyacı ortadan kaldırabilir.

Çoğu sistemde, okumalar yazmaları 100:1 veya hatta 1000:1 oranında ağır basabilir. Karmaşık bir veritabanı join'i ile sonuçlanan bir okuma çok pahalı olabilir, disk işlemlerinde önemli miktarda zaman harcar.

##### Disadvantage(s): denormalization

* Veri çoğaltılır.
* Kısıtlamalar, bilginin yedek kopyalarının senkronize kalmasına yardımcı olabilir, bu da veritabanı tasarımının karmaşıklığını artırır.
* Ağır yazma yükü altındaki denormalize bir veritabanı, normalize edilmiş karşılığından daha kötü performans gösterebilir.

###### Source(s) and further reading: denormalization

* [Denormalization](https://en.wikipedia.org/wiki/Denormalization)

#### SQL tuning

SQL tuning geniş bir konudur ve birçok [kitap](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=sql+tuning) referans olarak yazılmıştır.

Darboğazları simüle etmek ve ortaya çıkarmak için **benchmark** ve **profile** yapmak önemlidir.

* **Benchmark** - [ab](http://httpd.apache.org/docs/2.2/programs/ab.html) gibi araçlarla yüksek yük durumlarını simüle edin.
* **Profile** - Performans sorunlarını takip etmeye yardımcı olmak için [slow query log](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html) gibi araçları etkinleştirin.

Benchmark ve profiling sizi aşağıdaki optimizasyonlara yönlendirebilir.

##### Tighten up the schema

* MySQL hızlı erişim için bitişik bloklarda diske dökülür.
* Sabit uzunluklu alanlar için `VARCHAR` yerine `CHAR` kullanın.
    * `CHAR` etkili bir şekilde hızlı, rastgele erişime izin verir, oysa `VARCHAR` ile bir sonrakine geçmeden önce bir dizenin sonunu bulmanız gerekir.
* Blog gönderileri gibi büyük metin blokları için `TEXT` kullanın. `TEXT` ayrıca boolean aramalara izin verir. Bir `TEXT` alanı kullanmak, metin bloğunu bulmak için kullanılan diske bir işaretçi depolamakla sonuçlanır.
* 2^32 veya 4 milyara kadar daha büyük sayılar için `INT` kullanın.
* Para birimi için kayan nokta temsil hatalarını önlemek için `DECIMAL` kullanın.
* Büyük `BLOB`'ları depolamaktan kaçının, bunun yerine nesneyi nereden alacağınızın konumunu depolayın.
* `VARCHAR(255)`, 8 bitlik bir sayıda sayılabilecek en büyük karakter sayısıdır, bazı RDBMS'lerde bir baytın kullanımını maksimize eder.
* Uygulanabilir olduğunda `NOT NULL` kısıtlamasını ayarlayın [arama performansını iyileştirmek](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search) için.

##### Use good indices

* Sorguladığınız sütunlar (`SELECT`, `GROUP BY`, `ORDER BY`, `JOIN`) index'lerle daha hızlı olabilir.
* Index'ler genellikle veriyi sıralı tutan ve logaritmik zamanda arama, sıralı erişim, ekleme ve silme işlemlerine izin veren kendi kendini dengeleyen [B-tree](https://en.wikipedia.org/wiki/B-tree) olarak temsil edilir.
* Bir index yerleştirmek veriyi bellekte tutabilir, daha fazla alan gerektirir.
* Yazmalar da daha yavaş olabilir çünkü index'in de güncellenmesi gerekir.
* Büyük miktarda veri yüklerken, index'leri devre dışı bırakmak, veriyi yüklemek, ardından index'leri yeniden oluşturmak daha hızlı olabilir.

##### Avoid expensive joins

* Performans gerektirdiğinde [denormalize](#denormalization) edin.

##### Partition tables

* Hot spot'ları ayrı bir tabloya koyarak bir tabloyu bölün, bellekte tutmaya yardımcı olur.

##### Tune the query cache

* Bazı durumlarda, [query cache](https://dev.mysql.com/doc/refman/5.7/en/query-cache.html) [performans sorunlarına](https://www.percona.com/blog/2016/10/12/mysql-5-7-performance-tuning-immediately-after-installation/) yol açabilir.

##### Source(s) and further reading: SQL tuning

* [Tips for optimizing MySQL queries](http://aiddroid.com/10-tips-optimizing-mysql-queries-dont-suck/)
* [Is there a good reason i see VARCHAR(255) used so often?](http://stackoverflow.com/questions/1217466/is-there-a-good-reason-i-see-varchar255-used-so-often-as-opposed-to-another-l)
* [How do null values affect performance?](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search)
* [Slow query log](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html)

### NoSQL

NoSQL, **key-value store**, **document store**, **wide column store** veya **graph database** olarak temsil edilen veri öğelerinin bir koleksiyonudur. Veri denormalize edilir ve join'ler genellikle uygulama kodunda yapılır. Çoğu NoSQL deposu gerçek ACID transaction'larından yoksundur ve [eventual consistency](#eventual-consistency)'i tercih eder.

**BASE**, NoSQL veritabanlarının özelliklerini tanımlamak için sıklıkla kullanılır. [CAP Theorem](#cap-theorem) ile karşılaştırıldığında, BASE consistency yerine availability'yi seçer.

* **Basically available** - sistem availability'yi garanti eder.
* **Soft state** - sistemin durumu girdi olmadan bile zamanla değişebilir.
* **Eventual consistency** - sistem, o süre boyunca girdi almazsa, bir süre sonra tutarlı hale gelecektir.

[SQL or NoSQL](#sql-or-nosql) arasında seçim yapmanın yanı sıra, hangi NoSQL veritabanı türünün kullanım durumunuza en uygun olduğunu anlamak yararlıdır. Bir sonraki bölümde **key-value store'lar**, **document store'lar**, **wide column store'lar** ve **graph database'ler** gözden geçirilecektir.

#### Key-value store

> Abstraction: hash table

Bir key-value store genellikle O(1) okuma ve yazmaya izin verir ve genellikle bellek veya SSD ile desteklenir. Veri depoları anahtarları [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order)'da tutabilir, anahtar aralıklarının verimli alınmasına izin verir. Key-value store'lar bir değerle metadata depolamaya izin verebilir.

Key-value store'lar yüksek performans sağlar ve genellikle basit veri modelleri veya hızla değişen veriler için kullanılır, örneğin bir in-memory cache katmanı. Yalnızca sınırlı bir işlem seti sundukları için, ek işlemler gerekirse karmaşıklık uygulama katmanına kaydırılır.

Bir key-value store, bir document store gibi daha karmaşık sistemlerin temelidir ve bazı durumlarda bir graph database'dir.

##### Source(s) and further reading: key-value store

* [Key-value database](https://en.wikipedia.org/wiki/Key-value_database)
* [Disadvantages of key-value stores](http://stackoverflow.com/questions/4056093/what-are-the-disadvantages-of-using-a-key-value-table-over-nullable-columns-or)
* [Redis architecture](http://qnimate.com/overview-of-redis-architecture/)
* [Memcached architecture](https://adayinthelifeof.nl/2011/02/06/memcache-internals/)

#### Document store

> Abstraction: key-value store with documents stored as values

Bir document store, belgeler (XML, JSON, binary, vb.) etrafında merkezlenmiştir, burada bir belge belirli bir nesne için tüm bilgileri depolar. Document store'lar, belgenin kendi iç yapısına göre sorgulama yapmak için API'ler veya bir sorgu dili sağlar. *Not, birçok key-value store bir değerin metadata'sıyla çalışmak için özellikler içerir, bu iki depolama türü arasındaki çizgileri bulanıklaştırır.*

Temel uygulamaya bağlı olarak, belgeler koleksiyonlar, etiketler, metadata veya dizinler tarafından düzenlenir. Belgeler organize edilebilir veya gruplandırılabilir olsa da, belgeler birbirinden tamamen farklı alanlara sahip olabilir.

[MongoDB](https://www.mongodb.com/mongodb-architecture) ve [CouchDB](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/) gibi bazı document store'lar karmaşık sorgular gerçekleştirmek için SQL benzeri bir dil de sağlar. [DynamoDB](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf) hem key-value hem de document'leri destekler.

Document store'lar yüksek esneklik sağlar ve genellikle ara sıra değişen verilerle çalışmak için kullanılır.

##### Source(s) and further reading: document store

* [Document-oriented database](https://en.wikipedia.org/wiki/Document-oriented_database)
* [MongoDB architecture](https://www.mongodb.com/mongodb-architecture)
* [CouchDB architecture](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/)
* [Elasticsearch architecture](https://www.elastic.co/blog/found-elasticsearch-from-the-bottom-up)

#### Wide column store

<p align="center">
  <img src="images/n16iOGk.png">
  <br/>
  <i><a href=http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html>Source: SQL & NoSQL, a brief history</a></i>
</p>

> Abstraction: nested map `ColumnFamily<RowKey, Columns<ColKey, Value, Timestamp>>`

Bir wide column store'un temel veri birimi bir sütundur (ad/değer çifti). Bir sütun column family'lerde (bir SQL tablosuna benzer) gruplandırılabilir. Super column family'ler column family'leri daha da gruplar. Her sütuna bir row key ile bağımsız olarak erişebilirsiniz ve aynı row key'e sahip sütunlar bir satır oluşturur. Her değer, sürüm oluşturma ve çakışma çözümü için bir timestamp içerir.

Google, ilk wide column store olarak [Bigtable](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf)'ı tanıttı, bu da Hadoop ekosisteminde sıklıkla kullanılan açık kaynak [HBase](https://www.edureka.co/blog/hbase-architecture/) ve Facebook'tan [Cassandra](http://docs.datastax.com/en/cassandra/3.0/cassandra/architecture/archIntro.html)'yı etkiledi. BigTable, HBase ve Cassandra gibi store'lar anahtarları lexicographic order'da tutar, seçici anahtar aralıklarının verimli alınmasına izin verir.

Wide column store'lar yüksek availability ve yüksek ölçeklenebilirlik sunar. Çok büyük veri setleri için sıklıkla kullanılırlar.

##### Source(s) and further reading: wide column store

* [SQL & NoSQL, a brief history](http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html)
* [Bigtable architecture](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf)
* [HBase architecture](https://www.edureka.co/blog/hbase-architecture/)
* [Cassandra architecture](http://docs.datastax.com/en/cassandra/3.0/cassandra/architecture/archIntro.html)

#### Graph database

<p align="center">
  <img src="images/fNcl65g.png">
  <br/>
  <i><a href=https://en.wikipedia.org/wiki/File:GraphDatabase_PropertyGraph.png>Source: Graph database</a></i>
</p>

> Abstraction: graph

Bir graph database'de, her düğüm bir kayıttır ve her yay iki düğüm arasındaki bir ilişkidir. Graph database'ler, birçok foreign key veya many-to-many ilişkileriyle karmaşık ilişkileri temsil etmek için optimize edilmiştir.

Graph database'ler, sosyal ağ gibi karmaşık ilişkilere sahip veri modelleri için yüksek performans sunar. Nispeten yenidirler ve henüz yaygın olarak kullanılmamaktadır; geliştirme araçları ve kaynakları bulmak daha zor olabilir. Birçok graph yalnızca [REST API](#representational-state-transfer-rest)'lerle erişilebilir.

##### Source(s) and further reading: graph

* [Graph database](https://en.wikipedia.org/wiki/Graph_database)
* [Neo4j](https://neo4j.com/)
* [FlockDB](https://blog.twitter.com/2010/introducing-flockdb)

#### Source(s) and further reading: NoSQL

* [Explanation of base terminology](http://stackoverflow.com/questions/3342497/explanation-of-base-terminology)
* [NoSQL databases a survey and decision guidance](https://medium.com/baqend-blog/nosql-databases-a-survey-and-decision-guidance-ea7823a822d#.wskogqenq)
* [Scalability](https://web.archive.org/web/20220602114024/https://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
* [Introduction to NoSQL](https://www.youtube.com/watch?v=qI_g07C_Q5I)
* [NoSQL patterns](http://horicky.blogspot.com/2009/11/nosql-patterns.html)

### SQL or NoSQL

<p align="center">
  <img src="images/wXGqG5f.png">
  <br/>
  <i><a href=https://www.infoq.com/articles/Transition-RDBMS-NoSQL/>Source: Transitioning from RDBMS to NoSQL</a></i>
</p>

**SQL** için nedenler:

* Yapılandırılmış veri
* Katı şema
* İlişkisel veri
* Karmaşık join'lere ihtiyaç
* Transaction'lar
* Ölçeklendirme için net pattern'ler
* Daha yerleşik: geliştiriciler, topluluk, kod, araçlar, vb.
* Index ile aramalar çok hızlıdır

**NoSQL** için nedenler:

* Yarı yapılandırılmış veri
* Dinamik veya esnek şema
* İlişkisel olmayan veri
* Karmaşık join'lere gerek yok
* Çok sayıda TB (veya PB) veri depolama
* Çok veri yoğun iş yükü
* IOPS için çok yüksek throughput

NoSQL'e iyi uyum sağlayan örnek veriler:

* Clickstream ve log verilerinin hızlı alınması
* Liderlik tablosu veya skor verisi
* Alışveriş sepeti gibi geçici veri
* Sık erişilen ('hot') tablolar
* Metadata/arama tabloları

##### Source(s) and further reading: SQL or NoSQL

* [Scaling up to your first 10 million users](https://www.youtube.com/watch?v=kKjm4ehYiMs)
* [SQL vs NoSQL differences](https://www.sitepoint.com/sql-vs-nosql-differences/)

## Cache

<p align="center">
  <img src="images/Q6z24La.png">
  <br/>
  <i><a href=http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html>Source: Scalable system design patterns</a></i>
</p>

Caching sayfa yükleme sürelerini iyileştirir ve sunucularınız ve veritabanlarınızdaki yükü azaltabilir. Bu modelde, dispatcher önce isteğin daha önce yapılıp yapılmadığını kontrol eder ve gerçek yürütmeyi kaydetmek için önceki sonucu bulmaya çalışır.

Veritabanları genellikle bölümleri arasında okuma ve yazmaların tekdüze dağılımından yararlanır. Popüler öğeler dağılımı bozabilir, darboğazlara neden olabilir. Bir veritabanının önüne bir cache koymak, düzensiz yükleri ve trafikteki ani artışları emmeye yardımcı olabilir.

### Client caching

Cache'ler istemci tarafında (OS veya tarayıcı), [server side](#reverse-proxy-web-server) veya ayrı bir cache katmanında bulunabilir.

### CDN caching

[CDN'ler](#content-delivery-network) bir cache türü olarak kabul edilir.

### Web server caching

[Reverse proxy'ler](#reverse-proxy-web-server) ve [Varnish](https://www.varnish-cache.org/) gibi cache'ler statik ve dinamik içeriği doğrudan sunabilir. Web sunucuları ayrıca istekleri önbelleğe alabilir, uygulama sunucularıyla iletişim kurmadan yanıtları döndürebilir.

### Database caching

Veritabanınız genellikle varsayılan yapılandırmada genel bir kullanım durumu için optimize edilmiş bir düzeyde önbelleğe alma içerir. Bu ayarları belirli kullanım pattern'leri için ayarlamak performansı daha da artırabilir.

### Application caching

Memcached ve Redis gibi in-memory cache'ler, uygulamanız ve veri depolama alanınız arasında key-value store'lardır. Veri RAM'de tutulduğu için, verinin diskte depolandığı tipik veritabanlarından çok daha hızlıdır. RAM diskten daha sınırlıdır, bu yüzden [least recently used (LRU)](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)) gibi [cache invalidation](https://en.wikipedia.org/wiki/Cache_algorithms) algoritmaları 'soğuk' girişleri geçersiz kılmaya ve 'sıcak' veriyi RAM'de tutmaya yardımcı olabilir.

Redis'in aşağıdaki ek özellikleri vardır:

* Persistence seçeneği
* Sorted set'ler ve listeler gibi yerleşik veri yapıları

İki genel kategoriye düşen önbelleğe alabileceğiniz birden fazla seviye vardır: **database queries** ve **objects**:

* Row level
* Query-level
* Tam oluşturulmuş serileştirilebilir nesneler
* Tam render edilmiş HTML

Genel olarak, dosya tabanlı önbelleğe almaktan kaçınmalısınız, çünkü bu klonlama ve otomatik ölçeklendirmeyi zorlaştırır.

### Caching at the database query level

Veritabanını sorguladığınızda, sorguyu bir anahtar olarak hash'leyin ve sonucu cache'e kaydedin. Bu yaklaşım sona erme sorunlarından muzdariptir:

* Karmaşık sorgularla önbelleğe alınmış bir sonucu silmek zordur
* Bir tablo hücresi gibi bir veri parçası değişirse, değişen hücreyi içerebilecek tüm önbelleğe alınmış sorguları silmeniz gerekir

### Caching at the object level

Verinizi bir nesne olarak görün, uygulama kodunuzla yaptığınız gibi. Uygulamanızın veri setini veritabanından bir sınıf örneği veya veri yapısına toplamasını sağlayın:

* Altta yatan veri değiştiyse nesneyi cache'den kaldırın
* Asenkron işlemeye izin verir: worker'lar en son önbelleğe alınmış nesneyi tüketerek nesneleri toplar

Önbelleğe alınacak öneriler:

* Kullanıcı oturumları
* Tam render edilmiş web sayfaları
* Aktivite akışları
* Kullanıcı graph verisi

### When to update the cache

Cache'de yalnızca sınırlı miktarda veri depolayabildiğiniz için, hangi cache güncelleme stratejisinin kullanım durumunuz için en iyi çalıştığını belirlemeniz gerekecektir.

#### Cache-aside

<p align="center">
  <img src="images/ONjORqk.png">
  <br/>
  <i><a href=http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast>Source: From cache to in-memory data grid</a></i>
</p>

Uygulama depolamadan okuma ve yazma sorumluluğundadır. Cache doğrudan depolama ile etkileşime girmez. Uygulama şunları yapar:

* Cache'de girişi ara, cache miss ile sonuçlanır
* Veritabanından girişi yükle
* Girişi cache'e ekle
* Girişi döndür

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

[Memcached](https://memcached.org/) genellikle bu şekilde kullanılır.

Cache'e eklenen verilerin sonraki okumaları hızlıdır. Cache-aside ayrıca lazy loading olarak da adlandırılır. Yalnızca istenen veri önbelleğe alınır, bu da cache'i istenmeyen verilerle doldurmayı önler.

##### Disadvantage(s): cache-aside

* Her cache miss üç yolculukla sonuçlanır, bu da fark edilir bir gecikmeye neden olabilir.
* Veri veritabanında güncellenirse eski hale gelebilir. Bu sorun, cache girişinin güncellenmesini zorlayan bir time-to-live (TTL) ayarlayarak veya write-through kullanarak hafifletilebilir.
* Bir düğüm başarısız olduğunda, yeni, boş bir düğümle değiştirilir, latency'yi artırır.

#### Write-through

<p align="center">
  <img src="images/0vBc0hN.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

Uygulama cache'i ana veri deposu olarak kullanır, ona veri okur ve yazar, cache ise veritabanına okuma ve yazma sorumluluğundadır:

* Uygulama cache'de giriş ekler/günceller
* Cache girişi veri deposuna senkron olarak yazar
* Döndür

Uygulama kodu:

```python
set_user(12345, {"foo":"bar"})
```

Cache kodu:

```python
def set_user(user_id, values):
    user = db.query("UPDATE Users WHERE id = {0}", user_id, values)
    cache.set(user_id, user)
```

Write-through yazma işlemi nedeniyle genel olarak yavaş bir işlemdir, ancak az önce yazılan verilerin sonraki okumaları hızlıdır. Kullanıcılar genellikle veri okurken olduğundan daha fazla latency'ye veri güncellerken toleranslıdır. Cache'deki veri eski değildir.

##### Disadvantage(s): write through

* Hata veya ölçeklendirme nedeniyle yeni bir düğüm oluşturulduğunda, yeni düğüm giriş veritabanında güncellenene kadar cache girişlerini önbelleğe almayacaktır. Write through ile birlikte cache-aside bu sorunu hafifletebilir.
* Yazılan verilerin çoğu hiç okunmayabilir, bu bir TTL ile minimize edilebilir.

#### Write-behind (write-back)

<p align="center">
  <img src="images/rgSrvjG.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

Write-behind'de, uygulama şunları yapar:

* Cache'de giriş ekle/güncelle
* Girişi veri deposuna asenkron olarak yaz, yazma performansını iyileştirir

##### Disadvantage(s): write-behind

* Cache içeriği veri deposuna ulaşmadan önce cache çökerse veri kaybı olabilir.
* Write-behind'i uygulamak, cache-aside veya write-through'i uygulamaktan daha karmaşıktır.

#### Refresh-ahead

<p align="center">
  <img src="images/kxtjqgE.png">
  <br/>
  <i><a href=http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast>Source: From cache to in-memory data grid</a></i>
</p>

Cache'i, sona ermeden önce yakın zamanda erişilen herhangi bir cache girişini otomatik olarak yenileyecek şekilde yapılandırabilirsiniz.

Cache gelecekte hangi öğelerin gerekli olacağını doğru bir şekilde tahmin edebilirse, refresh-ahead read-through'e kıyasla azaltılmış latency ile sonuçlanabilir.

##### Disadvantage(s): refresh-ahead

* Gelecekte hangi öğelerin gerekli olacağını doğru tahmin etmemek, refresh-ahead olmadan daha düşük performansla sonuçlanabilir.

### Disadvantage(s): cache

* [Cache invalidation](https://en.wikipedia.org/wiki/Cache_algorithms) aracılığıyla cache'ler ve veritabanı gibi gerçek kaynak arasında tutarlılığı korumak gerekir.
* Cache invalidation zor bir problemdir, cache'i ne zaman güncelleyeceğinizle ilgili ek karmaşıklık vardır.
* Redis veya memcached eklemek gibi uygulama değişiklikleri yapmak gerekir.

### Source(s) and further reading

* [From cache to in-memory data grid](http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast)
* [Scalable system design patterns](http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html)
* [Introduction to architecting systems for scale](http://lethain.com/introduction-to-architecting-systems-for-scale/)
* [Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)
* [Scalability](https://web.archive.org/web/20230126233752/https://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
* [AWS ElastiCache strategies](http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/Strategies.html)
* [Wikipedia](https://en.wikipedia.org/wiki/Cache_(computing))

## Asynchronism

<p align="center">
  <img src="images/54GYsSx.png">
  <br/>
  <i><a href=http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer>Source: Intro to architecting systems for scale</a></i>
</p>

Asenkron iş akışları, aksi takdirde satır içi gerçekleştirilecek pahalı işlemler için istek sürelerini azaltmaya yardımcı olur. Ayrıca, verilerin periyodik toplaması gibi zaman alıcı işleri önceden yaparak yardımcı olabilirler.

### Message queues

Message queue'lar mesajları alır, tutar ve teslim eder. Bir işlem satır içi gerçekleştirmek için çok yavaşsa, aşağıdaki iş akışıyla bir message queue kullanabilirsiniz:

* Bir uygulama kuyruğa bir iş yayınlar, ardından kullanıcıya iş durumunu bildirir
* Bir worker kuyruktan işi alır, işler, ardından işin tamamlandığını işaretler

Kullanıcı engellenmez ve iş arka planda işlenir. Bu süre zarfında, istemci görevin tamamlandığı görünmesi için isteğe bağlı olarak küçük miktarda işlem yapabilir. Örneğin, bir tweet gönderiyorsanız, tweet anında zaman çizelgenize gönderilebilir, ancak tweet'inizin tüm takipçilerinize gerçekten teslim edilmesi biraz zaman alabilir.

**[Redis](https://redis.io/)** basit bir message broker olarak yararlıdır ancak mesajlar kaybolabilir.

**[RabbitMQ](https://www.rabbitmq.com/)** popülerdir ancak 'AMQP' protokolüne uyum sağlamanızı ve kendi düğümlerinizi yönetmenizi gerektirir.

**[Amazon SQS](https://aws.amazon.com/sqs/)** barındırılmıştır ancak yüksek latency'ye sahip olabilir ve mesajların iki kez teslim edilme olasılığı vardır.

### Task queues

Task queue'lar görevleri ve ilgili verilerini alır, çalıştırır, ardından sonuçlarını teslim eder. Zamanlama destekleyebilirler ve arka planda hesaplama yoğun işleri çalıştırmak için kullanılabilirler.

**[Celery](https://docs.celeryproject.org/en/stable/)** zamanlama desteğine sahiptir ve öncelikle python desteğine sahiptir.

### Back pressure

Queue'lar önemli ölçüde büyümeye başlarsa, queue boyutu bellekten daha büyük hale gelebilir, bu da cache miss'ler, disk okumaları ve daha da yavaş performansla sonuçlanır. [Back pressure](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html), queue boyutunu sınırlayarak yardımcı olabilir, böylece yüksek bir throughput oranı ve queue'daki işler için iyi yanıt süreleri korunur. Queue dolduğunda, istemciler daha sonra tekrar denemek için bir sunucu meşgul veya HTTP 503 durum kodu alır. İstemciler daha sonra isteği yeniden deneyebilir, belki [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) ile.

### Disadvantage(s): asynchronism

* Ucuz hesaplamalar ve gerçek zamanlı iş akışları gibi kullanım durumları, queue'lar gecikme ve karmaşıklık ekleyebileceğinden, senkron işlemler için daha uygun olabilir.

### Source(s) and further reading

* [It's all a numbers game](https://www.youtube.com/watch?v=1KRYH75wgy4)
* [Applying back pressure when overloaded](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)
* [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)
* [What is the difference between a message queue and a task queue?](https://www.quora.com/What-is-the-difference-between-a-message-queue-and-a-task-queue-Why-would-a-task-queue-require-a-message-broker-like-RabbitMQ-Redis-Celery-or-IronMQ-to-function)

## Communication

<p align="center">
  <img src="images/5KeocQs.jpg">
  <br/>
  <i><a href=http://www.escotal.com/osilayer.html>Source: OSI 7 layer model</a></i>
</p>

### Hypertext transfer protocol (HTTP)

HTTP, bir istemci ve sunucu arasında veri kodlama ve taşıma yöntemidir. Bir request/response protokolüdür: istemciler istekler verir ve sunucular istek hakkında ilgili içerik ve tamamlanma durumu bilgisiyle yanıtlar verir. HTTP kendi kendine yeterlidir, load balancing, caching, encryption ve compression gerçekleştiren birçok ara router ve sunucu üzerinden isteklerin ve yanıtların akmasına izin verir.

Temel bir HTTP isteği bir fiil (method) ve bir kaynak (endpoint) içerir. Aşağıda yaygın HTTP fiilleri vardır:

| Verb | Description | Idempotent* | Safe | Cacheable |
|---|---|---|---|---|
| GET | Bir kaynağı okur | Yes | Yes | Yes |
| POST | Bir kaynak oluşturur veya veri işleyen bir süreci tetikler | No | No | Yes if response contains freshness info |
| PUT | Bir kaynak oluşturur veya değiştirir | Yes | No | No |
| PATCH | Bir kaynağı kısmen günceller | No | No | Yes if response contains freshness info |
| DELETE | Bir kaynağı siler | Yes | No | No |

*Farklı sonuçlar olmadan birçok kez çağrılabilir.

HTTP, **TCP** ve **UDP** gibi alt seviye protokollere dayanan bir uygulama katmanı protokolüdür.

#### Source(s) and further reading: HTTP

* [What is HTTP?](https://www.nginx.com/resources/glossary/http/)
* [Difference between HTTP and TCP](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol)
* [Difference between PUT and PATCH](https://laracasts.com/discuss/channels/general-discussion/whats-the-differences-between-put-and-patch?page=1)

### Transmission control protocol (TCP)

<p align="center">
  <img src="images/JdAsdvG.jpg">
  <br/>
  <i><a href=http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/>Source: How to make a multiplayer game</a></i>
</p>

TCP, bir [IP network](https://en.wikipedia.org/wiki/Internet_Protocol) üzerinde bağlantı odaklı bir protokoldür. Bağlantı bir [handshake](https://en.wikipedia.org/wiki/Handshaking) kullanılarak kurulur ve sonlandırılır. Gönderilen tüm paketlerin orijinal sırada ve bozulmadan hedefe ulaşması garanti edilir:

* Her paket için sıra numaraları ve [checksum alanları](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Checksum_computation)
* [Acknowledgment](https://en.wikipedia.org/wiki/Acknowledgement_(data_networks)) paketleri ve otomatik yeniden iletim

Gönderen doğru bir yanıt almazsa, paketleri yeniden gönderir. Birden fazla timeout varsa, bağlantı kesilir. TCP ayrıca [flow control](https://en.wikipedia.org/wiki/Flow_control_(data)) ve [congestion control](https://en.wikipedia.org/wiki/Network_congestion#Congestion_control) uygular. Bu garantiler gecikmelere neden olur ve genellikle UDP'den daha az verimli iletimle sonuçlanır.

Yüksek throughput sağlamak için, web sunucuları çok sayıda TCP bağlantısını açık tutabilir, bu da yüksek bellek kullanımıyla sonuçlanır. Web sunucu thread'leri ile örneğin bir [memcached](https://memcached.org/) sunucusu arasında çok sayıda açık bağlantıya sahip olmak pahalı olabilir. [Connection pooling](https://en.wikipedia.org/wiki/Connection_pool) uygun olduğunda UDP'ye geçmenin yanı sıra yardımcı olabilir.

TCP, yüksek güvenilirlik gerektiren ancak zaman açısından daha az kritik olan uygulamalar için yararlıdır. Bazı örnekler web sunucuları, veritabanı bilgileri, SMTP, FTP ve SSH'dır.

TCP'yi UDP üzerinde kullanın:

* Tüm verilerin sağlam ulaşması gerekiyorsa
* Ağ throughput'unun en iyi tahminini otomatik olarak yapmak istiyorsanız

### User datagram protocol (UDP)

<p align="center">
  <img src="images/yzDrJtA.jpg">
  <br/>
  <i><a href=http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/>Source: How to make a multiplayer game</a></i>
</p>

UDP bağlantısızdır. Datagram'lar (paketlere benzer) yalnızca datagram seviyesinde garanti edilir. Datagram'lar hedeflerine sıra dışı veya hiç ulaşmayabilir. UDP congestion control'ü desteklemez. TCP desteğinin garantileri olmadan, UDP genellikle daha verimlidir.

UDP yayın yapabilir, subnet'teki tüm cihazlara datagram gönderir. Bu [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) ile yararlıdır çünkü istemci henüz bir IP adresi almamıştır, bu da TCP'nin IP adresi olmadan akış yapmasını engeller.

UDP daha az güvenilirdir ancak VoIP, video sohbet, streaming ve gerçek zamanlı çok oyunculu oyunlar gibi gerçek zamanlı kullanım durumlarında iyi çalışır.

UDP'yi TCP üzerinde kullanın:

* En düşük latency'ye ihtiyacınız varsa
* Geç veri veri kaybından daha kötüyse
* Kendi hata düzeltmenizi uygulamak istiyorsanız

#### Source(s) and further reading: TCP and UDP

* [Networking for game programming](http://gafferongames.com/networking-for-game-programmers/udp-vs-tcp/)
* [Key differences between TCP and UDP protocols](http://www.cyberciti.biz/faq/key-differences-between-tcp-and-udp-protocols/)
* [Difference between TCP and UDP](http://stackoverflow.com/questions/5970383/difference-between-tcp-and-udp)
* [Transmission control protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
* [User datagram protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
* [Scaling memcache at Facebook](http://www.cs.bu.edu/~jappavoo/jappavoo.github.com/451/papers/memcache-fb.pdf)

### Remote procedure call (RPC)

<p align="center">
  <img src="images/iF4Mkb5.png">
  <br/>
  <i><a href=http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview>Source: Crack the system design interview</a></i>
</p>

Bir RPC'de, bir istemci genellikle uzak bir sunucu olan farklı bir adres alanında bir prosedürün çalıştırılmasına neden olur. Prosedür, yerel bir prosedür çağrısı gibi kodlanır, istemci programından sunucuyla nasıl iletişim kurulacağının detaylarını soyutlar. Uzak çağrılar genellikle yerel çağrılardan daha yavaş ve daha az güvenilirdir, bu yüzden RPC çağrılarını yerel çağrılardan ayırt etmek yararlıdır. Popüler RPC framework'leri [Protobuf](https://developers.google.com/protocol-buffers/), [Thrift](https://thrift.apache.org/) ve [Avro](https://avro.apache.org/docs/current/) içerir.

RPC bir request-response protokolüdür:

* **Client program** - İstemci stub prosedürünü çağırır. Parametreler yerel bir prosedür çağrısı gibi stack'e itilir.
* **Client stub procedure** - Prosedür id'sini ve argümanları bir istek mesajına marshall eder (paketler).
* **Client communication module** - OS mesajı istemciden sunucuya gönderir.
* **Server communication module** - OS gelen paketleri sunucu stub prosedürüne iletir.
* **Server stub procedure** - Sonuçları unmarshall eder, prosedür id'siyle eşleşen sunucu prosedürünü çağırır ve verilen argümanları geçirir.
* Sunucu yanıtı yukarıdaki adımları ters sırada tekrarlar.

Örnek RPC çağrıları:

```
GET /someoperation?data=anId

POST /anotheroperation
{
  "data":"anId";
  "anotherdata": "another value"
}
```

RPC davranışları ortaya çıkarmaya odaklanır. RPC'ler genellikle iç iletişimlerde performans nedenleriyle kullanılır, çünkü kullanım durumlarınıza daha iyi uyacak şekilde native çağrıları elle yapabilirsiniz.

Native bir kütüphane (aka SDK) seçin:

* Hedef platformunuzu biliyorsanız.
* "Mantığınızın" nasıl erişildiğini kontrol etmek istiyorsanız.
* Hata kontrolünün kütüphanenizden nasıl gerçekleştiğini kontrol etmek istiyorsanız.
* Performans ve son kullanıcı deneyimi birincil endişenizdir.

**REST**'i takip eden HTTP API'leri genellikle genel API'ler için daha sık kullanılır.

#### Disadvantage(s): RPC

* RPC istemcileri servis uygulamasına sıkı bir şekilde bağlanır.
* Her yeni işlem veya kullanım durumu için yeni bir API tanımlanmalıdır.
* RPC'yi debug etmek zor olabilir.
* Mevcut teknolojileri kutudan çıktığı gibi kullanamayabilirsiniz. Örneğin, [Squid](http://www.squid-cache.org/) gibi önbelleğe alma sunucularında [RPC çağrılarının düzgün şekilde önbelleğe alınmasını](https://web.archive.org/web/20170608193645/http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/) sağlamak ek çaba gerektirebilir.

### Representational state transfer (REST)

REST, istemcinin sunucu tarafından yönetilen bir kaynak seti üzerinde hareket ettiği bir istemci/sunucu modelini zorunlu kılan bir mimari stildir. Sunucu, kaynakları manipüle edebilen veya kaynakların yeni bir temsilini alabilen kaynakların ve eylemlerin bir temsilini sağlar. Tüm iletişim stateless ve cacheable olmalıdır.

RESTful bir arayüzün dört niteliği vardır:

* **Identify resources (URI in HTTP)** - herhangi bir işlemden bağımsız olarak aynı URI'yi kullanın.
* **Change with representations (Verbs in HTTP)** - fiiller, başlıklar ve gövde kullanın.
* **Self-descriptive error message (status response in HTTP)** - Durum kodlarını kullanın, tekerleği yeniden icat etmeyin.
* **[HATEOAS](http://restcookbook.com/Basics/hateoas/) (HTML interface for HTTP)** - web servisiniz bir tarayıcıda tamamen erişilebilir olmalıdır.

Örnek REST çağrıları:

```
GET /someresources/anId

PUT /someresources/anId
{"anotherdata": "another value"}
```

REST veriyi ortaya çıkarmaya odaklanır. İstemci/sunucu arasındaki bağlantıyı minimize eder ve genellikle genel HTTP API'leri için kullanılır. REST, URI'ler aracılığıyla kaynakları ortaya çıkarmak için daha genel ve tekdüze bir yöntem kullanır, [başlıklar aracılığıyla temsil](https://github.com/for-GET/know-your-http-well/blob/master/headers.md) ve GET, POST, PUT, DELETE ve PATCH gibi fiiller aracılığıyla eylemler. Stateless olduğu için, REST horizontal scaling ve partitioning için harikadır.

#### Disadvantage(s): REST

* REST veriyi ortaya çıkarmaya odaklandığı için, kaynaklar doğal olarak organize edilmemişse veya basit bir hiyerarşide erişilmiyorsa iyi bir uyum olmayabilir. Örneğin, belirli bir olay setiyle eşleşen son bir saatteki tüm güncellenmiş kayıtları döndürmek bir yol olarak kolayca ifade edilemez. REST ile, muhtemelen URI yolu, sorgu parametreleri ve muhtemelen istek gövdesinin bir kombinasyonuyla uygulanır.
* REST genellikle birkaç fiile (GET, POST, PUT, DELETE ve PATCH) dayanır, bu bazen kullanım durumunuza uymaz. Örneğin, süresi dolmuş belgeleri arşiv klasörüne taşımak bu fiiller içinde temiz bir şekilde uymayabilir.
* İç içe hiyerarşilere sahip karmaşık kaynakları getirmek, tek görünümleri render etmek için istemci ve sunucu arasında birden fazla gidiş-dönüş gerektirir, örn. bir blog girişinin içeriğini ve o girişteki yorumları getirmek. Değişken ağ koşullarında çalışan mobil uygulamalar için, bu birden fazla gidiş-dönüş son derece istenmeyen bir durumdur.
* Zamanla, bir API yanıtına daha fazla alan eklenebilir ve eski istemciler ihtiyaç duymadıkları dahil tüm yeni veri alanlarını alacaktır, sonuç olarak payload boyutunu şişirir ve daha büyük latency'lere yol açar.

### RPC and REST calls comparison

| Operation | RPC | REST |
|---|---|---|
| Signup    | **POST** /signup | **POST** /persons |
| Resign    | **POST** /resign<br/>{<br/>"personid": "1234"<br/>} | **DELETE** /persons/1234 |
| Read a person | **GET** /readPerson?personid=1234 | **GET** /persons/1234 |
| Read a person's items list | **GET** /readUsersItemsList?personid=1234 | **GET** /persons/1234/items |
| Add an item to a person's items | **POST** /addItemToUsersItemsList<br/>{<br/>"personid": "1234";<br/>"itemid": "456"<br/>} | **POST** /persons/1234/items<br/>{<br/>"itemid": "456"<br/>} |
| Update an item    | **POST** /modifyItem<br/>{<br/>"itemid": "456";<br/>"key": "value"<br/>} | **PUT** /items/456<br/>{<br/>"key": "value"<br/>} |
| Delete an item | **POST** /removeItem<br/>{<br/>"itemid": "456"<br/>} | **DELETE** /items/456 |

<p align="center">
  <i><a href=https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/>Source: Do you really know why you prefer REST over RPC</a></i>
</p>

#### Source(s) and further reading: REST and RPC

* [Do you really know why you prefer REST over RPC](https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/)
* [When are RPC-ish approaches more appropriate than REST?](http://programmers.stackexchange.com/a/181186)
* [REST vs JSON-RPC](http://stackoverflow.com/questions/15056878/rest-vs-json-rpc)
* [Debunking the myths of RPC and REST](https://web.archive.org/web/20170608193645/http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/)
* [What are the drawbacks of using REST](https://www.quora.com/What-are-the-drawbacks-of-using-RESTful-APIs)
* [Crack the system design interview](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)
* [Thrift](https://code.facebook.com/posts/1468950976659943/)
* [Why REST for internal use and not RPC](http://arstechnica.com/civis/viewtopic.php?t=1190508)

## Security

Bu bölüm bazı güncellemeler kullanabilir. [Katkıda bulunmayı](#contributing) düşünün!

Güvenlik geniş bir konudur. Önemli deneyiminiz, güvenlik geçmişiniz yoksa veya güvenlik bilgisi gerektiren bir pozisyon için başvurmuyorsanız, muhtemelen temellerden fazlasını bilmenize gerek yoktur:

* Transit ve at rest'te şifreleyin.
* [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) ve [SQL injection](https://en.wikipedia.org/wiki/SQL_injection)'ı önlemek için tüm kullanıcı girdilerini veya kullanıcıya maruz kalan herhangi bir girdi parametresini temizleyin.
* SQL injection'ı önlemek için parametreli sorgular kullanın.
* [Least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) prensibini kullanın.

### Source(s) and further reading

* [API security checklist](https://github.com/shieldfy/API-Security-Checklist)
* [Security guide for developers](https://github.com/FallibleInc/security-guide-for-developers)
* [OWASP top ten](https://www.owasp.org/index.php/OWASP_Top_Ten_Cheat_Sheet)

## Appendix

Bazen 'back-of-the-envelope' tahminleri yapmanız istenecektir. Örneğin, diskten 100 görüntü küçük resmi oluşturmanın ne kadar süreceğini veya bir veri yapısının ne kadar bellek alacağını belirlemeniz gerekebilir. **Powers of two table** ve **Latency numbers every programmer should know** kullanışlı referanslardır.

### Powers of two table

```
Power           Exact Value         Approx Value        Bytes
---------------------------------------------------------------
7                             128
8                             256
10                           1024   1 thousand           1 KB
16                         65,536                       64 KB
20                      1,048,576   1 million            1 MB
30                  1,073,741,824   1 billion            1 GB
32                  4,294,967,296                        4 GB
40              1,099,511,627,776   1 trillion           1 TB
```

#### Source(s) and further reading

* [Powers of two](https://en.wikipedia.org/wiki/Power_of_two)

### Latency numbers every programmer should know

```
Latency Comparison Numbers
--------------------------
L1 cache reference                           0.5 ns
Branch mispredict                            5   ns
L2 cache reference                           7   ns                      14x L1 cache
Mutex lock/unlock                           25   ns
Main memory reference                      100   ns                      20x L2 cache, 200x L1 cache
Compress 1K bytes with Zippy            10,000   ns       10 us
Send 1 KB bytes over 1 Gbps network     10,000   ns       10 us
Read 4 KB randomly from SSD*           150,000   ns      150 us          ~1GB/sec SSD
Read 1 MB sequentially from memory     250,000   ns      250 us
Round trip within same datacenter      500,000   ns      500 us
Read 1 MB sequentially from SSD*     1,000,000   ns    1,000 us    1 ms  ~1GB/sec SSD, 4X memory
HDD seek                            10,000,000   ns   10,000 us   10 ms  20x datacenter roundtrip
Read 1 MB sequentially from 1 Gbps  10,000,000   ns   10,000 us   10 ms  40x memory, 10X SSD
Read 1 MB sequentially from HDD     30,000,000   ns   30,000 us   30 ms 120x memory, 30X SSD
Send packet CA->Netherlands->CA    150,000,000   ns  150,000 us  150 ms

Notes
-----
1 ns = 10^-9 seconds
1 us = 10^-6 seconds = 1,000 ns
1 ms = 10^-3 seconds = 1,000 us = 1,000,000 ns
```

Yukarıdaki sayılara dayalı kullanışlı metrikler:

* HDD'den sıralı olarak 30 MB/s hızında okuma
* 1 Gbps Ethernet'ten sıralı olarak 100 MB/s hızında okuma
* SSD'den sıralı olarak 1 GB/s hızında okuma
* Ana bellekten sıralı olarak 4 GB/s hızında okuma
* Saniyede 6-7 dünya çapında gidiş-dönüş
* Bir veri merkezi içinde saniyede 2,000 gidiş-dönüş

#### Latency numbers visualized

![](https://camo.githubusercontent.com/77f72259e1eb58596b564d1ad823af1853bc60a3/687474703a2f2f692e696d6775722e636f6d2f6b307431652e706e67)

#### Source(s) and further reading

* [Latency numbers every programmer should know - 1](https://gist.github.com/jboner/2841832)
* [Latency numbers every programmer should know - 2](https://gist.github.com/hellerbarde/2843375)
* [Designs, lessons, and advice from building large distributed systems](http://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf)
* [Software Engineering Advice from Building Large-Scale Distributed Systems](https://static.googleusercontent.com/media/research.google.com/en//people/jeff/stanford-295-talk.pdf)

### Additional system design interview questions

> Yaygın sistem tasarım mülakat soruları, her birini nasıl çözeceğinize dair kaynak bağlantılarıyla.

| Question | Reference(s) |
|---|---|
| Design a file sync service like Dropbox | [youtube.com](https://www.youtube.com/watch?v=PE4gwstWhmc) |
| Design a search engine like Google | [queue.acm.org](http://queue.acm.org/detail.cfm?id=988407)<br/>[stackexchange.com](http://programmers.stackexchange.com/questions/38324/interview-question-how-would-you-implement-google-search)<br/>[ardendertat.com](http://www.ardendertat.com/2012/01/11/implementing-search-engines/)<br/>[stanford.edu](http://infolab.stanford.edu/~backrub/google.html) |
| Design a scalable web crawler like Google | [quora.com](https://www.quora.com/How-can-I-build-a-web-crawler-from-scratch) |
| Design Google docs | [code.google.com](https://code.google.com/p/google-mobwrite/)<br/>[neil.fraser.name](https://neil.fraser.name/writing/sync/) |
| Design a key-value store like Redis | [slideshare.net](http://www.slideshare.net/dvirsky/introduction-to-redis) |
| Design a cache system like Memcached | [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached) |
| Design a recommendation system like Amazon's | [hulu.com](https://web.archive.org/web/20170406065247/http://tech.hulu.com/blog/2011/09/19/recommendation-system.html)<br/>[ijcai13.org](http://ijcai13.org/files/tutorial_slides/td3.pdf) |
| Design a tinyurl system like Bitly | [n00tc0d3r.blogspot.com](http://n00tc0d3r.blogspot.com/) |
| Design a chat app like WhatsApp | [highscalability.com](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html)
| Design a picture sharing system like Instagram | [highscalability.com](http://highscalability.com/flickr-architecture)<br/>[highscalability.com](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html) |
| Design the Facebook news feed function | [quora.com](http://www.quora.com/What-are-best-practices-for-building-something-like-a-News-Feed)<br/>[quora.com](http://www.quora.com/Activity-Streams/What-are-the-scaling-issues-to-keep-in-mind-while-developing-a-social-network-feed)<br/>[slideshare.net](http://www.slideshare.net/danmckinley/etsy-activity-feeds-architecture) |
| Design the Facebook timeline function | [facebook.com](https://www.facebook.com/note.php?note_id=10150468255628920)<br/>[highscalability.com](http://highscalability.com/blog/2012/1/23/facebook-timeline-brought-to-you-by-the-power-of-denormaliza.html) |
| Design the Facebook chat function | [erlang-factory.com](http://www.erlang-factory.com/upload/presentations/31/EugeneLetuchy-ErlangatFacebook.pdf)<br/>[facebook.com](https://www.facebook.com/note.php?note_id=14218138919&id=9445547199&index=0) |
| Design a graph search function like Facebook's | [facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-building-out-the-infrastructure-for-graph-search/10151347573598920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-indexing-and-ranking-in-graph-search/10151361720763920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-the-natural-language-interface-of-graph-search/10151432733048920) |
| Design a content delivery network like CloudFlare | [figshare.com](https://figshare.com/articles/Globally_distributed_content_delivery/6605972) |
| Design a trending topic system like Twitter's | [michael-noll.com](http://www.michael-noll.com/blog/2013/01/18/implementing-real-time-trending-topics-in-storm/)<br/>[snikolov .wordpress.com](http://snikolov.wordpress.com/2012/11/14/early-detection-of-twitter-trends/) |
| Design a random ID generation system | [blog.twitter.com](https://blog.twitter.com/2010/announcing-snowflake)<br/>[github.com](https://github.com/twitter/snowflake/) |
| Return the top k requests during a time interval | [cs.ucsb.edu](https://www.cs.ucsb.edu/sites/default/files/documents/2005-23.pdf)<br/>[wpi.edu](http://davis.wpi.edu/xmdv/docs/EDBT11-diyang.pdf) |
| Design a system that serves data from multiple data centers | [highscalability.com](http://highscalability.com/blog/2009/8/24/how-google-serves-data-from-multiple-datacenters.html) |
| Design an online multiplayer card game | [indieflashblog.com](https://web.archive.org/web/20180929181117/http://www.indieflashblog.com/how-to-create-an-asynchronous-multiplayer-game.html)<br/>[buildnewgames.com](http://buildnewgames.com/real-time-multiplayer/) |
| Design a garbage collection system | [stuffwithstuff.com](http://journal.stuffwithstuff.com/2013/12/08/babys-first-garbage-collector/)<br/>[washington.edu](http://courses.cs.washington.edu/courses/csep521/07wi/prj/rick.pdf) |
| Design an API rate limiter | [https://stripe.com/blog/](https://stripe.com/blog/rate-limiters) |
| Design a Stock Exchange (like NASDAQ or Binance) | [Jane Street](https://youtu.be/b1e4t2k2KJY)<br/>[Golang Implementation](https://around25.com/blog/building-a-trading-engine-for-a-crypto-exchange/)<br/>[Go Implementation](http://bhomnick.net/building-a-simple-limit-order-in-go/) |
| Add a system design question | [Contribute](#contributing) |

### Real world architectures

> Gerçek dünya sistemlerinin nasıl tasarlandığına dair makaleler.

<p align="center">
  <img src="images/TcUo2fw.png">
  <br/>
  <i><a href=https://www.infoq.com/presentations/Twitter-Timeline-Scalability>Source: Twitter timelines at scale</a></i>
</p>

**Aşağıdaki makaleler için ayrıntılara odaklanmayın, bunun yerine:**

* Bu makalelerdeki ortak prensipleri, yaygın teknolojileri ve pattern'leri belirleyin
* Her bileşenin hangi sorunları çözdüğünü, nerede çalıştığını, nerede çalışmadığını inceleyin
* Öğrenilen dersleri gözden geçirin

|Type | System | Reference(s) |
|---|---|---|
| Data processing | **MapReduce** - Google'dan dağıtılmış veri işleme | [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/mapreduce-osdi04.pdf) |
| Data processing | **Spark** - Databricks'ten dağıtılmış veri işleme | [slideshare.net](http://www.slideshare.net/AGrishchenko/apache-spark-architecture) |
| Data processing | **Storm** - Twitter'dan dağıtılmış veri işleme | [slideshare.net](http://www.slideshare.net/previa/storm-16094009) |
| | | |
| Data store | **Bigtable** - Google'dan dağıtılmış sütun odaklı veritabanı | [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf) |
| Data store | **HBase** - Bigtable'ın açık kaynak uygulaması | [slideshare.net](http://www.slideshare.net/alexbaranau/intro-to-hbase) |
| Data store | **Cassandra** - Facebook'tan dağıtılmış sütun odaklı veritabanı | [slideshare.net](http://www.slideshare.net/planetcassandra/cassandra-introduction-features-30103666)
| Data store | **DynamoDB** - Amazon'dan document odaklı veritabanı | [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf) |
| Data store | **MongoDB** - Document odaklı veritabanı | [slideshare.net](http://www.slideshare.net/mdirolf/introduction-to-mongodb) |
| Data store | **Spanner** - Google'dan küresel olarak dağıtılmış veritabanı | [research.google.com](http://research.google.com/archive/spanner-osdi2012.pdf) |
| Data store | **Memcached** - Dağıtılmış bellek önbelleğe alma sistemi | [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached) |
| Data store | **Redis** - Kalıcılık ve değer türleriyle dağıtılmış bellek önbelleğe alma sistemi | [slideshare.net](http://www.slideshare.net/dvirsky/introduction-to-redis) |
| | | |
| File system | **Google File System (GFS)** - Dağıtılmış dosya sistemi | [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/gfs-sosp2003.pdf) |
| File system | **Hadoop File System (HDFS)** - GFS'nin açık kaynak uygulaması | [apache.org](http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html) |
| | | |
| Misc | **Chubby** - Google'dan gevşek bağlı dağıtılmış sistemler için kilit servisi | [research.google.com](http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/archive/chubby-osdi06.pdf) |
| Misc | **Dapper** - Dağıtılmış sistemler izleme altyapısı | [research.google.com](http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36356.pdf)
| Misc | **Kafka** - LinkedIn'den pub/sub message queue | [slideshare.net](http://www.slideshare.net/mumrah/kafka-talk-tri-hug) |
| Misc | **Zookeeper** - Senkronizasyonu etkinleştiren merkezi altyapı ve servisler | [slideshare.net](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) |
| | Add an architecture | [Contribute](#contributing) |

### Company architectures

| Company | Reference(s) |
|---|---|
| Amazon | [Amazon architecture](http://highscalability.com/amazon-architecture) |
| Cinchcast | [Producing 1,500 hours of audio every day](http://highscalability.com/blog/2012/7/16/cinchcast-architecture-producing-1500-hours-of-audio-every-d.html) |
| DataSift | [Realtime datamining At 120,000 tweets per second](http://highscalability.com/blog/2011/11/29/datasift-architecture-realtime-datamining-at-120000-tweets-p.html) |
| Dropbox | [How we've scaled Dropbox](https://www.youtube.com/watch?v=PE4gwstWhmc) |
| ESPN | [Operating At 100,000 duh nuh nuhs per second](http://highscalability.com/blog/2013/11/4/espns-architecture-at-scale-operating-at-100000-duh-nuh-nuhs.html) |
| Google | [Google architecture](http://highscalability.com/google-architecture) |
| Instagram | [14 million users, terabytes of photos](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html)<br/>[What powers Instagram](http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances) |
| Justin.tv | [Justin.Tv's live video broadcasting architecture](http://highscalability.com/blog/2010/3/16/justintvs-live-video-broadcasting-architecture.html) |
| Facebook | [Scaling memcached at Facebook](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/key-value/fb-memcached-nsdi-2013.pdf)<br/>[TAO: Facebook's distributed data store for the social graph](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/data-store/tao-facebook-distributed-datastore-atc-2013.pdf)<br/>[Facebook's photo storage](https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Beaver.pdf)<br/>[How Facebook Live Streams To 800,000 Simultaneous Viewers](http://highscalability.com/blog/2016/6/27/how-facebook-live-streams-to-800000-simultaneous-viewers.html) |
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

### Company engineering blogs

> Mülakat yaptığınız şirketler için mimariler.
>
> Karşılaşabileceğiniz sorular aynı domain'den olabilir.

* [Airbnb Engineering](http://nerds.airbnb.com/)
* [Atlassian Developers](https://developer.atlassian.com/blog/)
* [AWS Blog](https://aws.amazon.com/blogs/aws/)
* [Bitly Engineering Blog](http://word.bitly.com/)
* [Box Blogs](https://blog.box.com/blog/category/engineering)
* [Cloudera Developer Blog](http://blog.cloudera.com/)
* [Dropbox Tech Blog](https://tech.dropbox.com/)
* [Engineering at Quora](https://www.quora.com/q/quoraengineering)
* [Ebay Tech Blog](http://www.ebaytechblog.com/)
* [Evernote Tech Blog](https://blog.evernote.com/tech/)
* [Etsy Code as Craft](http://codeascraft.com/)
* [Facebook Engineering](https://www.facebook.com/Engineering)
* [Flickr Code](http://code.flickr.net/)
* [Foursquare Engineering Blog](http://engineering.foursquare.com/)
* [GitHub Engineering Blog](https://github.blog/category/engineering)
* [Google Research Blog](http://googleresearch.blogspot.com/)
* [Groupon Engineering Blog](https://engineering.groupon.com/)
* [Heroku Engineering Blog](https://engineering.heroku.com/)
* [Hubspot Engineering Blog](http://product.hubspot.com/blog/topic/engineering)
* [High Scalability](http://highscalability.com/)
* [Instagram Engineering](http://instagram-engineering.tumblr.com/)
* [Intel Software Blog](https://software.intel.com/en-us/blogs/)
* [Jane Street Tech Blog](https://blogs.janestreet.com/category/ocaml/)
* [LinkedIn Engineering](http://engineering.linkedin.com/blog)
* [Microsoft Engineering](https://engineering.microsoft.com/)
* [Microsoft Python Engineering](https://blogs.msdn.microsoft.com/pythonengineering/)
* [Netflix Tech Blog](http://techblog.netflix.com/)
* [Paypal Developer Blog](https://medium.com/paypal-engineering)
* [Pinterest Engineering Blog](https://medium.com/@Pinterest_Engineering)
* [Reddit Blog](http://www.redditblog.com/)
* [Salesforce Engineering Blog](https://developer.salesforce.com/blogs/engineering/)
* [Slack Engineering Blog](https://slack.engineering/)
* [Spotify Labs](https://labs.spotify.com/)
* [Stripe Engineering Blog](https://stripe.com/blog/engineering)
* [Twilio Engineering Blog](http://www.twilio.com/engineering)
* [Twitter Engineering](https://blog.twitter.com/engineering/)
* [Uber Engineering Blog](http://eng.uber.com/)
* [Yahoo Engineering Blog](http://yahooeng.tumblr.com/)
* [Yelp Engineering Blog](http://engineeringblog.yelp.com/)
* [Zynga Engineering Blog](https://www.zynga.com/blogs/engineering)

#### Source(s) and further reading

Bir blog eklemek mi istiyorsunuz? İşi tekrarlamaktan kaçınmak için, şirket blogunuzu aşağıdaki repo'ya eklemeyi düşünün:

* [kilimchoi/engineering-blogs](https://github.com/kilimchoi/engineering-blogs)

## Under development

Bir bölüm eklemek veya devam eden birini tamamlamaya yardımcı olmak ister misiniz? [Katkıda bulunun](#contributing)!

* Distributed computing with MapReduce
* Consistent hashing
* Scatter gather
* [Contribute](#contributing)

## Credits

Bu repo boyunca krediler ve kaynaklar sağlanmıştır.

Özel teşekkürler:

* [Hired in tech](http://www.hiredintech.com/system-design/the-system-design-process/)
* [Cracking the coding interview](https://www.amazon.com/dp/0984782850/)
* [High scalability](http://highscalability.com/)
* [checkcheckzz/system-design-interview](https://github.com/checkcheckzz/system-design-interview)
* [shashank88/system_design](https://github.com/shashank88/system_design)
* [mmcgrana/services-engineering](https://github.com/mmcgrana/services-engineering)
* [System design cheat sheet](https://gist.github.com/vasanthk/485d1c25737e8e72759f)
* [A distributed systems reading list](http://dancres.github.io/Pages/)
* [Cracking the system design interview](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)

## Contact info

Herhangi bir sorun, soru veya yorumu tartışmak için benimle iletişime geçmekten çekinmeyin.

İletişim bilgilerim [GitHub sayfamda](https://github.com/donnemartin) bulunabilir.

## License

*Bu repository'deki kodu ve kaynakları size açık kaynak lisansı altında sağlıyorum. Bu kişisel repository'm olduğu için, koduma ve kaynaklarıma aldığınız lisans benden ve işverenimden (Facebook) değildir.*

    Copyright 2017 Donne Martin

    Creative Commons Attribution 4.0 International License (CC BY 4.0)

    http://creativecommons.org/licenses/by/4.0/

