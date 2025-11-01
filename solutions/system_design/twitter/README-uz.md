# Twitter timeline va qidiruv dizayni

*Eslatma: bu hujjat takrorlanishni kamaytirish uchun [system design mavzulari](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics)dagi tegishli bo‘limlarga to‘g‘ridan-to‘g‘ri havola qiladi. Havolalardagi kontent asosiy fikrlar, trade-off’lar va alternativalarni yoritadi.*

**Facebook feed dizayni** va **Facebook qidiruvi dizayni** ham o‘xshash savollar.

## 1-qadam: Use case va cheklovlarni aniqlash

> Talablarni to‘plang va muammoning ko‘lamini belgilang.  
> Use case va cheklovlarni aniqlashtirish uchun savollar bering.  
> Farazlarni muhokama qiling.

Intervyuer bilan aniqlashtirish imkonimiz yo‘qligi sababli, use case va cheklovlarni o‘zimiz belgilaymiz.

### Use case’lar

#### Quyidagi use case’lar bilan cheklanamiz

* **User** tweet joylaydi  
    * **Service** follower’lariga push bildirgilar va email yuboradi
* **User** user timeline’ini (o‘zi joylagan faollik) ko‘radi
* **User** home timeline’ini (follow qilayotgan odamlar faoliyati) ko‘radi
* **User** kalit so‘zlarni qidiradi
* **Service** yuqori availability’ga ega

#### Scope tashqarisida

* **Service** tweet’larni Firehose va boshqa stream’larga push qiladi
* **Service** visibility sozlamalariga qarab tweet’larni yashiradi  
    * @reply’larni, agar user javob berilgan odamni follow qilmagan bo‘lsa, ko‘rsatmaydi  
    * “Hide retweets” sozlamasini hisobga oladi
* Analytics

### Cheklovlar va farazlar

#### Farazlar

Umumiy:

* Trafik bir tekis tarqalmagan
* Tweet post qilish juda tez bo‘lishi kerak  
    * Milyonlab follower bo‘lmaguncha fan-out ham tez bo‘lishi lozim
* 100 million aktiv user
* Kuniga 500 million tweet (oyiga 15 milliard)
    * Har bir tweet o‘rtacha 10 ta yetkazib berish (fanout)ga ega
    * Kuniga 5 milliard fanout yetkazib berish
    * Oyiga 150 milliard fanout yetkazib berish
* Oyiga 250 milliard o‘qish so‘rovi
* Oyiga 10 milliard qidiruv

Timeline:

* Timeline ko‘rish tez bo‘lishi kerak
* Twitter’da o‘qish yozishdan ancha ko‘p  
    * Tweet’larni tez o‘qish uchun optimallashtiring
* Tweet qabul qilish (ingest) – write-heavy

Search:

* Qidiruv tez bo‘lishi kerak
* Qidiruv read-heavy

#### Foydalanishni hisoblash

**Intervyuer taxminiy hisob-kitoblarni kutadimi-yo‘qligini aniqlang.**

* Har bir tweet hajmi:
    * `tweet_id` – 8 byte
    * `user_id` – 32 byte
    * `text` – 140 byte
    * `media` – o‘rtacha 10 KB
    * Jami ≈ 10 KB
* Oyiga 150 TB yangi kontent  
    * 10 KB * 500 mln tweet * 30 kun
    * 3 yilda ≈ 5.4 PB tweet
* Sekundiga 100 ming o‘qish so‘rovi  
    * Oyiga 250 mlrd so‘rov ≈ (400 rps / 1 mlrd) konversiya
* Sekundiga 6 000 tweet yozuvi  
    * 15 mlrd tweet/oy * (400 rps / 1 mlrd)
* Sekundiga 60 ming fanout yetkazib berish  
    * 150 mlrd fanout/oy * (400 rps / 1 mlrd)
* Sekundiga 4 000 qidiruv so‘rovi  
    * 10 mlrd qidiruv/oy * (400 rps / 1 mlrd)

Foydali konversiya:

* Oyiga 2.5 mln sekund
* 1 rps = oyiga 2.5 mln so‘rov
* 40 rps = oyiga 100 mln so‘rov
* 400 rps = oyiga 1 mlrd so‘rov

## 2-qadam: High level dizayn

> Muhim komponentlar bilan yuqori darajadagi arxitekturani chizing.

