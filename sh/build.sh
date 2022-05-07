#!/bin/sh
yarn 
yarn compile-external-abi-types

yarn build

docker build --platform linux/amd64 -t  coinflow/klein-office:latest .

docker login --username foxdex -p a800e815-d62b-4406-ba7a-84cb4a86d534


docker push coinflow/klein-office:latest
