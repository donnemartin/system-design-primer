# Design a system that scales to millions of users on AWS
# 在 AWS 上设计支持百万级到千万级用户的系统

*Note: This document links directly to relevant areas found in the [system design topics](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics) to avoid duplication.  Refer to the linked content for general talking points, tradeoffs, and alternatives.*

*** 注释：为了避免重复，这篇文章的链接直接关联到 [系统设计主题](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics) 的相关章节。为一讨论要点、折中方案和可选方案做参考。***

## Step 1: Outline use cases and constraints

## 第 1 步：用例和约束概要

> Gather requirements and scope the problem.
> Ask questions to clarify use cases and constraints.
> Discuss assumptions.

> 收集需求并调查问题。
> 通过提问清晰用例和约束。
> 讨论假设。

Without an interviewer to address clarifying questions, we'll define some use cases and constraints.

如果没有面试官提出明确的问题，我们将自己定义一些用例和约束条件。

### Use cases

### 用例

Solving this problem takes an iterative approach of: 1) **Benchmark/Load Test**, 2) **Profile** for bottlenecks 3) address bottlenecks while evaluating alternatives and trade-offs, and 4) repeat, which is good pattern for evolving basic designs to scalable designs.

解决这个问题是一个循序渐进的过程：1) **基准/负载 测试**， 2) 瓶颈 **概述**， 3) 当评估可选和折中方案时定位瓶颈，4) 重复，这是向可扩展的设计发展基础设计的好模式。

Unless you have a background in AWS or are applying for a position that requires AWS knowledge, AWS-specific details are not a requirement.  However, **much of the principles discussed in this exercise can apply more generally outside of the AWS ecosystem.**

除非你有 AWS 的背景或者正在申请需要 AWS 知识的相关职位，否则不要求了解 AWS 的相关细节。并且，这个练习中讨论的许多原则可以更广泛地应用于AWS生态系统之外。

#### We'll scope the problem to handle only the following use cases

#### 我们就处理以下用例讨论这一问题

* **User** makes a read or write request
    * **Service** does processing, stores user data, then returns the results
* **Service** needs to evolve from serving a small amount of users to millions of users
    * Discuss general scaling patterns as we evolve an architecture to handle a large number of users and requests
* **Service** has high availability

* **用户** 进行读或写请求
    * **服务** 进行处理，存储用户数据，然后返回结果
* **服务** 需要从支持小规模用户开始到百万用户
    * 在我们演化架构来处理大量的用户和请求时，讨论一般的扩展模式
* **服务** 高可用

### Constraints and assumptions

### 约束和假设

#### State assumptions

#### 状态假设

* Traffic is not evenly distributed
* Need for relational data
* Scale from 1 user to tens of millions of users
    * Denote increase of users as:
        * Users+
        * Users++
        * Users+++
        * ...
    * 10 million users
    * 1 billion writes per month
    * 100 billion reads per month
    * 100:1 read to write ratio
    * 1 KB content per write

* 流量不均匀分布
* 需要关系数据
* 从一个用户扩展到千万用户
    * 表示用户量的增长
        * 用户量+
        * 用户量++
        * 用户量+++
        * ...
    * 1000 万用户
    * 每月 10 亿次写入
    * 每月 1000 亿次读出
    * 100:1 读写比率
    * 每次写入 1 KB 内容

#### Calculate usage

#### 计算使用

**Clarify with your interviewer if you should run back-of-the-envelope usage calculations.**

**向你的面试官厘清你是否应该做粗略的使用计算**

* 1 TB of new content per month
    * 1 KB per write * 1 billion writes per month
    * 36 TB of new content in 3 years
    * Assume most writes are from new content instead of updates to existing ones
* 400 writes per second on average
* 40,000 reads per second on average

* 1 TB 新内容 / 月
    * 1 KB 每次写入 * 10 亿 写入 / 月
    * 36 TB 新内容 / 3 年
    * 假设大多数写入都是新内容而不是更新已有内容
* 平均每秒 400 次写入
* 平均每秒 40,000 次读取

Handy conversion guide:

便捷的转换指南：

* 2.5 million seconds per month
* 1 request per second = 2.5 million requests per month
* 40 requests per second = 100 million requests per month
* 400 requests per second = 1 billion requests per month

* 250 万秒 / 月
* 1 次请求 / 秒 = 250 万次请求 / 月
* 40 次请求 / 秒 = 1 亿次请求 / 月
* 400 次请求 / 秒 = 10 亿请求 / 月

