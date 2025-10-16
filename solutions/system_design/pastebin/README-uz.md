# Pastebin.com (yoki Bit.ly) dizayni

*Eslatma: bu hujjat takrorlanishni kamaytirish uchun [system design mavzulari](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics)dagi tegishli bo‘limlarga to‘g‘ridan-to‘g‘ri havola qiladi. Asosiy fikrlar, trade-off’lar va alternativalar uchun havolalardagi kontentni ko‘ring.*

**Bit.ly dizayni** – shunga o‘xshash savol, faqat pastebin qisqartirilgan URL o‘rniga matn kontentini saqlashi kerak.

## 1-qadam: Use case va cheklovlarni aniqlash

> Talablarni to‘plang va muammoning ko‘lamini belgilang.  
> Use case va cheklovlarni aniqlashtirish uchun savollar bering.  
> Farazlarni muhokama qiling.

Intervyuerlar bo‘lmagani sababli, use case va cheklovlarni o‘zimiz belgilab olamiz.

### Use case’lar

#### Quyidagi use case’lar bilan cheklanamiz

* **User** matn blokini kiritadi va tasodifiy generatsiya qilingan shortlink oladi
    * Expiration:
        * Default holatda muddatsiz
        * Ixtiyoriy ravishda vaqt bo‘yicha tugashini belgilash mumkin
* **User** paste URL’ini kiritadi va kontentni ko‘radi
* **User** anonim
* **Service** sahifa analytics ma’lumotlarini yuritadi
    * Oylik tashrif statistikasi
* **Service** muddati tugagan paste’larni o‘chiradi
* **Service** yuqori availability’ga ega

#### Scope tashqarisida

* **User** akkaunt ro‘yxatdan o‘tkazadi
    * **User** email’ni tasdiqlaydi
* **User** ro‘yxatdan o‘tgan akkauntga kiradi
    * **User** hujjatni tahrirlaydi
* **User** visibility’ni sozlaydi
* **User** shortlink’ni o‘zi belgilaydi

### Cheklovlar va farazlar

#### Farazlar

* Trafik bir tekis taqsimlanmagan
* Shortlink bo‘yicha o‘tish juda tez bo‘lishi kerak
* Paste faqat matndan iborat
* Page view analytics real-time bo‘lishi shart emas
* 10 million foydalanuvchi
* Oyiga 10 million paste yozuvi
* Oyiga 100 million paste o‘qilishi
* O‘qish/yozish nisbati 10:1

#### Foydalanishni hisoblash

**Intervyuer hisob-kitoblarni kutadimi-yo‘qmi aniqlashtiring.**

* Bir paste hajmi:
    * Matn kontenti ≈ 1 KB
    * `shortlink` – 7 byte
    * `expiration_length_in_minutes` – 4 byte
    * `created_at` – 5 byte
    * `paste_path` – 255 byte
    * jami ≈ 1.27 KB
* Oyiga 12.7 GB yangi kontent
    * 1.27 KB * 10 mln paste
    * 3 yilda ≈ 450 GB yangi kontent
    * 3 yilda ~360 mln shortlink
    * Ko‘p hollarda yangi paste kiritiladi, yangilash kam
* O‘rtacha sekundiga 4 ta yozuv
* O‘rtacha sekundiga 40 ta o‘qish

Foydali konversiya jadvali:

* Oyiga 2.5 mln sekund
* Sekundiga 1 so‘rov = oyiga 2.5 mln so‘rov
* Sekundiga 40 so‘rov = oyiga 100 mln so‘rov
* Sekundiga 400 so‘rov = oyiga 1 mlrd so‘rov

## 2-qadam: High level dizayn

> Muhim komponentlarni ko‘rsatadigan yuqori darajadagi arxitektura chizing.

