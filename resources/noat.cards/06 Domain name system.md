+++
noatcards = True
isdraft = False
weight = 60
+++

# Domain name system

## Introduction Domain Name System

![](https://camo.githubusercontent.com/fae27d1291ed38dd120595d692eacd2505cd3a9c/687474703a2f2f692e696d6775722e636f6d2f494f794c6a34692e6a7067)

[Source: DNS security presentation](http://www.slideshare.net/srikrupa5/dns-security-presentation-issa)

A Domain Name System (DNS) translates a domain name such as [www.example.com](http://www.example.com/)  to an IP address.

DNS is hierarchical, with a few authoritative servers at the top level. Your router or ISP provides information about which DNS server(s) to contact when doing a lookup. Lower level DNS servers cache mappings, which could become stale due to DNS propagation delays. DNS results can also be cached by your browser or OS for a certain period of time, determined by the [time to live (TTL) ](https://en.wikipedia.org/wiki/Time_to_live) .

## DNS record types 

- NS record (name server)  - Specifies the DNS servers for your domain/subdomain.
- MX record (mail exchange)  - Specifies the mail servers for accepting messages.
- A record (address)  - Points a name to an IP address.
- CNAME (canonical)  - Points a name to another name or `CNAME` (example.com to [www.example.com](http://www.example.com/)) or to an `A`record.

## DNS traffic route methods

Services such as [CloudFlare](https://www.cloudflare.com/dns/)  and [Route 53](https://aws.amazon.com/route53/)  provide managed DNS services. Some DNS services can route traffic through various methods:

- [Weighted round robin](http://g33kinfo.com/info/archives/2657) 
    - Prevent traffic from going to servers under maintenance
    - Balance between varying cluster sizes
    - A/B testing
- Latency-based
- Geolocation-based

## Disadvantage(s) : DNS

- Accessing a DNS server introduces a slight delay, although mitigated by caching described above.
- DNS server management could be complex, although they are generally managed by [governments, ISPs, and large companies](http://superuser.com/questions/472695/who-controls-the-dns-servers/472729) .
- DNS services have recently come under DDoS attack, preventing users from accessing websites such as Twitter without knowing Twitter's IP address(es) .

## Source(s) and further reading

- [DNS architecture](https://technet.microsoft.com/en-us/library/dd197427(v=ws.10) .aspx) 
- [Wikipedia](https://en.wikipedia.org/wiki/Domain_Name_System) 
- [DNS articles](https://support.dnsimple.com/categories/dns/) 