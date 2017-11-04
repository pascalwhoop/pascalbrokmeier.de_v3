---
layout: post
title: "How to generate Flashcards for Ankidroid out of Markdown in Jekyll using Javascript"
date: 2016-01-27
categories: technology
tags: jekyll javascript anki markdown
author: Pascal Brokmeier
summary: A post about creating a summary using Markdown syntax which then renders into HTML and can, with a little javascript hacking, generate flashcards for Anki using CSV exports
---

So I started writing a blog and wanted to also use the content of my blog as flash cards. I love [Anki](http://ankisrs.net/), an Open-Source project so why not try and use this?

#### The Plan

**What I want**

1. Write my summaries in markdown
2. Convert my long text into small flashcards that I can use in Ankidroid

**How I do it**

1. Write my summaries in markdown
2. Use h4 and h5 level headings as markers for flashcard content. Anything written underneath a h4 or h5 is considered a *backside* while the heading itself is considered a *frontside*. 
    * I cannot yet add images to my flashcards so any images and formulas on the website get lost during export. But [I plan to change that](https://github.com/pascalwhoop/pascalwhoop.github.io/issues/1). 
3. Convert the HTML of the rendered page into a CSV
    1. Write a little Javascript code that parses the HTML DOM and creates a CSV string → function downloadCsv() in [custom.js](https://github.com/pascalwhoop/pascalwhoop.github.io/blob/master/js/custom.js)
    2. Use the polyfill [FileSaver.js](https://github.com/eligrey/FileSaver.js/) to download a string as a file. I build the string and then save it as a Blob and name it "card.csv"
4. Import the CSV into Anki

![](/images/2016-01-27-How-to-generate-Flashcards-for-Ankidroid-out-of-Markdown-in-Jekyll/1.png){: .center height="400px"}

![](/images/2016-01-27-How-to-generate-Flashcards-for-Ankidroid-out-of-Markdown-in-Jekyll/2.png){: .center height="400px"}

![](/images/2016-01-27-How-to-generate-Flashcards-for-Ankidroid-out-of-Markdown-in-Jekyll/3.png){: .center height="400px"}