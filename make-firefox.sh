#!/bin/bash

cd src/
python generate_images.js.py
cd ..

mkdir -p dist/firefox
rm -r dist/firefox/*
cp -R platforms/firefox/* dist/firefox
cp -R src/* dist/firefox
