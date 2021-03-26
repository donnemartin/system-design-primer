# 设计推特时间轴与搜索功能

**注意：这个文档中的链接会直接指向[系统设计主题索引](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#系统设计主题的索引)中的有关部分，以避免重复的内容。你可以参考链接的相关内容，来了解其总的要点、方案的权衡取舍以及可选的替代方案。**

**设计 Facebook 的 feed** 与**设计 Facebook 搜索**与此为同一类型问题。

## 第一步：简述用例与约束条件

> 搜集需求与问题的范围。
> 提出问题来明确用例与约束条件。
> 讨论假设。

我们将在没有面试官明确说明问题的情况下，自己定义一些用例以及限制条件。

### 用例

#### 我们将把问题限定在仅处理以下用例的范围中

* **用户**发布了一篇推特
    * **服务**将推特推送给关注者，给他们发送消息通知与邮件
* **用户**浏览用户时间轴（用户最近的活动）
* **用户**浏览主页时间轴（用户关注的人最近的活动）
* **用户**搜索关键词
* **服务**需要有高可用性

#### 不在用例范围内的有

* **服务**向 Firehose 与其它流数据接口推送推特
* **服务**根据用户的”是否可见“选项排除推特
    * 隐藏未关注者的 @回复
    * 关心”隐藏转发“设置
* 数据分析

### 限制条件与假设

#### 提出假设

普遍情况

* 网络流量不是均匀分布的
* 发布推特的速度需要足够快速
    * 除非有上百万的关注者，否则将推特推送给粉丝的速度要足够快
* 1 亿个活跃用户
* 每天新发布 5 亿条推特，每月新发布 150 亿条推特
    * 平均每条推特需要推送给 5 个人
    * 每天需要进行 50 亿次推送
    * 每月需要进行 1500 亿次推送
* 每月需要处理 2500 亿次读取请求
* 每月需要处理 100 亿次搜索

时间轴功能

* 浏览时间轴需要足够快
* 推特的读取负载要大于写入负载
    * 需要为推特的快速读取进行优化
* 存入推特是高写入负载功能

搜索功能

* 搜索速度需要足够快
* 搜索是高负载读取功能

#### 计算用量

**如果你需要进行粗略的用量计算，请向你的面试官说明。**

* 每条推特的大小：
    * `tweet_id` - 8 字节
    * `user_id` - 32 字节
    * `text` - 140 字节
    * `media` - 平均 10 KB
    * 总计： 大约 10 KB
* 每月产生新推特的内容为 150 TB
    * 每条推特 10 KB  * 每天 5 亿条推特 * 每月 30 天
    * 3 年产生新推特的内容为 5.4 PB
* 每秒需要处理 10 万次读取请求
    * 每个月需要处理 2500 亿次请求 * (每秒 400 次请求 / 每月 10 亿次请求)
* 每秒发布 6000 条推特
    * 每月发布 150 亿条推特 * (每秒 400 次请求 / 每月 10 次请求)
* 每秒推送 6 万条推特
    * 每月推送 1500 亿条推特 * (每秒 400 次请求 / 每月 10 亿次请求)
* 每秒 4000 次搜索请求

便利换算指南：

* 每个月有 250 万秒
* 每秒一个请求 = 每个月 250 万次请求
* 每秒 40 个请求 = 每个月 1 亿次请求
* 每秒 400 个请求 = 每个月 10 亿次请求

## 第二步：概要设计

> 列出所有重要组件以规划概要设计。

![Imgur](http://i.imgur.com/48tEA2j.png)

## 第三步：设计核心组件

> 深入每个核心组件的细节。

### 用例：用户发表了一篇推特

我们可以将用户自己发表的推特存储在[关系数据库](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms)中。我们也可以讨论一下[究竟是用 SQL 还是用 NoSQL](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-还是-nosql)。

构建用户主页时间轴（查看关注用户的活动）以及推送推特是件麻烦事。将特推传播给所有关注者（每秒约递送 6 万条推特）这一操作有可能会使传统的[关系数据库](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms)超负载。因此，我们可以使用 **NoSQL 数据库**或**内存数据库**之类的更快的数据存储方式。从内存读取 1 MB 连续数据大约要花 250 微秒，而从 SSD 读取同样大小的数据要花费 4 倍的时间，从机械硬盘读取需要花费 80 倍以上的时间。<sup><a href=https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#每个程序员都应该知道的延迟数>1</a></sup>

我们可以将照片、视频之类的媒体存储于**对象存储**中。

* **客户端**向应用[反向代理](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server)的**Web 服务器**发送一条推特
* **Web 服务器**将请求转发给**写 API**服务器
* **写 API**服务器将推特使用 **SQL 数据库**存储于用户时间轴中
* **写 API**调用**消息输出服务**，进行以下操作：
    * 查询**用户 图 服务**找到存储于**内存缓存**中的此用户的粉丝
    * 将推特存储于**内存缓存**中的**此用户的粉丝的主页时间轴**中
        * O(n) 复杂度操作：  1000 名粉丝 = 1000 次查找与插入
    * 将特推存储在**搜索索引服务**中，以加快搜索
    * 将媒体存储于**对象存储**中
    * 使用**通知服务**向粉丝发送推送：
        * 使用**队列**异步推送通知

**向你的面试官告知你准备写多少代码**。

如果我们用 Redis 作为**内存缓存**，那可以用 Redis 原生的 list 作为其数据结构。结构如下：

```
           tweet n+2                   tweet n+1                   tweet n
| 8 bytes   8 bytes  1 byte | 8 bytes   8 bytes  1 byte | 8 bytes   8 bytes  1 byte |
| tweet_id  user_id  meta   | tweet_id  user_id  meta   | tweet_id  user_id  meta   |
```

新发布的推特将被存储在对应用户（关注且活跃的用户）的主页时间轴的**内存缓存**中。

我们可以调用一个公共的 [REST API](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#表述性状态转移rest)：

```
$ curl -X POST --data '{ "user_id": "123", "auth_token": "ABC123", \
    "status": "hello world!", "media_ids": "ABC987" }' \
    https://twitter.com/api/v1/tweet
```

返回：

```
{
    "created_at": "Wed Sep 05 00:37:15 +0000 2012",
    "status": "hello world!",
    "tweet_id": "987",
    "user_id": "123",
    ...
}
```

而对于服务器内部的通信，我们可以使用 [RPC](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#远程过程调用协议rpc)。

### 用例：用户浏览主页时间轴

* **客户端**向 **Web 服务器**发起一次读取主页时间轴的请求
* **Web 服务器**将请求转发给**读取 API**服务器
* **读取 API**服务器调用**时间轴服务**进行以下操作：
    * 从**内存缓存**读取时间轴数据，其中包括推特 id 与用户 id - O(1)
    * 通过 [multiget](http://redis.io/commands/mget) 向**推特信息服务**进行查询，以获取相关 id 推特的额外信息 - O(n)
    * 通过 muiltiget 向**用户信息服务**进行查询，以获取相关 id 用户的额外信息 - O(n)

REST API：

```
$ curl https://twitter.com/api/v1/home_timeline?user_id=123
```

返回：

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

### 用例：用户浏览用户时间轴

* **客户端**向**Web 服务器**发起获得用户时间线的请求
* **Web 服务器**将请求转发给**读取 API**服务器
* **读取 API**从 **SQL 数据库**中取出用户的时间轴

REST API 与前面的主页时间轴类似，区别只在于取出的推特是由用户自己发送而不是关注人发送。

### 用例：用户搜索关键词

* **客户端**将搜索请求发给**Web 服务器**
* **Web 服务器**将请求转发给**搜索 API**服务器
* **搜索 API**调用**搜索服务**进行以下操作：
    * 对输入进行转换与分词，弄明白需要搜索什么东西
        * 移除标点等额外内容
        * 将文本打散为词组
        * 修正拼写错误
        * 规范字母大小写
        * 将查询转换为布尔操作
    * 查询**搜索集群**（例如[Lucene](https://lucene.apache.org/)）检索结果：
        * 对集群内的所有服务器进行查询，将有结果的查询进行[发散聚合（Scatter gathers）](https://github.com/donnemartin/system-design-primer#under-development)
        * 合并取到的条目，进行评分与排序，最终返回结果

REST API：

```
$ curl https://twitter.com/api/v1/search?query=hello+world
```

返回结果与前面的主页时间轴类似，只不过返回的是符合查询条件的推特。

## 第四步：架构扩展

> 根据限制条件，找到并解决瓶颈。

![Imgur](http://i.imgur.com/MzExP06.png)

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
* [一致性模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#一致性模式)
* [可用性模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#可用性模式)

**消息输出服务**有可能成为性能瓶颈。那些有着百万数量关注着的用户可能发一条推特就需要好几分钟才能完成消息输出进程。这有可能使 @回复 这种推特时出现竞争条件，因此需要根据服务时间对此推特进行重排序来降低影响。

我们还可以避免从高关注量的用户输出推特。相反，我们可以通过搜索来找到高关注量用户的推特，并将搜索结果与用户的主页时间轴合并，再根据时间对其进行排序。

此外，还可以通过以下内容进行优化：

* 仅为每个主页时间轴在**内存缓存**中存储数百条推特
* 仅在**内存缓存**中存储活动用户的主页时间轴
    * 如果某个用户在过去 30 天都没有产生活动，那我们可以使用 **SQL 数据库**重新构建他的时间轴
        * 使用**用户 图 服务**来查询并确定用户关注的人
        * 从 **SQL 数据库**中取出推特，并将它们存入**内存缓存**
* 仅在**推特信息服务**中存储一个月的推特
* 仅在**用户信息服务**中存储活动用户的信息
* **搜索集群**需要将推特保留在内存中，以降低延迟

我们还可以考虑优化 **SQL 数据库** 来解决一些瓶颈问题。

**内存缓存**能减小一些数据库的负载，靠 **SQL Read 副本**已经足够处理缓存未命中情况。我们还可以考虑使用一些额外的 SQL 性能拓展技术。

高容量的写入将淹没单个的 **SQL 写主从**模式，因此需要更多的拓展技术。

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
