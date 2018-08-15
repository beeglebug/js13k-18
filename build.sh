#!/usr/bin/env bash

rm game.zip
cp -r src/* build
zip -r9 game.zip build/*
echo $(stat -f%z game.zip) / 13312
