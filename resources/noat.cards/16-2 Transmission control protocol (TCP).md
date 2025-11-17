+++
noatcards = True
isdraft = False
weight = 162
+++

# Transmission control protocol (TCP) 

## TCP Introduction

![](https://camo.githubusercontent.com/821620cf6aa83566f4def561e754e5991480ca8d/687474703a2f2f692e696d6775722e636f6d2f4a6441736476472e6a7067) 

[Source: How to make a multiplayer game](http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/)

TCP is a connection-oriented protocol over an [IP network](https://en.wikipedia.org/wiki/Internet_Protocol) . Connection is established and terminated using a [handshake](https://en.wikipedia.org/wiki/Handshaking) . All packets sent are guaranteed to reach the destination in the original order and without corruption through:

- Sequence numbers and [checksum fields](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Checksum_computation)  for each packet
- [Acknowledgement](https://en.wikipedia.org/wiki/Acknowledgement_(data_networks)) packets and automatic retransmission

If the sender does not receive a correct response, it will resend the packets. If there are multiple timeouts, the connection is dropped. TCP also implements [flow control](https://en.wikipedia.org/wiki/Flow_control_(data)) and [congestion control](https://en.wikipedia.org/wiki/Network_congestion#Congestion_control) . These guarantees cause delays and generally results in less efficient transmission than UDP.

To ensure high throughput, web servers can keep a large number of TCP connections open, resulting in high memory usage. It can be expensive to have a large number of open connections between web server threads and say, a [memcached](https://github.com/donnemartin/system-design-primer#memcached)  server. [Connection pooling](https://en.wikipedia.org/wiki/Connection_pool)  can help in addition to switching to UDP where applicable.


## Use TCP over UDP when:

TCP is useful for applications that require high reliability but are less time critical. Some examples include web servers, database info, SMTP, FTP, and SSH.

- You need all of the data to arrive in tact
- You want to automatically make a best estimate use of the network throughput