![Imgur](http://i.imgur.com/BKsBnmG.png)

## 3-qadam: Yadro komponentlarni loyihalash

> Har bir asosiy component tafsilotlariga chuqurroq kiring.

### Use case: User matn kiritadi va shortlink oladi

[Relational database](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms)dan katta hash jadval sifatida foydalanib, generatsiya qilingan URL’ni paste saqlanadigan fayl serveri/yo‘li bilan bog‘lash mumkin.

Fayl serveri boshqarish o‘rniga Amazon S3 kabi boshqariladigan **Object Store** yoki [NoSQL document store](https://github.com/donnemartin/system-design-primer#document-store)dan foydalanish mumkin.

Hash jadval vazifasini bajaradigan relational database o‘rniga [NoSQL key-value store](https://github.com/donnemartin/system-design-primer#key-value-store) ham ishlaydi. SQL va NoSQL o‘rtasidagi [trade-off](https://github.com/donnemartin/system-design-primer#sql-or-nosql)larni muhokama qiling. Quyida relational yondashuv ko‘rsatilgan.

* **Client** [reverse proxy](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server) sifatida ishlayotgan **Web Server**ga create so‘rovini yuboradi
* **Web Server** so‘rovni **Write API** serverga uzatadi
* **Write API** serveri:
    * Unikal URL generatsiya qiladi
        * **SQL Database**da takror bor-yo‘qligini tekshiradi
        * To‘qnashuv bo‘lsa yana generatsiya qiladi
        * Agar custom URL qo‘llansa, user kiritgan uchinchi variantni ham tekshiradi
    * Yozuvni **SQL Database**dagi `pastes` jadvaliga saqlaydi
    * Paste kontentini **Object Store**ga yuklaydi
    * Shortlink’ni klientga qaytaradi

`pastes` jadvali mumkin bo‘lgan struktura:

```
shortlink char(7) NOT NULL
expiration_length_in_minutes int NOT NULL
created_at datetime NOT NULL
paste_path varchar(255) NOT NULL
PRIMARY KEY(shortlink)
```

Primary key `shortlink` ustunida bo‘lgani uchun uniqueness’ni ta’minlaydigan [index](https://github.com/donnemartin/system-design-primer#use-good-indices) hosil bo‘ladi. `created_at` ustuniga qo‘shimcha index qo‘shsak, izlash tezlashadi va ma’lumot xotirada ushlanadi. Xotiradan 1 MB ketma-ket o‘qish ≈250 µs; SSD 4 marta, disk 80 marta sekinroq.<sup><a href="https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know">1</a></sup>

Unikal URL generatsiyasi:

* Foydalanuvchining `ip_address + timestamp` kombinatsiyasining [**MD5**](https://en.wikipedia.org/wiki/MD5) hashini oling
    * MD5 – 128-bit natija qaytaruvchi mashhur hashing funksiyasi
    * Natijalar bir tekis taqsimlanadi
    * Ixtiyoriy ravishda random ma’lumotni ham hashlash mumkin
* Hashni [**Base62**](https://www.kerstner.at/2012/07/shortening-strings-using-base-62-encoding/)ga kodlash
    * `[a-zA-Z0-9]`dan iborat va URL uchun qulay, maxsus belgi yo‘q
    * Deterministik va har bir kirish uchun bitta natija
    * Base64 tashqi belgilari (`+`, `/`) tufayli URL’ga to‘g‘ri kelmaydi
    * Quyidagi [Base62 pseudokod](http://stackoverflow.com/questions/742013/how-to-code-a-url-shortener) O(k):

```python
def base_encode(num, base=62):
    digits = []
    while num > 0
      remainder = modulo(num, base)
      digits.push(remainder)
      num = divide(num, base)
    digits = digits.reverse
```

* Natijaning dastlabki 7 ta belgisini oling – 62^7 ≈ 3.5 trillion kombinatsiya, 360 mln shortlink uchun yetarli:

```python
url = base_encode(md5(ip_address+timestamp))[:URL_LENGTH]
```

Jamoatchilik uchun ochiq [**REST API**](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest):

```
$ curl -X POST --data '{ "expiration_length_in_minutes": "60", \
    "paste_contents": "Hello World!" }' https://pastebin.com/api/v1/paste
```

Javob:

```
{
    "shortlink": "foobar"
}
```

Ichki muloqotlar uchun [Remote Procedure Call](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc)lardan foydalanish mumkin.

### Use case: User paste URL’ini kiritadi va kontentni ko‘radi

* **Client** get so‘rovini **Web Server**ga yuboradi
* **Web Server** so‘rovni **Read API** serverga uzatadi
* **Read API** serveri:
    * **SQL Database**da URL borligini tekshiradi
        * Agar mavjud bo‘lsa, kontentni **Object Store**dan oladi
        * Aks holda user’ga xato yuboradi

REST API:

```
$ curl https://pastebin.com/api/v1/paste?shortlink=foobar
```

Javob:

```
{
    "paste_contents": "Hello World"
    "created_at": "YYYY-MM-DD HH:MM:SS"
    "expiration_length_in_minutes": "60"
}
```

### Use case: Servis sahifa analytics ma’lumotlarini yuritadi

Real-time analytics talab qilinmagani uchun **Web Server** loglarini **MapReduce** bilan qayta ishlash kifoya.

```python
class HitCounts(MRJob):

    def extract_url(self, line):
        """Log satridan generatsiya qilingan URL’ni ajrating."""
        ...

    def extract_year_month(self, line):
        """Timestampdan yil va oy qismini oling."""
        ...

    def mapper(self, _, line):
        """Har bir log satrini tahlil qilib, mos juftliklarni chiqaring."""
        url = self.extract_url(line)
        period = self.extract_year_month(line)
        yield (period, url), 1

    def reducer(self, key, values):
        """Har bir kalit bo‘yicha yig‘indini hisoblang."""
        yield key, sum(values)
```

### Use case: Servis muddati tugagan paste’larni o‘chiradi

**SQL Database**da expiration vaqti hozirgi vaqtdan kichik bo‘lgan yozuvlarni topib, o‘chirib tashlaymiz (yoki `expired` flag qo‘yamiz).

## 4-qadam: Dizaynni masshtablash

> Cheklovlarni inobatga olib, bottleneck’larni aniqlang va bartaraf eting.

![Imgur](http://i.imgur.com/4edXG0T.png)

**Muhim:** dastlabki arxitekturadan darhol final arxitekturaga sakramang!

Iterativ jarayonni ta’kidlang: 1) **Benchmark/Load Test**, 2) bottleneck’larni **Profiling**, 3) trade-off’larni baholagan holda yechimlarni qo‘llash, 4) takrorlash. [AWS’da millionlab user’largacha o‘sadigan system design](../scaling_aws/README.md) misolini ko‘ring.

Dastlabki dizaynda qaysi bottleneck’lar paydo bo‘lishi va ularni qanday bartaraf etish mumkinligini muhokama qiling. Masalan, bir nechta **Web Server** bilan **Load Balancer** qo‘shish nimalarni hal qiladi? **CDN**chi? **Master-Slave Replicas**chi? Har bir yondashuvning alternativasi va trade-off’larini ko‘rib chiqing.

Kengaytirish uchun quyidagi komponentlarni qo‘shamiz (diagrammada ichki load balancerlar ko‘rsatilmagan).

*Takroriy muhokamalardan qochish uchun* quyidagi [system design topics](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics)ga murojaat qiling:

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

**Analytics Database** sifatida Amazon Redshift yoki Google BigQuery kabi data warehouse tanlash mumkin.

Amazon S3 kabi **Object Store** oyiga 12.7 GB yangi kontentni bemalol ko‘taradi.

Sekundiga o‘rtacha 40 ta o‘qish so‘rovi (peak vaqtida ko‘proq) uchun mashhur kontentni **Memory Cache**dan servis qilish kerak – shunda database ortiqcha yuklanmaydi. **Memory Cache** notekis trafik va spike’larni softlashadi. **SQL Read Replica**lar cache miss’larni ko‘taradi, faqat yozuv replika qilish jarayoni ularni sekinlashtirmasligi lozim.

Sekundiga o‘rtacha 4 ta yozish (peak paytda ko‘proq) bitta **SQL Write Master-Slave** uchun yetarli. Yetarli bo‘lmasa, qo‘shimcha SQL scaling pattern’lar qo‘llanadi:

* [Federation](https://github.com/donnemartin/system-design-primer#federation)
* [Sharding](https://github.com/donnemartin/system-design-primer#sharding)
* [Denormalization](https://github.com/donnemartin/system-design-primer#denormalization)
* [SQL Tuning](https://github.com/donnemartin/system-design-primer#sql-tuning)

Ba’zi ma’lumotlarni **NoSQL Database**ga ko‘chirishni ham ko‘rib chiqing.

## Qo‘shimcha muhokama mavzulari

> Scope va vaqtga qarab chuqurlashish mumkin bo‘lgan qo‘shimcha yo‘nalishlar.

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

[Security](https://github.com/donnemartin/system-design-primer#security) bo‘limini ko‘ring.

### Latency

[Har bir dasturchi bilishi kerak bo‘lgan kechikish ko‘rsatkichlari](https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know)ni ko‘ring.

### Ongoing

* Yangi bottleneck paydo bo‘lganda benchmarking va monitoringni davom ettiring
* Scaling – iterativ jarayon
