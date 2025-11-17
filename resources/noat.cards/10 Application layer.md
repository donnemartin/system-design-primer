+++
noatcards = True
isdraft = False
weight = 100
+++

# Application layer

## Application layer - Introduction

![](https://camo.githubusercontent.com/feeb549c5b6e94f65c613635f7166dc26e0c7de7/687474703a2f2f692e696d6775722e636f6d2f7942355359776d2e706e67) 

[Source: Intro to architecting systems for scale](http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer)

Separating out the web layer from the application layer (also known as platform layer) allows you to scale and configure both layers independently. Adding a new API results in adding application servers without necessarily adding additional web servers.

The single responsibility principle advocates for small and autonomous services that work together. Small teams with small services can plan more aggressively for rapid growth.

Workers in the application layer also help enable [asynchronism](https://github.com/donnemartin/system-design-primer#asynchronism) .

## Microservices

Related to this discussion are [microservices](https://en.wikipedia.org/wiki/Microservices) , which can be described as a suite of independently deployable, small, modular services. Each service runs a unique process and communicates through a well-definied, lightweight mechanism to serve a business goal. [1](https://smartbear.com/learn/api-design/what-are-microservices) 

Pinterest, for example, could have the following microservices: user profile, follower, feed, search, photo upload, etc.

## Service Discovery

Systems such as [Zookeeper](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper)  can help services find each other by keeping track of registered names, addresses, ports, etc.

## Disadvantage(s) : application layer

- Adding an application layer with loosely coupled services requires a different approach from an architectural, operations, and process viewpoint (vs a monolithic system) .
- Microservices can add complexity in terms of deployments and operations.

## Source(s) and further reading

- [Intro to architecting systems for scale](http://lethain.com/introduction-to-architecting-systems-for-scale) 
- [Crack the system design interview](http://www.puncsky.com/blog/2016/02/14/crack-the-system-design-interview/) 
- [Service oriented architecture](https://en.wikipedia.org/wiki/Service-oriented_architecture) 
- [Introduction to Zookeeper](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) 
- [Here's what you need to know about building microservices](https://cloudncode.wordpress.com/2016/07/22/msa-getting-started/) 