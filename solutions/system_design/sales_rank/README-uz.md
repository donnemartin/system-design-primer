# Amazon’ning kategoriya bo‘yicha sales rank funksiyasi dizayni

*Eslatma: bu hujjat takrorlanishni kamaytirish uchun [system design mavzulari](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics)dagi tegishli bo‘limlarga to‘g‘ridan-to‘g‘ri havola qiladi. Havolalardagi kontent asosiy fikrlar, trade-off’lar va alternativalarni yoritadi.*

## 1-qadam: Use case va cheklovlarni aniqlash

> Talablarni to‘plang va muammoning ko‘lamini belgilang.  
> Use case va cheklovlarni aniqlashtirish uchun savollar bering.  
> Farazlarni muhokama qiling.

Intervyuer bilan aniqlash imkonimiz bo‘lmagani uchun use case va cheklovlarni o‘zimiz belgilaymiz.

### Use case’lar

#### Quyidagi use case’lar bilan cheklanamiz

* **Service** o‘tgan hafta bo‘yicha kategoriya kesimida eng mashhur mahsulotlarni hisoblaydi
* **User** o‘tgan haftaning eng mashhur mahsulotlarini kategoriya bo‘yicha ko‘radi
* **Service** yuqori availability’ga ega

#### Scope tashqarisida

* Umumiy e-commerce sayti  
    * Faqat sales rank hisoblash komponentlarini dizayn qilamiz

### Cheklovlar va farazlar

#### Farazlar

* Trafik teng taqsimlanmagan
* Mahsulot bir nechta kategoriya ichida bo‘lishi mumkin
* Mahsulot kategoriyasini o‘zgartirmaydi
* Subkategoriya yo‘q (masalan, `foo/bar/baz`)
* Natijalar har soatda yangilanishi kerak  
    * Mashhur mahsulotlarni tez-tez yangilash talab qilinishi mumkin
* 10 mln mahsulot
* 1 000 kategoriya
* Oyiga 1 mlrd tranzaksiya
* Oyiga 100 mlrd o‘qish so‘rovi
* Read:write nisbati 100:1

#### Foydalanishni hisoblash

**Intervyuer hisob-kitoblarni kutadimi yo‘qmi aniqlang.**

* Tranzaksiya hajmi:
    * `created_at` – 5 byte
    * `product_id` – 8 byte
    * `category_id` – 4 byte
    * `seller_id` – 8 byte
    * `buyer_id` – 8 byte
    * `quantity` – 4 byte
    * `total_price` – 5 byte
    * Jami ≈ 40 byte
* Oyiga 40 GB yangi tranzaksiya  
    * 40 byte * 1 mlrd tranzaksiya
    * 3 yilda ≈ 1.44 TB
* O‘rtacha sekundiga 400 tranzaksiya
* O‘rtacha sekundiga 40 000 o‘qish so‘rovi

Foydali konversiya:

* Oyiga 2.5 mln sekund
* 1 rps = oyiga 2.5 mln so‘rov
* 40 rps = oyiga 100 mln so‘rov
* 400 rps = oyiga 1 mlrd so‘rov

## 2-qadam: High level dizayn

> Muhim komponentlar bilan yuqori darajadagi arxitekturani chizing.

