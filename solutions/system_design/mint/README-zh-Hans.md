# 设计 Mint.com

**注意：这个文档中的链接会直接指向[系统设计主题索引](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#系统设计主题索引)中的有关部分，以避免重复的内容。您可以参考链接的相关内容，来了解其总的要点、方案的权衡取舍以及可选的替代方案。**

## 第一步：简述用例与约束条件

> 搜集需求与问题的范围。
> 提出问题来明确用例与约束条件。
> 讨论假设。

我们将在没有面试官明确说明问题的情况下，自己定义一些用例以及限制条件。

### 用例

#### 我们将把问题限定在仅处理以下用例的范围中

* **用户** 连接到一个财务账户
* **服务** 从账户中提取交易
    * 每日更新
    * 分类交易
        * 允许用户手动分类
        * 不自动重新分类
    * 按类别分析每月支出
* **服务** 推荐预算
    * 允许用户手动设置预算
    * 当接近或者超出预算时，发送通知
* **服务** 具有高可用性

#### 非用例范围

* **服务** 执行附加的日志记录和分析

### 限制条件与假设

#### 提出假设

* 网络流量非均匀分布
* 自动账户日更新只适用于 30 天内活跃的用户
* 添加或者移除财务账户相对较少
* 预算通知不需要及时
* 1000 万用户
    * 每个用户10个预算类别= 1亿个预算项
    * 示例类别:
        * Housing = $1,000
        * Food = $200
        * Gas = $100
    * 卖方确定交易类别
        * 50000 个卖方
* 3000 万财务账户
* 每月 50 亿交易
* 每月 5 亿读请求
* 10:1 读写比
    * Write-heavy，用户每天都进行交易，但是每天很少访问该网站

#### 计算用量

**如果你需要进行粗略的用量计算，请向你的面试官说明。**

* 每次交易的用量:
    * `user_id` - 8 字节
    * `created_at` - 5 字节
    * `seller` - 32 字节
    * `amount` - 5 字节
    * Total: ~50 字节
* 每月产生 250 GB 新的交易内容
    * 每次交易 50 比特 * 50 亿交易每月
    * 3年内新的交易内容 9 TB
    * Assume most are new transactions instead of updates to existing ones
* 平均每秒产生 2000 次交易
* 平均每秒产生 200 读请求

便利换算指南：

* 每个月有 250 万秒
* 每秒一个请求 = 每个月 250 万次请求
* 每秒 40 个请求 = 每个月 1 亿次请求
* 每秒 400 个请求 = 每个月 10 亿次请求

## 第二步：概要设计

> 列出所有重要组件以规划概要设计。

![Imgur](http://i.imgur.com/E8klrBh.png)

## 第三步：设计核心组件

> 深入每个核心组件的细节。

### 用例：用户连接到一个财务账户

我们可以将 1000 万用户的信息存储在一个[关系数据库](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms)中。我们应该讨论一下[选择SQL或NoSQL之间的用例和权衡](https://github.com/donnemartin/system-design-primer#sql-or-nosql)了。

* **客户端** 作为一个[反向代理](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server)，发送请求到 **Web 服务器**
* **Web 服务器** 转发请求到 **账户API** 服务器
* **账户API** 服务器将新输入的账户信息更新到 **SQL数据库** 的`accounts`表

**告知你的面试官你准备写多少代码**。

`accounts`表应该具有如下结构：

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

我们将在`id`，`user_id`和`created_at`等字段上创建一个[索引](https://github.com/donnemartin/system-design-primer#use-good-indices)以加速查找（对数时间而不是扫描整个表）并保持数据在内存中。从内存中顺序读取 1 MB数据花费大约250毫秒，而从SSD读取是其4倍，从磁盘读取是其80倍。<sup><a href=https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know>1</a></sup>

我们将使用公开的[**REST API**](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest):

```
$ curl -X POST --data '{ "user_id": "foo", "account_url": "bar", \
    "account_login": "baz", "account_password": "qux" }' \
    https://mint.com/api/v1/account
```

对于内部通信，我们可以使用[远程过程调用](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc)。

接下来，服务从账户中提取交易。

### 用例：服务从账户中提取交易

如下几种情况下，我们会想要从账户中提取信息：

* 用户首次链接账户
* 用户手动更新账户
* 为过去 30 天内活跃的用户自动日更新

数据流:

* **客户端**向 **Web服务器** 发送请求
* **Web服务器** 将请求转发到 **帐户API** 服务器
* **帐户API** 服务器将job放在 **队列** 中，如 [Amazon SQS](https://aws.amazon.com/sqs/) 或者 [RabbitMQ](https://www.rabbitmq.com/)
    * 提取交易可能需要一段时间，我们可能希望[与队列异步](https://github.com/donnemartin/system-design-primer#asynchronism)地来做，虽然这会引入额外的复杂度。
* **交易提取服务** 执行如下操作：
    * 从 **Queue** 中拉取并从金融机构中提取给定用户的交易，将结果作为原始日志文件存储在 **对象存储区**。
    * 使用 **分类服务** 来分类每个交易
    * 使用 **预算服务** 来按类别计算每月总支出
        * **预算服务** 使用 **通知服务** 让用户知道他们是否接近或者已经超出预算
    * 更新具有分类交易的 **SQL数据库** 的`transactions`表
    * 按类别更新 **SQL数据库** `monthly_spending`表的每月总支出
    * 通过 **通知服务** 提醒用户交易完成
        * 使用一个 **队列** (没有画出来) 来异步发送通知

`transactions`表应该具有如下结构：

```
id int NOT NULL AUTO_INCREMENT
created_at datetime NOT NULL
seller varchar(32) NOT NULL
amount decimal NOT NULL
user_id int NOT NULL
PRIMARY KEY(id)
FOREIGN KEY(user_id) REFERENCES users(id)
```

我们将在 `id`，`user_id`，和 `created_at`字段上创建[索引](https://github.com/donnemartin/system-design-primer#use-good-indices)。

`monthly_spending`表应该具有如下结构：

```
id int NOT NULL AUTO_INCREMENT
month_year date NOT NULL
category varchar(32)
amount decimal NOT NULL
user_id int NOT NULL
PRIMARY KEY(id)
FOREIGN KEY(user_id) REFERENCES users(id)
```

我们将在`id`，`user_id`字段上创建[索引](https://github.com/donnemartin/system-design-primer#use-good-indices)。

#### 分类服务

对于 **分类服务**，我们可以生成一个带有最受欢迎卖家的卖家-类别字典。如果我们估计 50000 个卖家，并估计每个条目占用不少于 255 个字节，该字典只需要大约 12 MB内存。

**告知你的面试官你准备写多少代码**。

```python
class DefaultCategories(Enum):

    HOUSING = 0
    FOOD = 1
    GAS = 2
    SHOPPING = 3
    ...

seller_category_map = {}
seller_category_map['Exxon'] = DefaultCategories.GAS
seller_category_map['Target'] = DefaultCategories.SHOPPING
...
```

对于一开始没有在映射中的卖家，我们可以通过评估用户提供的手动类别来进行众包。在 O(1) 时间内，我们可以用堆来快速查找每个卖家的顶端的手动覆盖。

```python
class Categorizer(object):

    def __init__(self, seller_category_map, self.seller_category_crowd_overrides_map):
        self.seller_category_map = seller_category_map
        self.seller_category_crowd_overrides_map = \
            seller_category_crowd_overrides_map

    def categorize(self, transaction):
        if transaction.seller in self.seller_category_map:
            return self.seller_category_map[transaction.seller]
        elif transaction.seller in self.seller_category_crowd_overrides_map:
            self.seller_category_map[transaction.seller] = \
                self.seller_category_crowd_overrides_map[transaction.seller].peek_min()
            return self.seller_category_map[transaction.seller]
        return None
```

交易实现：

```python
class Transaction(object):

    def __init__(self, created_at, seller, amount):
        self.timestamp = timestamp
        self.seller = seller
        self.amount = amount
```

### 用例：服务推荐预算

首先，我们可以使用根据收入等级分配每类别金额的通用预算模板。使用这种方法，我们不必存储在约束中标识的 1 亿个预算项目，只需存储用户覆盖的预算项目。如果用户覆盖预算类别，我们可以在
`TABLE budget_overrides`中存储此覆盖。

```python
class Budget(object):

    def __init__(self, income):
        self.income = income
        self.categories_to_budget_map = self.create_budget_template()

    def create_budget_template(self):
        return {
            'DefaultCategories.HOUSING': income * .4,
            'DefaultCategories.FOOD': income * .2
            'DefaultCategories.GAS': income * .1,
            'DefaultCategories.SHOPPING': income * .2
            ...
        }

    def override_category_budget(self, category, amount):
        self.categories_to_budget_map[category] = amount
```

对于 **预算服务** 而言，我们可以在`transactions`表上运行SQL查询以生成`monthly_spending`聚合表。由于用户通常每个月有很多交易，所以`monthly_spending`表的行数可能会少于总共50亿次交易的行数。

作为替代，我们可以在原始交易文件上运行 **MapReduce** 作业来：

* 分类每个交易
* 按类别生成每月总支出

对交易文件的运行分析可以显著减少数据库的负载。

如果用户更新类别，我们可以调用 **预算服务** 重新运行分析。

**告知你的面试官你准备写多少代码**.

日志文件格式样例，以tab分割：

```
user_id   timestamp   seller  amount
```

**MapReduce** 实现:

```python
class SpendingByCategory(MRJob):

    def __init__(self, categorizer):
        self.categorizer = categorizer
        self.current_year_month = calc_current_year_month()
        ...

    def calc_current_year_month(self):
        """返回当前年月"""
        ...

    def extract_year_month(self, timestamp):
        """返回时间戳的年，月部分"""
        ...

    def handle_budget_notifications(self, key, total):
        """如果接近或超出预算，调用通知API"""
        ...

    def mapper(self, _, line):
        """解析每个日志行，提取和转换相关行。

        参数行应为如下形式：

        user_id   timestamp   seller  amount

        使用分类器来将卖家转换成类别，生成如下形式的key-value对：

        (user_id, 2016-01, shopping), 25
        (user_id, 2016-01, shopping), 100
        (user_id, 2016-01, gas), 50
        """
        user_id, timestamp, seller, amount = line.split('\t')
        category = self.categorizer.categorize(seller)
        period = self.extract_year_month(timestamp)
        if period == self.current_year_month:
            yield (user_id, period, category), amount

    def reducer(self, key, value):
        """将每个key对应的值求和。

        (user_id, 2016-01, shopping), 125
        (user_id, 2016-01, gas), 50
        """
        total = sum(values)
        yield key, sum(values)
```

## 第四步：设计扩展

> 根据限制条件，找到并解决瓶颈。

![Imgur](http://i.imgur.com/V5q57vU.png)

**重要提示：不要从最初设计直接跳到最终设计中！**

现在你要 1) **基准测试、负载测试**。2) **分析、描述**性能瓶颈。3) 在解决瓶颈问题的同时，评估替代方案、权衡利弊。4) 重复以上步骤。请阅读[「设计一个系统，并将其扩大到为数以百万计的 AWS 用户服务」](../scaling_aws/README.md) 来了解如何逐步扩大初始设计。

讨论初始设计可能遇到的瓶颈及相关解决方案是很重要的。例如加上一个配置多台 **Web 服务器**的**负载均衡器**是否能够解决问题？**CDN**呢？**主从复制**呢？它们各自的替代方案和需要**权衡**的利弊又有什么呢？

我们将会介绍一些组件来完成设计，并解决架构扩张问题。内置的负载均衡器将不做讨论以节省篇幅。

**为了避免重复讨论**，请参考[系统设计主题索引](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#系统设计主题的索引)相关部分来了解其要点、方案的权衡取舍以及可选的替代方案。

* [DNS](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#域名系统)
* [负载均衡器](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#负载均衡器)
* [水平拓展](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#水平扩展)
* [反向代理（web 服务器）](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#反向代理web-服务器)
* [API 服务（应用层）](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#应用层)
* [缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#缓存)
* [关系型数据库管理系统 (RDBMS)](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#关系型数据库管理系统rdbms)
* [SQL 故障主从切换](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#故障切换)
* [主从复制](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#主从复制)
* [异步](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#异步)
* [一致性模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#一致性模式)
* [可用性模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#可用性模式)

我们将增加一个额外的用例：**用户** 访问摘要和交易数据。

用户会话，按类别统计的统计信息，以及最近的事务可以放在 **内存缓存**（如 Redis 或 Memcached ）中。

* **客户端** 发送读请求给 **Web 服务器**
* **Web 服务器** 转发请求到 **读 API** 服务器
    * 静态内容可通过 **对象存储** 比如缓存在 **CDN** 上的 S3 来服务
* **读 API** 服务器做如下动作:
    * 检查 **内存缓存** 的内容
        * 如果URL在 **内存缓存**中，返回缓存的内容
        * 否则
            * 如果URL在 **SQL 数据库**中，获取该内容
                * 以其内容更新 **内存缓存**

参考 [何时更新缓存](https://github.com/donnemartin/system-design-primer#when-to-update-the-cache) 中权衡和替代的内容。以上方法描述了 [cache-aside缓存模式](https://github.com/donnemartin/system-design-primer#cache-aside).

我们可以使用诸如 Amazon Redshift 或者 Google BigQuery 等数据仓库解决方案，而不是将`monthly_spending`聚合表保留在 **SQL 数据库** 中。

我们可能只想在数据库中存储一个月的`交易`数据，而将其余数据存储在数据仓库或者 **对象存储区** 中。**对象存储区** （如Amazon S3) 能够舒服地解决每月 250 GB新内容的限制。

为了解决每秒 *平均* 2000 次读请求数（峰值时更高），受欢迎的内容的流量应由 **内存缓存** 而不是数据库来处理。 **内存缓存** 也可用于处理不均匀分布的流量和流量尖峰。 只要副本不陷入重复写入的困境，**SQL 读副本** 应该能够处理高速缓存未命中。

*平均* 200 次交易写入每秒（峰值时更高）对于单个 **SQL 写入主-从服务** 来说可能是棘手的。我们可能需要考虑其它的 SQL 性能拓展技术：

* [联合](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#联合)
* [分片](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#分片)
* [非规范化](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#非规范化)
* [SQL 调优](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-调优)

我们也可以考虑将一些数据移至 **NoSQL 数据库**。

## 其它要点

> 是否深入这些额外的主题，取决于你的问题范围和剩下的时间。

#### NoSQL

* [键-值存储](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#键-值存储)
* [文档类型存储](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#文档类型存储)
* [列型存储](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#列型存储)
* [图数据库](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#图数据库)
* [SQL vs NoSQL](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-还是-nosql)

### 缓存

* 在哪缓存
    * [客户端缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#客户端缓存)
    * [CDN 缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#cdn-缓存)
    * [Web 服务器缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#web-服务器缓存)
    * [数据库缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#数据库缓存)
    * [应用缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#应用缓存)
* 什么需要缓存
    * [数据库查询级别的缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#数据库查询级别的缓存)
    * [对象级别的缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#对象级别的缓存)
* 何时更新缓存
    * [缓存模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#缓存模式)
    * [直写模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#直写模式)
    * [回写模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#回写模式)
    * [刷新](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#刷新)

### 异步与微服务

* [消息队列](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#消息队列)
* [任务队列](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#任务队列)
* [背压](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#背压)
* [微服务](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#微服务)

### 通信

* 可权衡选择的方案：
    * 与客户端的外部通信 - [使用 REST 作为 HTTP API](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#表述性状态转移rest)
    * 服务器内部通信 - [RPC](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#远程过程调用协议rpc)
* [服务发现](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#服务发现)

### 安全性

请参阅[「安全」](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#安全)一章。

### 延迟数值

请参阅[「每个程序员都应该知道的延迟数」](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#每个程序员都应该知道的延迟数)。

### 持续探讨

* 持续进行基准测试并监控你的系统，以解决他们提出的瓶颈问题。
* 架构拓展是一个迭代的过程。
