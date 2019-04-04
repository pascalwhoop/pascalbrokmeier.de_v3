#!/usr/bin/fish
set JEKYLL_ENV "production" 
bundle exec jekyll build
rsync -av _site/ ../pascalbrokmeier.de_build/ 

