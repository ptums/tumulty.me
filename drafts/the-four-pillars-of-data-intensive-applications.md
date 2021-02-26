---
title: The Four Pillars of Data Intensive Applications
description: The big ideas 
category: 
---

This is me interpreting the first chapter of Designing Data Intensive Applications, published by O'Reilly, and written by Martin Kleppmann

## When designing a data intensive application the goal is for this app to be reliable, scalalble, and easily maintable. 

Every data intensive application has the same building blocks

* Databases - making data persistant, so the app can find it again later
* Caches - storing resources to speed up requests
* Search Index - enable the user to search data by keywords and filters
* Stream Processing - asynchronously sending messages between processes
* Batch Processing - cruching large amounts of data


The goal of designing a data intensive application is finding the right combination of tools for each one of these categories and making your application reliable, scalable, and maintable. This article covers the approach we should take to start designing data based applications to adhere to these rules. 

### Overview 

If you think about databases, queues, caches, streaming processes etc. as different categories of tools <!-- page 4 -->


