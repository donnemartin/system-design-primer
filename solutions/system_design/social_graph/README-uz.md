# Ijtimoiy tarmoq uchun data strukturalar dizayni

*Eslatma: bu hujjat takrorlanishni kamaytirish uchun [system design mavzulari](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics)dagi tegishli bo‘limlarga to‘g‘ridan-to‘g‘ri havola qiladi. Havolalardagi kontent asosiy fikrlar, trade-off’lar va alternativalarni yoritadi.*

## 1-qadam: Use case va cheklovlarni aniqlash

> Talablarni to‘plang va muammoning ko‘lamini belgilang.  
> Use case va cheklovlarni aniqlashtirish uchun savollar bering.  
> Farazlarni muhokama qiling.

Intervyuer bilan aniqlash imkonimiz bo‘lmagani uchun use case va cheklovlarni o‘zimiz belgilaymiz.

### Use case’lar

#### Quyidagi use case’lar bilan cheklanamiz

* **User** boshqa user’ni qidiradi va u bilan bo‘lgan eng qisqa yo‘lni (friend chain) ko‘radi
* **Service** yuqori availability’ga ega

### Cheklovlar va farazlar

#### Farazlar

* Trafik teng taqsimlanmagan — mashhur qidiruvlar bor, boshqalari faqat bir marta bajariladi
* Graf ma’lumotlari bitta mashinaga sig‘maydi
* Graf qirralari unweighted (hisobsiz)
* 100 mln user
* Har bir user o‘rtacha 50 friend
* Oyiga 1 mlrd friend qidiruvi
* GraphQL yoki Neo4j kabi maxsus graph texnologiyalaridan foydalanilmaydi

#### Foydalanishni hisoblash

* 100 mln * 50 = 5 mlrd friend munosabat
* Sekundiga 400 qidiruv (o‘rtacha)

## 2-qadam: High level dizayn

> Muhim komponentlar bilan yuqori darajadagi arxitekturani chizing.

![Imgur](http://i.imgur.com/wxXyq2J.png)

## 3-qadam: Yadro komponentlarni loyihalash

> Har bir asosiy component tafsilotlariga chuqurroq kiring.

### Use case: Eng qisqa yo‘lni topish (friend search)

Graf qirralari unweighted bo‘lsa, oddiy BFS yetarli: `source` → `dest`. Biroq millionlab user va milliardlab edge borligi sababli BFSni singledagi machine’da bajarib bo‘lmaydi — ma’lumotni bir nechta **Person Server**larga [sharding](https://github.com/donnemartin/system-design-primer#sharding) qilish zarur. Har bir requestda qayerda saqlanganini aniqlash uchun **Lookup Service** ishlatiladi.

Jarayon:

* **Client** so‘rovni [reverse proxy](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server) – **Web Server**ga yuboradi
* **Web Server** so‘rovni **Search API**ga yo‘naltiradi
* **Search API** **User Graph Service**ga murojaat qiladi
* **User Graph Service**:
    * **Lookup Service** orqali `person_id` qaysi **Person Server**da ekanini topadi
    * `friend_ids` ro‘yxatini oladi
    * `source` dan boshlab BFS bajaradi
    * Har bir qo‘shni (adjacent) uchun Lookup → Person server → `friend_ids` larni davom ettiradi

Kod skeleti:

```python
class LookupService(object):
    def lookup_person_server(self, person_id):
        ...
```

```python
class PersonServer(object):
    def people(self, ids):
        ...
```

```python
class Person(object):
    def __init__(self, id, name, friend_ids):
        self.id = id
        self.name = name
        self.friend_ids = friend_ids
```

```python
class UserGraphService(object):
    def shortest_path(self, source_key, dest_key):
        ...
```

Public [**REST API**](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest):

```
$ curl https://social.com/api/v1/friend_search?person_id=1234
```

Natija — `person_id`, `name`, `link`.

## 4-qadam: Dizaynni skalalash

![Imgur](http://i.imgur.com/cdCv5g7.png)

Iterativ yondashuv: 1) **Benchmark/Load Test**, 2) **Profiling**, 3) bottleneck’larni trade-off’larni hisobga olgan holda bartaraf etish, 4) takrorlash. Bunday jarayon AWS skalalanish mashqida ham qo‘llanilgan.

400 rps qidiruvni tezlashtirish uchun:

* Person ma’lumotlarini **Memory Cache**ga (Redis/Memcached) joylash — mashhur user’lar, ketma-ket qidiruvlar
* BFS natijalarini qisman to‘plab cache’da saqlash
* Offline tarzda (batch) BFS natijalarini hisoblashi va **NoSQL Database**ga qo‘yish
* Bitta Person Server’da joylashgan do‘stlar guruhini batched lookup bilan olish
    * Lokatsiya bo‘yicha sharding (yaqin do‘stlar)
* Bidirectional BFS (source va dest tomondan parallel yurish)
* Ko‘p do‘stli user’lardan boshlash, degrees of separation kamroq bo‘ladi
* BFSni vaqt/hop limiti bilan to‘xtatish va user’dan davom etish-yo‘qligini so‘rash
* Agar constraint bo‘lmaganida, **Graph Database** (Neo4j) yoki GraphQL ishlatish mumkin

## Qo‘shimcha muhokama mavzulari

* SQL scaling pattern’lari: read replicas, federation, sharding, denormalization, SQL tuning
* NoSQL (key-value, document, wide column, graph; SQL vs NoSQL)
* Caching (client, CDN, web, db, app; query/object level; cache-aside va h.k.)
* Asynchronism va microservices (Queues, Task queues, Back pressure)
* Communication (REST vs RPC, service discovery)
* Security, Latency, Ongoing monitoring (benchmark/profiling)
