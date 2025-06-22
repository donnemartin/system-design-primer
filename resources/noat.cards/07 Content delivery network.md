+++
noatcards = True
isdraft = False
weight = 70
+++


# Content delivery network


![](https://camo.githubusercontent.com/853a8603651149c686bf3c504769fc594ff08849/687474703a2f2f692e696d6775722e636f6d2f683954417547492e6a7067) 

[Source: Why use a CDN](https://www.creative-artworks.eu/why-use-a-content-delivery-network-cdn/)

A content delivery network (CDN) is a globally distributed network of proxy servers, serving content from locations closer to the user. Generally, static files such as HTML/CSS/JSS, photos, and videos are served from CDN, although some CDNs such as Amazon's CloudFront support dynamic content. The site's DNS resolution will tell clients which server to contact.

Serving content from CDNs can significantly improve performance in two ways:

- Users receive content at data centers close to them
- Your servers do not have to serve requests that the CDN fulfills

## Push CDNs

Push CDNs receive new content whenever changes occur on your server. You take full responsibility for providing content, uploading directly to the CDN and rewriting URLs to point to the CDN. You can configure when content expires and when it is updated. Content is uploaded only when it is new or changed, minimizing traffic, but maximizing storage.

Sites with a small amount of traffic or sites with content that isn't often updated work well with push CDNs. Content is placed on the CDNs once, instead of being re-pulled at regular intervals.

## Pull CDNs

Pull CDNs grab new content from your server when the first user requests the content. You leave the content on your server and rewrite URLs to point to the CDN. This results in a slower request until the content is cached on the server.

[time-to-live (TTL) ](https://en.wikipedia.org/wiki/Time_to_live) determines how long content is cached. Pull CDNs minimize storage space on the CDN, but can create redundant traffic if files expire and are pulled before they have actually changed.

Sites with heavy traffic work well with pull CDNs, as traffic is spread out more evenly with only recently-requested content remaining on the CDN.

## Disadvantage(s) : CDN

- CDN costs could be significant depending on traffic, although this should be weighed with additional costs you would incur not using a CDN.
- Content might be stale if it is updated before the TTL expires it.
- CDNs require changing URLs for static content to point to the CDN.

## Source(s) and further reading

- [Globally distributed content delivery](http://repository.cmu.edu/cgi/viewcontent.cgi?article=2112&context=compsci) 
- [The differences between push and pull CDNs](http://www.travelblogadvice.com/technical/the-differences-between-push-and-pull-cdns/) 
- [Wikipedia](https://en.wikipedia.org/wiki/Content_delivery_network) 