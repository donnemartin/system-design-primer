> * 原文地址：[github.com/donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer)
> * 译文出自：[掘金翻译计划](https://github.com/xitu/gold-miner)
> * 译者：[XatMassacrE](https://github.com/XatMassacrE)、[L9m](https://github.com/L9m)、[Airmacho](https://github.com/Airmacho)、[xiaoyusilen](https://github.com/xiaoyusilen)、[jifaxu](https://github.com/jifaxu)、[根号三](https://github.com/sqrthree)
> * 这个 [链接](https://github.com/xitu/system-design-primer/compare/master...donnemartin:master) 用来查看本翻译与英文版是否有差别（如果你没有看到 README.md 发生变化，那就意味着这份翻译文档是最新的）。

*[English](README.md) ∙ [日本語](README-ja.md) ∙ [简体中文](README-zh-Hans.md) ∙ [繁體中文](README-zh-TW.md) | [العَرَبِيَّة‎](https://github.com/donnemartin/system-design-primer/issues/170) ∙ [বাংলা](https://github.com/donnemartin/system-design-primer/issues/220) ∙ [Português do Brasil](https://github.com/donnemartin/system-design-primer/issues/40) ∙ [Deutsch](https://github.com/donnemartin/system-design-primer/issues/186) ∙ [ελληνικά](https://github.com/donnemartin/system-design-primer/issues/130) ∙ [עברית](https://github.com/donnemartin/system-design-primer/issues/272) ∙ [Italiano](https://github.com/donnemartin/system-design-primer/issues/104) ∙ [한국어](https://github.com/donnemartin/system-design-primer/issues/102) ∙ [فارسی](https://github.com/donnemartin/system-design-primer/issues/110) ∙ [Polski](https://github.com/donnemartin/system-design-primer/issues/68) ∙ [русский язык](https://github.com/donnemartin/system-design-primer/issues/87) ∙ [Español](https://github.com/donnemartin/system-design-primer/issues/136) ∙ [ภาษาไทย](https://github.com/donnemartin/system-design-primer/issues/187) ∙ [Türkçe](https://github.com/donnemartin/system-design-primer/issues/39) ∙ [tiếng Việt](https://github.com/donnemartin/system-design-primer/issues/127) ∙ [Français](https://github.com/donnemartin/system-design-primer/issues/250) | [Add Translation](https://github.com/donnemartin/system-design-primer/issues/28)*

# 系统设计入门

<p align="center">
  <img src="images/jj3A5N8.png">
  <br/>
</p>

## 目的

> 学习如何设计大型系统。
>
> 为系统设计的面试做准备。

### 学习如何设计大型系统

学习如何设计可扩展的系统将会有助于你成为一个更好的工程师。

系统设计是一个很宽泛的话题。在互联网上，**关于系统设计原则的资源也是多如牛毛。**

这个仓库就是这些资源的**组织收集**，它可以帮助你学习如何构建可扩展的系统。

### 从开源社区学习

这是一个不断更新的开源项目的初期的版本。

欢迎[贡献](#贡献)！

### 为系统设计的面试做准备

在很多科技公司中，除了代码面试，系统设计也是**技术面试过程**中的一个**必要环节**。

**实践常见的系统设计面试题**并且把你的答案和**例子的解答**进行**对照**：讨论，代码和图表。

面试准备的其他主题：

* [学习指引](#学习指引)
* [如何处理一个系统设计的面试题](#如何处理一个系统设计的面试题)
* [系统设计的面试题，**含解答**](#系统设计的面试题和解答)
* [面向对象设计的面试题，**含解答**](#面向对象设计的面试问题及解答)
* [其它的系统设计面试题](#其它的系统设计面试题)

## 抽认卡

<p align="center">
  <img src="images/zdCAkB3.png">
  <br/>
</p>

这里提供的[抽认卡堆](https://apps.ankiweb.net/)使用间隔重复的方法，帮助你记忆关键的系统设计概念。

* [系统设计的卡堆](resources/flash_cards/System%20Design.apkg)
* [系统设计的练习卡堆](resources/flash_cards/System%20Design%20Exercises.apkg)
* [面向对象设计的练习卡堆](resources/flash_cards/OO%20Design.apkg)

随时随地都可使用。

### 代码资源：互动式编程挑战

你正在寻找资源以准备[**编程面试**](https://github.com/donnemartin/interactive-coding-challenges)吗？

<p align="center">
  <img src="images/b4YtAEN.png">
  <br/>
</p>

请查看我们的姐妹仓库[**互动式编程挑战**](https://github.com/donnemartin/interactive-coding-challenges)，其中包含了一个额外的抽认卡堆：

* [代码卡堆](https://github.com/donnemartin/interactive-coding-challenges/tree/master/anki_cards/Coding.apkg)

## 贡献

> 从社区中学习。

欢迎提交 PR 提供帮助：

* 修复错误
* 完善章节
* 添加章节
* [帮助翻译](https://github.com/donnemartin/system-design-primer/issues/28)

一些还需要完善的内容放在了[正在完善中](#正在完善中)。

请查看[贡献指南](CONTRIBUTING.md)。

## 系统设计主题的索引

> 各种系统设计主题的摘要，包括优点和缺点。**每一个主题都面临着取舍和权衡**。
>
> 每个章节都包含着更多的资源的链接。


<p align="center">
  <img src="images/jrUBAF7.png">
  <br/>
</p>

* [系统设计主题：从这里开始](#系统设计主题从这里开始)
    * [第一步：回顾可扩展性的视频讲座](#第一步回顾可扩展性scalability的视频讲座)
    * [第二步：回顾可扩展性的文章](#第二步回顾可扩展性文章)
    * [接下来的步骤](#接下来的步骤)
* [性能与拓展性](#性能与可扩展性)
* [延迟与吞吐量](#延迟与吞吐量)
* [可用性与一致性](#可用性与一致性)
    * [CAP 理论](#cap-理论)
        * [CP - 一致性和分区容错性](#cp--一致性和分区容错性)
        * [AP - 可用性和分区容错性](#ap--可用性与分区容错性)
* [一致模式](#一致性模式)
    * [弱一致性](#弱一致性)
    * [最终一致性](#最终一致性)
    * [强一致性](#强一致性)
* [可用模式](#可用性模式)
    * [故障切换](#故障切换)
    * [复制](#复制)
* [域名系统](#域名系统)
* [CDN](#内容分发网络cdn)
    * [CDN 推送](#cdn-推送push)
    * [CDN 拉取](#cdn-拉取pull)
* [负载均衡器](#负载均衡器)
    * [工作到备用切换（Active-passive）](#工作到备用切换active-passive)
    * [双工作切换（Active-active）](#双工作切换active-active)
    * [四层负载均衡](#四层负载均衡)
    * [七层负载均衡](#七层负载均衡器)
    * [水平扩展](#水平扩展)
* [反向代理（web 服务器）](#反向代理web-服务器)
    * [负载均衡与反向代理](#负载均衡器与反向代理)
* [应用层](#应用层)
    * [微服务](#微服务)
    * [服务发现](#服务发现)
* [数据库](#数据库)
    * [关系型数据库管理系统（RDBMS）](#关系型数据库管理系统rdbms)
        * [Master-slave 复制集](#主从复制)
        * [Master-master 复制集](#主主复制)
        * [联合](#联合)
        * [分片](#分片)
        * [非规范化](#非规范化)
        * [SQL 调优](#sql-调优)
    * [NoSQL](#nosql)
        * [Key-value 存储](#键-值存储)
        * [文档存储](#文档类型存储)
        * [宽列存储](#列型存储)
        * [图数据库](#图数据库)
    * [SQL 还是 NoSQL](#sql-还是-nosql)
* [缓存](#缓存)
    * [客户端缓存](#客户端缓存)
    * [CDN 缓存](#cdn-缓存)
    * [Web 服务器缓存](#web-服务器缓存)
    * [数据库缓存](#数据库缓存)
    * [应用缓存](#应用缓存)
    * [数据库查询级别的缓存](#数据库查询级别的缓存)
    * [对象级别的缓存](#对象级别的缓存)
    * [何时更新缓存](#何时更新缓存)
        * [缓存模式](#缓存模式)
        * [直写模式](#直写模式)
        * [回写模式](#回写模式)
        * [刷新](#刷新)
* [异步](#异步)
    * [消息队列](#消息队列)
    * [任务队列](#任务队列)
    * [背压机制](#背压)
* [通讯](#通讯)
    * [传输控制协议（TCP）](#传输控制协议tcp)
    * [用户数据报协议（UDP）](#用户数据报协议udp)
    * [远程控制调用协议（RPC）](#远程过程调用协议rpc)
    * [表述性状态转移（REST）](#表述性状态转移rest)
* [安全](#安全)
* [附录](#附录)
    * [2 的次方表](#2-的次方表)
    * [每个程序员都应该知道的延迟数](#每个程序员都应该知道的延迟数)
    * [其它的系统设计面试题](#其它的系统设计面试题)
    * [真实架构](#真实架构)
    * [公司的系统架构](#公司的系统架构)
    * [公司工程博客](#公司工程博客)
* [正在完善中](#正在完善中)
* [致谢](#致谢)
* [联系方式](#联系方式)
* [许可](#许可)

## 学习指引

> 基于你面试的时间线（短、中、长）去复习那些推荐的主题。

![Imgur](images/OfVllex.png)

**问：对于面试来说，我需要知道这里的所有知识点吗？**

**答：不，如果只是为了准备面试的话，你并不需要知道所有的知识点。**

在一场面试中你会被问到什么取决于下面这些因素：

* 你的经验
* 你的技术背景
* 你面试的职位
* 你面试的公司
* 运气

那些有经验的候选人通常会被期望了解更多的系统设计的知识。架构师或者团队负责人则会被期望了解更多除了个人贡献之外的知识。顶级的科技公司通常也会有一次或者更多的系统设计面试。

面试会很宽泛的展开并在几个领域深入。这会帮助你了解一些关于系统设计的不同的主题。基于你的时间线，经验，面试的职位和面试的公司对下面的指导做出适当的调整。

* **短期** - 以系统设计主题的**广度**为目标。通过解决**一些**面试题来练习。
* **中期** - 以系统设计主题的**广度**和**初级深度**为目标。通过解决**很多**面试题来练习。
* **长期** - 以系统设计主题的**广度**和**高级深度**为目标。通过解决**大部分**面试题来练习。

|                                          | 短期   | 中期   | 长期   |
| ---------------------------------------- | ---- | ---- | ---- |
| 阅读 [系统设计主题](#系统设计主题的索引) 以获得一个关于系统如何工作的宽泛的认识 | :+1: | :+1: | :+1: |
| 阅读一些你要面试的[公司工程博客](#公司工程博客)的文章            | :+1: | :+1: | :+1: |
| 阅读 [真实架构](#真实架构)                   | :+1: | :+1: | :+1: |
| 复习 [如何处理一个系统设计面试题](#如何处理一个系统设计面试题)       | :+1: | :+1: | :+1: |
| 完成 [系统设计的面试题和解答](#系统设计的面试题和解答)             | 一些   | 很多   | 大部分  |
| 完成 [面向对象设计的面试题和解答](#面向对象设计的面试问题及解答)        | 一些   | 很多   | 大部分  |
| 复习 [其它的系统设计面试题](#其它的系统设计面试题)          | 一些   | 很多   | 大部分  |

## 如何处理一个系统设计的面试题

系统设计面试是一个**开放式的对话**。他们期望你去主导这个对话。

你可以使用下面的步骤来指引讨论。为了巩固这个过程，请使用下面的步骤完成[系统设计的面试题和解答](#系统设计的面试题和解答)这个章节。

### 第一步：描述使用场景，约束和假设

把所有需要的东西聚集在一起，审视问题。不停的提问，以至于我们可以明确使用场景和约束。讨论假设。

* 谁会使用它？
* 他们会怎样使用它？
* 有多少用户？
* 系统的作用是什么？
* 系统的输入输出分别是什么？
* 我们希望处理多少数据？
* 我们希望每秒钟处理多少请求？
* 我们希望的读写比率？

### 第二步：创造一个高层级的设计

使用所有重要的组件来描绘出一个高层级的设计。

* 画出主要的组件和连接
* 证明你的想法

### 第三步：设计核心组件

对每一个核心组件进行详细深入的分析。举例来说，如果你被问到[设计一个 url 缩写服务](solutions/system_design/pastebin/README.md)，开始讨论：

* 生成并储存一个完整 url 的 hash
    * [MD5](solutions/system_design/pastebin/README.md) 和 [Base62](solutions/system_design/pastebin/README.md)
    * Hash 碰撞
    * SQL 还是 NoSQL
    * 数据库模型
* 将一个 hashed url 翻译成完整的 url
    * 数据库查找
* API 和面向对象设计

### 第四步：扩展设计

确认和处理瓶颈以及一些限制。举例来说就是你需要下面的这些来完成扩展性的议题吗？

* 负载均衡
* 水平扩展
* 缓存
* 数据库分片

论述可能的解决办法和代价。每件事情需要取舍。可以使用[可扩展系统的设计原则](#系统设计主题的索引)来处理瓶颈。

### 预估计算量

你或许会被要求通过手算进行一些估算。[附录](#附录)涉及到的是下面的这些资源：

* [使用预估计算量](http://highscalability.com/blog/2011/1/26/google-pro-tip-use-back-of-the-envelope-calculations-to-choo.html)
* [2 的次方表](#2-的次方表)
* [每个程序员都应该知道的延迟数](#每个程序员都应该知道的延迟数)

### 相关资源和延伸阅读

查看下面的链接以获得我们期望的更好的想法：

* [怎样通过一个系统设计的面试](https://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/)
* [系统设计的面试](http://www.hiredintech.com/system-design)
* [系统架构与设计的面试简介](https://www.youtube.com/watch?v=ZgdS0EUmn70)

## 系统设计的面试题和解答

> 普通的系统设计面试题和相关事例的论述，代码和图表。
>

> 与内容有关的解答在 `solutions/` 文件夹中。

| 问题                                       |                                          |
| ---------------------------------------- | ---------------------------------------- |
| 设计 Pastebin.com (或者 Bit.ly)              | [解答](solutions/system_design/pastebin/README-zh-Hans.md) |
| 设计 Twitter 时间线和搜索 (或者 Facebook feed 和搜索) | [解答](solutions/system_design/twitter/README.md) |
| 设计一个网页爬虫                                 | [解答](solutions/system_design/web_crawler/README.md) |
| 设计 Mint.com                              | [解答](solutions/system_design/mint/README.md) |
| 为一个社交网络设计数据结构                            | [解答](solutions/system_design/social_graph/README.md) |
| 为搜索引擎设计一个 key-value 储存                   | [解答](solutions/system_design/query_cache/README.md) |
| 通过分类特性设计 Amazon 的销售排名                    | [解答](solutions/system_design/sales_rank/README.md) |
| 在 AWS 上设计一个百万用户级别的系统                     | [解答](solutions/system_design/scaling_aws/README.md) |
| 添加一个系统设计问题                               | [贡献](#贡献)                                |

### 设计 Pastebin.com (或者 Bit.ly)

[查看实践与解答](solutions/system_design/pastebin/README.md)

![Imgur](images/4edXG0T.png)

### 设计 Twitter 时间线和搜索 (或者 Facebook feed 和搜索)

[查看实践与解答](solutions/system_design/twitter/README.md)

![Imgur](images/jrUBAF7.png)

### 设计一个网页爬虫

[查看实践与解答](solutions/system_design/web_crawler/README.md)

![Imgur](images/bWxPtQA.png)

### 设计 Mint.com

[查看实践与解答](solutions/system_design/mint/README.md)

![Imgur](images/V5q57vU.png)

### 为一个社交网络设计数据结构

[查看实践与解答](solutions/system_design/social_graph/README.md)

![Imgur](images/cdCv5g7.png)

### 为搜索引擎设计一个 key-value 储存

[查看实践与解答](solutions/system_design/query_cache/README.md)

![Imgur](images/4j99mhe.png)

### 设计按类别分类的 Amazon 销售排名

[查看实践与解答](solutions/system_design/sales_rank/README.md)

![Imgur](images/MzExP06.png)

### 在 AWS 上设计一个百万用户级别的系统

[查看实践与解答](solutions/system_design/scaling_aws/README.md)

![Imgur](images/jj3A5N8.png)

## 面向对象设计的面试问题及解答

> 常见面向对象设计面试问题及实例讨论，代码和图表演示。
>
> 与内容相关的解决方案在 `solutions/` 文件夹中。

>**注：此节还在完善中**

| 问题           |                                          |
| ------------ | ---------------------------------------- |
| 设计 hash map  | [解决方案](solutions/object_oriented_design/hash_table/hash_map.ipynb) |
| 设计 LRU 缓存    | [解决方案](solutions/object_oriented_design/lru_cache/lru_cache.ipynb) |
| 设计一个呼叫中心     | [解决方案](solutions/object_oriented_design/call_center/call_center.ipynb) |
| 设计一副牌        | [解决方案](solutions/object_oriented_design/deck_of_cards/deck_of_cards.ipynb) |
| 设计一个停车场      | [解决方案](solutions/object_oriented_design/parking_lot/parking_lot.ipynb) |
| 设计一个聊天服务     | [解决方案](solutions/object_oriented_design/online_chat/online_chat.ipynb) |
| 设计一个环形数组     | [待解决](#贡献)                     |
| 添加一个面向对象设计问题 | [待解决](#贡献)                     |

## 系统设计主题：从这里开始

不熟悉系统设计？

首先，你需要对一般性原则有一个基本的认识，知道它们是什么，怎样使用以及利弊。

### 第一步：回顾可扩展性（scalability）的视频讲座

[哈佛大学可扩展性讲座](https://www.youtube.com/watch?v=-W9F__D3oY4)

* 主题涵盖
    * 垂直扩展（Vertical scaling）
    * 水平扩展（Horizontal scaling）
    * 缓存
    * 负载均衡
    * 数据库复制
    * 数据库分区

### 第二步：回顾可扩展性文章

[可扩展性](http://www.lecloud.net/tagged/scalability/chrono)

* 主题涵盖：
    * [Clones](http://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
    * [数据库](http://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
    * [缓存](http://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
    * [异步](http://www.lecloud.net/post/9699762917/scalability-for-dummies-part-4-asynchronism)

### 接下来的步骤

接下来，我们将看看高阶的权衡和取舍:

* **性能**与**可扩展性**
* **延迟**与**吞吐量**
* **可用性**与**一致性**

记住**每个方面都面临取舍和权衡**。

然后，我们将深入更具体的主题，如 DNS、CDN 和负载均衡器。

## 性能与可扩展性

如果服务**性能**的增长与资源的增加是成比例的，服务就是可扩展的。通常，提高性能意味着服务于更多的工作单元，另一方面，当数据集增长时，同样也可以处理更大的工作单位。<sup><a href="http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html">1</a></sup>

另一个角度来看待性能与可扩展性:

* 如果你的系统有**性能**问题，对于单个用户来说是缓慢的。
* 如果你的系统有**可扩展性**问题，单个用户较快但在高负载下会变慢。

### 来源及延伸阅读

* [简单谈谈可扩展性](http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html)
* [可扩展性，可用性，稳定性和模式](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)

## 延迟与吞吐量

**延迟**是执行操作或运算结果所花费的时间。

**吞吐量**是单位时间内（执行）此类操作或运算的数量。

通常，你应该以**可接受级延迟**下**最大化吞吐量**为目标。

### 来源及延伸阅读

* [理解延迟与吞吐量](https://community.cadence.com/cadence_blogs_8/b/sd/archive/2010/09/13/understanding-latency-vs-throughput)

## 可用性与一致性

### CAP 理论

<p align="center">
  <img src="images/bgLMI2u.png">
  <br/>
  <strong><a href="http://robertgreiner.com/2014/08/cap-theorem-revisited">来源：再看 CAP 理论</a></strong>
</p>

在一个分布式计算系统中，只能同时满足下列的两点:

* **一致性** ─ 每次访问都能获得最新数据但可能会收到错误响应
* **可用性** ─ 每次访问都能收到非错响应，但不保证获取到最新数据
* **分区容错性** ─ 在任意分区网络故障的情况下系统仍能继续运行

**网络并不可靠，所以你应要支持分区容错性，并需要在软件可用性和一致性间做出取舍。**

#### CP ─ 一致性和分区容错性

等待分区节点的响应可能会导致延时错误。如果你的业务需求需要原子读写，CP 是一个不错的选择。

#### AP ─ 可用性与分区容错性

响应节点上可用数据的最近版本可能并不是最新的。当分区解析完后，写入（操作）可能需要一些时间来传播。

如果业务需求允许[最终一致性](#最终一致性)，或当有外部故障时要求系统继续运行，AP 是一个不错的选择。

### 来源及延伸阅读

* [再看 CAP 理论](http://robertgreiner.com/2014/08/cap-theorem-revisited/)
* [通俗易懂地介绍 CAP 理论](http://ksat.me/a-plain-english-introduction-to-cap-theorem/)
* [CAP FAQ](https://github.com/henryr/cap-faq)

## 一致性模式

有同一份数据的多份副本，我们面临着怎样同步它们的选择，以便让客户端有一致的显示数据。回想 [CAP 理论](#cap-理论)中的一致性定义 ─ 每次访问都能获得最新数据但可能会收到错误响应


### 弱一致性

在写入之后，访问可能看到，也可能看不到（写入数据）。尽力优化之让其能访问最新数据。

这种方式可以 memcached 等系统中看到。弱一致性在 VoIP，视频聊天和实时多人游戏等真实用例中表现不错。打个比方，如果你在通话中丢失信号几秒钟时间，当重新连接时你是听不到这几秒钟所说的话的。

### 最终一致性

在写入后，访问最终能看到写入数据（通常在数毫秒内）。数据被异步复制。

DNS 和 email 等系统使用的是此种方式。最终一致性在高可用性系统中效果不错。

### 强一致性

在写入后，访问立即可见。数据被同步复制。

文件系统和关系型数据库（RDBMS）中使用的是此种方式。强一致性在需要记录的系统中运作良好。

### 来源及延伸阅读

* [Transactions across data centers](http://snarfed.org/transactions_across_datacenters_io.html)

## 可用性模式

有两种支持高可用性的模式: **故障切换（fail-over）**和**复制（replication）**。

### 故障切换

#### 工作到备用切换（Active-passive）

关于工作到备用的故障切换流程是，工作服务器发送周期信号给待机中的备用服务器。如果周期信号中断，备用服务器切换成工作服务器的 IP 地址并恢复服务。

宕机时间取决于备用服务器处于“热”待机状态还是需要从“冷”待机状态进行启动。只有工作服务器处理流量。

工作到备用的故障切换也被称为主从切换。

#### 双工作切换（Active-active）

在双工作切换中，双方都在管控流量，在它们之间分散负载。

如果是外网服务器，DNS 将需要对两方都了解。如果是内网服务器，应用程序逻辑将需要对两方都了解。

双工作切换也可以称为主主切换。

### 缺陷：故障切换

* 故障切换需要添加额外硬件并增加复杂性。
* 如果新写入数据在能被复制到备用系统之前，工作系统出现了故障，则有可能会丢失数据。

### 复制

#### 主─从复制和主─主复制

这个主题进一步探讨了[数据库](#数据库)部分:

* [主─从复制](#主从复制)
* [主─主复制](#主主复制)

## 域名系统

<p align="center">
  <img src="images/IOyLj4i.jpg">
  <br/>
  <strong><a href="http://www.slideshare.net/srikrupa5/dns-security-presentation-issa">来源：DNS 安全介绍</a></strong>
</p>

域名系统是把 www.example.com 等域名转换成 IP 地址。

域名系统是分层次的，一些 DNS 服务器位于顶层。当查询（域名） IP 时，路由或 ISP 提供连接 DNS 服务器的信息。较底层的 DNS 服务器缓存映射，它可能会因为 DNS 传播延时而失效。DNS 结果可以缓存在浏览器或操作系统中一段时间，时间长短取决于[存活时间 TTL](https://en.wikipedia.org/wiki/Time_to_live)。

* **NS 记录（域名服务）** ─ 指定解析域名或子域名的 DNS 服务器。
* **MX 记录（邮件交换）** ─ 指定接收信息的邮件服务器。
* **A 记录（地址）** ─ 指定域名对应的 IP 地址记录。
* **CNAME（规范）** ─ 一个域名映射到另一个域名或 `CNAME` 记录（ example.com 指向 www.example.com ）或映射到一个 `A` 记录。

[CloudFlare](https://www.cloudflare.com/dns/) 和 [Route 53](https://aws.amazon.com/route53/) 等平台提供管理 DNS 的功能。某些 DNS 服务通过集中方式来路由流量:

* [加权轮询调度](http://g33kinfo.com/info/archives/2657)
    * 防止流量进入维护中的服务器
    * 在不同大小集群间负载均衡
    * A/B 测试
* 基于延迟路由
* 基于地理位置路由

### 缺陷:DNS

* 虽说缓存可以减轻 DNS 延迟，但连接 DNS 服务器还是带来了轻微的延迟。
* 虽然它们通常由[政府，网络服务提供商和大公司](http://superuser.com/questions/472695/who-controls-the-dns-servers/472729)管理，但 DNS 服务管理仍可能是复杂的。
* DNS 服务最近遭受 [DDoS 攻击](http://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/)，阻止不知道 Twitter IP 地址的用户访问 Twitter。

### 来源及延伸阅读

* [DNS 架构](https://technet.microsoft.com/en-us/library/dd197427(v=ws.10).aspx)
* [Wikipedia](https://en.wikipedia.org/wiki/Domain_Name_System)
* [关于 DNS 的文章](https://support.dnsimple.com/categories/dns/)

## 内容分发网络（CDN）

<p align="center">
  <img src="images/h9TAuGI.jpg">
  <br/>
  <strong><a href="https://www.creative-artworks.eu/why-use-a-content-delivery-network-cdn/">来源：为什么使用 CDN</a></strong>
</p>

内容分发网络（CDN）是一个全球性的代理服务器分布式网络，它从靠近用户的位置提供内容。通常，HTML/CSS/JS，图片和视频等静态内容由 CDN 提供，虽然亚马逊 CloudFront 等也支持动态内容。CDN 的 DNS 解析会告知客户端连接哪台服务器。

将内容存储在 CDN 上可以从两个方面来提供性能:

* 从靠近用户的数据中心提供资源
* 通过 CDN 你的服务器不必真的处理请求

### CDN 推送（push）

当你服务器上内容发生变动时，推送 CDN 接受新内容。直接推送给 CDN 并重写 URL 地址以指向你的内容的 CDN 地址。你可以配置内容到期时间及何时更新。内容只有在更改或新增是才推送，流量最小化，但储存最大化。

### CDN 拉取（pull）

CDN 拉取是当第一个用户请求该资源时，从服务器上拉取资源。你将内容留在自己的服务器上并重写 URL 指向 CDN 地址。直到内容被缓存在 CDN 上为止，这样请求只会更慢，

[存活时间（TTL）](https://en.wikipedia.org/wiki/Time_to_live)决定缓存多久时间。CDN 拉取方式最小化 CDN 上的储存空间，但如果过期文件并在实际更改之前被拉取，则会导致冗余的流量。

高流量站点使用 CDN 拉取效果不错，因为只有最近请求的内容保存在 CDN 中，流量才能更平衡地分散。

### 缺陷：CDN

* CDN 成本可能因流量而异，可能在权衡之后你将不会使用 CDN。
* 如果在 TTL 过期之前更新内容，CDN 缓存内容可能会过时。
* CDN 需要更改静态内容的 URL 地址以指向 CDN。

### 来源及延伸阅读

* [全球性内容分发网络](http://repository.cmu.edu/cgi/viewcontent.cgi?article=2112&context=compsci)
* [CDN 拉取和 CDN 推送的区别](http://www.travelblogadvice.com/technical/the-differences-between-push-and-pull-cdns/)
* [Wikipedia](https://en.wikipedia.org/wiki/Content_delivery_network)

## 负载均衡器

<p align="center">
  <img src="images/h81n9iK.png">
  <br/>
  <strong><a href="http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html">来源：可扩展的系统设计模式</a></strong>
</p>

负载均衡器将传入的请求分发到应用服务器和数据库等计算资源。无论哪种情况，负载均衡器将从计算资源来的响应返回给恰当的客户端。负载均衡器的效用在于:

* 防止请求进入不好的服务器
* 防止资源过载
* 帮助消除单一的故障点

负载均衡器可以通过硬件（昂贵）或 HAProxy 等软件来实现。
增加的好处包括:

* **SSL 终结** ─ 解密传入的请求并加密服务器响应，这样的话后端服务器就不必再执行这些潜在高消耗运算了。
    * 不需要再每台服务器上安装 [X.509 证书](https://en.wikipedia.org/wiki/X.509)。
* **Session 留存** ─ 如果 Web 应用程序不追踪会话，发出 cookie 并将特定客户端的请求路由到同一实例。

通常会设置采用[工作─备用](#工作到备用切换active-passive) 或 [双工作](#双工作切换active-active) 模式的多个负载均衡器，以免发生故障。

负载均衡器能基于多种方式来路由流量:

* 随机
* 最少负载
* Session/cookie
* [轮询调度或加权轮询调度算法](http://g33kinfo.com/info/archives/2657)
* [四层负载均衡](#四层负载均衡)
* [七层负载均衡](#七层负载均衡)

### 四层负载均衡

四层负载均衡根据监看[传输层](#通讯)的信息来决定如何分发请求。通常，这会涉及来源，目标 IP 地址和请求头中的端口，但不包括数据包（报文）内容。四层负载均衡执行[网络地址转换（NAT）](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)来向上游服务器转发网络数据包。

### 七层负载均衡器

七层负载均衡器根据监控[应用层](#通讯)来决定怎样分发请求。这会涉及请求头的内容，消息和 cookie。七层负载均衡器终结网络流量，读取消息，做出负载均衡判定，然后传送给特定服务器。比如，一个七层负载均衡器能直接将视频流量连接到托管视频的服务器，同时将更敏感的用户账单流量引导到安全性更强的服务器。

以损失灵活性为代价，四层负载均衡比七层负载均衡花费更少时间和计算资源，虽然这对现代商用硬件的性能影响甚微。

### 水平扩展

负载均衡器还能帮助水平扩展，提高性能和可用性。使用商业硬件的性价比更高，并且比在单台硬件上**垂直扩展**更贵的硬件具有更高的可用性。相比招聘特定企业系统人才，招聘商业硬件方面的人才更加容易。

#### 缺陷：水平扩展

* 水平扩展引入了复杂度并涉及服务器复制
    * 服务器应该是无状态的:它们也不该包含像 session 或资料图片等与用户关联的数据。
    * session 可以集中存储在数据库或持久化[缓存](#缓存)（Redis、Memcached）的数据存储区中。
* 缓存和数据库等下游服务器需要随着上游服务器进行扩展，以处理更多的并发连接。

### 缺陷：负载均衡器

* 如果没有足够的资源配置或配置错误，负载均衡器会变成一个性能瓶颈。
* 引入负载均衡器以帮助消除单点故障但导致了额外的复杂性。
* 单个负载均衡器会导致单点故障，但配置多个负载均衡器会进一步增加复杂性。

### 来源及延伸阅读

* [NGINX 架构](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
* [HAProxy 架构指南](http://www.haproxy.org/download/1.2/doc/architecture.txt)
* [可扩展性](http://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
* [Wikipedia](https://en.wikipedia.org/wiki/Load_balancing_(computing))
* [四层负载平衡](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)
* [七层负载平衡](https://www.nginx.com/resources/glossary/layer-7-load-balancing/)
* [ELB 监听器配置](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html)

## 反向代理（web 服务器）

<p align="center">
  <img src="images/n41Azff.png">
  <br/>
  <strong><a href="https://upload.wikimedia.org/wikipedia/commons/6/67/Reverse_proxy_h2g2bob.svg">资料来源：维基百科</a></strong>
  <br/>
</p>

反向代理是一种可以集中地调用内部服务，并提供统一接口给公共客户的 web 服务器。来自客户端的请求先被反向代理服务器转发到可响应请求的服务器，然后代理再把服务器的响应结果返回给客户端。

带来的好处包括：

- **增加安全性** - 隐藏后端服务器的信息，屏蔽黑名单中的 IP，限制每个客户端的连接数。
- **提高可扩展性和灵活性** - 客户端只能看到反向代理服务器的 IP，这使你可以增减服务器或者修改它们的配置。
- **本地终结 SSL 会话** - 解密传入请求，加密服务器响应，这样后端服务器就不必完成这些潜在的高成本的操作。
  - 免除了在每个服务器上安装 [X.509](https://en.wikipedia.org/wiki/X.509) 证书的需要
- **压缩** - 压缩服务器响应
- **缓存** - 直接返回命中的缓存结果
- **静态内容** - 直接提供静态内容
  - HTML/CSS/JS
  - 图片
  - 视频
  - 等等

### 负载均衡器与反向代理

- 当你有多个服务器时，部署负载均衡器非常有用。通常，负载均衡器将流量路由给一组功能相同的服务器上。
- 即使只有一台 web 服务器或者应用服务器时，反向代理也有用，可以参考上一节介绍的好处。
- NGINX 和 HAProxy 等解决方案可以同时支持第七层反向代理和负载均衡。

### 不利之处：反向代理

- 引入反向代理会增加系统的复杂度。
- 单独一个反向代理服务器仍可能发生单点故障，配置多台反向代理服务器（如[故障转移](https://en.wikipedia.org/wiki/Failover)）会进一步增加复杂度。

### 来源及延伸阅读


- [反向代理与负载均衡](https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/)
- [NGINX 架构](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
- [HAProxy 架构指南](http://www.haproxy.org/download/1.2/doc/architecture.txt)
- [Wikipedia](https://en.wikipedia.org/wiki/Reverse_proxy)

## 应用层

<p align="center">
  <img src="images/yB5SYwm.png">
  <br/>
  <strong><a href="http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer">资料来源：可缩放系统构架介绍</a></strong>
</p>

将 Web 服务层与应用层（也被称作平台层）分离，可以独立缩放和配置这两层。添加新的 API 只需要添加应用服务器，而不必添加额外的 web 服务器。

**单一职责原则**提倡小型的，自治的服务共同合作。小团队通过提供小型的服务，可以更激进地计划增长。

应用层中的工作进程也有可以实现[异步化](#异步)。

### 微服务

与此讨论相关的话题是 [微服务](https://en.wikipedia.org/wiki/Microservices)，可以被描述为一系列可以独立部署的小型的，模块化服务。每个服务运行在一个独立的线程中，通过明确定义的轻量级机制通讯，共同实现业务目标。<sup><a href=https://smartbear.com/learn/api-design/what-are-microservices>1</a></sup>

例如，Pinterest 可能有这些微服务： 用户资料、关注者、Feed 流、搜索、照片上传等。

### 服务发现

像 [Consul](https://www.consul.io/docs/index.html)，[Etcd](https://coreos.com/etcd/docs/latest) 和 [Zookeeper](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) 这样的系统可以通过追踪注册名、地址、端口等信息来帮助服务互相发现对方。[Health checks](https://www.consul.io/intro/getting-started/checks.html) 可以帮助确认服务的完整性和是否经常使用一个 [HTTP](#超文本传输协议http) 路径。Consul 和 Etcd 都有一个内建的 [key-value 存储](#键-值存储) 用来存储配置信息和其他的共享信息。

### 不利之处：应用层

- 添加由多个松耦合服务组成的应用层，从架构、运营、流程等层面来讲将非常不同（相对于单体系统）。
- 微服务会增加部署和运营的复杂度。


### 来源及延伸阅读

- [可缩放系统构架介绍](http://lethain.com/introduction-to-architecting-systems-for-scale)
- [破解系统设计面试](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)
- [面向服务架构](https://en.wikipedia.org/wiki/Service-oriented_architecture)
- [Zookeeper 介绍](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper)
- [构建微服务，你所需要知道的一切](https://cloudncode.wordpress.com/2016/07/22/msa-getting-started/)

## 数据库

<p align="center">
  <img src="images/Xkm5CXz.png">
  <br/>
  <strong><a href="https://www.youtube.com/watch?v=w95murBkYmU">资料来源：扩展你的用户数到第一个一千万</a></strong>
</p>

### 关系型数据库管理系统（RDBMS）

像 SQL 这样的关系型数据库是一系列以表的形式组织的数据项集合。

> 校对注：这里作者 SQL 可能指的是 MySQL

**ACID** 用来描述关系型数据库[事务](https://en.wikipedia.org/wiki/Database_transaction)的特性。

- **原子性** - 每个事务内部所有操作要么全部完成，要么全部不完成。
- **一致性** - 任何事务都使数据库从一个有效的状态转换到另一个有效状态。
- **隔离性** - 并发执行事务的结果与顺序执行事务的结果相同。
- **持久性** - 事务提交后，对系统的影响是永久的。

关系型数据库扩展包括许多技术：**主从复制**、**主主复制**、**联合**、**分片**、**非规范化**和 **SQL调优**。

<p align="center">
  <img src="images/C9ioGtn.png">
  <br/>
  <strong><a href="http://www.slideshare.net/jboner/scalability-availability-stability-patterns/">资料来源：可扩展性、可用性、稳定性、模式</a></strong>
</p>

#### 主从复制

主库同时负责读取和写入操作，并复制写入到一个或多个从库中，从库只负责读操作。树状形式的从库再将写入复制到更多的从库中去。如果主库离线，系统可以以只读模式运行，直到某个从库被提升为主库或有新的主库出现。

##### 不利之处：主从复制

- 将从库提升为主库需要额外的逻辑。
- 参考[不利之处：复制](#不利之处复制)中，主从复制和主主复制**共同**的问题。

<p align="center">
  <img src="images/krAHLGg.png">
  <br/>
  <strong><a href="http://www.slideshare.net/jboner/scalability-availability-stability-patterns/">资料来源：可扩展性、可用性、稳定性、模式</a></strong>
</p>

#### 主主复制

两个主库都负责读操作和写操作，写入操作时互相协调。如果其中一个主库挂机，系统可以继续读取和写入。

##### 不利之处： 主主复制

- 你需要添加负载均衡器或者在应用逻辑中做改动，来确定写入哪一个数据库。
- 多数主-主系统要么不能保证一致性（违反 ACID），要么因为同步产生了写入延迟。
- 随着更多写入节点的加入和延迟的提高，如何解决冲突显得越发重要。
- 参考[不利之处：复制](#不利之处复制)中，主从复制和主主复制**共同**的问题。

##### 不利之处：复制


- 如果主库在将新写入的数据复制到其他节点前挂掉，则有数据丢失的可能。
- 写入会被重放到负责读取操作的副本。副本可能因为过多写操作阻塞住，导致读取功能异常。
- 读取从库越多，需要复制的写入数据就越多，导致更严重的复制延迟。
- 在某些数据库系统中，写入主库的操作可以用多个线程并行写入，但读取副本只支持单线程顺序地写入。
- 复制意味着更多的硬件和额外的复杂度。


##### 来源及延伸阅读


- [扩展性，可用性，稳定性模式](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)
- [多主复制](https://en.wikipedia.org/wiki/Multi-master_replication)

#### 联合

<p align="center">
  <img src="images/U3qV33e.png">
  <br/>
  <strong><a href="https://www.youtube.com/watch?v=w95murBkYmU">资料来源：扩展你的用户数到第一个一千万</a></strong>
</p>

联合（或按功能划分）将数据库按对应功能分割。例如，你可以有三个数据库：**论坛**、**用户**和**产品**，而不仅是一个单体数据库，从而减少每个数据库的读取和写入流量，减少复制延迟。较小的数据库意味着更多适合放入内存的数据，进而意味着更高的缓存命中几率。没有只能串行写入的中心化主库，你可以并行写入，提高负载能力。

##### 不利之处：联合


- 如果你的数据库模式需要大量的功能和数据表，联合的效率并不好。
- 你需要更新应用程序的逻辑来确定要读取和写入哪个数据库。
- 用 [server link](http://stackoverflow.com/questions/5145637/querying-data-by-joining-two-tables-in-two-database-on-different-servers) 从两个库联结数据更复杂。
- 联合需要更多的硬件和额外的复杂度。

##### 来源及延伸阅读：联合

- [扩展你的用户数到第一个一千万](https://www.youtube.com/watch?v=w95murBkYmU)

#### 分片

<p align="center">
  <img src="images/wU8x5Id.png">
  <br/>
  <strong><a href="http://www.slideshare.net/jboner/scalability-availability-stability-patterns/">资料来源：可扩展性、可用性、稳定性、模式</a></strong>
</p>

分片将数据分配在不同的数据库上，使得每个数据库仅管理整个数据集的一个子集。以用户数据库为例，随着用户数量的增加，越来越多的分片会被添加到集群中。

类似[联合](#联合)的优点，分片可以减少读取和写入流量，减少复制并提高缓存命中率。也减少了索引，通常意味着查询更快，性能更好。如果一个分片出问题，其他的仍能运行，你可以使用某种形式的冗余来防止数据丢失。类似联合，没有只能串行写入的中心化主库，你可以并行写入，提高负载能力。

常见的做法是用户姓氏的首字母或者用户的地理位置来分隔用户表。

##### 不利之处：分片

- 你需要修改应用程序的逻辑来实现分片，这会带来复杂的 SQL 查询。
- 分片不合理可能导致数据负载不均衡。例如，被频繁访问的用户数据会导致其所在分片的负载相对其他分片高。
  - 再平衡会引入额外的复杂度。基于[一致性哈希](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html)的分片算法可以减少这种情况。
- 联结多个分片的数据操作更复杂。
- 分片需要更多的硬件和额外的复杂度。

#### 来源及延伸阅读：分片

- [分片时代来临](http://highscalability.com/blog/2009/8/6/an-unorthodox-approach-to-database-design-the-coming-of-the.html)
- [数据库分片架构](https://en.wikipedia.org/wiki/Shard_(database_architecture))
- [一致性哈希](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html)

#### 非规范化

非规范化试图以写入性能为代价来换取读取性能。在多个表中冗余数据副本，以避免高成本的联结操作。一些关系型数据库，比如 [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) 和 Oracle 支持[物化视图](https://en.wikipedia.org/wiki/Materialized_view)，可以处理冗余信息存储和保证冗余副本一致。

当数据使用诸如[联合](#联合)和[分片](#分片)等技术被分割，进一步提高了处理跨数据中心的联结操作复杂度。非规范化可以规避这种复杂的联结操作。

在多数系统中，读取操作的频率远高于写入操作，比例可达到 100:1，甚至 1000:1。需要复杂的数据库联结的读取操作成本非常高，在磁盘操作上消耗了大量时间。

##### 不利之处：非规范化

- 数据会冗余。
- 约束可以帮助冗余的信息副本保持同步，但这样会增加数据库设计的复杂度。
- 非规范化的数据库在高写入负载下性能可能比规范化的数据库差。

##### 来源及延伸阅读：非规范化

- [非规范化](https://en.wikipedia.org/wiki/Denormalization)

#### SQL 调优

SQL 调优是一个范围很广的话题，有很多相关的[书](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=sql+tuning)可以作为参考。

利用**基准测试**和**性能分析**来模拟和发现系统瓶颈很重要。

- **基准测试** - 用 [ab](http://httpd.apache.org/docs/2.2/programs/ab.html) 等工具模拟高负载情况。
- **性能分析** - 通过启用如[慢查询日志](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html)等工具来辅助追踪性能问题。

基准测试和性能分析可能会指引你到以下优化方案。

##### 改进模式

- 为了实现快速访问，MySQL 在磁盘上用连续的块存储数据。
- 使用 `CHAR` 类型存储固定长度的字段，不要用 `VARCHAR`。
  - `CHAR` 在快速、随机访问时效率很高。如果使用 `VARCHAR`，如果你想读取下一个字符串，不得不先读取到当前字符串的末尾。
- 使用 `TEXT` 类型存储大块的文本，例如博客正文。`TEXT` 还允许布尔搜索。使用 `TEXT` 字段需要在磁盘上存储一个用于定位文本块的指针。
- 使用 `INT` 类型存储高达 2^32 或 40 亿的较大数字。
- 使用 `DECIMAL` 类型存储货币可以避免浮点数表示错误。
- 避免使用 `BLOBS` 存储实际对象，而是用来存储存放对象的位置。
- `VARCHAR(255)` 是以 8 位数字存储的最大字符数，在某些关系型数据库中，最大限度地利用字节。
- 在适用场景中设置 `NOT NULL` 约束来[提高搜索性能](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search)。

##### 使用正确的索引

- 你正查询（`SELECT`、`GROUP BY`、`ORDER BY`、`JOIN`）的列如果用了索引会更快。
- 索引通常表示为自平衡的 [B 树](https://en.wikipedia.org/wiki/B-tree)，可以保持数据有序，并允许在对数时间内进行搜索，顺序访问，插入，删除操作。
- 设置索引，会将数据存在内存中，占用了更多内存空间。
- 写入操作会变慢，因为索引需要被更新。
- 加载大量数据时，禁用索引再加载数据，然后重建索引，这样也许会更快。

##### 避免高成本的联结操作

- 有性能需要，可以进行非规范化。

##### 分割数据表

- 将热点数据拆分到单独的数据表中，可以有助于缓存。

##### 调优查询缓存

- 在某些情况下，[查询缓存](http://dev.mysql.com/doc/refman/5.7/en/query-cache)可能会导致[性能问题](https://www.percona.com/blog/2014/01/28/10-mysql-performance-tuning-settings-after-installation/)。

##### 来源及延伸阅读

- [MySQL 查询优化小贴士](http://20bits.com/article/10-tips-for-optimizing-mysql-queries-that-dont-suck)
- [为什么 VARCHAR(255) 很常见？](http://stackoverflow.com/questions/1217466/is-there-a-good-reason-i-see-varchar255-used-so-often-as-opposed-to-another-l)
- [Null 值是如何影响数据库性能的？](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search)
- [慢查询日志](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html)

### NoSQL

NoSQL 是**键-值数据库**、**文档型数据库**、**列型数据库**或**图数据库**的统称。数据库是非规范化的，表联结大多在应用程序代码中完成。大多数 NoSQL 无法实现真正符合 ACID 的事务，支持[最终一致](#最终一致性)。

**BASE** 通常被用于描述 NoSQL 数据库的特性。相比 [CAP 理论](#cap-理论)，BASE 强调可用性超过一致性。

- **基本可用** - 系统保证可用性。
- **软状态** - 即使没有输入，系统状态也可能随着时间变化。
- **最终一致性** - 经过一段时间之后，系统最终会变一致，因为系统在此期间没有收到任何输入。

除了在 [SQL 还是 NoSQL](#sql-还是-nosql) 之间做选择，了解哪种类型的 NoSQL 数据库最适合你的用例也是非常有帮助的。我们将在下一节中快速了解下 **键-值存储**、**文档型存储**、**列型存储**和**图存储**数据库。

#### 键-值存储

> 抽象模型：哈希表

键-值存储通常可以实现 O(1) 时间读写，用内存或 SSD 存储数据。数据存储可以按[字典顺序](https://en.wikipedia.org/wiki/Lexicographical_order)维护键，从而实现键的高效检索。键-值存储可以用于存储元数据。

键-值存储性能很高，通常用于存储简单数据模型或频繁修改的数据，如存放在内存中的缓存。键-值存储提供的操作有限，如果需要更多操作，复杂度将转嫁到应用程序层面。

键-值存储是如文档存储，在某些情况下，甚至是图存储等更复杂的存储系统的基础。

#### 来源及延伸阅读

- [键-值数据库](https://en.wikipedia.org/wiki/Key-value_database)
- [键-值存储的劣势](http://stackoverflow.com/questions/4056093/what-are-the-disadvantages-of-using-a-key-value-table-over-nullable-columns-or)
- [Redis 架构](http://qnimate.com/overview-of-redis-architecture/)
- [Memcached 架构](https://adayinthelifeof.nl/2011/02/06/memcache-internals/)

#### 文档类型存储

> 抽象模型：将文档作为值的键-值存储

文档类型存储以文档（XML、JSON、二进制文件等）为中心，文档存储了指定对象的全部信息。文档存储根据文档自身的内部结构提供 API 或查询语句来实现查询。请注意，许多键-值存储数据库有用值存储元数据的特性，这也模糊了这两种存储类型的界限。

基于底层实现，文档可以根据集合、标签、元数据或者文件夹组织。尽管不同文档可以被组织在一起或者分成一组，但相互之间可能具有完全不同的字段。

MongoDB 和 CouchDB 等一些文档类型存储还提供了类似 SQL 语言的查询语句来实现复杂查询。DynamoDB 同时支持键-值存储和文档类型存储。

文档类型存储具备高度的灵活性，常用于处理偶尔变化的数据。

#### 来源及延伸阅读：文档类型存储

- [面向文档的数据库](https://en.wikipedia.org/wiki/Document-oriented_database)
- [MongoDB 架构](https://www.mongodb.com/mongodb-architecture)
- [CouchDB 架构](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/)
- [Elasticsearch 架构](https://www.elastic.co/blog/found-elasticsearch-from-the-bottom-up)

#### 列型存储

<p align="center">
  <img src="images/n16iOGk.png">
  <br/>
  <strong><a href="http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html">资料来源: SQL 和 NoSQL，一个简短的历史</a></strong>
</p>

> 抽象模型：嵌套的 `ColumnFamily<RowKey, Columns<ColKey, Value, Timestamp>>` 映射

类型存储的基本数据单元是列（名／值对）。列可以在列族（类似于 SQL 的数据表）中被分组。超级列族再分组普通列族。你可以使用行键独立访问每一列，具有相同行键值的列组成一行。每个值都包含版本的时间戳用于解决版本冲突。

Google 发布了第一个列型存储数据库 [Bigtable](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf)，它影响了 Hadoop 生态系统中活跃的开源数据库 [HBase](https://www.mapr.com/blog/in-depth-look-hbase-architecture) 和 Facebook 的 [Cassandra](http://docs.datastax.com/en/archived/cassandra/2.0/cassandra/architecture/architectureIntro_c.html)。像 BigTable，HBase 和 Cassandra 这样的存储系统将键以字母顺序存储，可以高效地读取键列。

列型存储具备高可用性和高可扩展性。通常被用于大数据相关存储。

##### 来源及延伸阅读：列型存储

- [SQL 与 NoSQL 简史](http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html)
- [BigTable 架构](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf)
- [Hbase 架构](https://www.mapr.com/blog/in-depth-look-hbase-architecture)
- [Cassandra 架构](http://docs.datastax.com/en/archived/cassandra/2.0/cassandra/architecture/architectureIntro_c.html)

#### 图数据库

<p align="center">
  <img src="images/fNcl65g.png">
  <br/>
  <strong><a href="https://en.wikipedia.org/wiki/File:GraphDatabase_PropertyGraph.png"/>资料来源：图数据库</a></strong>
</p>

> 抽象模型： 图

在图数据库中，一个节点对应一条记录，一个弧对应两个节点之间的关系。图数据库被优化用于表示外键繁多的复杂关系或多对多关系。

图数据库为存储复杂关系的数据模型，如社交网络，提供了很高的性能。它们相对较新，尚未广泛应用，查找开发工具或者资源相对较难。许多图只能通过 [REST API](#表述性状态转移rest) 访问。

##### 相关资源和延伸阅读：图
- [图数据库](https://en.wikipedia.org/wiki/Graph_database)
- [Neo4j](https://neo4j.com/)
- [FlockDB](https://blog.twitter.com/2010/introducing-flockdb)

#### 来源及延伸阅读：NoSQL

- [数据库术语解释](http://stackoverflow.com/questions/3342497/explanation-of-base-terminology)
- [NoSQL 数据库 - 调查及决策指南](https://medium.com/baqend-blog/nosql-databases-a-survey-and-decision-guidance-ea7823a822d#.wskogqenq)
- [可扩展性](http://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
- [NoSQL 介绍](https://www.youtube.com/watch?v=qI_g07C_Q5I)
- [NoSQL 模式](http://horicky.blogspot.com/2009/11/nosql-patterns.html)

### SQL 还是 NoSQL

<p align="center">
  <img src="images/wXGqG5f.png">
  <br/>
  <strong><a href="https://www.infoq.com/articles/Transition-RDBMS-NoSQL/">资料来源：从 RDBMS 转换到 NoSQL</a></strong>
</p>

选取 **SQL** 的原因:

- 结构化数据
- 严格的模式
- 关系型数据
- 需要复杂的联结操作
- 事务
- 清晰的扩展模式
- 既有资源更丰富：开发者、社区、代码库、工具等
- 通过索引进行查询非常快

选取 **NoSQL** 的原因：

- 半结构化数据
- 动态或灵活的模式
- 非关系型数据
- 不需要复杂的联结操作
- 存储 TB （甚至 PB）级别的数据
- 高数据密集的工作负载
- IOPS 高吞吐量

适合 NoSQL 的示例数据：

- 埋点数据和日志数据
- 排行榜或者得分数据
- 临时数据，如购物车
- 频繁访问的（“热”）表
- 元数据／查找表

##### 来源及延伸阅读：SQL 或 NoSQL

- [扩展你的用户数到第一个千万](https://www.youtube.com/watch?v=w95murBkYmU)
- [SQL 和 NoSQL 的不同](https://www.sitepoint.com/sql-vs-nosql-differences/)
## 缓存

<p align="center">
  <img src="images/Q6z24La.png">
  <br/>
  <strong><a href="http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html">资料来源：可扩展的系统设计模式</a></strong>
</p>

缓存可以提高页面加载速度，并可以减少服务器和数据库的负载。在这个模型中，分发器先查看请求之前是否被响应过，如果有则将之前的结果直接返回，来省掉真正的处理。

数据库分片均匀分布的读取是最好的。但是热门数据会让读取分布不均匀，这样就会造成瓶颈，如果在数据库前加个缓存，就会抹平不均匀的负载和突发流量对数据库的影响。

### 客户端缓存

缓存可以位于客户端（操作系统或者浏览器），[服务端](#反向代理web-服务器)或者不同的缓存层。

### CDN 缓存

[CDN](#内容分发网络cdn) 也被视为一种缓存。

### Web 服务器缓存

[反向代理](#反向代理web-服务器)和缓存（比如 [Varnish](https://www.varnish-cache.org/)）可以直接提供静态和动态内容。Web 服务器同样也可以缓存请求，返回相应结果而不必连接应用服务器。

### 数据库缓存

数据库的默认配置中通常包含缓存级别，针对一般用例进行了优化。调整配置，在不同情况下使用不同的模式可以进一步提高性能。

### 应用缓存

基于内存的缓存比如 Memcached 和 Redis 是应用程序和数据存储之间的一种键值存储。由于数据保存在 RAM 中，它比存储在磁盘上的典型数据库要快多了。RAM 比磁盘限制更多，所以例如 [least recently used (LRU)](https://en.wikipedia.org/wiki/Cache_algorithms#Least_Recently_Used) 的[缓存无效算法](https://en.wikipedia.org/wiki/Cache_algorithms)可以将「热门数据」放在 RAM 中，而对一些比较「冷门」的数据不做处理。

Redis 有下列附加功能：

- 持久性选项
- 内置数据结构比如有序集合和列表

有多个缓存级别，分为两大类：**数据库查询**和**对象**：

- 行级别
- 查询级别
- 完整的可序列化对象
- 完全渲染的 HTML

一般来说，你应该尽量避免基于文件的缓存，因为这使得复制和自动缩放很困难。

### 数据库查询级别的缓存

当你查询数据库的时候，将查询语句的哈希值与查询结果存储到缓存中。这种方法会遇到以下问题：

- 很难用复杂的查询删除已缓存结果。
- 如果一条数据比如表中某条数据的一项被改变，则需要删除所有可能包含已更改项的缓存结果。

### 对象级别的缓存

将您的数据视为对象，就像对待你的应用代码一样。让应用程序将数据从数据库中组合到类实例或数据结构中：

- 如果对象的基础数据已经更改了，那么从缓存中删掉这个对象。
- 允许异步处理：workers 通过使用最新的缓存对象来组装对象。

建议缓存的内容：

- 用户会话
- 完全渲染的 Web 页面
- 活动流
- 用户图数据

### 何时更新缓存

由于你只能在缓存中存储有限的数据，所以你需要选择一个适用于你用例的缓存更新策略。

#### 缓存模式

<p align="center">
  <img src="images/ONjORqk.png">
  <br/>
  <strong><a href="http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast">资料来源：从缓存到内存数据网格</a></strong>
</p>

应用从存储器读写。缓存不和存储器直接交互，应用执行以下操作：

- 在缓存中查找记录，如果所需数据不在缓存中
- 从数据库中加载所需内容
- 将查找到的结果存储到缓存中
- 返回所需内容

```python
def get_user(self, user_id):
    user = cache.get("user.{0}", user_id)
    if user is None:
        user = db.query("SELECT * FROM users WHERE user_id = {0}", user_id)
        if user is not None:
            key = "user.{0}".format(user_id)
            cache.set(key, json.dumps(user))
    return user
```

[Memcached](https://memcached.org/) 通常用这种方式使用。

添加到缓存中的数据读取速度很快。缓存模式也称为延迟加载。只缓存所请求的数据，这避免了没有被请求的数据占满了缓存空间。

##### 缓存的缺点：

- 请求的数据如果不在缓存中就需要经过三个步骤来获取数据，这会导致明显的延迟。
- 如果数据库中的数据更新了会导致缓存中的数据过时。这个问题需要通过设置 TTL 强制更新缓存或者直写模式来缓解这种情况。
- 当一个节点出现故障的时候，它将会被一个新的节点替代，这增加了延迟的时间。

#### 直写模式

<p align="center">
  <img src="images/0vBc0hN.png">
  <br/>
  <strong><a href="http://www.slideshare.net/jboner/scalability-availability-stability-patterns/">资料来源：可扩展性、可用性、稳定性、模式</a></strong>
</p>

应用使用缓存作为主要的数据存储，将数据读写到缓存中，而缓存负责从数据库中读写数据。

- 应用向缓存中添加/更新数据
- 缓存同步地写入数据存储
- 返回所需内容

应用代码：

```
set_user(12345, {"foo":"bar"})
```

缓存代码：

```python
def set_user(user_id, values):
    user = db.query("UPDATE Users WHERE id = {0}", user_id, values)
    cache.set(user_id, user)
```

由于存写操作所以直写模式整体是一种很慢的操作，但是读取刚写入的数据很快。相比读取数据，用户通常比较能接受更新数据时速度较慢。缓存中的数据不会过时。

##### 直写模式的缺点：

- 由于故障或者缩放而创建的新的节点，新的节点不会缓存，直到数据库更新为止。缓存应用直写模式可以缓解这个问题。
- 写入的大多数数据可能永远都不会被读取，用 TTL 可以最小化这种情况的出现。

#### 回写模式

<p align="center">
  <img src="images/rgSrvjG.png">
  <br/>
  <strong><a href="http://www.slideshare.net/jboner/scalability-availability-stability-patterns/">资料来源：可扩展性、可用性、稳定性、模式</a></strong>
</p>

在回写模式中，应用执行以下操作：

- 在缓存中增加或者更新条目
- 异步写入数据，提高写入性能。

##### 回写模式的缺点：

- 缓存可能在其内容成功存储之前丢失数据。
- 执行直写模式比缓存或者回写模式更复杂。

#### 刷新

<p align="center">
  <img src="images/kxtjqgE.png">
  <br/>
  <strong><a href=http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast>资料来源：从缓存到内存数据网格</a></strong>
</p>

你可以将缓存配置成在到期之前自动刷新最近访问过的内容。

如果缓存可以准确预测将来可能请求哪些数据，那么刷新可能会导致延迟与读取时间的降低。

##### 刷新的缺点：

- 不能准确预测到未来需要用到的数据可能会导致性能不如不使用刷新。

### 缓存的缺点：

- 需要保持缓存和真实数据源之间的一致性，比如数据库根据[缓存无效](https://en.wikipedia.org/wiki/Cache_algorithms)。
- 需要改变应用程序比如增加 Redis 或者 memcached。
- 无效缓存是个难题，什么时候更新缓存是与之相关的复杂问题。

### 相关资源和延伸阅读

- [从缓存到内存数据](http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast)
- [可扩展系统设计模式](http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html)
- [可缩放系统构架介绍](http://lethain.com/introduction-to-architecting-systems-for-scale/)
- [可扩展性，可用性，稳定性和模式](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)
- [可扩展性](http://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
- [AWS ElastiCache 策略](http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/Strategies.html)
- [维基百科](https://en.wikipedia.org/wiki/Cache_(computing))

## 异步

<p align="center">
  <img src="images/54GYsSx.png">
  <br/>
  <strong><a href=http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer>资料来源：可缩放系统构架介绍</a></strong>
</p>

异步工作流有助于减少那些原本顺序执行的请求时间。它们可以通过提前进行一些耗时的工作来帮助减少请求时间，比如定期汇总数据。

### 消息队列

消息队列接收，保留和传递消息。如果按顺序执行操作太慢的话，你可以使用有以下工作流的消息队列：

- 应用程序将作业发布到队列，然后通知用户作业状态
- 一个 worker 从队列中取出该作业，对其进行处理，然后显示该作业完成

不去阻塞用户操作，作业在后台处理。在此期间，客户端可能会进行一些处理使得看上去像是任务已经完成了。例如，如果要发送一条推文，推文可能会马上出现在你的时间线上，但是可能需要一些时间才能将你的推文推送到你的所有关注者那里去。

**Redis** 是一个令人满意的简单的消息代理，但是消息有可能会丢失。

**RabbitMQ** 很受欢迎但是要求你适应「AMQP」协议并且管理你自己的节点。

**Amazon SQS** 是被托管的，但可能具有高延迟，并且消息可能会被传送两次。

### 任务队列

任务队列接收任务及其相关数据，运行它们，然后传递其结果。 它们可以支持调度，并可用于在后台运行计算密集型作业。

**Celery** 支持调度，主要是用 Python 开发的。

### 背压

如果队列开始明显增长，那么队列大小可能会超过内存大小，导致高速缓存未命中，磁盘读取，甚至性能更慢。[背压](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)可以通过限制队列大小来帮助我们，从而为队列中的作业保持高吞吐率和良好的响应时间。一旦队列填满，客户端将得到服务器忙或者 HTTP 503 状态码，以便稍后重试。客户端可以在稍后时间重试该请求，也许是[指数退避](https://en.wikipedia.org/wiki/Exponential_backoff)。

### 异步的缺点：

- 简单的计算和实时工作流等用例可能更适用于同步操作，因为引入队列可能会增加延迟和复杂性。

### 相关资源和延伸阅读

- [这是一个数字游戏](https://www.youtube.com/watch?v=1KRYH75wgy4)
- [超载时应用背压](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)
- [利特尔法则](https://en.wikipedia.org/wiki/Little%27s_law)
- [消息队列与任务队列有什么区别？](https://www.quora.com/What-is-the-difference-between-a-message-queue-and-a-task-queue-Why-would-a-task-queue-require-a-message-broker-like-RabbitMQ-Redis-Celery-or-IronMQ-to-function)

## 通讯

<p align="center">
  <img src="images/5KeocQs.jpg">
  <br/>
  <strong><a href=http://www.escotal.com/osilayer.html>资料来源：OSI 7层模型</a></strong>
</p>

### 超文本传输协议（HTTP）

HTTP 是一种在客户端和服务器之间编码和传输数据的方法。它是一个请求/响应协议：客户端和服务端针对相关内容和完成状态信息的请求和响应。HTTP 是独立的，允许请求和响应流经许多执行负载均衡，缓存，加密和压缩的中间路由器和服务器。

一个基本的 HTTP 请求由一个动词（方法）和一个资源（端点）组成。 以下是常见的 HTTP 动词：

| 动词     | 描述             | *幂等  | 安全性  | 可缓存            |
| ------ | -------------- | ---- | ---- | -------------- |
| GET    | 读取资源           | Yes  | Yes  | Yes            |
| POST   | 创建资源或触发处理数据的进程 | No   | No   | Yes，如果回应包含刷新信息 |
| PUT    | 创建或替换资源        | Yes  | No   | No             |
| PATCH  | 部分更新资源         | No   | No   | Yes，如果回应包含刷新信息 |
| DELETE | 删除资源           | Yes  | No   | No             |



**多次执行不会产生不同的结果**。

HTTP 是依赖于较低级协议（如 **TCP** 和 **UDP**）的应用层协议。

#### 来源及延伸阅读：HTTP

* [README](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol)    +
* [HTTP 是什么？](https://www.nginx.com/resources/glossary/http/)
* [HTTP 和 TCP 的区别](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol)
* [PUT 和 PATCH的区别](https://laracasts.com/discuss/channels/general-discussion/whats-the-differences-between-put-and-patch?page=1)

### 传输控制协议（TCP）

<p align="center">
  <img src="images/JdAsdvG.jpg">
  <br/>
  <strong><a href="http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/">资料来源：如何制作多人游戏</a></strong>
</p>

TCP 是通过 [IP 网络](https://en.wikipedia.org/wiki/Internet_Protocol)的面向连接的协议。 使用[握手](https://en.wikipedia.org/wiki/Handshaking)建立和断开连接。 发送的所有数据包保证以原始顺序到达目的地，用以下措施保证数据包不被损坏：

- 每个数据包的序列号和[校验码](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Checksum_computation)。
- [确认包](https://en.wikipedia.org/wiki/Acknowledgement_(data_networks))和自动重传

如果发送者没有收到正确的响应，它将重新发送数据包。如果多次超时，连接就会断开。TCP 实行[流量控制](https://en.wikipedia.org/wiki/Flow_control_(data))和[拥塞控制](https://en.wikipedia.org/wiki/Network_congestion#Congestion_control)。这些确保措施会导致延迟，而且通常导致传输效率比 UDP 低。

为了确保高吞吐量，Web 服务器可以保持大量的 TCP 连接，从而导致高内存使用。在 Web 服务器线程间拥有大量开放连接可能开销巨大，消耗资源过多，也就是说，一个 [memcached](#memcached) 服务器。[连接池](https://en.wikipedia.org/wiki/Connection_pool) 可以帮助除了在适用的情况下切换到 UDP。

TCP  对于需要高可靠性但时间紧迫的应用程序很有用。比如包括 Web 服务器，数据库信息，SMTP，FTP 和 SSH。

以下情况使用 TCP 代替 UDP：

- 你需要数据完好无损。
- 你想对网络吞吐量自动进行最佳评估。

### 用户数据报协议（UDP）

<p align="center">
  <img src="images/yzDrJtA.jpg">
  <br/>
  <strong><a href="http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1">资料来源：如何制作多人游戏</a></strong>
</p>

UDP 是无连接的。数据报（类似于数据包）只在数据报级别有保证。数据报可能会无序的到达目的地，也有可能会遗失。UDP 不支持拥塞控制。虽然不如 TCP 那样有保证，但 UDP 通常效率更高。

UDP 可以通过广播将数据报发送至子网内的所有设备。这对 [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) 很有用，因为子网内的设备还没有分配 IP 地址，而 IP 对于 TCP 是必须的。

UDP 可靠性更低但适合用在网络电话、视频聊天，流媒体和实时多人游戏上。

以下情况使用 UDP 代替 TCP：

* 你需要低延迟
* 相对于数据丢失更糟的是数据延迟
* 你想实现自己的错误校正方法

#### 来源及延伸阅读：TCP 与 UDP

* [游戏编程的网络](http://gafferongames.com/networking-for-game-programmers/udp-vs-tcp/)
* [TCP 与 UDP 的关键区别](http://www.cyberciti.biz/faq/key-differences-between-tcp-and-udp-protocols/)
* [TCP 与 UDP 的不同](http://stackoverflow.com/questions/5970383/difference-between-tcp-and-udp)
* [传输控制协议](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
* [用户数据报协议](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
* [Memcache 在 Facebook 的扩展](http://www.cs.bu.edu/~jappavoo/jappavoo.github.com/451/papers/memcache-fb.pdf)

### 远程过程调用协议（RPC）

<p align="center">
  <img src="images/iF4Mkb5.png">
  <br/>
  <strong><a href="http://www.puncsky.com/blog/2016/02/14/crack-the-system-design-interview">Source: Crack the system design interview</a></strong>
</p>

在 RPC 中，客户端会去调用另一个地址空间（通常是一个远程服务器）里的方法。调用代码看起来就像是调用的是一个本地方法，客户端和服务器交互的具体过程被抽象。远程调用相对于本地调用一般较慢而且可靠性更差，因此区分两者是有帮助的。热门的 RPC 框架包括 [Protobuf](https://developers.google.com/protocol-buffers/)、[Thrift](https://thrift.apache.org/) 和 [Avro](https://avro.apache.org/docs/current/)。

RPC 是一个“请求-响应”协议：

* **客户端程序** ── 调用客户端存根程序。就像调用本地方法一样，参数会被压入栈中。
* **客户端 stub 程序** ── 将请求过程的 id 和参数打包进请求信息中。
* **客户端通信模块** ── 将信息从客户端发送至服务端。
* **服务端通信模块** ── 将接受的包传给服务端存根程序。
* **服务端 stub 程序** ── 将结果解包，依据过程 id 调用服务端方法并将参数传递过去。

RPC 调用示例：

```
GET /someoperation?data=anId

POST /anotheroperation
{
  "data":"anId";
  "anotherdata": "another value"
}
```

RPC 专注于暴露方法。RPC 通常用于处理内部通讯的性能问题，这样你可以手动处理本地调用以更好的适应你的情况。


当以下情况时选择本地库（也就是 SDK）：

* 你知道你的目标平台。
* 你想控制如何访问你的“逻辑”。
* 你想对发生在你的库中的错误进行控制。
* 性能和终端用户体验是你最关心的事。

遵循 **REST** 的 HTTP API 往往更适用于公共 API。

#### 缺点：RPC

* RPC 客户端与服务实现捆绑地很紧密。
* 一个新的 API 必须在每一个操作或者用例中定义。
* RPC 很难调试。
* 你可能没办法很方便的去修改现有的技术。举个例子，如果你希望在 [Squid](http://www.squid-cache.org/) 这样的缓存服务器上确保 [RPC 被正确缓存](https://web.archive.org/web/20170608193645/http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/)的话可能需要一些额外的努力了。

### 表述性状态转移（REST）

REST 是一种强制的客户端/服务端架构设计模型，客户端基于服务端管理的一系列资源操作。服务端提供修改或获取资源的接口。所有的通信必须是无状态和可缓存的。

RESTful 接口有四条规则：

* **标志资源（HTTP 里的 URI）** ── 无论什么操作都使用同一个 URI。
* **表示的改变（HTTP 的动作）** ── 使用动作, headers 和 body。
* **可自我描述的错误信息（HTTP 中的 status code）** ── 使用状态码，不要重新造轮子。
* **[HATEOAS](http://restcookbook.com/Basics/hateoas/)（HTTP 中的HTML 接口）** ── 你的 web 服务器应该能够通过浏览器访问。

REST 请求的例子：

```
GET /someresources/anId

PUT /someresources/anId
{"anotherdata": "another value"}
```

REST 关注于暴露数据。它减少了客户端／服务端的耦合程度，经常用于公共 HTTP API 接口设计。REST 使用更通常与规范化的方法来通过 URI 暴露资源，[通过 header 来表述](https://github.com/for-GET/know-your-http-well/blob/master/headers.md)并通过 GET、POST、PUT、DELETE 和 PATCH 这些动作来进行操作。因为无状态的特性，REST 易于横向扩展和隔离。

#### 缺点：REST

* 由于 REST 将重点放在暴露数据，所以当资源不是自然组织的或者结构复杂的时候它可能无法很好的适应。举个例子，返回过去一小时中与特定事件集匹配的更新记录这种操作就很难表示为路径。使用 REST，可能会使用 URI 路径，查询参数和可能的请求体来实现。
* REST 一般依赖几个动作（GET、POST、PUT、DELETE 和 PATCH），但有时候仅仅这些没法满足你的需要。举个例子，将过期的文档移动到归档文件夹里去，这样的操作可能没法简单的用上面这几个 verbs 表达。
* 为了渲染单个页面，获取被嵌套在层级结构中的复杂资源需要客户端，服务器之间多次往返通信。例如，获取博客内容及其关联评论。对于使用不确定网络环境的移动应用来说，这些多次往返通信是非常麻烦的。
* 随着时间的推移，更多的字段可能会被添加到 API 响应中，较旧的客户端将会接收到所有新的数据字段，即使是那些它们不需要的字段，结果它会增加负载大小并引起更大的延迟。

### RPC 与 REST 比较

| 操作          | RPC                                      | REST                                     |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| 注册          | **POST** /signup                         | **POST** /persons                        |
| 注销          | **POST** /resign<br/>{<br/>"personid": "1234"<br/>} | **DELETE** /persons/1234                 |
| 读取用户信息      | **GET** /readPerson?personid=1234        | **GET** /persons/1234                    |
| 读取用户物品列表    | **GET** /readUsersItemsList?personid=1234 | **GET** /persons/1234/items              |
| 向用户物品列表添加一项 | **POST** /addItemToUsersItemsList<br/>{<br/>"personid": "1234";<br/>"itemid": "456"<br/>} | **POST** /persons/1234/items<br/>{<br/>"itemid": "456"<br/>} |
| 更新一个物品      | **POST** /modifyItem<br/>{<br/>"itemid": "456";<br/>"key": "value"<br/>} | **PUT** /items/456<br/>{<br/>"key": "value"<br/>} |
| 删除一个物品      | **POST** /removeItem<br/>{<br/>"itemid": "456"<br/>} | **DELETE** /items/456                    |

<p align="center">
  <strong><a href="https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc">资料来源：你真的知道你为什么更喜欢 REST 而不是 RPC 吗</a></strong>
</p>

#### 来源及延伸阅读：REST 与 RPC

* [你真的知道你为什么更喜欢 REST 而不是 RPC 吗](https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/)
* [什么时候 RPC 比 REST 更合适？](http://programmers.stackexchange.com/a/181186)
* [REST vs JSON-RPC](http://stackoverflow.com/questions/15056878/rest-vs-json-rpc)
* [揭开 RPC 和 REST 的神秘面纱](https://web.archive.org/web/20170608193645/http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/)
* [使用 REST 的缺点是什么](https://www.quora.com/What-are-the-drawbacks-of-using-RESTful-APIs)
* [破解系统设计面试](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)
* [Thrift](https://code.facebook.com/posts/1468950976659943/)
* [为什么在内部使用 REST 而不是 RPC](http://arstechnica.com/civis/viewtopic.php?t=1190508)

## 安全

这一部分需要更多内容。[一起来吧](#贡献)！

安全是一个宽泛的话题。除非你有相当的经验、安全方面背景或者正在申请的职位要求安全知识，你不需要了解安全基础知识以外的内容：

* 在运输和等待过程中加密
* 对所有的用户输入和从用户那里发来的参数进行处理以防止 [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) 和 [SQL 注入](https://en.wikipedia.org/wiki/SQL_injection)。
* 使用参数化的查询来防止 SQL 注入。
* 使用[最小权限原则](https://en.wikipedia.org/wiki/Principle_of_least_privilege)。

### 来源及延伸阅读

* [为开发者准备的安全引导](https://github.com/FallibleInc/security-guide-for-developers)
* [OWASP top ten](https://www.owasp.org/index.php/OWASP_Top_Ten_Cheat_Sheet)

## 附录

一些时候你会被要求做出保守估计。比如，你可能需要估计从磁盘中生成 100 张图片的缩略图需要的时间或者一个数据结构需要多少的内存。**2 的次方表**和**每个开发者都需要知道的一些时间数据**（译注：OSChina 上有这篇文章的[译文](https://www.oschina.net/news/30009/every-programmer-should-know)）都是一些很方便的参考资料。

### 2 的次方表

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

#### 来源及延伸阅读

* [2 的次方](https://en.wikipedia.org/wiki/Power_of_two)

### 每个程序员都应该知道的延迟数

```
Latency Comparison Numbers
--------------------------
L1 cache reference                           0.5 ns
Branch mispredict                            5   ns
L2 cache reference                           7   ns                      14x L1 cache
Mutex lock/unlock                           25   ns
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

基于上述数字的指标：
* 从磁盘以 30 MB/s 的速度顺序读取
* 以 100 MB/s 从 1 Gbps 的以太网顺序读取
* 从 SSD 以 1 GB/s 的速度读取
* 以 4 GB/s 的速度从主存读取
* 每秒能绕地球 6-7 圈
* 数据中心内每秒有 2,000 次往返

#### 延迟数可视化

![](https://camo.githubusercontent.com/77f72259e1eb58596b564d1ad823af1853bc60a3/687474703a2f2f692e696d6775722e636f6d2f6b307431652e706e67)

#### 来源及延伸阅读

* [每个程序员都应该知道的延迟数 — 1](https://gist.github.com/jboner/2841832)
* [每个程序员都应该知道的延迟数 — 2](https://gist.github.com/hellerbarde/2843375)
* [关于建设大型分布式系统的的设计方案、课程和建议](http://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf)
* [关于建设大型可拓展分布式系统的软件工程咨询](https://static.googleusercontent.com/media/research.google.com/en//people/jeff/stanford-295-talk.pdf)

### 其它的系统设计面试题

> 常见的系统设计面试问题，给出了如何解决的方案链接

| 问题                      | 引用                                       |
| ----------------------- | ---------------------------------------- |
| 设计类似于 Dropbox 的文件同步服务   | [youtube.com](https://www.youtube.com/watch?v=PE4gwstWhmc) |
| 设计类似于 Google 的搜索引擎      | [queue.acm.org](http://queue.acm.org/detail.cfm?id=988407)<br/>[stackexchange.com](http://programmers.stackexchange.com/questions/38324/interview-question-how-would-you-implement-google-search)<br/>[ardendertat.com](http://www.ardendertat.com/2012/01/11/implementing-search-engines/)<br/>[stanford.edu](http://infolab.stanford.edu/~backrub/google.html) |
| 设计类似于 Google 的可扩展网络爬虫   | [quora.com](https://www.quora.com/How-can-I-build-a-web-crawler-from-scratch) |
| 设计 Google 文档            | [code.google.com](https://code.google.com/p/google-mobwrite/)<br/>[neil.fraser.name](https://neil.fraser.name/writing/sync/) |
| 设计类似 Redis 的键值存储        | [slideshare.net](http://www.slideshare.net/dvirsky/introduction-to-redis) |
| 设计类似 Memcached 的缓存系统    | [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached) |
| 设计类似亚马逊的推荐系统            | [hulu.com](http://tech.hulu.com/blog/2011/09/19/recommendation-system.html)<br/>[ijcai13.org](http://ijcai13.org/files/tutorial_slides/td3.pdf) |
| 设计类似 Bitly 的短链接系统       | [n00tc0d3r.blogspot.com](http://n00tc0d3r.blogspot.com/) |
| 设计类似 WhatsApp 的聊天应用     | [highscalability.com](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html) |
| 设计类似 Instagram 的图片分享系统  | [highscalability.com](http://highscalability.com/flickr-architecture)<br/>[highscalability.com](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html) |
| 设计 Facebook 的新闻推荐方法     | [quora.com](http://www.quora.com/What-are-best-practices-for-building-something-like-a-News-Feed)<br/>[quora.com](http://www.quora.com/Activity-Streams/What-are-the-scaling-issues-to-keep-in-mind-while-developing-a-social-network-feed)<br/>[slideshare.net](http://www.slideshare.net/danmckinley/etsy-activity-feeds-architecture) |
| 设计 Facebook 的时间线系统      | [facebook.com](https://www.facebook.com/note.php?note_id=10150468255628920)<br/>[highscalability.com](http://highscalability.com/blog/2012/1/23/facebook-timeline-brought-to-you-by-the-power-of-denormaliza.html) |
| 设计 Facebook 的聊天系统       | [erlang-factory.com](http://www.erlang-factory.com/upload/presentations/31/EugeneLetuchy-ErlangatFacebook.pdf)<br/>[facebook.com](https://www.facebook.com/note.php?note_id=14218138919&id=9445547199&index=0) |
| 设计类似 Facebook 的图表搜索系统   | [facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-building-out-the-infrastructure-for-graph-search/10151347573598920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-indexing-and-ranking-in-graph-search/10151361720763920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-the-natural-language-interface-of-graph-search/10151432733048920) |
| 设计类似 CloudFlare 的内容传递网络 | [cmu.edu](http://repository.cmu.edu/cgi/viewcontent.cgi?article=2112&context=compsci) |
| 设计类似 Twitter 的热门话题系统    | [michael-noll.com](http://www.michael-noll.com/blog/2013/01/18/implementing-real-time-trending-topics-in-storm/)<br/>[snikolov .wordpress.com](http://snikolov.wordpress.com/2012/11/14/early-detection-of-twitter-trends/) |
| 设计一个随机 ID 生成系统          | [blog.twitter.com](https://blog.twitter.com/2010/announcing-snowflake)<br/>[github.com](https://github.com/twitter/snowflake/) |
| 返回一定时间段内次数前 k 高的请求      | [ucsb.edu](https://icmi.cs.ucsb.edu/research/tech_reports/reports/2005-23.pdf)<br/>[wpi.edu](http://davis.wpi.edu/xmdv/docs/EDBT11-diyang.pdf) |
| 设计一个数据源于多个数据中心的服务系统     | [highscalability.com](http://highscalability.com/blog/2009/8/24/how-google-serves-data-from-multiple-datacenters.html) |
| 设计一个多人网络卡牌游戏            | [indieflashblog.com](https://web.archive.org/web/20180929181117/http://www.indieflashblog.com/how-to-create-an-asynchronous-multiplayer-game.html)<br/>[buildnewgames.com](http://buildnewgames.com/real-time-multiplayer/) |
| 设计一个垃圾回收系统              | [stuffwithstuff.com](http://journal.stuffwithstuff.com/2013/12/08/babys-first-garbage-collector/)<br/>[washington.edu](http://courses.cs.washington.edu/courses/csep521/07wi/prj/rick.pdf) |
| 添加更多的系统设计问题             | [贡献](#贡献)              |

### 真实架构

> 关于现实中真实的系统是怎么设计的文章。

<p align="center">
  <img src="images/TcUo2fw.png">
  <br/>
  <strong><a href="https://www.infoq.com/presentations/Twitter-Timeline-Scalability">Source: Twitter timelines at scale</a></strong>
</p>

**不要专注于以下文章的细节，专注于以下方面：**

* 发现这些文章中的共同的原则、技术和模式。
* 学习每个组件解决哪些问题，什么情况下使用，什么情况下不适用
* 复习学过的文章

| 类型              | 系统                                       | 引用                                       |
| --------------- | ---------------------------------------- | ---------------------------------------- |
| Data processing | **MapReduce** - Google的分布式数据处理 | [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/mapreduce-osdi04.pdf) |
| Data processing | **Spark** - Databricks 的分布式数据处理 | [slideshare.net](http://www.slideshare.net/AGrishchenko/apache-spark-architecture) |
| Data processing | **Storm** - Twitter 的分布式数据处理 | [slideshare.net](http://www.slideshare.net/previa/storm-16094009) |
|                 |                                          |                                          |
| Data store      | **Bigtable** - Google 的列式数据库 | [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf) |
| Data store      | **HBase** - Bigtable 的开源实现 | [slideshare.net](http://www.slideshare.net/alexbaranau/intro-to-hbase) |
| Data store      | **Cassandra** - Facebook 的列式数据库 | [slideshare.net](http://www.slideshare.net/planetcassandra/cassandra-introduction-features-30103666) |
| Data store      | **DynamoDB** - Amazon 的文档数据库 | [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf) |
| Data store      | **MongoDB** - 文档数据库 | [slideshare.net](http://www.slideshare.net/mdirolf/introduction-to-mongodb) |
| Data store      | **Spanner** - Google 的全球分布数据库 | [research.google.com](http://research.google.com/archive/spanner-osdi2012.pdf) |
| Data store      | **Memcached** - 分布式内存缓存系统 | [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached) |
| Data store      | **Redis** - 能够持久化及具有值类型的分布式内存缓存系统 | [slideshare.net](http://www.slideshare.net/dvirsky/introduction-to-redis) |
|                 |                                          |                                          |
| File system     | **Google File System (GFS)** - 分布式文件系统 | [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/gfs-sosp2003.pdf) |
| File system     | **Hadoop File System (HDFS)** - GFS 的开源实现 | [apache.org](https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html) |
|                 |                                          |                                          |
| Misc            | **Chubby** - Google 的分布式系统的低耦合锁服务 | [research.google.com](http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/archive/chubby-osdi06.pdf) |
| Misc            | **Dapper** - 分布式系统跟踪基础设施 | [research.google.com](http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36356.pdf) |
| Misc            | **Kafka** - LinkedIn 的发布订阅消息系统 | [slideshare.net](http://www.slideshare.net/mumrah/kafka-talk-tri-hug) |
| Misc            | **Zookeeper** - 集中的基础架构和协调服务 | [slideshare.net](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) |
|                 | 添加更多                      | [贡献](#贡献)              |

### 公司的系统架构

| Company        | Reference(s)                             |
| -------------- | ---------------------------------------- |
| Amazon         | [Amazon 的架构](http://highscalability.com/amazon-architecture) |
| Cinchcast      | [每天产生 1500 小时的音频](http://highscalability.com/blog/2012/7/16/cinchcast-architecture-producing-1500-hours-of-audio-every-d.html) |
| DataSift       | [每秒实时挖掘 120000 条 tweet](http://highscalability.com/blog/2011/11/29/datasift-architecture-realtime-datamining-at-120000-tweets-p.html) |
| DropBox        | [我们如何缩放 Dropbox](https://www.youtube.com/watch?v=PE4gwstWhmc) |
| ESPN           | [每秒操作 100000 次](http://highscalability.com/blog/2013/11/4/espns-architecture-at-scale-operating-at-100000-duh-nuh-nuhs.html) |
| Google         | [Google 的架构](http://highscalability.com/google-architecture) |
| Instagram      | [1400 万用户，达到兆级别的照片存储](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html)<br/>[是什么在驱动 Instagram](http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances) |
| Justin.tv      | [Justin.Tv 的直播广播架构](http://highscalability.com/blog/2010/3/16/justintvs-live-video-broadcasting-architecture.html) |
| Facebook       | [Facebook 的可扩展 memcached](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/key-value/fb-memcached-nsdi-2013.pdf)<br/>[TAO: Facebook 社交图的分布式数据存储](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/data-store/tao-facebook-distributed-datastore-atc-2013.pdf)<br/>[Facebook 的图片存储](https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Beaver.pdf) |
| Flickr         | [Flickr 的架构](http://highscalability.com/flickr-architecture) |
| Mailbox        | [在 6 周内从 0 到 100 万用户](http://highscalability.com/blog/2013/6/18/scaling-mailbox-from-0-to-one-million-users-in-6-weeks-and-1.html) |
| Pinterest      | [从零到每月数十亿的浏览量](http://highscalability.com/blog/2013/4/15/scaling-pinterest-from-0-to-10s-of-billions-of-page-views-a.html)<br/>[1800 万访问用户，10 倍增长，12 名员工](http://highscalability.com/blog/2012/5/21/pinterest-architecture-update-18-million-visitors-10x-growth.html) |
| Playfish       | [月用户量 5000 万并在不断增长](http://highscalability.com/blog/2010/9/21/playfishs-social-gaming-architecture-50-million-monthly-user.html) |
| PlentyOfFish   | [PlentyOfFish 的架构](http://highscalability.com/plentyoffish-architecture) |
| Salesforce     | [他们每天如何处理 13 亿笔交易](http://highscalability.com/blog/2013/9/23/salesforce-architecture-how-they-handle-13-billion-transacti.html) |
| Stack Overflow | [Stack Overflow 的架构](http://highscalability.com/blog/2009/8/5/stack-overflow-architecture.html) |
| TripAdvisor    | [40M 访问者，200M 页面浏览量，30TB 数据](http://highscalability.com/blog/2011/6/27/tripadvisor-architecture-40m-visitors-200m-dynamic-page-view.html) |
| Tumblr         | [每月 150 亿的浏览量](http://highscalability.com/blog/2012/2/13/tumblr-architecture-15-billion-page-views-a-month-and-harder.html) |
| Twitter        | [Making Twitter 10000 percent faster](http://highscalability.com/scaling-twitter-making-twitter-10000-percent-faster)<br/>[每天使用 MySQL 存储2.5亿条 tweet](http://highscalability.com/blog/2011/12/19/how-twitter-stores-250-million-tweets-a-day-using-mysql.html)<br/>[150M 活跃用户，300K QPS，22 MB/S 的防火墙](http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html)<br/>[可扩展时间表](https://www.infoq.com/presentations/Twitter-Timeline-Scalability)<br/>[Twitter 的大小数据](https://www.youtube.com/watch?v=5cKTP36HVgI)<br/>[Twitter 的行为：规模超过 1 亿用户](https://www.youtube.com/watch?v=z8LU0Cj6BOU) |
| Uber           | [Uber 如何扩展自己的实时化市场](http://highscalability.com/blog/2015/9/14/how-uber-scales-their-real-time-market-platform.html) |
| WhatsApp       | [Facebook 用 190 亿美元购买 WhatsApp 的架构](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html) |
| YouTube        | [YouTube 的可扩展性](https://www.youtube.com/watch?v=w5WVu624fY8)<br/>[YouTube 的架构](http://highscalability.com/youtube-architecture) |

### 公司工程博客

> 你即将面试的公司的架构
>
> 你面对的问题可能就来自于同样领域

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
* [GitHub Engineering Blog](https://github.blog/category/engineering)
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
* [Stripe Engineering Blog](https://stripe.com/blog/engineering)
* [Twilio Engineering Blog](http://www.twilio.com/engineering)
* [Twitter Engineering](https://engineering.twitter.com/)
* [Uber Engineering Blog](http://eng.uber.com/)
* [Yahoo Engineering Blog](http://yahooeng.tumblr.com/)
* [Yelp Engineering Blog](http://engineeringblog.yelp.com/)
* [Zynga Engineering Blog](https://www.zynga.com/blogs/engineering)

#### 来源及延伸阅读

* [kilimchoi/engineering-blogs](https://github.com/kilimchoi/engineering-blogs)

## 正在完善中

有兴趣加入添加一些部分或者帮助完善某些部分吗？[加入进来吧](#贡献)！

* 使用 MapReduce 进行分布式计算
* 一致性哈希
* 直接存储器访问（DMA）控制器
* [贡献](#贡献)

## 致谢

整个仓库都提供了证书和源

特别鸣谢：

* [Hired in tech](http://www.hiredintech.com/system-design/the-system-design-process/)
* [Cracking the coding interview](https://www.amazon.com/dp/0984782850/)
* [High scalability](http://highscalability.com/)
* [checkcheckzz/system-design-interview](https://github.com/checkcheckzz/system-design-interview)
* [shashank88/system_design](https://github.com/shashank88/system_design)
* [mmcgrana/services-engineering](https://github.com/mmcgrana/services-engineering)
* [System design cheat sheet](https://gist.github.com/vasanthk/485d1c25737e8e72759f)
* [A distributed systems reading list](http://dancres.github.io/Pages/)
* [Cracking the system design interview](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)

## 联系方式

欢迎联系我讨论本文的不足、问题或者意见。

可以在我的 [GitHub 主页](https://github.com/donnemartin)上找到我的联系方式

## 许可

    Creative Commons Attribution 4.0 International License (CC BY 4.0)

    http://creativecommons.org/licenses/by/4.0/
