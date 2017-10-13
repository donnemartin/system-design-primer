*[English](README.md) ∙ [简体中文](README-zh-Hans.md) | [Brazilian Portuguese](https://github.com/donnemartin/system-design-primer/issues/40) ∙ [Polish](https://github.com/donnemartin/system-design-primer/issues/68) ∙ [Russian](https://github.com/donnemartin/system-design-primer/issues/87) ∙ [Turkish](https://github.com/donnemartin/system-design-primer/issues/39) | [Add Translation](https://github.com/donnemartin/system-design-primer/issues/28)*

# The System Design Primer

<p align="center">
  <img src="http://i.imgur.com/jj3A5N8.png">
  <br/>
</p>

## 動機・目的

> 大規模システムのシステム設計を学ぶ
>
> システム設計面接課題に備える

### 大規模システムの設計を学ぶ

スケーラブルなシステムのシステム設計を学ぶことは、より良いエンジニアになることに資するでしょう。

システム設計はとても広範なトピックを含みます。システム設計原理については **インターネット上には膨大な量の文献が散らばっています**

このレポジトリは大規模システム構築に必要な知識を学ぶことができる **文献リストを体系的にまとめたもの** です。

### オープンソースコミュニティから学ぶ

このプロジェクトは、これからもずっと更新されていくオープンソースプロジェクトの初期段階にすぎません。

[Contributions](#contributing) は大歓迎です！

### システム設計面接課題に備える

コード技術面接に加えて、システム設計に関する知識は、多くのテック企業における **技術採用面接プロセス** で **必要不可欠な要素** です。

**システム設計面接での頻出問題を練習し** また、自分の解答と *模範解答*:ディスカッション、コードそして図表などを　*比較* することで勉強できるでしょう。

面接準備に役立つその他のトピック:

* [学習指針](#study-guide)
* [システム設計面接課題にどのように準備するか](#how-to-approach-a-system-design-interview-question)
* [システム設計課題例 **とその解答**](#system-design-interview-questions-with-solutions)
* [オブジェクト思考設計課題例, **とその解答**](#object-oriented-design-interview-questions-with-solutions)
* [その他のシステム設計面接課題例](#additional-system-design-interview-questions)

## 暗記カード

<p align="center">
  <img src="http://i.imgur.com/zdCAkB3.png">
  <br/>
</p>

この[暗記カードアプリケーション](https://apps.ankiweb.net/) は、システム設計の主要な概念を学ぶのに役立つアプリケーションです。程よい間隔で同じ問題を繰り返し出題してくれます。

* [システム設計デッキ](resources/flash_cards/System%20Design.apkg)
* [システム設計練習課題デッキ](resources/flash_cards/System%20Design%20Exercises.apkg)
* [オブジェクト思考練習課題デッキ](resources/flash_cards/OO%20Design.apkg)

外出先や移動中の勉強に役立つでしょう。

### コーディング技術課題用の問題: 練習用インタラクティブアプリケーション

コード技術面接用の問題を探している場合は[**こちら**](https://github.com/donnemartin/interactive-coding-challenges)?

<p align="center">
  <img src="http://i.imgur.com/b4YtAEN.png">
  <br/>
</p>

こちらの姉妹リポジトリも見てみてください [**Interactive Coding Challenges**](https://github.com/donnemartin/interactive-coding-challenges), 追加の暗記デッキカードも入っています。

* [Coding deck](https://github.com/donnemartin/interactive-coding-challenges/tree/master/anki_cards/Coding.apkg)

## コントリビュート

> コミュニティから学ぶ

プルリクエスト等の貢献は積極的にお願いします:

* エラー修正
* セクション内容修正
* 新規セクション追加
* [翻訳する](https://github.com/donnemartin/system-design-primer/issues/28)

依然、推敲と内容の向上が必要なコンテンツは以下の場所にあります [作業中](#under-development).

コントリビュートする前にガイドラインを読みましょう [Contributing Guidelines](CONTRIBUTING.md).

## システム設計目次

> 賛否も含めた様々なシステム設計の各トピックの概要。 **全てはトレードオフの関係にあります**
>
> それぞれのセクションはより学びを深めるような他の文献へのリンクが貼られています

<p align="center">
  <img src="http://i.imgur.com/jrUBAF7.png">
  <br/>
</p>

* [システム設計トピック: まずはここから](#system-design-topics-start-here)
    * [Step 1: スケーラビリティに関する動画を見る](#step-1-review-the-scalability-video-lecture)
    * [Step 2: スケーラビリティに関する記事を読む](#step-2-review-the-scalability-article)
    * [Next steps](#next-steps)
* [パフォーマンス vs スケーラビリティ](#performance-vs-scalability)
* [レイテンシー vs スループット](#latency-vs-throughput)
* [可用性 vs 一貫性](#availability-vs-consistency)
    * [CAP 定理](#cap-theorem)
        * [CP - 一貫性(consistency)と分割性(partition)耐性](#cp---consistency-and-partition-tolerance)
        * [AP - 可用性(availability)と分割性(partition)耐性](#ap---availability-and-partition-tolerance)
* [一貫性 パターン](#consistency-patterns)
    * [弱い一貫性](#weak-consistency)
    * [結果整合性](#eventual-consistency)
    * [強い一貫性](#strong-consistency)
* [可用性 パターン](#availability-patterns)
    * [フェイルオーバー](#fail-over)
    * [レプリケーション](#replication)
* [ドメインネームシステム(DNS)](#domain-name-system)
* [コンテントデリバリーネットワーク(CDN)](#content-delivery-network)
    * [プッシュCDN](#push-cdns)
    * [プルCDN](#pull-cdns)
* [ロードバランサー](#load-balancer)
    * [アクティブ/パッシブ構成](#active-passive)
    * [アクティブ/アクティブ構成](#active-active)
    * [Layer 4 ロードバランシング](#layer-4-load-balancing)
    * [Layer 7 ロードバランシング](#layer-7-load-balancing)
    * [水平スケーリング](#horizontal-scaling)
* [リバースプロキシ (WEBサーバー)](#reverse-proxy-web-server)
    * [ロードバランサー vs リバースプロキシ](#load-balancer-vs-reverse-proxy)
* [アプリケーションレイヤー](#application-layer)
    * [マイクロサービス](#microservices)
    * [サービスディスカバリー](#service-discovery)
* [データベース](#database)
    * [リレーショナルデータベースマネジメントシステム (RDBMS)](#relational-database-management-system-rdbms)
        * [マスター/スレーヴ レプリケーション](#master-slave-replication)
        * [マスター/マスター レプリケーション](#master-master-replication)
        * [フェデレーション](#federation)
        * [シャーディング](#sharding)
        * [デノーマライゼーション](#denormalization)
        * [SQL チューニング](#sql-tuning)
    * [NoSQL](#nosql)
        * [キー/バリューストア](#key-value-store)
        * [ドキュメントストア](#document-store)
        * [ワイドカラムストア](#wide-column-store)
        * [グラフ データベース](#graph-database)
    * [SQL or NoSQL](#sql-or-nosql)
* [キャッシュ](#cache)
    * [クライアントキャッシング](#client-caching)
    * [CDNキャッシング](#cdn-caching)
    * [Webサーバーキャッシング](#web-server-caching)
    * [データベースキャッシング](#database-caching)
    * [アプリケーションキャッシング](#application-caching)
    * [データベースクエリレベルでキャッシングする](#caching-at-the-database-query-level)
    * [オブジェクトレベルでキャッシングする](#caching-at-the-object-level)
    * [いつキャッシュを更新するのか](#when-to-update-the-cache)
        * [キャッシュアサイド](#cache-aside)
        * [ライトスルー](#write-through)
        * [ライトビハインド (ライトバック)](#write-behind-write-back)
        * [リフレッシュアヘッド](#refresh-ahead)
* [異時性](#asynchronism)
    * [メッセージキュー](#message-queues)
    * [タスクキュー](#task-queues)
    * [バックプレッシャー](#back-pressure)
* [通信](#communication)
    * [伝送制御プロトコル (TCP)](#transmission-control-protocol-tcp)
    * [ユーザデータグラムプロトコル (UDP)](#user-datagram-protocol-udp)
    * [遠隔手続呼出 (RPC)](#remote-procedure-call-rpc)
    * [Representational state transfer (REST)](#representational-state-transfer-rest)
* [セキュリティ](#security)
* [補遺](#appendix)
    * [2の指数表](#powers-of-two-table)
    * [全てのプログラマーが知っておくべきレイテンシの参考値](#latency-numbers-every-programmer-should-know)
    * [その他システム設計面接での質問例](#additional-system-design-interview-questions)
    * [実世界でのアーキテクチャ](#real-world-architectures)
    * [各企業のアーキテクチャ](#company-architectures)
    * [各企業のエンジニアリングブログ](#company-engineering-blogs)
* [作業中](#under-development)
* [クレジット](#credits)
* [連絡情報](#contact-info)
* [ライセンス](#license)

## 学習指針

> 学習スパンに応じてみるべきトピックス (short, medium, long).

![Imgur](http://i.imgur.com/OfVllex.png)

**Q: 面接のためには、ここにあるものすべてをやらないといけないのでしょうか？**

**A: いえ、ここにあるすべてをやる必要はありません。**.

面接で何を聞かれるかは以下の条件によって変わってきます:

* どれだけの技術経験があるか
* あなたの技術背景が何であるか
* どのポジション職位のために面接を受けているか
* どの企業に面接しているか
* 運

より経験のある候補者は一般的にシステム設計についてより深い知識を有していることを要求されるでしょう。システムアーキテクトやチームリーダーは各メンバーの持つような知識よりは深い見識を持っているべきでしょう。一流テック企業では複数回の設計インタビュー面接を課されることが多いです。

まずは広く始めて、そこからいくつかの分野に絞って深めていくのがいいでしょう。少しずつでの様々なシステム設計のトピックについて知っておくことはいいことです。以下の学習ガイドを自分の学習に当てられる時間、技術経験、どの職位、どの会社に応募しているかなどを加味して自分用に調整して使うといいでしょう。

* **短期間** - Aim for **breadth** with system design topics.  Practice by solving **some** interview questions.
* **中期間** - Aim for **breadth** and **some depth** with system design topics.  Practice by solving **many** interview questions.
* **長期間** - Aim for **breadth** and **more depth** with system design topics.  Practice by solving **most** interview questions.

| | 短期間 | 中期間 | 長期間 |
|---|---|---|---|
| 次のページを読んで [システム設計トピック](#index-of-system-design-topics) システムがどのように動くかの大体の知識を入れる | :+1: | :+1: | :+1: |
| 次のリンク先のいくつかのページを読んで [各企業のエンジニアリングブログ](#company-engineering-blogs) 応募する会社について知る | :+1: | :+1: | :+1: |
| 次のリンク先のいくつかのページを読む [実世界でのアーキテクチャ](#real-world-architectures) | :+1: | :+1: | :+1: |
| 復習する [システム設計面接課題にどのように準備するか](#how-to-approach-a-system-design-interview-question) | :+1: | :+1: | :+1: |
| とりあえず一周する [システム設計課題例](#system-design-interview-questions-with-solutions) | Some | Many | Most |
| とりあえず一周する [Object-oriented design interview questions with solutions](#object-oriented-design-interview-questions-with-solutions) | Some | Many | Most |
| 復習する [その他システム設計面接での質問例](#additional-system-design-interview-questions) | Some | Many | Most |

## システム設計面接にどのようにして臨めばいいか

> システム設計面接試験問題にどのように取り組むか

システム設計面接は **open-ended conversation(Yes/Noでは答えられない口頭質問)です**. 自分で会話を組み立てることを求められます。

以下のステップに従って議論を組み立てることができるでしょう。この過程を確かなものにするために、次のセクション[システム設計課題例とその解答](#system-design-interview-questions-with-solutions) を以下の指針に従って読み込むといいでしょう。

### ステップ 1: そのシステム使用例の概要、制約、推計値等を聞き出し、まとめる

システム仕様の要求事項を聞き出し、問題箇所を特定しましょう。使用例と制約を明確にするための質問を投げかけましょう。要求する推計値についても議論しておきましょう。

* 誰がそのサービスを使うのか？
* どのように使うのか？
* 何人のユーザーがいるのか？
* システムはどのような機能を果たすのか？
* システムへの入力と出力は？
* どれだけの容量のデータを捌く必要があるのか？
* 一秒間に何リクエストの送信が想定されるか？
* 読み書き比率の推定値はいくら程度か？

### ステップ 2: より高レベルのシステム設計を組み立てる

重要なコンポーネントを全て考慮した高レベルのシステム設計概要を組み立てる。

* 主要なコンポーネントと接続をスケッチして書き出す
* 考えの裏付けをする

### Step 3: 核となるコンポーネントを設計する

それぞれの主要なコンポーネントについての詳細を学ぶ。例えば、[url短縮サービス](solutions/system_design/pastebin/README.md)の設計を問われた際には次のようにするといいでしょう:

* 元のURLのハッシュ化したものを作り、それを保存する
    * [MD5](solutions/system_design/pastebin/README.md) と [Base62](solutions/system_design/pastebin/README.md)
    * ハッシュ衝突
    * SQL もしくは NoSQL
    * データベーススキーマ
* ハッシュ化されたURLを元のURLに再翻訳する
    * データベース参照
* API & オブジェクト指向の設計

### ステップ 4: システム設計のスケール

与えられた制約条件からボトルネックとなりそうなところを割り出し、明確化する。  例えば、スケーラビリティの問題解決のために以下の要素を考慮する必要があるだろうか？

* ロードバランサー
* 水平スケーリング
* キャッシング
* データベースシャーディング

取りうる解決策とそのトレードオフについて議論をしよう。全てのことはトレードオフの関係にある。ボトルネックについては次の項を読むといい。[スケーラブルなシステム設計の原理](#index-of-system-design-topics).

### ちょっとした暗算問題

ちょっとした推計値を手計算ですることを求められることもあるかもしれません。[索引](#appendix)の以下の項目が役に立つでしょう:

* [チラ裏計算でシステム設計する](http://highscalability.com/blog/2011/1/26/google-pro-tip-use-back-of-the-envelope-calculations-to-choo.html)
* [2の指数表](#powers-of-two-table)
* [全てのプログラマーが知っておくべきレイテンシの参考値](#latency-numbers-every-programmer-should-know)

### 文献とその他の参考資料

以下のリンク先ページを見てどのような質問を投げかけられるか概要を頭に入れておきましょう:

* [システム設計面接で成功するには？](https://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/)
* [システム設計面接](http://www.hiredintech.com/system-design)
* [アーキテクチャ、システム設計面接への導入](https://www.youtube.com/watch?v=ZgdS0EUmn70)

## システム設計課題例とその解答

> 頻出のシステム設計面接課題と参考解答、コード及びダイアグラム
>
> 解答は `solutions/` フォルダ以下にリンクが貼られている。

| 問題 | |
|---|---|
| Pastebin.com (もしくは Bit.ly) を設計する| [解答](solutions/system_design/pastebin/README.md) |
| Twitterタイムライン (もしくはFacebookフィード)を設計する<br/>Twitter検索(もしくはFacebook検索)機能を設計する | [解答](solutions/system_design/twitter/README.md) |
| ウェブクローラーを設計する | [解答](solutions/system_design/web_crawler/README.md) |
| Mint.comを設計する | [解答](solutions/system_design/mint/README.md) |
| SNSサービスのデータ構造を設計する | [解答](solutions/system_design/social_graph/README.md) |
| 検索エンジンのキー/バリュー構造を設計する | [解答](solutions/system_design/query_cache/README.md) |
| Amazonのカテゴリ毎の売り上げランキングを設計する | [解答](solutions/system_design/sales_rank/README.md) |
| AWS上で100万人規模のユーザーを捌くサービスを設計する | [解答](solutions/system_design/scaling_aws/README.md) |
| システム設計問題を追加する | [Contribute](#contributing) |

### Pastebin.com (もしくは Bit.ly) を設計する

[問題と解答を見る](solutions/system_design/pastebin/README.md)

![Imgur](http://i.imgur.com/4edXG0T.png)

### Twitterタイムライン&検索 (もしくはFacebookフィード&検索)を設計する

[問題と解答を見る](solutions/system_design/twitter/README.md)

![Imgur](http://i.imgur.com/jrUBAF7.png)

### ウェブクローラーの設計

[問題と解答を見る](solutions/system_design/web_crawler/README.md)

![Imgur](http://i.imgur.com/bWxPtQA.png)

### Mint.comの設計

[問題と解答を見る](solutions/system_design/mint/README.md)

![Imgur](http://i.imgur.com/V5q57vU.png)

### SNSサービスのデータ構造を設計する

[問題と解答を見る](solutions/system_design/social_graph/README.md)

![Imgur](http://i.imgur.com/cdCv5g7.png)

### 検索エンジンのキー/バリュー構造を設計する

[問題と解答を見る](solutions/system_design/query_cache/README.md)

![Imgur](http://i.imgur.com/4j99mhe.png)

### Amazonのカテゴリ毎の売り上げランキングを設計する

[問題と解答を見る](solutions/system_design/sales_rank/README.md)

![Imgur](http://i.imgur.com/MzExP06.png)

### AWS上で100万人規模のユーザーを捌くサービスを設計する

[問題と解答を見る](solutions/system_design/scaling_aws/README.md)

![Imgur](http://i.imgur.com/jj3A5N8.png)

## オブジェクト志向設計問題と解答

> 頻出のオブジェクト志向システム設計面接課題と参考解答、コード及びダイアグラム
>
> 解答は `solutions/` フォルダ以下にリンクが貼られている。

>**備考: このセクションは作業中です**

| 問題 | |
|---|---|
| ハッシュマップの設計 | [解答](solutions/object_oriented_design/hash_table/hash_map.ipynb)  |
| LRUキャッシュの設計 | [解答](solutions/object_oriented_design/lru_cache/lru_cache.ipynb)  |
| コールセンターの設計 | [解答](solutions/object_oriented_design/call_center/call_center.ipynb)  |
| カードのデッキの設計 | [解答](solutions/object_oriented_design/deck_of_cards/deck_of_cards.ipynb)  |
| 駐車場の設計 | [解答](solutions/object_oriented_design/parking_lot/parking_lot.ipynb)  |
| チャットサーバーの設計 | [解答](solutions/object_oriented_design/online_chat/online_chat.ipynb)  |
| 円形配列の設計 | [Contribute](#contributing)  |
| オブジェクト志向システム設計問題を追加する | [Contribute](#contributing) |

## システム設計トピックス: まずはここから

システム設計の勉強は初めて？

まず初めに、よく使われる設計原理について、それらが何であるか、どのように用いられるか、長所短所について基本的な理解を得る必要があります

### ステップ 1: スケーラビリティに関する動画を観て復習する

[Harvardでのスケーラビリティの講義](https://www.youtube.com/watch?v=-W9F__D3oY4)

* ここで触れられているトピックス:
    * 垂直スケーリング
    * 水平スケーリング
    * キャッシング
    * ロードバランシング
    * データベースレプリケーション
    * データベースパーティション

### ステップ 2: スケーラビリティに関する資料を読んで復習する

[スケーラビリティ](http://www.lecloud.net/tagged/scalability)

* ここで触れられているトピックス:
    * [クローン](http://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
    * [データベース](http://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
    * [キャッシュ](http://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
    * [非同期](http://www.lecloud.net/post/9699762917/scalability-for-dummies-part-4-asynchronism)

### 次のステップ

次に、ハイレベルでのトレードオフについてみていく:

* **パフォーマンス** vs **スケーラビリティ**
* **レイテンシ** vs **スループット**
* **可用性** vs **一貫性**

**全てはトレードオフの関係にある**というのを肝に命じておきましょう。

それから、より深い内容、DNSやCDNそしてロードバランサーなどについて学習を進めていきましょう。

## パフォーマンス vs スケーラビリティ

リソースが追加されるのにつれて **パフォーマンス** が向上する場合そのサービスは **scalable** であると言えるでしょう。一般的に、パフォーマンスを向上させるというのはすなわち計算処理を増やすことを意味しますが、データセットが増えた時などより大きな処理を捌けるようになることでもあります。<sup><a href=http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html>1</a></sup>

パフォーマンスvsスケーラビリティをとらえる他の考え方:

* **パフォーマンス** での問題を抱えている時、あなたのシステムは一人のユーザーにとって遅いと言えるでしょう。
* **スケーラビリティ** での問題を抱えているとき、一人のユーザーにとっては速いですが、多くのリクエストがある時には遅くなってしまうでしょう。

### その他の参考資料、ページ

* [スケーラビリティについて](http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html)
* [スケーラビリティ、可用性、安定性、パターン](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)

## レイテンシー vs スループット

**レイテンシー** とはなにがしかの動作を行う、もしくは結果を算出するのに要する時間

**スループット** とはそのような動作や結果算出が単位時間に行われる回数

一般的に、 **最大限のスループット** を **許容範囲内のレイテンシー** で実現することを目指すのが普通だ。

### その他の参考資料、ページ

* [レイテンシー vs スループットを理解する](https://community.cadence.com/cadence_blogs_8/b/sd/archive/2010/09/13/understanding-latency-vs-throughput)

## 可用性 vs 一貫性

### CAP 理論

<p align="center">
  <img src="http://i.imgur.com/bgLMI2u.png">
  <br/>
  <i><a href=http://robertgreiner.com/2014/08/cap-theorem-revisited>Source: CAP theorem revisited</a></i>
</p>

分散型コンピュータシステムにおいては下の三つのうち二つまでしか同時に保証することはできない。:

* **一貫性** - 全ての読み込みは最新の書き込みもしくはエラーを受け取る
* **可用性** - 受け取る情報が最新のものだという保証はないが、全てのリクエストはレスポンスを必ず受け取る
* **分断耐性** - ネットワーク問題によって順不同の分断が起きてもシステムが動作を続ける

*ネットワークは信頼できないので、分断耐性は必ず保証しなければなりません。つまりソフトウェアシステムとしてのトレードオフは、一貫性を取るか、可用性を取るかを考えなければなりません。*

#### CP - 一貫性と分断耐性(consistency and partition tolerance)

分断されたノードからのレスポンスを待ち続けているとタイムアウトエラーに陥る可能性があります。CPはあなたのサービスがアトミックな読み書き（不可分操作）を必要とする際にはいい選択肢でしょう。

#### AP - 可用性と分断耐性(availability and partition tolerance)

レスポンスはノード上にあるデータで最新のものを返します。つまり、最新版のデータが返されるとは限りません。分断が解消された後も、書き込みが反映されるのには時間がかかります。

[結果整合性](#eventual-consistency)　を求めるサービスの際にはAPを採用するのがいいでしょう。もしくは、外部エラーに関わらずシステムが稼働する必要がある際にも同様です。

### その他の参考資料、ページ

* [CAP 理論を振り返る](http://robertgreiner.com/2014/08/cap-theorem-revisited/)
* [平易な英語でのCAP 理論のイントロ](http://ksat.me/a-plain-english-introduction-to-cap-theorem/)
* [CAP FAQ](https://github.com/henryr/cap-faq)

## 一貫性パターン

同じデータの複製が複数ある状態では、クライアントが一貫したデータ表示を受け取るために、どのようにそれらを同期すればいいのかという課題があります。 [CAP 理論](#cap-theorem) における一貫性の定義を思い出してみましょう。全ての読み取りは最新の書き込みデータもしくはエラーを受け取るはずです。

### 弱い一貫性

書き込み後の読み取りでは、その最新の書き込みを読めたり読めなかったりする。一番良いアプローチが選択される。

メムキャッシュなどのシステムにおいてこのアプローチは取られる。弱い一貫性はリアルタイム性が必要な使用例、例えばVoIP、ビデオチャット、リアルタイムマルチプレイヤーゲームなどと相性がいいでしょう。例えば、電話に出ていて、受信を数秒受け取れなかったとして、その後に接続回復してもその接続が切断されていた間に話されていたことは聞き取れないというような感じです。

### 結果整合性

書き込みの後、読み取りは最終的にはその結果を読み取ることができる。 (ミリ秒ほど遅れてというのが一般的です)。データは非同期的に複製されます。

このアプローチはDNSやメールシステムなどに採用されています。結果整合性は多くのリクエストを捌くサービスと相性がいいでしょう。

### 強い一貫性

書き込みの後、読み取りはそれを必ず読むことができます。データは同期的に複製されます。

このアプローチはファイルシステムやRDBMなどで採用されています。トランザクションを扱うサービスでは強い一貫性が必要でしょう。

### その他の参考資料、ページ

* [データセンター間でのトランザクション](http://snarfed.org/transactions_across_datacenters_io.html)

## 可用性パターン

高い可用性を担保するには主に次の二つのパターンがあります: **フェイルオーバー** と **レプリケーション** です。

### フェイルオーバー

#### アクティブ・パッシブ

アクティブ・パッシブフェイルオーバーにおいては、周期信号はアクティブもしくはスタンバイ中のパッシブなサーバーに送られます。周期信号が中断された時には、パッシブだったサーバーがアクティブサーバーのIPアドレスを引き継いでサービスを再開します。

起動までのダウンタイムはパッシブサーバーが「ホット」なスタンバイ状態にあるか、「コールド」なスタンバイ状態にあるかで変わります。アクティブなサーバーのみがトラフィックを捌きます。

Active-passive failover can also be referred to as master-slave failover.

#### Active-active

In active-active, both servers are managing traffic, spreading the load between them.

If the servers are public-facing, the DNS would need to know about the public IPs of both servers.  If the servers are internal-facing, application logic would need to know about both servers.

アクティブ・パッシブなフェイルオーバーはマスター・スレーブフェイルオーバーだとも言えるでしょう。

### 短所: フェイルオーバー

* フェイルオーバーではより多くのハードウェアを要し、複雑さが増します。
* 最新の書き込みがパッシブサーバーに複製される前にアクティブが落ちると、データ欠損が起きる潜在可能性があります。

### レプリケーション

#### マスター・スレーブ　と　マスター・マスター

このトピックは [Database](#database) セクションにおいてより詳細に解説されています:

* [マスター・スレーブ レプリケーション](#master-slave-replication)
* [マスター・マスター レプリケーション](#master-master-replication)

## ドメインネームシステム

<p align="center">
  <img src="http://i.imgur.com/IOyLj4i.jpg">
  <br/>
  <i><a href=http://www.slideshare.net/srikrupa5/dns-security-presentation-issa>Source: DNS security presentation</a></i>
</p>

ドメインネームシステム (DNS) は www.example.com などのドメインネームをIPアドレスへと翻訳します。

DNSは少数のオーソライズされたサーバーが上位に位置する階層的構造です。あなたのルーターもしくはISPは検索をする際にどのDNSサーバーに接続するかという情報を提供します。低い階層のDNSサーバーはその経路マップをキャッシュします。ただ、この情報は伝搬遅延によって陳腐化する可能性があります。DNSの結果はあなたのブラウザもしくはOSに一定期間（[time to live (TTL)](https://en.wikipedia.org/wiki/Time_to_live)に設定された期間）キャッシュされます。

* **NS record (name server)** - あなたのドメイン・サブドメインでのDNSサーバーを特定します。
* **MX record (mail exchange)** - メッセージを受け取るメールサーバーを特定します。
* **A record (address)** - IPアドレスに名前をつけます。
* **CNAME (canonical)** - 他の名前もしくは　`CNAME` (example.com を www.example.com) もしくは `A` recordへと名前を指し示す。

[CloudFlare](https://www.cloudflare.com/dns/) や [Route 53](https://aws.amazon.com/route53/) などのサービスはマネージドDNSサービスを提供しています。いくつかのDNSサービスでは様々な手法を使ってトラフィックを捌くことができます:

* [加重ラウンドロビン](http://g33kinfo.com/info/archives/2657)
    * トラフィックがメンテナンス中のサーバーに行くのを防ぎます
    * 様々なクラスターサイズに応じて調整します
    * A/B テスト
* レイテンシーベース
* 地理ベース

### 欠点: DNS

* 上記で示されているようなキャッシングによって緩和されているとはいえ、DNSサーバーへの接続には少し遅延が生じる。
* DNSサーバーは、[政府、ISP企業,そして大企業](http://superuser.com/questions/472695/who-controls-the-dns-servers/472729)に管理されているが、それらの管理は複雑である。
* DNSサービスは[DDoS attack](http://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/)の例で、IPアドレスなしにユーザーがTwitterなどにアクセスできなくなったように、攻撃を受ける可能性がある。

### その他の参考資料、ページ

* [DNS アーキテクチャ](https://technet.microsoft.com/en-us/library/dd197427(v=ws.10).aspx)
* [Wikipedia](https://en.wikipedia.org/wiki/Domain_Name_System)
* [DNS 記事](https://support.dnsimple.com/categories/dns/)

## コンテントデリバリーネットワーク(Content delivery network)

<p align="center">
  <img src="http://i.imgur.com/h9TAuGI.jpg">
  <br/>
  <i><a href=https://www.creative-artworks.eu/why-use-a-content-delivery-network-cdn/>Source: Why use a CDN</a></i>
</p>

コンテントデリバリーネットワーク(CDN)は世界中に配置されたプロキシサーバーのネットワークがユーザーに一番地理的に近いサーバーからコンテンツを配信するシステムのことです。AmazonのCloudFrontなどは例外的にダイナミックなコンテンツも配信しますが、一般的に、HTML/CSS/JS、写真、そして動画などの静的ファイルがCDNを通じて配信されます。そのサイトのDNSがクライアントにどのサーバーと交信するかという情報を伝えます。

CDNを用いてコンテンツを配信することで以下の二つの理由でパフォーマンスが劇的に向上します:

* ユーザーは近くにあるデータセンターから受信できる
* バックエンドサーバーはCDNが処理してくれるリクエストに関しては処理する必要がなくなります

### プッシュCDN

プッシュCDNではサーバーデータに更新があった時には必ず、新しいコンテンツを受け取る方式です。コンテンツを配信し、CDNに直接アップロードし、URLをCDNを指すように指定するところまで全ての責任を負う形です。コンテンツがいつ期限切れになるのか更新されるのかを設定することができます。コンテンツは新規作成時、更新時のみアップロードされることでトラフィックは最小化される一方、ストレージは最大限費消されてしまいます。

トラフィックの少ない、もしくは頻繁にはコンテンツが更新されないサイトの場合にはプッシュCDNと相性がいいでしょう。コンテンツは定期的に再びプルされるのではなく、CDNに一度のみ配置されます。

### プルCDNs

プルCDNでは一人目のユーザーがリクエストした時に、新しいコンテンツをサービスのサーバーから取得します。コンテンツは自分のサーバーに保存して、CDNを指すURLを書き換えます。結果として、CDNにコンテンツがキャッシュされるまではリクエスト処理が遅くなります。

[time-to-live (TTL)](https://en.wikipedia.org/wiki/Time_to_live) はコンテンツがどれだけの期間キャッシュされるかを規定します。プルCDNはCDN 上でのストレージスペースを最小化しますが、有効期限が切れたファイルが更新前にプルされてしまうことで冗長なトラフィックに繋がってしまう可能性があります。

大規模なトラフィックのあるサイトではプルCDNが相性がいいでしょう。というのも、トラフィックの大部分は最近リクエストされ、CDNに残っているコンテンツにアクセスするものであることが多いからです。

### 欠点: CDN

* CDNのコストはトラフィック量によって変わります。もちろん、CDNを使わない場合のコストと比較するべきでしょう。
* TTLが切れる前にコンテンツが更新されると陳腐化する恐れがあります。
* CDNでは静的コンテンツがCDNを指すようにURLを更新する必要があります。

### その他の参考資料、ページ

* [グローバルに分散されたコンテンツデリバリーネットワーク](http://repository.cmu.edu/cgi/viewcontent.cgi?article=2112&context=compsci)
* [プッシュCDNとプルCDNの違い](http://www.travelblogadvice.com/technical/the-differences-between-push-and-pull-cdns/)
* [Wikipedia](https://en.wikipedia.org/wiki/Content_delivery_network)

## ロードバランサー

<p align="center">
  <img src="http://i.imgur.com/h81n9iK.png">
  <br/>
  <i><a href=http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html>Source: Scalable system design patterns</a></i>
</p>

ロードバランサーは入力されるクライアントのリクエストをアプリケーションサーバーやデータベースへと分散させる。どのケースでもロードバランサーはサーバー等計算リソースからのレスポンスを適切なクライアントに返す。ロードバランサーは以下のことに効果的です:

* リクエストが状態の良くないサーバーに行くのを防ぐ
* リクエストを過重に送るのを防ぐ
* 特定箇所の欠陥でサービスが落ちることを防ぐ

ロードバランサーはハードウェアを用いて (費用高い) もしくはHAProxyなどのソフトウェアで実現できる。

他の利点としては:

* **SSL termination** - 入力されるリクエストを解読する、また、サーバーレスポンスを暗号化することでバックエンドのサーバーがこのコストが高くつきがちな処理を請け負わなくていいように肩代わりします。 
    * [X.509 certificates](https://en.wikipedia.org/wiki/X.509) をそれぞれのサーバーにインストールする必要をなくします
* **セッション管理** - クッキーを取り扱いウェブアプリがセッション情報を保持していない時などに、特定のクライアントのリクエストを同じインスタンスへと流します。

障害に対応するために、[アクティブ・パッシブ](#active-passive) もしくは [アクティブ・アクティブ](#active-active) モードのいずれに限らず、複数のロードバランサーを配置するのが一般的です。

ロードバランサーは以下のような種々のメトリックを用いてとらふぃっくんルーティングを行うことができます:

* ランダム
* Least loaded
* セッション/クッキー
* [ラウンドロビンもしくは荷重ラウンドロビン](http://g33kinfo.com/info/archives/2657)
* [Layer 4](#layer-4-load-balancing)
* [Layer 7](#layer-7-load-balancing)

### Layer 4 ロードバランシング

Layer 4 ロードバランサーは [トランスポートレイヤー](#communication) を参照してどのようにリクエストを配分するか判断します。一般的に、トランスポートレイヤーとしては、ソース、送信先IPアドレス、ヘッダーに記述されたポート番号が含まれますが、パケットの中身のコンテンツは含みません Layer 4 ロードバランサーはネットワークパケットを上流サーバーへ届け、上流サーバーから配信することでネットワークアドレス変換 [Network Address Translation (NAT)](https://www.nginx.com/resources/glossary/layer-4-load-balancing/) を実現します。

### Layer 7 ロードバランシング

Layer 7 ロードバランサーは [アプリケーションレイヤー](#communication) を参照してどのようにリクエストを配分するか判断します。ヘッダー、メッセージ、クッキーなどのコンテンツのことです。Layer 7 ロードバランサーはネットワークトラフィックの終端を受け持ち メッセージを読み込み、ロードバランシングの判断をし、選択したサーバーとの接続を繋ぎます。例えば layer 7 ロードバランサーは動画のトラフィックを直接、そのデータをホストしているサーバーにつなぐと同時に、決済処理などのより繊細なトラフィックをセキュリティ強化されたサーバー流すということもできる。

柔軟性とのトレードオフになりますが、 layer 4 ロードバランサーではLayer 7ロードバランサーよりも所要時間、計算リソースを少なく済むことができます。ただし、昨今の汎用ハードウェアではパフォーマンスは最小限のみしか発揮できないでしょう。

### 水平スケーリング

ロードバランサーでは水平スケーリングによってパフォーマンスと可用性を向上させることができます。手頃な汎用マシンを追加することによってスケーリングさせる方が、 **垂直スケーリング** と言って、サーバーをよりハイパフォーマンスなマシンに載せ替えることよりもずっと費用対効果も可用性も高いでしょう。また、汎用ハードウェアを扱える人材を雇う方が、特化型の商用ハードウェアを扱える人材を雇うよりも簡単でしょう。

#### 欠点: 水平スケーリング

* 水平的にスケーリングしていくと、複雑さが増す上に、サーバーのクローニングが必要になる
    * サーバーはステートレスである必要がある: ユーザーに関連するセッションや、プロフィール写真などのデータを持ってはいけない
    * セッションは一元的な[データベース](#database) (SQL, NoSQL)などのデータストアにストアされるか [キャッシュ](#cache) (Redis, Memcached)に残す必要があります。
* キャッシュやデータベースなどの下流サーバーは上流サーバーがスケールアウトするにつれてより多くの同時接続を保たなければなりません。

### 欠点: ロードバランサー

* ロードバランサーはリソースが不足していたり、設定が適切でない場合、システム全体のボトルネックになる可能性があります。
* 単一障害点を除こうとしてロードバランサーを導入した結果、複雑さが増してしまうことになります。
* 単一ロードバランサーでは単一障害点が除かれたことにはなりませんが、複数のロードバランサーはそれすなわち複雑化です。

### その他の参考資料、ページ

* [NGINX アーキテクチャ](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
* [HAProxy アーキテクチャガイド](http://www.haproxy.org/download/1.2/doc/architecture.txt)
* [スケーラビリティ](http://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
* [Wikipedia](https://en.wikipedia.org/wiki/Load_balancing_(computing))
* [Layer 4 ロードバランシング](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)
* [Layer 7 ロードバランシング](https://www.nginx.com/resources/glossary/layer-7-load-balancing/)
* [ELB listener config](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html)

## リバースプロキシ(webサーバー)

<p align="center">
  <img src="http://i.imgur.com/n41Azff.png">
  <br/>
  <i><a href=https://upload.wikimedia.org/wikipedia/commons/6/67/Reverse_proxy_h2g2bob.svg>Source: Wikipedia</a></i>
  <br/>
</p>

リバースプロキシサーバーは内部サービスをまとめて外部に統一されたインターフェースを提供するウェブサーバーです。クライアントからのリクエストはそれに対応するサーバーに送られて、その後レスポンスをリバースプロキシがクライアントに返します。

他には以下のような利点があります:

* **より堅牢なセキュリティ** - バックエンドサーバーの情報、ブラックリストIP、クライアントごとの接続数などの情報を隠すことができます。
* **スケーラビリティや柔軟性が増します** - クライアントはリバースプロキシのIPしか見ないので、裏でサーバーをスケールしたり、設定を変えやすくなります。
* **SSL termination** - 入力’されるリクエストを解読し、サーバーのレスポンスを暗号化することでサーバーがこのコストのかかりうる処理をしなくて済むようになります。
    * [X.509 証明書](https://en.wikipedia.org/wiki/X.509) を各サーバーにインストールする必要がなくなります。
* **圧縮** - サーバーレスポンスを圧縮できます
* **キャッシング** - キャッシュされたリクエストに対して、レスポンスを返します
* **静的コンテンツ** - 静的コンテンツを直接送信することができます。
    * HTML/CSS/JS
    * 写真
    * 動画
    * などなど

### ロードバランサー vs リバースプロキシ

* 複数のサーバーがある時にはロードバランサーをデプロイすると役に立つでしょう。 しばしば、ロードバランサーは同じ機能を果たすサーバー群へのトラフィックを捌きます。
* リバースプロキシでは、上記に述べたような利点を、単一のウェブサーバーやアプリケーションレイヤーに対しても示すことができます。
* NGINX や HAProxy などの技術はlayer 7 リバースプロキシとロードバランサーの両方をサポートします。

### 欠点: リバースプロキシ

* リバースプロキシを導入するとシステムの複雑性が増します。
* 単一のリバースプロキシは単一障害点になりえます。一方で、複数のリバースプロキシを導入すると([フェイルオーバー]など(https://en.wikipedia.org/wiki/Failover)) 複雑性はより増します。

### その他の参考資料、ページ

* [リバースプロキシ vs ロードバランサー](https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/)
* [NGINX アーキテクチャ](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
* [HAProxy アーキテクチャ ガイド](http://www.haproxy.org/download/1.2/doc/architecture.txt)
* [Wikipedia](https://en.wikipedia.org/wiki/Reverse_proxy)

## アプリケーション層

<p align="center">
  <img src="http://i.imgur.com/yB5SYwm.png">
  <br/>
  <i><a href=http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer>Source: Intro to architecting systems for scale</a></i>
</p>

ウェブレイヤーをアプリケーション層 (プラットフォーム層とも言われる) と分離することでそれぞれの層を独立にスケール、設定することができるようにまります。新しいAPIをアプリケーション層に追加する際に、不必要にウェブサーバーを追加する必要がなくなります。

 **単一責任の原則** では、小さい自律的なサービスが協調して動くように提唱しています。小さいサービスの小さいチームが急成長のためにより積極的な計画を立てられるようにするためです。

アプリケーション層は[異時性](#asynchronism)もサポートします。

### マイクロサービス

独立してデプロイできる、小規模なモジュール様式である[マイクロサービス](https://en.wikipedia.org/wiki/Microservices)もこの議論に関係してくる技術でしょう。それぞれのサービスは独自のプロセスを処理し、明確で軽量なメカニズムで通信して、その目的とする機能を実現します。<sup><a href=https://smartbear.com/learn/api-design/what-are-microservices>1</a></sup>

例えばPinterestでは以下のようなマイクロサービスに分かれています。ユーザープロフィール、フォロワー、フィード、検索、写真アップロードなどです。

### Service Discovery

[Consul](https://www.consul.io/docs/index.html)、 [Etcd](https://coreos.com/etcd/docs/latest)、 そして [Zookeeper](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) などのシステムはそれぞれを見つけやすいように、登録された名前、アドレス、そしてポート番号などを監視しています。[Health checks](https://www.consul.io/intro/getting-started/checks.html) はサービスの統一性を証明するのに有用ですが、しばしば[HTTP](#hypertext-transfer-protocol-http) エンドポイントを用いています。  Consul と Etcd のいずれも組み込みの [key-value store](#key-value-store) を持っており、設定データや共有データなどのデータを保存しておくことに使われます。

### 欠点: アプリケーション層

* 緩く結び付けられたアプリケーション層を追加することは、モノリシックなシステムとはアーキテクチャ、運用、そしてプロセスの観点からすると異なるアプローチを必要とします。
* マイクロサービスはデプロイと運用の点から見ると複雑性が増すことになります。

### その他の参考資料、ページ

* [スケールするシステムアーキテクチャを設計するためにイントロ](http://lethain.com/introduction-to-architecting-systems-for-scale)
* [システム設計インタビューを紐解く](http://www.puncsky.com/blog/2016/02/14/crack-the-system-design-interview/)
* [サービス指向アーキテクチャ](https://en.wikipedia.org/wiki/Service-oriented_architecture)
* [Zookeeperのイントロダクション](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper)
* [マイクロサービスを作るために知っておきたいこと](https://cloudncode.wordpress.com/2016/07/22/msa-getting-started/)

## データベース

<p align="center">
  <img src="http://i.imgur.com/Xkm5CXz.png">
  <br/>
  <i><a href=https://www.youtube.com/watch?v=vg5onp8TU6Q>Source: Scaling up to your first 10 million users</a></i>
</p>

### リレーショナルデータベースマネジメントシステム (RDBMS)

SQLなどのリレーショナルデータベースはテーブルに整理されたデータの集合である。 

**ACID** はリレーショナルデータベースにおけるプロパティの集合である [トランザクション](https://en.wikipedia.org/wiki/Database_transaction)

* **不可分性** - それぞれのトランザクションはあるかないかである。
* **一貫性** - どんなトランザクションもデータベースをある確かな状態から次の状態に遷移させる。
* **独立性** - 同時にトランザクションを処理することは、連続的にトランザクションを処理するのと同じ結果をもたらす。
* **永続性** - トランザクションが処理されたら、そのように保存される

リレーショナルデータベースをスケールさせるためにはたくさんの技術がある: **マスタースレーブ レプリケーション**、 **マスターマスター レプリケーション**、 **federation**, **シャーディング**, **非正規化**, そして **SQL チューニング**

#### マスタースレーブ レプリケーション

マスターデータベースが読み取りと書き込みを処理し、書き込みを一つ以上のスレーブデータベースに複製します。スレーブデータベースは読み取りのみを処理します。スレーブデータベースは木構造のように追加のスレーブにデータを複製することもできます。マスターデータベースがオフラインになった場合には、いずれかのスレーブがマスターに昇格するか、新しいマスターデータベースが追加されるまでは読み取り専用モードで稼働します。

<p align="center">
  <img src="http://i.imgur.com/C9ioGtn.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

##### 欠点: マスタースレーブ レプリケーション

* スレーブをマスターに昇格させるには追加のロジックが必要になる。
* マスタースレーブ レプリケーション、マスターマスター レプリケーションの **両方** の欠点は次を参照[欠点: レプリケーション](#disadvantages-replication) 

#### マスターマスター レプリケーション

いずれのマスターも読み取り書き込みの両方に対応する。書き込みに関してはそれぞれ強調する。いずれかのマスターが落ちても、システム全体としては読み書き両方に対応したまま運用できる。

<p align="center">
  <img src="http://i.imgur.com/krAHLGg.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

##### 欠点: マスターマスター レプリケーション

* ロードバランサーを導入するか、アプリケーションロジックを変更することでどこに書き込むかを指定しなければならない。
* 大体のマスターマスターシステムは、一貫性が緩い（ACID原理を守っていない）もしくは、同期する時間がかかるために書き込みのレイテンシーが増加してしまっている。
* 書き込みノードが追加され、レイテンシーが増加するにつれ書き込みの衝突の可能性が増える。
* マスタースレーブ レプリケーション、マスターマスター レプリケーションの **両方** の欠点は次を参照[欠点: レプリケーション](#disadvantages-replication) 

##### 欠点: レプリケーション

* 新しいデータ書き込みを複製する前にマスターが落ちた場合にはそのデータが失われてしまう可能性がある。
* 書き込みは読み取りレプリカにおいてリプレイされる。書き込みが多い場合、複製ノードが書き込みの処理のみで行き詰まって、読み取りの処理を満足に行えない可能性がある。
* 読み取りスレーブノードの数が多ければ多いほど、複製しなければならない数も増え、複製時間が伸びてしまいます。
* システムによっては、マスターへの書き込みはマルチスレッドで並列処理できる一方、スレーブへの複製は単一スレッドで連続的に処理しなければならない場合があります。
* レプリケーションでは追加のハードウェアが必要になり、複雑性も増します。

##### その他の参考資料、ページ: レプリケーション

* [スケーラビリティ、 可用性、 スタビリティ パターン](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)
* [マルチマスター レプリケーション](https://en.wikipedia.org/wiki/Multi-master_replication)

#### Federation

<p align="center">
  <img src="http://i.imgur.com/U3qV33e.png">
  <br/>
  <i><a href=https://www.youtube.com/watch?v=vg5onp8TU6Q>Source: Scaling up to your first 10 million users</a></i>
</p>

フェデレーション (もしくは機能分割化とも言う) はデータベースを機能ごとに分割する。例えば、モノリシックな単一データベースの代わりに三つのデータベースを持つことができます: **フォーラム**、 **ユーザー** そして **プロダクト**です。各データベースへの書き込み読み取りのトラフィックが減ることで複製ラグも短くなります。より小さなデータベースを用いることで、メモリーに収まるデータが増えます。ローカルキャッシュに保存できる量が増えることで、キャッシュヒット率も上がります。単一の中央マスターが書き込みの処理をしなくても、並列で書き込みを処理することができ、スループットの向上が期待できます。 

##### 欠点: federation

* 大規模な処理やテーブルを要するスキーマの場合、フェデレーションは効果的とは言えないでしょう。
* どのデータベースに読み書きをするのかを指定するアプリケーションロジックを更新しなければなりません。
* [server link](http://stackoverflow.com/questions/5145637/querying-data-by-joining-two-tables-in-two-database-on-different-servers)で二つのデータベースからのデータを連結するのはより複雑になるでしょう。
* フェデレーションでは追加のハードウェアが必要になり、複雑性も増します。

##### その他の参考資料、ページ: federation

* [Scaling up to your first 10 million users](https://www.youtube.com/watch?v=vg5onp8TU6Q)

#### シャーディング

<p align="center">
  <img src="http://i.imgur.com/wU8x5Id.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

シャーディングでは異なるデータベースにそれぞれがデータのサブセット断片のみを持つようにデータを分割します。ユーザーデータベースを例にとると、ユーザー数が増えるにつれてクラスターにはより多くの断片が加えられることになります。

[federation](#federation)の利点に似ていて、シャーディングでは読み書きのトラフィックを減らし、レプリケーションを減らし、キャッシュヒットを増やすことができます。インデックスサイズも減らすことができます。一般的にはインデックスサイズを減らすと、パフォーマンスが向上しクエリ速度が速くなります。なにがしかのデータを複製する機能がなければデータロスにつながりますが、もし、一つのシャーどが落ちても、他のシャードが動いていることになります。フェデレーションと同じく、単一の中央マスターが書き込みの処理をしなくても、並列で書き込みを処理することができ、スループットの向上が期待できます。 

ユーザーテーブルをシャードする一般的な方法は、ユーザーのラストネームイニシャルでシャードするか、ユーザーの地理的配置でシャードするなどです。

##### 欠点: シャーディング

* シャードに対応するようにアプリケーションロジックを変更しなければなりません。結果としてSQLクエリが複雑になります。
* シャードではデータ配分がいびつになってしまう可能性があります。例えば、標準ユーザーの集合を持つシャードがある場合、そのシャードが他のシャードよりも重い負荷を負うことになります。
    * リバランシングをすると複雑性がより増します。[consistent hashing](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html) に基づいたシャーディングでは、通信データを削減することもできます。
* 複数のシャードからのデータを連結するのはより複雑です。
* シャーディングでは追加のハードウェアが必要になり、複雑性も増します。

##### その他の参考資料、ページ: シャーディング

* [シャードの登場](http://highscalability.com/blog/2009/8/6/an-unorthodox-approach-to-database-design-the-coming-of-the.html)
* [シャードデータベースアーキテクチャ](https://en.wikipedia.org/wiki/Shard_(database_architecture))
* [Consistent hashing](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html)

#### 非正規化

非正規化では、書き込みのパフォーマンスをいくらか犠牲にして読み込みのパフォーマンスを向上させようとします。計算的に重いテーブルの結合などをせずに、複数のテーブルに冗長なデータのコピーが書き込まれるのを許容します。いくつかのRDBMS例えば、[PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) やOracleはこの冗長な情報を取り扱い、一貫性を保つための[materialized views](https://en.wikipedia.org/wiki/Materialized_view) という機能をサポートしています。

[フェデレーション](#federation) や [シャーディング](#sharding)などのテクニックによってそれぞれのデータセンターに分配されたデータを合一させることはとても複雑な作業です。非正規化によってそのような複雑な処理をしなくて済むようになります。

多くのシステムで、100対1あるいはは1000対1くらいになるくらい読み取りの方が、書き込みのトラフィックよりも多いことでしょう。読み込みを行うために、複雑なデータベースのジョイン処理が含まれるものは計算的に高価につきますし、ディスクの処理時間で膨大な時間を費消してしまうことになります。

##### 欠点: 非正規化

* データが複製される
* 冗長なデータの複製が同期されるように制約が存在し、そのことでデータベース全体の設計が複雑化する。
* 非正規化されたデータベースは過大な書き込みを処理しなければならない場合、正規化されているそれよりもパフォーマンスにおいて劣る可能性がある。

###### その他の参考資料、ページ: 非正規化

* [Denormalization](https://en.wikipedia.org/wiki/Denormalization)

#### SQLチューニング

SQLチューニングは広範な知識を必要とする分野で多くの [本](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=sql+tuning) が書かれています。

ボトルネックを明らかにし、シミュレートする上で、 **ベンチマーク** を定め、 **プロファイル** することはとても重要です。

* **ベンチマーク** - [ab](http://httpd.apache.org/docs/2.2/programs/ab.html)などのツールを用いて、高負荷の状況をシミュレーションして見ましょう
* **プロファイル** - [slow query log](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html) などのツールを用いて、パフォーマンス状況の確認をしましょう。

ベンチマークとプロファイルをとることで以下のような効率化の選択肢をとることになるでしょう。

##### スキーマを絞る

* MySQL dumps to disk in contiguous blocks for fast access.より早い接続を得るために、連続したブロックの中のディスクにMySQLをダンプする。
* 長さの決まったフィールドに対しては `CHAR` よりも `VARCHAR` を使うようにしましょう。
    * `CHAR` の方が効率的に速くランダムにデータにアクセスできます。 一方、 `VARCHAR` では次のデータに移る前にデータの末尾を検知しなければならないために速度が犠牲になります。
* ブログ投稿などの大きなテキスト `TEXT` を使いましょう。 `TEXT` ではブーリン型の検索も可能です。 `TEXT` フィールドを使うことは、テキストブロックを配置するのに用いたポインターをディスク上に保存することになります。 
* 2の32乗や40億を超えてくる数に関しては `INT` を使いましょう
* 通貨に関しては小数点表示上のエラーを避けるために `DECIMAL` を使いましょう。
* 大きな `BLOBS` を保存するのは避けましょう。どこからそのオブジェクトを取ってくることができるかの情報を保存しましょう。
* `VARCHAR(255)` は8ビットで数えることができる中で最大の文字数ですが、このフィールドがしばしばRDBMSの中で大きな容量を食います。
* [検索性能を向上させる](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search) ことが可能な箇所については `NOT NULL` 制約を設定しましょう

##### インデックスを効果的に用いる

* クエリ(`SELECT`, `GROUP BY`, `ORDER BY`, `JOIN`) を用いて取得する列はインデックスを用いると速度を向上できる。
* インデックスは通常、対数的にデータを検索、挿入、削除する際に用いる[B-tree](https://en.wikipedia.org/wiki/B-tree)として表現されています。
* Placing an index can keep the data in memory, requiring more space.インデックスを配置することはデータをメモリーに残すことにつながりより容量を必要とします。
* インデックスの更新も必要になるため書き込みも遅くなります。
* 大きなデータを読み込む際には、インデックスを切ってからデータをロードして再びインデックスをビルドした方が速いことがあります。

##### 高負荷なジョインを避ける

* [非正規化](#denormalization) パフォーマンスが必要なところには適用する

##### テーブルのパーティション

* メモリー内に保つために、分離されたテーブルを分割してそれぞれにホットスポットを設定する。

##### クエリキャッシュを調整する

* 場合によっては[クエリキャッシュ](http://dev.mysql.com/doc/refman/5.7/en/query-cache) が[パフォーマンス問題](https://www.percona.com/blog/2014/01/28/10-mysql-performance-tuning-settings-after-installation/) を引き起こす可能性がある

##### その他の参考資料、ページ: SQLチューニング

* [MySQLクエリを最適化するためのTips](http://20bits.com/article/10-tips-for-optimizing-mysql-queries-that-dont-suck)
* [VARCHAR(255)をそんなにたくさん使う必要ある？](http://stackoverflow.com/questions/1217466/is-there-a-good-reason-i-see-varchar255-used-so-often-as-opposed-to-another-l)
* [null値はどのようにパフォーマンスに影響するのか？](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search)
* [Slow query log](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html)

### NoSQL

NoSQL は **key-value store**、 **document-store**、 **wide column store**、 もしくは **graph database**によって表現されるデータアイテムの集合です。データは一般的に正規化されておらず、アプリケーション側でジョインが行われます。大部分のNoSQLは真のACIDトランザクションを持たず、 [結果整合性](#eventual-consistency) 的な振る舞いの方を好みます。

**BASE** はしばしばNoSQLデータベースのプロパティを説明するために用いられます。[CAP Theorem](#cap-theorem) と対照的に、BASEは一貫性よりも可用性を優先します。

* **Basically available** - システムは可用性を保証します。
* **Soft state** - システムの状態は入力がなくても時間経過とともに変化する可能性があります。
* **結果整合性** - システム全体は時間経過とともにその間に入力がないという前提のもと、一貫性が達成されます。

[SQL or NoSQL](#sql-or-nosql) かを選択するのに加えて、どのタイプのNoSQLがどの使用例に最も適するかを理解するのはとても有益です。このセクションでは **キーバリューストア**、 **ドキュメントストア**、 **ワイドカラムストア**、 と **グラフデータベース** について触れていきます。

#### キーバリューストア

> 概要: ハッシュテーブル

キーバリューストアでは一般的に0,1の読み、書きができ、それらはメモリないしSSDで裏付けられています。データストアはキーを [辞書的順序](https://en.wikipedia.org/wiki/Lexicographical_order) で保持することでキーの効率的な取得を可能にしています。キーバリューストアではメタデータを値とともに保持することが可能です。

キーバリューストアはハイパフォーマンスな挙動が可能で、単純なデータモデルやインメモリーキャッシュレイヤーなどのデータが急速に変わる場合などに使われます。単純な処理のみに機能が制限されているので、追加の処理機能が必要な場合にはその複雑性はアプリケーション層に載せることになります。

キーバリューストアはもっと複雑なドキュメントストアや、グラフデータベースなどの基本です。

##### その他の参考資料、ページ: キーバリューストア

* [キーバリューデータベース](https://en.wikipedia.org/wiki/Key-value_database)
* [キーバリューストアの欠点](http://stackoverflow.com/questions/4056093/what-are-the-disadvantages-of-using-a-key-value-table-over-nullable-columns-or)
* [Redisアーキテクチャ](http://qnimate.com/overview-of-redis-architecture/)
* [メムキャッシュアーキテクチャ](https://www.adayinthelifeof.nl/2011/02/06/memcache-internals/)

#### ドキュメントストア

> 概要: ドキュメントがバリューとして保存されたキーバリューストア

ドキュメントストアはオブジェクトに関する全ての情報を持つドキュメント(XML, JSON, binaryなど)を中心に据えたシステムです。ドキュメントストアでは、ドキュメント自身の内部構造に基づいた、APIもしくはクエリ言語を提供します。 *メモ：多くのキーバリューストアでは、値のメタデータを扱う機能を含んでいますが、そのことによって二つドキュメントストアとの境界線が曖昧になってしまっています。*

以上のことを実現するために、ドキュメントはコレクション、タグ、メタデータやディレクトリなどとして整理されています。ドキュメント同士はまとめてグループにできるものの、それぞれで全く異なるフィールドを持つ可能性があります。 

[MongoDB](https://www.mongodb.com/mongodb-architecture) や [CouchDB](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/) などのドキュメントストアも、複雑なクエリを処理するためのSQLのような言語を提供しています。[DynamoDB](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf) はキーバリューとドキュメントの両方をサポートしています。

ドキュメントストアは高い柔軟性を担保するので、頻繁に変化するデータを扱う時に用いられます。

##### その他の参考資料、ページ:  ドキュメントストア

* [ドキュメント志向 データベース](https://en.wikipedia.org/wiki/Document-oriented_database)
* [MongoDB アーキテクチャ](https://www.mongodb.com/mongodb-architecture)
* [CouchDB アーキテクチャ](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/)
* [Elasticsearch アーキテクチャ](https://www.elastic.co/blog/found-elasticsearch-from-the-bottom-up)

#### ワイドカラムストア

<p align="center">
  <img src="http://i.imgur.com/n16iOGk.png">
  <br/>
  <i><a href=http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html>Source: SQL & NoSQL, a brief history</a></i>
</p>

> 概要: ネストされたマップ `カラムファミリー<行キー, カラム<ColKey, Value, Timestamp>>`

ワイドカラムストアのデータの基本単位はカラム（ネーム・バリューのペア）です。それぞれのカラムはカラムファミリーとして（SQLテーブルのように）グループ化することができます。スーパーカラムファミリーはカラムファミリーの集合です。それぞれのカラムには行キーでアクセスすることができます。同じ行キーを持つカラムは同じ行として認識されます。それぞれの値は、バージョン管理とコンフリクトが起きた時のために、タイムスタンプを含みます。

Googleは[Bigtable](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf)を初のワイドカラムストアとして発表しました。それがオープンソースでHadoopなどでよく使われる[HBase](https://www.mapr.com/blog/in-depth-look-hbase-architecture) やFacebookによる[Cassandra](http://docs.datastax.com/en/archived/cassandra/2.0/cassandra/architecture/architectureIntro_c.html) などのプロジェクトに影響を与えました。BigTable、HBaseやCassandraなどのストアはキーを辞書形式で保持することで選択したキーレンジでのデータ取得を効率的にします。

ワイドカラムストアは高い可用性とスケーラビリティを担保します。これらはとても大規模なデータセットを扱うことによく使われます。

##### その他の参考資料、ページ:  ワイドカラムストア

* [SQL & NoSQL簡単に歴史をさらう](http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html)
* [Bigtable アーキテクチャ](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf)
* [HBase アーキテクチャ](https://www.mapr.com/blog/in-depth-look-hbase-architecture)
* [Cassandra アーキテクチャ](http://docs.datastax.com/en/archived/cassandra/2.0/cassandra/architecture/architectureIntro_c.html)

#### グラフデータベース

<p align="center">
  <img src="http://i.imgur.com/fNcl65g.png">
  <br/>
  <i><a href=https://en.wikipedia.org/wiki/File:GraphDatabase_PropertyGraph.png>Source: Graph database</a></i>
</p>

> 概要: グラフ

グラフデータベースでは、それぞれのノーどがレコードで、それぞれのアークは二つのノードを繋ぐ関係性として定義されます。グラフデータベースは多数の外部キーや多対多などの複雑な関係性を表すのに最適です。

グラフデータベースはSNSなどのサービスの複雑な関係性モデルなどについて高いパフォーマンスを発揮します。比較的新しく、まだ一般的には用いられていないので、開発ツールやリソースを探すのが他の方法に比べて難しいかもしれません。多くのグラフは[REST APIs](#representational-state-transfer-rest)を通じてのみアクセスできます。

##### その他の参考資料、ページ:  グラフ

* [Graphデータベース](https://en.wikipedia.org/wiki/Graph_database)
* [Neo4j](https://neo4j.com/)
* [FlockDB](https://blog.twitter.com/2010/introducing-flockdb)

#### その他の参考資料、ページ:  NoSQL

* [基本用語の説明](http://stackoverflow.com/questions/3342497/explanation-of-base-terminology)
* [NoSQLデータベースについて調査と選択ガイド](https://medium.com/baqend-blog/nosql-databases-a-survey-and-decision-guidance-ea7823a822d#.wskogqenq)
* [スケーラビリティ](http://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
* [NoSQLのイントロダクション](https://www.youtube.com/watch?v=qI_g07C_Q5I)
* [NoSQLパターン](http://horicky.blogspot.com/2009/11/nosql-patterns.html)

### SQLか？NoSQLか？

<p align="center">
  <img src="http://i.imgur.com/wXGqG5f.png">
  <br/>
  <i><a href=https://www.infoq.com/articles/Transition-RDBMS-NoSQL/>Source: Transitioning from RDBMS to NoSQL</a></i>
</p>

**SQL** を選ぶ理由:

* 構造化されたデータ
* 厳格なスキーマ
* リレーショナルデータ
* 複雑なジョインをする必要性
* トランザクション
* スケールする際のパターンが明確なとき
* 開発者の数、コミュニティ、コード等がより充実している
* インデックスによるデータ探索はとても速い

**NoSQL** を選ぶ理由:

* 準構造化されたデータ
* ダイナミックないし、フレキシブルなスキーマ
* ノンリレーショナルなデータ
* 複雑なジョインをする必要がない
* データの多くのTB (もしくは PB) を保存する
* 集中的、大規模なデータ負荷に耐えられる
* IOPSについては極めて高いスループットを示す

NoSQLに適するサンプルデータ:

* 急激なクリックストリームやログデータの収集
* リーダーボードやスコアリングデータ
* ショッピングカートなどの一時的情報
* 頻繁にアクセスされる ('ホットな') テーブル
* メタデータやルックアップテーブル

##### その他の参考資料、ページ:  　SQLもしくはNoSQL

* [最初の1000万ユーザーにスケールアップするために](https://www.youtube.com/watch?v=vg5onp8TU6Q)
* [SQLとNoSQLの違い](https://www.sitepoint.com/sql-vs-nosql-differences/)

## キャッシュ

<p align="center">
  <img src="http://i.imgur.com/Q6z24La.png">
  <br/>
  <i><a href=http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html>Source: Scalable system design patterns</a></i>
</p>

キャッシュはページの読み込み時間を削減し、サーバーやデータベースへの負荷を低減することができます。このモデルでは、実際の処理を保存するために、ディスパッチャーがまず以前にリクエストが送信されたかどうかを確認し、直前の結果を受け取ります。

データベースはそのパーティションに渡って統合された読み取り書き込みの分配を要求しますが、人気アイテムはその分配を歪めてシステム全体のボトルネックになってしまうことがあります。データベースの前にキャッシュを差し込むことでこのように、均一でない負荷やトラフィックの急激な増加を吸収することができます。

### クライアントキャッシング

キャッシュはOSやブラウザーなどのクライアントサイド、[server side](#reverse-proxy) もしくは独立のキャッシュレイヤーに設置することができます。

### CDNキャッシング

[CDNs](#content-delivery-network) もキャッシュの一つとして考えることができます。

### Webサーバーキャッシング

[リバースプロキシ](#reverse-proxy-web-server) や [Varnish](https://www.varnish-cache.org/) などのキャッシュは静的そして動的なコンテンツを直接配信することができます。 webサーバーもリクエストをキャッシュしてアプリケーションサーバーに接続することなしにレスポンスを返すことができます。

### データベースキャッシング

データベースは普通、一般的な使用状況に適するようなキャッシングの設定を初期状態で持っています。この設定を特定の使用にあった仕様にいじることでパフォーマンスを向上させることができます。

### アプリケーションキャッシング

メムキャッシュなどのIn-memoryキャッシュやRedisはアプリケーションとデータストレージの間のキーバリューストアです。データはRAMで保持されるため、データがディスクで保存される一般的なデータベースよりもだいぶ速いです。RAM容量はディスクよりも限られているので、[least recently used (LRU)](https://en.wikipedia.org/wiki/Cache_algorithms#Least_Recently_Used)などの[cache invalidation](https://en.wikipedia.org/wiki/Cache_algorithms) アルゴリズムが 'コールド' なエントリを弾き、'ホット' なデータをRAMに保存します。

Redisはさらに以下のような機能を備えています:

* パージステンス設定
* ソート済みセット、リストなどの組み込みデータ構造

キャッシュには様々なレベルのものがありますが、いずれも大きく二つのカテゴリーいずれかに分類することができます: **データベースクエリ** と **オブジェクト** です:

* 行レベル
* クエリレベル
* Fully-formed serializable objects
* Fully-rendered HTML

一般的に、ファイルベースキャッシングはクローンを作り出してオートスケーリングを難しくしてしまうので避けるべきです。

### データベースクエリレベルでのキャッシング

データベースをクエリする際には必ずクエリをキーとしてハッシュして結果をキャッシュに保存しましょう。この手法はキャッシュ期限切れ問題に悩むことになります:

* 複雑なクエリによりキャッシュされた結果を削除することが困難
* テーブルセルなどのデータ断片が変化した時に、その変化したセルを含むかもしれない全てのキャッシュされたクエリを削除する必要がある。

### オブジェクトレベルでのキャッシング

データをアプリケーションコードでそうするように、オブジェクトとして捉えてみましょう。アプリケーションに、データベースからのデータセットをクラスインスタンスやデータ構造として組み立てさせるます。:

* そのデータが変更されたら、オブジェクトをキャッシュから削除すること
* 非同期処理を許容します: ワーカーがキャッシュされたオブジェクトの中で最新のものを集めてきます

何をキャッシュするか:

* ユーザーのセッション
* 完全にレンダーされたウェブページ
* アクテビティストリーム
* ユーザーグラフデータ

### いつキャッシュを更新するか

キャッシュに保存できる容量は限られているため、自分のケースではどのキャッシュ手法が一番いいかは検討する必要があります。

#### キャッシュアサイド

<p align="center">
  <img src="http://i.imgur.com/ONjORqk.png">
  <br/>
  <i><a href=http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast>Source: From cache to in-memory data grid</a></i>
</p>

アプリケーションはストレージへの読み書きの処理をします。キャッシュはストレージとは直接やりとりをしません。アプリケーションは以下のことをします:

* キャッシュの中のエントリを参照しますが、結果としてキャッシュミスになります
* データベースからエントリを取得します
* エントリをキャッシュに追加します
* エントリを返します

```
def get_user(self, user_id):
    user = cache.get("user.{0}", user_id)
    if user is None:
        user = db.query("SELECT * FROM users WHERE user_id = {0}", user_id)
        if user is not None:
            key = "user.{0}".format(user_id)
            cache.set(key, json.dumps(user))
    return user
```

[Memcached](https://memcached.org/) は通常このように使われる。

その後のキャッシュデータ読み込みは速いです。キャッシュアサイドはレージーローディングであるとも言われます。リクエストされたデータのみがキャッシュされ、リクエストされていないデータでキャッシュが溢れるのを防止します。

##### 欠点: キャッシュアサイド

* 各キャッシュミスは三つのトリップを呼び出すことになり、感じれるほどの遅延が起きてしまいます。
* データベースのデータが更新されるとキャッシュデータは古いものになってしまいます。time-to-live (TTL)を設定することでキャッシュエントリの更新を強制的に行う、もしくはライトスルーを採用することでこの問題は緩和できます。
* ノードが落ちると、新規の空のノードで代替されることでレーテンシーが増加することになります。

#### ライトスルー

<p align="center">
  <img src="http://i.imgur.com/0vBc0hN.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

アプリケーションはキャッシュをメインのデータストアとして使い、そこにデータの読み書きを行います。一方、キャッシュはデータベースへの読み書きを担当します。

* アプリケーションはキャッシュにあるエントリを追加・更新します
* キャッシュは同期的にデータストアに書き込みを行います
* エントリを返します

アプリケーションコード:

```
set_user(12345, {"foo":"bar"})
```

キャッシュコード:

```
def set_user(user_id, values):
    user = db.query("UPDATE Users WHERE id = {0}", user_id, values)
    cache.set(user_id, user)
```

ライトスルーは書き込み処理のせいで全体としては遅いオペレーションですが、書き込まれたばかりのデータに関する読み込みは速いです。ユーザー側は一般的にデータ更新時の方が読み込み時よりもレーテンシーに許容的です。キャッシュ内のデータは最新版で保たれます。

##### 欠点: ライトスルー

* ノードが落ちたこと、もしくはスケーリングによって新しいノードが作成された時に、新しいノードはデータベース内のエントリーが更新されるまではエントリーをキャッシュしません。キャッシュアサイドとライトスルーを併用することでこの問題を緩和できます。
* 書き込まれたデータの大部分は一度も読み込まれることはありません。このデータはTTLによって圧縮することができます。

#### ライトビハインド (ライトバック)

<p align="center">
  <img src="http://i.imgur.com/rgSrvjG.png">
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>
</p>

ライトビハインドではアプリケーションは以下のことをします:

* キャッシュのエントリーを追加・更新します
* データストアへの書き込みを非同期的に行うことで、書き込みパフォーマンスを向上させます。

##### 欠点: ライトビハインド

* キャッシュがデータストア内のコンテンツにヒットする前にキャッシュが落ちるとデータ欠損が起きる可能性があります。
* キャッシュアサイドやライトスルーよりも実装が複雑になります。

#### リフレッシュアヘッド

<p align="center">
  <img src="http://i.imgur.com/kxtjqgE.png">
  <br/>
  <i><a href=http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast>Source: From cache to in-memory data grid</a></i>
</p>

期限切れよりも前に、直近でアクセスされた全てのキャッシュエントリを自動的に更新するように設定することができます。

もしどのアイテムが将来必要になるのかを正確に予測することができるのならば、リードスルーよりもレイテンシーを削減することができます。

##### 欠点: リフレッシュアヘッド

* どのアイテムが必要になるかの予測が正確でない場合にはリフレッシュアヘッドがない方がレーテンシーは良いという結果になってしまいます。

### 欠点: キャッシュ

* [cache invalidation](https://en.wikipedia.org/wiki/Cache_algorithms)などを用いて、データベースなどの真のデータとキャッシュの間の一貫性を保つ必要があります。
* Redisやmemcachedを追加することでアプリケーション構成を変更する必要があります。
* Cache invalidationも難しいですがそれに加えて、いつキャッシュを更新するかという複雑な問題にも悩まされることになります。

### その他の参考資料、ページ

* [From cache to in-memory data grid](http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast)
* [スケーラブルなシステムデザインパターン](http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html)
* [スケールできるシステムを設計するためのイントロダクション](http://lethain.com/introduction-to-architecting-systems-for-scale/)
* [スケーラビリティ、可用性、安定性、パターン](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)
* [スケーラビリティ](http://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
* [AWS ElastiCacheのストラテジー](http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/Strategies.html)
* [Wikipedia](https://en.wikipedia.org/wiki/Cache_(computing))

## 非同期処理

<p align="center">
  <img src="http://i.imgur.com/54GYsSx.png">
  <br/>
  <i><a href=http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer>Source: Intro to architecting systems for scale</a></i>
</p>

非同期のワークフローはもし、連続的に行われるとリクエスト時間を圧迫してしまうような重い処理を別で処理する手法です。また、定期的にデータを集合させるなどの時間がかかるような処理を前もって処理しておくことにも役立ちます。

### メッセージキュー

メッセージキューはメッセージを受け取り、保存し、配信します。もし、処理がインラインで行うには遅すぎる場合、以下のようなワークフローでメッセージキューを用いるといいでしょう:

* アプリケーションはジョブをキューに配信し、ユーザーにジョブステータスを伝えます。
* ワーカーがジョブキューから受け取って、処理を行い、終了したらそのシグナルを返します。

ユーザーの処理が止まることはなく、ジョブはバックグラウンドで処理されます。この間に、クライアントはオプションとして、タスクが完了したかのように見せるために小規模の処理を行います。例えば、ツイートを投稿するときに、ツイートはすぐにあなたのタイムラインに反映されたように見えますが、そのツイートが実際に全てのフォロワーに配信されるまでにはもう少し時間がかかっているでしょう。

**Redis** はシンプルなメッセージ仲介としてはいいですが、メッセージが失われてしまう可能性があります。

**RabbitMQ** はよく使われていますが、'AMQP'プロトコルに対応して、自前のノードを立てる必要があります。

**Amazon SQS** という選択肢もありますが、レイテンシーが高く、メッセージが重複して配信されてしまう可能性があります。

### タスクキュー

タスクキューはタスクとその関連するデータを受け取り、処理した上でその結果を返します。スケジュール管理をできるほか、バックグラウンドでとても重いジョブをこなすこともできます。

**Celery** はスケジューリングとpythonのサポートがあります。

### バックプレッシャー

もし、キューが拡大しすぎると、メモリーよりもキューの方が大きくなりキャッシュミスが起こり、ディスク読み出しにつながり、パフォーマンスが低下することにつながります。[バックプレッシャー](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)はキューサイズを制限することで回避することができ、高いスループットを確保しキューにすでにあるジョブについてのレスポンス時間を短縮できます。キューがいっぱいになると、クライアントはサーバービジーもしくはHTTP 503をレスポンスとして受け取りまた後で時間をおいてアクセスするようにメッセージを受け取ります。クライアントは[exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff)などによって後ほど再度時間を置いてリクエストすることができます。

### 欠点: 非同期処理

* キューを用いることで遅延が起こり、複雑さも増すため、あまり重くない計算処理やリアルタイムワークフローにおいては同期処理の方がいいでしょう。

### その他の参考資料、ページ

* [It's all a numbers game](https://www.youtube.com/watch?v=1KRYH75wgy4)
* [オーバーロードした時にバックプレッシャーを適用する](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)
* [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)
* [メッセージキューとタスクキューの違いとは？](https://www.quora.com/What-is-the-difference-between-a-message-queue-and-a-task-queue-Why-would-a-task-queue-require-a-message-broker-like-RabbitMQ-Redis-Celery-or-IronMQ-to-function)

## 通信

<p align="center">
  <img src="http://i.imgur.com/5KeocQs.jpg">
  <br/>
  <i><a href=http://www.escotal.com/osilayer.html>Source: OSI 7 layer model</a></i>
</p>

### Hypertext transfer protocol (HTTP)

HTTP はクライアントとサーバー間でのデータをエンコードして転送するための手法です。リクエスト・レスポンスに関わるプロトコルです。クライアントがリクエストをサーバーに投げ、サーバーがリクエストに関係するコンテンツと完了ステータス情報をレスポンスとして返します。HTTPは自己完結するので、間にロードバランサー、キャッシュ、エンクリプション、圧縮などのどんな中間ルーターが入っても動くようにできています。

基本的なHTTPリクエストはHTTP動詞(メソッド)とリソース(エンドポイント)で成り立っています。以下がよくあるHTTP動詞です。:

| 動詞 | 詳細 | 冪等性* | セーフ | キャッシュできるか |
|---|---|---|---|---|
| GET | リソースを読み取る | Yes | Yes | Yes |
| POST | リソースを作成するもしくはデータを処理するトリガー | No | No | Yes レスポンスが新しい情報を含む場合 |
| PUT | リソースを作成もしくは入れ替える | Yes | No | No |
| PATCH | リソースを部分的に更新する | No | No | Yes レスポンスが新しい情報を含む場合 |
| DELETE | リソースを削除する | Yes | No | No |

*何度呼んでも同じ結果が返ってくること*

HTTPは**TCP** や **UDP** などの低級プロトコルに依存しているアプリケーションレイヤーのプロトコルである。

#### その他の参考資料、ページ: HTTP

* [HTTPってなに?](https://www.nginx.com/resources/glossary/http/)
* [HTTP と TCPの違い](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol)
* [PUT と PATCHの違い](https://laracasts.com/discuss/channels/general-discussion/whats-the-differences-between-put-and-patch?page=1)

### Transmission control protocol (TCP)

<p align="center">
  <img src="http://i.imgur.com/JdAsdvG.jpg">
  <br/>
  <i><a href=http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/>Source: How to make a multiplayer game</a></i>
</p>

TCP is a connection-oriented protocol over an [IP network](https://en.wikipedia.org/wiki/Internet_Protocol).  Connection is established and terminated using a [handshake](https://en.wikipedia.org/wiki/Handshaking).  All packets sent are guaranteed to reach the destination in the original order and without corruption through:

* Sequence numbers and [checksum fields](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Checksum_computation) for each packet
* [Acknowledgement](https://en.wikipedia.org/wiki/Acknowledgement_(data_networks)) packets and automatic retransmission

If the sender does not receive a correct response, it will resend the packets.  If there are multiple timeouts, the connection is dropped.  TCP also implements [flow control](https://en.wikipedia.org/wiki/Flow_control_(data)) and [congestion control](https://en.wikipedia.org/wiki/Network_congestion#Congestion_control).  These guarantees cause delays and generally result in less efficient transmission than UDP.

To ensure high throughput, web servers can keep a large number of TCP connections open, resulting in high memory usage.  It can be expensive to have a large number of open connections between web server threads and say, a [memcached](#memcached) server.  [Connection pooling](https://en.wikipedia.org/wiki/Connection_pool) can help in addition to switching to UDP where applicable.

TCP is useful for applications that require high reliability but are less time critical.  Some examples include web servers, database info, SMTP, FTP, and SSH.

Use TCP over UDP when:

* You need all of the data to arrive intact
* You want to automatically make a best estimate use of the network throughput

### User datagram protocol (UDP)

<p align="center">
  <img src="http://i.imgur.com/yzDrJtA.jpg">
  <br/>
  <i><a href=http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/>Source: How to make a multiplayer game</a></i>
</p>

UDP is connectionless.  Datagrams (analogous to packets) are guaranteed only at the datagram level.  Datagrams might reach their destination out of order or not at all.  UDP does not support congestion control.  Without the guarantees that TCP support, UDP is generally more efficient.

UDP can broadcast, sending datagrams to all devices on the subnet.  This is useful with [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) because the client has not yet received an IP address, thus preventing a way for TCP to stream without the IP address.

UDP is less reliable but works well in real time use cases such as VoIP, video chat, streaming, and realtime multiplayer games.

Use UDP over TCP when:

* You need the lowest latency
* Late data is worse than loss of data
* You want to implement your own error correction

#### Source(s) and further reading: TCP and UDP

* [Networking for game programming](http://gafferongames.com/networking-for-game-programmers/udp-vs-tcp/)
* [Key differences between TCP and UDP protocols](http://www.cyberciti.biz/faq/key-differences-between-tcp-and-udp-protocols/)
* [Difference between TCP and UDP](http://stackoverflow.com/questions/5970383/difference-between-tcp-and-udp)
* [Transmission control protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
* [User datagram protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
* [Scaling memcache at Facebook](http://www.cs.bu.edu/~jappavoo/jappavoo.github.com/451/papers/memcache-fb.pdf)

### Remote procedure call (RPC)

<p align="center">
  <img src="http://i.imgur.com/iF4Mkb5.png">
  <br/>
  <i><a href=http://www.puncsky.com/blog/2016/02/14/crack-the-system-design-interview/>Source: Crack the system design interview</a></i>
</p>

In an RPC, a client causes a procedure to execute on a different address space, usually a remote server.  The procedure is coded as if it were a local procedure call, abstracting away the details of how to communicate with the server from the client program.  Remote calls are usually slower and less reliable than local calls so it is helpful to distinguish RPC calls from local calls.  Popular RPC frameworks include [Protobuf](https://developers.google.com/protocol-buffers/), [Thrift](https://thrift.apache.org/), and [Avro](https://avro.apache.org/docs/current/).

RPC is a request-response protocol:

* **Client program** - Calls the client stub procedure.  The parameters are pushed onto the stack like a local procedure call.
* **Client stub procedure** - Marshals (packs) procedure id and arguments into a request message.
* **Client communication module** - OS sends the message from the client to the server.
* **Server communication module** - OS passes the incoming packets to the server stub procedure.
* **Server stub procedure** -  Unmarshalls the results, calls the server procedure matching the procedure id and passes the given arguments.
* The server response repeats the steps above in reverse order.

Sample RPC calls:

```
GET /someoperation?data=anId

POST /anotheroperation
{
  "data":"anId";
  "anotherdata": "another value"
}
```

RPC is focused on exposing behaviors.  RPCs are often used for performance reasons with internal communications, as you can hand-craft native calls to better fit your use cases.

Choose a native library (aka SDK) when:

* You know your target platform.
* You want to control how your "logic" is accessed.
* You want to control how error control happens off your library.
* Performance and end user experience is your primary concern.

HTTP APIs following **REST** tend to be used more often for public APIs.

#### Disadvantage(s): RPC

* RPC clients become tightly coupled to the service implementation.
* A new API must be defined for every new operation or use case.
* It can be difficult to debug RPC.
* You might not be able to leverage existing technologies out of the box.  For example, it might require additional effort to ensure [RPC calls are properly cached](http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/) on caching servers such as [Squid](http://www.squid-cache.org/).

### Representational state transfer (REST)

REST is an architectural style enforcing a client/server model where the client acts on a set of resources managed by the server.  The server provides a representation of resources and actions that can either manipulate or get a new representation of resources.  All communication must be stateless and cacheable.

There are four qualities of a RESTful interface:

* **Identify resources (URI in HTTP)** - use the same URI regardless of any operation.
* **Change with representations (Verbs in HTTP)** - use verbs, headers, and body.
* **Self-descriptive error message (status response in HTTP)** - Use status codes, don't reinvent the wheel.
* **[HATEOAS](http://restcookbook.com/Basics/hateoas/) (HTML interface for HTTP)** - your web service should be fully accessible in a browser.

Sample REST calls:

```
GET /someresources/anId

PUT /someresources/anId
{"anotherdata": "another value"}
```

REST is focused on exposing data.  It minimizes the coupling between client/server and is often used for public HTTP APIs.  REST uses a more generic and uniform method of exposing resources through URIs, [representation through headers](https://github.com/for-GET/know-your-http-well/blob/master/headers.md), and actions through verbs such as GET, POST, PUT, DELETE, and PATCH.  Being stateless, REST is great for horizontal scaling and partitioning.

#### Disadvantage(s): REST

* With REST being focused on exposing data, it might not be a good fit if resources are not naturally organized or accessed in a simple hierarchy.  For example, returning all updated records from the past hour matching a particular set of events is not easily expressed as a path.  With REST, it is likely to be implemented with a combination of URI path, query parameters, and possibly the request body.
* REST typically relies on a few verbs (GET, POST, PUT, DELETE, and PATCH) which sometimes doesn't fit your use case.  For example, moving expired documents to the archive folder might not cleanly fit within these verbs.
* Fetching complicated resources with nested hierarchies requires multiple round trips between the client and server to render single views, e.g. fetching content of a blog entry and the comments on that entry. For mobile applications operating in variable network conditions, these multiple roundtrips are highly undesirable.
* Over time, more fields might be added to an API response and older clients will receive all new data fields, even those that they do not need, as a result, it bloats the payload size and leads to larger latencies.

### RPC and REST calls comparison

| Operation | RPC | REST |
|---|---|---|
| Signup	| **POST** /signup | **POST** /persons |
| Resign	| **POST** /resign<br/>{<br/>"personid": "1234"<br/>} | **DELETE** /persons/1234 |
| Read a person | **GET** /readPerson?personid=1234 | **GET** /persons/1234 |
| Read a person’s items list | **GET** /readUsersItemsList?personid=1234 | **GET** /persons/1234/items |
| Add an item to a person’s items | **POST** /addItemToUsersItemsList<br/>{<br/>"personid": "1234";<br/>"itemid": "456"<br/>} | **POST** /persons/1234/items<br/>{<br/>"itemid": "456"<br/>} |
| Update an item	| **POST** /modifyItem<br/>{<br/>"itemid": "456";<br/>"key": "value"<br/>} | **PUT** /items/456<br/>{<br/>"key": "value"<br/>} |
| Delete an item | **POST** /removeItem<br/>{<br/>"itemid": "456"<br/>} | **DELETE** /items/456 |

<p align="center">
  <i><a href=https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/>Source: Do you really know why you prefer REST over RPC</a></i>
</p>

#### Source(s) and further reading: REST and RPC

* [Do you really know why you prefer REST over RPC](https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/)
* [When are RPC-ish approaches more appropriate than REST?](http://programmers.stackexchange.com/a/181186)
* [REST vs JSON-RPC](http://stackoverflow.com/questions/15056878/rest-vs-json-rpc)
* [Debunking the myths of RPC and REST](http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/)
* [What are the drawbacks of using REST](https://www.quora.com/What-are-the-drawbacks-of-using-RESTful-APIs)
* [Crack the system design interview](http://www.puncsky.com/blog/2016/02/14/crack-the-system-design-interview/)
* [Thrift](https://code.facebook.com/posts/1468950976659943/)
* [Why REST for internal use and not RPC](http://arstechnica.com/civis/viewtopic.php?t=1190508)

## Security

This section could use some updates.  Consider [contributing](#contributing)!

Security is a broad topic.  Unless you have considerable experience, a security background, or are applying for a position that requires knowledge of security, you probably won't need to know more than the basics:

* Encrypt in transit and at rest.
* Sanitize all user inputs or any input parameters exposed to user to prevent [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) and [SQL injection](https://en.wikipedia.org/wiki/SQL_injection).
* Use parameterized queries to prevent SQL injection.
* Use the principle of [least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).

### Source(s) and further reading

* [Security guide for developers](https://github.com/FallibleInc/security-guide-for-developers)
* [OWASP top ten](https://www.owasp.org/index.php/OWASP_Top_Ten_Cheat_Sheet)

## Appendix

You'll sometimes be asked to do 'back-of-the-envelope' estimates.  For example, you might need to determine how long it will take to generate 100 image thumbnails from disk or how much memory a data structure will take.  The **Powers of two table** and **Latency numbers every programmer should know** are handy references.

### Powers of two table

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

#### Source(s) and further reading

* [Powers of two](https://en.wikipedia.org/wiki/Power_of_two)

### Latency numbers every programmer should know

```
Latency Comparison Numbers
--------------------------
L1 cache reference                           0.5 ns
Branch mispredict                            5   ns
L2 cache reference                           7   ns                      14x L1 cache
Mutex lock/unlock                          100   ns
Main memory reference                      100   ns                      20x L2 cache, 200x L1 cache
Compress 1K bytes with Zippy            10,000   ns       10 us
Send 1 KB bytes over 1 Gbps network     10,000   ns       10 us
Read 4 KB randomly from SSD*           150,000   ns      150 us          ~1GB/sec SSD
Read 1 MB sequentially from memory     250,000   ns      250 us
Round trip within same datacenter      500,000   ns      500 us
Read 1 MB sequentially from SSD*     1,000,000   ns    1,000 us    1 ms  ~1GB/sec SSD, 4X memory
Disk seek                           10,000,000   ns   10,000 us   10 ms  20x datacenter roundtrip
Read 1 MB sequentially from 1 Gbps  10,000,000   ns   10,000 us   10 ms  40x memory, 10X SSD
Read 1 MB sequentially from disk    30,000,000   ns   30,000 us   30 ms 120x memory, 30X SSD
Send packet CA->Netherlands->CA    150,000,000   ns  150,000 us  150 ms

Notes
-----
1 ns = 10^-9 seconds
1 us = 10^-6 seconds = 1,000 ns
1 ms = 10^-3 seconds = 1,000 us = 1,000,000 ns
```

Handy metrics based on numbers above:

* Read sequentially from disk at 30 MB/s
* Read sequentially from 1 Gbps Ethernet at 100 MB/s
* Read sequentially from SSD at 1 GB/s
* Read sequentially from main memory at 4 GB/s
* 6-7 world-wide round trips per second
* 2,000 round trips per second within a data center

#### Latency numbers visualized

![](https://camo.githubusercontent.com/77f72259e1eb58596b564d1ad823af1853bc60a3/687474703a2f2f692e696d6775722e636f6d2f6b307431652e706e67)

#### Source(s) and further reading

* [Latency numbers every programmer should know - 1](https://gist.github.com/jboner/2841832)
* [Latency numbers every programmer should know - 2](https://gist.github.com/hellerbarde/2843375)
* [Designs, lessons, and advice from building large distributed systems](http://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf)
* [Software Engineering Advice from Building Large-Scale Distributed Systems](https://static.googleusercontent.com/media/research.google.com/en//people/jeff/stanford-295-talk.pdf)

### Additional system design interview questions

> Common system design interview questions, with links to resources on how to solve each.

| Question | Reference(s) |
|---|---|
| Design a file sync service like Dropbox | [youtube.com](https://www.youtube.com/watch?v=PE4gwstWhmc) |
| Design a search engine like Google | [queue.acm.org](http://queue.acm.org/detail.cfm?id=988407)<br/>[stackexchange.com](http://programmers.stackexchange.com/questions/38324/interview-question-how-would-you-implement-google-search)<br/>[ardendertat.com](http://www.ardendertat.com/2012/01/11/implementing-search-engines/)<br>[stanford.edu](http://infolab.stanford.edu/~backrub/google.html) |
| Design a scalable web crawler like Google | [quora.com](https://www.quora.com/How-can-I-build-a-web-crawler-from-scratch) |
| Design Google docs | [code.google.com](https://code.google.com/p/google-mobwrite/)<br/>[neil.fraser.name](https://neil.fraser.name/writing/sync/) |
| Design a key-value store like Redis | [slideshare.net](http://www.slideshare.net/dvirsky/introduction-to-redis) |
| Design a cache system like Memcached | [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached) |
| Design a recommendation system like Amazon's | [hulu.com](http://tech.hulu.com/blog/2011/09/19/recommendation-system.html)<br/>[ijcai13.org](http://ijcai13.org/files/tutorial_slides/td3.pdf) |
| Design a tinyurl system like Bitly | [n00tc0d3r.blogspot.com](http://n00tc0d3r.blogspot.com/) |
| Design a chat app like WhatsApp | [highscalability.com](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html)
| Design a picture sharing system like Instagram | [highscalability.com](http://highscalability.com/flickr-architecture)<br/>[highscalability.com](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html) |
| Design the Facebook news feed function | [quora.com](http://www.quora.com/What-are-best-practices-for-building-something-like-a-News-Feed)<br/>[quora.com](http://www.quora.com/Activity-Streams/What-are-the-scaling-issues-to-keep-in-mind-while-developing-a-social-network-feed)<br/>[slideshare.net](http://www.slideshare.net/danmckinley/etsy-activity-feeds-architecture) |
| Design the Facebook timeline function | [facebook.com](https://www.facebook.com/note.php?note_id=10150468255628920)<br/>[highscalability.com](http://highscalability.com/blog/2012/1/23/facebook-timeline-brought-to-you-by-the-power-of-denormaliza.html) |
| Design the Facebook chat function | [erlang-factory.com](http://www.erlang-factory.com/upload/presentations/31/EugeneLetuchy-ErlangatFacebook.pdf)<br/>[facebook.com](https://www.facebook.com/note.php?note_id=14218138919&id=9445547199&index=0) |
| Design a graph search function like Facebook's | [facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-building-out-the-infrastructure-for-graph-search/10151347573598920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-indexing-and-ranking-in-graph-search/10151361720763920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-the-natural-language-interface-of-graph-search/10151432733048920) |
| Design a content delivery network like CloudFlare | [cmu.edu](http://repository.cmu.edu/cgi/viewcontent.cgi?article=2112&context=compsci) |
| Design a trending topic system like Twitter's | [michael-noll.com](http://www.michael-noll.com/blog/2013/01/18/implementing-real-time-trending-topics-in-storm/)<br/>[snikolov .wordpress.com](http://snikolov.wordpress.com/2012/11/14/early-detection-of-twitter-trends/) |
| Design a random ID generation system | [blog.twitter.com](https://blog.twitter.com/2010/announcing-snowflake)<br/>[github.com](https://github.com/twitter/snowflake/) |
| Return the top k requests during a time interval | [ucsb.edu](https://icmi.cs.ucsb.edu/research/tech_reports/reports/2005-23.pdf)<br/>[wpi.edu](http://davis.wpi.edu/xmdv/docs/EDBT11-diyang.pdf) |
| Design a system that serves data from multiple data centers | [highscalability.com](http://highscalability.com/blog/2009/8/24/how-google-serves-data-from-multiple-datacenters.html) |
| Design an online multiplayer card game | [indieflashblog.com](http://www.indieflashblog.com/how-to-create-an-asynchronous-multiplayer-game.html)<br/>[buildnewgames.com](http://buildnewgames.com/real-time-multiplayer/) |
| Design a garbage collection system | [stuffwithstuff.com](http://journal.stuffwithstuff.com/2013/12/08/babys-first-garbage-collector/)<br/>[washington.edu](http://courses.cs.washington.edu/courses/csep521/07wi/prj/rick.pdf) |
| Add a system design question | [Contribute](#contributing) |

### Real world architectures

> Articles on how real world systems are designed.

<p align="center">
  <img src="http://i.imgur.com/TcUo2fw.png">
  <br/>
  <i><a href=https://www.infoq.com/presentations/Twitter-Timeline-Scalability>Source: Twitter timelines at scale</a></i>
</p>

**Don't focus on nitty gritty details for the following articles, instead:**

* Identify shared principles, common technologies, and patterns within these articles
* Study what problems are solved by each component, where it works, where it doesn't
* Review the lessons learned

|Type | System | Reference(s) |
|---|---|---|
| Data processing | **MapReduce** - Distributed data processing from Google | [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/mapreduce-osdi04.pdf) |
| Data processing | **Spark** - Distributed data processing from Databricks | [slideshare.net](http://www.slideshare.net/AGrishchenko/apache-spark-architecture) |
| Data processing | **Storm** - Distributed data processing from Twitter | [slideshare.net](http://www.slideshare.net/previa/storm-16094009) |
| | | |
| Data store | **Bigtable** - Distributed column-oriented database from Google | [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf) |
| Data store | **HBase** - Open source implementation of Bigtable | [slideshare.net](http://www.slideshare.net/alexbaranau/intro-to-hbase) |
| Data store | **Cassandra** - Distributed column-oriented database from Facebook | [slideshare.net](http://www.slideshare.net/planetcassandra/cassandra-introduction-features-30103666)
| Data store | **DynamoDB** - Document-oriented database from Amazon | [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf) |
| Data store | **MongoDB** - Document-oriented database | [slideshare.net](http://www.slideshare.net/mdirolf/introduction-to-mongodb) |
| Data store | **Spanner** - Globally-distributed database from Google | [research.google.com](http://research.google.com/archive/spanner-osdi2012.pdf) |
| Data store | **Memcached** - Distributed memory caching system | [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached) |
| Data store | **Redis** - Distributed memory caching system with persistence and value types | [slideshare.net](http://www.slideshare.net/dvirsky/introduction-to-redis) |
| | | |
| File system | **Google File System (GFS)** - Distributed file system | [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/gfs-sosp2003.pdf) |
| File system | **Hadoop File System (HDFS)** - Open source implementation of GFS | [apache.org](https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html) |
| | | |
| Misc | **Chubby** - Lock service for loosely-coupled distributed systems from Google | [research.google.com](http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/archive/chubby-osdi06.pdf) |
| Misc | **Dapper** - Distributed systems tracing infrastructure | [research.google.com](http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36356.pdf)
| Misc | **Kafka** - Pub/sub message queue from LinkedIn | [slideshare.net](http://www.slideshare.net/mumrah/kafka-talk-tri-hug) |
| Misc | **Zookeeper** - Centralized infrastructure and services enabling synchronization | [slideshare.net](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) |
| | Add an architecture | [Contribute](#contributing) |

### Company architectures

| Company | Reference(s) |
|---|---|
| Amazon | [Amazon architecture](http://highscalability.com/amazon-architecture) |
| Cinchcast | [Producing 1,500 hours of audio every day](http://highscalability.com/blog/2012/7/16/cinchcast-architecture-producing-1500-hours-of-audio-every-d.html) |
| DataSift | [Realtime datamining At 120,000 tweets per second](http://highscalability.com/blog/2011/11/29/datasift-architecture-realtime-datamining-at-120000-tweets-p.html) |
| DropBox | [How we've scaled Dropbox](https://www.youtube.com/watch?v=PE4gwstWhmc) |
| ESPN | [Operating At 100,000 duh nuh nuhs per second](http://highscalability.com/blog/2013/11/4/espns-architecture-at-scale-operating-at-100000-duh-nuh-nuhs.html) |
| Google | [Google architecture](http://highscalability.com/google-architecture) |
| Instagram | [14 million users, terabytes of photos](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html)<br/>[What powers Instagram](http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances) |
| Justin.tv | [Justin.Tv's live video broadcasting architecture](http://highscalability.com/blog/2010/3/16/justintvs-live-video-broadcasting-architecture.html) |
| Facebook | [Scaling memcached at Facebook](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/key-value/fb-memcached-nsdi-2013.pdf)<br/>[TAO: Facebook’s distributed data store for the social graph](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/data-store/tao-facebook-distributed-datastore-atc-2013.pdf)<br/>[Facebook’s photo storage](https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Beaver.pdf) |
| Flickr | [Flickr architecture](http://highscalability.com/flickr-architecture) |
| Mailbox | [From 0 to one million users in 6 weeks](http://highscalability.com/blog/2013/6/18/scaling-mailbox-from-0-to-one-million-users-in-6-weeks-and-1.html) |
| Pinterest | [From 0 To 10s of billions of page views a month](http://highscalability.com/blog/2013/4/15/scaling-pinterest-from-0-to-10s-of-billions-of-page-views-a.html)<br/>[18 million visitors, 10x growth, 12 employees](http://highscalability.com/blog/2012/5/21/pinterest-architecture-update-18-million-visitors-10x-growth.html) |
| Playfish | [50 million monthly users and growing](http://highscalability.com/blog/2010/9/21/playfishs-social-gaming-architecture-50-million-monthly-user.html) |
| PlentyOfFish | [PlentyOfFish architecture](http://highscalability.com/plentyoffish-architecture) |
| Salesforce | [How they handle 1.3 billion transactions a day](http://highscalability.com/blog/2013/9/23/salesforce-architecture-how-they-handle-13-billion-transacti.html) |
| Stack Overflow | [Stack Overflow architecture](http://highscalability.com/blog/2009/8/5/stack-overflow-architecture.html) |
| TripAdvisor | [40M visitors, 200M dynamic page views, 30TB data](http://highscalability.com/blog/2011/6/27/tripadvisor-architecture-40m-visitors-200m-dynamic-page-view.html) |
| Tumblr | [15 billion page views a month](http://highscalability.com/blog/2012/2/13/tumblr-architecture-15-billion-page-views-a-month-and-harder.html) |
| Twitter | [Making Twitter 10000 percent faster](http://highscalability.com/scaling-twitter-making-twitter-10000-percent-faster)<br/>[Storing 250 million tweets a day using MySQL](http://highscalability.com/blog/2011/12/19/how-twitter-stores-250-million-tweets-a-day-using-mysql.html)<br/>[150M active users, 300K QPS, a 22 MB/S firehose](http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html)<br/>[Timelines at scale](https://www.infoq.com/presentations/Twitter-Timeline-Scalability)<br/>[Big and small data at Twitter](https://www.youtube.com/watch?v=5cKTP36HVgI)<br/>[Operations at Twitter: scaling beyond 100 million users](https://www.youtube.com/watch?v=z8LU0Cj6BOU) |
| Uber | [How Uber scales their real-time market platform](http://highscalability.com/blog/2015/9/14/how-uber-scales-their-real-time-market-platform.html) |
| WhatsApp | [The WhatsApp architecture Facebook bought for $19 billion](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html) |
| YouTube | [YouTube scalability](https://www.youtube.com/watch?v=w5WVu624fY8)<br/>[YouTube architecture](http://highscalability.com/youtube-architecture) |

### Company engineering blogs

> Architectures for companies you are interviewing with.
>
> Questions you encounter might be from the same domain.

* [Airbnb Engineering](http://nerds.airbnb.com/)
* [Atlassian Developers](https://developer.atlassian.com/blog/)
* [Autodesk Engineering](http://cloudengineering.autodesk.com/blog/)
* [AWS Blog](https://aws.amazon.com/blogs/aws/)
* [Bitly Engineering Blog](http://word.bitly.com/)
* [Box Blogs](https://www.box.com/blog/engineering/)
* [Cloudera Developer Blog](http://blog.cloudera.com/blog/)
* [Dropbox Tech Blog](https://tech.dropbox.com/)
* [Engineering at Quora](http://engineering.quora.com/)
* [Ebay Tech Blog](http://www.ebaytechblog.com/)
* [Evernote Tech Blog](https://blog.evernote.com/tech/)
* [Etsy Code as Craft](http://codeascraft.com/)
* [Facebook Engineering](https://www.facebook.com/Engineering)
* [Flickr Code](http://code.flickr.net/)
* [Foursquare Engineering Blog](http://engineering.foursquare.com/)
* [GitHub Engineering Blog](http://githubengineering.com/)
* [Google Research Blog](http://googleresearch.blogspot.com/)
* [Groupon Engineering Blog](https://engineering.groupon.com/)
* [Heroku Engineering Blog](https://engineering.heroku.com/)
* [Hubspot Engineering Blog](http://product.hubspot.com/blog/topic/engineering)
* [High Scalability](http://highscalability.com/)
* [Instagram Engineering](http://instagram-engineering.tumblr.com/)
* [Intel Software Blog](https://software.intel.com/en-us/blogs/)
* [Jane Street Tech Blog](https://blogs.janestreet.com/category/ocaml/)
* [LinkedIn Engineering](http://engineering.linkedin.com/blog)
* [Microsoft Engineering](https://engineering.microsoft.com/)
* [Microsoft Python Engineering](https://blogs.msdn.microsoft.com/pythonengineering/)
* [Netflix Tech Blog](http://techblog.netflix.com/)
* [Paypal Developer Blog](https://devblog.paypal.com/category/engineering/)
* [Pinterest Engineering Blog](http://engineering.pinterest.com/)
* [Quora Engineering](https://engineering.quora.com/)
* [Reddit Blog](http://www.redditblog.com/)
* [Salesforce Engineering Blog](https://developer.salesforce.com/blogs/engineering/)
* [Slack Engineering Blog](https://slack.engineering/)
* [Spotify Labs](https://labs.spotify.com/)
* [Twilio Engineering Blog](http://www.twilio.com/engineering)
* [Twitter Engineering](https://engineering.twitter.com/)
* [Uber Engineering Blog](http://eng.uber.com/)
* [Yahoo Engineering Blog](http://yahooeng.tumblr.com/)
* [Yelp Engineering Blog](http://engineeringblog.yelp.com/)
* [Zynga Engineering Blog](https://www.zynga.com/blogs/engineering)

#### Source(s) and further reading

* [kilimchoi/engineering-blogs](https://github.com/kilimchoi/engineering-blogs)

The list of blogs here will be kept relatively small and [kilimchoi/engineering-blogs](https://github.com/kilimchoi/engineering-blogs) will contain the larger list to avoid duplicating work. Do consider adding your company blog to the engineering-blogs repo instead.

## Under development

Interested in adding a section or helping complete one in-progress?  [Contribute](#contributing)!

* Distributed computing with MapReduce
* Consistent hashing
* Scatter gather
* [Contribute](#contributing)

## Credits

Credits and sources are provided throughout this repo.

Special thanks to:

* [Hired in tech](http://www.hiredintech.com/system-design/the-system-design-process/)
* [Cracking the coding interview](https://www.amazon.com/dp/0984782850/)
* [High scalability](http://highscalability.com/)
* [checkcheckzz/system-design-interview](https://github.com/checkcheckzz/system-design-interview)
* [shashank88/system_design](https://github.com/shashank88/system_design)
* [mmcgrana/services-engineering](https://github.com/mmcgrana/services-engineering)
* [System design cheat sheet](https://gist.github.com/vasanthk/485d1c25737e8e72759f)
* [A distributed systems reading list](http://dancres.github.io/Pages/)
* [Cracking the system design interview](http://www.puncsky.com/blog/2016/02/14/crack-the-system-design-interview/)

## Contact info

Feel free to contact me to discuss any issues, questions, or comments.

My contact info can be found on my [GitHub page](https://github.com/donnemartin).

## License

*I am providing code and resources in this repository to you under an open source license.  Because this is my personal repository, the license you receive to my code and resources is from me and not my employer (Facebook).*

    Copyright 2017 Donne Martin

    Creative Commons Attribution 4.0 International License (CC BY 4.0)

    http://creativecommons.org/licenses/by/4.0/
