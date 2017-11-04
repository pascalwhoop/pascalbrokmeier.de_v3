---
title: Optimizing a Jekyll Blog with minification, image optimisation and caching on Firebase Hosting
author: Pascal Brokmeier
layout: post
thumbnail: /images/posts/2017-11-03/thumbnail.jpg
banner: false
mathjax: false
tags: jekyll technology blog
---

**Where I was:**

-   Jekyll Blog hosted on Github Pages
-   No HTTPS
-   about 1.8MB page load
-   PageSpeed Ranking of 61/100

**Where I am now:**

-   Jekyll Blog hosted with Firebase Hosting
-   HTTPS
-   X.X MB load size on initial load
-   X.X MB load size on subsequent load using caching
-   PageSpeed Ranking of XX XXX
-   Dynamicially sized images using XXXX
-   search engine ranking improvements

## Tools required

-   The [Jekyll-Cloudinary plugin](https://nhoizey.github.io/jekyll-cloudinary/#live-example) is my first step. My images are huge! I had some automated size reduction going with imagemagick but this is by far better suited to do the job
    -   An Atom custom snippet for the required liquid tag
-   Switching to Firebase for hosting. Reasons: Caching and SSL


## Where we start
I assume you have `jekyll` installed as well as `ruby-bundle` and know how to work with git(hub). If you don't then this post is most likely not for you and you should first figure out how to set up a blog using jekyll.

## Get rid of those Megapixels

**Install the jekyll plugin: [jekyll-cloudinary](https://nhoizey.github.io/jekyll-cloudinary/#installation) and of course you need to [create a cloudinary accounting](https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/flurhi5jzgzzan33ou6f)**

Now, my `_config.yml` looks as such

```
plugins_dir:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
  - jekyll-cloudinary #used for improving page load speeds with images

cloudinary:
    cloud_name:pascal-brokmeier
    presets:
    default:
      min_width: 320
      max_width: 1600
      fallback_max_width: 800
      steps: 5
      sizes: "(min-width: 50rem) 50rem, 90vw"
    banner:
      min_width: 320
      max_width: 1900
      fallback_max_width: 1600
      steps: 4
      sizes: "50vw 80vw 100vw"
```

There are several nice ways to get sexy image positioning going but I refer you to the manual of the plugin to find out more about this.

Now I used the new liquid tag for my main homepage (which sadly is riddled with images, but that is what I chose). Here are the results

{% cloudinary default /images/posts/2017-11-03/before_cloudinary.png alt="Before load times" %}
{% cloudinary default /images/posts/2017-11-03/after_cloudinary.png alt="After load times" %}

## Move to Firebase
[Based on this post](https://chris.banes.me/2017/06/02/jekyll-firebase/) the steps are quiet simple. So I'll just summarize them in a quick checklist

[ ] Install firebase cli with `npm install -g firebase-cli`

> **In between benchmark with Google PageSpeed Tools: 86/100** Not bad.

## Minification and further speed improvements
https://habd.as/pagespeed-100-with-jekyll-s3-and-cloudfront/




## Get HTTPS

## Get Caching of ressources

## Do something for my page's SEO
https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md

## Bonus Points: A service worker
## Bonus Points: Webmention for Social features


TODO AT THE end
https://developers.google.com/speed/pagespeed/insights/?url=pascalbrokmeier.de&tab=mobile
