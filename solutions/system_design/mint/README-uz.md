# Mint.com dizayni

*Eslatma: bu hujjat takrorlanishni kamaytirish uchun [system design mavzulari](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics)dagi tegishli bo‘limlarga to‘g‘ridan-to‘g‘ri havola qiladi. Havolalardagi kontent asosiy fikrlar, trade-off’lar va alternativalarni yoritadi.*

## 1-qadam: Use case va cheklovlarni aniqlash

> Talablarni to‘plang va muammoning ko‘lamini belgilang.  
> Use case va cheklovlarni aniqlashtirish uchun savollar bering.  
> Farazlarni muhokama qiling.

Intervyuer bilan aniqlash imkonimiz bo‘lmagani uchun use case va cheklovlarni o‘zimiz belgilaymiz.

### Use case’lar

#### Quyidagi use case’lar bilan cheklanamiz

* **User** moliyaviy akkauntni ulamoqda
* **Service** akkauntdan tranzaksiyalarni ekstrakt qiladi:
    * Har kuni yangilanadi
    * Tranzaksiyalarni kategoriyalaydi  
        * User kategoriya override qilishi mumkin  
        * Avtomatik qayta kategoriyalash yo‘q
    * Oylik xarajatlarni (kategoriya bo‘yicha) analiz qiladi
* **Service** budjet tavsiya qiladi  
    * User budjetni qo‘lda belgilashi mumkin  
    * Budjetga yaqinlashganda/yuzaga chiqqanda bildirish yuboradi
* **Service** yuqori availability’ga ega

#### Scope tashqarisida

* Qo‘shimcha logging va analytics

### Cheklovlar va farazlar

#### Farazlar

* Trafik bir tekis tarqalmagan
* Avtomatik kunlik yangilanish faqat oxirgi 30 kunda faol bo‘lgan user’larga tegishli
* Moliyaviy akkauntni qo‘shish/o‘chirish kam uchraydi
* Budjet bildirishnomalari real-time bo‘lishi shart emas
* 10 mln user:
    * User boshiga 10 ta kategoriya ⇒ 100 mln budjet elementi
    * Kategoriya misollar: Housing $1000, Food $200, Gas $100
    * Seller’lar tranzaksiya kategoriyasini belgilashda ishlatiladi (≈50 000 seller)
* 30 mln moliyaviy akkaunt
* Oyiga 5 mlrd tranzaksiya
* Oyiga 500 mln read so‘rov
* Write:read nisbati 10:1  
    * Write-heavy: user’lar har kuni tranzaksiya qiladi, lekin saytga kamdan-kam kiradi

#### Foydalanishni hisoblash

**Intervyuer hisob-kitoblarni kutadimi yo‘qmi aniqlang.**

* Tranzaksiya hajmi:
    * `user_id` – 8 byte
    * `created_at` – 5 byte
    * `seller` – 32 byte
    * `amount` – 5 byte
    * Jami ≈ 50 byte
* Oyiga 250 GB yangi tranzaksiya  
    * 50 byte * 5 mlrd tranzaksiya
    * 3 yilda ≈ 9 TB
    * Ko‘pchilik yozuvlar yangi tranzaksiya, mavjudini yangilash emas
* O‘rtacha sekundiga 2 000 tranzaksiya
* O‘rtacha sekundiga 200 o‘qish

Foydali konversiya:

* Oyiga 2.5 mln sekund
* 1 rps = oyiga 2.5 mln so‘rov
* 40 rps = oyiga 100 mln so‘rov
* 400 rps = oyiga 1 mlrd so‘rov

## 2-qadam: High level dizayn

> Muhim komponentlar bilan yuqori darajadagi arxitekturani chizing.

