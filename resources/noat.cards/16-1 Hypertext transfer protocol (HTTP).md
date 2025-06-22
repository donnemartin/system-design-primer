+++ 
noatcards = True 
isdraft = False 
weight = 161
+++

# Hypertext transfer protocol (HTTP)

## Introduction about HTTP

HTTP is a method for encoding and transporting data between a client and a server. It is a request/response protocol:
clients issue requests and servers issue responses with relevant content and completion status info about the request.
HTTP is self-contained, allowing requests and responses to flow through many intermediate routers and servers that
perform load balancing, caching, encryption, and compression.

A basic HTTP request consists of a verb (method) and a resource (endpoint) . Below are common HTTP verbs:

| Verb | Description | Idempotent\* | Safe | Cacheable |
|---|---|---|---|---|
| GET | Reads a resource | Yes | Yes | Yes |
| POST | Creates a resource or trigger a process that handles data | No | No | Yes if response contains freshness info |
| PUT | Creates or replace a resource | Yes | No | No |
| PATCH | Partially updates a resource | No | No | Yes if response contains freshness info |
| DELETE | Deletes a resource | Yes | No | No |

HTTP is an application layer protocol relying on lower-level protocols such as TCP and UDP.

- [HTTP](https://www.nginx.com/resources/glossary/http/)
- [README](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol) 