*[English](README.md) ∙ [日本語](README-ja.md) ∙ [اردو](README-ur.md) ∙ [简体中文](README-zh-Hans.md) ∙ [繁體中文](README-zh-TW.md) | [العَرَبِيَّة‎](https://github.com/donnemartin/system-design-primer/issues/170) ∙ [বাংলা](https://github.com/donnemartin/system-design-primer/issues/220) ∙ [Português do Brasil](https://github.com/donnemartin/system-design-primer/issues/40) ∙ [Deutsch](https://github.com/donnemartin/system-design-primer/issues/186) ∙ [ελληνικά](https://github.com/donnemartin/system-design-primer/issues/130) ∙ [עברית](https://github.com/donnemartin/system-design-primer/issues/272) ∙ [Italiano](https://github.com/donnemartin/system-design-primer/issues/104) ∙ [한국어](https://github.com/donnemartin/system-design-primer/issues/102) ∙ [فارسی](https://github.com/donnemartin/system-design-primer/issues/110) ∙ [Polski](https://github.com/donnemartin/system-design-primer/issues/68) ∙ [русский язык](https://github.com/donnemartin/system-design-primer/issues/87) ∙ [Español](https://github.com/donnemartin/system-design-primer/issues/136) ∙ [ภาษาไทย](https://github.com/donnemartin/system-design-primer/issues/187) ∙ [Türkçe](https://github.com/donnemartin/system-design-primer/issues/39) ∙ [tiếng Việt](https://github.com/donnemartin/system-design-primer/issues/127) ∙ [Français](https://github.com/donnemartin/system-design-primer/issues/250) | [Add Translation](https://github.com/donnemartin/system-design-primer/issues/28)*

** مدد [ترجمہ](TRANSLATIONS.md) یہ گائیڈ!**

<a id="the-system-design-primer"></a>
# System Design Primer

<p align="center">
  <img src="images/jj3A5N8.png">
  <br/>
</p>

<a id="motivation"></a>
## حوصلہ افزائی

> بڑے پیمانے پر سسٹم ڈیزائن کرنے کا طریقہ سیکھیں۔
>
> system design انٹرویو کی تیاری کریں۔

<a id="learn-how-to-design-large-scale-systems"></a>
### بڑے پیمانے پر سسٹم ڈیزائن کرنے کا طریقہ سیکھیں۔

توسیع پذیر نظاموں کو ڈیزائن کرنے کا طریقہ سیکھنا آپ کو ایک بہتر انجینئر بننے میں مدد دے گا۔

System design ایک وسیع موضوع ہے۔  system design اصولوں پر **پورے ویب پر بکھرے ہوئے وسائل کی ایک بڑی تعداد** ہے۔

یہ ریپو وسائل کا ایک **منظم مجموعہ** ہے جس میں آپ کو یہ سیکھنے میں مدد ملتی ہے کہ پیمانے پر سسٹم کیسے بنایا جائے۔

<a id="learn-from-the-open-source-community"></a>
### اوپن سورس کمیونٹی سے سیکھیں۔

یہ ایک مسلسل اپ ڈیٹ، اوپن سورس پروجیکٹ ہے۔

[شراکتیں](#contributing) خوش آمدید!

<a id="prep-for-the-system-design-interview"></a>
### system design انٹرویو کی تیاری کریں۔

انٹرویوز کوڈنگ کے علاوہ، system design بہت سی ٹیک کمپنیوں میں **تکنیکی انٹرویو کے عمل** کا ایک **مطلوبہ جزو** ہے۔

**عام system design انٹرویو کے سوالات کی مشق کریں** اور **موازنہ کریں** اپنے نتائج کا **نمونہ حل** کے ساتھ: مباحثے، کوڈ، اور خاکہ۔

انٹرویو کی تیاری کے لیے اضافی موضوعات:

* [مطالعہ گائیڈ](#study-guide)
* [system design انٹرویو کے سوال تک کیسے پہنچیں۔](#how-to-approach-a-system-design-interview-question)
* [System design انٹرویو کے سوالات، **حل کے ساتھ**](#system-design-interview-questions-with-solutions)
* [آبجیکٹ پر مبنی ڈیزائن انٹرویو کے سوالات، **حل کے ساتھ**](#object-oriented-design-interview-questions-with-solutions)
* [اضافی system design انٹرویو کے سوالات](#additional-system-design-interview-questions)

<a id="anki-flashcards"></a>
## Anki فلیش کارڈز

<p align="center">
  <img src="images/zdCAkB3.png">
  <br/>
</p>

فراہم کردہ [Anki فلیش کارڈ ڈیکس](https://apps.ankiweb.net/) system design کلیدی تصورات کو برقرار رکھنے میں آپ کی مدد کرنے کے لیے وقفہ والی تکرار کا استعمال کریں۔

* [System design ڈیک](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design.apkg)
* [System design مشقوں کا ڈیک](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design%20Exercises.apkg)
* [آبجیکٹ پر مبنی ڈیزائن کی مشقوں کا ڈیک](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/OO%20Design.apkg)

چلتے پھرتے استعمال کے لیے بہت اچھا۔

<a id="coding-resource-interactive-coding-challenges"></a>
### کوڈنگ وسائل: انٹرایکٹو کوڈنگ چیلنجز

آپ کی تیاری میں مدد کرنے کے لیے وسائل کی تلاش ہے۔ [**کوڈنگ انٹرویو**](https://github.com/donnemartin/interactive-coding-challenges)?

<p align="center">
  <img src="images/b4YtAEN.png">
  <br/>
</p>

بہن ریپو چیک کریں۔ [**انٹرایکٹو کوڈنگ چیلنجز**](https://github.com/donnemartin/interactive-coding-challenges) ، جس میں ایک اضافی Anki ڈیک ہے:

* [کوڈنگ ڈیک](https://github.com/donnemartin/interactive-coding-challenges/tree/master/anki_cards/Coding.apkg)

<a id="contributing"></a>
## تعاون کرنا

> کمیونٹی سے سیکھیں۔

مدد کے لیے پل کی درخواستیں جمع کرانے کے لیے آزاد محسوس کریں:

* غلطیاں درست کریں۔
* حصوں کو بہتر بنائیں
* نئے حصے شامل کریں۔
* [ترجمہ کریں۔](https://github.com/donnemartin/system-design-primer/issues/28)

ایسا مواد رکھا جاتا ہے جس میں کچھ چمکانے کی ضرورت ہوتی ہے۔ [ترقی کے تحت](#under-development).

کا جائزہ لیں۔ [تعاون کے رہنما خطوط](CONTRIBUTING.md).

<a id="index-of-system-design-topics"></a>
## system design موضوعات کا Index

> مختلف system design موضوعات کے خلاصے، بشمول نفع و نقصان۔  **سب کچھ تجارت ہے**۔
>
> ہر حصے میں مزید گہرائی والے وسائل کے لنکس ہوتے ہیں۔

<p align="center">
  <img src="images/jrUBAF7.png">
  <br/>
</p>

* [System design موضوعات: یہاں سے شروع کریں۔](#system-design-topics-start-here)
    * [مرحلہ 1: scalability ویڈیو لیکچر کا جائزہ لیں۔](#step-1-review-the-scalability-video-lecture)
    * [مرحلہ 2: scalability مضمون کا جائزہ لیں۔](#step-2-review-the-scalability-article)
    * [اگلے اقدامات](#next-steps)
* [کارکردگی بمقابلہ scalability](#performance-vs-scalability)
* [Latency بمقابلہ throughput](#latency-vs-throughput)
* [Availability بمقابلہ مستقل مزاجی۔](#availability-vs-consistency)
    * [CAP تھیوریم](#cap-theorem)
        * [CP - مستقل مزاجی اور تقسیم رواداری](#cp---consistency-and-partition-tolerance)
        * [AP - availability اور تقسیم رواداری](#ap---availability-and-partition-tolerance)
* [Consistency پیٹرن](#consistency-patterns)
    * [کمزور مستقل مزاجی۔](#weak-consistency)
    * [حتمی مستقل مزاجی](#eventual-consistency)
    * [مضبوط مستقل مزاجی ۔](#strong-consistency)
* [Availability پیٹرن](#availability-patterns)
    * [فیل اوور](#fail-over)
    * [Replication](#replication)
    * [نمبروں میں Availability](#availability-in-numbers)
* [ڈومین نام کا نظام](#domain-name-system)
* [مواد کی ترسیل کا نیٹ ورک](#content-delivery-network)
    * [CDNs کو دھکیلیں۔](#push-cdns)
    * [CDNs کھینچیں۔](#pull-cdns)
* [Load balancer](#load-balancer)
    * [فعال غیر فعال](#active-passive)
    * [فعال-فعال](#active-active)
    * [پرت 4 لوڈ بیلنسنگ](#layer-4-load-balancing)
    * [پرت 7 لوڈ بیلنسنگ](#layer-7-load-balancing)
    * [افقی اسکیلنگ](#horizontal-scaling)
* [ریورس پراکسی (ویب سرور)](#reverse-proxy-web-server)
    * [Load balancer بمقابلہ ریورس پراکسی](#load-balancer-vs-reverse-proxy)
* [درخواست کی پرت](#application-layer)
    * [Microservices](#microservices)
    * [سروس کی دریافت](#service-discovery)
* [Database](#database)
    * [متعلقہ database مینجمنٹ سسٹم (RDBMS)](#relational-database-management-system-rdbms)
        * [Master-غلام replication](#master-slave-replication)
        * [Master-ماسٹر replication](#master-master-replication)
        * [فیڈریشن](#federation)
        * [Sharding](#sharding)
        * [ڈی نارملائزیشن](#denormalization)
        * [SQL ٹیوننگ](#sql-tuning)
    * [NoSQL](#nosql)
        * [کلیدی قدر کی دکان](#key-value-store)
        * [دستاویز کی دکان](#document-store)
        * [وسیع کالم اسٹور](#wide-column-store)
        * [گراف Database](#graph-database)
    * [SQL یا NoSQL](#sql-or-nosql)
* [Cache](#cache)
    * [Client caching](#client-caching)
    * [CDN caching](#cdn-caching)
    * [ویب سرور caching](#web-server-caching)
    * [Database caching](#database-caching)
    * [درخواست caching](#application-caching)
    * [database استفسار کی سطح پر Caching](#caching-at-the-database-query-level)
    * [آبجیکٹ کی سطح پر Caching](#caching-at-the-object-level)
    * [cache کو کب اپ ڈیٹ کرنا ہے۔](#when-to-update-the-cache)
        * [Cache-ایک طرف](#cache-aside)
        * [Write-through](#write-through)
        * [پیچھے لکھنا (لکھنا)](#write-behind-write-back)
        * [تازہ دم کریں۔](#refresh-ahead)
* [اسینکرونزم](#asynchronism)
    * [پیغامات کی قطاریں](#message-queues)
    * [کام کی قطاریں](#task-queues)
    * [Back pressure](#back-pressure)
* [مواصلات](#communication)
    * [ٹرانسمیشن کنٹرول پروٹوکول (TCP)](#transmission-control-protocol-tcp)
    * [یوزر ڈیٹاگرام پروٹوکول (UDP)](#user-datagram-protocol-udp)
    * [ریموٹ طریقہ کار کال (RPC)](#remote-procedure-call-rpc)
    * [ریاستی نمائندگی کی منتقلی (REST)](#representational-state-transfer-rest)
* [سیکورٹی](#security)
* [اپینڈکس](#appendix)
    * [دو میز کی طاقتیں۔](#powers-of-two-table)
    * [Latency نمبر ہر پروگرامر کو معلوم ہونا چاہئے۔](#latency-numbers-every-programmer-should-know)
    * [اضافی system design انٹرویو کے سوالات](#additional-system-design-interview-questions)
    * [حقیقی دنیا کے فن تعمیرات](#real-world-architectures)
    * [کمپنی کے فن تعمیرات](#company-architectures)
    * [کمپنی انجینئرنگ بلاگز](#company-engineering-blogs)
* [ترقی کے تحت](#under-development)
* [کریڈٹس](#credits)
* [رابطہ کی معلومات](#contact-info)
* [لائسنس](#license)

<a id="study-guide"></a>
## مطالعہ گائیڈ

> آپ کے انٹرویو کی ٹائم لائن (مختصر، درمیانی، طویل) کی بنیاد پر جائزہ لینے کے لیے تجویز کردہ عنوانات۔

! [Imgur](images/OfVllex.png)

**س: انٹرویوز کے لیے، کیا مجھے یہاں سب کچھ جاننے کی ضرورت ہے؟**

**A: نہیں، آپ کو انٹرویو کی تیاری کے لیے یہاں سب کچھ جاننے کی ضرورت نہیں ہے**۔

آپ سے انٹرویو میں جو کچھ پوچھا جاتا ہے اس کا انحصار متغیرات پر ہوتا ہے جیسے:

* آپ کو کتنا تجربہ ہے؟
* آپ کا تکنیکی پس منظر کیا ہے۔
* آپ کن عہدوں کے لیے انٹرویو لے رہے ہیں۔
* آپ کن کمپنیوں کے ساتھ انٹرویو کر رہے ہیں۔
*قسمت

زیادہ تجربہ کار امیدواروں سے عام طور پر system design کے بارے میں مزید جاننے کی توقع کی جاتی ہے۔  آرکیٹیکٹس یا ٹیم لیڈز سے انفرادی شراکت داروں سے زیادہ جاننے کی توقع کی جا سکتی ہے۔  اعلی ٹیک کمپنیوں کے ایک یا زیادہ ڈیزائن انٹرویو راؤنڈ ہونے کا امکان ہے۔

وسیع شروع کریں اور کچھ علاقوں میں گہرائی میں جائیں۔  یہ مختلف اہم system design موضوعات کے بارے میں تھوڑا جاننے میں مدد کرتا ہے۔  اپنی ٹائم لائن، تجربے، کن عہدوں کے لیے آپ انٹرویو کر رہے ہیں، اور کن کمپنیوں کے ساتھ آپ انٹرویو کر رہے ہیں، کی بنیاد پر درج ذیل گائیڈ کو ایڈجسٹ کریں۔

* **مختصر ٹائم لائن** - system design عنوانات کے ساتھ **وسعت** کا مقصد۔  **کچھ** انٹرویو کے سوالات کو حل کرکے مشق کریں۔
* **میڈیم ٹائم لائن** - system design عنوانات کے ساتھ **چوڑائی** اور **کچھ گہرائی** کا مقصد بنائیں۔  **بہت سے** انٹرویو کے سوالات حل کرکے مشق کریں۔
* **طویل ٹائم لائن** - system design عنوانات کے ساتھ **چوڑائی** اور **مزید گہرائی** کا مقصد۔  **زیادہ تر** انٹرویو کے سوالات حل کرکے مشق کریں۔

| |مختصر|درمیانہ|لمبی|
|---|---|---|---|
|کے ذریعے پڑھیں [System design موضوعات](#index-of-system-design-topics) نظام کے کام کرنے کے طریقے کی وسیع تفہیم حاصل کرنے کے لیے| :+1: | :+1: | :+1: |
|میں چند مضامین پڑھیں [کمپنی انجینئرنگ بلاگز](#company-engineering-blogs) ان کمپنیوں کے لیے جن کے ساتھ آپ انٹرویو کر رہے ہیں۔| :+1: | :+1: | :+1: |
|چند کے ذریعے پڑھیں [حقیقی دنیا کے فن تعمیرات](#real-world-architectures) | :+1: | :+1: | :+1: |
|جائزہ لیں [system design انٹرویو کے سوال تک کیسے پہنچیں۔](#how-to-approach-a-system-design-interview-question) | :+1: | :+1: | :+1: |
|کے ذریعے کام [System design حل کے ساتھ انٹرویو کے سوالات](#system-design-interview-questions-with-solutions) |کچھ|بہت سے|زیادہ تر|
|کے ذریعے کام [حل کے ساتھ آبجیکٹ پر مبنی ڈیزائن انٹرویو کے سوالات](#object-oriented-design-interview-questions-with-solutions) |کچھ|بہت سے|زیادہ تر|
|جائزہ لیں [اضافی system design انٹرویو کے سوالات](#additional-system-design-interview-questions) |کچھ|بہت سے|زیادہ تر|

<a id="how-to-approach-a-system-design-interview-question"></a>
## system design انٹرویو کے سوال تک کیسے پہنچیں۔

> system design انٹرویو کے سوال سے کیسے نمٹا جائے۔

system design انٹرویو ایک **آزاد گفتگو** ہے۔  آپ سے اس کی قیادت کی توقع کی جاتی ہے۔

آپ بحث کی رہنمائی کے لیے درج ذیل اقدامات استعمال کر سکتے ہیں۔  اس عمل کو مستحکم کرنے میں مدد کے لیے، کے ذریعے کام کریں۔ [System design حل کے ساتھ انٹرویو کے سوالات](#system-design-interview-questions-with-solutions) مندرجہ ذیل اقدامات کا استعمال کرتے ہوئے سیکشن.

<a id="step-1-outline-use-cases-constraints-and-assumptions"></a>
### مرحلہ 1: استعمال کے معاملات، رکاوٹوں اور مفروضوں کا خاکہ

ضروریات کو جمع کریں اور مسئلہ کی گنجائش کریں۔  استعمال کے معاملات اور رکاوٹوں کو واضح کرنے کے لیے سوالات پوچھیں۔  مفروضوں پر بحث کریں۔

* کون اسے استعمال کرنے جا رہا ہے؟
* وہ اسے کیسے استعمال کرنے جا رہے ہیں؟
* کتنے صارفین ہیں؟
* نظام کیا کرتا ہے؟
* سسٹم کے ان پٹ اور آؤٹ پٹ کیا ہیں؟
* ہم کتنے ڈیٹا کو سنبھالنے کی توقع کرتے ہیں؟
* ہم فی سیکنڈ کتنی درخواستوں کی توقع کرتے ہیں؟
* پڑھنے کا متوقع تناسب کیا ہے؟

<a id="step-2-create-a-high-level-design"></a>
### مرحلہ 2: ایک اعلیٰ سطحی ڈیزائن بنائیں

تمام اہم اجزاء کے ساتھ ایک اعلیٰ سطحی ڈیزائن کا خاکہ بنائیں۔

* اہم اجزاء اور کنکشن کا خاکہ بنائیں
* اپنے خیالات کا جواز پیش کریں۔

<a id="step-3-design-core-components"></a>
### مرحلہ 3: بنیادی اجزاء کو ڈیزائن کریں۔

ہر بنیادی جزو کی تفصیلات میں غوطہ لگائیں۔  مثال کے طور پر، اگر آپ سے کہا گیا تھا۔ [یو آر ایل مختصر کرنے کی خدمت کو ڈیزائن کریں۔](solutions/system_design/pastebin/README.md) بحث کریں:

* مکمل یو آر ایل کا ہیش بنانا اور اسٹور کرنا
    * [MD5](solutions/system_design/pastebin/README.md) اور [بیس 62](solutions/system_design/pastebin/README.md)
* ہیش ٹکراؤ
* SQL یا NoSQL
* Database اسکیما
* ہیشڈ یو آر ایل کا مکمل یو آر ایل میں ترجمہ کرنا
* Database تلاش
* API اور آبجیکٹ پر مبنی ڈیزائن

<a id="step-4-scale-the-design"></a>
### مرحلہ 4: ڈیزائن کی پیمائش کریں۔

رکاوٹوں کو دیکھتے ہوئے رکاوٹوں کی نشاندہی کریں اور ان کو دور کریں۔  مثال کے طور پر، کیا آپ کو scalability مسائل کو حل کرنے کے لیے درج ذیل کی ضرورت ہے؟

* Load balancer
* افقی اسکیلنگ
* Caching
* Database sharding

ممکنہ حل اور تجارت سے متعلق امور پر تبادلہ خیال کریں۔  سب کچھ سودا ہے۔  استعمال کرتے ہوئے رکاوٹوں کو دور کریں۔ [توسیع پذیر system design کے اصول](#index-of-system-design-topics).

<a id="back-of-the-envelope-calculations"></a>
### لفافے کے پیچھے کا حساب

آپ سے ہاتھ سے کچھ تخمینہ لگانے کو کہا جا سکتا ہے۔  سے رجوع کریں۔ [اپینڈکس](#appendix) درج ذیل وسائل کے لیے:

* [لفافے کے حساب کے پیچھے استعمال کریں۔](http://highscalability.com/blog/2011/1/26/google-pro-tip-use-back-of-the-envelope-calculations-to-choo.html)
* [دو میز کی طاقتیں۔](#powers-of-two-table)
* [Latency نمبر ہر پروگرامر کو معلوم ہونا چاہئے۔](#latency-numbers-every-programmer-should-know)

<a id="sources-and-further-reading"></a>
### ماخذ اور مزید پڑھنا

کیا توقع کی جائے اس کا بہتر اندازہ حاصل کرنے کے لیے درج ذیل لنکس کو دیکھیں۔

* [سسٹم ڈیزائن انٹرویو کیسے حاصل کریں۔](https://web.archive.org/web/20210505130322/https://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/)
* [system design انٹرویو](http://www.hiredintech.com/system-design)
* [آرکیٹیکچر اور سسٹمز ڈیزائن انٹرویوز کا تعارف](https://www.youtube.com/watch?v=ZgdS0EUmn70)
* [System design ٹیمپلیٹ](https://leetcode.com/discuss/career/229177/My-System-Design-Template)

<a id="system-design-interview-questions-with-solutions"></a>
## System design حل کے ساتھ انٹرویو کے سوالات

> عام system design انٹرویو کے سوالات جن میں نمونے کے مباحث، کوڈ اور خاکے شامل ہیں۔
>
> `solutions/` فولڈر میں مواد سے منسلک حل۔

|سوال| |
|---|---|
|ڈیزائن Pastebin.com (یا Bit.ly)| [حل](solutions/system_design/pastebin/README.md) |
|Twitter ٹائم لائن ڈیزائن کریں اور تلاش کریں (یا Facebook فیڈ اور تلاش کریں)| [حل](solutions/system_design/twitter/README.md) |
|ایک ویب کرالر ڈیزائن کریں۔| [حل](solutions/system_design/web_crawler/README.md) |
|Mint.com ڈیزائن کریں۔| [حل](solutions/system_design/mint/README.md) |
|سوشل نیٹ ورک کے لیے ڈیٹا ڈھانچے کو ڈیزائن کریں۔| [حل](solutions/system_design/social_graph/README.md) |
|سرچ انجن کے لیے کلیدی قدر کی دکان ڈیزائن کریں۔| [حل](solutions/system_design/query_cache/README.md) |
|زمرہ کی خصوصیت کے لحاظ سے ایمیزون کی فروخت کی درجہ بندی کو ڈیزائن کریں۔| [حل](solutions/system_design/sales_rank/README.md) |
|ایک ایسا سسٹم ڈیزائن کریں جو AWS پر لاکھوں صارفین تک پہنچ جائے۔| [حل](solutions/system_design/scaling_aws/README.md) |
|ایک system design سوال شامل کریں۔| [تعاون کریں۔](#contributing) |

<a id="design-pastebincom-or-bitly"></a>
### ڈیزائن Pastebin.com (یا Bit.ly)

[ورزش اور حل دیکھیں](solutions/system_design/pastebin/README.md)

! [Imgur](images/4edXG0T.png)

<a id="design-the-twitter-timeline-and-search-or-facebook-feed-and-search"></a>
### Twitter ٹائم لائن ڈیزائن کریں اور تلاش کریں (یا Facebook فیڈ اور تلاش کریں)

[ورزش اور حل دیکھیں](solutions/system_design/twitter/README.md)

! [Imgur](images/jrUBAF7.png)

<a id="design-a-web-crawler"></a>
### ایک ویب کرالر ڈیزائن کریں۔

[ورزش اور حل دیکھیں](solutions/system_design/web_crawler/README.md)

! [Imgur](images/bWxPtQA.png)

<a id="design-mintcom"></a>
### Mint.com ڈیزائن کریں۔

[ورزش اور حل دیکھیں](solutions/system_design/mint/README.md)

! [Imgur](images/V5q57vU.png)

<a id="design-the-data-structures-for-a-social-network"></a>
### سوشل نیٹ ورک کے لیے ڈیٹا ڈھانچے کو ڈیزائن کریں۔

[ورزش اور حل دیکھیں](solutions/system_design/social_graph/README.md)

! [Imgur](images/cdCv5g7.png)

<a id="design-a-key-value-store-for-a-search-engine"></a>
### سرچ انجن کے لیے کلیدی قدر کی دکان ڈیزائن کریں۔

[ورزش اور حل دیکھیں](solutions/system_design/query_cache/README.md)

! [Imgur](images/4j99mhe.png)

<a id="design-amazons-sales-ranking-by-category-feature"></a>
### زمرہ کی خصوصیت کے لحاظ سے ایمیزون کی فروخت کی درجہ بندی کو ڈیزائن کریں۔

[ورزش اور حل دیکھیں](solutions/system_design/sales_rank/README.md)

! [Imgur](images/MzExP06.png)

<a id="design-a-system-that-scales-to-millions-of-users-on-aws"></a>
### ایک ایسا سسٹم ڈیزائن کریں جو AWS پر لاکھوں صارفین تک پہنچ جائے۔

[ورزش اور حل دیکھیں](solutions/system_design/scaling_aws/README.md)

! [Imgur](images/jj3A5N8.png)

<a id="object-oriented-design-interview-questions-with-solutions"></a>
## حل کے ساتھ آبجیکٹ پر مبنی ڈیزائن انٹرویو کے سوالات

> نمونے کے مباحثوں، کوڈ اور خاکوں کے ساتھ مشترکہ آبجیکٹ پر مبنی ڈیزائن انٹرویو کے سوالات۔
>
> `solutions/` فولڈر میں مواد سے منسلک حل۔

>**نوٹ: یہ سیکشن زیر ترقی ہے**

|سوال| |
|---|---|
|ہیش کا نقشہ ڈیزائن کریں۔| [حل](solutions/object_oriented_design/hash_table/hash_map.ipynb)  |
|کم از کم حال ہی میں استعمال شدہ cache ڈیزائن کریں۔| [حل](solutions/object_oriented_design/lru_cache/lru_cache.ipynb)  |
|کال سینٹر ڈیزائن کریں۔| [حل](solutions/object_oriented_design/call_center/call_center.ipynb)  |
|کارڈز کا ڈیک ڈیزائن کریں۔| [حل](solutions/object_oriented_design/deck_of_cards/deck_of_cards.ipynb)  |
|پارکنگ لاٹ ڈیزائن کریں۔| [حل](solutions/object_oriented_design/parking_lot/parking_lot.ipynb)  |
|چیٹ سرور ڈیزائن کریں۔| [حل](solutions/object_oriented_design/online_chat/online_chat.ipynb)  |
|ایک سرکلر سرنی ڈیزائن کریں۔| [تعاون کریں۔](#contributing)  |
|آبجیکٹ پر مبنی ڈیزائن کا سوال شامل کریں۔| [تعاون کریں۔](#contributing) |

<a id="system-design-topics-start-here"></a>
## System design موضوعات: یہاں سے شروع کریں۔

system design میں نئے ہیں؟

سب سے پہلے، آپ کو عام اصولوں کی بنیادی تفہیم کی ضرورت ہوگی، یہ سیکھنا ہوگا کہ وہ کیا ہیں، ان کا استعمال کیسے کیا جاتا ہے، اور ان کے فائدے اور نقصانات۔

<a id="step-1-review-the-scalability-video-lecture"></a>
### مرحلہ 1: scalability ویڈیو لیکچر کا جائزہ لیں۔

[ہارورڈ میں Scalability لیکچر](https://www.youtube.com/watch?v=-W9F__D3oY4)

* شامل موضوعات:
* عمودی اسکیلنگ
* افقی اسکیلنگ
* Caching
* لوڈ بیلنسنگ
* Database replication
* Database partitioning

<a id="step-2-review-the-scalability-article"></a>
### مرحلہ 2: scalability مضمون کا جائزہ لیں۔

[Scalability](https://web.archive.org/web/20221030091841/http://www.lecloud.net/tagged/scalability/chrono)

* شامل موضوعات:
    * [کلون](https://web.archive.org/web/20220530193911/https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
    * [ڈیٹا بیس](https://web.archive.org/web/20220602114024/https://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
    * [کیچز](https://web.archive.org/web/20230126233752/https://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
    * [اسینکرونزم](https://web.archive.org/web/20220926171507/https://www.lecloud.net/post/9699762917/scalability-for-dummies-part-4-asynchronism)

<a id="next-steps"></a>
### اگلے اقدامات

اگلا، ہم اعلیٰ سطحی تجارت کو دیکھیں گے:

* **کارکردگی** بمقابلہ **scalability**
* **Latency** بمقابلہ **throughput**
* **Availability** بمقابلہ **مستقل مزاجی**

اس بات کو ذہن میں رکھیں کہ **سب کچھ ایک تجارت ہے**۔

پھر ہم مزید مخصوص موضوعات جیسے DNS، CDNs، اور لوڈ بیلنسرز میں غوطہ لگائیں گے۔

<a id="performance-vs-scalability"></a>
## کارکردگی بمقابلہ scalability

ایک سروس **توسیع پذیر** ہوتی ہے اگر اس کے نتیجے میں **کارکردگی** میں اضافہ ہوتا ہے اس انداز میں کہ وسائل کو شامل کیا جاتا ہے۔ عام طور پر، کارکردگی میں اضافہ کا مطلب کام کی مزید اکائیوں کی خدمت کرنا ہے، لیکن یہ کام کی بڑی اکائیوں کو سنبھالنا بھی ہو سکتا ہے، جیسے کہ ڈیٹا سیٹس بڑھنے پر۔<sup><a href=http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html>1</a></sup>

scalability بمقابلہ کارکردگی کو دیکھنے کا ایک اور طریقہ:

* اگر آپ کو **کارکردگی** کا مسئلہ ہے، تو آپ کا سسٹم ایک صارف کے لیے سست ہے۔
* اگر آپ کو **scalability** مسئلہ ہے، تو آپ کا سسٹم ایک صارف کے لیے تیز ہے لیکن بھاری بوجھ کے تحت سست ہے۔

<a id="sources-and-further-reading-1"></a>
### ماخذ اور مزید پڑھنا

* [scalability پر ایک لفظ](http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html)
* [Scalability، availability، استحکام، پیٹرن](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)

<a id="latency-vs-throughput"></a>
## Latency بمقابلہ throughput

**Latency** کچھ عمل کرنے یا کچھ نتیجہ پیدا کرنے کا وقت ہے۔

**Throughput** فی یونٹ وقت کی ایسی کارروائیوں یا نتائج کی تعداد ہے۔

عام طور پر، آپ کو **قابل قبول latency** کے ساتھ **زیادہ سے زیادہ throughput** کا ہدف بنانا چاہیے۔

<a id="sources-and-further-reading-2"></a>
### ماخذ اور مزید پڑھنا

* [latency بمقابلہ throughput کو سمجھنا](https://community.cadence.com/cadence_blogs_8/b/fv/posts/understanding-latency-vs-throughput)

<a id="availability-vs-consistency"></a>
## Availability بمقابلہ مستقل مزاجی۔

<a id="cap-theorem"></a>
### CAP تھیوریم

<p align="center">
  <img src="images/bgLMI2u.png">
  <br/>
  <i><a href="https://robertgreiner.com/cap-theorem-revisited">Source: CAP theorem revisited</a></i>
</p>

تقسیم شدہ کمپیوٹر سسٹم میں، آپ درج ذیل میں سے صرف دو ضمانتوں کی حمایت کر سکتے ہیں:

* **Consistency** - ہر پڑھنے کو تازہ ترین تحریر یا غلطی موصول ہوتی ہے۔
* **Availability** - ہر درخواست کو جواب موصول ہوتا ہے، اس بات کی ضمانت کے بغیر کہ اس میں معلومات کا تازہ ترین ورژن موجود ہے۔
* **Partition Tolerance** - نیٹ ورک کی ناکامی کی وجہ سے صوابدیدی partitioning کے باوجود سسٹم کام کرتا رہتا ہے

*نیٹ ورک قابل بھروسہ نہیں ہیں، لہذا آپ کو تقسیم رواداری کی حمایت کرنے کی ضرورت ہوگی۔  آپ کو مستقل مزاجی اور availability کے درمیان سافٹ ویئر ٹریڈ آف کرنے کی ضرورت ہوگی۔*

<a id="cp-consistency-and-partition-tolerance"></a>
<a id="cp---consistency-and-partition-tolerance"></a>
#### CP - مستقل مزاجی اور تقسیم رواداری

تقسیم شدہ نوڈ سے جواب کا انتظار کرنے کے نتیجے میں ٹائم آؤٹ کی خرابی ہو سکتی ہے۔  CP ایک اچھا انتخاب ہے اگر آپ کے کاروبار کو ایٹم پڑھنے اور لکھنے کی ضرورت ہے۔

<a id="ap-availability-and-partition-tolerance"></a>
<a id="ap---availability-and-partition-tolerance"></a>
#### AP - availability اور تقسیم رواداری

جوابات کسی بھی نوڈ پر دستیاب ڈیٹا کا سب سے زیادہ آسانی سے دستیاب ورژن واپس کرتے ہیں، جو شاید تازہ ترین نہ ہو۔  تقسیم کے حل ہونے پر تحریروں کو پھیلانے میں کچھ وقت لگ سکتا ہے۔

اگر کاروبار کو اجازت دینے کی ضرورت ہو تو AP ایک اچھا انتخاب ہے۔ [حتمی مستقل مزاجی](#eventual-consistency) یا جب نظام کو بیرونی خرابیوں کے باوجود کام جاری رکھنے کی ضرورت ہو۔

<a id="sources-and-further-reading-3"></a>
### ماخذ اور مزید پڑھنا

* [CAP تھیوریم پر نظرثانی کی گئی۔](https://robertgreiner.com/cap-theorem-revisited/)
* [CAP تھیوریم کا سادہ انگریزی تعارف](http://ksat.me/a-plain-english-introduction-to-cap-theorem)
* [CAP اکثر پوچھے گئے سوالات](https://github.com/henryr/cap-faq)
* [CAP نظریہ](https://www.youtube.com/watch?v=k-Yaq8AHlFA)

<a id="consistency-patterns"></a>
## Consistency پیٹرن

ایک ہی ڈیٹا کی متعدد کاپیوں کے ساتھ، ہمیں ان اختیارات کا سامنا کرنا پڑتا ہے کہ ان کو کیسے ہم آہنگ کیا جائے تاکہ کلائنٹس کو ڈیٹا کا مستقل نظریہ ہو۔  سے مستقل مزاجی کی تعریف یاد کریں۔ [CAP تھیوریم](#cap-theorem) - ہر پڑھنے والے کو تازہ ترین تحریر یا غلطی ملتی ہے۔

<a id="weak-consistency"></a>
### کمزور مستقل مزاجی۔

لکھنے کے بعد، پڑھتا ہے اسے دیکھ سکتا ہے یا نہیں دیکھ سکتا۔  ایک بہترین کوشش کا طریقہ اختیار کیا جاتا ہے۔

یہ نقطہ نظر memcached جیسے سسٹمز میں دیکھا جاتا ہے۔  کمزور مستقل مزاجی حقیقی وقت کے استعمال کے معاملات جیسے کہ VoIP، ویڈیو چیٹ، اور ریئل ٹائم ملٹی پلیئر گیمز میں اچھی طرح کام کرتی ہے۔  مثال کے طور پر، اگر آپ فون کال پر ہیں اور چند سیکنڈ کے لیے استقبالیہ سے محروم ہو جاتے ہیں، جب آپ کنکشن دوبارہ حاصل کر لیتے ہیں تو آپ کو وہ بات نہیں سنائی دیتی جو کنکشن کے نقصان کے دوران بولی گئی تھی۔

<a id="eventual-consistency"></a>
### حتمی مستقل مزاجی

لکھنے کے بعد، پڑھنے والے آخر میں اسے دیکھیں گے (عام طور پر ملی سیکنڈ میں)۔  ڈیٹا کو متضاد طور پر نقل کیا جاتا ہے۔

یہ نقطہ نظر DNS اور ای میل جیسے سسٹمز میں دیکھا جاتا ہے۔  حتمی مستقل مزاجی انتہائی دستیاب نظاموں میں اچھی طرح کام کرتی ہے۔

<a id="strong-consistency"></a>
### مضبوط مستقل مزاجی ۔

لکھنے کے بعد پڑھنے والے اسے دیکھیں گے۔  ڈیٹا کو ہم وقت سازی سے نقل کیا جاتا ہے۔

یہ نقطہ نظر فائل سسٹمز اور RDBMSes میں دیکھا جاتا ہے۔  مضبوط مستقل مزاجی ان سسٹمز میں اچھی طرح کام کرتی ہے جن کو لین دین کی ضرورت ہوتی ہے۔

<a id="sources-and-further-reading-4"></a>
### ماخذ اور مزید پڑھنا

* [ڈیٹا سینٹرز میں لین دین](http://snarfed.org/transactions_across_datacenters_io.html)

<a id="availability-patterns"></a>
## Availability پیٹرن

اعلی availability کو سپورٹ کرنے کے لیے دو تکمیلی نمونے ہیں: **فیل اوور** اور **replication**۔

<a id="fail-over"></a>
### فیل اوور

<a id="active-passive"></a>
#### فعال غیر فعال

فعال-غیر فعال فیل اوور کے ساتھ، اسٹینڈ بائی پر ایکٹو اور غیر فعال سرور کے درمیان دل کی دھڑکنیں بھیجی جاتی ہیں۔  اگر دل کی دھڑکن میں خلل پڑتا ہے تو، غیر فعال سرور ایکٹیو کے IP ایڈریس پر قبضہ کر لیتا ہے اور سروس دوبارہ شروع کر دیتا ہے۔

ڈاؤن ٹائم کی لمبائی کا تعین اس بات سے ہوتا ہے کہ آیا غیر فعال سرور پہلے سے ہی 'ہاٹ' اسٹینڈ بائی میں چل رہا ہے یا اسے 'کولڈ' اسٹینڈ بائی سے شروع کرنے کی ضرورت ہے۔  صرف ایکٹو سرور ٹریفک کو ہینڈل کرتا ہے۔

فعال-غیر فعال فیل اوور کو ماسٹر غلام فیل اوور بھی کہا جا سکتا ہے۔

<a id="active-active"></a>
#### فعال-فعال

ایکٹیو ایکٹو میں، دونوں سرور ٹریفک کا انتظام کر رہے ہیں، ان کے درمیان بوجھ پھیلا رہے ہیں۔

اگر سرورز عوامی سطح پر ہیں، DNS کو دونوں سرورز کے عوامی IPs کے بارے میں جاننے کی ضرورت ہوگی۔  اگر سرورز اندرونی طرف ہیں تو، ایپلیکیشن منطق کو دونوں سرورز کے بارے میں جاننے کی ضرورت ہوگی۔

ایکٹیو ایکٹو فیل اوور کو ماسٹر ماسٹر فیل اوور بھی کہا جا سکتا ہے۔

<a id="disadvantages-failover"></a>
### نقصانات: فیل اوور

* فیل اوور مزید ہارڈ ویئر اور اضافی پیچیدگی کا اضافہ کرتا ہے۔
* ڈیٹا کے ضائع ہونے کا امکان ہے اگر کسی نئے تحریری ڈیٹا کو غیر فعال میں نقل کیے جانے سے پہلے فعال نظام ناکام ہوجاتا ہے۔

<a id="replication"></a>
### Replication

<a id="master-slave-and-master-master"></a>
#### Master-غلام اور آقا-آقا

اس موضوع پر مزید بحث کی گئی ہے۔ [Database](#database) سیکشن:

* [Master-غلام replication](#master-slave-replication)
* [Master-ماسٹر replication](#master-master-replication)

<a id="availability-in-numbers"></a>
### نمبروں میں Availability

Availability کو اکثر اپ ٹائم (یا ڈاؤن ٹائم) کے حساب سے سروس کے دستیاب ہونے کے فیصد کے حساب سے مقرر کیا جاتا ہے۔  Availability کو عام طور پر 9s کی تعداد میں ماپا جاتا ہے -- 99.99% availability والی سروس کو چار 9s کے طور پر بیان کیا جاتا ہے۔

<a id="999-availability-three-9s"></a>
#### 99.9% availability - تین 9s

|دورانیہ|قابل قبول ڈاؤن ٹائم|
|---------------------|--------------------|
|ڈاؤن ٹائم فی سال|8 گھنٹے 45 منٹ 57 سیکنڈ|
|ڈاؤن ٹائم فی مہینہ|43m 49.7 سیکنڈ|
|ڈاون ٹائم فی ہفتہ|10 میٹر 4.8 سیکنڈ|
|ڈاؤن ٹائم فی دن|1 منٹ 26.4 سیکنڈ|

<a id="9999-availability-four-9s"></a>
#### 99.99% availability - چار 9s

|دورانیہ|قابل قبول ڈاؤن ٹائم|
|---------------------|--------------------|
|ڈاؤن ٹائم فی سال|52 منٹ 35.7 سیکنڈ|
|ڈاؤن ٹائم فی مہینہ|4 منٹ 23 سیکنڈ|
|ڈاون ٹائم فی ہفتہ|1 منٹ 5 سیکنڈ|
|ڈاؤن ٹائم فی دن|8.6 سیکنڈ|

<a id="availability-in-parallel-vs-in-sequence"></a>
#### Availability متوازی بمقابلہ ترتیب میں

اگر کوئی سروس ناکامی کا شکار متعدد اجزاء پر مشتمل ہے، تو سروس کا مجموعی availability اس بات پر منحصر ہے کہ اجزاء ترتیب میں ہیں یا متوازی۔

<a id="in-sequence"></a>
###### ترتیب میں

مجموعی طور پر availability اس وقت کم ہوتا ہے جب availability <100% والے دو اجزاء ترتیب میں ہوں:

```
Availability (Total) = Availability (Foo) * Availability (Bar)
```

اگر `Foo` اور `Bar` دونوں میں سے ہر ایک کا 99.9% availability ہے، تو ترتیب میں ان کا کل availability 99.8% ہوگا۔

<a id="in-parallel"></a>
###### متوازی میں

مجموعی طور پر availability بڑھتا ہے جب availability <100% والے دو اجزاء متوازی ہوں:

```
Availability (Total) = 1 - (1 - Availability (Foo)) * (1 - Availability (Bar))
```

اگر `Foo` اور `Bar` دونوں میں 99.9% availability ہے تو متوازی طور پر ان کا کل availability 99.9999% ہوگا۔

<a id="domain-name-system"></a>
## ڈومین نام کا نظام

<p align="center">
  <img src="images/IOyLj4i.jpg">
  <br/>
  <i><a href=http://www.slideshare.net/srikrupa5/dns-security-presentation-issa>Source: DNS security presentation</a></i>
</p>

ڈومین نیم سسٹم (DNS) ڈومین نام کا ترجمہ کرتا ہے جیسے www.example.com کو IP ایڈریس میں۔

DNS درجہ بندی ہے، اوپر کی سطح پر چند مستند سرورز کے ساتھ۔  آپ کا روٹر یا ISP اس بارے میں معلومات فراہم کرتا ہے کہ تلاش کرتے وقت کن DNS سرورز سے رابطہ کرنا ہے۔  نچلی سطح کے DNS سرورز cache میپنگز، جو DNS پروپیگیشن میں تاخیر کی وجہ سے باسی ہو سکتے ہیں۔  DNS نتائج کو آپ کے براؤزر یا OS کے ذریعے ایک خاص مدت کے لیے کیش کیا جا سکتا ہے، جس کا تعین [رہنے کا وقت (TTL)](https://en.wikipedia.org/wiki/Time_to_live).

* **NS ریکارڈ (نام سرور)** - آپ کے ڈومین/سب ڈومین کے لیے DNS سرورز کی وضاحت کرتا ہے۔
* **MX ریکارڈ (میل ایکسچینج)** - پیغامات قبول کرنے کے لیے میل سرورز کی وضاحت کرتا ہے۔
* **ایک ریکارڈ (ایڈریس)** - IP ایڈریس کی طرف ایک نام کی نشاندہی کرتا ہے۔
* **CNAME (کیننیکل)** - کسی نام کو دوسرے نام یا `CNAME` (example.com to www.example.com) یا `A` ریکارڈ کی طرف اشارہ کرتا ہے۔

خدمات جیسے [کلاؤڈ فلیئر](https://www.cloudflare.com/dns/) اور [راستہ 53](https://aws.amazon.com/route53/) منظم DNS خدمات فراہم کریں۔  کچھ DNS سروسز ٹریفک کو مختلف طریقوں سے روٹ کر سکتی ہیں:

* [وزنی راؤنڈ رابن](https://www.jscape.com/blog/load-balancing-algorithms)
* ٹریفک کو دیکھ بھال کے تحت سرورز پر جانے سے روکیں۔
* مختلف کلسٹر سائز کے درمیان توازن
* A/B ٹیسٹنگ
* [Latency پر مبنی](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html)
* [جغرافیائی محل وقوع پر مبنی](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html)

<a id="disadvantages-dns"></a>
### نقصانات: DNS

* DNS سرور تک رسائی میں تھوڑی تاخیر ہوتی ہے، حالانکہ اوپر بیان کردہ caching کے ذریعے اس میں تخفیف کی گئی ہے۔
* DNS سرور کا انتظام پیچیدہ ہوسکتا ہے اور عام طور پر اس کا انتظام کیا جاتا ہے۔ [حکومتیں، آئی ایس پیز، اور بڑی کمپنیاں](http://superuser.com/questions/472695/who-controls-the-dns-servers/472729).
* DNS خدمات حال ہی میں آئی ہیں۔ [DDoS حملہ](http://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/) ، صارفین کو Twitter کے IP ایڈریس کو جانے بغیر Twitter جیسی ویب سائٹس تک رسائی سے روکنا۔

<a id="sources-and-further-reading-5"></a>
### ماخذ اور مزید پڑھنا

* [DNS فن تعمیر](https://technet.microsoft.com/en-us/library/dd197427(v=ws.10).aspx)
* [ویکیپیڈیا](https://en.wikipedia.org/wiki/Domain_Name_System)
* [DNS مضامین](https://support.dnsimple.com/categories/dns/)

<a id="content-delivery-network"></a>
## مواد کی ترسیل کا نیٹ ورک

<p align="center">
  <img src="images/h9TAuGI.jpg">
  <br/>
  <i><a href=https://www.creative-artworks.eu/why-use-a-content-delivery-network-cdn/>Source: Why use a CDN</a></i>
</p>

مواد کی ترسیل کا نیٹ ورک (CDN) پراکسی سرورز کا عالمی سطح پر تقسیم کردہ نیٹ ورک ہے، جو صارف کے قریب کے مقامات سے مواد پیش کرتا ہے۔  عام طور پر، جامد فائلیں جیسے HTML/CSS/JS، تصاویر، اور ویڈیوز CDN سے پیش کی جاتی ہیں، حالانکہ کچھ CDNs جیسے Amazon کے CloudFront متحرک مواد کی حمایت کرتے ہیں۔  سائٹ کی DNS ریزولوشن کلائنٹس کو بتائے گی کہ کس سرور سے رابطہ کرنا ہے۔

CDNs سے مواد پیش کرنا دو طریقوں سے کارکردگی کو نمایاں طور پر بہتر بنا سکتا ہے:

* صارفین اپنے قریبی ڈیٹا سینٹرز سے مواد وصول کرتے ہیں۔
* آپ کے سرورز کو ایسی درخواستیں پیش کرنے کی ضرورت نہیں ہے جو CDN پوری کرتی ہے۔

<a id="push-cdns"></a>
### CDNs کو دھکیلیں۔

جب بھی آپ کے سرور پر تبدیلیاں آتی ہیں تو پش سی ڈی این کو نیا مواد موصول ہوتا ہے۔  آپ مواد فراہم کرنے، CDN پر براہ راست اپ لوڈ کرنے اور CDN کی طرف اشارہ کرنے کے لیے URL کو دوبارہ لکھنے کی پوری ذمہ داری لیتے ہیں۔  آپ کنفیگر کر سکتے ہیں کہ مواد کب ختم ہوتا ہے اور کب اپ ڈیٹ ہوتا ہے۔  مواد صرف اس وقت اپ لوڈ کیا جاتا ہے جب یہ نیا یا تبدیل ہو، ٹریفک کو کم سے کم، لیکن زیادہ سے زیادہ اسٹوریج۔

بہت کم ٹریفک والی سائٹس یا مواد کے ساتھ سائٹس جو اکثر اپ ڈیٹ نہیں ہوتی ہیں پش CDNs کے ساتھ اچھی طرح کام کرتی ہیں۔  مواد کو CDNs پر ایک بار رکھا جاتا ہے، بجائے اس کے کہ باقاعدہ وقفوں پر دوبارہ کھینچا جائے۔

<a id="pull-cdns"></a>
### CDNs کھینچیں۔

جب پہلا صارف مواد کی درخواست کرتا ہے تو پل CDNs اپنے سرور سے نیا مواد حاصل کریں۔  آپ مواد کو اپنے سرور پر چھوڑ دیتے ہیں اور CDN کی طرف اشارہ کرنے کے لیے URLs کو دوبارہ لکھتے ہیں۔  اس کے نتیجے میں ایک سست درخواست ہوتی ہے جب تک کہ مواد کو CDN پر کیش نہیں کیا جاتا ہے۔

اے [ٹائم ٹو لائیو (TTL)](https://en.wikipedia.org/wiki/Time_to_live) یہ تعین کرتا ہے کہ مواد کتنی دیر تک محفوظ ہے۔  پل CDNs CDN پر سٹوریج کی جگہ کو کم سے کم کرتے ہیں، لیکن اگر فائلوں کی میعاد ختم ہو جاتی ہے اور حقیقت میں تبدیل ہونے سے پہلے کھینچ لی جاتی ہے تو وہ بے کار ٹریفک بنا سکتی ہے۔

بھاری ٹریفک والی سائٹیں پل CDNs کے ساتھ اچھی طرح کام کرتی ہیں، کیونکہ CDN پر حال ہی میں درخواست کردہ مواد کے ساتھ ٹریفک زیادہ یکساں طور پر پھیلا ہوا ہے۔

<a id="disadvantages-cdn"></a>
### نقصانات: CDN

* CDN لاگت ٹریفک کے لحاظ سے اہم ہو سکتی ہے، حالانکہ اس کو اضافی اخراجات کے ساتھ تولا جانا چاہیے جو آپ CDN استعمال نہ کرنے پر اٹھائیں گے۔
* اگر TTL کی میعاد ختم ہونے سے پہلے اسے اپ ڈیٹ کر دیا جائے تو مواد باسی ہو سکتا ہے۔
* CDNs کو CDN کی طرف اشارہ کرنے کے لیے جامد مواد کے لیے URLs کو تبدیل کرنے کی ضرورت ہوتی ہے۔

<a id="sources-and-further-reading-6"></a>
### ماخذ اور مزید پڑھنا

* [عالمی سطح پر تقسیم شدہ مواد کی ترسیل](https://figshare.com/articles/Globally_distributed_content_delivery/6605972)
* [پش اور پل CDNs کے درمیان فرق](https://www.geeksforgeeks.org/system-design/pull-cdn-vs-push-cdn/)
* [ویکیپیڈیا](https://en.wikipedia.org/wiki/Content_delivery_network)

<a id="load-balancer"></a>
## Load balancer

<p align="center">
  <img src="images/h81n9iK.png">
  <br/>
  <i><a href=http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html>Source: Scalable system design patterns</a></i>
</p>

لوڈ بیلنسرز آنے والی کلائنٹ کی درخواستوں کو کمپیوٹنگ کے وسائل جیسے ایپلی کیشن سرورز اور ڈیٹا بیس میں تقسیم کرتے ہیں۔  ہر صورت میں، load balancer کمپیوٹنگ وسائل سے مناسب کلائنٹ کو جواب واپس کرتا ہے۔  لوڈ بیلنسرز اس پر موثر ہیں:

* درخواستوں کو غیر صحت بخش سرورز پر جانے سے روکنا
* اوورلوڈنگ وسائل کو روکنا
* ناکامی کے ایک نقطہ کو ختم کرنے میں مدد کرنا

لوڈ بیلنسرز کو ہارڈ ویئر (مہنگا) یا HAProxy جیسے سافٹ ویئر کے ساتھ لاگو کیا جا سکتا ہے۔

اضافی فوائد میں شامل ہیں:

* **SSL برطرفی** - آنے والی درخواستوں کو ڈکرپٹ کریں اور سرور کے جوابات کو خفیہ کریں تاکہ بیک اینڈ سرورز کو یہ ممکنہ طور پر مہنگے آپریشن انجام دینے کی ضرورت نہ پڑے
* انسٹال کرنے کی ضرورت کو ہٹاتا ہے۔ [X.509 سرٹیفکیٹ](https://en.wikipedia.org/wiki/X.509) ہر سرور پر
* **سیشن استقامت** - کوکیز جاری کریں اور کسی مخصوص کلائنٹ کی درخواستوں کو اسی مثال پر روٹ کریں اگر ویب ایپس سیشنز کا ٹریک نہیں رکھتی ہیں۔

ناکامیوں سے بچانے کے لیے، ایک سے زیادہ لوڈ بیلنسرز کو ترتیب دینا عام بات ہے۔ [فعال غیر فعال](#active-passive) یا [فعال-فعال](#active-active) موڈ

لوڈ بیلنسرز مختلف میٹرکس کی بنیاد پر ٹریفک کو روٹ کر سکتے ہیں، بشمول:

* بے ترتیب
* کم سے کم بھری ہوئی
* سیشن/کوکیز
* [راؤنڈ رابن یا وزنی راؤنڈ رابن](https://www.g33kinfo.com/info/round-robin-vs-weighted-round-robin-lb)
* [پرت 4](#layer-4-load-balancing)
* [پرت 7](#layer-7-load-balancing)

<a id="layer-4-load-balancing"></a>
### پرت 4 لوڈ بیلنسنگ

پرت 4 لوڈ بیلنسرز معلومات کو دیکھتے ہیں۔ [نقل و حمل کی پرت](#communication) درخواستوں کو تقسیم کرنے کا طریقہ طے کرنے کے لیے۔  عام طور پر، اس میں سورس، منزل IP ایڈریس، اور ہیڈر میں پورٹس شامل ہوتے ہیں، لیکن پیکٹ کا مواد نہیں۔  پرت 4 لوڈ بیلنسرز نیٹ ورک پیکٹ کو اپ اسٹریم سرور پر اور اس سے آگے کرتے ہیں، کارکردگی دکھاتے ہیں۔ [نیٹ ورک ایڈریس کا ترجمہ (NAT)](https://web.archive.org/web/20240117134735/https://www.nginx.com/resources/glossary/layer-4-load-balancing/).

<a id="layer-7-load-balancing"></a>
### پرت 7 لوڈ بیلنسنگ

پرت 7 لوڈ بیلنسرز کو دیکھیں [درخواست کی پرت](#communication) درخواستوں کو تقسیم کرنے کا طریقہ طے کرنے کے لیے۔  اس میں ہیڈر، پیغام اور کوکیز کا مواد شامل ہو سکتا ہے۔  پرت 7 لوڈ بیلنسرز نیٹ ورک ٹریفک کو ختم کرتے ہیں، پیغام کو پڑھتے ہیں، لوڈ بیلنسنگ کا فیصلہ کرتے ہیں، پھر منتخب سرور سے کنکشن کھولتے ہیں۔  مثال کے طور پر، ایک پرت 7 load balancer ویڈیو ٹریفک کو ان سرورز پر بھیج سکتا ہے جو ویڈیوز کی میزبانی کرتے ہیں جبکہ زیادہ حساس صارف بلنگ ٹریفک کو سیکیورٹی سے سخت سرورز کی طرف ہدایت کرتے ہیں۔

لچک کی قیمت پر، پرت 4 کے بوجھ کے توازن کے لیے پرت 7 کے مقابلے میں کم وقت اور کمپیوٹنگ کے وسائل درکار ہوتے ہیں، حالانکہ جدید کموڈٹی ہارڈویئر پر کارکردگی کا اثر کم سے کم ہو سکتا ہے۔

<a id="horizontal-scaling"></a>
### افقی اسکیلنگ

لوڈ بیلنسرز افقی اسکیلنگ، کارکردگی کو بہتر بنانے اور availability میں بھی مدد کر سکتے ہیں۔  کموڈٹی مشینوں کا استعمال کرتے ہوئے اسکیلنگ کرنا زیادہ لاگت سے موثر ہے اور اس کے نتیجے میں زیادہ مہنگے ہارڈ ویئر پر ایک سرور کو اسکیل کرنے سے زیادہ availability ہوتا ہے، جسے **Vertical Scaling** کہتے ہیں۔  کموڈٹی ہارڈویئر پر کام کرنے والے ٹیلنٹ کی خدمات حاصل کرنا اسپیشلائزڈ انٹرپرائز سسٹمز کے مقابلے میں آسان ہے۔

<a id="disadvantages-horizontal-scaling"></a>
#### نقصانات: افقی پیمانہ

* افقی طور پر اسکیلنگ پیچیدگی کو متعارف کراتی ہے اور اس میں سرورز کی کلوننگ شامل ہے۔
* سرورز بے وطن ہونے چاہئیں: ان میں صارف سے متعلق کوئی ڈیٹا نہیں ہونا چاہیے جیسے سیشنز یا پروفائل پکچرز
* سیشنز کو سینٹرلائزڈ ڈیٹا اسٹور میں اسٹور کیا جاسکتا ہے جیسے کہ a [database](#database)(SQL, NoSQL) یا ایک مستقل [cache](#cache)(Redis, Memcached)
* ڈاؤن اسٹریم سرورز جیسے کیشز اور ڈیٹا بیس کو بیک وقت مزید کنکشنز کو سنبھالنے کی ضرورت ہے کیونکہ اپ اسٹریم سرورز کی پیمائش ختم ہوجاتی ہے۔

<a id="disadvantages-load-balancer"></a>
### نقصانات: load balancer

* load balancer کارکردگی میں رکاوٹ بن سکتا ہے اگر اس کے پاس کافی وسائل نہیں ہیں یا اگر اسے صحیح طریقے سے ترتیب نہیں دیا گیا ہے۔
* ایک load balancer کو متعارف کرانے سے ناکامی کے ایک نقطہ کو ختم کرنے میں پیچیدگی بڑھ جاتی ہے۔
* ایک load balancer ناکامی کا ایک واحد نقطہ ہے، متعدد لوڈ بیلنسرز کو ترتیب دینے سے پیچیدگی مزید بڑھ جاتی ہے۔

<a id="sources-and-further-reading-7"></a>
### ماخذ اور مزید پڑھنا

* [NGINX فن تعمیر](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
* [HAProxy آرکیٹیکچر گائیڈ](http://www.haproxy.org/download/1.2/doc/architecture.txt)
* [Scalability](https://web.archive.org/web/20220530193911/https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
* [ویکیپیڈیا](https://en.wikipedia.org/wiki/Load_balancing_(computing))
* [پرت 4 لوڈ بیلنسنگ](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)
* [پرت 7 لوڈ بیلنسنگ](https://www.nginx.com/resources/glossary/layer-7-load-balancing/)
* [ELB سننے والے کی ترتیب](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html)

<a id="reverse-proxy-web-server"></a>
## ریورس پراکسی (ویب سرور)

<p align="center">
  <img src="images/n41Azff.png">
  <br/>
  <i><a href=https://upload.wikimedia.org/wikipedia/commons/6/67/Reverse_proxy_h2g2bob.svg>Source: Wikipedia</a></i>
  <br/>
</p>

ریورس پراکسی ایک ویب سرور ہے جو اندرونی خدمات کو مرکزی بناتا ہے اور عوام کو متحد انٹرفیس فراہم کرتا ہے۔  کلائنٹس کی طرف سے درخواستیں ایک سرور کو بھیجی جاتی ہیں جو ریورس پراکسی کلائنٹ کو سرور کا جواب واپس کرنے سے پہلے اسے پورا کر سکتا ہے۔

اضافی فوائد میں شامل ہیں:

* **سیکیورٹی میں اضافہ** - بیک اینڈ سرورز، بلیک لسٹ آئی پیز، فی کلائنٹ کنکشنز کی محدود تعداد کے بارے میں معلومات چھپائیں
* **زیادہ scalability اور لچک** - کلائنٹ صرف ریورس پراکسی کا IP دیکھتے ہیں، جس سے آپ سرورز کو اسکیل کرسکتے ہیں یا ان کی کنفیگریشن تبدیل کرسکتے ہیں۔
* **SSL برطرفی** - آنے والی درخواستوں کو ڈکرپٹ کریں اور سرور کے جوابات کو خفیہ کریں تاکہ بیک اینڈ سرورز کو یہ ممکنہ طور پر مہنگے آپریشن انجام دینے کی ضرورت نہ پڑے
* انسٹال کرنے کی ضرورت کو ہٹاتا ہے۔ [X.509 سرٹیفکیٹ](https://en.wikipedia.org/wiki/X.509) ہر سرور پر
* **کمپریشن** - سرور کے جوابات کو کمپریس کریں۔
* **Caching** - کیش شدہ درخواستوں کا جواب واپس کریں۔
* **جامد مواد** - جامد مواد کو براہ راست پیش کریں۔
* HTML/CSS/JS
* تصاویر
* ویڈیوز
*وغیرہ

<a id="load-balancer-vs-reverse-proxy"></a>
### Load balancer بمقابلہ ریورس پراکسی

* load balancer کی تعیناتی مفید ہے جب آپ کے پاس متعدد سرورز ہوں۔  اکثر، لوڈ بیلنسرز ٹریفک کو ایک ہی فنکشن کی خدمت کرنے والے سرورز کے سیٹ تک لے جاتے ہیں۔
* ریورس پراکسی صرف ایک ویب سرور یا ایپلیکیشن سرور کے ساتھ بھی کارآمد ثابت ہوسکتی ہیں، جو پچھلے حصے میں بیان کردہ فوائد کو کھولتی ہیں۔
* حل جیسے NGINX اور HAProxy دونوں لیئر 7 ریورس پراکسینگ اور لوڈ بیلنسنگ کو سپورٹ کر سکتے ہیں۔

<a id="disadvantages-reverse-proxy"></a>
### نقصانات: ریورس پراکسی

* ریورس پراکسی متعارف کرانے سے پیچیدگی میں اضافہ ہوتا ہے۔
* ایک واحد ریورس پراکسی ناکامی کا واحد نقطہ ہے، متعدد ریورس پراکسیوں کو ترتیب دیتا ہے (یعنی ایک [ناکامی](https://en.wikipedia.org/wiki/Failover)) پیچیدگی کو مزید بڑھاتا ہے۔

<a id="sources-and-further-reading-8"></a>
### ماخذ اور مزید پڑھنا

* [ریورس پراکسی بمقابلہ load balancer](https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/)
* [NGINX فن تعمیر](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
* [HAProxy آرکیٹیکچر گائیڈ](http://www.haproxy.org/download/1.2/doc/architecture.txt)
* [ویکیپیڈیا](https://en.wikipedia.org/wiki/Reverse_proxy)

<a id="application-layer"></a>
## درخواست کی پرت

<p align="center">
  <img src="images/yB5SYwm.png">
  <br/>
  <i><a href=http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer>Source: Intro to architecting systems for scale</a></i>
</p>

ویب پرت کو ایپلیکیشن لیئر (جسے پلیٹ فارم لیئر بھی کہا جاتا ہے) سے الگ کرنا آپ کو دونوں پرتوں کو آزادانہ طور پر پیمانہ اور ترتیب دینے کی اجازت دیتا ہے۔  ایک نیا API شامل کرنے کے نتیجے میں ایپلیکیشن سرورز کو شامل کیا جائے گا، بغیر ضروری طور پر اضافی ویب سرورز شامل کیے جائیں۔  **ذمہ داری کا واحد اصول** چھوٹی اور خود مختار خدمات کی وکالت کرتا ہے جو مل کر کام کرتی ہیں۔  چھوٹی خدمات والی چھوٹی ٹیمیں تیز رفتار ترقی کے لیے زیادہ جارحانہ انداز میں منصوبہ بندی کر سکتی ہیں۔

ایپلی کیشن پرت میں کارکن بھی فعال کرنے میں مدد کرتے ہیں۔ [ہم آہنگی](#asynchronism).

<a id="microservices"></a>
### Microservices

اس بحث سے متعلق ہیں۔ [microservices](https://en.wikipedia.org/wiki/Microservices) ، جسے آزادانہ طور پر قابل تعینات، چھوٹی، ماڈیولر خدمات کے سوٹ کے طور پر بیان کیا جا سکتا ہے۔  ہر سروس ایک منفرد عمل چلاتی ہے اور کاروباری مقصد کو پورا کرنے کے لیے ایک اچھی طرح سے متعین، ہلکے وزن کے طریقہ کار کے ذریعے بات چیت کرتی ہے۔ <sup><a href=https://smartbear.com/learn/api-design/what-are-microservices>1</a></sup>

مثال کے طور پر، Pinterest میں درج ذیل microservices ہو سکتا ہے: صارف کا پروفائل، پیروکار، فیڈ، تلاش، تصویر اپ لوڈ، وغیرہ۔

<a id="service-discovery"></a>
### Service Discovery

سسٹمز جیسے [قونصل](https://www.consul.io/docs/index.html), [وغیرہ](https://coreos.com/etcd/docs/latest) ، اور [چڑیا گھر](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) رجسٹرڈ ناموں، پتوں اور بندرگاہوں کا سراغ لگا کر خدمات کو ایک دوسرے کو تلاش کرنے میں مدد کر سکتے ہیں۔ [صحت کی جانچ](https://www.consul.io/intro/getting-started/checks.html) سروس کی سالمیت کی توثیق کرنے میں مدد کریں اور اکثر ایک کا استعمال کرتے ہوئے کیا جاتا ہے۔ [HTTP](#hypertext-transfer-protocol-http) اختتامی نقطہ  قونصل اور Etcd دونوں میں بلٹ ان ہے۔ [کلیدی قدر کی دکان](#key-value-store) جو کنفگ ویلیوز اور دوسرے مشترکہ ڈیٹا کو اسٹور کرنے کے لیے کارآمد ہو سکتا ہے۔

<a id="disadvantages-application-layer"></a>
### نقصان (زبانیں): درخواست کی پرت

* نرمی سے جوڑے ہوئے خدمات کے ساتھ ایپلی کیشن پرت کو شامل کرنے کے لیے آرکیٹیکچرل، آپریشنز، اور عمل کے نقطہ نظر (بمقابلہ یک سنگی نظام) سے مختلف نقطہ نظر کی ضرورت ہوتی ہے۔
* Microservices تعیناتی اور آپریشنز کے لحاظ سے پیچیدگی کا اضافہ کر سکتا ہے۔

<a id="sources-and-further-reading-9"></a>
### ماخذ اور مزید پڑھنا

* [پیمانے کے لیے آرکیٹیکٹنگ سسٹم کا تعارف](http://lethain.com/introduction-to-architecting-systems-for-scale)
* [system design انٹرویو کریک کریں۔](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)
* [خدمت پر مبنی فن تعمیر](https://en.wikipedia.org/wiki/Service-oriented_architecture)
* [زوکیپر کا تعارف](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper)
* [microservices کی تعمیر کے بارے میں آپ کو یہ جاننے کی ضرورت ہے۔](https://cloudncode.wordpress.com/2016/07/22/msa-getting-started/)

<a id="database"></a>
## Database

<p align="center">
  <img src="images/Xkm5CXz.png">
  <br/>
  <i><a href=https://www.youtube.com/watch?v=kKjm4ehYiMs>Source: Scaling up to your first 10 million users</a></i>
</p>

<a id="relational-database-management-system-rdbms"></a>
### متعلقہ database مینجمنٹ سسٹم (RDBMS)

ایک رشتہ دار database جیسا کہ SQL جدولوں میں منظم ڈیٹا آئٹمز کا مجموعہ ہے۔

**ACID** متعلقہ database کی خصوصیات کا ایک مجموعہ ہے۔ [لین دین](https://en.wikipedia.org/wiki/Database_transaction).

** جوہری ** - ہر لین دین تمام یا کچھ بھی نہیں ہے۔
* **Consistency** - کوئی بھی لین دین database کو ایک درست حالت سے دوسری حالت میں لائے گا۔
* **تنہائی** - لین دین کو بیک وقت انجام دینے کے وہی نتائج ہوتے ہیں جیسے لین دین کو سلسلہ وار انجام دیا گیا ہو۔
** پائیداری** - ایک بار لین دین کا ارتکاب ہوجانے کے بعد، ایسا ہی رہے گا۔

رشتہ دار database کو پیمانہ کرنے کے لیے بہت سی تکنیکیں ہیں: **ماسٹر-غلام replication**، **ماسٹر-ماسٹر replication**، **فیڈریشن**، **sharding**، **ڈی نارملائزیشن**، اور **SQL ٹیوننگ**۔

<a id="master-slave-replication"></a>
#### Master-غلام replication

آقا پڑھنے اور لکھنے کی خدمت کرتا ہے، ایک یا زیادہ غلاموں کو لکھنے کی نقل تیار کرتا ہے، جو صرف پڑھنے کی خدمت کرتا ہے۔  غلام درخت کی طرح کے فیشن میں اضافی غلاموں کی نقل بھی بنا سکتے ہیں۔  اگر ماسٹر آف لائن ہو جاتا ہے، تو سسٹم صرف پڑھنے کے موڈ میں اس وقت تک کام جاری رکھ سکتا ہے جب تک کہ غلام کو ترقی دے کر ماسٹر نہیں بنایا جاتا یا نیا ماسٹر فراہم نہیں کیا جاتا۔

<p align="center">
  <img src="images/C9ioGtn.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

<a id="disadvantages-master-slave-replication"></a>
##### نقصان (زبانیں): آقا غلام replication

* غلام کو آقا بنانے کے لیے اضافی منطق کی ضرورت ہے۔
*دیکھیں۔ [نقصانات: replication](#disadvantages-replication)**دونوں** آقا غلام اور ماسٹر ماسٹر سے متعلق پوائنٹس کے لیے۔

<a id="master-master-replication"></a>
#### Master-ماسٹر replication

دونوں ماسٹرز پڑھنے اور لکھنے کی خدمت کرتے ہیں اور تحریروں پر ایک دوسرے کے ساتھ ہم آہنگی کرتے ہیں۔  اگر دونوں میں سے کوئی ماسٹر گر جاتا ہے، تو سسٹم پڑھنے اور لکھنے دونوں کے ساتھ کام کرنا جاری رکھ سکتا ہے۔

<p align="center">
  <img src="images/krAHLGg.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

<a id="disadvantages-master-master-replication"></a>
##### نقصان (زبانیں): ماسٹر-ماسٹر replication

* آپ کو ایک load balancer کی ضرورت ہوگی یا آپ کو اپنی درخواست کی منطق میں تبدیلیاں کرنی ہوں گی تاکہ یہ تعین کیا جا سکے کہ کہاں لکھنا ہے۔
* زیادہ تر ماسٹر-ماسٹر سسٹمز یا تو ڈھیلے طریقے سے مطابقت رکھتے ہیں (ACID کی خلاف ورزی کرتے ہوئے) یا مطابقت پذیری کی وجہ سے latency لکھنے میں اضافہ ہوا ہے۔
* تنازعات کا حل مزید کام میں آتا ہے کیونکہ مزید رائٹ نوڈس شامل ہوتے ہیں اور latency بڑھتے ہیں۔
*دیکھیں۔ [نقصانات: replication](#disadvantages-replication)**دونوں** آقا غلام اور ماسٹر ماسٹر سے متعلق پوائنٹس کے لیے۔

<a id="disadvantages-replication"></a>
##### نقصانات: replication

* ڈیٹا کے ضائع ہونے کا امکان ہے اگر ماسٹر کسی بھی نئے تحریری ڈیٹا کو دوسرے نوڈس پر نقل کیے جانے سے پہلے ناکام ہوجاتا ہے۔
* تحریریں پڑھی ہوئی نقلوں پر دوبارہ چلائی جاتی ہیں۔  اگر بہت ساری تحریریں ہیں، تو پڑھی ہوئی نقلیں دوبارہ چلانے والی تحریروں میں پھنس سکتی ہیں اور اتنی زیادہ پڑھ نہیں سکتیں۔
* جتنے زیادہ پڑھے ہوئے بندے ہوں گے، آپ کو اتنا ہی زیادہ نقل تیار کرنا پڑے گا، جس کی وجہ سے replication زیادہ وقفہ ہوگا۔
* کچھ سسٹمز پر، ماسٹر کو لکھنا متوازی طور پر لکھنے کے لیے متعدد دھاگوں کو جنم دے سکتا ہے، جب کہ پڑھنے والی نقلیں صرف ایک دھاگے کے ساتھ ترتیب وار لکھنے کی حمایت کرتی ہیں۔
* Replication مزید ہارڈ ویئر اور اضافی پیچیدگی کا اضافہ کرتا ہے۔

<a id="sources-and-further-reading-replication"></a>
##### ماخذ اور مزید پڑھنا: replication

* [Scalability، availability، استحکام، پیٹرن](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)
* [ملٹی ماسٹر replication](https://en.wikipedia.org/wiki/Multi-master_replication)

<a id="federation"></a>
#### فیڈریشن

<p align="center">
  <img src="images/U3qV33e.png">
  <br/>
  <i><a href=https://www.youtube.com/watch?v=kKjm4ehYiMs>Source: Scaling up to your first 10 million users</a></i>
</p>

فیڈریشن (یا فنکشنل partitioning) ڈیٹا بیس کو فنکشن کے لحاظ سے تقسیم کرتا ہے۔  مثال کے طور پر، ایک سنگل database کے بجائے، آپ کے پاس تین ڈیٹا بیس ہو سکتے ہیں: **فورمز**، **صارفین**، اور **پروڈکٹس**، جس کے نتیجے میں ہر database پر کم پڑھنے اور لکھنے کی ٹریفک ہوتی ہے اور اس وجہ سے replication وقفہ کم ہوتا ہے۔  چھوٹے ڈیٹا بیس کے نتیجے میں زیادہ ڈیٹا ملتا ہے جو میموری میں فٹ ہو سکتا ہے، جس کے نتیجے میں بہتر cache لوکلٹی کی وجہ سے زیادہ cache ہٹ ہوتے ہیں۔  کسی ایک مرکزی ماسٹر سیریلائزنگ رائٹ کے بغیر آپ throughput کو بڑھاتے ہوئے متوازی طور پر لکھ سکتے ہیں۔

<a id="disadvantages-federation"></a>
##### نقصانات: فیڈریشن

* فیڈریشن مؤثر نہیں ہے اگر آپ کے اسکیما کو بڑے فنکشنز یا ٹیبلز کی ضرورت ہے۔
* آپ کو اپنی درخواست کی منطق کو اپ ڈیٹ کرنے کی ضرورت ہوگی تاکہ یہ تعین کیا جا سکے کہ کون سا database پڑھنا اور لکھنا ہے۔
* دو ڈیٹا بیس سے ڈیٹا کو جوائن کرنا a کے ساتھ زیادہ پیچیدہ ہے۔ [سرور لنک](http://stackoverflow.com/questions/5145637/querying-data-by-joining-two-tables-in-two-database-on-different-servers).
* فیڈریشن مزید ہارڈ ویئر اور اضافی پیچیدگی کا اضافہ کرتی ہے۔

<a id="sources-and-further-reading-federation"></a>
##### ماخذ اور مزید پڑھنا: فیڈریشن

* [آپ کے پہلے 10 ملین صارفین تک اسکیل کرنا](https://www.youtube.com/watch?v=kKjm4ehYiMs)

<a id="sharding"></a>
#### Sharding

<p align="center">
  <img src="images/wU8x5Id.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

Sharding ڈیٹا کو مختلف ڈیٹا بیس میں تقسیم کرتا ہے جیسے کہ ہر database ڈیٹا کے صرف ذیلی سیٹ کا انتظام کر سکتا ہے۔  مثال کے طور پر ایک صارف database کو لے کر، جیسے جیسے صارفین کی تعداد بڑھتی ہے، کلسٹر میں مزید شارڈز شامل کیے جاتے ہیں۔

کے فوائد کی طرح [فیڈریشن](#federation) ، sharding کے نتیجے میں کم پڑھنے اور لکھنے کی ٹریفک، کم replication، اور زیادہ cache ہٹ ہوتی ہے۔  Index سائز بھی کم کر دیا گیا ہے، جو عام طور پر تیز تر استفسارات کے ساتھ کارکردگی کو بہتر بناتا ہے۔  اگر ایک شارڈ نیچے جاتا ہے تو، دوسرے شارڈ اب بھی کام کر رہے ہیں، حالانکہ آپ ڈیٹا کے نقصان سے بچنے کے لیے replication کی کچھ شکل شامل کرنا چاہیں گے۔  فیڈریشن کی طرح، کوئی واحد مرکزی ماسٹر سیریلائزنگ رائٹ نہیں ہے، جو آپ کو throughput بڑھے ہوئے متوازی لکھنے کی اجازت دیتا ہے۔

استعمال کنندگان کی میز کو شارڈ کرنے کے عام طریقے یا تو صارف کے آخری نام کے ابتدائی یا صارف کے جغرافیائی محل وقوع کے ذریعے ہوتے ہیں۔

<a id="disadvantages-sharding"></a>
##### نقصانات: sharding

* آپ کو شارڈز کے ساتھ کام کرنے کے لیے اپنی درخواست کی منطق کو اپ ڈیٹ کرنے کی ضرورت ہوگی، جس کے نتیجے میں پیچیدہ SQL سوالات پیدا ہوسکتے ہیں۔
* ڈیٹا کی تقسیم شارڈ میں یک طرفہ ہوسکتی ہے۔  مثال کے طور پر، شارڈ پر بجلی استعمال کرنے والوں کا ایک سیٹ دوسروں کے مقابلے اس شارڈ پر بوجھ میں اضافہ کر سکتا ہے۔
* دوبارہ توازن اضافی پیچیدگی کا اضافہ کرتا ہے۔  پر مبنی ایک sharding فنکشن [مسلسل ہیشنگ](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html) منتقل شدہ ڈیٹا کی مقدار کو کم کر سکتا ہے۔
* متعدد شارڈز سے ڈیٹا جوائن کرنا زیادہ پیچیدہ ہے۔
* Sharding مزید ہارڈ ویئر اور اضافی پیچیدگی کا اضافہ کرتا ہے۔

<a id="sources-and-further-reading-sharding"></a>
##### ماخذ اور مزید پڑھنا: sharding

* [شارڈ کی آمد](http://highscalability.com/blog/2009/8/6/an-unorthodox-approach-to-database-design-the-coming-of-the.html)
* [Shard database فن تعمیر](https://en.wikipedia.org/wiki/Shard_(database_architecture))
* [مسلسل ہیشنگ](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html)

<a id="denormalization"></a>
#### ڈی نارملائزیشن

ڈی نارملائزیشن کچھ تحریری کارکردگی کی قیمت پر پڑھنے کی کارکردگی کو بہتر بنانے کی کوشش کرتی ہے۔  مہنگی شمولیت سے بچنے کے لیے ڈیٹا کی بے کار کاپیاں متعدد جدولوں میں لکھی جاتی ہیں۔  کچھ RDBMS جیسے [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) اور اوریکل سپورٹ [مادی نظریات](https://en.wikipedia.org/wiki/Materialized_view) جو بے کار معلومات کو ذخیرہ کرنے اور فالتو کاپیوں کو مستقل رکھنے کے کام کو سنبھالتا ہے۔

ایک بار ڈیٹا جیسے تکنیکوں کے ساتھ تقسیم ہو جاتا ہے۔ [فیڈریشن](#federation) اور [sharding](#sharding) ڈیٹا سینٹرز میں شمولیت کا انتظام پیچیدگی کو مزید بڑھاتا ہے۔  ڈی نارملائزیشن اس طرح کے پیچیدہ جوائن کی ضرورت کو روک سکتی ہے۔

زیادہ تر سسٹمز میں، پڑھنے کی تعداد 100:1 یا یہاں تک کہ 1000:1 لکھنے والوں سے بہت زیادہ ہو سکتی ہے۔  ایک پیچیدہ database جوائن کرنے کے نتیجے میں پڑھنا بہت مہنگا پڑ سکتا ہے، جس سے ڈسک کے آپریشنز پر کافی وقت خرچ ہوتا ہے۔

<a id="disadvantages-denormalization"></a>
##### نقصان (زبانیں): ڈی نارملائزیشن

* ڈیٹا ڈپلیکیٹ ہے۔
* رکاوٹیں معلومات کی بے کار کاپیوں کو مطابقت پذیر رہنے میں مدد کر سکتی ہیں، جس سے database ڈیزائن کی پیچیدگی بڑھ جاتی ہے۔
* بھاری تحریری بوجھ کے تحت غیر معمولی شدہ database اپنے معمول کے ہم منصب سے بدتر کارکردگی کا مظاہرہ کر سکتا ہے۔

<a id="sources-and-further-reading-denormalization"></a>
###### ماخذ اور مزید پڑھنا: ڈی نارملائزیشن

* [ڈی نارملائزیشن](https://en.wikipedia.org/wiki/Denormalization)

<a id="sql-tuning"></a>
#### SQL ٹیوننگ

SQL ٹیوننگ ایک وسیع موضوع ہے اور بہت سے [کتابیں](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=sql+tuning) حوالہ کے طور پر لکھا گیا ہے۔

رکاوٹوں کو نقل کرنے اور ان سے پردہ اٹھانے کے لیے **بینچ مارک** اور **پروفائل** کا ہونا ضروری ہے۔

* **بینچ مارک** - زیادہ بوجھ والے حالات جیسے ٹولز کے ساتھ نقل کریں۔ [ab](http://httpd.apache.org/docs/2.2/programs/ab.html).
* **پروفائل** - ٹولز کو فعال کریں جیسے کہ [سست استفسار لاگ](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html) کارکردگی کے مسائل کو ٹریک کرنے میں مدد کرنے کے لیے۔

بینچ مارکنگ اور پروفائلنگ آپ کو درج ذیل اصلاح کی طرف اشارہ کر سکتی ہے۔

<a id="tighten-up-the-schema"></a>
##### اسکیما کو سخت کریں۔

* MySQL تیز رسائی کے لیے ملحقہ بلاکس میں ڈسک پر پھینک دیتا ہے۔
* فکسڈ لینتھ فیلڈز کے لیے `VARCHAR` کی بجائے `CHAR` استعمال کریں۔
* `CHAR` مؤثر طریقے سے تیز، بے ترتیب رسائی کی اجازت دیتا ہے، جبکہ `VARCHAR` کے ساتھ، آپ کو اگلے والی پر جانے سے پہلے ایک سٹرنگ کا اختتام تلاش کرنا ہوگا۔
* متن کے بڑے بلاکس جیسے بلاگ پوسٹس کے لیے `TEXT` استعمال کریں۔  `TEXT` بولین تلاشوں کی بھی اجازت دیتا ہے۔  `TEXT` فیلڈ کو استعمال کرنے کے نتیجے میں ڈسک پر ایک پوائنٹر ذخیرہ ہوتا ہے جو ٹیکسٹ بلاک کو تلاش کرنے کے لیے استعمال ہوتا ہے۔
* 2^32 یا 4 بلین تک بڑی تعداد کے لیے `INT` استعمال کریں۔
* فلوٹنگ پوائنٹ کی نمائندگی کی غلطیوں سے بچنے کے لیے کرنسی کے لیے `DECIMAL` استعمال کریں۔
* بڑے `BLOBS` کو ذخیرہ کرنے سے گریز کریں، اس کے بجائے اس جگہ کو محفوظ کریں جہاں سے چیز حاصل کی جائے۔
* `VARCHAR(255)` حروف کی سب سے بڑی تعداد ہے جسے 8 بٹ نمبر میں شمار کیا جا سکتا ہے، اکثر کچھ RDBMS میں بائٹ کا زیادہ سے زیادہ استعمال ہوتا ہے۔
* `NOT NULL` کی پابندی جہاں قابل اطلاق ہو سیٹ کریں۔ [تلاش کی کارکردگی کو بہتر بنائیں](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search).

<a id="use-good-indices"></a>
##### اچھے اشارے استعمال کریں۔

* وہ کالم جن سے آپ استفسار کر رہے ہیں (`SELECT`, `GROUP BY`, `ORDER BY`, `JOIN`) انڈیکس کے ساتھ تیز تر ہو سکتے ہیں۔
* انڈیکس کو عام طور پر خود توازن کے طور پر دکھایا جاتا ہے۔ [بی درخت](https://en.wikipedia.org/wiki/B-tree) جو ڈیٹا کو ترتیب سے رکھتا ہے اور لوگاریتھمک وقت میں تلاشوں، ترتیب وار رسائی، اندراج اور حذف کرنے کی اجازت دیتا ہے۔
* index رکھنے سے ڈیٹا کو میموری میں رکھا جا سکتا ہے، زیادہ جگہ کی ضرورت ہوتی ہے۔
* تحریریں بھی سست ہوسکتی ہیں کیونکہ index کو بھی اپ ڈیٹ کرنے کی ضرورت ہے۔
* بڑی مقدار میں ڈیٹا لوڈ کرتے وقت، انڈیکس کو غیر فعال کرنا، ڈیٹا لوڈ کرنا، پھر انڈیکس کو دوبارہ بنانا تیز تر ہوسکتا ہے۔

<a id="avoid-expensive-joins"></a>
##### مہنگے جوڑ سے پرہیز کریں۔

* [غیر معمولی بنانا](#denormalization) جہاں کارکردگی اس کا تقاضا کرتی ہے۔

<a id="partition-tables"></a>
##### پارٹیشن ٹیبلز

* ایک میز کو یادداشت میں رکھنے میں مدد کے لیے ایک علیحدہ میز میں گرم مقامات رکھ کر اسے توڑ دیں۔

<a id="tune-the-query-cache"></a>
##### استفسار cache کو ٹیون کریں۔

* بعض صورتوں میں، [استفسار cache](https://dev.mysql.com/doc/refman/5.7/en/query-cache.html) کی قیادت کر سکتے ہیں [کارکردگی کے مسائل](https://www.percona.com/blog/2016/10/12/mysql-5-7-performance-tuning-immediately-after-installation/).

<a id="sources-and-further-reading-sql-tuning"></a>
##### ماخذ اور مزید پڑھنا: SQL ٹیوننگ

* [MySQL سوالات کو بہتر بنانے کے لیے تجاویز](http://aiddroid.com/10-tips-optimizing-mysql-queries-dont-suck/)
* [کیا کوئی اچھی وجہ ہے کہ میں VARCHAR(255) کو اکثر استعمال کرتا دیکھ رہا ہوں؟](http://stackoverflow.com/questions/1217466/is-there-a-good-reason-i-see-varchar255-used-so-often-as-opposed-to-another-l)
* [کالعدم اقدار کارکردگی کو کیسے متاثر کرتی ہیں؟](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search)
* [سست استفسار لاگ](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html)

<a id="nosql"></a>
### NoSQL

NoSQL ڈیٹا آئٹمز کا ایک مجموعہ ہے جس کی نمائندگی **کی-ویلیو اسٹور**، **دستاویزی اسٹور**، **وائڈ کالم اسٹور**، یا **گراف database** میں ہوتی ہے۔  ڈیٹا کو غیر معمولی بنا دیا جاتا ہے، اور جوائنز عام طور پر ایپلیکیشن کوڈ میں کیے جاتے ہیں۔  زیادہ تر NoSQL اسٹورز میں حقیقی ACID لین دین اور پسندیدگی کی کمی ہے۔ [حتمی مستقل مزاجی](#eventual-consistency).

**BASE** اکثر NoSQL ڈیٹا بیس کی خصوصیات کو بیان کرنے کے لیے استعمال ہوتا ہے۔  کے مقابلے میں [CAP تھیوریم](#cap-theorem) ، BASE مستقل مزاجی پر availability کا انتخاب کرتا ہے۔

* **بنیادی طور پر دستیاب** - سسٹم availability کی ضمانت دیتا ہے۔
* **نرم حالت** - نظام کی حالت وقت کے ساتھ بدل سکتی ہے، یہاں تک کہ ان پٹ کے بغیر۔
* **واقعی مستقل مزاجی** - نظام وقت کی ایک مدت کے ساتھ مطابقت پذیر ہوجائے گا، بشرطیکہ اس مدت کے دوران سسٹم کو ان پٹ موصول نہیں ہوتا ہے۔

کے درمیان انتخاب کرنے کے علاوہ [SQL یا NoSQL](#sql-or-nosql) ، یہ سمجھنے میں مددگار ہے کہ کس قسم کی NoSQL database آپ کے استعمال کے معاملے (کیسز) میں بہترین فٹ بیٹھتی ہے۔  ہم اگلے سیکشن میں **کی-ویلیو اسٹورز**، **دستاویزی اسٹور**، **وسیع کالم اسٹور**، اور **گراف ڈیٹا بیس** کا جائزہ لیں گے۔

<a id="key-value-store"></a>
#### کلیدی قدر کی دکان

> خلاصہ: ہیش ٹیبل

کلیدی قدر والا اسٹور عام طور پر O(1) پڑھنے اور لکھنے کی اجازت دیتا ہے اور اسے اکثر میموری یا SSD کی مدد حاصل ہوتی ہے۔  ڈیٹا اسٹورز کیز کو برقرار رکھ سکتے ہیں۔ [لغت کی ترتیب](https://en.wikipedia.org/wiki/Lexicographical_order) ، کلیدی حدود کی موثر بازیافت کی اجازت دیتا ہے۔  کلیدی قدر والے اسٹورز قدر کے ساتھ میٹا ڈیٹا کو ذخیرہ کرنے کی اجازت دے سکتے ہیں۔

کلیدی قدر والے اسٹورز اعلیٰ کارکردگی فراہم کرتے ہیں اور اکثر سادہ ڈیٹا ماڈلز یا تیزی سے تبدیل ہونے والے ڈیٹا کے لیے استعمال ہوتے ہیں، جیسے کہ ان میموری cache پرت۔  چونکہ وہ آپریشنز کا صرف ایک محدود سیٹ پیش کرتے ہیں، اگر اضافی آپریشنز کی ضرورت ہو تو پیچیدگی کو ایپلیکیشن لیئر میں منتقل کر دیا جاتا ہے۔

کلیدی قدر کا اسٹور زیادہ پیچیدہ نظاموں کی بنیاد ہے جیسے کہ دستاویز کی دکان، اور بعض صورتوں میں، گراف database۔

<a id="sources-and-further-reading-key-value-store"></a>
##### ماخذ اور مزید پڑھنا: کلیدی قدر کی دکان

* [کلیدی قدر database](https://en.wikipedia.org/wiki/Key-value_database)
* [کلیدی قدر والے اسٹورز کے نقصانات](http://stackoverflow.com/questions/4056093/what-are-the-disadvantages-of-using-a-key-value-table-over-nullable-columns-or)
* [Redis فن تعمیر](http://qnimate.com/overview-of-redis-architecture/)
* [Memcached فن تعمیر](https://adayinthelifeof.nl/2011/02/06/memcache-internals/)

<a id="document-store"></a>
#### دستاویز کی دکان

> تجرید: قدروں کے بطور ذخیرہ شدہ دستاویزات کے ساتھ کلیدی قدر اسٹور

ایک دستاویز کی دکان دستاویزات (XML، JSON، بائنری، وغیرہ) کے ارد گرد مرکوز ہوتی ہے، جہاں ایک دستاویز دی گئی چیز کے لیے تمام معلومات کو ذخیرہ کرتی ہے۔  دستاویز کی دکانیں خود دستاویز کی اندرونی ساخت کی بنیاد پر استفسار کے لیے APIs یا استفسار کی زبان فراہم کرتی ہیں۔  *نوٹ، بہت سے کلیدی قدر والے اسٹورز میں قدر کے میٹا ڈیٹا کے ساتھ کام کرنے کے لیے خصوصیات شامل ہیں، جو ان دو اسٹوریج اقسام کے درمیان لائنوں کو دھندلا کرتی ہیں۔*

بنیادی نفاذ کی بنیاد پر، دستاویزات کو مجموعہ، ٹیگز، میٹا ڈیٹا، یا ڈائریکٹریز کے ذریعے ترتیب دیا جاتا ہے۔  اگرچہ دستاویزات کو ایک ساتھ منظم یا گروپ کیا جا سکتا ہے، لیکن دستاویزات میں ایسے فیلڈز ہو سکتے ہیں جو ایک دوسرے سے بالکل مختلف ہوں۔

کچھ دستاویز اسٹورز پسند کرتے ہیں۔ [MongoDB](https://www.mongodb.com/mongodb-architecture) اور [CouchDB](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/) پیچیدہ سوالات کرنے کے لیے SQL جیسی زبان بھی فراہم کریں۔ [DynamoDB](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf) کلیدی اقدار اور دستاویزات دونوں کی حمایت کرتا ہے۔

دستاویزی اسٹورز اعلی لچک فراہم کرتے ہیں اور اکثر اوقات تبدیل کرنے والے ڈیٹا کے ساتھ کام کرنے کے لیے استعمال ہوتے ہیں۔

<a id="sources-and-further-reading-document-store"></a>
##### ماخذ اور مزید پڑھنا: دستاویز کی دکان

* [دستاویز پر مبنی database](https://en.wikipedia.org/wiki/Document-oriented_database)
* [MongoDB فن تعمیر](https://www.mongodb.com/mongodb-architecture)
* [CouchDB فن تعمیر](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/)
* [Elasticsearch فن تعمیر](https://www.elastic.co/blog/found-elasticsearch-from-the-bottom-up)

<a id="wide-column-store"></a>
#### وسیع کالم اسٹور

<p align="center">
  <img src="images/n16iOGk.png">
  <br/>
  <i><a href=http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html>Source: SQL & NoSQL, a brief history</a></i>
</p>

> خلاصہ: نیسٹڈ میپ `ColumnFamily<RowKey, Columns<ColKey, Value, Timestamp>>`

ایک وسیع کالم اسٹور کی ڈیٹا کی بنیادی اکائی ایک کالم (نام/قدر کا جوڑا) ہے۔  ایک کالم کو کالم فیملیز میں گروپ کیا جا سکتا ہے (SQL ٹیبل کے مطابق)۔  سپر کالم فیملیز مزید گروپ کالم فیملیز۔  آپ قطار کی کلید کے ساتھ ہر کالم تک آزادانہ طور پر رسائی حاصل کر سکتے ہیں، اور اسی قطار کی کلید والے کالم ایک قطار بناتے ہیں۔  ہر قدر میں ورژن بنانے اور تنازعات کے حل کے لیے ٹائم اسٹیمپ ہوتا ہے۔

گوگل نے متعارف کرایا [Bigtable](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf) پہلے وسیع کالم اسٹور کے طور پر، جس نے اوپن سورس کو متاثر کیا۔ [HBase](https://www.edureka.co/blog/hbase-architecture/) ہڈوپ ماحولیاتی نظام میں اکثر استعمال کیا جاتا ہے، اور [Cassandra](http://docs.datastax.com/en/cassandra/3.0/cassandra/architecture/archIntro.html) Facebook سے۔  BigTable، HBase، اور Cassandra جیسے اسٹورز کلیدوں کو لغت کی ترتیب میں برقرار رکھتے ہیں، جس سے منتخب کلیدی حدود کی موثر بازیافت کی اجازت ملتی ہے۔

وسیع کالم اسٹورز اعلی availability اور اعلی scalability پیش کرتے ہیں۔  وہ اکثر بہت بڑے ڈیٹا سیٹس کے لیے استعمال ہوتے ہیں۔

<a id="sources-and-further-reading-wide-column-store"></a>
##### ماخذ اور مزید پڑھنا: وسیع کالم اسٹور

* [SQL اور NoSQL، ایک مختصر تاریخ](http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html)
* [Bigtable فن تعمیر](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf)
* [HBase فن تعمیر](https://www.edureka.co/blog/hbase-architecture/)
* [Cassandra فن تعمیر](http://docs.datastax.com/en/cassandra/3.0/cassandra/architecture/archIntro.html)

<a id="graph-database"></a>
#### گراف database

<p align="center">
  <img src="images/fNcl65g.png">
  <br/>
  <i><a href=https://en.wikipedia.org/wiki/File:GraphDatabase_PropertyGraph.png>Source: Graph database</a></i>
</p>

> خلاصہ: گراف

گراف database میں، ہر نوڈ ایک ریکارڈ ہے اور ہر قوس دو نوڈس کے درمیان تعلق ہے۔  گراف ڈیٹا بیسز کو بہت سی غیر ملکی کلیدوں یا کئی سے کئی رشتوں کے ساتھ پیچیدہ تعلقات کی نمائندگی کرنے کے لیے بہتر بنایا گیا ہے۔

گرافس ڈیٹا بیس پیچیدہ تعلقات کے ساتھ ڈیٹا ماڈلز کے لیے اعلی کارکردگی پیش کرتے ہیں، جیسے کہ سوشل نیٹ ورک۔  وہ نسبتاً نئے ہیں اور ابھی تک وسیع پیمانے پر استعمال نہیں ہوئے ہیں۔ ترقیاتی ٹولز اور وسائل تلاش کرنا زیادہ مشکل ہو سکتا ہے۔  بہت سے گراف تک صرف رسائی حاصل کی جا سکتی ہے۔ [REST APIs](#representational-state-transfer-rest).

<a id="sources-and-further-reading-graph"></a>
##### ماخذ اور مزید پڑھنا: گراف

* [گراف database](https://en.wikipedia.org/wiki/Graph_database)
* [Neo4j](https://neo4j.com/)
* [فلاک ڈی بی](https://blog.twitter.com/2010/introducing-flockdb)

<a id="sources-and-further-reading-nosql"></a>
#### ماخذ اور مزید پڑھنا: NoSQL

* [بنیادی اصطلاحات کی وضاحت](http://stackoverflow.com/questions/3342497/explanation-of-base-terminology)
* [NoSQL ڈیٹا بیس ایک سروے اور فیصلے کی رہنمائی کرتا ہے۔](https://medium.com/baqend-blog/nosql-databases-a-survey-and-decision-guidance-ea7823a822d#.wskogqenq)
* [Scalability](https://web.archive.org/web/20220602114024/https://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
* [NoSQL کا تعارف](https://www.youtube.com/watch?v=qI_g07C_Q5I)
* [NoSQL پیٹرن](http://horicky.blogspot.com/2009/11/nosql-patterns.html)

<a id="sql-or-nosql"></a>
### SQL یا NoSQL

<p align="center">
  <img src="images/wXGqG5f.png">
  <br/>
  <i><a href=https://www.infoq.com/articles/Transition-RDBMS-NoSQL/>Source: Transitioning from RDBMS to NoSQL</a></i>
</p>

**SQL** کی وجوہات:

* سٹرکچرڈ ڈیٹا
* سخت اسکیما
* رشتہ دار ڈیٹا
* پیچیدہ شمولیت کی ضرورت
* لین دین
* اسکیلنگ کے لیے پیٹرن صاف کریں۔
* مزید قائم: ڈویلپرز، کمیونٹی، کوڈ، ٹولز وغیرہ
* index کے ذریعہ تلاش کرنا بہت تیز ہے۔

**NoSQL** کی وجوہات:

* نیم ساختہ ڈیٹا
* متحرک یا لچکدار اسکیما
* غیر متعلقہ ڈیٹا
* پیچیدہ شمولیت کی ضرورت نہیں ہے۔
* بہت سے ٹی بی (یا پی بی) ڈیٹا کو اسٹور کریں۔
* بہت زیادہ ڈیٹا پر کام کا بوجھ
* IOPS کے لیے بہت زیادہ throughput

نمونہ ڈیٹا NoSQL کے لیے موزوں ہے:

* کلک اسٹریم اور لاگ ڈیٹا کا تیزی سے اندراج
* لیڈر بورڈ یا اسکورنگ ڈیٹا
* عارضی ڈیٹا، جیسے شاپنگ کارٹ
* اکثر رسائی شدہ ('گرم') میزیں۔
* میٹا ڈیٹا/لوک اپ ٹیبلز

<a id="sources-and-further-reading-sql-or-nosql"></a>
##### ماخذ اور مزید پڑھنا: SQL یا NoSQL

* [آپ کے پہلے 10 ملین صارفین تک اسکیل کرنا](https://www.youtube.com/watch?v=kKjm4ehYiMs)
* [SQL بمقابلہ NoSQL فرق](https://www.sitepoint.com/sql-vs-nosql-differences/)

<a id="cache"></a>
## Cache

<p align="center">
  <img src="images/Q6z24La.png">
  <br/>
  <i><a href=http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html>Source: Scalable system design patterns</a></i>
</p>

Caching صفحہ لوڈ کرنے کے اوقات کو بہتر بناتا ہے اور آپ کے سرورز اور ڈیٹا بیس پر بوجھ کو کم کر سکتا ہے۔  اس ماڈل میں، ڈسپیچر پہلے تلاش کرے گا کہ آیا درخواست پہلے کی گئی ہے اور واپسی کے لیے پچھلے نتیجہ کو تلاش کرنے کی کوشش کرے گا، تاکہ اصل عمل کو محفوظ کیا جا سکے۔

ڈیٹا بیس اکثر اس کے تمام حصوں میں پڑھنے اور لکھنے کی یکساں تقسیم سے فائدہ اٹھاتے ہیں۔  مقبول آئٹمز تقسیم میں رکاوٹ پیدا کر سکتے ہیں۔  cache کو database کے سامنے رکھنے سے ٹریفک میں ناہموار بوجھ اور اسپائکس کو جذب کرنے میں مدد مل سکتی ہے۔

<a id="client-caching"></a>
### Client caching

کیش کلائنٹ کی طرف (OS یا براؤزر) پر واقع ہوسکتے ہیں، [سرور کی طرف](#reverse-proxy-web-server) ، یا ایک الگ cache پرت میں۔

<a id="cdn-caching"></a>
### CDN caching

[CDNs](#content-delivery-network) cache کی ایک قسم سمجھا جاتا ہے۔

<a id="web-server-caching"></a>
### ویب سرور caching

[ریورس پراکسی](#reverse-proxy-web-server) اور کیش جیسے [وارنش](https://www.varnish-cache.org/) جامد اور متحرک مواد کو براہ راست پیش کر سکتا ہے۔  ویب سرورز cache درخواستیں بھی کر سکتے ہیں، ایپلیکیشن سرورز سے رابطہ کیے بغیر جوابات واپس کر سکتے ہیں۔

<a id="database-caching"></a>
### Database caching

آپ کے database میں عام طور پر ایک ڈیفالٹ کنفیگریشن میں caching کی کچھ سطح شامل ہوتی ہے، جو عام استعمال کے معاملے کے لیے موزوں ہے۔  مخصوص استعمال کے نمونوں کے لیے ان ترتیبات کو موافق بنانے سے کارکردگی میں مزید اضافہ ہو سکتا ہے۔

<a id="application-caching"></a>
### درخواست caching

ان میموری کیشز جیسے Memcached اور Redis آپ کی ایپلیکیشن اور آپ کے ڈیٹا اسٹوریج کے درمیان کلیدی قدر والے اسٹورز ہیں۔  چونکہ ڈیٹا کو RAM میں رکھا جاتا ہے، یہ عام ڈیٹا بیس سے کہیں زیادہ تیز ہوتا ہے جہاں ڈیٹا ڈسک پر محفوظ ہوتا ہے۔  RAM ڈسک سے زیادہ محدود ہے، لہذا [cache باطل](https://en.wikipedia.org/wiki/Cache_algorithms) الگورتھم جیسے [حال ہی میں استعمال شدہ (LRU)](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)) 'کولڈ' اندراجات کو باطل کرنے اور 'ہاٹ' ڈیٹا کو رام میں رکھنے میں مدد کر سکتا ہے۔

Redis میں درج ذیل اضافی خصوصیات ہیں:

* استقامت کا اختیار
* بلٹ ان ڈیٹا ڈھانچے جیسے ترتیب شدہ سیٹ اور فہرستیں۔

ایسی متعدد سطحیں ہیں جن پر آپ cache کر سکتے ہیں جو دو عام زمروں میں آتے ہیں: **database سوالات** اور **آبجیکٹ**:

* قطار کی سطح
* استفسار کی سطح
* مکمل طور پر تشکیل شدہ سیریلائز ایبل اشیاء
* مکمل طور پر پیش کردہ HTML

عام طور پر، آپ کو فائل پر مبنی caching سے بچنے کی کوشش کرنی چاہیے، کیونکہ یہ کلوننگ اور آٹو اسکیلنگ کو مزید مشکل بنا دیتا ہے۔

<a id="caching-at-the-database-query-level"></a>
### database استفسار کی سطح پر Caching

جب بھی آپ database سے استفسار کرتے ہیں، سوال کو کلید کے طور پر ہیش کریں اور نتیجہ کو cache میں اسٹور کریں۔  یہ نقطہ نظر میعاد ختم ہونے کے مسائل سے دوچار ہے:

* پیچیدہ سوالات کے ساتھ کیش شدہ نتیجہ کو حذف کرنا مشکل ہے۔
* اگر ڈیٹا کا ایک ٹکڑا تبدیل ہوتا ہے جیسے کہ ٹیبل سیل، آپ کو تمام کیش کردہ سوالات کو حذف کرنے کی ضرورت ہے جن میں تبدیل شدہ سیل شامل ہوسکتا ہے

<a id="caching-at-the-object-level"></a>
### آبجیکٹ کی سطح پر Caching

اپنے ڈیٹا کو ایک آبجیکٹ کے طور پر دیکھیں، جیسا کہ آپ اپنے ایپلیکیشن کوڈ کے ساتھ کرتے ہیں۔  اپنی درخواست کو database سے ڈیٹاسیٹ کو کلاس مثال یا ڈیٹا ڈھانچے میں جمع کرنے کو کہیں:

* اگر اس کا بنیادی ڈیٹا بدل گیا ہے تو اسے cache سے ہٹا دیں۔
* غیر مطابقت پذیر پروسیسنگ کی اجازت دیتا ہے: کارکن تازہ ترین کیش شدہ آبجیکٹ استعمال کرکے اشیاء کو جمع کرتے ہیں

cache کے بارے میں تجاویز:

* صارف کے سیشن
* مکمل طور پر پیش کردہ ویب صفحات
* سرگرمی کے سلسلے
* صارف کا گراف ڈیٹا

<a id="when-to-update-the-cache"></a>
### cache کو کب اپ ڈیٹ کرنا ہے۔

چونکہ آپ cache میں صرف محدود مقدار میں ڈیٹا اسٹور کر سکتے ہیں، اس لیے آپ کو یہ تعین کرنا ہو گا کہ cache اپ ڈیٹ کی کونسی حکمت عملی آپ کے استعمال کے معاملے میں بہترین کام کرتی ہے۔

<a id="cache-aside"></a>
#### Cache-ایک طرف

<p align="center">
  <img src="images/ONjORqk.png">
  <br/>
  <i><a href=http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast>Source: From cache to in-memory data grid</a></i>
</p>

ایپلی کیشن اسٹوریج سے پڑھنے اور لکھنے کی ذمہ دار ہے۔  cache اسٹوریج کے ساتھ براہ راست تعامل نہیں کرتا ہے۔  درخواست درج ذیل کام کرتی ہے:

* cache میں اندراج تلاش کریں، جس کے نتیجے میں cache مس ہو جائے گا۔
* database سے اندراج لوڈ کریں۔
* cache میں اندراج شامل کریں۔
* واپسی کا اندراج

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

[Memcached](https://memcached.org/) عام طور پر اس طرح استعمال کیا جاتا ہے.

cache میں شامل کردہ ڈیٹا کے بعد میں پڑھنے کی رفتار تیز ہے۔  Cache-aside کو سست لوڈنگ بھی کہا جاتا ہے۔  صرف درخواست کردہ ڈیٹا کیش کیا جاتا ہے، جو cache کو ایسے ڈیٹا سے بھرنے سے گریز کرتا ہے جس کی درخواست نہیں کی گئی ہے۔

<a id="disadvantages-cache-aside"></a>
##### نقصان (زبانیں): cache-ایک طرف

* ہر cache کا نتیجہ تین دوروں میں ہوتا ہے، جو قابل توجہ تاخیر کا سبب بن سکتا ہے۔
* ڈیٹا باسی ہو سکتا ہے اگر اسے database میں اپ ڈیٹ کیا جاتا ہے۔  اس مسئلے کو ایک ٹائم ٹو لائیو (TTL) ترتیب دے کر کم کیا جاتا ہے جو cache اندراج کو اپ ڈیٹ کرنے پر مجبور کرتا ہے، یا رائٹ تھرو استعمال کر کے۔
* جب کوئی نوڈ ناکام ہوجاتا ہے، تو اس کی جگہ ایک نیا، خالی نوڈ ہوتا ہے، latency بڑھتا ہے۔

<a id="write-through"></a>
#### Write-through

<p align="center">
  <img src="images/0vBc0hN.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

ایپلیکیشن cache کو مرکزی ڈیٹا اسٹور کے طور پر استعمال کرتی ہے، اس میں ڈیٹا پڑھتی اور لکھتی ہے، جبکہ cache database کو پڑھنے اور لکھنے کے لیے ذمہ دار ہے:

* ایپلیکیشن cache میں اندراج کو شامل کرتی ہے/اپ ڈیٹ کرتی ہے۔
* Cache مطابقت پذیری سے ڈیٹا اسٹور میں اندراج لکھتا ہے۔
*واپس آنا۔

درخواست کوڈ:

```python
set_user(12345, {"foo":"bar"})
```

Cache کوڈ:

```python
def set_user(user_id, values):
    user = db.query("UPDATE Users WHERE id = {0}", user_id, values)
    cache.set(user_id, user)
```

Write-through تحریری آپریشن کی وجہ سے مجموعی طور پر ایک سست عمل ہے، لیکن صرف لکھے گئے ڈیٹا کے بعد میں پڑھنا تیز ہے۔  ڈیٹا پڑھنے کے بجائے ڈیٹا اپ ڈیٹ کرتے وقت صارفین عام طور پر latency کو زیادہ برداشت کرتے ہیں۔  cache میں ڈیٹا باسی نہیں ہے۔

<a id="disadvantages-write-through"></a>
##### نقصانات: لکھیں۔

* جب ایک نیا نوڈ ناکامی یا اسکیلنگ کی وجہ سے بنتا ہے، تو نیا نوڈ cache اندراجات کو database میں اپ ڈیٹ کرنے تک داخل نہیں کرے گا۔  Cache-ایک طرف لکھنے کے ساتھ مل کر اس مسئلے کو کم کر سکتا ہے۔
* لکھا گیا زیادہ تر ڈیٹا کبھی نہیں پڑھا جا سکتا ہے، جسے TTL سے کم کیا جا سکتا ہے۔

<a id="write-behind-write-back"></a>
#### پیچھے لکھنا (لکھنا)

<p align="center">
  <img src="images/rgSrvjG.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

لکھنے کے پیچھے، درخواست مندرجہ ذیل کام کرتی ہے:

* cache میں اندراج شامل/اپ ڈیٹ کریں۔
* ڈیٹا اسٹور میں غیر مطابقت پذیری سے اندراج لکھیں، تحریری کارکردگی کو بہتر بنائیں

<a id="disadvantages-write-behind"></a>
##### نقصانات: لکھنا پیچھے

* ڈیٹا کا نقصان ہوسکتا ہے اگر cache ڈیٹا اسٹور کو مارنے سے پہلے اس کے مواد نیچے چلا جائے۔
* cache کو ایک طرف یا لکھنے کے ذریعے لاگو کرنے کے مقابلے میں لکھنے کے پیچھے کو لاگو کرنا زیادہ پیچیدہ ہے۔

<a id="refresh-ahead"></a>
#### تازہ دم کریں۔

<p align="center">
  <img src="images/kxtjqgE.png">
  <br/>
  <i><a href=http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast>Source: From cache to in-memory data grid</a></i>
</p>

آپ cache کو اس کی میعاد ختم ہونے سے پہلے کسی حال میں رسائی شدہ cache اندراج کو خود بخود تازہ کرنے کے لیے ترتیب دے سکتے ہیں۔

اگر cache درست طریقے سے اندازہ لگا سکتا ہے کہ مستقبل میں کن چیزوں کی ضرورت ہو گی۔

<a id="disadvantages-refresh-ahead"></a>
##### نقصانات: تازہ دم کریں۔

* درست طریقے سے پیش گوئی نہ کرنا کہ مستقبل میں کن چیزوں کی ضرورت پڑسکتی ہے، اس کے نتیجے میں کارکردگی کم ہو سکتی ہے جو کہ ریفریش کیے بغیر ہے۔

<a id="disadvantages-cache"></a>
### نقصانات: cache

* کیچز اور سچائی کے ماخذ کے درمیان مستقل مزاجی کو برقرار رکھنے کی ضرورت ہے جیسے کہ database کے ذریعے [cache باطل](https://en.wikipedia.org/wiki/Cache_algorithms).
* Cache کو باطل کرنا ایک مشکل مسئلہ ہے، cache کو کب اپ ڈیٹ کرنا ہے اس کے ساتھ اضافی پیچیدگی وابستہ ہے۔
* درخواست میں تبدیلیاں کرنے کی ضرورت ہے جیسے Redis یا memcached شامل کرنا۔

<a id="sources-and-further-reading-10"></a>
### ماخذ اور مزید پڑھنا

* [cache سے ان میموری ڈیٹا گرڈ تک](http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast)
* [توسیع پذیر system design پیٹرن](http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html)
* [پیمانے کے لئے آرکیٹیکٹنگ سسٹم کا تعارف](http://lethain.com/introduction-to-architecting-systems-for-scale/)
* [Scalability، availability، استحکام، پیٹرن](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)
* [Scalability](https://web.archive.org/web/20230126233752/https://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
* [AWS ElastiCache حکمت عملی](http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/Strategies.html)
* [ویکیپیڈیا](https://en.wikipedia.org/wiki/Cache_(computing))

<a id="asynchronism"></a>
## اسینکرونزم

<p align="center">
  <img src="images/54GYsSx.png">
  <br/>
  <i><a href=http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer>Source: Intro to architecting systems for scale</a></i>
</p>

غیر مطابقت پذیر ورک فلو مہنگے آپریشنز کے لیے درخواست کے اوقات کو کم کرنے میں مدد کرتے ہیں جو بصورت دیگر ان لائن انجام دیے جائیں گے۔  وہ پیشگی وقت گزارنے والے کام کر کے بھی مدد کر سکتے ہیں، جیسے کہ ڈیٹا کی متواتر جمع کرنا۔

<a id="message-queues"></a>
### پیغامات کی قطاریں

پیغام کی قطاریں پیغامات وصول کرتی ہیں، پکڑتی ہیں اور ڈیلیور کرتی ہیں۔  اگر کوئی آپریشن ان لائن انجام دینے میں بہت سست ہے، تو آپ مندرجہ ذیل ورک فلو کے ساتھ پیغام queue استعمال کر سکتے ہیں:

* ایک درخواست queue پر جاب شائع کرتی ہے، پھر صارف کو ملازمت کی حیثیت سے مطلع کرتی ہے۔
* ایک کارکن queue سے کام اٹھاتا ہے، اس پر کارروائی کرتا ہے، پھر اشارہ کرتا ہے کہ کام مکمل ہو گیا ہے۔

صارف کو بلاک نہیں کیا جاتا ہے اور کام کو پس منظر میں پروسیس کیا جاتا ہے۔  اس وقت کے دوران، کلائنٹ اختیاری طور پر تھوڑی مقدار میں پروسیسنگ کر سکتا ہے تاکہ ایسا محسوس ہو کہ کام مکمل ہو گیا ہے۔  مثال کے طور پر، اگر کوئی ٹویٹ پوسٹ کرتے ہیں، تو ٹویٹ فوری طور پر آپ کی ٹائم لائن پر پوسٹ کیا جا سکتا ہے، لیکن آپ کی ٹویٹ کو آپ کے تمام پیروکاروں تک پہنچانے میں کچھ وقت لگ سکتا ہے۔

**[Redis](https://redis.io/)** ایک سادہ پیغام بروکر کے طور پر مفید ہے لیکن پیغامات ضائع ہو سکتے ہیں۔

**[خرگوش ایم کیو](https://www.rabbitmq.com/)** مقبول ہے لیکن آپ سے 'AMQP' پروٹوکول کو اپنانے اور اپنے نوڈس کا نظم کرنے کی ضرورت ہے۔

**[ایمیزون ایس کیو ایس](https://aws.amazon.com/sqs/)** میزبانی کی گئی ہے لیکن اس میں زیادہ latency ہو سکتا ہے اور اس میں دو بار پیغامات کی ترسیل کا امکان ہے۔

<a id="task-queues"></a>
### کام کی قطاریں

ٹاسک کی قطاریں کام اور ان سے متعلقہ ڈیٹا وصول کرتی ہیں، انہیں چلاتی ہیں، پھر ان کے نتائج فراہم کرتی ہیں۔  وہ نظام الاوقات کی حمایت کر سکتے ہیں اور پس منظر میں کمپیوٹیشنل-انتہائی کاموں کو چلانے کے لیے استعمال کیا جا سکتا ہے۔

**[اجوائن](https://docs.celeryproject.org/en/stable/)** کو شیڈولنگ کے لیے سپورٹ حاصل ہے اور بنیادی طور پر ازگر کی حمایت حاصل ہے۔

<a id="back-pressure"></a>
### Back pressure

اگر قطاریں نمایاں طور پر بڑھنے لگیں، تو queue کا سائز میموری سے بڑا ہو سکتا ہے، جس کے نتیجے میں cache چھوٹ جاتا ہے، ڈسک ریڈز، اور کارکردگی بھی سست ہو جاتی ہے۔ [Back pressure](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html) queue سائز کو محدود کر کے مدد کر سکتا ہے، اس طرح throughput کی اعلی شرح اور پہلے سے ہی queue میں ملازمتوں کے لیے اچھے رسپانس ٹائمز کو برقرار رکھا جا سکتا ہے۔  ایک بار queue بھرنے کے بعد، کلائنٹس کو ایک سرور مصروف یا HTTP 503 اسٹیٹس کوڈ مل جاتا ہے تاکہ بعد میں دوبارہ کوشش کریں۔  کلائنٹ بعد میں درخواست پر دوبارہ کوشش کر سکتے ہیں، شاید اس کے ساتھ [کفایتی واپسی](https://en.wikipedia.org/wiki/Exponential_backoff).

<a id="disadvantages-asynchronism"></a>
### نقصان (زبانیں): مطابقت پذیری

* کیسز کا استعمال کریں جیسے سستے حساب اور حقیقی وقت کے کام کے بہاؤ ہم آہنگی کے کاموں کے لیے بہتر طور پر موزوں ہوسکتے ہیں، کیونکہ قطاروں کا تعارف تاخیر اور پیچیدگی کو بڑھا سکتا ہے۔

<a id="sources-and-further-reading-11"></a>
### ماخذ اور مزید پڑھنا

* [یہ سب نمبروں کا کھیل ہے۔](https://www.youtube.com/watch?v=1KRYH75wgy4)
* [اوور لوڈ ہونے پر بیک پریشر لگانا](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)
* [چھوٹا سا قانون](https://en.wikipedia.org/wiki/Little%27s_law)
* [پیغام queue اور ٹاسک queue میں کیا فرق ہے؟](https://www.quora.com/What-is-the-difference-between-a-message-queue-and-a-task-queue-Why-would-a-task-queue-require-a-message-broker-like-RabbitMQ-Redis-Celery-or-IronMQ-to-function)

<a id="communication"></a>
## مواصلات

<p align="center">
  <img src="images/5KeocQs.jpg">
  <br/>
  <i><a href=http://www.escotal.com/osilayer.html>Source: OSI 7 layer model</a></i>
</p>

<a id="hypertext-transfer-protocol-http"></a>
### ہائپر ٹیکسٹ ٹرانسفر پروٹوکول (HTTP)

HTTP ایک کلائنٹ اور سرور کے درمیان ڈیٹا کو انکوڈنگ اور منتقل کرنے کا ایک طریقہ ہے۔  یہ ایک درخواست/جواب پروٹوکول ہے: کلائنٹ درخواستیں جاری کرتے ہیں اور سرور متعلقہ مواد اور درخواست کے بارے میں تکمیل کی حیثیت کی معلومات کے ساتھ جوابات جاری کرتے ہیں۔  HTTP خود ساختہ ہے، درخواستوں اور جوابات کو بہت سے انٹرمیڈیٹ روٹرز اور سرورز کے ذریعے بہنے کی اجازت دیتا ہے جو لوڈ بیلنسنگ، caching، انکرپشن، اور کمپریشن انجام دیتے ہیں۔

ایک بنیادی HTTP درخواست ایک فعل (طریقہ) اور ایک وسائل (اختتام پوائنٹ) پر مشتمل ہوتی ہے۔  ذیل میں عام HTTP فعل ہیں:

|فعل|تفصیل|بے ضمیر*|محفوظ|کیش ایبل|
|---|---|---|---|---|
|حاصل کریں۔|ایک وسیلہ پڑھتا ہے۔|جی ہاں|جی ہاں|جی ہاں|
|پوسٹ|ایک وسیلہ بناتا ہے یا ڈیٹا کو سنبھالنے والے عمل کو متحرک کرتا ہے۔|نہیں|نہیں|ہاں اگر جواب میں تازگی کی معلومات ہو۔|
|ڈالو|کوئی وسیلہ بناتا ہے یا تبدیل کرتا ہے۔|جی ہاں|نہیں|نہیں|
|پیچ|جزوی طور پر ایک وسائل کو اپ ڈیٹ کرتا ہے۔|نہیں|نہیں|ہاں اگر جواب میں تازگی کی معلومات ہو۔|
|حذف کریں۔|ایک وسائل کو حذف کرتا ہے۔|جی ہاں|نہیں|نہیں|

*مختلف نتائج کے بغیر کئی بار کال کی جاسکتی ہے۔

HTTP ایک ایپلیکیشن لیئر پروٹوکول ہے جو نچلے درجے کے پروٹوکولز جیسے **TCP** اور **UDP** پر انحصار کرتا ہے۔

<a id="sources-and-further-reading-http"></a>
#### ماخذ اور مزید پڑھنا: HTTP

* [HTTP کیا ہے؟](https://www.nginx.com/resources/glossary/http/)
* [HTTP اور TCP کے درمیان فرق](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol)
* [PUT اور PATCH کے درمیان فرق](https://laracasts.com/discuss/channels/general-discussion/whats-the-differences-between-put-and-patch?page=1)

<a id="transmission-control-protocol-tcp"></a>
### ٹرانسمیشن کنٹرول پروٹوکول (TCP)

<p align="center">
  <img src="images/JdAsdvG.jpg">
  <br/>
  <i><a href=http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/>Source: How to make a multiplayer game</a></i>
</p>

TCP ایک کنکشن پر مبنی پروٹوکول ہے۔ [IP نیٹ ورک](https://en.wikipedia.org/wiki/Internet_Protocol).  ایک کا استعمال کرتے ہوئے کنکشن قائم اور ختم کیا جاتا ہے۔ [مصافحہ](https://en.wikipedia.org/wiki/Handshaking).  بھیجے گئے تمام پیکٹوں کی اصل ترتیب اور بدعنوانی کے بغیر منزل تک پہنچنے کی ضمانت دی جاتی ہے:

* ترتیب نمبر اور [چیکسم فیلڈز](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Checksum_computation) ہر پیکٹ کے لیے
* [اعتراف](https://en.wikipedia.org/wiki/Acknowledgement_(data_networks)) پیکٹ اور خودکار ری ٹرانسمیشن

اگر بھیجنے والے کو صحیح جواب نہیں ملتا ہے، تو وہ پیکٹ دوبارہ بھیج دے گا۔  اگر متعدد ٹائم آؤٹ ہوتے ہیں، تو کنکشن چھوڑ دیا جاتا ہے۔  TCP بھی لاگو کرتا ہے۔ [بہاؤ کنٹرول](https://en.wikipedia.org/wiki/Flow_control_(data)) اور [بھیڑ کنٹرول](https://en.wikipedia.org/wiki/Network_congestion#Congestion_control).  یہ ضمانتیں تاخیر کا سبب بنتی ہیں اور عام طور پر UDP سے کم موثر ٹرانسمیشن کا نتیجہ ہوتی ہیں۔

اعلی throughput کو یقینی بنانے کے لیے، ویب سرورز TCP کنکشنز کی ایک بڑی تعداد کو کھلا رکھ سکتے ہیں، جس کے نتیجے میں میموری کا زیادہ استعمال ہوتا ہے۔  ویب سرور تھریڈز کے درمیان بڑی تعداد میں کھلے رابطوں کا ہونا مہنگا پڑ سکتا ہے اور کہتے ہیں، a [memcached](https://memcached.org/) سرور [کنکشن پولنگ](https://en.wikipedia.org/wiki/Connection_pool) جہاں قابل اطلاق ہو UDP پر سوئچ کرنے کے علاوہ مدد کر سکتا ہے۔

TCP ان ایپلی کیشنز کے لیے مفید ہے جن کے لیے زیادہ reliability کی ضرورت ہوتی ہے لیکن وہ کم وقت کے لیے ضروری ہیں۔  کچھ مثالوں میں ویب سرورز، database معلومات، SMTP، FTP، اور SSH شامل ہیں۔

UDP پر TCP استعمال کریں جب:

* آپ کو برقرار رہنے کے لیے تمام ڈیٹا کی ضرورت ہے۔
* آپ نیٹ ورک throughput کا خود بخود ایک بہترین تخمینہ استعمال کرنا چاہتے ہیں۔

<a id="user-datagram-protocol-udp"></a>
### یوزر ڈیٹاگرام پروٹوکول (UDP)

<p align="center">
  <img src="images/yzDrJtA.jpg">
  <br/>
  <i><a href=http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/>Source: How to make a multiplayer game</a></i>
</p>

UDP کنکشن لیس ہے۔  ڈیٹاگرامس (پیکٹوں کے مشابہ) کی ضمانت صرف ڈیٹاگرام کی سطح پر دی جاتی ہے۔  ڈیٹاگرام اپنی منزل تک پہنچ سکتے ہیں یا بالکل بھی نہیں۔  UDP بھیڑ کنٹرول کی حمایت نہیں کرتا ہے۔  TCP کی حمایت کی ضمانتوں کے بغیر، UDP عام طور پر زیادہ موثر ہے۔

UDP نشر کر سکتا ہے، سب نیٹ پر موجود تمام آلات پر ڈیٹا گرام بھیج سکتا ہے۔  یہ اس کے ساتھ مفید ہے۔ [ڈی ایچ سی پی](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) کیونکہ کلائنٹ کو ابھی تک IP ایڈریس موصول نہیں ہوا ہے، اس طرح TCP کو IP ایڈریس کے بغیر اسٹریم کرنے کا راستہ روک رہا ہے۔

UDP کم قابل اعتماد ہے لیکن حقیقی وقت کے استعمال کے معاملات جیسے کہ VoIP، ویڈیو چیٹ، اسٹریمنگ، اور ریئل ٹائم ملٹی پلیئر گیمز میں اچھی طرح سے کام کرتا ہے۔

TCP پر UDP استعمال کریں جب:

* آپ کو سب سے کم latency کی ضرورت ہے۔
* دیر سے ڈیٹا ڈیٹا کے ضائع ہونے سے بھی بدتر ہے۔
* آپ اپنی غلطی کی اصلاح کو لاگو کرنا چاہتے ہیں۔

<a id="sources-and-further-reading-tcp-and-udp"></a>
#### ماخذ اور مزید پڑھنا: TCP اور UDP

* [گیم پروگرامنگ کے لیے نیٹ ورکنگ](https://gafferongames.com/post/udp_vs_tcp/)
* [TCP اور UDP پروٹوکول کے درمیان کلیدی فرق](http://www.cyberciti.biz/faq/key-differences-between-tcp-and-udp-protocols/)
* [TCP اور UDP کے درمیان فرق](http://stackoverflow.com/questions/5970383/difference-between-tcp-and-udp)
* [ٹرانسمیشن کنٹرول پروٹوکول](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
* [صارف ڈیٹاگرام پروٹوکول](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
* [Facebook پر memcache سکیل کرنا](http://www.cs.bu.edu/~jappavoo/jappavoo.github.com/451/papers/memcache-fb.pdf)

<a id="remote-procedure-call-rpc"></a>
### ریموٹ طریقہ کار کال (RPC)

<p align="center">
  <img src="images/iF4Mkb5.png">
  <br/>
  <i><a href=http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview>Source: Crack the system design interview</a></i>
</p>

RPC میں، ایک کلائنٹ ایک مختلف ایڈریس اسپیس، عام طور پر ایک ریموٹ سرور پر ایک طریقہ کار کو انجام دینے کا سبب بنتا ہے۔  طریقہ کار کو اس طرح کوڈ کیا جاتا ہے جیسے یہ ایک مقامی طریقہ کار کی کال ہو، جس میں کلائنٹ پروگرام سے سرور کے ساتھ بات چیت کرنے کے طریقے کی تفصیلات کو خلاصہ کیا جاتا ہے۔  ریموٹ کالز عام طور پر مقامی کالوں کے مقابلے میں سست اور کم قابل اعتماد ہوتی ہیں اس لیے مقامی کالوں سے RPC کالوں میں فرق کرنا مددگار ہے۔  مشہور RPC فریم ورک میں شامل ہیں۔ [پروٹوبف](https://developers.google.com/protocol-buffers/), [کفایت شعاری](https://thrift.apache.org/) ، اور [ایورو](https://avro.apache.org/docs/current/).

RPC ایک درخواست کے جواب کا پروٹوکول ہے:

* **Client پروگرام** - کلائنٹ اسٹب طریقہ کار کو کال کرتا ہے۔  پیرامیٹرز کو مقامی طریقہ کار کی کال کی طرح اسٹیک پر دھکیل دیا جاتا ہے۔
* **Client اسٹب طریقہ کار** - مارشلز (پیک) طریقہ کار کی شناخت اور درخواست کے پیغام میں دلائل۔
* **Client کمیونیکیشن ماڈیول** - OS کلائنٹ سے سرور کو پیغام بھیجتا ہے۔
* **Server کمیونیکیشن ماڈیول** - OS آنے والے پیکٹ کو سرور اسٹب کے طریقہ کار میں منتقل کرتا ہے۔
* **Server اسٹب طریقہ کار** - نتائج کو غیر مارش کرتا ہے، طریقہ کار کی شناخت سے مماثل سرور کے طریقہ کار کو کال کرتا ہے اور دیے گئے دلائل کو پاس کرتا ہے۔
* سرور کا جواب اوپر کے مراحل کو الٹ ترتیب میں دہراتا ہے۔

نمونہ RPC کالز:

```
GET /someoperation?data=anId

POST /anotheroperation
{
  "data":"anId";
  "anotherdata": "another value"
}
```

RPC رویوں کو بے نقاب کرنے پر مرکوز ہے۔  RPCs کو اکثر اندرونی مواصلات کے ساتھ کارکردگی کی وجوہات کے لیے استعمال کیا جاتا ہے، کیونکہ آپ اپنے استعمال کے معاملات کو بہتر طریقے سے فٹ کرنے کے لیے مقامی کالوں کو ہاتھ سے تیار کر سکتے ہیں۔

مقامی لائبریری (عرف SDK) کا انتخاب کریں جب:

* آپ اپنے ٹارگٹ پلیٹ فارم کو جانتے ہیں۔
* آپ یہ کنٹرول کرنا چاہتے ہیں کہ آپ کی "منطق" تک کیسے رسائی حاصل کی جاتی ہے۔
* آپ یہ کنٹرول کرنا چاہتے ہیں کہ آپ کی لائبریری سے غلطی کا کنٹرول کیسے ہوتا ہے۔
* کارکردگی اور آخری صارف کا تجربہ آپ کی بنیادی تشویش ہے۔

**REST** کے بعد HTTP APIs عوامی APIs کے لیے زیادہ کثرت سے استعمال ہوتے ہیں۔

<a id="disadvantages-rpc"></a>
#### نقصانات: RPC

* RPC کلائنٹس سروس کے نفاذ کے ساتھ مضبوطی سے جڑے ہوئے ہیں۔
* ہر نئے آپریشن یا استعمال کے کیس کے لیے ایک نئے API کی تعریف ہونی چاہیے۔
* RPC کو ڈیبگ کرنا مشکل ہوسکتا ہے۔
* ہو سکتا ہے کہ آپ موجودہ ٹیکنالوجیز کا فائدہ اٹھانے کے قابل نہ ہوں۔  مثال کے طور پر، اسے یقینی بنانے کے لیے اضافی کوشش کی ضرورت ہو سکتی ہے۔ [RPC کالیں مناسب طریقے سے کیش کی جاتی ہیں۔](https://web.archive.org/web/20170608193645/http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/) caching سرورز پر جیسے [سکویڈ](http://www.squid-cache.org/).

<a id="representational-state-transfer-rest"></a>
### ریاستی نمائندگی کی منتقلی (REST)

REST ایک آرکیٹیکچرل اسٹائل ہے جو کلائنٹ/سرور ماڈل کو نافذ کرتا ہے جہاں کلائنٹ سرور کے زیر انتظام وسائل کے سیٹ پر کام کرتا ہے۔  سرور وسائل اور اعمال کی نمائندگی فراہم کرتا ہے جو یا تو ہیرا پھیری کر سکتے ہیں یا وسائل کی نئی نمائندگی حاصل کر سکتے ہیں۔  تمام مواصلت بے ریاست اور کیش ایبل ہونی چاہیے۔

آرام دہ انٹرفیس کی چار خصوصیات ہیں:

* **وسائل کی شناخت کریں (HTTP میں URI)** - کسی بھی آپریشن سے قطع نظر وہی URI استعمال کریں۔
* **نمائش کے ساتھ تبدیلی (HTTP میں فعل)** - فعل، ہیڈر اور باڈی استعمال کریں۔
* **خود وضاحتی غلطی کا پیغام (HTTP میں اسٹیٹس کا جواب)** - اسٹیٹس کوڈ استعمال کریں، پہیے کو دوبارہ نہ بنائیں۔
* **[HATEOAS](http://restcookbook.com/Basics/hateoas/)(HTTP کے لیے HTML انٹرفیس)** - آپ کی ویب سروس براؤزر میں پوری طرح قابل رسائی ہونی چاہیے۔

نمونہ REST کالز:

```
GET /someresources/anId

PUT /someresources/anId
{"anotherdata": "another value"}
```

REST ڈیٹا کو ظاہر کرنے پر مرکوز ہے۔  یہ کلائنٹ/سرور کے درمیان جوڑے کو کم سے کم کرتا ہے اور اکثر عوامی HTTP APIs کے لیے استعمال ہوتا ہے۔  REST URIs کے ذریعے وسائل کو ظاہر کرنے کا زیادہ عام اور یکساں طریقہ استعمال کرتا ہے، [ہیڈر کے ذریعے نمائندگی](https://github.com/for-GET/know-your-http-well/blob/master/headers.md) ، اور فعل جیسے GET، POST، PUT، DELETE، اور PATCH کے ذریعے اعمال۔  بے وطن ہونے کی وجہ سے، REST افقی اسکیلنگ اور partitioning کے لیے بہترین ہے۔

<a id="disadvantages-rest"></a>
#### نقصانات: REST

* REST ڈیٹا کو ظاہر کرنے پر مرکوز ہونے کے ساتھ، اگر وسائل قدرتی طور پر منظم نہ ہوں یا ایک سادہ درجہ بندی میں ان تک رسائی حاصل نہ کی گئی ہو تو یہ مناسب نہیں ہوگا۔  مثال کے طور پر، واقعات کے ایک مخصوص سیٹ سے مماثل پچھلے گھنٹے کے تمام اپ ڈیٹ شدہ ریکارڈز کو واپس کرنا ایک راستے کے طور پر آسانی سے ظاہر نہیں ہوتا ہے۔  REST کے ساتھ، یہ URI پاتھ، استفسار کے پیرامیٹرز، اور ممکنہ طور پر درخواست کی باڈی کے امتزاج کے ساتھ لاگو ہونے کا امکان ہے۔
* REST عام طور پر چند فعل (GET, POST, PUT, DELETE, اور PATCH) پر انحصار کرتا ہے جو بعض اوقات آپ کے استعمال کے معاملے میں فٹ نہیں ہوتے ہیں۔  مثال کے طور پر، میعاد ختم ہونے والی دستاویزات کو آرکائیو فولڈر میں منتقل کرنا ان فعل کے اندر صاف طور پر فٹ نہیں ہوسکتا ہے۔
* نیسٹڈ درجہ بندی کے ساتھ پیچیدہ وسائل کی بازیافت کے لیے کلائنٹ اور سرور کے درمیان ایک سے زیادہ راؤنڈ ٹرپس کی ضرورت ہوتی ہے تاکہ سنگل ویوز پیش کیے جا سکیں، جیسے بلاگ کے اندراج کا مواد اور اس اندراج پر تبصرے حاصل کرنا۔ متغیر نیٹ ورک کے حالات میں کام کرنے والی موبائل ایپلیکیشنز کے لیے، یہ متعدد راؤنڈ ٹرپس انتہائی ناپسندیدہ ہیں۔
* وقت گزرنے کے ساتھ، API جواب میں مزید فیلڈز شامل کیے جاسکتے ہیں اور پرانے کلائنٹس کو تمام نئے ڈیٹا فیلڈز ملیں گے، یہاں تک کہ وہ بھی جن کی انہیں ضرورت نہیں ہے، نتیجے کے طور پر، یہ پے لوڈ کے سائز کو بڑھاتا ہے اور بڑی تاخیر کا باعث بنتا ہے۔

<a id="rpc-and-rest-calls-comparison"></a>
### RPC اور REST کالز کا موازنہ

|آپریشن|RPC|REST|
|---|---|---|
|سائن اپ|**پوسٹ**/سائن اپ|**پوسٹ**/افراد|
|استعفیٰ دیں۔|**پوسٹ** /استعفی <br/>{<br/>"personid": "1234"<br/>}|**حذف کریں** /persons/1234|
|ایک شخص کو پڑھیں|**GET** /readPerson?personid=1234|**GET** /persons/1234|
|کسی شخص کی اشیاء کی فہرست پڑھیں|**GET** /readUsersItemsList?personid=1234|**GET** /persons/1234/items|
|کسی شخص کی اشیاء میں ایک آئٹم شامل کریں۔|**پوسٹ** /addItemToUsersItemsList<br/>{<br/>"personid": "1234";<br/>"itemid": "456"<br/>}|**POST** /persons/1234/items<br/>{<br/>"itemid": "456"<br/>}|
|ایک آئٹم کو اپ ڈیٹ کریں۔|**پوسٹ** /modifyItem<br/>{<br/>"itemid": "456";<br/>"key": "value"<br/>}|**PUT** /items/456<br/>{<br/>"key": "value"<br/>}|
|ایک آئٹم کو حذف کریں۔|**پوسٹ** /removeItem<br/>{<br/>"itemid": "456"<br/>}|**حذف کریں** /items/456|

<p align="center">
  <i><a href=https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/>Source: Do you really know why you prefer REST over RPC</a></i>
</p>

<a id="sources-and-further-reading-rest-and-rpc"></a>
#### ماخذ اور مزید پڑھنا: REST اور RPC

* [کیا آپ واقعی جانتے ہیں کہ آپ RPC پر REST کو کیوں ترجیح دیتے ہیں؟](https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/)
* [RPC-ish نقطہ نظر REST سے کب زیادہ مناسب ہیں؟](http://programmers.stackexchange.com/a/181186)
* [REST بمقابلہ JSON-RPC](http://stackoverflow.com/questions/15056878/rest-vs-json-rpc)
* [RPC اور REST کی خرافات کو ختم کرنا](https://web.archive.org/web/20170608193645/http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/)
* [REST استعمال کرنے کے کیا نقصانات ہیں۔](https://www.quora.com/What-are-the-drawbacks-of-using-RESTful-APIs)
* [system design انٹرویو کریک کریں۔](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)
* [کفایت شعاری](https://code.facebook.com/posts/1468950976659943/)
* [REST اندرونی استعمال کے لیے کیوں نہ RPC کے لیے](http://arstechnica.com/civis/viewtopic.php?t=1190508)

<a id="security"></a>
## سیکورٹی

یہ سیکشن کچھ اپ ڈیٹس استعمال کر سکتا ہے۔  غور کریں۔ [شراکت](#contributing)!

سیکورٹی ایک وسیع موضوع ہے۔  جب تک کہ آپ کو کافی تجربہ، سیکیورٹی کا پس منظر، یا کسی ایسی پوزیشن کے لیے درخواست دے رہے ہیں جس کے لیے سیکیورٹی کا علم درکار ہے، آپ کو شاید بنیادی باتوں سے زیادہ جاننے کی ضرورت نہیں ہوگی:

* ٹرانزٹ اور آرام میں خفیہ کاری۔
* روکنے کے لیے صارف کے تمام ان پٹس یا کسی بھی ان پٹ پیرامیٹرز کو صاف کریں۔ [ایکس ایس ایس](https://en.wikipedia.org/wiki/Cross-site_scripting) اور [SQL انجیکشن](https://en.wikipedia.org/wiki/SQL_injection).
* SQL انجیکشن کو روکنے کے لیے پیرامیٹرائزڈ سوالات کا استعمال کریں۔
* کا اصول استعمال کریں۔ [کم از کم استحقاق](https://en.wikipedia.org/wiki/Principle_of_least_privilege).

<a id="sources-and-further-reading-12"></a>
### ماخذ اور مزید پڑھنا

* [API سیکیورٹی چیک لسٹ](https://github.com/shieldfy/API-Security-Checklist)
* [ڈویلپرز کے لیے سیکیورٹی گائیڈ](https://github.com/FallibleInc/security-guide-for-developers)
* [OWASP ٹاپ ٹین](https://www.owasp.org/index.php/OWASP_Top_Ten_Cheat_Sheet)

<a id="appendix"></a>
## اپینڈکس

آپ سے کبھی کبھی 'لفافے کے پیچھے' تخمینہ لگانے کو کہا جائے گا۔  مثال کے طور پر، آپ کو یہ تعین کرنے کی ضرورت ہو سکتی ہے کہ ڈسک سے 100 تصویری تھمب نیلز بنانے میں کتنا وقت لگے گا یا ڈیٹا ڈھانچہ کتنی میموری لے گا۔  **دو ٹیبل کی طاقتیں** اور **Latency نمبر جو ہر پروگرامر کو معلوم ہونا چاہیے** آسان حوالہ جات ہیں۔

<a id="powers-of-two-table"></a>
### دو میز کی طاقتیں۔

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

<a id="sources-and-further-reading-13"></a>
#### ماخذ اور مزید پڑھنا

* [دو کی طاقتیں۔](https://en.wikipedia.org/wiki/Power_of_two)

<a id="latency-numbers-every-programmer-should-know"></a>
### Latency نمبر ہر پروگرامر کو معلوم ہونا چاہئے۔

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

مندرجہ بالا نمبروں پر مبنی آسان میٹرکس:

* HDD سے 30 MB/s پر ترتیب وار پڑھیں
* 1 Gbps ایتھرنیٹ سے 100 MB/s پر ترتیب وار پڑھیں
* SSD سے 1 GB/s پر ترتیب وار پڑھیں
* مین میموری سے 4 GB/s پر ترتیب وار پڑھیں
* 6-7 دنیا بھر کے راؤنڈ ٹرپس فی سیکنڈ
* ڈیٹا سینٹر کے اندر 2,000 راؤنڈ ٹرپ فی سیکنڈ

<a id="latency-numbers-visualized"></a>
#### Latency نمبروں کا تصور کیا گیا۔

![](https://camo.githubusercontent.com/77f72259e1eb58596b564d1ad823af1853bc60a3/687474703a2f2f692e696d6775722e636f6d2f6b307431652e706e67)

<a id="sources-and-further-reading-14"></a>
#### ماخذ اور مزید پڑھنا

* [Latency نمبر ہر پروگرامر کو معلوم ہونا چاہئے - 1](https://gist.github.com/jboner/2841832)
* [Latency نمبر جو ہر پروگرامر کو معلوم ہونا چاہئے - 2](https://gist.github.com/hellerbarde/2843375)
* [بڑے تقسیم شدہ نظاموں کی تعمیر سے متعلق ڈیزائن، اسباق اور مشورے۔](http://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf)
* [بڑے پیمانے پر تقسیم شدہ نظاموں کی تعمیر سے سافٹ ویئر انجینئرنگ کا مشورہ](https://static.googleusercontent.com/media/research.google.com/en//people/jeff/stanford-295-talk.pdf)

<a id="additional-system-design-interview-questions"></a>
### اضافی system design انٹرویو کے سوالات

> مشترکہ system design انٹرویو کے سوالات، ہر ایک کو حل کرنے کے وسائل کے لنکس کے ساتھ۔

|سوال|حوالہ|
|---|---|
|ڈراپ باکس جیسی فائل سنک سروس ڈیزائن کریں۔| [youtube.com](https://www.youtube.com/watch?v=PE4gwstWhmc) |
|گوگل جیسا سرچ انجن ڈیزائن کریں۔| [queue.acm.org](http://queue.acm.org/detail.cfm?id=988407)<br/>[stackexchange.com](http://programmers.stackexchange.com/questions/38324/interview-question-how-would-you-implement-google-search)<br/>[ardendertat.com](http://www.ardendertat.com/2012/01/11/implementing-search-engines/)<br/>[stanford.edu](http://infolab.stanford.edu/~backrub/google.html) |
|گوگل کی طرح توسیع پذیر ویب کرالر ڈیزائن کریں۔| [quora.com](https://www.quora.com/How-can-I-build-a-web-crawler-from-scratch) |
|گوگل دستاویزات کو ڈیزائن کریں۔| [code.google.com](https://code.google.com/p/google-mobwrite/)<br/>[neil.fraser.name](https://neil.fraser.name/writing/sync/) |
|Redis جیسا کلیدی قدر والا اسٹور ڈیزائن کریں۔| [codecapsule.com](http://codecapsule.com/2012/11/07/ikvs-implementing-a-key-value-store-table-of-contents/)<br/>[allthingsdistributed.com](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf) |
|Memcached جیسا cache سسٹم ڈیزائن کریں۔| [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached) |
|ایمیزون کی طرح ایک سفارشی نظام ڈیزائن کریں۔| [hulu.com](https://web.archive.org/web/20170406065247/http://tech.hulu.com/blog/2011/09/19/recommendation-system.html)<br/>[ijcai13.org](http://ijcai13.org/files/tutorial_slides/td3.pdf) |
|Bitly جیسا tinyurl سسٹم ڈیزائن کریں۔| [n00tc0d3r.blogspot.com](http://n00tc0d3r.blogspot.com/) |
|واٹس ایپ جیسی چیٹ ایپ ڈیزائن کریں۔| [highscalability.com](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html)
|Instagram جیسا تصویر شیئرنگ سسٹم ڈیزائن کریں۔| [highscalability.com](http://highscalability.com/flickr-architecture)<br/>[highscalability.com](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html) |
|Facebook نیوز فیڈ فنکشن ڈیزائن کریں۔| [quora.com](http://www.quora.com/What-are-best-practices-for-building-something-like-a-News-Feed)<br/>[quora.com](http://www.quora.com/Activity-Streams/What-are-the-scaling-issues-to-keep-in-mind-while-developing-a-social-network-feed)<br/>[slideshare.net](http://www.slideshare.net/danmckinley/etsy-activity-feeds-architecture) |
|Facebook ٹائم لائن فنکشن ڈیزائن کریں۔| [facebook.com](https://www.facebook.com/note.php?note_id=10150468255628920)<br/>[highscalability.com](http://highscalability.com/blog/2012/1/23/facebook-timeline-brought-to-you-by-the-power-of-denormaliza.html) |
|Facebook چیٹ فنکشن ڈیزائن کریں۔| [erlang-factory.com](http://www.erlang-factory.com/upload/presentations/31/EugeneLetuchy-ErlangatFacebook.pdf)<br/>[facebook.com](https://www.facebook.com/note.php?note_id=14218138919&id=9445547199&index=0) |
|Facebook کی طرح گراف سرچ فنکشن ڈیزائن کریں۔| [facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-building-out-the-infrastructure-for-graph-search/10151347573598920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-indexing-and-ranking-in-graph-search/10151361720763920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-the-natural-language-interface-of-graph-search/10151432733048920) |
|CloudFlare جیسا مواد کی ترسیل کا نیٹ ورک ڈیزائن کریں۔| [figshare.com](https://figshare.com/articles/Globally_distributed_content_delivery/6605972) |
|Twitter کی طرح ایک ٹرینڈنگ ٹاپک سسٹم ڈیزائن کریں۔| [michael-noll.com](http://www.michael-noll.com/blog/2013/01/18/implementing-real-time-trending-topics-in-storm/)<br/>[snikolov .wordpress.com](http://snikolov.wordpress.com/2012/11/14/early-detection-of-twitter-trends/) |
|ایک بے ترتیب ID جنریشن سسٹم ڈیزائن کریں۔| [blog.twitter.com](https://blog.twitter.com/2010/announcing-snowflake)<br/>[github.com](https://github.com/twitter/snowflake/) |
|وقت کے وقفے کے دوران سرفہرست k درخواستیں واپس کریں۔| [cs.ucsb.edu](https://www.cs.ucsb.edu/sites/default/files/documents/2005-23.pdf)<br/>[wpi.edu](http://davis.wpi.edu/xmdv/docs/EDBT11-diyang.pdf) |
|ایک ایسا نظام ڈیزائن کریں جو متعدد ڈیٹا سینٹرز سے ڈیٹا پیش کرے۔| [highscalability.com](http://highscalability.com/blog/2009/8/24/how-google-serves-data-from-multiple-datacenters.html) |
|ایک آن لائن ملٹی پلیئر کارڈ گیم ڈیزائن کریں۔| [indieflashblog.com](https://web.archive.org/web/20180929181117/http://www.indieflashblog.com/how-to-create-an-asynchronous-multiplayer-game.html)<br/>[buildnewgames.com](http://buildnewgames.com/real-time-multiplayer/) |
|کوڑا اٹھانے کا نظام ڈیزائن کریں۔| [stuffwithstuff.com](http://journal.stuffwithstuff.com/2013/12/08/babys-first-garbage-collector/)<br/>[washington.edu](http://courses.cs.washington.edu/courses/csep521/07wi/prj/rick.pdf) |
|API ریٹ محدود کرنے والا ڈیزائن کریں۔| [https://stripe.com/blog/](https://stripe.com/blog/rate-limiters) |
|اسٹاک ایکسچینج ڈیزائن کریں (جیسے NASDAQ یا Binance)| [جین اسٹریٹ](https://youtu.be/b1e4t2k2KJY)<br/>[گولانگ پر عمل درآمد](https://around25.com/blog/building-a-trading-engine-for-a-crypto-exchange/)<br/>[عمل درآمد پر جائیں۔](http://bhomnick.net/building-a-simple-limit-order-in-go/) |
|ایک system design سوال شامل کریں۔| [تعاون کریں۔](#contributing) |

<a id="real-world-architectures"></a>
### حقیقی دنیا کے فن تعمیرات

> حقیقی دنیا کے نظام کو کس طرح ڈیزائن کیا جاتا ہے اس پر مضامین۔

<p align="center">
  <img src="images/TcUo2fw.png">
  <br/>
  <i><a href=https://www.infoq.com/presentations/Twitter-Timeline-Scalability>Source: Twitter timelines at scale</a></i>
</p>

**اس کے بجائے درج ذیل مضامین کے لیے مزے دار تفصیلات پر توجہ نہ دیں:**

* ان مضامین میں مشترکہ اصولوں، مشترکہ ٹیکنالوجیز اور نمونوں کی شناخت کریں۔
*مطالعہ کریں کہ ہر ایک جزو سے کون سے مسائل حل ہوتے ہیں، یہ کہاں کام کرتا ہے، کہاں نہیں کرتا
* سیکھے گئے اسباق کا جائزہ لیں۔

|قسم|سسٹم|حوالہ|
|---|---|---|
|ڈیٹا پروسیسنگ|**MapReduce** - گوگل کی طرف سے تقسیم شدہ ڈیٹا پروسیسنگ| [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/mapreduce-osdi04.pdf) |
|ڈیٹا پروسیسنگ|**چنگاری** - ڈیٹا برکس سے تقسیم شدہ ڈیٹا پروسیسنگ| [slideshare.net](http://www.slideshare.net/AGrishchenko/apache-spark-architecture) |
|ڈیٹا پروسیسنگ|**طوفان** - Twitter سے تقسیم شدہ ڈیٹا پروسیسنگ| [slideshare.net](http://www.slideshare.net/previa/storm-16094009) |
| | | |
|ڈیٹا اسٹور|**Bigtable** - Google کی جانب سے تقسیم شدہ کالم پر مبنی database| [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf) |
|ڈیٹا اسٹور|**HBase** - Bigtable کا اوپن سورس نفاذ| [slideshare.net](http://www.slideshare.net/alexbaranau/intro-to-hbase) |
|ڈیٹا اسٹور|**Cassandra** - تقسیم شدہ کالم پر مبنی database سے Facebook| [slideshare.net](http://www.slideshare.net/planetcassandra/cassandra-introduction-features-30103666)
|ڈیٹا اسٹور|**DynamoDB** - Amazon سے دستاویز پر مبنی database| [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf) |
|ڈیٹا اسٹور|**MongoDB** - دستاویز پر مبنی database| [slideshare.net](http://www.slideshare.net/mdirolf/introduction-to-mongodb) |
|ڈیٹا اسٹور|**اسپینر** - گوگل کی جانب سے عالمی سطح پر تقسیم شدہ database| [research.google.com](http://research.google.com/archive/spanner-osdi2012.pdf) |
|ڈیٹا اسٹور|**Memcached** - تقسیم شدہ میموری caching سسٹم| [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached) |
|ڈیٹا اسٹور|**Redis** - مستقل مزاجی اور قدر کی اقسام کے ساتھ تقسیم شدہ میموری caching سسٹم| [slideshare.net](http://www.slideshare.net/dvirsky/introduction-to-redis) |
| | | |
|فائل سسٹم|**گوگل فائل سسٹم (GFS)** - تقسیم شدہ فائل سسٹم| [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/gfs-sosp2003.pdf) |
|فائل سسٹم|**ہڈوپ فائل سسٹم (HDFS)** - GFS کا اوپن سورس نفاذ| [apache.org](http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html) |
| | | |
|متفرق|**چبی** - گوگل کی طرف سے ڈھیلے جوڑے والے تقسیم شدہ نظاموں کے لیے لاک سروس| [research.google.com](http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/archive/chubby-osdi06.pdf) |
|متفرق|**ڈیپر** - بنیادی ڈھانچے کا سراغ لگانے والے تقسیم شدہ نظام| [research.google.com](http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36356.pdf)
|متفرق|**Kafka** - لنکڈ ان سے پب/سب میسج queue| [slideshare.net](http://www.slideshare.net/mumrah/kafka-talk-tri-hug) |
|متفرق|**زوکیپر** - سنکرونائزیشن کو فعال کرنے والا مرکزی ڈھانچہ اور خدمات| [slideshare.net](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) |
| |ایک فن تعمیر شامل کریں۔| [تعاون کریں۔](#contributing) |

<a id="company-architectures"></a>
### کمپنی کے فن تعمیرات

|کمپنی|حوالہ|
|---|---|
|ایمیزون| [ایمیزون فن تعمیر](http://highscalability.com/amazon-architecture) |
|سنچکاسٹ| [ہر روز 1,500 گھنٹے آڈیو تیار کرنا](http://highscalability.com/blog/2012/7/16/cinchcast-architecture-producing-1500-hours-of-audio-every-d.html) |
|ڈیٹا سیفٹ| [ریئل ٹائم ڈیٹا مائننگ فی سیکنڈ 120,000 ٹویٹس](http://highscalability.com/blog/2011/11/29/datasift-architecture-realtime-datamining-at-120000-tweets-p.html) |
|ڈراپ باکس| [ہم نے ڈراپ باکس کی پیمائش کیسے کی ہے۔](https://www.youtube.com/watch?v=PE4gwstWhmc) |
|ای ایس پی این| [100,000 duh nuh nuhs فی سیکنڈ پر چل رہا ہے۔](http://highscalability.com/blog/2013/11/4/espns-architecture-at-scale-operating-at-100000-duh-nuh-nuhs.html) |
|گوگل| [گوگل فن تعمیر](http://highscalability.com/google-architecture) |
|Instagram| [14 ملین صارفین، تصاویر کے ٹیرا بائٹس](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html)<br/>[Instagram کو کیا طاقت دیتا ہے۔](http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances) |
|جسٹن ڈاٹ ٹی وی| [Justin.Tv کا لائیو ویڈیو براڈکاسٹنگ فن تعمیر](http://highscalability.com/blog/2010/3/16/justintvs-live-video-broadcasting-architecture.html) |
|Facebook| [اسکیلنگ Facebook پر memcached](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/key-value/fb-memcached-nsdi-2013.pdf)<br/>[TAO: سماجی گراف کے لیے Facebook کا تقسیم شدہ ڈیٹا اسٹور](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/data-store/tao-facebook-distributed-datastore-atc-2013.pdf)<br/>[Facebook کا فوٹو اسٹوریج](https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Beaver.pdf)<br/>[Facebook بیک وقت 800,000 ناظرین کو کیسے لائیو سٹریم کرتا ہے](http://highscalability.com/blog/2016/6/27/how-facebook-live-streams-to-800000-simultaneous-viewers.html) |
|فلکر| [فلکر فن تعمیر](http://highscalability.com/flickr-architecture) |
|میل باکس| [6 ہفتوں میں 0 سے 10 لاکھ صارفین](http://highscalability.com/blog/2013/6/18/scaling-mailbox-from-0-to-one-million-users-in-6-weeks-and-1.html) |
|نیٹ فلکس| [پورے Netflix اسٹیک کا 360 ڈگری منظر](http://highscalability.com/blog/2015/11/9/a-360-degree-view-of-the-entire-netflix-stack.html)<br/>[Netflix: جب آپ پلے دبائیں تو کیا ہوتا ہے؟](http://highscalability.com/blog/2017/12/11/netflix-what-happens-when-you-press-play.html) |
|پنٹیرسٹ| [0 سے 10s تک ایک ماہ میں اربوں پیج ویوز](http://highscalability.com/blog/2013/4/15/scaling-pinterest-from-0-to-10s-of-billions-of-page-views-a.html)<br/>[18 ملین زائرین، 10 گنا اضافہ، 12 ملازمین](http://highscalability.com/blog/2012/5/21/pinterest-architecture-update-18-million-visitors-10x-growth.html) |
|پلے فش| [50 ملین ماہانہ صارفین اور بڑھ رہے ہیں۔](http://highscalability.com/blog/2010/9/21/playfishs-social-gaming-architecture-50-million-monthly-user.html) |
|پلینٹی آف فش| [PlentyOfFish فن تعمیر](http://highscalability.com/plentyoffish-architecture) |
|سیلز فورس| [وہ ایک دن میں 1.3 بلین لین دین کیسے کرتے ہیں۔](http://highscalability.com/blog/2013/9/23/salesforce-architecture-how-they-handle-13-billion-transacti.html) |
|Stack Overflow| [Stack Overflow فن تعمیر](http://highscalability.com/blog/2009/8/5/stack-overflow-architecture.html) |
|ٹرپ ایڈوائزر| [40M زائرین، 200M متحرک صفحہ کے نظارے، 30TB ڈیٹا](http://highscalability.com/blog/2011/6/27/tripadvisor-architecture-40m-visitors-200m-dynamic-page-view.html) |
|ٹمبلر| [ایک ماہ میں 15 بلین پیج ویوز](http://highscalability.com/blog/2012/2/13/tumblr-architecture-15-billion-page-views-a-month-and-harder.html) |
|Twitter| [Twitter کو 10000 فیصد تیز تر بنانا](http://highscalability.com/scaling-twitter-making-twitter-10000-percent-faster)<br/>[MySQL کا استعمال کرتے ہوئے روزانہ 250 ملین ٹویٹس کو اسٹور کرنا](http://highscalability.com/blog/2011/12/19/how-twitter-stores-250-million-tweets-a-day-using-mysql.html)<br/>[150M فعال صارفین، 300K QPS، ایک 22 MB/S فائر ہوز](http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html)<br/>[پیمانے پر ٹائم لائنز](https://www.infoq.com/presentations/Twitter-Timeline-Scalability)<br/>[Twitter پر بڑا اور چھوٹا ڈیٹا](https://www.youtube.com/watch?v=5cKTP36HVgI)<br/>[Twitter پر آپریشنز: 100 ملین صارفین سے زیادہ اسکیلنگ](https://www.youtube.com/watch?v=z8LU0Cj6BOU)<br/>[Twitter فی سیکنڈ 3,000 امیجز کو کیسے ہینڈل کرتا ہے۔](http://highscalability.com/blog/2016/4/20/how-twitter-handles-3000-images-per-second.html) |
|اوبر| [Uber اپنے ریئل ٹائم مارکیٹ پلیٹ فارم کو کس طرح پیمانہ بناتا ہے۔](http://highscalability.com/blog/2015/9/14/how-uber-scales-their-real-time-market-platform.html)<br/>[Uber کو سکیل کرنے سے لے کر 2000 انجینئرز، 1000 سروسز، اور 8000 Git Repositories تک سیکھے گئے اسباق](http://highscalability.com/blog/2016/10/12/lessons-learned-from-scaling-uber-to-2000-engineers-1000-ser.html) |
|واٹس ایپ| [واٹس ایپ آرکیٹیکچر Facebook $19 بلین میں خریدا گیا۔](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html) |
|یوٹیوب| [YouTube scalability](https://www.youtube.com/watch?v=w5WVu624fY8)<br/>[یوٹیوب فن تعمیر](http://highscalability.com/youtube-architecture) |

<a id="company-engineering-blogs"></a>
### کمپنی انجینئرنگ بلاگز

> ان کمپنیوں کے لیے فن تعمیرات جن کے ساتھ آپ انٹرویو کر رہے ہیں۔
>
> آپ کے سامنے آنے والے سوالات اسی ڈومین سے ہو سکتے ہیں۔

* [ایئر بی این بی انجینئرنگ](http://nerds.airbnb.com/)
* [Atlassian ڈویلپرز](https://developer.atlassian.com/blog/)
* [AWS بلاگ](https://aws.amazon.com/blogs/aws/)
* [بٹلی انجینئرنگ بلاگ](http://word.bitly.com/)
* [باکس بلاگز](https://blog.box.com/blog/category/engineering)
* [Cloudera ڈویلپر بلاگ](http://blog.cloudera.com/)
* [ڈراپ باکس ٹیک بلاگ](https://tech.dropbox.com/)
* [Quora میں انجینئرنگ](https://www.quora.com/q/quoraengineering)
* [ای بے ٹیک بلاگ](http://www.ebaytechblog.com/)
* [ایورنوٹ ٹیک بلاگ](https://blog.evernote.com/tech/)
* [Etsy کوڈ بطور کرافٹ](http://codeascraft.com/)
* [Facebook انجینئرنگ](https://www.facebook.com/Engineering)
* [فلکر کوڈ](http://code.flickr.net/)
* [Foursquare انجینئرنگ بلاگ](http://engineering.foursquare.com/)
* [GitHub انجینئرنگ بلاگ](https://github.blog/category/engineering)
* [گوگل ریسرچ بلاگ](http://googleresearch.blogspot.com/)
* [گروپن انجینئرنگ بلاگ](https://engineering.groupon.com/)
* [ہیروکو انجینئرنگ بلاگ](https://engineering.heroku.com/)
* [Hubspot انجینئرنگ بلاگ](http://product.hubspot.com/blog/topic/engineering)
* [ہائی Scalability](http://highscalability.com/)
* [Instagram انجینئرنگ](http://instagram-engineering.tumblr.com/)
* [انٹیل سافٹ ویئر بلاگ](https://software.intel.com/en-us/blogs/)
* [جین اسٹریٹ ٹیک بلاگ](https://blogs.janestreet.com/category/ocaml/)
* [لنکڈ ان انجینئرنگ](http://engineering.linkedin.com/blog)
* [مائیکروسافٹ انجینئرنگ](https://engineering.microsoft.com/)
* [مائیکروسافٹ Python انجینئرنگ](https://blogs.msdn.microsoft.com/pythonengineering/)
* [نیٹ فلکس ٹیک بلاگ](http://techblog.netflix.com/)
* [پے پال ڈویلپر بلاگ](https://developer.paypal.com/community/blog/)
* [Pinterest انجینئرنگ بلاگ](https://medium.com/@Pinterest_Engineering)
* [ریڈڈیٹ بلاگ](http://www.redditblog.com/)
* [سیلز فورس انجینئرنگ بلاگ](https://developer.salesforce.com/blogs/engineering/)
* [سلیک انجینئرنگ بلاگ](https://slack.engineering/)
* [اسپاٹائف لیبز](https://labs.spotify.com/)
* [پٹی انجینئرنگ بلاگ](https://stripe.com/blog/engineering)
* [ٹویلیو انجینئرنگ بلاگ](http://www.twilio.com/engineering)
* [Twitter انجینئرنگ](https://blog.twitter.com/engineering/)
* [Uber انجینئرنگ بلاگ](http://eng.uber.com/)
* [یاہو انجینئرنگ بلاگ](http://yahooeng.tumblr.com/)
* [ییلپ انجینئرنگ بلاگ](http://engineeringblog.yelp.com/)
* [زینگا انجینئرنگ بلاگ](https://www.zynga.com/blogs/engineering)

<a id="sources-and-further-reading-15"></a>
#### ماخذ اور مزید پڑھنا

ایک بلاگ شامل کرنا چاہتے ہیں؟  نقل کرنے والے کام سے بچنے کے لیے، اپنے کمپنی کے بلاگ کو درج ذیل ریپو میں شامل کرنے پر غور کریں:

* [kilimchoi/engineering-blogs](https://github.com/kilimchoi/engineering-blogs)

<a id="under-development"></a>
## ترقی کے تحت

کوئی سیکشن شامل کرنے میں دلچسپی ہے یا کسی کو جاری رکھنے میں مدد کرنے میں؟ [تعاون کریں۔](#contributing)!

* MapReduce کے ساتھ تقسیم شدہ کمپیوٹنگ
* مسلسل ہیشنگ
* بکھرے ہوئے جمع
* [تعاون کریں۔](#contributing)

<a id="credits"></a>
## کریڈٹس

اس ریپو میں کریڈٹ اور ذرائع فراہم کیے گئے ہیں۔

خصوصی شکریہ:

* [ٹیک میں خدمات حاصل کیں۔](http://www.hiredintech.com/system-design/the-system-design-process/)
* [کوڈنگ انٹرویو کو کریک کرنا](https://www.amazon.com/dp/0984782850/)
* [ہائی scalability](http://highscalability.com/)
* [checkcheckzz/system-design-interview](https://github.com/checkcheckzz/system-design-interview)
* [shashank88/system_design](https://github.com/shashank88/system_design)
* [ایم ایم سی گرانا/سروسز انجینئرنگ](https://github.com/mmcgrana/services-engineering)
* [System design دھوکہ دہی کی شیٹ](https://gist.github.com/vasanthk/485d1c25737e8e72759f)
* [تقسیم شدہ نظام پڑھنے کی فہرست](http://dancres.github.io/Pages/)
* [system design انٹرویو کو کریک کرنا](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)

<a id="contact-info"></a>
## رابطہ کی معلومات

کسی بھی مسائل، سوالات، یا تبصروں پر بات کرنے کے لئے مجھ سے بلا جھجھک رابطہ کریں۔

میری رابطہ کی معلومات میرے پر مل سکتی ہے۔ [GitHub صفحہ](https://github.com/donnemartin).

<a id="license"></a>
## لائسنس

*میں آپ کو اوپن سورس لائسنس کے تحت اس ذخیرہ میں کوڈ اور وسائل فراہم کر رہا ہوں۔  کیونکہ یہ میرا ذاتی ذخیرہ ہے، آپ کو میرے کوڈ اور وسائل کے لیے جو لائسنس ملتا ہے وہ میری طرف سے ہے نہ کہ میرے آجر (Facebook)*

کاپی رائٹ 2017 ڈون مارٹن

Creative Commons انتساب 4.0 بین الاقوامی لائسنس (CC BY 4.0)

http://creativecommons.org/licenses/by/4.0/
