---
title: 'The many pieces of browser caching'
description: 
category: Networking
date: 2021-02-13T00:00:00Z
---

## To start learning to love and understand caching, let's take a look at the many pieces of browser caching

### What problem is caching trying to solve

Surfing the web is a series of delivering content to your screen. Its you asking for a web page and the network finding that page and giving it to you. It's obvious, but often never thought about, pages with a lot of content take more time to send than pages with less content. Caching comes in to help deliver those big pages quicker. 

Here are some facts about [requesting web pages with large amounts of content](https://web.dev/http-cache/)
* They require multiple round trips to the server to grab all the content and resources
* You'll wait for you page to load until all essential resources and contents have been requested
* Having a poor network connection makes this entire process much more difficult

Browser Caching is a browswer feature that helps you as a developer manage these issues. 

## The many pieces of browser caching

It's a collection of Web API's that are found in all browsers. 

* Cache-Control
* ETag
* Last-Modified

### Cache-Control

### ETag

### Last-Modified

## How this process works 

When the user requests a web page the request is first routed to the cache, to check if there are any of the resources already there. If the resources  are found in the cache, then the page will use those resources, and send less requests out to the network. 

Managing how the request routes to caching is controlled by messages attached to the request. These messages are called request headers and response headers. The request headers are the messages that deal with the browser asking for information. While the respone headers are the messages that deal with sending information. The combination of these request/response headers serve as a way to configure and integrate cache is the information flow back n' forth between the browser and the server.

### Request headers

From what I am gathering, we as developers, don't actually have to touch these headers all that often. These headers are made up of two messages ```If-None-Match``` and ```If-Modified-Since```. 

* The ```If-Modified-Since``` header can be used to make a request coming in conditional.  Its often used as a way to compare a list of E-Tags on the browser side and a list of E-Tags on the server side. The purpose of this header is to [allow cache to update resources only if they are changed.](https://www.oreilly.com/library/view/http-the-definitive/1565925092/re30.html)

* The ```If-None-Match`` header also makes the request coming in conditional, but used if either browser or server doesn't have the [target resource stored anywhere](https://tools.ietf.org/html/rfc7232#page-14)

### Response Headers

The response headers is where you as the developer set up the caching strategy for the page. The ```Cache-Control```, ```ETag```, and ```Last-Modified``` headers all belong here.

In the wild you'll find that some web servers actually handle this aspect of caching for you as well, and others don't. The reason why some don't is because they want to be used for highly customizable caching strategies. If you need that level of control over caching and need to get very granular with caching then I would choose one of these web servers that leave the caching strategy in your hands. 

Configuring the ```Cache-Control``, ```ETag```, and ```Last-Modified``` in different ways is essentially how you develop a caching strategy. I've shared a video with this post demoing some of there inner workings.

<!-- Post todos -->
* Fill in the header section content
* Create a small demo for this post
