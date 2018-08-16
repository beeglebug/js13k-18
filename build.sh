#!/usr/bin/env bash
rm build/*
rm game.zip
cp -r src/* build
zip -r9 game.zip build/*
echo $(stat -f%z game.zip) / 13312
