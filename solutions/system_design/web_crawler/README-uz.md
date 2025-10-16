# Veb crawler dizayni

*Eslatma: bu hujjat takrorlanishni kamaytirish uchun [system design mavzulari](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics)dagi tegishli bo‘limlarga to‘g‘ridan-to‘g‘ri havola qiladi. Havolalardagi kontent asosiy fikrlar, trade-off’lar va alternativalarni yoritadi.*

## 1-qadam: Use case va cheklovlarni aniqlash

> Talablarni to‘plang va muammoning ko‘lamini belgilang.  
> Use case va cheklovlarni aniqlashtirish uchun savollar bering.  
> Farazlarni muhokama qiling.

Intervyuer bilan aniqlashtirish imkonimiz bo‘lmagani uchun use case va cheklovlarni o‘zimiz belgilaymiz.

### Use case’lar

#### Quyidagi use case’lar bilan cheklanamiz

* **Service** URL ro‘yxatini crawl qiladi:
    * Qidiruv so‘zlari uchragan sahifalarni bog‘lovchi reverse index generatsiya qiladi
    * Sahifalar uchun title va snippet yaratadi  
        * Title/snippet statik, qidiruv so‘roviga qarab o‘zgarmaydi
* **User** qidiruv so‘rovini kiritadi va crawler yaratgan title/snippet’li tegishli sahifalar ro‘yxatini ko‘radi  
    * Ushbu use case uchun faqat yuqori darajadagi komponentlar/aloqalarni chizing, chuqur tafsilot shart emas
* **Service** yuqori availability’ga ega

#### Scope tashqarisida

* Qidiruv analytics
* Shaxsiylashtirilgan natijalar
* Page rank

### Cheklovlar va farazlar

#### Farazlar

* Trafik teng taqsimlanmagan  
    * Ba’zi qidiruvlar juda mashhur, boshqalari faqat bir marta bajariladi
* Faqat anonim user’larni ko‘rib chiqamiz
* Qidiruv natijalari tez generatsiya qilinishi kerak
* Crawler infinite loop’da qolib ketmasligi lozim  
    * Grafda cycle bo‘lsa, cheksiz aylanish yuz beradi
* 1 milliard link crawl qilinadi
    * Freshness uchun sahifalar muntazam yangilanib turishi kerak
    * O‘rtacha yangilanish chastotasi haftasiga bir — mashhur saytlar uchun tez-tez
        * Oyiga 4 mlrd link crawl qilinadi
    * O‘rtacha sahifa hajmi: 500 KB  
        * Soddalik uchun, o‘zgarishlar yangi sahifa kabi hisoblanadi
* Oyiga 100 mlrd qidiruv so‘rovi

