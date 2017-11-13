#!/bin/bash

CATEGORY=$1;
TITLE=$2;
USAGE="To use this script, execute it with 2 parameters: $ newpost <category> '<title with spaces>'"

function createPost(){
    if [ -z $2 ]
    then
    	echo $USAGE
    	return
    fi

    DATE=`date -I`
    TITLE_DASHED=$(sed -r 's/[^a-zA-Z0-9]+/_/g' <<< "$TITLE")
    mkdir -p "./images/posts/$DATE/"
    mkdir -p "./_drafts/$CATEGORY/"

    echo "---
title: $TITLE
author: Pascal Brokmeier
layout: post
cover: true
mathjax: false
tags: $CATEGORY
excerpt:
---" > "./_drafts/$CATEGORY/$DATE-$TITLE_DASHED.md"
}
createPost $CATEGORY $TITLE
