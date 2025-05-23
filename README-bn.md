*[English](README.md) ∙ [日本語](README-ja.md) ∙ [简体中文](README-zh-Hans.md) ∙ [繁體中文](README-zh-TW.md) | [Arabic](https://github.com/donnemartin/system-design-primer/issues/170) ∙ [Brazilian Portuguese](https://github.com/donnemartin/system-design-primer/issues/40) ∙ [German](https://github.com/donnemartin/system-design-primer/issues/186) ∙ [Greek](https://github.com/donnemartin/system-design-primer/issues/130) ∙ [Italian](https://github.com/donnemartin/system-design-primer/issues/104) ∙ [Korean](https://github.com/donnemartin/system-design-primer/issues/102) ∙ [Persian](https://github.com/donnemartin/system-design-primer/issues/110) ∙ [Polish](https://github.com/donnemartin/system-design-primer/issues/68) ∙ [Russian](https://github.com/donnemartin/system-design-primer/issues/87) ∙ [Spanish](https://github.com/donnemartin/system-design-primer/issues/136) ∙ [Thai](https://github.com/donnemartin/system-design-primer/issues/187) ∙ [Turkish](https://github.com/donnemartin/system-design-primer/issues/39) ∙ [Vietnamese](https://github.com/donnemartin/system-design-primer/issues/127) . [Bengali](https://github.com/donnemartin/system-design-primer/issues220) | [Add Translation](https://github.com/donnemartin/system-design-primer/issues/28)*

# সিস্টেম ডিজাইন পাঠ

<p align="center">
  <img src="http://i.imgur.com/jj3A5N8.png">
  <br/>
</p>

# অনুপ্রেরণা

> বড়-স্কেলের সিস্টেম ডিজাইন সম্বন্ধে ধারণা ।
>
> চাকুরির ইন্টারভিউতে সিস্টেম ডিজাইন বিষয়ক প্রশ্নের প্রস্তুতি ।

### বড়-স্কেলের সিস্টেম ডিজাইন সম্বন্ধে ধারণা

স্কেলেবেল সিস্টেম ডিজাইন সম্বন্ধে ধারণা আপনাকে একজন ভাল প্রকৌশলী হতে সাহায্য করবে।

সিস্টেম ডিজাইন একটি বিশদ বিষয় । সিস্টেম ডিজাইন নীতি নিয়ে **সুবিশাল তথ্যাদি ইন্টারনেটে ছড়িয়ে আছে।**

এখানে তথ্যাদিগুলো সুসংগঠিতভাবে সংগৃহীত হয়েছে যা আপনাকে স্কেলেবেল সিস্টেম সম্বন্ধে জানতে সাহায্য করবে ।

### ওপেন সোর্স জনগোষ্ঠী থেকে শিক্ষা

এটি একটি অবিরাম সংযোজিত, ওপেন সোর্স প্রোজেক্ট।

আমরা [কন্ট্রিবিউশানকে](#contributing) স্বাগতম জানাই!

### সিস্টেম ডিজাইন ইন্টারভিউয়ের জন্য প্রস্তুতি

এছাড়াও কোডিং ইন্টারভিউয়ের জন্য অনেক টেক কোম্পানিতে **টেকনিক্যাল ইন্টারভিউ প্রক্রিয়ায়** সিস্টেম ডিজাইন একটি **আবশ্যিক উপাদান**

**সাধারণ সিস্টেম ডিজাইন ইন্টারভিউ প্রশ্নগুলো অনুশীলন করুন** এবং **নমুনা সমাধানের** সাথে নিজের সমাধান **তুলনা** করুন: আলোচনা করুন, কোড করুন এবং ডায়াগ্রাম ব্যবহার করতে শিখুন

ইন্টারভিউ প্রস্তুতির জন্য আরও কিছু টপিক নিম্নে দেওয়া হল:

* [শিক্ষার নির্দেশিকা](#study-guide)
* [কিভাবে সিস্টেম ডিজাইন ইন্টারভিউ প্রশ্ন মোকাবেলা করবেন](#how-to-approach-a-system-design-interview-question)
* [সিস্টেম ডিজাইন ইন্টারভিউ প্রশ্ন, **সমাধানসহ**](#system-design-interview-questions-with-solutions)
* [অবজেক্ট ওরিয়েন্টেড ডিজাইন ইন্টারভিউ প্রশ্ন, **সমাধানসহ**](#object-oriented-design-interview-questions-with-solutions)
* [আরও সিস্টেম ডিজাইন ইন্টারভিউ প্রশ্ন](#আরও-সিস্টেম-ডিজাইন-ইন্টারভিউ-প্রশ্ন)

## Anki flashcards

<p align="center">
  <img src="http://i.imgur.com/zdCAkB3.png">
  <br/>
</p>

প্রদত্ত [Anki flashcard decks](https://apps.ankiweb.net/) স্থান পুনরাবৃত্তি করে আপনাকে সিস্টেম ডিজাইনের মুল ধারণা বুঝতে সাহায্য করবে।

 [সিস্টেম ডিজাইন ডেক](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design.apkg)
* [সিস্টেম ডিজাইন অনুশীলনী ডেক](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design%20Exercises.apkg)
* [অবজেক্ট ওরিয়েন্টেড ডিজাইন অনুশীলনী ডেক](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/OO%20Design.apkg)

সামনের টপিক গুলো পড়তে এটি অনেক সাহায্য করবে।

### কোডিং রিসোর্স: ইন্টারেক্টিভ কোডিং চ্যালেঞ্জ

আপনি কি [**কোডিং ইন্টারভিয়ের**](https://github.com/donnemartin/interactive-coding-challenges) জন্য রিসোর্স খুঁজছেন?

<p align="center">
  <img src="http://i.imgur.com/b4YtAEN.png">
  <br/>
</p>

আপনি [**ইন্টারেক্টিভ কোডিং চ্যালেঞ্জ**](https://github.com/donnemartin/interactive-coding-challenges) নামের অণু-প্রোজেক্টটি দেখতে পারেন, যাতে আরও Anki ডেক রয়েছে।

* [কোডিং ডেক](https://github.com/donnemartin/interactive-coding-challenges/tree/master/anki_cards/Coding.apkg)

## কন্ট্রিবিউটিং

> কমিউনিটি থেকে শিক্ষা নিন

বিনা দ্বিধায় পুল রিকুয়েস্ট সাবমিট করে আমাদের সাহায্য করুন:

* ভুল সংশোধন (ফিক্স এরর)
* সেকশনের উন্নয়ন
* নতুন সেকশন সংযোজন
* [অনুবাদ](https://github.com/donnemartin/system-design-primer/issues/28)

কিছু বিষয় আমাদের আরও ঝালাই করতে হবে যা আপনি [উন্নয়নাধীন](#under-development) সেকশনে এ পাবেন।

[কন্ট্রিবিউটিং নির্দেশিকা](CONTRIBUTING.md) পর্যবেক্ষণ করুন।

## সিস্টেম ডিজাইনের বিষয়গুলোর সূচি

> বিভিন্ন সিস্টেম ডিজাইনের বিষয়গুলোর সুবিধা-অসুবিধাসহ সারমর্ম  **সবকিছুর ভাল-মন্দ দিক আছে**.
>
> প্রতিটি সেকশনে কিছু লিঙ্ক রয়েছে যা আপনাকে আরও গভীর রিসোর্সে নিয়ে যাবে।

<p align="center">
  <img src="http://i.imgur.com/jrUBAF7.png">
  <br/>
</p>

* [ সিস্টেম ডিজাইন টপিকঃ ভূমিকা](#system-design-topics-start-here)
    * [ধাপ ১ঃ স্কেলেবিলিটি ভিডিও লেকচারগুলো পর্যালোচনা](#step-1-review-the-scalability-video-lecture)
    * [ধাপ ২ঃ স্কেলেবিলিটি আর্টিকেল পর্যালোচনা](#step-2-review-the-scalability-article)
    * [পরবর্তী ধাপ](#next-steps)
* [পারফরমেন্স বনাম স্কেলেবিলিটি](#performance-vs-scalability)
* [ল্যাটেন্সি বনাম থ্রোপুট](#latency-vs-throughput)
* [এভাইলিবিলিটি বনাম কন্সিস্টেন্সি/দৃঢ়তা](#availability-vs-consistency)
    * [সিএপি তত্ত্ব](#cap-theorem)
        * [সিপি - কন্সিস্টেন্সি এবং পারটিশান টলারেন্স](#cp---consistency-and-partition-tolerance)
        * [এপি - এভাইলিবিলিটি এবং পারটিশান টলারেন্স](#ap---availability-and-partition-tolerance)
* [কন্সিস্টেন্সি ধরণসমূহ](#consistency-patterns)
    * [দুর্বল কন্সিস্টেন্সি](#weak-consistency)
    * [ইভেনচুয়াল কন্সিস্টেন্সি](#eventual-consistency)
    * [সবল কন্সিস্টেন্সি](#strong-consistency)
* [এভাইলিবিলিটি ধরণসমূহ](#availability-patterns)
    * [ফেইল-ওভার](#fail-over)
    * [রেপ্লিকেশান](#replication)
* [ডোমেইন নাম সিস্টেম](#domain-name-system)
* [কন্টেন্ট ডেলিভারি নেটওয়ার্ক](#content-delivery-network)
    * [পুশ সিডিএন](#push-cdns)
    * [পুল সিডিএন](#pull-cdns)
* [লোড ব্যালেন্সার](#load-balancer)
    * [একটিভ-পেসিভ](#active-passive)
    * [একটিভ-একটিভ](#active-active)
    * [লেয়ার ৪ লোড ব্যালান্সিং](#layer-4-load-balancing)
    * [লেয়ার ৭ লোড ব্যালান্সিং](#layer-7-load-balancing)
    * [অনুভূমিক স্কেলিং](#horizontal-scaling)
* [রিভার্স প্রক্সি (ওয়েব সার্ভার)](#reverse-proxy-web-server)
    * [লোড ব্যালেন্সার বনাম রিভার্স প্রক্সি](#load-balancer-vs-reverse-proxy)
* [এপ্লিকেশন লেয়ার](#application-layer)
    * [মাইক্রোসার্ভিসেস](#microservices)
    * [সার্ভিস ডিসকভারি](#service-discovery)
* [ডাটাবেজ](#database)
    * [রিলেশানাল ডাটাবেজ ম্যানেজমেন্ট সিস্টেম(RDBMS)](#relational-database-management-system-rdbms)
        * [মাস্টার-স্লেভ রেপ্লিকেশন](#master-slave-replication)
        * [মাস্টার-মাস্টার রেপ্লিকেশন](#master-master-replication)
        * [ফেডারেশন](#federation)
        * [শারডিং](#sharding)
        * [ডিনরমালিজেশন](#denormalization)
        * [এস কিউ এল(SQL) টিউনিং](#sql-tuning)
    * [নো এস কিউ এল (NoSQL)](#nosql)
        * [কি-ভেলু স্টোর](#key-value-store)
        * [ডকুমেন্ট স্টোর](#document-store)
        * [ওয়াইড কলাম স্টোর](#wide-column-store)
        * [গ্রাফ ডাটাবেজ](#graph-database)
    * [এস কিউ এল(SQL) অথবা  নো এস কিউ এল (NoSQL](#sql-or-nosql)
* [কেশ](#cache)
    * [ক্লাইন্ট কেশিং](#client-caching)
    * [সি ডি এন(CDN) কেশিং](#cdn-caching)
    * [ওয়েব সার্ভার কেশিং](#web-server-caching)
    * [ডাটাবেজ কেশিং](#database-caching)
    * [এপ্লিকেশন কেশিং](#application-caching)
    * [ডাটাবেজের কোয়েরি লেভেলে কেশিং](#caching-at-the-database-query-level)
    * [অবজেক্ট লেভেলে কেশিং](#caching-at-the-object-level)
    * [কখন কেশ আপডেট করবেন](#when-to-update-the-cache)
        * [কেশ-এসাইড](#cache-aside)
        * [রাইট-থ্রু](#write-through)
        * [রাইট-বিহাইন্ড (রাইট-ব্যাক)](#write-behind-write-back)
        * [রিফ্রেশ-এহেড](#refresh-ahead)
* [এসিঙ্ক্রনিসম (Asynchronism)](#asynchronism)
    * [মেসেজ কিউস](#message-queues)
    * [টাস্ক কিউস](#task-queues)
    * [ব্যাক প্রেশার](#back-pressure)
* [কমুনিকেশন](#communication)
    * [ট্রান্সমিশন কন্ট্রোল প্রটোকল (TCP)](#transmission-control-protocol-tcp)
    * [ইউজার ডায়াগ্রাম প্রটোকল (UDP)](#user-datagram-protocol-udp)
    * [রিমোট প্রসিডিউর কল (RPC)](#remote-procedure-call-rpc)
    * [রিপ্রেসেন্টেশনাল স্টেট ট্রান্সফার (REST)](#representational-state-transfer-rest)
* [সিকুরিটি](#security)
* [পরিশিষ্ট](#appendix)
    * [দুটি টেবিলের পাওয়ারস](#powers-of-two-table)
    * [লেটেন্সি সংখ্যা যা সব প্রোগ্রামারের জানা উচিত](#latency-numbers-every-programmer-should-know)
    * [আরও সিস্টেম ডিজাইন ইন্টারভিউ প্রশ্ন](#আরও-সিস্টেম-ডিজাইন-ইন্টারভিউ-প্রশ্ন)
    * [বাস্তব জীবনের আর্কিটেকচার](#real-world-architectures)
    * [কোম্পানির আর্কিটেকচার](#company-architectures)
    * [কোম্পানির ইঞ্জিনিয়ারিং ব্লগ](#company-engineering-blogs)
* [উন্নয়নাধীন](#under-development)
* [ক্রেডিট](#credits)
* [যোগাযোগ করুন](#contact-info)
* [লাইসেন্স](#license)

## পড়ার দিকনির্দেশনা

> আপনার ইন্টারভিউয়ের সময়রেখার উপর ভিত্তি করে নিমোক্ত বিষয়গুলো সুপারিশ করা হল

![Imgur](http://i.imgur.com/OfVllex.png)

**Q: ইন্টার্ভিউয়ের জন্য আমার কি েখানের সবকিছু জানা লাগবে ?**

**A: না, আপনার ইন্টার্ভিউয়ের প্রস্তুতির জন্য  এখানের সবকিছু জানা লাগবে না।**.

আপনাকে ইন্টেরভিউতে কি ধরণের প্রশ্ন জিজ্ঞেস করবে তা কিছু বিষয়গুলোর উপর নির্ভর করছে যেমনঃ

* আপনার কতদিনের অভিজ্ঞতা রয়েছে
* আপনার টেকনিক্যাল ব্যাকগ্রাউন্ড কি
* আপনি কোন পদের জন্য ইন্টারভিউ দিচ্ছেন
* আপনি কোন কোম্পানিতে ইন্টারভিয় দিচ্ছেন
* ভাগ্য

অনেক অভিজ্ঞতাসম্পন্ন প্রার্থীরা সাধারণত সিস্টেম ডিজাইন নিয়ে অনেক কিছু জানে বলে ধারণা করা হয়। আর্কিটেক্ট অথবা টিম লিডরাও ব্যক্তি কন্ট্রিবিউটর থেকে বেশি জানে বলে ধারণা করা হয়। প্রধান টেক কোম্পানিগুলোতে সাধারণত এক বা ততোধিক ডিজাইন ইন্টারভিউ রাউন্ড থাকে।

বিশদভাবে শুরু করুন এবং কয়েকটি বিষয়ে গভীর যান। এটা বিভিন্ন প্রধান সিস্টেম ডিজাইন বিষয় সম্পর্কে জানতে একটু সাহায্য করে। আপনার সময়রেখা, অভিজ্ঞতা, কোন অবস্থানের জন্য আপনি ইন্টার্ভিউ দিচ্ছেন এবং আপনি কোন সংস্থাগুলির সাথে ইন্টার্ভিউ দিচ্ছেন তার উপর ভিত্তি করে নিচের নির্দেশিকা সামঞ্জস্য করুন।

* **সংক্ষিপ্ত সময়রেখা** -  আপনার লক্ষ্য হবে সিস্টেম ডিজাইন বিষয়ে **প্রশস্ত** ধারণা নেওয়া। **কিছু** ইন্টার্ভিউয়ের প্রশ্ন সমাধান করে প্রস্তুতি নিন।
* **মাঝারি সময়রেখা** - আপনার লক্ষ্য হবে সিস্টেম ডিজাইন বিষয়ে **প্রশস্ত** এবং **কিছু গভীর** ধারণা নেওয়া।**অনেক** ইন্টার্ভিউয়ের প্রশ্ন সমাধান করে প্রস্তুতি নিন।
* **দীর্ঘ সময়রেখা** - আপনার লক্ষ্য হবে সিস্টেম ডিজাইন বিষয়ে **প্রশস্ত** এবং **অনেক গভীর** ধারণা নেওয়া। **প্রায় সব** ইন্টার্ভিউয়ের প্রশ্ন সমাধান করে প্রস্তুতি নিন।

| | সংক্ষিপ্ত | মাঝারি | দীর্ঘ |
|---|---|---|---|
| কিভাবে সিস্টেম কাজ করে তা বিশদভাবে জানার জন্য [সিস্টেম ডিজাইন বিষয়গুলো](#index-of-system-design-topics) পড়ুন | :+1: | :+1: | :+1: |
| যে কোম্পানিতে আপনি ইন্টার্ভিউ দিবেন তাদের সম্বন্ধে [কোম্পানি ইঞ্জিনিয়ারিং ব্লগস](#company-engineering-blogs) কিছু আর্টিকেল পড়ুন | :+1: | :+1: | :+1: |
| কিছু [বাস্তব জীবনের আর্কিটেকচার](#real-world-architectures) পড়ুন | :+1: | :+1: | :+1: |
| পর্যালোচনা করুন [কিভাবে সিস্টেম ডিজাইন ইন্টারভিউ প্রশ্ন মোকাবেলা করবেন](#how-to-approach-a-system-design-interview-question) | :+1: | :+1: | :+1: |
| [সিস্টেম ডিজাইন ইন্টারভিউ প্রশ্ন, সমাধানসহ](#system-design-interview-questions-with-solutions) নিয়ে কাজ করুন | কিছু | অনেক | প্রায় সব |
| [অবজেক্ট ওরিয়েন্টেড ডিজাইন ইন্টারভিউ প্রশ্ন, সমাধানসহ](#object-oriented-design-interview-questions-with-solutions) নিয়ে কাজ করুন | কিছু | অনেক | প্রায় সব |
| পর্যালোচনা করুন [আরও সিস্টেম ডিজাইন ইন্টারভিউ প্রশ্ন](#আরও-সিস্টেম-ডিজাইন-ইন্টারভিউ-প্রশ্ন) | কিছু | অনেক | প্রায় সব |

## কিভাবে সিস্টেম ডিজাইন ইন্টারভিউ প্রশ্ন মোকাবেলা করবেন

> কিভাবে একটি সিস্টেম ডিজাইন ইন্টারভিউ প্রশ্নের উত্তর দিবেন।

সিস্টেম ডিজাইন ইন্টারভিউ একটি **খোলামেলা কথোপকথন**। আপনার থেকে এটার নেতৃত্ব আশা করা হবে।

আপনি আলোচনা গাইড করার জন্য নিম্নলিখিত ধাপগুলি ব্যবহার করতে পারেন। এই প্রক্রিয়া দৃঢ় করতে সাহায্য করার জন্য, আপনি [সিস্টেম ডিজাইন ইন্টারভিউ প্রশ্ন, সমাধানসহ](#system-design-interview-questions-with-solutions) সেকশনটি নিমোক্ত ধাপগুলো অনুসরণ করে কাজ করতে পারেন।

### ধাপ ১ঃ ব্যবহার ক্ষেত্রের রূপরেখা, সীমাবদ্ধতা, এবং অনুমান

প্রয়োজনীয় তথ্য সংগ্রহ করুন এবং সমস্যাটিকে একটি ক্ষেত্রের মধ্যে আনুন। ব্যবহার ক্ষেত্রে এবং সীমাবদ্ধতা ব্যাখ্যা করতে প্রশ্ন জিজ্ঞাসা করুন. অনুমান নিয়ে আলোচনা করুন।

* কে এটি ব্যবহার করতে যাচ্ছে?
* তারা কিভাবে এটি ব্যবহার করতে যাচ্ছেন?
* এর কতজন ব্যবহারকারী আছে?
* সিস্টেমটি কি করে?
* সিস্টেমের ইনপুট এবং আউটপুট কি কি?
* আমরা কি পরিমাণ ডাটা পরিচালনা করব বলে আশা করি?
* আমরা প্রতি সেকেন্ডে কত পরিমাণ রিকোয়েস্ট আশা করি?
* রিড টু রাইট এর প্রত্যাশিত অনুপাত কত?

### ধাপ ২ঃ একটি হাই লেভেল ডিজাইন তৈরি

সমস্ত গুরুত্বপূর্ণ উপাদান নিয়ে একটি হাই লেভেল ডিজাইনের রূপরেখা তৈরি করুন।

* প্রধান উপাদানসমুহ এবং তাদের মাঝে সংযোগ স্থাপন করে একটি খসড়া চিত্র আঁকুন।
* আপনার ধারণনার ন্যায্যতা প্রমাণ করুন।

### ধাপ ৩ঃ কোর উপাদান ডিজাইন

প্রতিটি কোর উপাদানের বিস্তারিত জানার জন্য গভীরে চলে যান। উদাহরণস্বরূপ, যদি আপনাকে বলা হয় [একটি ইউআরএল শর্টনিং সেবা ডিজাইন করুন](solutions/system_design/pastebin/README.md), তবে নিমোক্ত বিষয়গুলো আলোচনা করুনঃ

* সম্পূর্ণ ইউআরএল এর হ্যাশ তৈরি এবং সংরক্ষণ
    * [এমডি৫](solutions/system_design/pastebin/README.md) এবং [বেস৬২](solutions/system_design/pastebin/README.md)
    * হ্যাশ কলিশন্স
    * এসকিউএল বা নোএসকিউএল
    * ডাটাবেজ স্কিমা
* একটি হ্যাশেড ইউআরএল থেকে সম্পূর্ণ ইউআরএল অনুবাদ
    * ডাটাবেজ সন্ধান
* এপিআই এবং অবজেক্ট ওরিয়েন্টেড ডিজাইন

### ধাপ ৪ঃ ডিজাইন স্কেল

যেসব সীমাবদ্ধতা বিঘ্ন ঘটাতে পারে তাদের সনাক্ত এবং সম্বোধন করুন। উদাহরণস্বরূপ, আপনার স্কেলবিলিটি সমস্যা মোকাবেলার জন্য কি নিম্নলিখিত বিষয়গুলো প্রয়োজন?

* লোড ব্যালেন্সার
* অনুভূমিক স্কেলিং
* কেশিং
* ডাটাবেজ শারডিং

সম্ভাব্য সমাধান এবং ভালোমন্দ দিক নিয়ে আলোচনা করুন। সবকিছুর ভাল-মন্দ দিক আছে। [স্কেলেবল সিস্টেম ডিজাইনের প্রিন্সিপাল](#index-of-system-design-topics) মেনে সীমাবদ্ধতাগুলো সম্বোধন করুন।

### ব্যাক-অফ-দ্যা-এনভেলপ গণনা

আপনি কিছু অনুমান খসড়া করতে বলা হতে পারে। নিমোক্ত রিসোর্সগুলোর জন্য [পরিশিষ্ট](#appendix) উল্লেখ করা হলঃ

* [ব্যাক-অফ-দ্যা-এনভেলপ গণনা করুন](http://highscalability.com/blog/2011/1/26/google-pro-tip-use-back-of-the-envelope-calculations-to-choo.html)
* [দুটি টেবিলের পাওয়ারস](#powers-of-two-table)
* [লেটেন্সি সংখ্যা যা সব প্রোগ্রামারের জানা উচিত](#latency-numbers-every-programmer-should-know)

### আরও সোর্স এবং পড়ার উপকরণ

একটি ভাল ধারণা পেতে কি আশা করা উচিত তার জন্য নিম্নলিখিত লিঙ্ক দেখুনঃ

* [কিভাবে একটি সিস্টেম ডিজাইন ইন্টারভিউ জয় করবেন](https://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/)
* [সিস্টেম ডিজাইন ইন্টারভিউ](http://www.hiredintech.com/system-design)
* [ইন্ট্রো টু আর্কিটেকচার এন্ড সিস্টেম ডিজাইন ইন্টারভিউ](https://www.youtube.com/watch?v=ZgdS0EUmn70)

## সিস্টেম ডিজাইন ইন্টারভিউ সমাধানসহ প্রশ্ন

> নমুনা আলোচনা, কোড, এবং ডায়াগ্রামের সাথে সাধারণ সিস্টেম ডিজাইনের ইন্টারভিউ প্রশ্ন।
>
> সমাধানগুলো `solutions/` ফোল্ডারে লিঙ্ক করা হয়েছে। 

| প্রশ্ন | |
|---|---|
| Pastebin.com (or Bit.ly) ডিজাইন করুন | [সমাধান](solutions/system_design/pastebin/README.md) |
| টুইটারের টাইমলাইন এবং সার্চ (অথবা ফেইসবুক ফিড এবং সার্চ) ডিজাইন করুন | [সমাধান](solutions/system_design/twitter/README.md) |
| ওয়েব ক্রলার ডিজাইন করুন | [সমাধান](solutions/system_design/web_crawler/README.md) |
| Mint.com ডিজাইন করুন | [সমাধান](solutions/system_design/mint/README.md) |
| সামাজিক নেটওয়ার্কের জন্য ডাটা স্ট্রাকচার ডিজাইন করুন | [সমাধান](solutions/system_design/social_graph/README.md) |
| সার্চ ইঞ্জিনের জন্য কি-ভ্যালু স্টোর ডিজাইন করুন | [সমাধান](solutions/system_design/query_cache/README.md) |
| বিভিন্ন বৈশিষ্ট্যে অ্যামাজনের বিক্রয় রেঙ্কিং ডিজাইন করুন | [সমাধান](solutions/system_design/sales_rank/README.md) |
| AWS লক্ষাধিক ব্যবহারকারীদের স্কেলিং করার জন্য সিস্টেম ডিজাইন করুন | [সমাধান](solutions/system_design/scaling_aws/README.md) |
| একটি সিস্টেম ডিজাইন প্রশ্ন যোগ করুন | [কন্ট্রিবিউট](#contributing) |

### Design Pastebin.com (or Bit.ly)

[View exercise and solution](solutions/system_design/pastebin/README.md)

![Imgur](http://i.imgur.com/4edXG0T.png)

### Design the Twitter timeline and search (or Facebook feed and search)

[View exercise and solution](solutions/system_design/twitter/README.md)

![Imgur](http://i.imgur.com/jrUBAF7.png)

### Design a web crawler

[View exercise and solution](solutions/system_design/web_crawler/README.md)

![Imgur](http://i.imgur.com/bWxPtQA.png)

### Design Mint.com

[View exercise and solution](solutions/system_design/mint/README.md)

![Imgur](http://i.imgur.com/V5q57vU.png)

### Design the data structures for a social network

[View exercise and solution](solutions/system_design/social_graph/README.md)

![Imgur](http://i.imgur.com/cdCv5g7.png)

### Design a key-value store for a search engine

[View exercise and solution](solutions/system_design/query_cache/README.md)

![Imgur](http://i.imgur.com/4j99mhe.png)

### Design Amazon's sales ranking by category feature

[View exercise and solution](solutions/system_design/sales_rank/README.md)

![Imgur](http://i.imgur.com/MzExP06.png)

### Design a system that scales to millions of users on AWS

[View exercise and solution](solutions/system_design/scaling_aws/README.md)

![Imgur](http://i.imgur.com/jj3A5N8.png)

## Object-oriented design interview questions with solutions

> Common object-oriented design interview questions with sample discussions, code, and diagrams.
>
> Solutions linked to content in the `solutions/` folder.

>**Note: This section is under development**

| Question | |
|---|---|
| Design a hash map | [Solution](solutions/object_oriented_design/hash_table/hash_map.ipynb)  |
| Design a least recently used cache | [Solution](solutions/object_oriented_design/lru_cache/lru_cache.ipynb)  |
| Design a call center | [Solution](solutions/object_oriented_design/call_center/call_center.ipynb)  |
| Design a deck of cards | [Solution](solutions/object_oriented_design/deck_of_cards/deck_of_cards.ipynb)  |
| Design a parking lot | [Solution](solutions/object_oriented_design/parking_lot/parking_lot.ipynb)  |
| Design a chat server | [Solution](solutions/object_oriented_design/online_chat/online_chat.ipynb)  |
| Design a circular array | [Contribute](#contributing)  |
| Add an object-oriented design question | [Contribute](#contributing) |

### আরও সিস্টেম ডিজাইন ইন্টারভিউ প্রশ্ন

> সিস্টেম ডিজাইনের প্রচলিত ইন্টারভিউ প্রশ্নগুলি, কীভাবে প্রতিটি সমাধান করতে হবে তার সহায়গুলির লিঙ্ক রয়েছে। 

| প্রশ্ন | সন্ধানপুস্তক |
|---|---|
| ড্রপবক্সের মতো একটি ফাইল সিঙ্ক পরিষেবা ডিজাইন করুন | [youtube.com](https://www.youtube.com/watch?v=PE4gwstWhmc) |
| গুগলের মতো সার্চ ইঞ্জিন ডিজাইন করুন | [queue.acm.org](http://queue.acm.org/detail.cfm?id=988407)<br/>[stackexchange.com](http://programmers.stackexchange.com/questions/38324/interview-question-how-would-you-implement-google-search)<br/>[ardendertat.com](http://www.ardendertat.com/2012/01/11/implementing-search-engines/)<br/>[stanford.edu](http://infolab.stanford.edu/~backrub/google.html) |
| গুগলের মতো একটি স্কেলেবল ওয়েব ক্রলার ডিজাইন করুন | [quora.com](https://www.quora.com/How-can-I-build-a-web-crawler-from-scratch) |
| গুগল ডক্স ডিজাইন করুন | [code.google.com](https://code.google.com/p/google-mobwrite/)<br/>[neil.fraser.name](https://neil.fraser.name/writing/sync/) |
| রেডিসের মতো কী-ভ্যালু স্টোর ডিজাইন করুন| [slideshare.net](http://www.slideshare.net/dvirsky/introduction-to-redis) |
| ম্যামক্যাশড এর মতো একটি ক্যাশড সিস্টেম ডিজাইন করুন | [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached) |
| অ্যামাজনের মতো একটি সুপারিশ সিস্টেম ডিজাইন করুন | [hulu.com](https://web.archive.org/web/20170406065247/http://tech.hulu.com/blog/2011/09/19/recommendation-system.html)<br/>[ijcai13.org](http://ijcai13.org/files/tutorial_slides/td3.pdf) |
| বিটলির মতো একটি টিনিইউআরএল সিস্টেম ডিজাইন করুন | [n00tc0d3r.blogspot.com](http://n00tc0d3r.blogspot.com/) |
| হোয়াটসঅ্যাপের মতো একটি চ্যাট অ্যাপ্লিকেশন ডিজাইন করুন | [highscalability.com](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html)
| ইনস্টাগ্রামের মতো একটি ছবি শেয়ারিং সিস্টেম ডিজাইন করুন | [highscalability.com](http://highscalability.com/flickr-architecture)<br/>[highscalability.com](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html) |
| ফেসবুক নিউজ ফিড ফাংশন ডিজাইন করুন | [quora.com](http://www.quora.com/What-are-best-practices-for-building-something-like-a-News-Feed)<br/>[quora.com](http://www.quora.com/Activity-Streams/What-are-the-scaling-issues-to-keep-in-mind-while-developing-a-social-network-feed)<br/>[slideshare.net](http://www.slideshare.net/danmckinley/etsy-activity-feeds-architecture) |
| ফেসবুক টাইমলাইন ফাংশন ডিজাইন করুন | [facebook.com](https://www.facebook.com/note.php?note_id=10150468255628920)<br/>[highscalability.com](http://highscalability.com/blog/2012/1/23/facebook-timeline-brought-to-you-by-the-power-of-denormaliza.html) |
| ফেসবুক চ্যাট ফাংশন ডিজাইন করুন | [erlang-factory.com](http://www.erlang-factory.com/upload/presentations/31/EugeneLetuchy-ErlangatFacebook.pdf)<br/>[facebook.com](https://www.facebook.com/note.php?note_id=14218138919&id=9445547199&index=0) |
| ফেসবুকের মতো একটি গ্রাফ অনুসন্ধান ফাংশন ডিজাইন করুন | [facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-building-out-the-infrastructure-for-graph-search/10151347573598920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-indexing-and-ranking-in-graph-search/10151361720763920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-the-natural-language-interface-of-graph-search/10151432733048920) |
| ক্লাউডফ্লেয়ারের মতো একটি সামগ্রী বিতরণ নেটওয়ার্ক ডিজাইন করুন | [figshare.com](https://figshare.com/articles/Globally_distributed_content_delivery/6605972) |
| টুইটারের মতো একটি ট্রেন্ডিং টপিক সিস্টেম ডিজাইন করুন | [michael-noll.com](http://www.michael-noll.com/blog/2013/01/18/implementing-real-time-trending-topics-in-storm/)<br/>[snikolov .wordpress.com](http://snikolov.wordpress.com/2012/11/14/early-detection-of-twitter-trends/) |
| একটি এলোমেলো আইডি জেনারেশন সিস্টেম ডিজাইন করুন | [blog.twitter.com](https://blog.twitter.com/2010/announcing-snowflake)<br/>[github.com](https://github.com/twitter/snowflake/) |
| একটি সময়ের ব্যবধানে শীর্ষ ক অনুরোধগুলি ফেরত দিন | [cs.ucsb.edu](https://www.cs.ucsb.edu/sites/cs.ucsb.edu/files/docs/reports/2005-23.pdf)<br/>[wpi.edu](http://davis.wpi.edu/xmdv/docs/EDBT11-diyang.pdf) |
| এমন একটি সিস্টেম ডিজাইন করুন যা একাধিক ডেটা সেন্টার থেকে ডেটা পরিবেশন করে | [highscalability.com](http://highscalability.com/blog/2009/8/24/how-google-serves-data-from-multiple-datacenters.html) |
| একটি অনলাইন মাল্টিপ্লেয়ার কার্ড গেম ডিজাইন করুন | [indieflashblog.com](http://www.indieflashblog.com/how-to-create-an-asynchronous-multiplayer-game.html)<br/>[buildnewgames.com](http://buildnewgames.com/real-time-multiplayer/) |
| একটি গারবেজ কালেকশন সিস্টেম ডিজাইন করুন | [stuffwithstuff.com](http://journal.stuffwithstuff.com/2013/12/08/babys-first-garbage-collector/)<br/>[washington.edu](http://courses.cs.washington.edu/courses/csep521/07wi/prj/rick.pdf) |
| একটি এপিআই রেট লিমিটার ডিজাইন করুন | [https://stripe.com/blog/](https://stripe.com/blog/rate-limiters) |
| স্টক এক্সচেঞ্জের ডিজাইন করুন (নাসডাক বা বাইনান্সের মতো) | [Jane Street](https://youtu.be/b1e4t2k2KJY)<br/>[Golang Implementation](https://around25.com/blog/building-a-trading-engine-for-a-crypto-exchange/)<br/>[Go Implemenation](http://bhomnick.net/building-a-simple-limit-order-in-go/) |
| একটি সিস্টেম ডিজাইন প্রশ্ন যুক্ত করুন | [Contribute](#contributing) |
