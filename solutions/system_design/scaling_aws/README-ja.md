# AWS で数百万のユーザーに対応するシステムを設計する

*Note: このドキュメントは、重複を避けるために、[システム設計入門](https://github.com/donnemartin/system-design-primer/blob/master/README-ja.md#%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E8%A8%AD%E8%A8%88%E5%85%A5%E9%96%80)にある関連領域に直接リンクしています。一般的な話のポイントやトレードオフ, 代替案についてはリンク先を参照して下さい。*

## Step 1: ユースケースと制約の概要

> 要件を収集し、問題の範囲を調べて下さい。
> ユースケースと制約を明確にするために質問して下さい。
> 仮定について議論して下さい。

明確化するための質問に応えるインタビュアーが不在の場合は、自発的にユースケースや制約を定義しましょう。

### ユースケース

この問題を解決するには、繰り返し以下のアプローチを行います: 1) **Benchmark/Load Test**, 2) ボトルネックの **Profile**, 3) 代替案とトレードオフを評価しながらボトルネックに対処する, 4) 繰り返し。 これは基礎的な設計からスケーラブルな設計への進化に適した良いパターンです。

AWS のバックグラウンドがあるか、AWS の知識を必要とするポジションに応募している場合を覗き、AWS 固有の詳細は必須ではありません。 ただし、**この演習で説明する原則の多くは、AWS エコシステムの外の世界でも、より一般的に適用できます。**

#### 以下のユースケースのみを処理するために、問題のスコープを定義します

* **User** が、Read あるいは Write リクエストを行います
    * **Service** は処理を実行し、User データを保存し、結果を返します
* **Service** は、少数のユーザ数から、数百マンのユーザ数へのサービス提供に進化する必要があります。
    * 多くのユーザとリクエストを処理するアーキテクチャを進化させながら、一般的なスケーリングパターンについて議論します。
* **Service** は、高可用性があります。

### 制約と仮定

#### 状態の仮定

* トラフィックが均等に分散されていない
* リレーショナルなデータが必要
* 1 ユーザから数千マンユーザにスケール可能
    * ユーザ数の増加を次のように示します:
        * Users+
        * Users++
        * Users+++
        * ...
    * 1 千万のユーザ
    * 1 ヶ月あたり 10 億回の Write
    * 1 ヶ月あたり 1000 億回の Read
    * Read と Write の比率は 100 : 1
    * Write 一回あたりのコンテンツは 1 KB

#### 使用量を計算する

**大雑把な使用量の計算をする必要がある場合は、インタビュアーにそれを伝えて下さい。**

* 1 ヶ月あたり 1 TB の新しいコンテンツ
    * 1 KB * 10 億
    * 3 年間で 36 TB の新しいコンテンツ
    * ほとんどの書き込みは、既存コンテンツの更新ではなく、新しいコンテンツの書き込みであるとする
* 平均で 400 write/sec
* 平均で 40,000 read/sec

便利な変換ガイド:

* 1 ヶ月は約 250 万秒
* 1 req/sec = 250万 req/month
* 40 req/sec = 100万 req/month
* 400 req/sec = 10億 req/month

## Step 2: 高レベルデザインの作成

> 全ての重要なコンポーネントを含んだ、高レベルな設計の概要を説明します。

