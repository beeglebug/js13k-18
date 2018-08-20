#!/usr/bin/env bash
rm -rf build
rm -f game.zip
mkdir build
cp -r src/* build
zip -r9 game.zip build/*
echo $(stat -f%z game.zip) / 13312
