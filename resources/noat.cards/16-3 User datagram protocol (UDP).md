+++
noatcards = True
isdraft = False
weight = 163
+++

# User datagram protocol (UDP) 

## User datagram protocol (UDP) introduction

![](https://camo.githubusercontent.com/47eb14c0a2dff2166f8781a6ce8c7f33d4c33da8/687474703a2f2f692e696d6775722e636f6d2f797a44724a74412e6a7067) 

[Source: How to make a multiplayer game](http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/)

UDP is connectionless. Datagrams (analogous to packets) are guaranteed only at the datagram level. Datagrams might reach their destination out of order or not at all. UDP does not support congestion control. Without the guarantees that TCP support, UDP is generally more efficient.

UDP can broadcast, sending datagrams to all devices on the subnet. This is useful with [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)  because the client has not yet received an IP address, thus preventing a way for TCP to stream without the IP address.


## Use UDP over TCP when

UDP is less reliable but works well in real time use cases such as VoIP, video chat, streaming, and realtime multiplayer games.

Use UDP over TCP when:

- You need the lowest latency
- Late data is worse than loss of data
- You want to implement your own error correction

## Source(s) and further reading: TCP and UDP

- [Networking for game programming](http://gafferongames.com/networking-for-game-programmers/udp-vs-tcp/) 
- [Key differences between TCP and UDP protocols](http://www.cyberciti.biz/faq/key-differences-between-tcp-and-udp-protocols/) 
- [Difference between TCP and UDP](http://stackoverflow.com/questions/5970383/difference-between-tcp-and-udp) 
- [Transmission control protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) 
- [User datagram protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol) 
- [Scaling memcache at Facebook](http://www.cs.bu.edu/~jappavoo/jappavoo.github.com/451/papers/memcache-fb.pdf) 