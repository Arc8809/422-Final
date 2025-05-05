#!/bin/bash

echo "starting"
repo=$1

docker build -t $repo/422-final:latest -f Dockerfile .
echo "texting build finished"