![Imgur](http://i.imgur.com/vwMa1Qu.png)

## 3-qadam: Yadro komponentlarni loyihalash

> Har bir asosiy komponent tafsilotlariga chuqurroq kiring.

### Use case: Servis o‘tgan haftaning mashhur mahsulotlarini hisoblaydi

**Sales API** log fayllarini Amazon S3 kabi boshqariladigan **Object Store**da saqlash mumkin — o‘zimiz distributed file system boshqarishimiz shart emas.

Misol log (tab bilan ajratilgan):

```
timestamp   product_id  category_id    qty     total_price   seller_id    buyer_id
t1          product1    category1      2       20.00         1            1
t2          product1    category2      2       20.00         2            2
t2          product1    category2      1       10.00         2            3
t3          product2    category1      3        7.00         3            4
t4          product3    category2      7        2.00         4            5
t5          product4    category1      1        5.00         5            6
```

**Sales Rank Service** log fayllarni kirish sifatida olib, **MapReduce** orqali `sales_rank` agg jadvalini (kategoriya + mahsulot bo‘yicha o‘tgan hafta sotilgan son) generatsiya qiladi va **SQL Database**ga yozadi. SQL vs NoSQL bo‘yicha [trade-off](https://github.com/donnemartin/system-design-primer#sql-or-nosql)larni muhokama qiling.

Ikki boshqichli **MapReduce**:

1. `(category, product_id)` bo‘yicha qty’larni yig‘ish  
2. Natijalarni taqsimlangan holda sort qilish

```python
class SalesRanker(MRJob):

    def within_past_week(self, timestamp):
        """Timestamps o‘tgan hafta ichida bo‘lsa True qaytaradi."""
        ...

    def mapper(self, _, line):
        timestamp, product_id, category_id, quantity, total_price, seller_id, buyer_id = line.split('\t')
        if self.within_past_week(timestamp):
            yield (category_id, product_id), int(quantity)

    def reducer(self, key, values):
        yield key, sum(values)

    def mapper_sort(self, key, value):
        category_id, product_id = key
        yield (category_id, value), product_id

    def reducer_identity(self, key, value):
        yield key, value

    def steps(self):
        return [
            self.mr(mapper=self.mapper, reducer=self.reducer),
            self.mr(mapper=self.mapper_sort, reducer=self.reducer_identity),
        ]
```

Shu natijalar `sales_rank` jadvaliga yoziladi.

`sales_rank` jadvali:

```
id int NOT NULL AUTO_INCREMENT
category_id int NOT NULL
total_sold int NOT NULL
product_id int NOT NULL
PRIMARY KEY(id)
FOREIGN KEY(category_id) REFERENCES Categories(id)
FOREIGN KEY(product_id) REFERENCES Products(id)
```

`id`, `category_id`, `product_id` ustunlariga [index](https://github.com/donnemartin/system-design-primer#use-good-indices) qo‘shib, izlashni tezlashtiramiz.

### Use case: User mashhur mahsulotlarni ko‘radi

* **Client** so‘rovni **Web Server**ga yuboradi (reverse proxy)
* **Web Server** so‘rovni **Read API**ga uzatadi
* **Read API** `sales_rank` jadvalidan o‘qiydi

Ochiq [**REST API**](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest):

```
$ curl https://amazon.com/api/v1/popular?category_id=1234
```

Javob:

```
{
    "id": "100",
    "category_id": "1234",
    "total_sold": "100000",
    "product_id": "50"
},
...
```

Ichki aloqa uchun [RPC](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc) ishlatish mumkin.

## 4-qadam: Dizaynni masshtablash

> Cheklovlarni inobatga olib, bottleneck’larni aniqlang va bartaraf eting.

![Imgur](http://i.imgur.com/MzExP06.png)

**Muhim:** dastlabki dizayndan to‘g‘ridan-to‘g‘ri finalga sakrab o‘tmaymiz.

Iterativ yondashuv: 1) **Benchmark/Load Test**, 2) bottleneck’larni **Profiling**, 3) trade-off’larni baholash va yechim qo‘llash, 4) takrorlash. [AWS’da millionlab user’largacha o‘sadigan system design](../scaling_aws/README.md) misolini ko‘ring.

**Analytics Database** sifatida Amazon Redshift yoki Google BigQuery kabi data warehouse’dan foydalanish mumkin.

Database’da faqat ma’lum vaqt oralig‘idagi ma’lumotni saqlab, qolganini data warehouse yoki **Object Store** (S3)ga o‘tkazish mumkin. S3 oyiga 40 GB yangi kontentni bemalol ko‘taradi.

O‘rtacha 40 000 rps o‘qish (peak’da ko‘proq) uchun mashhur kontent va sales rank natijalarini **Memory Cache**dan servis qilish kerak. Cache notekis trafik va spike’larni yumshatadi. Read replica’lar cache miss’larni potensial yetarli darajada bajarolmasligi mumkin — qo‘shimcha SQL scaling usullaridan foydalanish kerak.

400 rps yozuv (peak’da yuqoriroq) bitta **SQL Write Master-Slave** uchun qiyin; qo‘shimcha scaling texnikalari zarur.

SQL scaling pattern’lari:

* [Federation](https://github.com/donnemartin/system-design-primer#federation)
* [Sharding](https://github.com/donnemartin/system-design-primer#sharding)
* [Denormalization](https://github.com/donnemartin/system-design-primer#denormalization)
* [SQL Tuning](https://github.com/donnemartin/system-design-primer#sql-tuning)

Ba’zi ma’lumotlarni **NoSQL Database**ga ko‘chirishni ham ko‘rib chiqing.

## Qo‘shimcha muhokama mavzulari

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

* Tashqi clientlar bilan – [REST](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest)
* Ichki – [RPC](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc)
* [Service discovery](https://github.com/donnemartin/system-design-primer#service-discovery)

### Security

[Security bo‘limi](https://github.com/donnemартин/system-design-primer#security)ni ko‘ring.

### Latency

[Har bir dasturchi bilishi kerak bo‘lgan kechikish ko‘rsatkichlari](https://github.com/donnemартин/system-design-primer#latency-numbers-every-programmer-should-know)ni yodda tuting.

### Ongoing

* Yangi bottleneck paydo bo‘lsa, benchmarking/monitoringni davom ettiring
* Scaling — iterativ jarayon
