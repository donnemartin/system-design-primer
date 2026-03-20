+++ 
noatcards = True 
isdraft = False 
weight = 165
+++

# Representational state transfer (REST)

## Representational state transfer introduction

REST is an architectural style enforcing a client/server model where the client acts on a set of resources managed by
the server. The server provides a representation of resources and actions that can either manipulate or get a new
representation of resources. All communication must be stateless and cacheable.

## RESTful interface

There are four qualities of a RESTful interface:

- Identify resources (URI in HTTP)  - use the same URI regardless of any operation.
- Change with representations (Verbs in HTTP)  - use verbs, headers, and body.
- Self-descriptive error message (status response in HTTP)  - Use status codes, don't reinvent the wheel.
- [HATEOAS](http://restcookbook.com/Basics/hateoas/)  (HTML interface for HTTP)  - your web service should be fully
  accessible in a browser.

Sample REST calls:

```
    GET /someresources/anId
    
    PUT /someresources/anId
    {"anotherdata": "another value"}
```

REST is focused on exposing data. It minimizes the coupling between client/server and is often used for public HTTP
APIs. REST uses a more generic and uniform method of exposing resources through
URIs, [representation through headers](https://github.com/for-GET/know-your-http-well/blob/master/headers.md) , and
actions through verbs such as GET, POST, PUT, DELETE, and PATCH. Being stateless, REST is great for horizontal scaling
and partitioning.

## Disadvantage(s) : REST

- With REST being focused on exposing data, it might not be a good fit if resources are not naturally organized or
  accessed in a simple hierarchy. For example, returning all updated records from the past hour matching a particular
  set of events is not easily expressed as a path. With REST, it is likely to be implemented with a combination of URI
  path, query parameters, and possibly the request body.
- REST typically relies on a few verbs (GET, POST, PUT, DELETE, and PATCH) which sometimes doesn't fit your use case.
  For example, moving expired documents to the archive folder might not cleanly fit within these verbs.

## What is HATEOAS and why is it important for my REST API?
--------------------------------------------------------

HATEOAS stands for **Hypertext As The Engine Of Application State**. It means that hypertext should be used to find your
way through the API. An example:

```
GET /account/12345 HTTP/1.1

HTTP/1.1 200 OK
<?xml version="1.0"?>
<account>
    <account_number>12345</account_number>
    <balance currency="usd">100.00</balance>
    <link rel="deposit" href="/account/12345/deposit" />
    <link rel="withdraw" href="/account/12345/withdraw" />
    <link rel="transfer" href="/account/12345/transfer" />
    <link rel="close" href="/account/12345/close" />
</account>
```

Apart from the fact that we have 100 dollars (US) in our account, we can see 4 options: deposit more money, withdraw
money, transfer money to another account, or close our account. The "link"-tags allows us to find out the URLs that are
needed for the specified actions. Now, let's suppose we didn't have 100 usd in the bank, but we actually are in the red:

```
    GET /account/12345 HTTP/1.1
    
    HTTP/1.1 200 OK
    <?xml version="1.0"?>
    <account>
        <account_number>12345</account_number>
        <balance currency="usd">-25.00</balance>
        <link rel="deposit" href="/account/12345/deposit" />
    </account>
```

Now we are 25 dollars in the red. Do you see that right now we have lost many of our options, and only depositing money
is valid? As long as we are in the red, we cannot close our account, nor transfer or withdraw any money from the
account. The hypertext is actually telling us what is allowed and what not: HATEOAS

## RPC and REST calls comparison

| Operation | RPC | REST |
|---|---|---|
| Signup    | **POST** /signup | **POST** /persons |
| Resign    | **POST** /resign<br/>{<br/>"personid": "1234"<br/>} | **DELETE** /persons/1234 |
| Read a person | **GET** /readPerson?personid=1234 | **GET** /persons/1234 |
| Read a person’s items list | **GET** /readUsersItemsList?personid=1234 | **GET** /persons/1234/items |
| Add an item to a person’s items | **
POST** /addItemToUsersItemsList<br/>{<br/>"personid": "1234";<br/>"itemid": "456"<br/>} | **
POST** /persons/1234/items<br/>{<br/>"itemid": "456"<br/>} |
| Update an item    | **POST** /modifyItem<br/>{<br/>"itemid": "456";<br/>"key": "value"<br/>} | **
PUT** /items/456<br/>{<br/>"key": "value"<br/>} |
| Delete an item | **POST** /removeItem<br/>{<br/>"itemid": "456"<br/>} | **DELETE** /items/456 |

<p align="center">
  <i><a href=https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/>Source: Do you really know why you prefer REST over RPC</a></i>
</p>