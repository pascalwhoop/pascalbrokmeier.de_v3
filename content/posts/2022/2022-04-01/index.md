---
title: "Creating a CV from Medium notes"
author: Pascal Brokmeier
layout: post
cover: ./cover.jpg
cover-credit: João Ferrão
mathjax: false
date: 2022-04-06
categories:
 - technology
tags: 
 - cv
 - website
 - notion
excerpt: How I used notion and a small script to turn my notes into an automatically updating CV using the json resume standard
---

I wanted to generate a CV automatically from my notes that I take on every project I have
been on for a while now. For these notes, I use [notion.so](notion.so) so I thought I'd
tap into their API to generate my CV automatically from this data. 

The goal is to generate a CV from my notes, leveraging
[jsonresume](https://jsonresume.org/) as well as the data in notion and some python code
to bring it together.

# Extracting the data from the notion API

First we have to create an extension in notion and share the database with the extension. This allows us to read the data from this database into python. 
![](share_with_int.png)


```python
```