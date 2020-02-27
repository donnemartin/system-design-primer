# 设计一个网页爬虫

**注意：这个文档中的链接会直接指向[系统设计主题索引](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#系统设计主题的索引)中的有关部分，以避免重复的内容。你可以参考链接的相关内容，来了解其总的要点、方案的权衡取舍以及可选的替代方案。**

## 第一步：简述用例与约束条件

> 把所有需要的东西聚集在一起，审视问题。不停的提问，以至于我们可以明确使用场景和约束。讨论假设。

我们将在没有面试官明确说明问题的情况下，自己定义一些用例以及限制条件。

### 用例

#### 我们把问题限定在仅处理以下用例的范围中

* **服务** 抓取一系列链接：
    * 生成包含搜索词的网页倒排索引
    * 生成页面的标题和摘要信息
        * 页面标题和摘要都是静态的，它们不会根据搜索词改变
* **用户** 输入搜索词后，可以看到相关的搜索结果列表，列表每一项都包含由网页爬虫生成的页面标题及摘要
    * 只给该用例绘制出概要组件和交互说明，无需讨论细节
* **服务** 具有高可用性

#### 无需考虑

* 搜索分析
* 个性化搜索结果
* 页面排名

### 限制条件与假设

#### 提出假设

* 搜索流量分布不均
    * 有些搜索词非常热门，有些则非常冷门
* 只支持匿名用户
* 用户很快就能看到搜索结果
* 网页爬虫不应该陷入死循环
    * 当爬虫路径包含环的时候，将会陷入死循环
* 抓取 10 亿个链接
    * 要定期重新抓取页面以确保新鲜度
    * 平均每周重新抓取一次，网站越热门，那么重新抓取的频率越高
        * 每月抓取 40 亿个链接
    * 每个页面的平均存储大小：500 KB
        * 简单起见，重新抓取的页面算作新页面
* 每月搜索量 1000 亿次

用更传统的系统来练习 —— 不要使用 [solr](http://lucene.apache.org/solr/) 、[nutch](http://nutch.apache.org/) 之类的现成系统。

#### 计算用量

**如果你需要进行粗略的用量计算，请向你的面试官说明。**

* 每月存储 2 PB 页面
    * 每月抓取 40 亿个页面，每个页面 500 KB
    * 三年存储 72 PB 页面
* 每秒 1600 次写请求
* 每秒 40000 次搜索请求

简便换算指南：

* 一个月有 250 万秒
* 每秒 1 个请求，即每月 250 万个请求
* 每秒 40 个请求，即每月 1 亿个请求
* 每秒 400 个请求，即每月 10 亿个请求

## 第二步： 概要设计

> 列出所有重要组件以规划概要设计。

![Imgur](http://i.imgur.com/xjdAAUv.png)

## 第三步：设计核心组件

> 对每一个核心组件进行详细深入的分析。

### 用例：爬虫服务抓取一系列网页

假设我们有一个初始列表 `links_to_crawl`（待抓取链接），它最初基于网站整体的知名度来排序。当然如果这个假设不合理，我们可以使用 [Yahoo](https://www.yahoo.com/)、[DMOZ](http://www.dmoz.org/) 等知名门户网站作为种子链接来进行扩散 。

我们将用表 `crawled_links` （已抓取链接 ）来记录已经处理过的链接以及相应的页面签名。

我们可以将 `links_to_crawl` 和 `crawled_links` 记录在键-值型 **NoSQL 数据库**中。对于 `crawled_links` 中已排序的链接，我们可以使用 [Redis](https://redis.io/) 的有序集合来维护网页链接的排名。我们应当在 [选择 SQL 还是 NoSQL 的问题上，讨论有关使用场景以及利弊 ](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-还是-nosql)。

*  **爬虫服务**按照以下流程循环处理每一个页面链接：
    * 选取排名最靠前的待抓取链接
        * 在  **NoSQL 数据库**的 `crawled_links` 中，检查待抓取页面的签名是否与某个已抓取页面的签名相似
            * 若存在，则降低该页面链接的优先级
                * 这样做可以避免陷入死循环
                * 继续（进入下一次循环）
            * 若不存在，则抓取该链接
                * 在**倒排索引服务**任务队列中，新增一个生成[倒排索引](https://en.wikipedia.org/wiki/Search_engine_indexing)任务。
                * 在**文档服务**任务队列中，新增一个生成静态标题和摘要的任务。
                * 生成页面签名
                * 在 **NoSQL 数据库**的 `links_to_crawl` 中删除该链接
                * 在 **NoSQL 数据库**的 `crawled_links` 中插入该链接以及页面签名

**向面试官了解你需要写多少代码**。

`PagesDataStore` 是**爬虫服务**中的一个抽象类，它使用 **NoSQL 数据库**进行存储。

```python
class PagesDataStore(object):

    def __init__(self, db);
        self.db = db
        ...

    def add_link_to_crawl(self, url):
        """将指定链接加入 `links_to_crawl`。"""
        ...

    def remove_link_to_crawl(self, url):
        """从 `links_to_crawl` 中删除指定链接。"""
        ...

    def reduce_priority_link_to_crawl(self, url)
        """在 `links_to_crawl` 中降低一个链接的优先级以避免死循环。"""
        ...

    def extract_max_priority_page(self):
        """返回 `links_to_crawl` 中优先级最高的链接。"""
        ...

    def insert_crawled_link(self, url, signature):
        """将指定链接加入 `crawled_links`。"""
        ...

    def crawled_similar(self, signature):
        """判断待抓取页面的签名是否与某个已抓取页面的签名相似。"""
        ...
```

`Page` 是**爬虫服务**的一个抽象类，它封装了网页对象，由页面链接、页面内容、子链接和页面签名构成。

```python
class Page(object):

    def __init__(self, url, contents, child_urls, signature):
        self.url = url
        self.contents = contents
        self.child_urls = child_urls
        self.signature = signature
```

`Crawler` 是**爬虫服务**的主类，由`Page` 和 `PagesDataStore` 组成。

```python
class Crawler(object):

    def __init__(self, data_store, reverse_index_queue, doc_index_queue):
        self.data_store = data_store
        self.reverse_index_queue = reverse_index_queue
        self.doc_index_queue = doc_index_queue

    def create_signature(self, page):
        """基于页面链接与内容生成签名。"""
        ...

    def crawl_page(self, page):
        for url in page.child_urls:
            self.data_store.add_link_to_crawl(url)
        page.signature = self.create_signature(page)
        self.data_store.remove_link_to_crawl(page.url)
        self.data_store.insert_crawled_link(page.url, page.signature)

    def crawl(self):
        while True:
            page = self.data_store.extract_max_priority_page()
            if page is None:
                break
            if self.data_store.crawled_similar(page.signature):
                self.data_store.reduce_priority_link_to_crawl(page.url)
            else:
                self.crawl_page(page)
```

### 处理重复内容

我们要谨防网页爬虫陷入死循环，这通常会发生在爬虫路径中存在环的情况。

**向面试官了解你需要写多少代码**.

删除重复链接：

* 假设数据量较小，我们可以用类似于 `sort | unique` 的方法。（译注： 先排序，后去重）
* 假设有 10 亿条数据，我们应该使用 **MapReduce** 来输出只出现 1 次的记录。

```python
class RemoveDuplicateUrls(MRJob):

    def mapper(self, _, line):
        yield line, 1

    def reducer(self, key, values):
        total = sum(values)
        if total == 1:
            yield key, total
```

比起处理重复内容，检测重复内容更为复杂。我们可以基于网页内容生成签名，然后对比两者签名的相似度。可能会用到的算法有 [Jaccard index](https://en.wikipedia.org/wiki/Jaccard_index) 以及 [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity)。

### 抓取结果更新策略

要定期重新抓取页面以确保新鲜度。抓取结果应该有个 `timestamp` 字段记录上一次页面抓取时间。每隔一段时间，比如说 1 周，所有页面都需要更新一次。对于热门网站或是内容频繁更新的网站，爬虫抓取间隔可以缩短。

尽管我们不会深入网页数据分析的细节，我们仍然要做一些数据挖掘工作来确定一个页面的平均更新时间，并且根据相关的统计数据来决定爬虫的重新抓取频率。

当然我们也应该根据站长提供的 `Robots.txt` 来控制爬虫的抓取频率。

### 用例：用户输入搜索词后，可以看到相关的搜索结果列表，列表每一项都包含由网页爬虫生成的页面标题及摘要

*  **客户端**向运行[反向代理](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#反向代理web-服务器)的 **Web 服务器**发送一个请求
* **Web 服务器** 发送请求到 **Query API** 服务器
* **查询 API** 服务将会做这些事情：
    * 解析查询参数
        * 删除 HTML 标记
        * 将文本分割成词组 （译注： 分词处理）
        * 修正错别字
        * 规范化大小写
        * 将搜索词转换为布尔运算
    * 使用**倒排索引服务**来查找匹配查询的文档
        * **倒排索引服务**对匹配到的结果进行排名，然后返回最符合的结果
    * 使用**文档服务**返回文章标题与摘要

我们使用  [**REST API**](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#表述性状态转移rest) 与客户端通信：

```
$ curl https://search.com/api/v1/search?query=hello+world
```

响应内容:

```
{
    "title": "foo's title",
    "snippet": "foo's snippet",
    "link": "https://foo.com",
},
{
    "title": "bar's title",
    "snippet": "bar's snippet",
    "link": "https://bar.com",
},
{
    "title": "baz's title",
    "snippet": "baz's snippet",
    "link": "https://baz.com",
},
```

对于服务器内部通信，我们可以使用 [远程过程调用协议（RPC）](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#远程过程调用协议rpc)


## 第四步：架构扩展

> 根据限制条件，找到并解决瓶颈。

![Imgur](http://i.imgur.com/bWxPtQA.png)

**重要提示：不要直接从最初设计跳到最终设计！**

现在你要 1) **基准测试、负载测试**。2) **分析、描述**性能瓶颈。3) 在解决瓶颈问题的同时，评估替代方案、权衡利弊。4) 重复以上步骤。请阅读[设计一个系统，并将其扩大到为数以百万计的 AWS 用户服务](../scaling_aws/README.md) 来了解如何逐步扩大初始设计。

讨论初始设计可能遇到的瓶颈及相关解决方案是很重要的。例如加上一套配备多台 **Web 服务器**的**负载均衡器**是否能够解决问题？**CDN**呢？**主从复制**呢？它们各自的替代方案和需要**权衡**的利弊又有哪些呢？

我们将会介绍一些组件来完成设计，并解决架构规模扩张问题。内置的负载均衡器将不做讨论以节省篇幅。

**为了避免重复讨论**，请参考[系统设计主题索引](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#系统设计主题的索引)相关部分来了解其要点、方案的权衡取舍以及替代方案。

* [DNS](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#域名系统)
* [负载均衡器](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#负载均衡器)
* [水平扩展](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#水平扩展)
* [Web 服务器（反向代理）](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#反向代理web-服务器)
* [API 服务器（应用层）](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#应用层)
* [缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#缓存)
* [NoSQL](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#nosql)
* [一致性模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#一致性模式)
* [可用性模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#可用性模式)

有些搜索词非常热门，有些则非常冷门。热门的搜索词可以通过诸如 Redis 或者 Memcached 之类的**内存缓存**来缩短响应时间，避免**倒排索引服务**以及**文档服务**过载。**内存缓存**同样适用于流量分布不均匀以及流量短时高峰问题。从内存中读取 1 MB  连续数据大约需要 250 微秒，而从 SSD 读取同样大小的数据要花费 4 倍的时间，从机械硬盘读取需要花费 80 倍以上的时间。<sup><a href="https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#每个程序员都应该知道的延迟数">1</a></sup>


以下是优化**爬虫服务**的其他建议：

* 为了处理数据大小问题以及网络请求负载，**倒排索引服务**和**文档服务**可能需要大量应用数据分片和数据复制。
* DNS 查询可能会成为瓶颈，**爬虫服务**最好专门维护一套定期更新的 DNS 查询服务。
* 借助于[连接池](https://en.wikipedia.org/wiki/Connection_pool)，即同时维持多个开放网络连接，可以提升**爬虫服务**的性能并减少内存使用量。
    * 改用 [UDP](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#用户数据报协议udp) 协议同样可以提升性能
* 网络爬虫受带宽影响较大，请确保带宽足够维持高吞吐量。

## 其它要点

> 是否深入这些额外的主题，取决于你的问题范围和剩下的时间。

### SQL 扩展模式

* [读取复制](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#主从复制)
* [联合](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#联合)
* [分片](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#分片)
* [非规范化](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#非规范化)
* [SQL 调优](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-调优)

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
    * 内部通信 - [RPC](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#远程过程调用协议rpc)
* [服务发现](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#服务发现)


### 安全性

请参阅[安全](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#安全)。


### 延迟数值

请参阅[每个程序员都应该知道的延迟数](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#每个程序员都应该知道的延迟数)。

### 持续探讨

* 持续进行基准测试并监控你的系统，以解决他们提出的瓶颈问题。
* 架构扩展是一个迭代的过程。