![Imgur](http://i.imgur.com/B8LDKD7.png)

## Step 3: コアコンポーネントを設計する

> 各コンポーネントの詳細に踏み込みます。

### ユースケース: User が、Read あるいは Write リクエストを行います

#### ゴール

* 1~2 人のユーザであれば、基本的なセットアップだけ求められます
    * シンプルな単一ボックス
    * 必要に応じて垂直スケーリング
    * ボトルネックを特定するための監視

#### 単一ボックスから始める

* **Web server** on EC2
    * ユーザデータのストレージ
    * [**MySQL Database**](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms)

**垂直スケーリング** を使用する:

* 単により大きな箱を選ぶ
* メトリックを監視して、スケールアップの方法を決定します
    * 基本的な監視を使用してボトルネックを特定します: CPU, memory, IO, network など
    * CloudWatch, top, nagios, statsd, graphite など
* 垂直方向のスケーリングはとても高価になる可能性があります
* 冗長性/フェイルオーバーなし

*トレードオフや代替案,追加の詳細:*

* **垂直スケーリング** に代わるものは [**水平スケーリング**](https://github.com/donnemartin/system-design-primer#horizontal-scaling)です

#### SQL から始め、NoSQL を検討する

制約では、リレーショナルなデータが必要であると仮定していますので、単一のボックスで **MySQL Database** を使うことができます。

*トレードオフや代替案,追加の詳細:*

* [Relational database management system (RDBMS)](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms) を参照して下さい
* [SQL or NoSQL](https://github.com/donnemartin/system-design-primer#sql-or-nosql) の理由について議論して下さい

#### パブリックな静的 IP を割り当てる

* Elastic IP は、再起動時に IP が変化しないパブリックエンドポイントを提供します
* フェイルオーバーを支援し、ドメインを新しい IP にポイントするだけ

#### DNS を使用する

Route 53 などの **DNS** を追加し、ドメインをインスタンスのパブリック IP にマップします。

*トレードオフや代替案,追加の詳細:*

* [Domain name system](https://github.com/donnemartin/system-design-primer#domain-name-system) を参照して下さい

#### web server を保護する

* 必要なポートのみを開く
    * web server が以下からのリクエストに応答できるようにします
        * 80 for HTTP
        * 443 for HTTPS
        * 22 for SSH to only whitelisted IPs
    * web server がアウトバウンド接続を開始しないようにする

*トレードオフや代替案,追加の詳細:*

* [Security](https://github.com/donnemartin/system-design-primer#security) を参照して下さい

## Step 4: デザインをスケーリングする

> 制約を考慮して、ボトルネックを特定して対処します。

### Users+

![Imgur](http://i.imgur.com/rrfjMXB.png)

#### 仮定

ユーザ数が増え始め、単一ボックスの負荷が増加しています。 **Benchmarks/Load Tests** と **Profiling** は、ユーザコンテンツがディスク領域を使い果たしている間、**MySQL Database** が多くのメモリと CPI リソースを消費することを示しています。

これまでは **垂直スケーリング** でこれらの問題に対処することができました。 しかし残念ながら、これは非常に高価になり、**MySQL Database** と **Web Server** を個別にスケーリングすることができません。

#### ゴール

* シングルボックスの負荷を軽減し、独立したスケーリングを可能にする
    * 静的コンテンツを個別に **Object Store** に保存する
    * **MySQL Database** を別のボックスに移動する　
* 欠点
    * これらの変更により複雑さが増し、**Object Store** と **MySQL Database** を指すように **Web Server** に変更を入れる必要があります。
    * 新しいコンポーネントを保護するための、追加のセキュリティ保護を講じる必要が生じます。
    * AWS のコストも増加する可能性がありますが、同様のシステムを自分で管理する際のコストと比較検討する必要があります

#### 静的コンテンツを個別に保存する

* S3 のようなマネージド **Object Store** を使用して静的コンテンツを保存することを検討します
    * 高い拡張性と信頼性
    * サーバサイドの暗号化
* 静的コンテンツを S3 に移動する
    * ユーザファイル
    * JS
    * CSS
    * 画像
    * 動画

#### MySQL database を別のボックスに移動する

* RDS などのサービスを利用して **MySQL Database** を管理することを検討して下さい
    * 管理, スケーリングが容易
    * 複数の
    * 複数のアベイラリTゾーン
    * 保存時の暗号化

#### システムを保護する

* 送信中/保存中のデータを暗号化する
* 仮装プライベートクラウドを使用する
    * 単一の **Web Server** のパブリックサブネットを作り、インターネットからトラフィックを送受信できるようにします
    * その他全てをプライベートサブネットで作り、外部アクセスを遮断します
    * 各コンポーネントのホワイトリスト IP からのみポートを開きます
* 残りの演習では、新しいコンポーネントについて同様のパターンを実装する必要があります。

*トレードオフや代替案,追加の詳細:*

* [Security](https://github.com/donnemartin/system-design-primer#security) を参照して下さい

### Users++

![Imgur](http://i.imgur.com/raoFTXM.png)

#### 仮定

**Benchmarks/Load Tests** と **Profiling** は、ピーク時に単一 **Web Server** にボトルネックがあり、いくつかのケースやダウンタイムでレスポンスが遅いことを示しています。 サービスが成熟するにつれ、可用性と冗長性の向上も実施していきたいです。

#### ゴール

* 以下のゴールは、**Web Server** のスケーリング問題に対処することを試みます
    * **Benchmarks/Load Tests** と **Profiling** に基づき、これらの手法の 1 つあるいは 2 つを実装するだけで済むことがあります
* [**水平スケーリング**](https://github.com/donnemartin/system-design-primer#horizontal-scaling) を使用して、増加している負荷を処理し、単一障害点に対処する
    * AWS の ELB や HAProxy のような [**Load Balancer**](https://github.com/donnemartin/system-design-primer#load-balancer) を追加する
        * ELB は高可用性がある
        * もし独自の **Load Balancer** を構築しているなら、複数のアベイラビリティーゾーンで [active-active](https://github.com/donnemartin/system-design-primer#active-active) あるいは [active-passive](https://github.com/donnemartin/system-design-primer#active-passive) に複数のサーバを構築すると可用性が向上します。
        * **Load Balancer** の SSL を終了してバックエンドサーバの計算負荷を軽減し、証明書の管理を簡素化します
    * 複数のアベイラビリティーゾーンに分散された複数の **Web Servers** を使用する
    * 冗長性を向上させるために、複数のアベイラビリティーゾーンに跨って [**Master-Slave Failover**](https://github.com/donnemartin/system-design-primer#master-slave-replication) モードで複数の **MySQL** インスタンスを使用する
* [**Application Servers**](https://github.com/donnemartin/system-design-primer#application-layer) から **Web Servers** を分離する
    * 両方のレイヤーを個別にスケーリングして構築する
    * **Web Servers** は [**Reverse Proxy**](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server) として動ける
    * 例えば、**Write APIs** を処理する **Application Servers** を追加しつつ、**Read APIs** を処理する **Application Servers** を追加できます
* 静的(および一部の動的)コンテンツを CloudFront などの [**Content Delivery Network (CDN)**](https://github.com/donnemartin/system-design-primer#content-delivery-network) に移動して、負荷とレイテンシを軽減します

*トレードオフや代替案,追加の詳細:*

* 詳細は上記のリンクされたコンテンツを参照してください

### Users+++

![Imgur](http://i.imgur.com/OZCxJr0.png)

**Note:** 煩雑さを減らすために、**内部の Load Balancers** は表示されていません

#### 仮定

**Benchmarks/Load Tests** と **Profiling** は、Read ヘビー (Read : Write が 100 : 1 ) であり、データベースが大量の Read リクエストによるパフォーマンス劣化に苦しんでいます。

#### ゴール

* 以下のゴールは、**MySQL Database**　のスケーリング問題に対処することを試みます
    * **Benchmarks/Load Tests** と **Profiling** に基づき、これらの手法の 1 つあるいは 2 つを実装するだけで済むことがあります
* 以下のデータを Elasticache などの [**Memory Cache**](https://github.com/donnemartin/system-design-primer#cache) に移し、負荷とレイテンシを軽減します
    * **MySQL** から頻繁にアクセスされるコンテンツ
        * まず、**Memory Cache** を実装する前に、**MySQL Database** キャッシュを設定して、それがボトルネックを解消するのに十分かどうかを確認します。
    * **Web Servers** からのセッションデータ
        * **Autoscaling** を考慮して、**Web Servers** はステートレスに
    * メモリから 1 MB を順次読み取るには約 250 マイクロ秒かかりますが、SSD からはその 4 倍、ディスクからはその 80 倍の時間がかかります<sup><a href=https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know>1</a></sup>
* [**MySQL Read Replicas**](https://github.com/donnemartin/system-design-primer#master-slave-replication) を追加して、書き込みマスタの負荷を軽減する
* **Web Servers** と **Application Servers** を追加して、レスポンス性能を向上させる

*トレードオフや代替案,追加の詳細:*

* 詳細は上記のリンクされたコンテンツを参照してください

#### MySQL リードレプリカの追加

* **Memory Cache** の追加とスケーリングに加えて, **MySQL Read Replicas** は **MySQL Write Master** の負荷を軽減するのにも役立ちます
* **Web Server** にロジックを追加して、Write と Read を分離します
* **MySQL Read Replicas** の前段に **Load Balancers** を追加します (煩雑さを減らすために図示されていません)
* ほとんどのサービスは Read ヘビー か Write ヘビー

*トレードオフや代替案,追加の詳細:*

* [Relational database management system (RDBMS)](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms) を参照して下さい

### Users++++

![Imgur](http://i.imgur.com/3X8nmdL.png)

#### 仮定

**Benchmarks/Load Tests** と **Profiling**　は、US における通常の営業時間におけるトラフィックのスパイクが、ユーザがオフィスを離れる時に著しく低下していることを示しています。 実際の負荷に基づいてサーバを自動的に起動および停止することで、コストを削減できると考えています。 小さなお店なので、**Autoscaling** と一般的な操作のために、できる限り DevOps を自動化したいです。

#### ゴール

* 必要に応じて容量をプロビジョニングするために、**Autoscaling** を追加します
    * トラフィックの急上昇に対応します
    * 未使用のインスタンスをシャットダウンすることでコストを削減します
* DevOps の自動化
    * Chef, Puppet, Ansible など
* ボトルネックに対処するためのメトリックを継続して監視する
    * **Host level** - 単一の EC2 インスタンスを確認する
    * **Aggregate level** - Load Balancer の統計情報を確認する
    * **Log analysis** - CloudWatch, CloudTrail, Loggly, Splunk, Sumo
    * **External site performance** - Pingdom or New Relic
    * **Handle notifications and incidents** - PagerDuty
    * **Error Reporting** - Sentry

#### autoscaling の追加

* AWS **Autoscaling** などのマネージドサービスを検討する
    * **Web Server** ごと、および **Application Server** の種類ごとに 1 つのグループを作成し、各グループを複数のアベイラビリティーゾーンに配置します
    * インスタンスの最小数と最大数を設定しま明日
    * CloudWatch を介してスケールアップおよびスケールダウンするトリガーを設定します
        * 予測可能な負荷のための単純な時刻メトリック、または
        * 一定期間のメトリック:
            * CPU 負荷
            * レイテンシ
            * ネットワークトラフィック
            * カスタム指標
    * 欠点
        * Autoscaling は複雑さをもたらす可能性がある
        * 需要の増加に対応するためにシステムが適切にスケールアップするまで、または需要が低下した時にスケールダウンするまでに時間がかかることがある

### Users+++++

![Imgur](http://i.imgur.com/jj3A5N8.png)

**Note:** 煩雑さを減らすために　**Autoscaling** は図示されていません

#### 仮定

制約で説明されている数値に向けてサービスが成長し続けるにつれて、**Benchmarks/Load Tests** と **Profiling** により新たなボトルネックを明らかにして対処します。

#### ゴール

問題の制約によりスケーリングの問題に引き続き対処します:

* もし **MySQL Database** が大きくなりすぎてきたら、Redshift のようなデータウェアハウスに残りを保存しつつ、限られた期間のデータだけをデータベースの保存することを検討するかもしれません
    * Redshift などのデータウェアハウスは、1 ヶ月あたり 1 TB の新しいコンテンツの制約を満足に処理できます
※1 秒あたりの平均 Read リクエストが 40,000 なので、**Memory Cache** をスケーリングすることにより、一般的なコンテンツの Read トラフィックに対応できます。 これは、不均一に分散されたトラフィックやトラフィックスパイクの処理にも役立ちます。
    * **SQL Read Replicas** は、キャッシュミスを扱う問題を抱えるかもしれないので、追加の SQL スケーリングパターンを採用する必要があるでしょう。
* 1秒あたり平均 400 Write (ピーク時はもっと高くなる可能性あり) は、単一の **SQL Write Master-Slave** では難しい場合があり、追加のスケーリング技術が必要になる可能性もあります。

SQ　スケーリングパターンは次の通りです:

* [Federation](https://github.com/donnemartin/system-design-primer#federation)
* [Sharding](https://github.com/donnemartin/system-design-primer#sharding)
* [Denormalization](https://github.com/donnemartin/system-design-primer#denormalization)
* [SQL Tuning](https://github.com/donnemartin/system-design-primer#sql-tuning)

過度な Read, Write リクエストにさらに対処するには、適切なデータを DynamoDB などの [**NoSQL Database**](https://github.com/donnemartin/system-design-primer#nosql) に移動することも検討する必要があります。

[**Application Servers**](https://github.com/donnemartin/system-design-primer#application-layer) をさらに分離することで個別のスケーリングを可能にできます。 リアルタイムで実行する必要のないバッチ処理や計算は、**Queues** と **Workers** で [**Asynchronously**](https://github.com/donnemartin/system-design-primer#asynchronism) に実行できます。

* 例えば、写真サービスで、写真オセロアップロードとサムネイルの作成を分離できます:
    * **Client** が写真をアップロードする
    * **Application Server** は SQS などの **Queue** にジョブを追加する
    * EC2 あるいは Lambda 上の **Worker Service** が、**Queue** からジョブを pull します:
        * サムネイルを作成します
        * **Database** を更新します
        * サムネイルを **Object Store** に保存します

*トレードオフや代替案,追加の詳細:*

* 詳細は上記のリンクされたコンテンツを参照してください

## 追加のポイント

> 問題の範囲と残り時間次第で、追加の話題に踏み込みます。

### SQL scaling patterns

* [Read replicas](https://github.com/donnemartin/system-design-primer#master-slave-replication)
* [Federation](https://github.com/donnemartin/system-design-primer#federation)
* [Sharding](https://github.com/donnemartin/system-design-primer#sharding)
* [Denormalization](https://github.com/donnemartin/system-design-primer#denormalization)
* [SQL Tuning](https://github.com/donnemartin/system-design-primer#sql-tuning)

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
