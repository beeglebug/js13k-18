#!/usr/bin/env bash

rm game.zip
cp -r src/* build
zip -r9 game.zip build/*
stat -f%z game.zip
