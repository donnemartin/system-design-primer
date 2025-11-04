# So‘rov natijalarini saqlovchi key-value cache dizayni

*Eslatma: bu hujjat takrorlanishni kamaytirish uchun [system design mavzulari](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics)dagi tegishli bo‘limlarga to‘g‘ridan-to‘g‘ri havola qiladi. Havolalardagi kontent asosiy fikrlar, trade-off’lar va alternativalarni yoritadi.*

## 1-qadam: Use case va cheklovlarni aniqlash

> Talablarni to‘plang va muammoning ko‘lamini belgilang.  
> Use case va cheklovlarni aniqlashtirish uchun savollar bering.  
> Farazlarni muhokama qiling.

Intervyuer bilan aniqlashtirish imkonimiz bo‘lmagani uchun use case va cheklovlarni o‘zimiz belgilaymiz.

### Use case’lar

#### Quyidagi use case’lar bilan cheklanamiz

* **User** so‘rov yuboradi va cache hit bo‘ladi
* **User** so‘rov yuboradi va cache miss bo‘ladi
* **Service** yuqori availability’ga ega

### Cheklovlar va farazlar

#### Farazlar

* Trafik teng taqsimlanmagan  
    * Mashhur so‘rovlar deyarli doim cache’da bo‘lishi kerak  
    * Qachon expire/refresh qilishni aniqlash zarur
* Cache’dan servis qilish uchun tez lookup talab etiladi
* Mashinalar orasida kechikish past bo‘lishi lozim
* Cache xotirasi cheklangan  
    * Nimalarni saqlash/o‘chirishni tanlash kerak  
    * Millionlab so‘rovlarni cache qilish zarur
* 10 million user
* Oyiga 10 mlrd so‘rov

#### Foydalanishni hisoblash

**Intervyuer hisob-kitoblarni kutadimi yo‘qmi aniqlang.**

* Cache’da `query` (kalit) va `results` (qiymat) saqlanadi:
    * `query` – 50 byte
    * `title` – 20 byte
    * `snippet` – 200 byte
    * Jami ≈ 270 byte
* Agar barcha 10 mlrd so‘rov unik bo‘lsa va saqlansa, oyiga 2.7 TB xotira kerak  
    * Cheklangan xotira sababli expire strategiyasini belgilash shart
* Sekundiga 4 000 so‘rov

Foydali konversiya:

* Oyiga 2.5 mln sekund
* 1 rps = oyiga 2.5 mln so‘rov
* 40 rps = oyiga 100 mln so‘rov
* 400 rps = oyiga 1 mlrd so‘rov

## 2-qadam: High level dizayn

> Muhim komponentlar bilan yuqori darajadagi arxitekturani chizing.

