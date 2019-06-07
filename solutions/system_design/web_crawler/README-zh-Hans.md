# 设计一个网页爬虫

**Note: 为了避免重复，当前文档直接链接到[系统设计主题](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#系统设计主题的索引)的相关区域，请参考链接内容以获得综合的讨论点、权衡和替代方案。**

## 第一步：概述用例和约束

> 收集这个问题的需求和范畴。
> 问相关问题来明确用例和约束。
> 讨论一些假设。

因为没有面试官来明确这些问题，所以我们自己将定义一些用例和约束。

### 用例

#### 我们将问题的范畴限定在如下用例

* **服务** 爬取一个 url 列表：
  * 为包含搜索项的页面生成单词的反向索引
  * 生成页面的标题和摘要
    * 标题和摘要是静态的，它们不会根据搜索查询进行更改
* **用户** 输入搜索词并查看包含爬网程序生成的标题和摘要的相关页面列表
  * 仅为此用例绘制高级组件和交互，无需深入研究
* **服务** 需要高可用

#### 超出范畴的用例

* 搜索分析
* 个性化搜索结果
* 网页排名

### 约束和假设

#### 状态假设

* 流量不是均匀分布的
  * 有些搜索非常频繁，而其他搜索只执行一次
* 仅支持匿名用户
* 应该很快生成搜索结果
* 网页爬虫不应该陷入无限循环
  * 如果图形包含循环，我们会陷入无限循环
* 10 亿个链接爬取
  * 需要定期爬取页面以确保新鲜度
  * 平均刷新率约为每周一次，对于热门网站更为频繁
    * 每月爬取 40 亿个链接
  * 每个网页的平均存储大小：500 KB
    * 为简单起见，计数更改与新页面相同
* 每月 1000 亿次搜索

使用更传统的系统 - 不要使用 [solr](http://lucene.apache.org/solr/) 或 [nutch](http://nutch.apache.org/) 等现有系统。

#### 计算使用

**如果您应该运行背信息使用计算，请与您的面试官澄清。**

* 每个月存储页面内容 2 PB
  * 每个页面 500 KB * 每个月爬取 40 亿个链接
  * 在3年内存储的页面内容为 72 PB
* 每秒 1,600 次写请求
* 每秒 40,000 次搜索请求

方便的转换指南：

* 每月 250 万秒
* 每秒1个请求=每月 250 万个请求
* 每秒40个请求=每月 1 亿个请求
* 每秒400个请求=每月 10 亿个请求

## 第二步：创建一个高层次设计

> 概述一个包括所有重要的组件的高层次设计

![Imgur](http://i.imgur.com/xjdAAUv.png)

## 第三步：设计核心组件

> 深入每一个核心组件的细节

### 用例：服务爬取一个网址列表

假设我们有一个最初根据整体网站流行度排名的 `links_to_crawl` 列表。 如果这不是一个合理的假设，我们可以使用链接到外部内容（如 [Yahoo](https://www.yahoo.com/)，[DMOZ](http://www.dmoz.org/) 等）的热门网站为爬虫播种。

我们将使用表 `crawled_links` 来存储已处理的链接及其页面签名。

我们可以将 `links_to_crawl` 和 `crawled_links` 存储在键值 **NoSQL Database** 中。 对于 `links_to_crawl` 中的排名链接，我们可以使用 [Redis](https://redis.io/) 和排序集来维护页面链接的排名。我们应该讨论[选择 SQL 或 NoSQL 之间的用例和权衡](https://github.com/donnemartin/system-design-primer#sql-or-nosql)。

* **爬虫服务**通过下面的循环处理每一个页面链接：
  * 采用排名靠前的页面链接进行爬取
    * 检查 **NoSQL Database** 中的 `crawled_links` 以获取具有类似页签名的条目
      * 如果我们有类似的页面，则降低页面链接的优先级
        * 这可以防止我们进入一个循环
        * 继续执行
      * 否则, 爬取这个链接
        * 将一个任务添加到**反向索引服务**队列以生成[反向索引](https://en.wikipedia.org/wiki/Search_engine_indexing)
        * 将一个任务添加到**文档服务**队列以生成一个静态标题和摘要
        * 生成页面的签名
        * 把这个链接从 **NoSQL Database** 中的 `links_to_crawl` 删除
        * 将页面链接和签名插入 **NoSQL Database** 中的 `crawled_links`

**向面试官阐明你需要写多少代码**

`PagesDataStore` 是**爬虫服务**中使用 **NoSQL Database** 的抽象：

```python
class PagesDataStore(object):

    def __init__(self, db);
        self.db = db
        ...

    def add_link_to_crawl(self, url):
        """Add the given link to `links_to_crawl`."""
        ...

    def remove_link_to_crawl(self, url):
        """Remove the given link from `links_to_crawl`."""
        ...

    def reduce_priority_link_to_crawl(self, url):
        """Reduce the priority of a link in `links_to_crawl` to avoid cycles."""
        ...

    def extract_max_priority_page(self):
        """Return the highest priority link in `links_to_crawl`."""
        ...

    def insert_crawled_link(self, url, signature):
        """Add the given link to `crawled_links`."""
        ...

    def crawled_similar(self, signature):
        """Determine if we've already crawled a page matching the given signature"""
        ...
```

`Page` 是**爬虫服务**中的一个抽象，它封装了一个页面，以及它的内容，子URL和签名：

```python
class Page(object):

    def __init__(self, url, contents, child_urls, signature):
        self.url = url
        self.contents = contents
        self.child_urls = child_urls
        self.signature = signature
```

`Crawler` 是**爬虫服务**中的主要类，由 `Page` 和 `PagesDataStore` 组成。

```python
class Crawler(object):

    def __init__(self, data_store, reverse_index_queue, doc_index_queue):
        self.data_store = data_store
        self.reverse_index_queue = reverse_index_queue
        self.doc_index_queue = doc_index_queue

    def create_signature(self, page):
        """Create signature based on url and contents."""
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

### 处理重复

我们需要注意网络爬虫不会陷入无限循环，这会在当图形包含一个循环时发生。

**向面试官阐明你需要写多少代码**

我们要删除重复的网址：

* 对于较小的列表，我们可以使用类似排序的 `sort | unique`
* 有 10 亿个链接爬取，我们可以使用 **MapReduce** 来只输出频率为 1 的条目

```python
class RemoveDuplicateUrls(MRJob):

    def mapper(self, _, line):
        yield line, 1

    def reducer(self, key, values):
        total = sum(values)
        if total == 1:
            yield key, total
```

检测重复内容更复杂。 我们可以根据页面内容生成签名，并比较这两个签名的相似性。 一些潜在的算法是 [雅克卡指数](https://en.wikipedia.org/wiki/Jaccard_index) 和[余弦相似度](https://en.wikipedia.org/wiki/Cosine_similarity)。

### 确定何时更新爬取结果

需要定期爬取页面以确保新鲜度。 爬取结果可能有一个 `timestamp` 字段，表示爬取页面的最后时间。 在默认时间段（例如一周）之后，应刷新所有页面。 经常更新或更受欢迎的网站可以在较短的时间间隔内刷新。

虽然我们不会深入研究分析的细节，但我们可以进行一些数据挖掘以确定特定页面更新之前的平均时间，并使用该统计信息来确定重新爬取页面的频率。

我们也可能选择支持一个 `Robots.txt` 文件，该文件可让网站管理员控制爬取频率。

### 用例：用户输入搜索词并查看带有标题和摘要的相关页面列表

* **客户端**发送一个请求到作为一个[反向代理](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#反向代理web-服务器)启动的 **Web 服务器**
* **Web 服务器** 转发请求给 **查询接口** 服务器
* **查询接口** 服务器执行如下操作：
  * 解析这个查询
    * 删除标记
    * 将文本分解为术语
    * 处理拼写错误
    * 规范化大写
    * 将查询转换为使用布尔运算
  * 使用**反向索引服务**查找与查询匹配的文档
    * **反向索引服务**对匹配结果进行排名并返回最高结果
    * 使用**文档服务**返回标题和摘要

我们将会用一个公开的 [**REST 风格接口**](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#表述性状态转移rest)：

```shell
$ curl https://search.com/api/v1/search?query=hello+world
```

Response:

```json
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

用于内部通信，我们可以用 [RPC](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#远程过程调用协议rpc)。

## 第四步：扩展这个设计

> 基于给定的约束条件，确定并解决瓶颈问题。

![Imgur](http://i.imgur.com/bWxPtQA.png)

**重要提示: 不要简单的从最初的设计直接跳到最终的设计**

说明您将迭代地执行这样的操作：1)**Benchmark/Load 测试**，2)**Profile** 出瓶颈，3)在评估替代方案和权衡时解决瓶颈，4)重复前面，可以参考[在 AWS 上设计一个可以支持百万用户的系统](../scaling_aws/README.md)这个用来解决如何迭代地扩展初始设计的例子。

重要的是讨论在初始设计中可能遇到的瓶颈，以及如何解决每个瓶颈。比如，在多个 **Web 服务器**上添加**负载平衡器**可以解决哪些问题？**CDN** 解决哪些问题？**主从复制** 解决哪些问题? 替代方案是什么和怎么对每一个替代方案进行权衡比较？

我们将介绍一些组件来完成设计，并解决可伸缩性问题。内部的负载平衡器并不能减少杂乱。

**为了避免重复的讨论**， 参考以下[系统设计主题](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#系统设计主题的索引)获取主要讨论要点、权衡和替代方案：

* [DNS](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#域名系统)
* [负载均衡器](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#负载均衡器)
* [水平扩展](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#水平扩展)
* [反向代理（web 服务器）](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#反向代理web-服务器)
* [应用层](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#应用层)
* [缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#缓存)
* [NoSQL](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#nosql)
* [一致性模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#一致性模式)
* [可用性模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#可用性模式)

有些搜索非常受欢迎，而其他搜索只执行一次。 流行查询可以从内存缓存**（例如 Redis 或 Memcached）提供，以减少响应时间并避免重载**反向索引服务**和**文档服务**。**内存缓存**对于处理不均匀分布的流量和流量峰值也很有用。 从内存顺序读取 1 MB 大约需要 250 微秒，而从 SSD 读取需要 4 倍，而从磁盘读取需要 80 倍。<sup><a href=https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#每个程序员都应该知道的延迟数>1</a></sup>

以下是对**爬取服务**的一些其他优化：

* 为了要处理数据大小和请求负载，**反向索引服务**和**文档服务**可能需要大量使用分片和复制
* DNS 查找可能是一个瓶颈，**爬虫服务**可以保留自己定期刷新的 DNS 查找
* **爬虫服务**可以通过一次保持多个开放连接来提高性能并减少内存使用，称为[连接池](https://en.wikipedia.org/wiki/Connection_pool)
  * 切换到 [UDP](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#用户数据报协议udp) 也可以提高性能
* 网页爬取是带宽密集型的，确保有足够的带宽来维持高吞吐量

## 额外的话题

> 是否更深入探讨额外主题，取决于问题的范围和面试剩余的时间。

### SQL 扩展模式

* [读副本](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#主从复制)
* [联合](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#联合)
* [分片](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#分片)
* [非规范化](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#非规范化)
* [SQL调优](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-调优)

### NoSQL

* [键值存储](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#键-值存储)
* [文档存储](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#文档类型存储)
* [列型存储](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#列型存储)
* [图数据库](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#图数据库)
* [sql 还是 nosql](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-还是-nosql)

### 缓存

* 在哪缓存
  * [客户端缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#客户端缓存)
  * [CDN 缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#cdn-缓存)
  * [Web 服务器缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#web-服务器缓存)
  * [数据库缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#数据库缓存)
  * [应用缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#应用缓存)
* 缓存什么
  * [数据库查询级别的缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#数据库查询级别的缓存)
  * [对象级别的缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#对象级别的缓存)
* 何时更新缓存
  * [缓存模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#缓存模式)
  * [直写模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#直写模式)
  * [回写模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#回写模式)
  * [刷新](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#刷新)

### 异步和微服务

* [消息队列](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#消息队列)
* [任务队列](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#任务队列)
* [背压](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#背压)
* [微服务](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#微服务)

### 通信

* 讨论权衡:
  * 跟客户端之间的外部通信 - [HTTP APIs following REST](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#表述性状态转移rest)
  * 内部通信 - [RPC](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#远程过程调用协议rpc)
* [服务发现](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#服务发现)

### 安全

参考[安全](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#安全)。

### 延迟数字

见[每个程序员都应该知道的延迟数](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#每个程序员都应该知道的延迟数)。

### 持续进行

* 继续对系统进行基准测试和监控，以在瓶颈出现时解决它们
* 扩展是一个迭代的过程