![Imgur](http://i.imgur.com/48tEA2j.png)

## 3-qadam: Yadro komponentlarni loyihalash

> Har bir asosiy component tafsilotlariga chuqurroq kirish.

### Use case: User tweet post qiladi

User timeline (o‘zi joylagan faollik)ni to‘ldirish uchun tweet’larni [relational database](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms)da saqlashimiz mumkin. SQL yoki NoSQL tanlashdagi [trade-off](https://github.com/donnemartin/system-design-primer#sql-or-nosql)larni muhokama qilish kerak.

Tweet yetkazish va home timeline (follow qilayotganlar faolligi)ni qurish anchagina murakkab. Har bir tweet’ni barcha follower’lariga fan-out qilish (sekundiga 60 ming fan-out) an’anaviy [relational database](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms)ni ortiqcha yuklaydi. Tez yozish imkoniyatiga ega **NoSQL database** yoki **Memory Cache** tanlash maqsadga muvofiq: xotiradan 1 MB ketma-ket o‘qish ≈ 250 µs, SSD 4x, disk 80x sekinroq.<sup><a href="https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know">1</a></sup>

Media (foto/video)ni **Object Store**da saqlash mumkin.

Jarayon:

* **Client** tweet’ni [reverse proxy](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server) rolidagi **Web Server**ga yuboradi
* **Web Server** so‘rovni **Write API** serverga uzatadi
* **Write API** user timeline uchun tweet’ni **SQL Database**ga yozadi
* **Write API** **Fan Out Service** bilan bog‘lanadi, u esa:
    * **User Graph Service**dan follower’lar ro‘yxatini oladi (**Memory Cache**da saqlangan)
    * Tweet’ni follower’larning *home timeline*iga **Memory Cache**da joylaydi  
        * O(n) operatsiya: 1 000 follower = 1 000 lookup+insert
    * Tweet’ni tez qidirish uchun **Search Index Service**ga yozadi
    * Media fayllarni **Object Store**ga saqlaydi
    * **Notification Service** orqali follower’larga push bildirish jo‘natadi  
        * Asinxron yuborish uchun **Queue** (diagrammada ko‘rsatilmagan) ishlatiladi

**Intervyuer qanchalik ko‘p kod kutayotganini aniqlashtiring.**

Agar cache sifatida Redis tanlansa, quyidagi struktura qo‘llanilishi mumkin:

```
           tweet n+2                   tweet n+1                   tweet n
| 8 bytes   8 bytes  1 byte | 8 bytes   8 bytes  1 byte | 8 bytes   8 bytes  1 byte |
| tweet_id  user_id  meta   | tweet_id  user_id  meta   | tweet_id  user_id  meta   |
```

Yangi tweet **Memory Cache**ga joylanadi va follower’larning home timeline’ini to‘ldiradi.

Jamoatchilik uchun ochiq [**REST API**](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest):

```
$ curl -X POST --data '{ "user_id": "123", "auth_token": "ABC123", \
    "status": "hello world!", "media_ids": "ABC987" }' \
    https://twitter.com/api/v1/tweet
```

Javob:

```
{
    "created_at": "Wed Sep 05 00:37:15 +0000 2012",
    "status": "hello world!",
    "tweet_id": "987",
    "user_id": "123",
    ...
}
```

Ichki muloqotlar uchun [RPC](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc) ishlatilishi mumkin.

### Use case: User home timeline’ni ko‘radi

* **Client** home timeline so‘rovini **Web Server**ga yuboradi
* **Web Server** so‘rovni **Read API** serverga uzatadi
* **Read API** **Timeline Service** bilan bog‘lanadi:
    * **Memory Cache**dagi timeline ma’lumotini oladi (tweet_id va user_id) – O(1)
    * Tweet ID’lar bo‘yicha **Tweet Info Service**ga [multiget](http://redis.io/commands/mget) so‘rov yuboradi – O(n)
    * User ID’lar bo‘yicha **User Info Service**ga multiget yuboradi – O(n)

REST API:

```
$ curl https://twitter.com/api/v1/home_timeline?user_id=123
```

Javob:

```
{
    "user_id": "456",
    "tweet_id": "123",
    "status": "foo"
},
{
    "user_id": "789",
    "tweet_id": "456",
    "status": "bar"
},
{
    "user_id": "789",
    "tweet_id": "579",
    "status": "baz"
},
```

### Use case: User user timeline’ni ko‘radi

* **Client** user timeline so‘rovini **Web Server**ga yuboradi
* **Web Server** so‘rovni **Read API** serverga uzatadi
* **Read API** user timeline’ni **SQL Database**dan oladi

REST API home timeline’ga o‘xshaydi, faqat natijalar foydalanuvchining o‘z tweet’laridan iborat bo‘ladi.

### Use case: User kalit so‘zlarni qidiradi

* **Client** qidiruv so‘rovini **Web Server**ga yuboradi
* **Web Server** so‘rovni **Search API** serverga uzatadi
* **Search API** **Search Service**ga murojaat qiladi:
    * Kiruvchi so‘rovni parse/tokenize qiladi:
        * Markup’ni olib tashlaydi
        * Matnni term (token)larga bo‘ladi
        * Xatolarni tuzatadi
        * Capitalization’ni normallashtiradi
        * Boolean operatsiyalar bilan ifodalaydi
    * **Search Cluster** (masalan, [Lucene](https://lucene.apache.org/))dan natijalarni oladi:
        * Klasterning har bir serveriga [scatter-gather](https://github.com/donnemartin/system-design-primer#under-development) so‘rov yuboradi
        * Natijalarni birlashtiradi, reyting beradi, tartiblaydi va qaytaradi

REST API:

```
$ curl https://twitter.com/api/v1/search?query=hello+world
```

Javob home timeline formatiga o‘xshaydi, faqat qidiruv shartiga mos kelgan tweet’lar qaytariladi.

## 4-qadam: Dizaynni masshtablash

> Cheklovlarni hisobga olib, bottleneck’larni aniqlang va bartaraf eting.

![Imgur](http://i.imgur.com/jrUBAF7.png)

**Muhim:** dastlabki dizayndan darhol final dizaynga sakramang!

Iterativ yondashuvni ayting: 1) **Benchmark/Load Test**, 2) bottleneck’larni **Profiling**, 3) trade-off’larni baholagan holda yechimlarni qo‘llash, 4) takrorlash. [AWS’da millionlab user’largacha o‘sadigan system design](../scaling_aws/README.md) misolini ko‘ring.

Har bir bosqichda qaysi bottleneck’lar paydo bo‘lishi va ularni qanday bartaraf etish mumkinligini muhokama qiling. Masalan, bir nechta **Web Server** bilan **Load Balancer** qo‘shish nimalarni hal qiladi? **CDN**chi? **Master-Slave Replicas**chi? Har yondashuvning alternativalari va trade-off’lari haqida gapiring.

Scale uchun qo‘shimcha komponentlar qo‘shamiz (diagrammada ichki load balancerlar ko‘rsatilmagan).

*Takroriy izohlarni oldini olish uchun* quyidagi [system design topics](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics) bo‘limlariga murojaat qiling:

* [DNS](https://github.com/donnemartin/system-design-primer#domain-name-system)
* [CDN](https://github.com/donnemartin/system-design-primer#content-delivery-network)
* [Load balancer](https://github.com/donnemartin/system-design-primer#load-balancer)
* [Horizontal scaling](https://github.com/donnemartin/system-design-primer#horizontal-scaling)
* [Web server (reverse proxy)](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server)
* [API server (application layer)](https://github.com/donnemartin/system-design-primer#application-layer)
* [Cache](https://github.com/donnemartin/system-design-primer#cache)
* [Relational database management system (RDBMS)](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms)
* [SQL write master-slave failover](https://github.com/donnemartin/system-design-primer#fail-over)
* [Master-slave replication](https://github.com/donnemartin/system-design-primer#master-slave-replication)
* [Consistency patterns](https://github.com/donnemartin/system-design-primer#consistency-patterns)
* [Availability patterns](https://github.com/donnemartin/system-design-primer#availability-patterns)

**Fanout Service** potensial bottleneck. Millionlab follower’li user tweet joylaganda fanout bir necha daqiqa cho‘zilishi mumkin va @reply bilan race condition paydo bo‘ladi – serve vaqtida tartiblash orqali yumshatish mumkin.

Yana bir yondashuv: follower’lari juda ko‘p user’lar uchun fan-out qilmasdan, kerakli tweet’larni qidiruv orqali topish, home timeline natijalari bilan birlashtirish va serve vaqtida tartiblash.

Qo‘shimcha optimallashtirish:

* Har bir home timeline uchun **Memory Cache**da faqat bir necha yuzta tweet saqlang
* Faqat faol user’larning home timeline ma’lumotlarini cache’lang  
    * Agar user 30 kun davomida faol bo‘lmagan bo‘lsa, timeline’ni **SQL Database**dan qayta qurish:
        * **User Graph Service**dan follow qilganlar ro‘yxatini olish
        * **SQL Database**dan tweet’larni olib, **Memory Cache**ga qo‘shish
* **Tweet Info Service**da faqat oxirgi bir oylik tweet’larni saqlash
* **User Info Service**ga faqat faol user’larni qo‘yish
* **Search Cluster** kechikishni kamaytirish uchun tweet’larni xotirada saqlashi kerak bo‘lishi mumkin

**SQL Database** ham bottleneck bo‘lishi mumkin.

**Memory Cache** database yukini tushirsa-da, cache miss holatida faqat **SQL Read Replica**lar yetarli bo‘lmasligi mumkin. Qo‘shimcha SQL scaling patterns ishlatish zarur.

Yozuvlar hajmi yuqori bo‘lgani uchun bitta **SQL Write Master-Slave** kifoya qilmaydi; quyidagi texnikalarni ko‘rib chiqing:

* [Federation](https://github.com/donnemartin/system-design-primer#federation)
* [Sharding](https://github.com/donnemartin/system-design-primer#sharding)
* [Denormalization](https://github.com/donnemartin/system-design-primer#denormalization)
* [SQL Tuning](https://github.com/donnemartin/system-design-primer#sql-tuning)

Ba’zi ma’lumotlarni **NoSQL Database**ga ko‘chirish ham foydali bo‘lishi mumkin.

## Qo‘shimcha muhokama mavzulari

> Vaqt va scope’ga qarab qo‘shimcha chuqurlashish mumkin.

#### NoSQL

* [Key-value store](https://github.com/donnemartin/system-design-primer#key-value-store)
* [Document store](https://github.com/donnemartin/system-design-primer#document-store)
* [Wide column store](https://github.com/donnemartin/system-design-primer#wide-column-store)
* [Graph database](https://github.com/donnemartin/system-design-primer#graph-database)
* [SQL vs NoSQL](https://github.com/donnemartin/system-design-primer#sql-or-nosql)

### Caching

* Qaerda cache qilish:
    * [Client caching](https://github.com/donnemartin/system-design-primer#client-caching)
    * [CDN caching](https://github.com/donnemartin/system-design-primer#cdn-caching)
    * [Web server caching](https://github.com/donnemartin/system-design-primer#web-server-caching)
    * [Database caching](https://github.com/donnemartin/system-design-primer#database-caching)
    * [Application caching](https://github.com/donnemartin/system-design-primer#application-caching)
* Nima cache qilinadi:
    * [Caching at the database query level](https://github.com/donnemartin/system-design-primer#caching-at-the-database-query-level)
    * [Caching at the object level](https://github.com/donnemartin/system-design-primer#caching-at-the-object-level)
* Cache qachon yangilanadi:
    * [Cache-aside](https://github.com/donnemartin/system-design-primer#cache-aside)
    * [Write-through](https://github.com/donnemartin/system-design-primer#write-through)
    * [Write-behind (write-back)](https://github.com/donnemartin/system-design-primer#write-behind-write-back)
    * [Refresh ahead](https://github.com/donnemartin/system-design-primer#refresh-ahead)

### Asinxronlik va microservices

* [Message queues](https://github.com/donnemartin/system-design-primer#message-queues)
* [Task queues](https://github.com/donnemartin/system-design-primer#task-queues)
* [Back pressure](https://github.com/donnemartin/system-design-primer#back-pressure)
* [Microservices](https://github.com/donnemartin/system-design-primer#microservices)

### Communication

* Trade-off’larni muhokama qiling:
    * Tashqi clientlar bilan aloqa – [REST asosidagi HTTP API](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest)
    * Ichki aloqa – [RPC](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc)
* [Service discovery](https://github.com/donnemartin/system-design-primer#service-discovery)

### Security

[Security bo‘limi](https://github.com/donnemartin/system-design-primer#security)ga murojaat qiling.

### Latency

[Har bir dasturchi bilishi kerak bo‘lgan kechikish ko‘rsatkichlari](https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know)ni ko‘ring.

### Ongoing

* Yangi bottleneck paydo bo‘lishi bilan benchmarking va monitoringni davom ettiring
* Scaling – iterativ jarayon