## Step 2: Create a high level design

## 第 2 步：创建高级设计方案

> Outline a high level design with all important components.

> 用所有重要组件概述高水平设计

![Imgur](http://i.imgur.com/B8LDKD7.png)

## Step 3: Design core components

## 第 3 步：设计核心组件

> Dive into details for each core component.

> 深入每个核心组件的细节。

### Use case: User makes a read or write request

### 用例：用户进行读写请求

#### Goals

#### 目标

* With only 1-2 users, you only need a basic setup
    * Single box for simplicity
    * Vertical scaling when needed
    * Monitor to determine bottlenecks

* 只有 1-2 个用户时，你只需要基础配置
    * 为简单起见，只需要一台服务器
    * 必要时进行纵向扩展
    * 监控以确定瓶颈

#### Start with a single box

#### 以单台服务器开始

* **Web server** on EC2
    * Storage for user data
    * [**MySQL Database**](https://github.com/donnemartin/system-design-primer#sql)

* **Web 服务器** 在 EC2 上
    * 存储用户数据
    * [**MySQL 数据库**](https://github.com/donnemartin/system-design-primer#sql)

Use **Vertical Scaling**:

运用 **纵向扩展**：

* Simply choose a bigger box
* Keep an eye on metrics to determine how to scale up
    * Use basic monitoring to determine bottlenecks: CPU, memory, IO, network, etc
    * CloudWatch, top, nagios, statsd, graphite, etc
* Scaling vertically can get very expensive
* No redundancy/failover

* 选择一台更大容量的服务器
* 密切关注指标，确定如何扩大规模
    * 使用基本监控来确定瓶颈:CPU、内存、IO、网络等
    * CloudWatch, top, nagios, statsd, graphite等
* 纵向扩展的代价将变得更昂贵
* 无冗余/容错

*Trade-offs, alternatives, and additional details:*

*折中方案, 可选方案, 和其他细节:*

* The alternative to **Vertical Scaling** is [**Horizontal scaling**](https://github.com/donnemartin/system-design-primer#horizontal-scaling)

* **纵向扩展** 的可选方案是 [**横向扩展**](https://github.com/donnemartin/system-design-primer#horizontal-scaling)

#### Start with SQL, consider NoSQL

#### 自 SQL 开始，但认真考虑 NoSQL

The constraints assume there is a need for relational data.  We can start off using a **MySQL Database** on the single box.

约束条件假设需要关系型数据。我们可以开始时在单台服务器上使用 **MySQL 数据库**。

*Trade-offs, alternatives, and additional details:*

*折中方案, 可选方案, 和其他细节:*

* See the [Relational database management system (RDBMS)](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms) section
* Discuss reasons to use [SQL or NoSQL](https://github.com/donnemartin/system-design-primer#sql-or-nosql)

* 查阅 [关系型数据库管理系统 (RDBMS)](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms) 章节
* 讨论使用 [SQL 或 NoSQL](https://github.com/donnemartin/system-design-primer#sql-or-nosql) 的原因

#### Assign a public static IP

#### 分配公共静态 IP

* Elastic IPs provide a public endpoint whose IP doesn't change on reboot
* Helps with failover, just point the domain to a new IP

* 弹性 IP 提供了一个公共端点，不会在重启时改变 IP。
* 故障转移时只需要把域名指向新 IP。

#### Use a DNS

#### 使用 DNS 服务

Add a **DNS** such as Route 53 to map the domain to the instance's public IP.

添加 **DNS** 服务，比如 Route 53（[Amazon Route 53](https://aws.amazon.com/cn/route53/) - 译者注），将域映射到实例的公共 IP 中。

*Trade-offs, alternatives, and additional details:*

*折中方案, 可选方案, 和其他细节:*

* See the [Domain name system](https://github.com/donnemartin/system-design-primer#domain-name-system) section

* 查阅 [域名系统](https://github.com/donnemartin/system-design-primer#domain-name-system) 章节

#### Secure the web server

#### 安全的 Web 服务器

* Open up only necessary ports
    * Allow the web server to respond to incoming requests from:
        * 80 for HTTP
        * 443 for HTTPS
        * 22 for SSH to only whitelisted IPs
    * Prevent the web server from initiating outbound connections

* 只开放必要的端口
    * 允许 Web 服务器响应来自以下端口的请求
        * HTTP 80
        * HTTPS 443
        * SSH IP 白名单 22
    * 防止 Web 服务器启动外链

*Trade-offs, alternatives, and additional details:*

*折中方案, 可选方案, 和其他细节:*

* See the [Security](https://github.com/donnemartin/system-design-primer#security) section

* 查阅 [安全](https://github.com/donnemartin/system-design-primer#security) 章节

## Step 4: Scale the design

## 第 4 步：扩展设计

> Identify and address bottlenecks, given the constraints.

> 在给定约束条件下，定义和确认瓶颈。

### Users+

### 用户+

![Imgur](http://i.imgur.com/rrfjMXB.png)

#### Assumptions

#### 假设

Our user count is starting to pick up and the load is increasing on our single box.  Our **Benchmarks/Load Tests** and **Profiling** are pointing to the **MySQL Database** taking up more and more memory and CPU resources, while the user content is filling up disk space.

我们的用户数量开始上升，并且单台服务器的负载上升。**基准/负载测试** 和 **分析** 指出 **MySQL 数据库** 占用越来越多的内存和 CPU 资源，同时用户数据将填满硬盘空间。

We've been able to address these issues with **Vertical Scaling** so far.  Unfortunately, this has become quite expensive and it doesn't allow for independent scaling of the **MySQL Database** and **Web Server**.

目前，我们尚能在纵向扩展时解决这些问题。不幸的是，解决这些问题的代价变得相当昂贵，并且原来的系统并不能允许在 **MySQL 数据库** 和 **Web 服务器** 的基础上进行独立扩展。

#### Goals

#### 目标

* Lighten load on the single box and allow for independent scaling
    * Store static content separately in an **Object Store**
    * Move the **MySQL Database** to a separate box
* Disadvantages
    * These changes would increase complexity and would require changes to the **Web Server** to point to the **Object Store** and the **MySQL Database**
    * Additional security measures must be taken to secure the new components
    * AWS costs could also increase, but should be weighed with the costs of managing similar systems on your own

* 减轻单台服务器负载并且允许独立扩展
    * 在 **对象存储** 中单独存储静态内容
    * 将 **MySQL 数据库** 迁移到单独的服务器上
* 缺点
    * 这些变化会增加复杂性，并要求对 **Web服务器** 进行更改，以指向 **对象存储** 和 **MySQL 数据库**
    * 必须采取额外的安全措施来确保新组件的安全
    * AWS 的成本也会增加，但应该与自身管理类似系统的成本做比较

#### Store static content separately

#### 独立保存静态内容

* Consider using a managed **Object Store** like S3 to store static content
    * Highly scalable and reliable
    * Server side encryption
* Move static content to S3
    * User files
    * JS
    * CSS
    * Images
    * Videos

* 考虑使用像 S3 这样可管理的 **对象存储** 服务来存储静态内容
    * 高扩展性和可靠性
    * 服务器端加密
* 迁移静态内容到 S3
    * 用户文件
    * JS
    * CSS
    * 图片
    * 视频

#### Move the MySQL database to a separate box

#### 迁移 MySQL 数据库到独立机器上

* Consider using a service like RDS to manage the **MySQL Database**
    * Simple to administer, scale
    * Multiple availability zones
    * Encryption at rest

* 考虑使用类似 RDS 的服务来管理 **MySQL 数据库**
    * 简单的管理，扩展
    * 多个可用区域
    * 空闲时加密

#### Secure the system

#### 系统安全

* Encrypt data in transit and at rest
* Use a Virtual Private Cloud
    * Create a public subnet for the single **Web Server** so it can send and receive traffic from the internet
    * Create a private subnet for everything else, preventing outside access
    * Only open ports from whitelisted IPs for each component
* These same patterns should be implemented for new components in the remainder of the exercise

* 在传输和空闲时对数据进行加密
* 使用虚拟私有云
    * 为单个 **Web 服务器** 创建一个公共子网，这样就可以发送和接收来自 internet 的流量
    * 为其他内容创建一个私有子网，禁止外部访问
    * 在每个组件上只为白名单 IP 打开端口
* 这些相同的模式应当在新的组件的实现中实践

*Trade-offs, alternatives, and additional details:*

*折中方案, 可选方案, 和其他细节:*

* See the [Security](https://github.com/donnemartin/system-design-primer#security) section

* 查阅 [安全](https://github.com/donnemartin/system-design-primer#security) 章节

### Users++

### 用户+++

![Imgur](http://i.imgur.com/raoFTXM.png)

#### Assumptions

#### 假设

Our **Benchmarks/Load Tests** and **Profiling** show that our single **Web Server** bottlenecks during peak hours, resulting in slow responses and in some cases, downtime.  As the service matures, we'd also like to move towards higher availability and redundancy.

我们的 **基准/负载测试** 和 **性能测试** 显示，在高峰时段，我们的单一 **Web服务器** 存在瓶颈，导致响应缓慢，在某些情况下还会宕机。随着服务的成熟，我们也希望朝着更高的可用性和冗余发展。

#### Goals

#### 目标

* The following goals attempt to address the scaling issues with the **Web Server**
    * Based on the **Benchmarks/Load Tests** and **Profiling**, you might only need to implement one or two of these techniques
* Use [**Horizontal Scaling**](https://github.com/donnemartin/system-design-primer#horizontal-scaling) to handle increasing loads and to address single points of failure
    * Add a [**Load Balancer**](https://github.com/donnemartin/system-design-primer#load-balancer) such as Amazon's ELB or HAProxy
        * ELB is highly available
        * If you are configuring your own **Load Balancer**, setting up multiple servers in [active-active](https://github.com/donnemartin/system-design-primer#active-active) or [active-passive](https://github.com/donnemartin/system-design-primer#active-passive) in multiple availability zones will improve availability
        * Terminate SSL on the **Load Balancer** to reduce computational load on backend servers and to simplify certificate administration
    * Use multiple **Web Servers** spread out over multiple availability zones
    * Use multiple **MySQL** instances in [**Master-Slave Failover**](https://github.com/donnemartin/system-design-primer#master-slave-replication) mode across multiple availability zones to improve redundancy
* Separate out the **Web Servers** from the [**Application Servers**](https://github.com/donnemartin/system-design-primer#application-layer)
    * Scale and configure both layers independently
    * **Web Servers** can run as a [**Reverse Proxy**](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server)
    * For example, you can add **Application Servers** handling **Read APIs** while others handle **Write APIs**
* Move static (and some dynamic) content to a [**Content Delivery Network (CDN)**](https://github.com/donnemartin/system-design-primer#content-delivery-network) such as CloudFront to reduce load and latency

* 下面的目标试图用 **Web服务器** 解决扩展问题
    * 基于 **基准/负载测试** 和 **分析**，你可能只需要实现其中的一两个技术
* 使用 [**横向扩展**](https://github.com/donnemartin/system-design-primer#horizontal-scaling) 来处理增加的负载和单点故障
    * 添加 [**负载均衡器**](https://github.com/donnemartin/system-design-primer#load-balancer) 例如 Amazon 的 ELB 或 HAProxy
        * ELB 是高可用的
        * 如果你正在配置自己的 **负载均衡器**, 在多个可用区域中设置多台服务器用于 [双活](https://github.com/donnemartin/system-design-primer#active-active) 或 [主被](https://github.com/donnemartin/system-design-primer#active-passive) 将提高可用性
        * 终止在 **负载平衡器** 上的SSL，以减少后端服务器上的计算负载，并简化证书管理
    * 在多个可用区域中使用多台 **Web服务器**
    * 在多个可用区域的 [**主-从 故障转移**](https://github.com/donnemartin/system-design-primer#master-slave-replication) 模式中使用多个 **MySQL** 实例来改进冗余
* 分离 **Web 服务器** 和 [**应用服务器**](https://github.com/donnemartin/system-design-primer#application-layer)
    * 独立扩展和配置每一层
    * **Web 服务器** 可以作为 [**反向代理**](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server)
    * 例如, 你可以添加 **应用服务器** 处理 **读 API** 而另外一些处理 **写 API**
* 将静态（和一些动态）内容转移到 [**内容分发网络 (CDN)**](https://github.com/donnemartin/system-design-primer#content-delivery-network) 例如 CloudFront 以减少负载和延迟

*Trade-offs, alternatives, and additional details:*

*折中方案, 可选方案, 和其他细节:*

* See the linked content above for details

* 查阅以上链接获得更多细节

### Users+++

### 用户+++

![Imgur](http://i.imgur.com/OZCxJr0.png)

**Note:** **Internal Load Balancers** not shown to reduce clutter

**注意：** **内部负载均衡** 不显示以减少混乱

#### Assumptions

#### 假设

Our **Benchmarks/Load Tests** and **Profiling** show that we are read-heavy (100:1 with writes) and our database is suffering from poor performance from the high read requests.

我们的 **性能/负载测试** 和 **性能测试** 显示我们读操作频繁（100:1 的读写比率），并且数据库在高读请求时表现很糟糕。

#### Goals

#### 目标

* The following goals attempt to address the scaling issues with the **MySQL Database**
    * Based on the **Benchmarks/Load Tests** and **Profiling**, you might only need to implement one or two of these techniques
* Move the following data to a [**Memory Cache**](https://github.com/donnemartin/system-design-primer#cache) such as Elasticache to reduce load and latency:
    * Frequently accessed content from **MySQL**
        * First, try to configure the **MySQL Database** cache to see if that is sufficient to relieve the bottleneck before implementing a **Memory Cache**
    * Session data from the **Web Servers**
        * The **Web Servers** become stateless, allowing for **Autoscaling**
    * Reading 1 MB sequentially from memory takes about 250 microseconds, while reading from SSD takes 4x and from disk takes 80x longer.<sup><a href=https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know>1</a></sup>
* Add [**MySQL Read Replicas**](https://github.com/donnemartin/system-design-primer#master-slave-replication) to reduce load on the write master
* Add more **Web Servers** and **Application Servers** to improve responsiveness

* 下面的目标试图解决 **MySQL数据库** 的伸缩性问题
    * * 基于 **基准/负载测试** 和 **分析**，你可能只需要实现其中的一两个技术
* 将下列数据移动到一个 [**内存缓存**](https://github.com/donnemartin/system-design-primer#cache)，例如弹性缓存，以减少负载和延迟：
    * **MySQL** 中频繁访问的内容
        * 首先, 尝试配置 **MySQL 数据库** 缓存以查看是否足以在实现 **内存缓存** 之前缓解瓶颈
    * 来自 **Web 服务器** 的会话数据
        * **Web 服务器** 变成无状态的, 允许 **自动伸缩**
    * 从内存中读取 1 MB 内存需要大约 250 微秒，而从SSD中读取时间要长 4 倍，从磁盘读取的时间要长 80 倍。<sup><a href=https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know>1</a></sup>
* 添加 [**MySQL 读取副本**](https://github.com/donnemartin/system-design-primer#master-slave-replication) 来减少写主线程的负载
* 添加更多 **Web 服务器** and **应用服务器** 来提高响应

*Trade-offs, alternatives, and additional details:*

*折中方案, 可选方案, 和其他细节:*

* See the linked content above for details

* 查阅以上链接获得更多细节

#### Add MySQL read replicas

#### 添加 MySQL 读取副本

* In addition to adding and scaling a **Memory Cache**, **MySQL Read Replicas** can also help relieve load on the **MySQL Write Master**
* Add logic to **Web Server** to separate out writes and reads
* Add **Load Balancers** in front of **MySQL Read Replicas** (not pictured to reduce clutter)
* Most services are read-heavy vs write-heavy

* 除了添加和扩展 **内存缓存**，**MySQL 读副本服务器** 也能够帮助缓解在 **MySQL 写主服务器** 的负载。
* 添加逻辑到 **Web 服务器** 来区分读和写操作
* 在 **MySQL 读副本服务器** 之上添加 **负载均衡器** （不是为了减少混乱）
* 大多数服务都是读取负载大于写入负载

*Trade-offs, alternatives, and additional details:*

*折中方案, 可选方案, 和其他细节:*

* See the [Relational database management system (RDBMS)](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms) section

* 查阅 [关系型数据库管理系统 (RDBMS)](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms) 章节

### Users++++

### 用户++++

![Imgur](http://i.imgur.com/3X8nmdL.png)

#### Assumptions

#### 假设

Our **Benchmarks/Load Tests** and **Profiling** show that our traffic spikes during regular business hours in the U.S. and drop significantly when users leave the office.  We think we can cut costs by automatically spinning up and down servers based on actual load.  We're a small shop so we'd like to automate as much of the DevOps as possible for **Autoscaling** and for the general operations.

**基准/负载测试** 和 **分析** 显示，在美国，正常工作时间存在流量峰值，当用户离开办公室时，流量骤降。我们认为，可以通过真实负载自动转换服务器数量来降低成本。我们是一家小商店，所以我们希望 DevOps 尽量自动化地进行 **自动伸缩** 和通用操作。

#### Goals

#### 目标

* Add **Autoscaling** to provision capacity as needed
    * Keep up with traffic spikes
    * Reduce costs by powering down unused instances
* Automate DevOps
    * Chef, Puppet, Ansible, etc
* Continue monitoring metrics to address bottlenecks
    * **Host level** - Review a single EC2 instance
    * **Aggregate level** - Review load balancer stats
    * **Log analysis** - CloudWatch, CloudTrail, Loggly, Splunk, Sumo
    * **External site performance** - Pingdom or New Relic
    * **Handle notifications and incidents** - PagerDuty
    * **Error Reporting** - Sentry

* 根据需要添加 **自动扩展**
    * 跟踪流量高峰
    * 通过关闭未使用的实例来降低成本
* 自动化 DevOps
    * Chef, Puppet, Ansible 工具等
* 继续监控指标以解决瓶颈
    * **主机水平** - 检查一个 EC2 实例
    * **总水平** - 检查负载均衡器统计数据
    * **日志分析** - CloudWatch, CloudTrail, Loggly, Splunk, Sumo
    * **外部站点的性能** - Pingdom or New Relic
    * **处理通知和事件** - PagerDuty
    * **错误报告** - Sentry

#### Add autoscaling

#### 添加自动扩展

* Consider a managed service such as AWS **Autoscaling**
    * Create one group for each **Web Server** and one for each **Application Server** type, place each group in multiple availability zones
    * Set a min and max number of instances
    * Trigger to scale up and down through CloudWatch
        * Simple time of day metric for predictable loads or
        * Metrics over a time period:
            * CPU load
            * Latency
            * Network traffic
            * Custom metric
    * Disadvantages
        * Autoscaling can introduce complexity
        * It could take some time before a system appropriately scales up to meet increased demand, or to scale down when demand drops

* 考虑使用一个托管服务，比如AWS **自动扩展**
    * 为每个 **Web 服务器** 创建一个组，并为每个 **应用服务器** 类型创建一个组，将每个组放置在多个可用区域中
    * 设置最小和最大实例数
    * 通过 CloudWatch 来扩展或收缩
        * 可预测负载的简单时间度量
        * 一段时间内的指标：
            * CPU 负载
            * 延迟
            * 网络流量
            * 自定义指标
    * 缺点
        * 自动扩展会引入复杂性
        * 可能需要一段时间才能适当扩大规模，以满足增加的需求，或者在需求下降时缩减规模

### Users+++++

### 用户+++++

![Imgur](http://i.imgur.com/jj3A5N8.png)

**Note:** **Autoscaling** groups not shown to reduce clutter

**注释：** **自动伸缩** 组不显示以减少混乱

#### Assumptions

#### 假设

As the service continues to grow towards the figures outlined in the constraints, we iteratively run **Benchmarks/Load Tests** and **Profiling** to uncover and address new bottlenecks.

当服务继续向着限制条件概述的方向发展，我们反复地运行 **基准/负载测试** 和 **分析** 来进一步发现和定位新的瓶颈。

#### Goals

#### 目标

We'll continue to address scaling issues due to the problem's constraints:

由于问题的约束，我们将继续提出扩展性的问题：

* If our **MySQL Database** starts to grow too large, we might considering only storing a limited time period of data in the database, while storing the rest in a data warehouse such as Redshift
    * A data warehouse such as Redshift can comfortably handle the constraint of 1 TB of new content per month
* With 40,000 average read requests per second, read traffic for popular content can be addressed by scaling the **Memory Cache**, which is also useful for handling the unevenly distributed traffic and traffic spikes
    * The **SQL Read Replicas** might have trouble handling the cache misses, we'll probably need to employ additional SQL scaling patterns
* 400 average writes per second (with presumably significantly higher peaks) might be tough for a single **SQL Write Master-Slave**, also pointing to a need for additional scaling techniques

* 如果我们的 **MySQL 数据库** 开始变得过于庞大, 我们可能只考虑把数据在数据库中存储一段有限的时间, 同时在例如 Redshift 这样的数据仓库中存储其余的数据
    * 像 Redshift 这样的数据仓库能够轻松处理每月 1TB 的新内容
* 平均每秒 40,000 次的读取请求, 可以通过扩展 **内存缓存** 来处理热点内容的读取流量，这对于处理不均匀分布的流量和流量峰值也很有用
    * **SQL读取副本** 可能会遇到处理缓存未命中的问题, 我们可能需要使用额外的 SQL 扩展模式
* 对于单个 **SQL 写主-从** 模式来说，平均每秒 400 次写操作（明显更高）可能会很困难，同时还需要更多的扩展技术

SQL scaling patterns include:

SQL 扩展模型包括：

* [Federation](https://github.com/donnemartin/system-design-primer#federation)
* [Sharding](https://github.com/donnemartin/system-design-primer#sharding)
* [Denormalization](https://github.com/donnemartin/system-design-primer#denormalization)
* [SQL Tuning](https://github.com/donnemartin/system-design-primer#sql-tuning)

* [集合](https://github.com/donnemartin/system-design-primer#federation)
* [分片](https://github.com/donnemartin/system-design-primer#sharding)
* [反范式](https://github.com/donnemartin/system-design-primer#denormalization)
* [SQL 调优](https://github.com/donnemartin/system-design-primer#sql-tuning)

To further address the high read and write requests, we should also consider moving appropriate data to a [**NoSQL Database**](https://github.com/donnemartin/system-design-primer#nosql) such as DynamoDB.

为了进一步处理高读和写请求，我们还应该考虑将适当的数据移动到一个 [**NoSQL数据库**](https://github.com/donnemartin/system design - nsql)，例如 DynamoDB。

We can further separate out our [**Application Servers**](https://github.com/donnemartin/system-design-primer#application-layer) to allow for independent scaling.  Batch processes or computations that do not need to be done in real-time can be done [**Asynchronously**](https://github.com/donnemartin/system-design-primer#asynchronism) with **Queues** and **Workers**:

我们可以进一步分离我们的 [**应用服务器**](https://github.com/donnemartin/system-design-primer#application-layer) 以允许独立扩展。不需要实时完成的批处理任务和计算可以通过 Queues 和 Workers 异步完成：

* For example, in a photo service, the photo upload and the thumbnail creation can be separated:
    * **Client** uploads photo
    * **Application Server** puts a job in a **Queue** such as SQS
    * The **Worker Service** on EC2 or Lambda pulls work off the **Queue** then:
        * Creates a thumbnail
        * Updates a **Database**
        * Stores the thumbnail in the **Object Store**

* 以照片服务为例，照片上传和缩略图的创建可以分开进行
    * **客户端** 上传图片
    * **应用服务器** 推送一个任务到 **队列** 例如 SQS
    * EC2 上的 **Worker 服务** 或者 Lambda 从 **队列** 拉取 work，然后：
        * 创建缩略图
        * 更新 **数据库**
        * 在 **对象存储** 中存储缩略图

*Trade-offs, alternatives, and additional details:*

*折中方案, 可选方案, 和其他细节:*

* See the linked content above for details

* 查阅以上链接获得更多细节

## Additional talking points

## 额外的话题

> Additional topics to dive into, depending on the problem scope and time remaining.

> 根据问题的范围和剩余时间，还需要深入讨论其他问题。

### SQL scaling patterns

### SQL 扩展模式

* [Read replicas](https://github.com/donnemartin/system-design-primer#master-slave)
* [Federation](https://github.com/donnemartin/system-design-primer#federation)
* [Sharding](https://github.com/donnemartin/system-design-primer#sharding)
* [Denormalization](https://github.com/donnemartin/system-design-primer#denormalization)
* [SQL Tuning](https://github.com/donnemartin/system-design-primer#sql-tuning)

* [读取副本](https://github.com/donnemartin/system-design-primer#master-slave)
* [集合](https://github.com/donnemartin/system-design-primer#federation)
* [分区](https://github.com/donnemartin/system-design-primer#sharding)
* [反规范化](https://github.com/donnemartin/system-design-primer#denormalization)
* [SQL 调优](https://github.com/donnemartin/system-design-primer#sql-tuning)


#### NoSQL

#### NoSQL

* [Key-value store](https://github.com/donnemartin/system-design-primer#key-value-store)
* [Document store](https://github.com/donnemartin/system-design-primer#document-store)
* [Wide column store](https://github.com/donnemartin/system-design-primer#wide-column-store)
* [Graph database](https://github.com/donnemartin/system-design-primer#graph-database)
* [SQL vs NoSQL](https://github.com/donnemartin/system-design-primer#sql-or-nosql)

* [键值存储](https://github.com/donnemartin/system-design-primer#key-value-store)
* [文档存储](https://github.com/donnemartin/system-design-primer#document-store)
* [宽表存储](https://github.com/donnemartin/system-design-primer#wide-column-store)
* [图数据库](https://github.com/donnemartin/system-design-primer#graph-database)
* [SQL vs NoSQL](https://github.com/donnemartin/system-design-primer#sql-or-nosql)

### Caching

### 缓存

* Where to cache
    * [Client caching](https://github.com/donnemartin/system-design-primer#client-caching)
    * [CDN caching](https://github.com/donnemartin/system-design-primer#cdn-caching)
    * [Web server caching](https://github.com/donnemartin/system-design-primer#web-server-caching)
    * [Database caching](https://github.com/donnemartin/system-design-primer#database-caching)
    * [Application caching](https://github.com/donnemartin/system-design-primer#application-caching)
* What to cache
    * [Caching at the database query level](https://github.com/donnemartin/system-design-primer#caching-at-the-database-query-level)
    * [Caching at the object level](https://github.com/donnemartin/system-design-primer#caching-at-the-object-level)
* When to update the cache
    * [Cache-aside](https://github.com/donnemartin/system-design-primer#cache-aside)
    * [Write-through](https://github.com/donnemartin/system-design-primer#write-through)
    * [Write-behind (write-back)](https://github.com/donnemartin/system-design-primer#write-behind-write-back)
    * [Refresh ahead](https://github.com/donnemartin/system-design-primer#refresh-ahead)

* 缓存到哪里
    * [客户端缓存](https://github.com/donnemartin/system-design-primer#client-caching)
    * [CDN 缓存](https://github.com/donnemartin/system-design-primer#cdn-caching)
    * [Web 服务缓存](https://github.com/donnemartin/system-design-primer#web-server-caching)
    * [数据库缓存](https://github.com/donnemartin/system-design-primer#database-caching)
    * [应用缓存](https://github.com/donnemartin/system-design-primer#application-caching)
* 缓存什么
    * [数据库请求层缓存](https://github.com/donnemartin/system-design-primer#caching-at-the-database-query-level)
    * [对象层缓存](https://github.com/donnemartin/system-design-primer#caching-at-the-object-level)
* 何时更新缓存
    * [预留缓存](https://github.com/donnemartin/system-design-primer#cache-aside)
    * [完全写入](https://github.com/donnemartin/system-design-primer#write-through)
    * [延迟写 (写回)](https://github.com/donnemartin/system-design-primer#write-behind-write-back)
    * [事先更新](https://github.com/donnemartin/system-design-primer#refresh-ahead)


### Asynchronism and microservices

### 异步性和微服务

* [Message queues](https://github.com/donnemartin/system-design-primer#message-queues)
* [Task queues](https://github.com/donnemartin/system-design-primer#task-queues)
* [Back pressure](https://github.com/donnemartin/system-design-primer#back-pressure)
* [Microservices](https://github.com/donnemartin/system-design-primer#microservices)

* [消息队列](https://github.com/donnemartin/system-design-primer#message-queues)
* [任务队列](https://github.com/donnemartin/system-design-primer#task-queues)
* [回退压力](https://github.com/donnemartin/system-design-primer#back-pressure)
* [微服务](https://github.com/donnemartin/system-design-primer#microservices)

### Communications

### 沟通

* Discuss tradeoffs:
    * External communication with clients - [HTTP APIs following REST](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest)
    * Internal communications - [RPC](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc)
* [Service discovery](https://github.com/donnemartin/system-design-primer#service-discovery)

* 关于折中方案的讨论:
    * 客户端的外部通讯 - [遵循 REST 的 HTTP APIs](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest)
    * 内部通讯 - [RPC](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc)
* [服务探索](https://github.com/donnemartin/system-design-primer#service-discovery)

### Security

### 安全性

Refer to the [security section](https://github.com/donnemartin/system-design-primer#security).

参考 [安全章节](https://github.com/donnemartin/system-design-primer#security)

### Latency numbers

### 延迟数字指标

See [Latency numbers every programmer should know](https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know).

查阅 [每个程序员必懂的延迟数字](https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know)

### Ongoing

### 正在进行

* Continue benchmarking and monitoring your system to address bottlenecks as they come up
* Scaling is an iterative process

* 继续基准测试并监控你的系统以解决出现的瓶颈问题
* 扩展是一个迭代的过程