# Design the Twitter timeline and search

*Note: このドキュメントは、重複を避けるために、[システム設計入門](https://github.com/donnemartin/system-design-primer/blob/master/README-ja.md#%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E8%A8%AD%E8%A8%88%E5%85%A5%E9%96%80)にある関連領域に直接リンクしています。一般的な話のポイントやトレードオフ, 代替案についてはリンク先を参照して下さい。*

**Facebook のフィードの設計** や **Facebook の検索の設計** と類似の質問です。

## Step 1: ユースケースと制約の概要

> 要件を収集し、問題の範囲を調べて下さい。
> ユースケースと制約を明確にするために質問して下さい。
> 仮定について議論して下さい。

明確化するための質問に応えるインタビュアーが不在の場合は、自発的にユースケースや制約を定義しましょう。

### ユースケース

#### 以下のユースケースのみを処理するために、問題のスコープを定義します

* **User** は tweet を投稿する
    * **Service** は tweet を follower にプッシュし、プッシュ通知と email を送信します
* **User** はユーザタイムラインを閲覧します (ユーザからのアクティビティ)
* **User** はホームタイムラインを閲覧します (フォローしているユーザからのアクティビティ)
* **User** はキーワードを検索する
* **Service** は高可用性がある

#### スコープ外

* **Service** は tweet を Twitter Firehose やその他のストリームにプッシュします
* **Service** は、ユーザの表示設定に基づいて、tweet を除けます
    * ユーザが返信先の人もフォローしてない場合は、@reply を非表示にします
    * retweet を隠す設定を尊重します
* 分析

### 制約と仮定

#### 状態の仮定

一般的な項目

* トラフィックは均等に分散されていない
* tweet の投稿は高速であるべき
    * 何百万人のフォロワーがいない限り、全てのフォロワーに tweer を展開するのは高速であるべき
* 1 億人のアクティブユーザ
* 1 日あたり 5 億の tweet。1ヶ月あたり 150 億の tweet。
    * 各 tweet は、平均して 10 回の配信の fanout です
    * 1 日あたり fanout で合計 50 億のツイートが配信されます
    * 1 ヶ月あたり fanout で 1500 億の tweet が配信されます
* 1 ヶ月あたり 2500 億の Read リクエスト
* 1 ヶ月あたり 100 億回の検索

タイムライン

* タイムラインの表示は木右側であるべき
* Twitter は Write ヘビーというより Read ヘビー
    * tweet の Read を高速化するための最適化が必要
* ツイートの取り込みは Write ヘビー

検索

* 検索は高速であるべき
* 検索は Read ヘビー

#### 使用量の計算

**大雑把な使用量の計算をする必要がある場合は、インタビュアーにそれを伝えて下さい。**

* 1 tweet あたりのサイズ:
    * `tweet_id` - 8 bytes
    * `user_id` - 32 bytes
    * `text` - 140 bytes
    * `media` - 10 KB average
    * 合計: ~10 KB
* 1 ヶ月あたり 150 TB の新しい tweet コンテンツ
    * 10 KB/tweet * 5 億 twwet/日 * 30 日/月
    * 3 年間で 5.4 PB の新しい tweet コンテンツ
* 1 秒あたり 10 万回の Read リクエスト
    * 2500 億/月 の Read リクエスト * 400 req/sec / 10 億/月
* 1 秒あたり 6000 tweet
    * 150 億 tweet/月 * 400 req/sec / 10 億/月
* 1 秒あたりの fanout で配信される 6 万 tweet
    * 1500 億 tweet/月 * 400 req/sec / 10 億/月
* 1 秒あたりの検索リクエスト 4000 件
    * 100 億 tweet/月 * 400 req/sec / 10 億/月

便利な変換ガイド:

* 1ヶ月は 250 万秒
* 1 req/sec = 250 万 req/month
* 40 req/sec = 1 億 req/month
* 400 req/sec = 10 億 req/month

## Step 2: 高レベルデザインの作成

> 全ての重要なコンポーネントを含んだ、高レベルな設計の概要を説明します。

![Imgur](http://i.imgur.com/48tEA2j.png)

## Step 3: コアコンポーネントの設計

>  各コンポーネントの詳細に踏み込みます。

### ユースケース: User は tweet を投稿する

ユーザ自身の tweet を保存して、ユーザのタイムライン(ユーザからのアクティビティ)を [relational database](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms) に格納できます。 [use cases and tradeoffs between choosing SQL or NoSQL](https://github.com/donnemartin/system-design-primer#sql-or-nosql) について議論する必要があります。

tweet を配信し、ホームタイムライン(ユーザがフォローしているユーザからのアクティビティ)を構築するのは、よりトリッキーです。　全てのフォロワーへの fanout(毎秒 6 万件の tweet が展開される)は、従来の [relational database](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms) に過剰に負荷をかけるでしょう。 おそらく、**NoSQL database** や **Memory Cache** といった高速な Write が可能なデータストア を選択する必要があります。 メモリから 1 MB を順次読み取るのは約 250 マイクロ秒かかりますが、SSD からはその 4 倍、ディスクからはその 80 倍かかります。<sup><a href=https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know>1</a></sup>

写真やビデオなどのメディアは、**Object Store** に保存できます。

* **Client** は、[reverse proxy](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server) として動いている **Web Server** に tweet を投稿します。
* **Web Server** はレクエストを **Write API** サーバに転送します
* **Write API** は、**SQL database** 上のユーザタイムラインに、tweet を保存します
* **Write API** は **Fan Out Service** を使って以下のことをします:
    * **User Graph Service** を照会して、**Memory Cache** に保存されているユーザのフォロワーを見つけ出します
    * **Memory Cache** 上の *ユーザのフォロワーのホームタイムライン* に tweet を保存します
        * 計算量 O(n): 1000 フォロワーなら 1000 回の参照と挿入
    * tweet を **Search Index Service** に保存することで、高速な検索を可能にする
    * メディアは **Object Store** に保存します
    * **Notification Service** を使用して、フォロワーにプッシュ通知を送ります
        * **Queue** (図にはありません)を使って、非同期で通知を送信します

**どのくらいの量のコードを書くことになるか、インタビュアーに説明して下さい**.

もし **Memory Cache** として Redis を使っているなら、以下の構造を持つ Redis のリスト型を利用できます:

```
           tweet n+2                   tweet n+1                   tweet n
| 8 bytes   8 bytes  1 byte | 8 bytes   8 bytes  1 byte | 8 bytes   8 bytes  1 byte |
| tweet_id  user_id  meta   | tweet_id  user_id  meta   | tweet_id  user_id  meta   |
```

新しい tweet は **Memory Cache** に配置され、ユーザのホームライムラインに追加されます。

パブリックな [**REST API**](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest) を使用します:

```
$ curl -X POST --data '{ "user_id": "123", "auth_token": "ABC123", \
    "status": "hello world!", "media_ids": "ABC987" }' \
    https://twitter.com/api/v1/tweet
```

Response:

```
{
    "created_at": "Wed Sep 05 00:37:15 +0000 2012",
    "status": "hello world!",
    "tweet_id": "987",
    "user_id": "123",
    ...
}
```

内部通信には、[Remote Procedure Calls](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc) を使用できます。

### Use case: User はユーザタイムラインを閲覧します

* **Client** は、ホームタイムラインのリクエストを **Web Server** に投げます
* **Web Server** は、リクエストを **Read API** サーバに転送します
* **Read API** サーバは、**Timeline Service** を使って以下の処理を行います:
    * **Memory Cache** に保存されているタイムラインデータを取得します。そこには tweet id や user id が含まれます。- O(1)
    * [multiget](http://redis.io/commands/mget) を使って **Tweet Info Service** を照会することで、tweet id に関する追加情報を取得します - O(n)
    * multiget を使って **User Info Service** を照会することで、user id に関する追加情報を取得します。 - O(n)

REST API:

```
$ curl https://twitter.com/api/v1/home_timeline?user_id=123
```

Response:

```
{
    "user_id": "456",
    "tweet_id": "123",
    "status": "foo"
},
{
    "user_id": "789",
    "tweet_id": "456",
    "status": "bar"
},
{
    "user_id": "789",
    "tweet_id": "579",
    "status": "baz"
},
```

### ユースケース: User はユーザタイムラインを閲覧する

* **Client** はユーザタイムラインのリクエストを **Web Server** に投げます
* **Web Server** は、リクエストを **Read API** サーバに転送します
* **Read API** は、**SQL Database** からユーザタイムラインを取得します

REST API はホームライムラインに似ていますが、ユーザがフォローしている人ではなく、全ての tweet がユーザから送信される点が異なります。

### ユースケース: User はキーワードを検索する

* **Client** は、検索リクエストを **Web Server** に投げます
* **Web Server** は、リクエストを **Read API** サーバに転送します
* **Search API** は、**Search Service** を使って以下の処理を行います:
    * 入力された query を解析/トークン化し、何を検索すべきか決定します
        * マークアップを削除します
        * テキストを用語に分割します
        * typo を修正します
        * 大文字を正規化します
        * boolean 演算子を使用するように query を変換します
    * **Search Cluster** (ie [Lucene](https://lucene.apache.org/)) に結果を照会します:
        * [Scatter](https://github.com/donnemartin/system-design-primer#under-development) は、cluster 内の各サーバを収集してクエリの結果があるかどうかを判断します
        * 結果をマージし、ランク付けし、並び替え、返します

REST API:

```
$ curl https://twitter.com/api/v1/search?query=hello+world
```

レスポンスは、与えられた query に一致する tweet を返すという点を除いて、ホームタイムラインの応答とほぼ同じです。

## Step 4: デザインをスケーリングする

> 制約を考慮して、ボトルネックを特定して対処します

![Imgur](../../../images/jrUBAF7.png)

**重要: 初期設計から最終設計に直接ジャンプしないで下さい!**

以下を繰り返し行うことを明言します: 1) **Benchmark/Load Test**, 2) ボトルネックの **Profile**, 3) 代替案とトレードオフを評価しながらボトルネックに対処する, 4) それらを繰り返す。 初期設計を繰り返しスケーリングする方法のサンプルとしては [Design a system that scales to millions of users on AWS](../scaling_aws/README.md) を見て下さい。

初期設計で遭遇する可能性のあるボトルネックと、それらそれぞれにどのように対処するかについて議論することが重要です。 例えば、複数の **Web Servers** を伴った **Load Balancer** を追加することで対処される問題は何ですか? **CDN**?  **Master-Slave Replicas**? それぞれの代替案とトレードオフは何ですか?

設計を完了してスケーラビリティの問題に対処するために、いくつかのコンポーネントを紹介します。煩雑さを減らすために、内部ロードバランサは表示されていません。

*繰り返しの議論を避けるために*, 主要な話のポイント, トレードオフ, 代替案については、次の[system design topics](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics)を参照して下さい :

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

**Fanout Service** は、潜在的なボトルネックです。 何百万人ものフォロワーを持つ Twitter ユーザは、tweet が fanout プロセスを完了するまでに数分かかる場合があります。 これにより、tweet への @reply で強豪状態が発生する可能性がありますが、twwet を並び替えることで緩和できます。

また、非常にたくさんのユーザからフォローされているユーザからの tweet の fanout を回避することもできます。 代わりに、フォローワーの多いユーザの tweet を見つけ出し、検索結果をユーザのホームタイムラインの結果とマージし、配信時に tweet を並び替えることができます。

追加の最適化は以下の通りです:

* 各ホームタイムラインに関しては、数百の tweet のみを **Memory Cache** に保持する
* アクティブユーザのホームタイムラインのみを **Memory Cache** に保持する
    * もしユーザが 30 日間アクティブでなかった場合、**SQL Database** からタイムラインを再構築できます
        * **User Graph Service** を照会して、ユーザがフォローしているユーザを特定します
        *  **SQL Database** から tweet を取得し、**Memory Cache**　に追加します
* 1 ヶ月分の tweet を **Tweet Info Service** に保存します
* アクティブユーザのみを **User Info Service** に保存します
* **Search Cluster** はおそらく、レイテンシを低く保つために、メモリに tweet を保持する必要があります

また、**SQL Database** のボトルネックにも対処する必要があります。

**Memory Cache** はデータベースの負荷を軽減するはずですが、**SQL Read Replicas** が単体でキャッシュミスを処理し切れるかという点は怪しい。 おそらく、追加の SQL スケーリングパターンを採用する必要があります。

大量の Write は、単体の **SQL Write Master-Slave** に過剰な負荷をかけるので、追加のスケーリング技術が必要な可能性を示唆しています。

* [Federation](https://github.com/donnemartin/system-design-primer#federation)
* [Sharding](https://github.com/donnemartin/system-design-primer#sharding)
* [Denormalization](https://github.com/donnemartin/system-design-primer#denormalization)
* [SQL Tuning](https://github.com/donnemartin/system-design-primer#sql-tuning)

一部のデータを **NoSQL Database** に移すことも検討する必要があります。

## 追加のポイント

> 問題の範囲と残り時間次第で、追加の話題に踏み込みます。

#### NoSQL

* [Key-value store](https://github.com/donnemartin/system-design-primer#key-value-store)
* [Document store](https://github.com/donnemartin/system-design-primer#document-store)
* [Wide column store](https://github.com/donnemartin/system-design-primer#wide-column-store)
* [Graph database](https://github.com/donnemartin/system-design-primer#graph-database)
* [SQL vs NoSQL](https://github.com/donnemartin/system-design-primer#sql-or-nosql)

### Caching

* キャッシュする場所
    * [Client caching](https://github.com/donnemartin/system-design-primer#client-caching)
    * [CDN caching](https://github.com/donnemartin/system-design-primer#cdn-caching)
    * [Web server caching](https://github.com/donnemartin/system-design-primer#web-server-caching)
    * [Database caching](https://github.com/donnemartin/system-design-primer#database-caching)
    * [Application caching](https://github.com/donnemartin/system-design-primer#application-caching)
* キャッシュするモノ
    * [Caching at the database query level](https://github.com/donnemartin/system-design-primer#caching-at-the-database-query-level)
    * [Caching at the object level](https://github.com/donnemartin/system-design-primer#caching-at-the-object-level)
* キャッシュを更新するタイミング
    * [Cache-aside](https://github.com/donnemartin/system-design-primer#cache-aside)
    * [Write-through](https://github.com/donnemartin/system-design-primer#write-through)
    * [Write-behind (write-back)](https://github.com/donnemartin/system-design-primer#write-behind-write-back)
    * [Refresh ahead](https://github.com/donnemartin/system-design-primer#refresh-ahead)

### 非同期とマイクロサービス

* [Message queues](https://github.com/donnemartin/system-design-primer#message-queues)
* [Task queues](https://github.com/donnemartin/system-design-primer#task-queues)
* [Back pressure](https://github.com/donnemartin/system-design-primer#back-pressure)
* [Microservices](https://github.com/donnemartin/system-design-primer#microservices)

### 通信

* トレードオフについて話し合う:
    * クライアントとの外部通信 - [HTTP APIs following REST](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest)
    * 内部通信 - [RPC](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc)
* [Service discovery](https://github.com/donnemartin/system-design-primer#service-discovery)

### セキュリティ

[security section](https://github.com/donnemartin/system-design-primer#security) を参照して下さい。

### レイテンシ

See [Latency numbers every programmer should know](https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know).

### 進行中

* システムのベンチマークと監視を継続し、ボトルネックが発生した時に対処する
* スケーリングは反復的なプロセスです
