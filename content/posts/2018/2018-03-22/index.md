---
title: Want to do
author: Pascal Brokmeier
layout: post
cover: ./cover.jpg
date: 2018-03-22
cover-credit: glenncarstenspeters
mathjax: false
categories:
 - technology
tags:
 - todo
excerpt: A WIP list on things I wanna do or build that are tech related. 
---

Here are some projects that I want to do when I find the time for them. They are ideas for possible online businesses,
simple websites, libraries or what have you. If you have time to do it, feel free to do so if you contribute me as an
ideaist and let me know how it goes. They are not sorted in any particular order although that might change at some
point. 

## A collection of "must have" databases / books / articles for a potential internet shutdown

Our society is pretty digital. But it's also pretty dependent on this tech. What if that is not available anymore? What
if it just all stops working? I want an offline version of:

- maps (openstreetmaps) [here](https://wiki.openstreetmap.org/wiki/Downloading_data)
- wikipedia [here](https://en.wikipedia.org/wiki/Wikipedia:Database_download)
- a collection of ebooks for survival, nature, building things etc
- most important pieces of knowledge as epub
- whatever else may be useful

The whole thing should fit on an external hard drive, be self contained (i.e. contain all the libraries needed to make
it run on contemporary windows / linux system hardware). I am thinking, ideally this would be a life bootable linux
system that has the wikipedia and openstreetmaps databases running inside of it as well as all the files on a readable
partition. That + a few ebook readers may allow for very low-power knowledge distribution. 

## Keyboard typing audio filter for microphones

> Has been sort of been made obsolote by
> [this](https://arstechnica.com/gadgets/2018/04/google-works-out-a-fascinating-slightly-scary-way-for-ai-to-isolate-voices-in-a-crowd/)

Neural Networks are really good at pattern recognition. Adversarial neural networks are really good at creating fake
images that look almost real. That is because the first NN is trained to recognize images while the second one is
trained to fool the first one. So here is my idea: If you have a keylogger that logs the time of each keystroke down to
the millisecond, as well as a stream of audio of recording, you could train a neural network that recognizes these
keystrokes and then a second one that gets the original audio stream and needs to manipulate the stream so as to fool
the first one (so that the first one doesn't recognize the keystrokes anymore) while keeping the stream as untouched as
possible. Hence the second one will get a reward for the first one not being able to recognize strokes while also
getting less reward the more the original stream is changed. 

## Telegram Bot to control some home activities

[In the works](https://github.com/pascalwhoop/pascalwhoopbutler)

A bot that runs on the Pi at home could easily be written to offer several commands to me. I could have a folder with
python or bash scripts that each holds a named script. Then the bot could offer me to remotely trigger those scripts via
telegram messages. This would be less technical than having to SSH into the machine and can also avoid a lot of firewall
issues. But the bot needs to have some authentication scheme as anyone can write my bot. I used to have this for my
lights at home because my roomates had old phones and our lights were controlled by Apples Homekit (using a bridge on a
Pi to the 433mhz plugs). That asked for a secret password before you could do anything. 

## WhenToMove

A website that takes two locations and then tells you the times of the year when one or the other has more dailight
hours, less rain etc. I live in Naples right now, where it's warmer than in Germany but rainier until end of April. You
could give a set of weights for different categories (rain, sunshine, daylight, ...) and the app would give you
recommended moving dates in the year. A lot of people (who can afford it) in Europe live somewhere in the south during the winter and up
north in the summer.

## CMS service based on GitHub and Jekyll

Turning this website pattern into something that can be served online as a service for small scale teams. I have this
website without any costs aside from the domain name. GitHub is my CMS, Google Firebase hosts it and creates SSL certs.
Because the code is public, I can use CircleCI to build on commit and I use Cloudinary to ensure efficient images are
served using a [jekyll plugin](https://nhoizey.github.io/jekyll-cloudinary/). The only problem is that beginners will
not be able to cope with GitHub and especially the decentral nature of Git. A web interface for writing posts that has
some form of Authentication should be enough to cover most people while keeping one person in the team who needs to
understand jekyll, HTML/CSS and Git. 

## Chatgroups based on location closeness

Often, there are large groups of people meeting that don't share a phone number and that need to stay in touch for a few
days. Such groups could be tours with guides, student trips, group vacations, city competitions etc. A chat app that
allows you to quickly create a chatroom that anyone that is closeby can join would help people to share their activities
without the need to exchange phone numbers with everyone. The process would look as such:

1. Group leader opens a room
2. Everyone in the vicinity is asked to join
3. Anyone joined receives a link that can be used to join later

The app could also have some other cool features such as: 

**Peer to peer based image sharing**: Often, groups go to parties together and they want to share their pics. Who wants
a WhatsApp compressed pic though... no one likes bad quality pics. So a feature could be to share all images taken in
a specified period by everyone with everyone else. So we go out with friends? All pics between 10pm and 4am are shared
with the group once the phones get back to WiFi. With 5G this could take off even more because phones could share
directly. 

## Facebook deletion script

Facebook really doesn't offer much other than: 

- a list of friends
- birthdays
- groups for buying, sharing, gifting, etc

So a script that runs on the lightweight activity log on [m.facebook.com](https://m.facebook.com/) and deletes all old posts would be a nice thing. The "Delete" buttons don't trigger any "are you sure" dialogs and offer a URL that can be used to delete things. 

```
<a
lref="/allactivity/removecontent/?profile_id=1118218499&amp;action=remove_comment&amp;timeline_token=1400914419%3A1076331159073387%3A1%3B1501034974%3A1120930962&amp;ent_identifier=S%3A_I2420210499%3A1876231159373387%3A1&amp;ext=1521963589&amp;hash=AeRUZ7R8VsSm9FEN"
class="cy">Delete</a>
```

These can then be asynchronously called and all sorts of stuff from the past can be deleted. Who needs to keep posts
from 2012 around anyways? 