![Imgur](http://i.imgur.com/E8klrBh.png)

## 3-qadam: Yadro komponentlarni loyihalash

> Har bir asosiy komponent tafsilotlariga chuqurroq kiring.

### Use case: User moliyaviy akkauntni ulamoqda

10 mln user haqida ma’lumotni [relational database](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms)da saqlash mumkin. SQL va NoSQL o‘rtasidagi [trade-off](https://github.com/donnemartin/system-design-primer#sql-or-nosql)larni muhokama qiling.

Jarayon:

* **Client** so‘rovni [reverse proxy](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server) rolidagi **Web Server**ga yuboradi
* **Web Server** so‘rovni **Accounts API**ga uzatadi
* **Accounts API** `accounts` jadvalini yangilaydi

`accounts` jadvali misoli:

```
id int NOT NULL AUTO_INCREMENT
created_at datetime NOT NULL
last_update datetime NOT NULL
account_url varchar(255) NOT NULL
account_login varchar(32) NOT NULL
account_password_hash char(64) NOT NULL
user_id int NOT NULL
PRIMARY KEY(id)
FOREIGN KEY(user_id) REFERENCES users(id)
```

`id`, `user_id`, `created_at` ustunlariga [index](https://github.com/donnemartin/system-design-primer#use-good-indices) qo‘yib, izlashni tezlashtiramiz (log vaqt). Xotiradan 1 MB o‘qish ≈ 250 µs, SSD 4x, disk 80x sekinroq.<sup><a href="https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know">1</a></sup>

Ochiq [**REST API**](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest):

```
$ curl -X POST --data '{ "user_id": "foo", "account_url": "bar", \
    "account_login": "baz", "account_password": "qux" }' \
    https://mint.com/api/v1/account
```

Ichki aloqa uchun [RPC](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc). Keyingi qadam — tranzaksiyalarni ekstrakt qilish.

### Use case: Tranzaksiyalarni ekstrakt qilish

Quyidagi holatlarda akkauntdan ma’lumot olish kerak:

* Akkaunt birinchi bor ulanganida
* User qo‘lda “refresh” qilsa
* Oxirgi 30 kunda faol bo‘lgan user’lar uchun kunlik avtomatik refresh

Data flow:

* **Client** so‘rovni **Web Server**ga yuboradi
* **Web Server** so‘rovni **Accounts API**ga uzatadi
* **Accounts API** asinxron tarzda **Queue** (Amazon SQS, RabbitMQ)ga job qo‘shadi  
    * Tranzaksiyani ekstrakt qilish anchagina vaqt olishi mumkin, shuning uchun [queue bilan asinxronlashtirish](https://github.com/donnemartin/system-design-primer#asynchronism) maqsadga muvofiq (ammo murakkablik qo‘shadi)
* **Transaction Extraction Service**:
    * Queue’dan job olib, moliyaviy institutdan tranzaksiyalarni ekstrakt qiladi, xom loglarni **Object Store** (S3)ga saqlaydi
    * **Category Service** orqali tranzaksiyalarni kategoriyalaydi
    * **Budget Service** yordamida kategoriya bo‘yicha oylik xarajatlarni hisoblaydi  
        * **Budget Service** budjet chegarasiga yaqinlashganda yoki oshganda **Notification Service** orqali bildirish yuboradi
    * **SQL Database**dagi `transactions` jadvalini yangilaydi
    * `monthly_spending` jadvalini (kategoriya bo‘yicha oylik yig‘indi) yangilaydi
    * **Notification Service** yordamida user’ga “tranzaksiya tayyor” bildirishini yuboradi (ichki queue orqali)

`transactions` jadvali:

```
id int NOT NULL AUTO_INCREMENT
created_at datetime NOT NULL
seller varchar(32) NOT NULL
amount decimal NOT NULL
user_id int NOT NULL
PRIMARY KEY(id)
FOREIGN KEY(user_id) REFERENCES users(id)
```

`id`, `user_id`, `created_at` ustunlariga index qo‘shish kerak.

`monthly_spending` jadvali:

```
id int NOT NULL AUTO_INCREMENT
month_year date NOT NULL
category varchar(32)
amount decimal NOT NULL
user_id int NOT NULL
PRIMARY KEY(id)
FOREIGN KEY(user_id) REFERENCES users(id)
```

`id`, `user_id` ustunlari indexed.

#### Category Service

Mashhur seller → kategoriya mapping’ini boshlang‘ich seed sifatida saqlashimiz mumkin. 50 000 seller bo‘lsa, har biri <255 byte, jami taxminan 12 MB xotira kifoya.

```python
class DefaultCategories(Enum):
    HOUSING = 0
    FOOD = 1
    GAS = 2
    SHOPPING = 3
    ...

seller_category_map = {
    'Exxon': DefaultCategories.GAS,
    'Target': DefaultCategories.SHOPPING,
    ...
}
```

Seed’da bo‘lmagan seller’lar uchun user override’lariga qarab crowdsourcing qilamiz. Har bir seller uchun eng ko‘p tanlangan override’ni topish uchun heap’dan foydalanamiz.

```python
class Categorizer(object):

    def __init__(self, seller_category_map, seller_category_crowd_overrides_map):
        self.seller_category_map = seller_category_map
        self.seller_category_crowd_overrides_map = seller_category_crowd_overrides_map

    def categorize(self, transaction):
        if transaction.seller in self.seller_category_map:
            return self.seller_category_map[transaction.seller]
        if transaction.seller in self.seller_category_crowd_overrides_map:
            category = self.seller_category_crowd_overrides_map[transaction.seller].peek_min()
            self.seller_category_map[transaction.seller] = category
            return category
        return None
```

Tranzaksiya strukturasi:

```python
class Transaction(object):

    def __init__(self, created_at, seller, amount):
        self.created_at = created_at
        self.seller = seller
        self.amount = amount
```

### Use case: Service budjet tavsiya qiladi

Boshlanishiga umumiy budjet shablonidan foydalanish mumkin (daromad tier’lariga qarab). Shu yo‘l bilan 100 mln budjet item saqlash shart emas — faqat user override’lari saqlanadi. Override’lar `budget_overrides` jadvalida.

```python
class Budget(object):

    def __init__(self, income):
        self.income = income
        self.categories_to_budget_map = self.create_budget_template()

    def create_budget_template(self):
        return {
            DefaultCategories.HOUSING: self.income * .4,
            DefaultCategories.FOOD: self.income * .2,
            DefaultCategories.GAS: self.income * .1,
            DefaultCategories.SHOPPING: self.income * .2,
            ...
        }

    def override_category_budget(self, category, amount):
        self.categories_to_budget_map[category] = amount
```

**Budget Service** `transactions` jadvalidan `monthly_spending` yig‘indi jadvalini SQL yordamida hosil qilishi mumkin. `monthly_spending` satrlar soni 5 mlrd tranzaksiyadan ancha kam bo‘ladi, chunki user oyiga ko‘p tranzaksiya qiladi.

Alternativ: xom log fayllarda **MapReduce** yuritib:

* Tranzaksiyalarni kategoriyalash
* Oylik kategoriya bo‘yicha yig‘indilarni hisoblash

Shu bilan database’ga tushadigan load kamayadi. Kategoriya yangilansa, **Budget Service** qayta hisoblashni chaqiradi.

**MapReduce** misoli:

```python
class SpendingByCategory(MRJob):

    def __init__(self, categorizer):
        self.categorizer = categorizer
        self.current_year_month = calc_current_year_month()

    def mapper(self, _, line):
        user_id, timestamp, seller, amount = line.split('\t')
        category = self.categorizer.categorize(seller)
        period = self.extract_year_month(timestamp)
        if period == self.current_year_month:
            yield (user_id, period, category), float(amount)

    def reducer(self, key, values):
        total = sum(values)
        yield key, total
```

## 4-qadam: Dizaynni masshtablash

> Cheklovlarni hisobga olib, bottleneck’larni aniqlang va bartaraf eting.

![Imgur](http://i.imgur.com/V5q57vU.png)

**Muhim:** dastlabki dizayndan to‘g‘ridan-to‘g‘ri final dizaynga sakrab o‘tmaymiz.

Iterativ yondashuv: 1) **Benchmark/Load Test**, 2) bottleneck’larni **Profiling**, 3) trade-off’larni baholash va yechim qo‘llash, 4) takrorlash. [AWS’da millionlab user’largacha o‘sadigan system design](../scaling_aws/README.md) misolini ko‘ring.

Qo‘shimcha use case qo‘shamiz: **User** summary va tranzaksiyalarni ko‘radi.

User sessiyalari, kategoriya bo‘yicha agregatlar va oxirgi tranzaksiyalarni Redis/Memcached kabi **Memory Cache**ga joylaymiz.

* **Client** read so‘rovini **Web Server**ga yuboradi
* **Web Server** so‘rovni **Read API**ga uzatadi  
    * Statik kontent **Object Store** (S3)dan olinadi va **CDN**da cache qilinadi
* **Read API**:
    * **Memory Cache**ni tekshiradi  
        * Cache hit bo‘lsa – natijani qaytaradi  
        * Cache miss bo‘lsa – **SQL Database**dan olib, cache’ni yangilaydi

Cache yangilash strategiyalari uchun [When to update the cache](https://github.com/donnemartin/system-design-primer#when-to-update-the-cache) bo‘limini ko‘rishingiz mumkin; bu yondashuv [cache-aside](https://github.com/donnemartin/system-design-primer#cache-aside)ga mos.

`monthly_spending` agg jadvalini alohida **Analytics Database**ga (Amazon Redshift, Google BigQuery) ko‘chirish mumkin.

`transactions` jadvalida faqat oxirgi bir oy ma’lumotini qoldirib, qolganini data warehouse yoki **Object Store**ga saqlash mumkin. S3 kabi Object Store oyiga 250 GB yangi ma’lumotni bemalol ko‘taradi.

O‘rtacha 200 rps o‘qish (peak’da ko‘proq) uchun mashhur kontentni cache’dan servis qilish zarur. Cache notekis trafik va spike’larni yumshatadi. Cache miss’larni **SQL Read Replica**lar ko‘taradi (sharti — yozish replika qilishni bajarayotgan paytda sekinlashmasin).

Sekundiga 2 000 ta yozish (peak’da yuqoriroq) bitta **SQL Write Master-Slave** uchun qiyin bo‘lishi mumkin; qo‘shimcha SQL scaling pattern’lar kerak bo‘lishi ehtimol:

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

[Security bo‘limi](https://github.com/donnemartin/system-design-primer#security)ni ko‘ring.

### Latency

[Har bir dasturchi bilishi kerak bo‘lgan kechikish ko‘rsatkichlari](https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know)ni eslab turing.

### Ongoing

* Yangi bottleneck paydo bo‘lsa, benchmarking va monitoringni davom ettiring
* Scaling — iterativ jarayon
