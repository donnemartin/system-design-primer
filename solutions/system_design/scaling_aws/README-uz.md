# AWS’da millionlab foydalanuvchilargacha skalalanadigan tizim dizayni

*Eslatma: bu hujjat takrorlanishni kamaytirish uchun [system design mavzulari](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics)dagi tegishli bo‘limlarga to‘g‘ridan-to‘g‘ri havola qiladi. Havolalardagi kontent asosiy fikrlar, trade-off’lar va alternativalarni yoritadi.*

## 1-qadam: Use case va cheklovlarni aniqlash

> Talablarni to‘plang va muammoning ko‘lamini belgilang.  
> Use case va cheklovlarni aniqlashtirish uchun savollar bering.  
> Farazlarni muhokama qiling.

Iterativ yondashuv: 1) **Benchmark/Load Test**, 2) **Profiling**, 3) bottleneck’larni trade-off’larni hisobga olgan holda bartaraf etish, 4) takrorlash. Shu naqsh oddiy dizayndan scalable arxitekturagacha evolyutsiya qilishda qo‘l keladi.

AWS bo‘yicha tajribangiz bo‘lmasa ham, asosiy tamoyillar AWS’dan tashqarida ham qo‘llaniladi.

### Use case’lar

* **User** read yoki write so‘rov yuboradi  
    * **Service** so‘rovni qayta ishlaydi, ma’lumotni saqlaydi va javob qaytaradi
* **Service** kichik user bazasidan millionlab user’largacha o‘sadi  
    * Skalalanish jarayonida qo‘llaniladigan pattern’larni muhokama qilamiz
* **Service** yuqori availability’ga ega

### Cheklovlar va farazlar

#### Farazlar

* Trafik teng taqsimlanmagan
* Relational data zarur
* 1 user’dan 10+ mln user’gacha skalalanish  
    * Users+, Users++, Users+++ ... kabi bosqichlar
* 10 mln user
* Oyiga 1 mlrd yozuv
* Oyiga 100 mlrd o‘qish
* Read:write nisbati 100:1
* Har bir yozuv ≈ 1 KB

#### Foydalanishni hisoblash

* Oyiga 1 TB yangi kontent  
    * 1 KB * 1 mlrd yozuv
    * 3 yilda ≈ 36 TB
* Sekundiga 400 yozuv (o‘rtacha)
* Sekundiga 40 000 o‘qish (o‘rtacha)

## 2-qadam: High level dizayn

> Muhim komponentlar bilan yuqori darajadagi arxitekturani chizing.

