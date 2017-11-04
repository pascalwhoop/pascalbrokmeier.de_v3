---
layout: post
title:  "Helpful snippets for writing a Post with markdown first and then moving it to a jekyll blog"
date:   2016-01-20
categories: technology
tags: jekyll markdown shell
banner:
bannersize:
hasmath: true
github: true
author: Pascal Brokmeier
summary: A bunch of snippets and regex stuff to help me move files automatically after I am done summarising university classes.
---

### MathJax

I want to use MathJAX in my posts to include better looking formulas. I included mathjax with and I'm using browser-sync to keep my scroll position locked for longer articles

{% highlight html %}
    <script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML"></script>
{% endhighlight %}
to include it into my html. Then 

{% highlight html %}
  \`x = (-b +- sqrt(b^2-4ac))/(2a) .\`
{% endhighlight %}

to get
\`x = (-b +- sqrt(b^2-4ac))/(2a) .\`



### A shell script to move my written summary over to my blog

<del>Is not needed anymore thanks to auto scroll</del>
I know write all my summaries directly in my blog repository and live-view it on the website instead of Marked 2. This works because I now scroll automatically to my last position on a reload. With MDL this didn't work, because there was a [bug (also on Github)](https://github.com/google/material-design-lite/issues/1120). But Thanks to this snippet:

{% highlight javascript %}
// FIX scroll bug (live-serve usually scrolls back but MDL has its own layout stuff which makes things complicated)
//...
this.blocked = false;

this.resetScrollState = function(){
            var mainScrollArea = document.getElementsByClassName('mdl-layout__content')[0];
            setTimeout(function () {
                if (window.location.href == localStorage.getItem('lastUrl')) {
                    mainScrollArea.scrollTop = localStorage.getItem('scrollTop');
                } else {
                    localStorage.setItem('lastUrl', window.location.href);
                    localStorage.setItem('scrollTop', 0);
                }
            }, 100);


            mainScrollArea.addEventListener('scroll', function () {
                if (!that.blocked) {
                    localStorage.setItem('scrollTop', this.scrollTop);
                    that.blocked = true;
                    setTimeout(function () {
                        that.blocked = false;
                    }, 200);
                }
            });
        };

window.onload = resetScrollState;
{% endhighlight %}

it doesn't happen anymore and I can always keep going where I left off when i press ⌘ + s

### Regex for copy / replacing in markdown documents

#### changing images sources

{% highlight bash %}
\(([0-9]*\.png)\)

replace e.g. with 

(\/images\/2016-02-02-social-computational-media-summary\/$1)

{% endhighlight %}

#### make all questions headlines

{% highlight bash %}
//selector for sublime regex filter
\n([0-9]{1,2}\.)
//replace
\n#### $1
{% endhighlight %}


{% highlight bash %}
//replace multimarkdown subscript with html subscript
~([a-z0-9]*)~
//replace
<sub>$1</sub>
{% endhighlight %}


<del>
**parse markdown and make it usable for Ankidroid**
</del>

This is not applicable anymore. Instead I use Javascript to parse the DOM and generate a CSV. Details in the custom.js file in this repository

<del>
assuming we have markdown written with headline level 4 or 5 as questions and answers afterwards, this regex can select and group our texts so we can convert it to a csv:
</del>
{% highlight bash %}
#{4,5}(.*)([^#]*)
{% endhighlight %}


