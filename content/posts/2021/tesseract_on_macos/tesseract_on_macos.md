+++
categories = ["macos", "technology", "documents"]
draft = true
date = "2021-03-09"
description = "How to get text from documents on macos or Linux using pdfsandwich"
featured = "pic01.jpg"
featuredalt = ""
featuredpath = "date"
linktitle = ""
title = "Quick OCR using pdfsandwhich on MacOS"
slug = "Quick OCR using pdfsandwich on MacOS"
type = "post"
+++

How many PDFs do you have that are just a bunch of `png` or `jpg` files thrown together in a PDF? I at least have quite a few from people that don't treat document archival like it's important. So, I wanted to run through all my pdf files and update them all, OCR'ing them so they are full-text searchable for the spotlight indexing. 

```bash
brew install pdfsandwich
```
[pdfsandwich](http://www.tobias-elze.de/pdfsandwich/) is a tool that wraps a set of other libraries such as tesseract and unpaper to create a high-level interface for this typical use-case: In goes a PDF without searchable text, out comes one with. 

Calling it on a pdf 