![Imgur](http://i.imgur.com/B8LDKD7.png)

## 3-qadam: Yadro komponentlarni loyihalash

> Har bir bosqichda asosiy komponentlar qanday o‘zgarishini ko‘rib chiqamiz.

### Use case: User read/write qiladi

#### Maqsad

* Boshlanishiga 1-2 user bo‘lsa, sodda setup kifoya:
    * Bitta box (single EC2 instance)
    * Vertikal skalalash
    * Bottleneck’larni monitoring qilish

#### Bir dona serverdan boshlash

* EC2 dagi **Web Server**
    * User ma’lumotlarini saqlashga **MySQL Database**

**Vertical Scaling** (kattaroq instance tanlash):

* CPU, RAM, disk, tarmoq bo‘yicha monitoring (CloudWatch, top, nagios, statsd, graphite)
* Vertikal skalalash qimmatga tushadi
* Redundancy/Failover yo‘q

Alternativa: [**Horizontal Scaling**](https://github.com/donnemartin/system-design-primer#horizontal-scaling).

#### Avval SQL, keyin NoSQL’ni ko‘rib chiqing

Relational talablarga mos ravishda **MySQL** bilan boshlaymiz. Keyinchalik NoSQL haqidagi [trade-off’larni](https://github.com/donnemartin/system-design-primer#sql-or-nosql) muhokama qilamiz.

#### Public static IP berish

* Elastic IP — reboot bo‘lganda IP o‘zgarmaydi, failover vaqtida yangi instansga yo‘naltirish oson

#### DNS qo‘shish

* Route 53 orqali domain → instans IP mapping’i
* Batafsil: [Domain name system](https://github.com/donnemartin/system-design-primer#domain-name-system)

#### Web serverni himoyalash

* Faqat zarur portlarni oching:
    * 80/443 (HTTP/HTTPS)
    * 22 (SSH) — whitelist IPlar
* Outbound ulanishlarni cheklash
* Batafsil: [Security](https://github.com/donnemartin/system-design-primer#security)

## 4-qadam: Dizaynni bosqichma-bosqich skalalash

### Users+

![Imgur](http://i.imgur.com/rrfjMXB.png)

#### Faraz

* Single box’dagi MySQL CPU/RAM va disk bo‘yicha bottleneck
* Vertical scaling qimmat, Web server va DB mustaqil skalalanmayapti

#### Maqsad

* Yoqilg‘i bo‘lgan komponentlarni ajratish:
    * Statik kontentni **Object Store** (S3)ga ko‘chirish
    * **MySQL**ni alohida instansga o‘tkazish (masalan, RDS)
* Qo‘shimcha xavfsizlik choralari

#### Statik kontentni ajratish

* S3 — yuqori skalalanish, server-side encryption
* JS, CSS, images, video va user fayllarni ko‘chirib o‘tamiz

#### MySQL’ni alohida instansga o‘tkazish

* RDS — boshqaruvi oson, ko‘p availability zone’larda
* Disk encryption (rest holatida)

#### Himoyani mustahkamlash

* Ma’lumotni tranzitda va damda shifrlash
* VPC’de public subnet (Web server) + private subnet (boshqa komponentlar)

### Users++

![Imgur](http://i.imgur.com/raoFTXM.png)

#### Faraz

* Web server peak paytlarda sekinlashmoqda/not available

#### Maqsad

* [**Horizontal Scaling**](https://github.com/donnemartin/system-design-primer#horizontal-scaling):
    * **Load Balancer** (ELB/HAProxy) qo‘shish  
        * SSL’ni LB’da terminatsiya qilish  
        * Active-active / active-passive konfiguratsiyalar
    * Bir nechta **Web Server** va **Application Server** (API) instanslari
    * **MySQL**ni [**Master-Slave failover**](https://github.com/donnemartin/system-design-primer#master-slave-replication) bilan redundant qilish
* Statik/dinamik kontentni [**CDN**](https://github.com/donnemartin/system-design-primer#content-delivery-network) (CloudFront)ga surish
* Web/App qatlamlarini ajratish (reverse proxy)

### Users+++

![Imgur](http://i.imgur.com/OZCxJr0.png)

#### Faraz

* Read-heavy (100:1) pattern — DB o‘qishlaridan aziyat chekmoqda

#### Maqsad

* **Memory Cache** (Elasticache) qo‘shish:
    * Frequently accessed data (MySQL) + session data  
        * Web server stateless bo‘ladi, autoscalingga tayyor
    * Xotiradan o‘qish SSD/diskdan ancha tez
* **MySQL Read Replica**lar qo‘shish
* Ko‘proq Web/App serverlar qo‘shish

[**Master-Slave replications**](https://github.com/donnemartin/system-design-primer#master-slave-replication) bo‘limini eslatib o‘ting.

### Users++++

![Imgur](http://i.imgur.com/3X8nmdL.png)

#### Faraz

* Trafik USe biznes soatida yuqori, qolgan paytda tushadi — resurslarni dinamik boshqarish kerak

#### Maqsad

* **Autoscaling** qo‘shish (AWS Auto Scaling):
    * Web va App serverlar uchun alohida guruhlar, bir necha availability zoneda
    * CloudWatch triggerlari (CPU, latency, traffic, custom metric) yordamida skalalanish
* DevOps avtomatizatsiyasi (Chef, Puppet, Ansible)
* Monitoring:
    * Host-level: CloudWatch, top
    * Load balancer statlari
    * Log tahlili (CloudTrail, Loggly, Splunk)
    * Tajriba (Pingdom, New Relic)
    * Incident management (PagerDuty)
    * Error reporting (Sentry)

### Users+++++

![Imgur](http://i.imgur.com/jj3A5N8.png)

#### Faraz

* Skalalanish davom etmoqda, har bosqichda benchmarking/profiling bilan yangi bottleneck’lar aniqlanadi

#### Maqsad

* **MySQL** kattalashsa — eski ma’lumotni data warehouse (Redshift)ga ko‘chirish  
    * 1 TB/oy ma’lumotni bemalol ko‘taradi
* 40 000 rps o‘qish — **Memory Cache**ni kengaytirish (traffic spike, uneven load)  
    * Read replica’lar cache miss’larni bajara olmasligi mumkin — qo‘shimcha SQL scaling kerak
* 400 rps yozish (peak’da yuqoriroq) — bitta master-slave yetmasligi mumkin
* Qo‘shimcha SQL scaling pattern’lari:
    * [Federation](https://github.com/donnemartin/system-design-primer#federation)
    * [Sharding](https://github.com/donnemartin/system-design-primer#sharding)
    * [Denormalization](https://github.com/donnemartin/system-design-primer#denormalization)
    * [SQL Tuning](https://github.com/donnemartin/system-design-primer#sql-tuning)
* Ma’lumotning bir qismini **NoSQL (DynamoDB)**ga ko‘chirish
* App serverlarni rolga ajratish; real-time bo‘lmagan ishlar [**Asynchronously**](https://github.com/donnemartin/system-design-primer#asynchronism) bajariladi (SQS + Workers/Lambda)

## Qo‘shimcha muhokama mavzulari

* **SQL scaling patterns** (read replicas, federation, sharding, denormalization, SQL tuning)
* **NoSQL** (key-value, document, wide column, graph; SQL vs NoSQL)
* **Caching** (client/CDN/web/db/app caching; query va object-level; cache-aside, write-through, write-back, refresh-ahead)
* **Asynchronism va microservices** (Queues, Task queues, Back pressure)
* **Communication** (REST vs RPC, service discovery)
* **Security**
* **Latency** (har bir dasturchi bilishi kerak bo‘lgan kechikishlar)
* **Ongoing** – monitoring, iterativ benchmarking/profiling