Sho‘ng‘ish uchun tayyor tizimlardan (masalan, [Solr](http://lucene.apache.org/solr/), [Nutch](http://nutch.apache.org/)) foydalanmang; an’anaviy yondashuvni mashq qiling.

#### Foydalanishni hisoblash

**Intervyuer hisob-kitoblarni kutadimi-yo‘qligini aniqlang.**

* Oyiga 2 PB saqlangan kontent  
    * 500 KB * 4 mlrd sahifa
    * 3 yilda ≈ 72 PB
* Sekundiga 1 600 ta yozish
* Sekundiga 40 000 ta qidiruv

Foydali konversiya:

* Oyiga 2.5 mln sekund
* 1 rps = oyiga 2.5 mln so‘rov
* 40 rps = oyiga 100 mln so‘rov
* 400 rps = oyiga 1 mlrd so‘rov

## 2-qadam: High level dizayn

> Muhim komponentlar bilan yuqori darajadagi arxitekturani chizing.

![Imgur](http://i.imgur.com/xjdAAUv.png)

## 3-qadam: Yadro komponentlarni loyihalash

> Har bir asosiy komponent tafsilotlariga chuqurroq kirish.

### Use case: Service URL ro‘yxatini crawl qiladi

Boshlash uchun `links_to_crawl` degan dastlabki ro‘yxat mavjud deb faraz qilamiz; u saytlarga mashhurligi bo‘yicha reyting berilgan. Agar bu faraz to‘g‘ri kelmasa, Yahoo, DMOZ kabi mashhur kataloglardan seed qilamiz.

Crawl qilingan linklar va ularning signature’larini `crawled_links` jadvalida saqlaymiz.

`links_to_crawl` va `crawled_links`ni key-value **NoSQL Database**da saqlashimiz mumkin. Reytinglangan `links_to_crawl` uchun [Redis](https://redis.io/) sorted set’dan foydalanib, prioritetni saqlab boramiz. SQL va NoSQL o‘rtasidagi [trade-off](https://github.com/donnemartin/system-design-primer#sql-or-nosql)larni eslatib o‘ting.

Jarayon:

* **Crawler Service** quyidagi siklni bajaradi:
    * Eng yuqori reytingli linkni oladi
        * **NoSQL Database**dagi `crawled_links`da o‘xshash signature bor-yo‘qligini tekshiradi
            * Agar o‘xshash sahifa bo‘lsa, link prioritetini kamaytiradi  
                * Cycle’ga tushib qolmaslik uchun  
                * Siklni davom ettiradi
            * Aks holda linkni crawl qiladi:
                * [Reverse index](https://en.wikipedia.org/wiki/Search_engine_indexing) yaratish uchun **Reverse Index Service** queue’siga job qo‘shadi
                * Title va snippet tayyorlash uchun **Document Service** queue’siga job qo‘shadi
                * Sahifa signature’ini generatsiya qiladi
                * **NoSQL Database**dagi `links_to_crawl`dan linkni o‘chiradi
                * Link va signature’ni `crawled_links`ga qo‘shadi

`PagesDataStore` — **Crawler Service** ichidagi abstraksiya (NoSQL DB bilan ishlaydi):

```python
class PagesDataStore(object):

    def __init__(self, db);
        self.db = db

    def add_link_to_crawl(self, url):
        """`links_to_crawl` ga link qo‘shish."""

    def remove_link_to_crawl(self, url):
        """`links_to_crawl`dan linkni o‘chirish."""

    def reduce_priority_link_to_crawl(self, url):
        """Cycle’ni oldini olish uchun link prioritetini pasaytirish."""

    def extract_max_priority_page(self):
        """`links_to_crawl`dagi eng yuqori reytingli linkni olish."""

    def insert_crawled_link(self, url, signature):
        """`crawled_links`ga link qo‘shish."""

    def crawled_similar(self, signature):
        """Berilgan signature’ga o‘xshash sahifa crawl qilinganmi?"""
```

`Page` abstraksiyasi sahifa URL, kontent, child link’lar va signature’ni o‘zida jamlaydi:

```python
class Page(object):

    def __init__(self, url, contents, child_urls, signature):
        self.url = url
        self.contents = contents
        self.child_urls = child_urls
        self.signature = signature
```

`Crawler` — asosiy class:

```python
class Crawler(object):

    def __init__(self, data_store, reverse_index_queue, doc_index_queue):
        self.data_store = data_store
        self.reverse_index_queue = reverse_index_queue
        self.doc_index_queue = doc_index_queue

    def create_signature(self, page):
        """URL va kontent asosida signature yaratish."""
        ...

    def crawl_page(self, page):
        for url in page.child_urls:
            self.data_store.add_link_to_crawl(url)
        page.signature = self.create_signature(page)
        self.data_store.remove_link_to_crawl(page.url)
        self.data_store.insert_crawled_link(page.url, page.signature)

    def crawl(self):
        while True:
            page = self.data_store.extract_max_priority_page()
            if page is None:
                break
            if self.data_store.crawled_similar(page.signature):
                self.data_store.reduce_priority_link_to_crawl(page.url)
            else:
                self.crawl_page(page)
```

### Dublikatsiyalarni boshqarish

Grafda cycle bo‘lsa crawler cheksiz loop’ga tushadi — bundan ehtiyot bo‘lish kerak.

URL dublikatsiyalarini olib tashlash:

* Kichik ro‘yxat uchun `sort | uniq` yetarli
* 1 mlrd link uchun **MapReduce** bilan chastotasi 1 bo‘lgan entry’larni qoldiramiz:

```python
class RemoveDuplicateUrls(MRJob):

    def mapper(self, _, line):
        yield line, 1

    def reducer(self, key, values):
        total = sum(values)
        if total == 1:
            yield key, total
```

Kontent dublikatsiyasini aniqlash murakkabroq. Sahifa kontenti asosida signature yaratib, o‘xshashlikni solishtiramiz. Masalan, [Jaccard index](https://en.wikipedia.org/wiki/Jaccard_index) yoki [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity).

### Crawl natijalarini qachon yangilash

Freshness uchun sahifalar muntazam crawl qilinishi zarur. Har bir natija `timestamp` maydoniga ega bo‘lishi mumkin; bir haftadan so‘ng yana yangilaymiz. Mashhur yoki tez o‘zgaradigan sahifalarni tez-tez (masalan, har kuni) yangilash mumkin.

Analytics’ga chuqur kirmasak-da, data mining orqali sahifa o‘rtacha qanchada yangilanadi – shu statistika asosida re-crawl intervalini tanlaymiz. Shu bilan birga, webmaster’lar crawlarni boshqarishlari uchun `robots.txt`ni qo‘llab-quvvatlashni ko‘rib chiqish mumkin.

### Use case: User qidiruv so‘zini kiritadi va natija oladi

* **Client** so‘rovni [reverse proxy](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server) bo‘lgan **Web Server**ga yuboradi
* **Web Server** so‘rovni **Query API** serverga uzatadi
* **Query API** serveri:
    * So‘rovni parse qiladi:
        * Markup’ni olib tashlaydi
        * Matnni term’lara bo‘ladi
        * Xatolarni tuzatadi
        * Capitalization’ni normallashtiradi
        * Boolean operatsiyalar bilan ifodalaydi
    * **Reverse Index Service** yordamida mos hujjatlarni topadi
        * Servis natijalarni reyting qiladi va eng yaxshilarini qaytaradi
    * **Document Service**dan title va snippetlarni oladi

Ochiq [**REST API**](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest):

```
$ curl https://search.com/api/v1/search?query=hello+world
```

Javob:

```
{
    "title": "foo sarlavha",
    "snippet": "foo snippet",
    "link": "https://foo.com"
},
...
```

Ichki aloqalar uchun [RPC](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc) ishlatish mumkin.

## 4-qadam: Dizaynni masshtablash

> Cheklovlarni inobatga olib, bottleneck’larni aniqlang va bartaraf eting.

![Imgur](http://i.imgur.com/bWxPtQA.png)

**Muhim:** dastlabki dizayndan to‘g‘ridan-to‘g‘ri final dizaynga o‘tmaymiz.

Iterativ yondashuv: 1) **Benchmark/Load Test**, 2) bottleneck’larni **Profiling**, 3) trade-off’larni baholagan holda yechimlarni qo‘llash, 4) takrorlash. [AWS’da millionlab user’largacha o‘sadigan system design](../scaling_aws/README.md) misolini ko‘ring.

Har bosqichda qaysi bottleneck’lar paydo bo‘lishi va ularni qanday bartaraf etish mumkinligini muhokama qiling. Masalan, bir nechta **Web Server** bilan **Load Balancer** qo‘shish nimalarni hal qiladi? **Cache**, **Master-Slave Replicas**chi?

*Takroriy izohlarni oldini olish uchun* quyidagi [system design topics](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics)ga murojaat qiling:

* [DNS](https://github.com/donnemartin/system-design-primer#domain-name-system)
* [Load balancer](https://github.com/donnemartin/system-design-primer#load-balancer)
* [Horizontal scaling](https://github.com/donnemartin/system-design-primer#horizontal-scaling)
* [Web server (reverse proxy)](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server)
* [API server (application layer)](https://github.com/donnemartin/system-design-primer#application-layer)
* [Cache](https://github.com/donnemartin/system-design-primer#cache)
* [NoSQL](https://github.com/donnemartin/system-design-primer#nosql)
* [Consistency patterns](https://github.com/donnemartin/system-design-primer#consistency-patterns)
* [Availability patterns](https://github.com/donnemartin/system-design-primer#availability-patterns)

Ba’zi qidiruvlar juda mashhur, boshqalari faqat bir marta bajariladi. Mashhur so‘rovlarni Redis/Memcached kabi **Memory Cache**dan servis qilsak, **Reverse Index Service** va **Document Service**ga yuk kamayadi. Xotiradan o‘qish SSD/diskdan sezilarli darajada tez.<sup><a href="https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know">1</a></sup>

**Crawler Service** uchun qo‘shimcha optimallashtirish:

* **Reverse Index Service** va **Document Service** data hajmi/guruh o‘zgaruvchanligi sabab sharding va federation’ga tayanadi
* DNS lookup bottleneck bo‘lishi mumkin — crawler o‘zining local DNS cache’ini saqlab, vaqti-vaqti bilan yangilaydi
* Bir vaqtning o‘zida ko‘p ulanishni ochiq saqlash (connection pooling) throughput va memory samaradorligini oshiradi  
    * Istalgan hollarda [UDP](https://github.com/donnemartin/system-design-primer#user-datagram-protocol-udp)ga o‘tish ham tezlikni oshirishi mumkin
* Web crawling bandwidth-intensiv; yuqori throughput uchun yetarli tarmoq kengligini rejalashtiring

## Qo‘shimcha muhokama mavzulari

### SQL scaling patterns

* [Read replicas](https://github.com/donnemartin/system-design-primer#master-slave-replication)
* [Federation](https://github.com/donnemartin/system-design-primer#federation)
* [Sharding](https://github.com/donnemartin/system-design-primer#sharding)
* [Denormalization](https://github.com/donnemartin/system-design-primer#denormalization)
* [SQL Tuning](https://github.com/donnemartin/system-design-primer#sql-tuning)

### NoSQL

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
    * Tashqi clientlar bilan – [REST asosidagi HTTP API](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest)
    * Ichki – [RPC](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc)
* [Service discovery](https://github.com/donnemartin/system-design-primer#service-discovery)

### Security

[Security bo‘limi](https://github.com/donnemartin/system-design-primer#security)ga murojaat qiling.

### Latency

[Har bir dasturchi bilishi kerak bo‘lgan kechikish ko‘rsatkichlari](https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know)ni eslab turing.

### Ongoing

* Yangi bottleneck paydo bo‘lishi bilan benchmarking/monitoringni davom ettiring
* Scaling — iterativ jarayon
