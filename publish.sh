#!/bin/sh
npm run-script build
rm -r docs/*
mv -f build/* docs/ 
git add .