![Imgur](http://i.imgur.com/KqZ3dSx.png)

## 3-qadam: Yadro komponentlarni loyihalash

> Har bir asosiy komponent tafsilotlariga chuqurroq kiring.

### Use case: Cache hit

Mashhur so‘rovlar **Memory Cache** (Redis/Memcached)dan servis qilinib, **Reverse Index Service** va **Document Service**ga tushadigan load kamaytiriladi. Xotiradan o‘qish SSD’dan 4x, diskdan 80x tezroq.<sup><a href="https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know">1</a></sup>

Cache hajmi cheklangani uchun eng kamdan-kam qo‘llangan elementlarni chiqarib tashlash (LRU) strategiyasidan foydalanamiz.

Jarayon:

* **Client** so‘rovni [reverse proxy](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server) – **Web Server**ga yuboradi
* **Web Server** so‘rovni **Query API** serverga uzatadi
* **Query API**:
    * So‘rovni parse qiladi (markup olib tashlash, tokenlash, xatolarni tuzatish, case normalizatsiya, boolean shaklga o‘tkazish)
    * **Memory Cache**da tegishli natija borligini tekshiradi
        * Cache hit bo‘lsa:
            * Item’ni LRU ro‘yxati boshiga suradi
            * Natijani qaytaradi
        * Cache miss bo‘lsa:
            * **Reverse Index Service** orqali so‘rovga mos hujjatlarni topadi
                * Servis topilgan natijalarni reyting qiladi va eng yaxshilarini qaytaradi
            * **Document Service**dan title/snippet oladi
            * **Memory Cache**ni yangilab, yangi entry’ni LRU boshiga qo‘yadi

#### Cache implementatsiyasi

Cache ikki yo‘nalishli linked list va hash table kombinatsiyasidan foydalanadi:  
*Bosh* — eng yaqinda ishlatilgan, *dum* — eng uzoqda ishlatilgan (o‘chiriladigan).

**Query API Server**:

```python
class QueryApi(object):

    def __init__(self, memory_cache, reverse_index_service):
        self.memory_cache = memory_cache
        self.reverse_index_service = reverse_index_service

    def parse_query(self, query):
        # Markupni olib tashlash, tokenlash, xatolarni tuzatish,
        # case normalizatsiyasi, boolean shaklga o‘tkazish
        ...

    def process_query(self, query):
        query = self.parse_query(query)
        results = self.memory_cache.get(query)
        if results is None:
            results = self.reverse_index_service.process_search(query)
            self.memory_cache.set(query, results)
        return results
```

**Node**:

```python
class Node(object):

    def __init__(self, query, results):
        self.query = query
        self.results = results
```

**LinkedList**:

```python
class LinkedList(object):

    def __init__(self):
        self.head = None
        self.tail = None

    def move_to_front(self, node):
        ...

    def append_to_front(self, node):
        ...

    def remove_from_tail(self):
        ...
```

**Cache**:

```python
class Cache(object):

    def __init__(self, MAX_SIZE):
        self.MAX_SIZE = MAX_SIZE
        self.size = 0
        self.lookup = {}  # key: query, value: node
        self.linked_list = LinkedList()

    def get(self, query):
        node = self.lookup.get(query)
        if node is None:
            return None
        self.linked_list.move_to_front(node)
        return node.results

    def set(self, query, results):
        node = self.lookup.get(query)
        if node is not None:
            node.results = results
            self.linked_list.move_to_front(node)
        else:
            if self.size == self.MAX_SIZE:
                self.lookup.pop(self.linked_list.tail.query, None)
                self.linked_list.remove_from_tail()
            else:
                self.size += 1
            new_node = Node(query, results)
            self.linked_list.append_to_front(new_node)
            self.lookup[query] = new_node
```

#### Cache qachon yangilanadi

Cache qo‘lda yangilanadi, misollar:

* Sahifa kontenti o‘zgarganda
* Sahifa o‘chirilib qo‘yilganda yoki yangi sahifa qo‘shilganda
* Page rank o‘zgarganda

Eng oddiy yondashuv — TTL qo‘yish; entry TTL tugagach, keyingi so‘rovda yangilanadi. Bu [cache-aside](https://github.com/donnemartin/system-design-primer#cache-aside) strategiyasiga mos keladi. Boshqa strategiyalar uchun (write-through, write-back, refresh-ahead) havoladagi bo‘limni ko‘ring.

## 4-qadam: Dizaynni masshtablash

> Cheklovlarni inobatga olib, bottleneck’larni aniqlang va bartaraf eting.

![Imgur](http://i.imgur.com/4j99mhe.png)

**Muhim:** dastlabki dizayndan to‘g‘ridan-to‘g‘ri finalga sakrab o‘tmaymiz.

Iterativ jarayon: 1) **Benchmark/Load Test**, 2) bottleneck’larni **Profiling**, 3) trade-off’larni baholash va yechim qo‘llash, 4) takrorlash. [AWS’da millionlab user’largacha o‘sadigan system design](../scaling_aws/README.md) misolini ko‘ring.

Har bosqichda qaysi bottleneck’lar paydo bo‘lishi va ularni qanday hal etish mumkinligini muhokama qiling (Load Balancer, Cache, Replication, va hokazo).

*Takroriy izohlarni oldini olish uchun* [system design topics](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics)ga murojaat qiling.

### Memory Cache’ni massivga kengaytirish

Katta so‘rov oqimi va xotira ehtiyojini qoplash uchun gorizontal skalalash zarur. Uchta asosiy variant:

1. **Har bir cache nodi o‘zining local cache’iga ega**  
   Oddiy, ammo hit rate past bo‘ladi.
2. **Har bir nod butun cache nusxasini saqlaydi**  
   Oddiy, ammo xotira samarasiz.
3. **Cache klaster bo‘ylab [sharding](https://github.com/donnemartin/system-design-primer#sharding) qilinadi**  
   Murakkabroq, lekin amalda eng samarali. `machine = hash(query)` kabi hashing ishlatiladi. Mashinalar qo‘shilib-o‘chganda o‘zgarish minimal bo‘lishi uchun [consistent hashing](https://github.com/donnemartin/system-design-primer#under-development) tavsiya etiladi.

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

* Tashqi clientlar bilan aloqa – [REST](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest)  
* Ichki aloqa – [RPC](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc)
* [Service discovery](https://github.com/donnemartin/system-design-primer#service-discovery)

### Security

[Security bo‘limi](https://github.com/donnemartin/system-design-primer#security)ni ko‘ring.

### Latency

[Har bir dasturchi bilishi kerak bo‘lgan kechikish ko‘rsatkichlari](https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know)ni yodda tuting.

### Ongoing

* Yangi bottleneck paydo bo‘lishi bilan benchmarking/monitoringni davom ettiring
* Scaling — iterativ jarayon
