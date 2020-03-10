# 设计 Pastebin.com（或 Bit.ly）

**注意：这个文档中的链接会直接指向[系统设计主题索引](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#系统设计主题的索引)中的有关部分，以避免重复的内容。你可以参考链接的相关内容，来了解其总的要点、方案的权衡取舍以及可选的替代方案。**

除了粘贴板需要存储的是完整的内容而不是短链接之外，**设计 Bit.ly**是与本文类似的一个问题。

## 第一步：简述用例与约束条件

> 搜集需求与问题的范围。
> 提出问题来明确用例与约束条件。
> 讨论假设。

我们将在没有面试官明确说明问题的情况下，自己定义一些用例以及限制条件。

### 用例

#### 我们将把问题限定在仅处理以下用例的范围中


* **用户**输入一些文本，然后得到一个随机生成的链接
    * 过期时间
        * 默认为永不过期
        * 可选设置为一定时间过期
* **用户**输入粘贴板中的 url，查看内容
* **用户**是匿名访问的
* **服务**需要能够对页面进行跟踪分析
    * 月访问量统计
* **服务**将过期的内容删除
* **服务**有着高可用性

#### 不在用例范围内的有

* **用户**注册了账号
    * **用户**通过了邮箱验证
* **用户**登录已注册的账号
    * **用户**编辑他们的文档
* **用户**能设置他们的内容是否可见
* **用户**是否能自行设置短链接

### 限制条件与假设

#### 提出假设

* 网络流量不是均匀分布的
* 生成短链接的速度必须要快
* 只允许粘贴文本
* 不需要对页面预览做实时分析
* 1000 万用户
* 每个月 1000 万次粘贴
* 每个月 1 亿次读取请求
* 10:1 的读写比例

#### 计算用量

**如果你需要进行粗略的用量计算，请向你的面试官说明。**

* 每次粘贴的用量
    * 1 KB 的内容
    * `shortlink` - 7 字节
    * `expiration_length_in_minutes` - 4 字节
    * `created_at` - 5 字节
    * `paste_path` - 255 字节
    * 总计：大约 1.27 KB
* 每个月的粘贴造作将会产生 12.7 GB 的记录
    * 每次粘贴 1.27 KB * 1000 万次粘贴
    * 3年内大约产生了 450 GB 的新内容记录
    * 3年内生成了 36000 万个短链接
    * 假设大多数的粘贴操作都是新的粘贴而不是更新以前的粘贴内容
* 平均每秒 4 次读取粘贴
* 平均每秒 40 次读取粘贴请求

便利换算指南：

* 每个月有 250 万秒
* 每秒一个请求 = 每个月 250 万次请求
* 每秒 40 个请求 = 每个月 1 亿次请求
* 每秒 400 个请求 = 每个月 10 亿次请求

## 第二步：概要设计

> 列出所有重要组件以规划概要设计。

![Imgur](http://i.imgur.com/BKsBnmG.png)

## 第三步：设计核心组件

> 深入每个核心组件的细节。

### 用例：用户输入一些文本，然后得到一个随机生成的链接

我们将使用[关系型数据库](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#关系型数据库管理系统rdbms)，将其作为一个超大哈希表，将生成的 url 和文件服务器上对应文件的路径一一对应。

我们可以使用诸如 Amazon S3 之类的**对象存储服务**或者[NoSQL](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#nosql)来代替自建文件服务器。

除了使用关系型数据库来作为一个超大哈希表之外，我们也可以使用[NoSQL](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#nosql)来代替它。[究竟是用 SQL 还是用 NoSQL](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-还是-nosql)。不过在下面的讨论中，我们默认选择了使用关系型数据库的方案。

* **客户端**向向运行[反向代理](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#反向代理web-服务器)的 **Web 服务器**发送一个粘贴请求
* **Web 服务器** 将请求转发给**Write API** 服务
* **Write API**服务将会：
    * 生成一个独一无二的 url
        * 通过在 **SQL 数据库**中查重来确认这个 url 是否的确独一无二
        * 如果这个 url 已经存在了，重新生成一个 url
        * 如果支持自定义 url，我们也可以使用用户提供的 url（也需要进行查重）
    * 将 url 存入 **SQL 数据库**的 `pastes` 表中
    * 将粘贴的数据存入**对象存储**系统中
    * 返回 url

**向你的面试官告知你准备写多少代码**。

`pastes` 表的数据结构如下：

```
shortlink char(7) NOT NULL
expiration_length_in_minutes int NOT NULL
created_at datetime NOT NULL
paste_path varchar(255) NOT NULL
PRIMARY KEY(shortlink)
```

我们会以`shortlink` 与 `created_at` 创建一个 [索引](https://github.com/donnemartin/system-design-primer#use-good-indices)以加快查询速度（只需要使用读取日志的时间，不再需要每次都扫描整个数据表）并让数据常驻内存。从内存读取 1 MB 连续数据大约要花 250 微秒，而从 SSD 读取同样大小的数据要花费 4 倍的时间，从机械硬盘读取需要花费 80 倍以上的时间。<sup><a href=https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#每个程序员都应该知道的延迟数>1</a></sup>

为了生成独一无二的 url，我们需要：

* 对用户的 IP 地址 + 时间戳进行 [**MD5**](https://en.wikipedia.org/wiki/MD5) 哈希编码
    * MD5 是一种非常常用的哈希化函数，它能生成 128 字节的哈希值
    * MD5 是均匀分布的
    * 另外，我们可以使用 MD5 哈希算法来生成随机数据
* 对 MD5 哈希值进行 [**Base 62**](https://www.kerstner.at/2012/07/shortening-strings-using-base-62-encoding/) 编码
    * Base 62 编码后的值由 `[a-zA-Z0-9]` 组成，它们可以直接作为 url 的字符，不需要再次转义
    * 在这儿仅仅只对原始输入进行过一次哈希处理，Base 62 编码步骤是确定性的（不涉及随机性）
    * Base 64 是另一种很流行的编码形式，但是它生成的字符串作为 url 存在一些问题：Base 64m字符串内包含 `+` 和 `/` 符号
    * 下面的 [Base 62 pseudocode](http://stackoverflow.com/questions/742013/how-to-code-a-url-shortener) 算法时间复杂度为 O(k)，本例中取 num =7，即 k 值为 7：

```python
def base_encode(num, base=62):
    digits = []
    while num > 0
      remainder = modulo(num, base)
      digits.push(remainder)
      num = divide(num, base)
    digits = digits.reverse
```

* 输出前 7 个字符，其结果将有 62^7 种可能的值，作为短链接来说足够了。因为我们限制了 3 年内最多产生 36000 万个短链接：

```python
url = base_encode(md5(ip_address+timestamp))[:URL_LENGTH]
```
我们可以调用一个公共的 [REST API](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#表述性状态转移rest)：

```
$ curl -X POST --data '{ "expiration_length_in_minutes": "60", \
    "paste_contents": "Hello World!" }' https://pastebin.com/api/v1/paste
```

返回：

```
{
    "shortlink": "foobar"
}
```

而对于服务器内部的通信，我们可以使用 [RPC](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#远程过程调用协议rpc)。

### 用例：用户输入了一个之前粘贴得到的 url，希望浏览其存储的内容

* **客户端**向**Web 服务器**发起读取内容请求
* **Web 服务器**将请求转发给**Read API**服务
* **Read API**服务将会：
    * 在**SQL 数据库**中检查生成的 url
        * 如果查询的 url 存在于 **SQL 数据库**中，从**对象存储**服务将对应的粘贴内容取出
        * 否则，给用户返回报错

REST API:

```
$ curl https://pastebin.com/api/v1/paste?shortlink=foobar
```

返回：

```
{
    "paste_contents": "Hello World"
    "created_at": "YYYY-MM-DD HH:MM:SS"
    "expiration_length_in_minutes": "60"
}
```

### 用例：对页面进行跟踪分析

由于不需要进行实时分析，因此我们可以简单地对 **Web 服务**产生的日志用 **MapReduce** 来统计 hit 计数（命中数）。

**向你的面试官告知你准备写多少代码**。

```python
class HitCounts(MRJob):

    def extract_url(self, line):
        """从 log 中取出生成的 url。"""
        ...

    def extract_year_month(self, line):
        """返回时间戳中表示年份与月份的一部分"""
        ...

    def mapper(self, _, line):
        """解析日志的每一行，提取并转换相关行，

        将键值对设定为如下形式：

        (2016-01, url0), 1
        (2016-01, url0), 1
        (2016-01, url1), 1
        """
        url = self.extract_url(line)
        period = self.extract_year_month(line)
        yield (period, url), 1

    def reducer(self, key, value):
        """将所有的 key 加起来

        (2016-01, url0), 2
        (2016-01, url1), 1
        """
        yield key, sum(values)
```

### 用例：服务删除过期的粘贴内容

我们可以通过扫描 **SQL 数据库**，查找出那些过期时间戳小于当前时间戳的条目，然后在表中删除（或者将其标记为过期）这些过期的粘贴内容。

## 第四步：架构扩展

> 根据限制条件，找到并解决瓶颈。

![Imgur](http://i.imgur.com/4edXG0T.png)

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

**分析数据库** 可以用现成的数据仓储系统，例如使用 Amazon Redshift 或者 Google BigQuery 的解决方案。

Amazon S3 的**对象存储**系统可以很方便地设置每个月限制只允许新增 12.7 GB 的存储内容。

平均每秒 40 次的读取请求（峰值将会更高）, 可以通过扩展 **内存缓存** 来处理热点内容的读取流量，这对于处理不均匀分布的流量和流量峰值也很有用。只要 SQL 副本不陷入复制-写入困境中，**SQL Read 副本** 基本能够处理缓存命中问题。

平均每秒 4 次的粘贴写入操作（峰值将会更高）对于单个**SQL 写主-从** 模式来说是可行的。不过，我们也需要考虑其它的 SQL 性能拓展技术：

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
