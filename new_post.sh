#!/bin/bash

CATEGORY=$1;
TAGS=$2
TITLE=$3;
IMG_PATH=$4;
USAGE="To use this script, execute it with 4 parameters: $ newpost '<categories>' '<tags>' '<title with spaces>' <path-to-cover-jpg>"

function createPost(){
    if [ -z $3 ]
    then
    	echo $USAGE
    	return
    fi

    DATE=`date -I`
    TITLE_DASHED=$(sed -r 's/[^a-zA-Z0-9]+/_/g' <<< "$TITLE")
    mkdir -p "./images/posts/$DATE/"
    mkdir -p "./_drafts/$CATEGORY/"
    IMG_TARGET_PATH="./images/posts/$DATE/cover.jpg"
    convert -gravity center -crop 100%x75%+0+0 $IMG_PATH $IMG_TARGET_PATH
    convert -resize 2000x2000 $IMG_TARGET_PATH $IMG_TARGET_PATH
    echo "---
title: $TITLE
author: Pascal Brokmeier
layout: post
cover: true
cover-credit: 
mathjax: false
categories: $CATEGORY
tags: $TAGS
excerpt:
---" > "./_drafts/$CATEGORY/$DATE-$TITLE_DASHED.md"
}
createPost $CATEGORY $TITLE
