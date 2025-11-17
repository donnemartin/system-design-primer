+++
noatcards = True
isdraft = False
weight = 90
+++

# Reverse proxy (web server) 

## Reverse proxy (web server) introduction

![](https://camo.githubusercontent.com/a66e9f885b04db69638825c6a98f42e5570a83f3/687474703a2f2f692e696d6775722e636f6d2f7037784853345a2e706e67) 

[Source: Wikipedia](https://commons.wikimedia.org/wiki/File:Proxy_concept_en.svg)

A reverse proxy is a web server that centralizes internal services and provides unified interfaces to the public. Requests from clients are forwarded to a server that can fulfill it before the reverse proxy returns the server's response to the client.

## Reverse Proxy benefit

Additional benefits include:

- Increased security - Hide information about backend servers, blacklist IPs, limit number of connections per client
- Increased scalability and flexibility - Clients only see the reverse proxy's IP, allowing you to scale servers or change their configuration
- SSL termination - Decrypt incoming requests and encrypt server responses so backend servers do not have to perform these potentially expensive operations
    - Removes the need to install [X.509 certificates](https://en.wikipedia.org/wiki/X.509)  on each server
- Compression - Compress server responses
- Caching - Return the response for cached requests
- Static content - Serve static content directly
    - HTML/CSS/JS
    - Photos
    - Videos
    - Etc

## Load balancer vs reverse proxy

- Deploying a load balancer is useful when you have multiple servers. Often, load balancers route traffic to a set of servers serving the same function.
- Reverse proxies can be useful even with just one web server or application server, opening up the benefits described in the previous section.
- Solutions such as NGINX and HAProxy can support both layer 7 reverse proxying and load balancing.

## Disadvantage(s) : reverse proxy

- Introducing a reverse proxy results in increased complexity.
- A single reverse proxy is a single point of failure, configuring multiple reverse proxies (ie a [failover](https://en.wikipedia.org/wiki/Failover)) further increases complexity.

## Source(s) and further reading

- [Reverse proxy vs load balancer](https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/) 
- [NGINX architecture](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/) 
- [HAProxy architecture guide](http://www.haproxy.org/download/1.2/doc/architecture.txt) 
- [Wikipedia](https://en.wikipedia.org/wiki/Reverse_proxy) 