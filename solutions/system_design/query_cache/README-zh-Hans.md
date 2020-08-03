# 设计一个键-值缓存来存储最近 web 服务查询的结果

**注意：这个文档中的链接会直接指向[系统设计主题索引](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#系统设计主题的索引)中的有关部分，以避免重复的内容。你可以参考链接的相关内容，来了解其总的要点、方案的权衡取舍以及可选的替代方案。**

## 第一步：简述用例与约束条件

> 搜集需求与问题的范围。
> 提出问题来明确用例与约束条件。
> 讨论假设。

我们将在没有面试官明确说明问题的情况下，自己定义一些用例以及限制条件。

### 用例

#### 我们将把问题限定在仅处理以下用例的范围中

* **用户**发送一个搜索请求，命中缓存
* **用户**发送一个搜索请求，未命中缓存
* **服务**有着高可用性

### 限制条件与假设

#### 提出假设

* 网络流量不是均匀分布的
    * 经常被查询的内容应该一直存于缓存中
    * 需要确定如何规定缓存过期、缓存刷新规则
* 缓存提供的服务查询速度要快
* 机器间延迟较低
* 缓存有内存限制
    * 需要决定缓存什么、移除什么
    *  需要缓存百万级的查询
* 1000 万用户
* 每个月 100 亿次查询

#### 计算用量

**如果你需要进行粗略的用量计算，请向你的面试官说明。**

* 缓存存储的是键值对有序表，键为 `query`（查询），值为 `results`（结果）。
    * `query` - 50 字节
    * `title` - 20 字节
    * `snippet` - 200 字节
    * 总计：270 字节
* 假如 100 亿次查询都是不同的，且全部需要存储，那么每个月需要 2.7 TB 的缓存空间
    * 单次查询 270 字节 * 每月查询 100 亿次
    * 假设内存大小有限制，需要决定如何制定缓存过期规则
* 每秒 4,000 次请求

便利换算指南：

* 每个月有 250 万秒
* 每秒一个请求 = 每个月 250 万次请求
* 每秒 40 个请求 = 每个月 1 亿次请求
* 每秒 400 个请求 = 每个月 10 亿次请求

## 第二步：概要设计

> 列出所有重要组件以规划概要设计。

![Imgur](http://i.imgur.com/KqZ3dSx.png)

## 第三步：设计核心组件

> 深入每个核心组件的细节。

### 用例：用户发送了一次请求，命中了缓存

常用的查询可以由例如 Redis 或者 Memcached 之类的**内存缓存**提供支持，以减少数据读取延迟，并且避免**反向索引服务**以及**文档服务**的过载。从内存读取 1 MB 连续数据大约要花 250 微秒，而从 SSD 读取同样大小的数据要花费 4 倍的时间，从机械硬盘读取需要花费 80 倍以上的时间。<sup><a href=https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#每个程序员都应该知道的延迟数>1</a></sup>

由于缓存容量有限，我们将使用 LRU（近期最少使用算法）来控制缓存的过期。

* **客户端**向运行[反向代理](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#反向代理web-服务器)的 **Web 服务器**发送一个请求
* 这个 **Web 服务器**将请求转发给**查询 API** 服务
* **查询 API** 服务将会做这些事情：
    * 分析查询
        * 移除多余的内容
        * 将文本分割成词组
        * 修正拼写错误
        * 规范化字母的大小写
        * 将查询转换为布尔运算
    * 检测**内存缓存**是否有匹配查询的内容
        * 如果命中**内存缓存**，**内存缓存**将会做以下事情：
            * 将缓存入口的位置指向 LRU 链表的头部
            * 返回缓存内容
        * 否则，**查询 API** 将会做以下事情：
            * 使用**反向索引服务**来查找匹配查询的文档
                * **反向索引服务**对匹配到的结果进行排名，然后返回最符合的结果
            * 使用**文档服务**返回文章标题与片段
            * 更新**内存缓存**，存入内容，将**内存缓存**入口位置指向 LRU 链表的头部

#### 缓存的实现

缓存可以使用双向链表实现：新元素将会在头结点加入，过期的元素将会在尾节点被删除。我们使用哈希表以便能够快速查找每个链表节点。

**向你的面试官告知你准备写多少代码**。

实现**查询 API 服务**：

```python
class QueryApi(object):

    def __init__(self, memory_cache, reverse_index_service):
        self.memory_cache = memory_cache
        self.reverse_index_service = reverse_index_service

    def parse_query(self, query):
        """移除多余内容，将文本分割成词组，修复拼写错误，
        规范化字母大小写，转换布尔运算。
        """
        ...

    def process_query(self, query):
        query = self.parse_query(query)
        results = self.memory_cache.get(query)
        if results is None:
            results = self.reverse_index_service.process_search(query)
            self.memory_cache.set(query, results)
        return results
```

实现**节点**：

```python
class Node(object):

    def __init__(self, query, results):
        self.query = query
        self.results = results
```

实现**链表**：

```python
class LinkedList(object):

    def __init__(self):
        self.head = None
        self.tail = None

    def move_to_front(self, node):
        ...

    def append_to_front(self, node):
        ...

    def remove_from_tail(self):
        ...
```

实现**缓存**：

```python
class Cache(object):

    def __init__(self, MAX_SIZE):
        self.MAX_SIZE = MAX_SIZE
        self.size = 0
        self.lookup = {}  # key: query, value: node
        self.linked_list = LinkedList()

    def get(self, query)
        """从缓存取得存储的内容

        将入口节点位置更新为 LRU 链表的头部。
        """
        node = self.lookup[query]
        if node is None:
            return None
        self.linked_list.move_to_front(node)
        return node.results

    def set(self, results, query):
        """将所给查询键的结果存在缓存中。

        当更新缓存记录的时候，将它的位置指向 LRU 链表的头部。
        如果这个记录是新的记录，并且缓存空间已满，应该在加入新记录前
        删除最老的记录。
        """
        node = self.lookup[query]
        if node is not None:
            # 键存在于缓存中，更新它对应的值
            node.results = results
            self.linked_list.move_to_front(node)
        else:
            # 键不存在于缓存中
            if self.size == self.MAX_SIZE:
                # 在链表中查找并删除最老的记录
                self.lookup.pop(self.linked_list.tail.query, None)
                self.linked_list.remove_from_tail()
            else:
                self.size += 1
            # 添加新的键值对
            new_node = Node(query, results)
            self.linked_list.append_to_front(new_node)
            self.lookup[query] = new_node
```

#### 何时更新缓存

缓存将会在以下几种情况更新：

* 页面内容发生变化
* 页面被移除或者加入了新页面
* 页面的权值发生变动

解决这些问题的最直接的方法，就是为缓存记录设置一个它在被更新前能留在缓存中的最长时间，这个时间简称为存活时间（TTL）。

参考 [「何时更新缓存」](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#何时更新缓存)来了解其权衡取舍及替代方案。以上方法在[缓存模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#缓存模式)一章中详细地进行了描述。

## 第四步：架构扩展

> 根据限制条件，找到并解决瓶颈。

![Imgur](http://i.imgur.com/4j99mhe.png)

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
* [一致性模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#一致性模式)
* [可用性模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#可用性模式)

### 将内存缓存扩大到多台机器

为了解决庞大的请求负载以及巨大的内存需求，我们将要对架构进行水平拓展。如何在我们的**内存缓存**集群中存储数据呢？我们有以下三个主要可选方案：

* **缓存集群中的每一台机器都有自己的缓存** - 简单，但是它会降低缓存命中率。
* **缓存集群中的每一台机器都有缓存的拷贝** - 简单，但是它的内存使用效率太低了。
* **对缓存进行[分片](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#分片)，分别部署在缓存集群中的所有机器中** - 更加复杂，但是它是最佳的选择。我们可以使用哈希，用查询语句 `machine = hash(query)` 来确定哪台机器有需要缓存。当然我们也可以使用[一致性哈希](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#正在完善中)。

## 其它要点

> 是否深入这些额外的主题，取决于你的问题范围和剩下的时间。

### SQL 缩放模式

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
    * 服务器内部通信 - [RPC](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#远程过程调用协议rpc)
* [服务发现](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#服务发现)

### 安全性

请参阅[「安全」](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#安全)一章。

### 延迟数值

请参阅[「每个程序员都应该知道的延迟数」](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#每个程序员都应该知道的延迟数)。

### 持续探讨

* 持续进行基准测试并监控你的系统，以解决他们提出的瓶颈问题。
* 架构拓展是一个迭代的过程。
