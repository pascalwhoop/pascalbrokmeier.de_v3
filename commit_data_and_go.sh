#!/bin/bash
logger "Committing reading list to github repo"
git pull
git add _data/
git commit -m "regular data addition"
git push
