#!/usr/bin/fish
cd /home/pascalwhoop/Documents/Code/website/pascalbrokmeier.de_build
git add ./
git commit -m "prod build"
git push -f origin master:gh-pages
