+++
noatcards = True
isdraft = False
+++

# Representational state transfer (REST) 

## Representational state transfer introduction 

REST is an architectural style enforcing a client/server model where the client acts on a set of resources managed by the server. The server provides a representation of resources and actions that can either manipulate or get a new representation of resources. All communication must be stateless and cacheable.

## RESTful interface

There are four qualities of a RESTful interface:

- Identify resources (URI in HTTP)  - use the same URI regardless of any operation.
- Change with representations (Verbs in HTTP)  - use verbs, headers, and body.
- Self-descriptive error message (status response in HTTP)  - Use status codes, don't reinvent the wheel.
- [HATEOAS](http://restcookbook.com/Basics/hateoas/)  (HTML interface for HTTP)  - your web service should be fully accessible in a browser.

Sample REST calls:

```
    GET /someresources/anId
    
    PUT /someresources/anId
    {"anotherdata": "another value"}
```

REST is focused on exposing data. It minimizes the coupling between client/server and is often used for public HTTP APIs. REST uses a more generic and uniform method of exposing resources through URIs, [representation through headers](https://github.com/for-GET/know-your-http-well/blob/master/headers.md) , and actions through verbs such as GET, POST, PUT, DELETE, and PATCH. Being stateless, REST is great for horizontal scaling and partitioning.

## Disadvantage(s) : REST

- With REST being focused on exposing data, it might not be a good fit if resources are not naturally organized or accessed in a simple hierarchy. For example, returning all updated records from the past hour matching a particular set of events is not easily expressed as a path. With REST, it is likely to be implemented with a combination of URI path, query parameters, and possibly the request body.
- REST typically relies on a few verbs (GET, POST, PUT, DELETE, and PATCH) which sometimes doesn't fit your use case. For example, moving expired documents to the archive folder might not cleanly fit within these verbs.