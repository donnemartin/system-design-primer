*[English](README.md) ∙ [日本語](README-ja.md) ∙ [简体中文](README-zh-Hans.md) ∙ [繁體中文](README-zh-TW.md) ∙ [O'zbekcha](README-uz.md) | [العَرَبِيَّة‎](https://github.com/donnemartin/system-design-primer/issues/170) ∙ [বাংলা](https://github.com/donnemartin/system-design-primer/issues/220) ∙ [Português do Brasil](https://github.com/donnemartin/system-design-primer/issues/40) ∙ [Deutsch](https://github.com/donnemartin/system-design-primer/issues/186) ∙ [ελληνικά](https://github.com/donnemartin/system-design-primer/issues/130) ∙ [עברית](https://github.com/donnemartin/system-design-primer/issues/272) ∙ [Italiano](https://github.com/donnemartin/system-design-primer/issues/104) ∙ [한국어](https://github.com/donnemartin/system-design-primer/issues/102) ∙ [فارسی](https://github.com/donnemartin/system-design-primer/issues/110) ∙ [Polski](https://github.com/donnemartin/system-design-primer/issues/68) ∙ [русский язык](https://github.com/donnemartin/system-design-primer/issues/87) ∙ [Español](https://github.com/donnemartin/system-design-primer/issues/136) ∙ [ภาษาไทย](https://github.com/donnemartin/system-design-primer/issues/187) ∙ [Türkçe](https://github.com/donnemartin/system-design-primer/issues/39) ∙ [tiếng Việt](https://github.com/donnemartin/system-design-primer/issues/127) ∙ [Français](https://github.com/donnemartin/system-design-primer/issues/250) | [Add Translation](https://github.com/donnemartin/system-design-primer/issues/28)*

**Ushbu qo'llanmani [tarjima qilishda](TRANSLATIONS.md) yordam bering!**

# Tizim Dizayni Asoslari (The System Design Primer)

<p align="center">
  <img src="images/jj3A5N8.png">
  <br/>
</p>

## Motivatsiya va Maqsad

> Katta hajmli va yuqori yuklamali (large-scale) tizimlarni loyihalashni o'rganing.
>
> Tizim dizayni bo'yicha texnik intervyuga (System Design Interview) tayyorlaning.

### Yuqori masshtablanuvchan tizimlarni loyihalashni o'rganing

Masshtablanuvchan tizimlarni loyihalashni o'rganish sizning kuchli dasturiy muhandis (Senior Software Engineer) bo'lib yetishishingizga yordam beradi.

Tizim dizayni — juda keng qamrovli mavzu. Internet bo'ylab tizim dizayni tamoyillari haqida **tarqoq holda ulkan hajmdagi maqolalar** mavjud.

Ushbu repozitoriy — sizga yirik tizimlarni noldan to'g'ri qurishni o'rgatuvchi **tartiblangan bilimlar to'plamidir**.

### Ochiq manbali hamjamiyatdan o'rganing

Ushbu loyiha doimiy ravishda yangilanib boruvchi ochiq manbali (open source) loyihadir.

[Hissa qo'shish (Contributions)](#hissa-qoshish-contributing) har doim qutlanadi!

### Tizim dizayni intervyusiga tayyorgarlik

Kodlash bo'yicha suhbatlardan tashqari, tizim dizayni ko'plab texnologik gigantlar (FAANG/Big Tech, yirik fintex va startaplar) dagi **texnik saralash jarayonining majburiy bosqichidir**.

**Keng tarqalgan tizim dizayni savollarini mashq qiling** va o'z natijalaringizni **namunaviy yechimlar**, kodlar, muhokamalar va arxitektura chizmalari bilan **solishtiring**.

Intervyuga tayyorgarlik uchun qo'shimcha mavzular:

* [O'quv qo'llanmasi (Study guide)](#oquv-qollanmasi-study-guide)
* [Tizim dizayni savollariga qanday yondashish kerak](#tizim-dizayni-savollariga-qanday-yondashish-kerak)
* [Yechimlari bilan tizim dizayni intervyu savollari](#yechimlari-bilan-tizim-dizayni-intervyu-savollari)
* [Yechimlari bilan ob'ektga yo'naltirilgan dizayn (OOD) savollari](#yechimlari-bilan-obektga-yonaltirilgan-dizayn-savollari)
* [Qo'shimcha tizim dizayni savollari](#qoshimcha-tizim-dizayni-intervyu-savollari)

## Anki flesh-kartalari

<p align="center">
  <img src="images/zdCAkB3.png">
  <br/>
</p>

Taqdim etilgan [Anki flesh-kartalari to'plami](https://apps.ankiweb.net/) tizim dizaynining asosiy tushunchalarini oraliq takrorlash (spaced repetition) usuli orqali xotirada mustahkam saqlashga yordam beradi.

* [Tizim dizayni to'plami (System design deck)](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design.apkg)
* [Tizim dizayni mashqlari to'plami](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design%20Exercises.apkg)
* [Ob'ektga yo'naltirilgan dizayn mashqlari to'plami](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/OO%20Design.apkg)

Yo'lda ketayotganda takrorlash uchun juda qulay.

### Qo'shimcha Resurs: Interaktiv Kodlash Vazifalari

[**Kodlash bo'yicha intervyuga (Coding Interview)**](https://github.com/donnemartin/interactive-coding-challenges) tayyorlanish uchun resurs qidiryapsizmi?

<p align="center">
  <img src="images/b4YtAEN.png">
  <br/>
</p>

Qardosh repozitoriy hisoblangan [**Interactive Coding Challenges**](https://github.com/donnemartin/interactive-coding-challenges) loyihasini ko'rib chiqing.

## Hissa qo'shish (Contributing)

> Hamjamiyat bilan birga o'rganing.

Quyidagi yo'nalishlarda bemalol Pull Request yuborishingiz mumkin:

* Xatolarni tuzatish
* Bo'limlarni yaxshilash va to'ldirish
* Yangi bo'limlar qo'shish
* [Tarjima qilish](TRANSLATIONS.md)

Batafsil [Hissa qo'shish qo'llanmasi (Contributing Guidelines)](CONTRIBUTING.md) bilan tanishing.

## Tizim dizayni mavzulari mundarijasi

> Har bir tizim dizayni mavzusi bo'yicha qisqacha xulosalar, jumladan ijobiy va salbiy tomonlari. **Har bir arxitektura yechimi — bu kelishuv (trade-off)**.
>
> Har bir bo'lim chuqurroq manbalarga havolalarni o'z ichiga oladi.

<p align="center">
  <img src="images/jrUBAF7.png">
  <br/>
</p>

* [Tizim dizayni mavzulari: shu yerdan boshlang](#tizim-dizayni-mavzulari-shu-yerdan-boshlang)
    * [1-qadam: Masshtablilik bo'yicha video ma'ruzani ko'ring](#1-qadam-masshtablilik-boyicha-video-maruzani-koring)
    * [2-qadam: Masshtablilik maqolasini o'qing](#2-qadam-masshtablilik-maqolasini-oqing)
    * [Keyingi qadamlar](#keyingi-qadamlar)
* [Unumdorlik va Masshtablilik (Performance vs Scalability)](#unumdorlik-va-masshtablilik-performance-vs-scalability)
* [Kechikish va O'tkazuvchanlik qobiliyati (Latency vs Throughput)](#kechikish-va-otkazuvchanlik-qobiliyati-latency-vs-throughput)
* [Mavjudlik va Izchillik (Availability vs Consistency)](#mavjudlik-va-izchillik-availability-vs-consistency)
    * [CAP teoremasi](#cap-teoremasi)
        * [CP - Izchillik va Bo'linishga chidamlilik](#cp---izchillik-va-bolinishga-chidamlilik)
        * [AP - Mavjudlik va Bo'linishga chidamlilik](#ap---mavjudlik-va-bolinishga-chidamlilik)
* [Izchillik modellari (Consistency patterns)](#izchillik-modellari-consistency-patterns)
    * [Zaif izchillik (Weak consistency)](#zaif-izchillik-weak-consistency)
    * [Oxir-oqibat erishiladigan izchillik (Eventual consistency)](#oxir-oqibat-erishiladigan-izchillik-eventual-consistency)
    * [Qat'iy izchillik (Strong consistency)](#qatiy-izchillik-strong-consistency)
* [Mavjudlik modellari (Availability patterns)](#mavjudlik-modellari-availability-patterns)
    * [Zaxiraga o'tish (Fail-over)](#zaxiraga-otish-fail-over)
    * [Replikatsiya (Replication)](#replikatsiya-replication)
    * [Mavjudlik ko'rsatkichlari (Availability in numbers)](#mavjudlik-korsatkichlari-availability-in-numbers)
* [Domen nomlari tizimi (DNS)](#domen-nomlari-tizimi-dns)
* [Kontent yetkazib berish tarmog'i (CDN)](#kontent-yetkazib-berish-tarmogi-cdn)
    * [Push CDN](#push-cdn)
    * [Pull CDN](#pull-cdn)
* [Yuklama balanseri (Load balancer)](#yuklama-balanseri-load-balancer)
    * [Active-passive modeli](#active-passive-modeli)
    * [Active-active modeli](#active-active-modeli)
    * [4-daraja (L4 - Transport) yuklama balansi](#4-daraja-l4-transport-yuklama-balansi)
    * [7-daraja (L7 - Application) yuklama balansi](#7-daraja-l7-application-yuklama-balansi)
    * [Gorizontal masshtablash (Horizontal scaling)](#gorizontal-masshtablash-horizontal-scaling)
* [Teskari proksi (Reverse proxy)](#teskari-proksi-reverse-proxy)
    * [Yuklama balanseri va Teskari proksi farqi](#yuklama-balanseri-va-teskari-proksi-farqi)
* [Ilova qatlami (Application layer)](#ilova-qatlami-application-layer)
    * [Mikroxizmatlar (Microservices)](#mikroxizmatlar-microservices)
    * [Xizmatlarni aniqlash (Service discovery)](#xizmatlarni-aniqlash-service-discovery)
* [Ma'lumotlar bazasi (Database)](#malumotlar-bazasi-database)
    * [Relyatsion ma'lumotlar bazasini boshqarish tizimi (RDBMS)](#relyatsion-malumotlar-bazasini-boshqarish-tizimi-rdbms)
        * [Master-slave replikatsiya](#master-slave-replikatsiya)
        * [Master-master replikatsiya](#master-master-replikatsiya)
        * [Federatsiya (Federation)](#federatsiya-federation)
        * [Sharding (Ma'lumotlar bazasini bo'laklash)](#sharding-malumotlar-bazasini-bolaklash)
        * [Denormalizatsiya (Denormalization)](#denormalizatsiya-denormalization)
        * [SQL optimallashtirish (SQL tuning)](#sql-optimallashtirish-sql-tuning)
    * [NoSQL](#nosql)
        * [Kalit-qiymat ombori (Key-value store)](#kalit-qiymat-ombori-key-value-store)
        * [Hujjatli ombor (Document store)](#hujjatli-ombor-document-store)
        * [Keng ustunli ombor (Wide column store)](#keng-ustunli-ombor-wide-column-store)
        * [Graflar bazasi (Graph Database)](#graflar-bazasi-graph-database)
    * [SQL yoki NoSQL tanlovi](#sql-yoki-nosql-tanlovi)
* [Kesh (Cache)](#kesh-cache)
    * [Mijoz keshi (Client caching)](#mijoz-keshi-client-caching)
    * [CDN keshi (CDN caching)](#cdn-keshi-cdn-caching)
    * [Veb-server keshi (Web server caching)](#veb-server-keshi-web-server-caching)
    * [Ma'lumotlar bazasi keshi (Database caching)](#malumotlar-bazasi-keshi-database-caching)
    * [Ilova darajasidagi kesh (Application caching)](#ilova-darajasidagi-kesh-application-caching)
    * [Keshni yangilash strategiyalari](#keshni-yangilash-strategiyalari)
        * [Cache-aside](#cache-aside)
        * [Write-through](#write-through)
        * [Write-behind (write-back)](#write-behind-write-back)
        * [Refresh-ahead](#refresh-ahead)
* [Asinxronlik (Asynchronism)](#asinxronlik-asynchronism)
    * [Xabarlar navbati (Message queues)](#xabarlar-navbati-message-queues)
    * [Vazifalar navbati (Task queues)](#vazifalar-navbati-task-queues)
    * [Orqaga bosim (Back pressure)](#orqaga-bosim-back-pressure)
* [Aloqa protokollari (Communication)](#aloqa-protokollari-communication)
    * [TCP (Transmission Control Protocol)](#tcp-transmission-control-protocol)
    * [UDP (User Datagram Protocol)](#udp-user-datagram-protocol)
    * [RPC (Remote Procedure Call)](#rpc-remote-procedure-call)
    * [REST (Representational State Transfer)](#rest-representational-state-transfer)
* [Xavfsizlik (Security)](#xavfsizlik-security)
* [Ilova (Appendix)](#ilova-appendix)

---

## O'quv qo'llanmasi (Study guide)

> Intervyu muddatingizga (qisqa, o'rta, uzoq) qarab tavsiya etiladigan o'rganish rejasi.

![Imgur](images/OfVllex.png)

**Savol: Intervyu uchun bu yerdagi hamma narsani bilishim shartmi?**

**Javob: Yo'q, intervyuga tayyorlanish uchun bu yerdagi har bir detalni yodlab olishingiz shart emas.**

Intervyuda sizdan nima so'ralishi quyidagi omillarga bog'liq:
* Qancha tajribangiz borligi
* Texnik darajangiz (Background)
* Qaysi lavozimga topshirayotganingiz (Junior, Middle, Senior, Lead, Architect)
* Qaysi kompaniyaga topshirayotganingiz
* Bir oz omad

Ko'proq tajribaga ega nomzodlardan tizim dizayni bo'yicha chuqurroq bilim kutiladi. Arxitektorlar yoki jamoa yetakchilaridan (Team Lead) oddiy dasturchilarga qaraganda ko'proq narsa talab qilinadi.

Keng ko'lamdan boshlang va bir nechta muhim sohalarga chuqurroq sho'ng'ing.

---

## Tizim dizayni savollariga qanday yondashish kerak

> Tizim dizayni bo'yicha intervyu savolini qanday yechish kerak.

Tizim dizayni intervyusi — bu **ochiq dialog (open-ended conversation)**. Uni nomzod sifatida siz boshqarishingiz kutiladi.

Muhokamani yo'naltirish uchun quyidagi 4 bosqichdan foydalanishingiz mumkin:

### 1-qadam: Foydalanish holatlari (Use cases), cheklovlar va taxminlarni aniqlashtirish

Talablarni to'plang va muammoning chegaralarini belgilang.
* Tizimdan kim foydalanadi?
* Ular undan qanday maqsadda foydalanishadi?
* Foydalanuvchilar soni qancha (DAU, MAU)?
* Tizim qanday kiruvchi va chiquvchi ma'lumotlarni qabul qiladi?
* Sekundiga nechta so'rov (RPS/QPS) kutilmoqda?
* O'qish (Read) va Yozish (Write) nisbati qanday (masalan, 100:1 mi yoki 1:1)?

### 2-qadam: Yuqori darajadagi dizayn (High-Level Design) yaratish

Barcha asosiy komponentlar bilan yuqori darajadagi arxitektura chizmasini tuzing.
* Asosiy komponentlar (Mijoz, Veb-server, Kesh, Baza, Navbat) va ular orasidagi bog'liqlikni chizing.
* O'z g'oyalaringizni asoslab bering.

### 3-qadam: Asosiy komponentlarni chuqur loyihalash (Deep Dive)

Har bir asosiy komponentning detallariga kiring. Masalan, [URL qisqartirish xizmatini (Bit.ly/Pastebin)](solutions/system_design/pastebin/README.md) loyihalash so'ralgan bo'lsa:
* Hash yaratish va saqlash (MD5, Base62, to'qnashuvlar — collisions).
* SQL yoki NoSQL tanlovi va ma'lumotlar bazasi sxemasi.
* Hash orqali to'liq URL manzilini topish (Lookup) tezligi.
* API shartnomasi va ob'ektga yo'naltirilgan arxitektura.

### 4-qadam: Dizaynni masshtablash (Scale the design)

Cheklovlarni hisobga olgan holda to'siqlarni (bottlenecks) aniqlang va bartaraf eting:
* Yuklama balanseri (Load balancer) kerakmi?
* Gorizontal masshtablash (Horizontal scaling)?
* Keshlash (Redis / Memcached)?
* Ma'lumotlar bazasini bo'laklash (Database sharding)?

Har doim kelishuvlarni (trade-offs) muhokama qiling. Har bir arxitektura yechimining yaxshi va yomon tomoni bor.

---

## Tizim dizayni mavzulari: shu yerdan boshlang

Tizim dizaynida yangimisiz? Avvalo asosiy tamoyillar, ularning afzalliklari va cheklovlarini tushunib olish kerak.

### 1-qadam: Masshtablilik bo'yicha video ma'ruzani ko'ring

[Harvard Universitetining Masshtablilik bo'yicha ma'ruzasi](https://www.youtube.com/watch?v=-W9F__D3oY4)
* Ko'rib chiqilgan mavzular: Vertikal masshtablash, Gorizontal masshtablash, Keshlash, Yuklama balansi, Ma'lumotlar bazasi replikatsiyasi va partitsiyalash.

### 2-qadam: Masshtablilik maqolasini o'qing

* [Klonlar (Clones)](https://web.archive.org/web/20220530193911/https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
* [Ma'lumotlar bazalari (Databases)](https://web.archive.org/web/20220602114024/https://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
* [Keshlar (Caches)](https://web.archive.org/web/20230126233752/https://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
* [Asinxronlik (Asynchronism)](https://web.archive.org/web/20220926171507/https://www.lecloud.net/post/9699762917/scalability-for-dummies-part-4-asynchronism)

---

## Unumdorlik va Masshtablilik (Performance vs Scalability)

Xizmatga qo'shimcha resurslar (CPU, RAM, serverlar) qo'shilganda uning **unumdorligi** mutanosib ravishda oshsa, bunday xizmat **masshtablanuvchan (scalable)** hisoblanadi.

Unumdorlik va masshtablilik farqiga oddiy misol:
* Agar tizimingizda **unumdorlik (performance)** muammosi bo'lsa — u hatto **bitta foydalanuvchi** uchun ham sekin ishlaydi.
* Agar tizimingizda **masshtablilik (scalability)** muammosi bo'lsa — u bitta foydalanuvchi uchun tez ishlaydi, lekin **katta yuklama (ko'p foydalanuvchi)** ostida sekinlashadi yoki qulaydi.

---

## Kechikish va O'tkazuvchanlik qobiliyati (Latency vs Throughput)

* **Kechikish (Latency)** — biron bir amalni bajarish yoki natija ishlab chiqarish uchun ketgan vaqt (masalan: 50 ms).
* **O'tkazuvchanlik qobiliyati (Throughput)** — vaqt birligi ichida bajarilgan ana shunday amallar yoki so'rovlar soni (masalan: 10,000 RPS).

Odatda tizim qurishda maqsad: **maqbul kechikish (acceptable latency)** bilan **maksimal o'tkazuvchanlikka (maximal throughput)** erishishdir.

---

## Mavjudlik va Izchillik (Availability vs Consistency)

### CAP teoremasi

<p align="center">
  <img src="images/bgLMI2u.png">
  <br/>
  <i><a href="https://robertgreiner.com/cap-theorem-revisited">Manba: CAP theorem revisited</a></i>
</p>

Taqsimlangan (distributed) kompyuter tizimlarida quyidagi 3 ta kafolatdan bir vaqtning o'zida faqat **ikkitasini** ta'minlay olasiz:

1. **Izchillik (Consistency)** — Har bir o'qish (read) so'rovi eng so'nggi yozilgan (write) ma'lumotni oladi yoki xatolik qaytaradi.
2. **Mavjudlik (Availability)** — Har bir so'rov (nosoz bo'lmagan tugunga kelgan) doim xatoliksiz javob oladi (lekin bu javob eng so'nggi ma'lumot bo'lishiga kafolat yo'q).
3. **Bo'linishga chidamlilik (Partition tolerance)** — Tugunlar o'rtasida tarmoq uzilishi (network partition) yoki xabarlar yo'qolishi yuz bersa ham tizim ishlashda davom etadi.

Tarmoq uzilishlari real hayotda doim sodir bo'lishi mumkinligi sababli, taqsimlangan tizimlarda **Partition Tolerance (P)** majburiydir. Shuning uchun siz asosan **CP** yoki **AP** o'rtasida tanlov qilasiz:

#### CP - Izchillik va Bo'linishga chidamlilik
Tarmoq uzilishi yuz berganda, tizim noto'g'ri/eski ma'lumot bermaslik uchun so'rovlarni rad etadi yoki vaqtincha to'xtatadi. **Mavjudlik (Availability) qurbon qilinadi**. Masalan: bank hisob-kitoblari, tranzaksiyalar.

#### AP - Mavjudlik va Bo'linishga chidamlilik
Tarmoq uzilishi yuz berganda, har bir tugun o'zida bor ma'lumot bilan javob berishda davom etadi. **Izchillik (Consistency) qurbon qilinadi**. Tarmoq tiklangach, ma'lumotlar qayta sinxronlashtiriladi. Masalan: ijtimoiy tarmoq tasmalaridagi layklar, izohlar.

---

## Izchillik modellari (Consistency patterns)

### Zaif izchillik (Weak consistency)
Yozilgan ma'lumot o'qish so'rovlariga darhol ko'rinmasligi mumkin. Ovozli qo'ng'iroqlar (VoIP), real-vaqt video o'yinlar uchun mos.

### Oxir-oqibat erishiladigan izchillik (Eventual consistency)
Yozilgan ma'lumot darhol emas, ma'lum vaqt o'tgach (odatda millisekundlarda) barcha tugunlarga yetib boradi va tizim to'liq izchil holatga keladi. DNS tizimi, Amazon savdo aravachasi bunga misoldir.

### Qat'iy izchillik (Strong consistency)
Ma'lumot yozildimi, keyingi har qanday o'qish so'rovi faqat va faqat eng so'nggi holatni ko'radi. Relyatsion ma'lumotlar bazalari (PostgreSQL, MySQL) odatda shu tamoyilda ishlaydi.

---

## Mavjudlik modellari (Availability patterns)

Yuqori mavjudlikni (High Availability) ta'minlashning 2 ta asosiy usuli bor: **Fail-over (Zaxiraga o'tish)** va **Replication (Replikatsiya)**.

### Zaxiraga o'tish (Fail-over)

* **Active-passive:** Doimiy ravishda yurak urishi (heartbeat) signallari yuboriladi. Asosiy (Active) server qulaganda, passiv zaxira (Passive) server uning o'rnini egallaydi.
* **Active-active:** Ikkala server ham bir vaqtda so'rovlarni qabul qiladi va yuklamani o'zaro taqsimlaydi.

### Mavjudlik ko'rsatkichlari (Availability in numbers)

Tizim mavjudligi odatda "to'qqizlar" bilan o'lchanadi (SLA):
* **99.9% (uchta to'qqiz):** Yiliga 8.76 soat uzilish.
* **99.99% (to'rtta to'qqiz):** Yiliga 52.6 daqiqa uzilish.
* **99.999% (beshta to'qqiz - High Availability oltin standarti):** Yiliga atigi 5.26 daqiqa uzilish.

---

## Domen nomlari tizimi (DNS)

DNS — inson tushunadigan domen nomini (masalan, `google.com`) kompyuter tushunadigan IP-manzilga (`142.250.180.206`) o'girib beruvchi ierarxik tizimdir.

Routing strategiyalari:
* **Weighted round robin:** Serverlar quvvatiga qarab so'rovlarni foizlarda taqsimlash.
* **Latency-based:** Foydalanuvchiga eng yaqin va tezkor javob beradigan serverga yo'naltirish.
* **Geolocation-based:** Foydalanuvchining mamlakati/hududiga qarab yo'naltirish.

---

## Kontent yetkazib berish tarmog'i (CDN)

CDN — statik fayllarni (rasmlar, videolar, CSS, JS) foydalanuvchiga geografik jihatdan eng yaqin serverlar keshida saqlovchi global taqsimlangan tarmoq.

* **Push CDN:** Yangi fayllar serverga yuklanganda avtomatik ravishda barcha CDN tugunlariga yuboriladi (kichik hajmli, kam o'zgaradigan fayllar uchun yaxshi).
* **Pull CDN:** Foydalanuvchi faylni birinchi marta so'ragandagina CDN asosiy serverdan faylni tortib oladi va keshlaydi (katta hajmli trafik uchun eng keng tarqalgan usul).

---

## Yuklama balanseri (Load balancer)

Yuklama balanseri kelayotgan tarmoq trafigini bir nechta serverlar klasteriga samarali taqsimlaydi.

### 4-daraja (L4 - Transport) va 7-daraja (L7 - Application)
* **Layer 4:** So'rovlarni faqat IP-manzil va TCP/UDP portiga qarab yo'naltiradi (paketlar ichini o'qimaydi, juda tez).
* **Layer 7:** So'rovning HTTP sarlavhalari (headers), Cookie yoki URL manziliga qarab aqlli yo'naltiradi (masalan, `/api` ni alohida backend klasteriga, `/images` ni boshqasiga).

---

## Kesh (Cache)

Keshlash — sekin ishlaydigan manbadan (disk, ma'lumotlar bazasi, tarmoq) olingan ma'lumotlarni tezkor xotirada (RAM - Redis, Memcached) saqlash orqali tizim tezligini 10x-100x ga oshirish usulidir.

### Keshni yangilash strategiyalari

1. **Cache-aside:** Ilova avval keshni tekshiradi. Agar keshda bo'lsa (Cache Hit), qaytaradi. Bo'lmasa (Cache Miss), bazadan o'qiydi, keshga yozadi va mijozga qaytaradi.
2. **Write-through:** Ilova ma'lumotni keshga yozadi, kesh esa uni bir vaqtda darhol bazaga saqlaydi.
3. **Write-behind (Write-back):** Ilova faqat keshga yozadi va darhol javob qaytaradi. Kesh ma'lumotlarni asinxron ravishda to'plab (batch) bazaga yozadi (juda tez, lekin server o'chib qolsa xavf bor).
4. **Refresh-ahead:** Kesh muddati tugashini kutmasdan, tez-tez o'qiladigan ma'lumotlarni oldindan avtomatik yangilab turish.

---

## Asinxronlik (Asynchronism)

Vaqt talab qiladigan og'ir vazifalarni (video render, PDF yaratish, AI ovoz tahlili, ommaviy xabarnomalar) so'rov-javob siklidan chiqarib, fonda bajarish uchun asinxron navbatlar qo'llaniladi.

* **Message queues (Xabarlar navbati):** RabbitMQ, Apache Kafka.
* **Task queues (Vazifalar navbati):** Celery, BullMQ, Redis Queue.
* **Back pressure:** Navbat haddan tashqari to'lib ketganda mijozga "iltimos kuting" yoki "rate-limit" signali berish orqali tizimni qulashdan asrash.

---

## Qo'shimcha manbalar va intervyu yechimlari

To'liq kod yechimlari, arxitektura diagrammalari va yirik kompaniyalar (Twitter, Netflix, Uber) tizimlarining tahlili doimiy ravishda to'ldirib boriladi.

* Loyiha bo'yicha muhokama: [Issue #1416](https://github.com/donnemartin/system-design-primer/issues/1416)
* Hissa qo'shuvchi maintainer: [@salomh46-rgb](https://github.com/salomh46-rgb)
