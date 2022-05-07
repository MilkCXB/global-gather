#!/bin/sh
yarn 
yarn compile-external-abi-types

yarn build

docker build -t  coinflow/klein-office:latest .

docker login --username $DOCKER_ACCESS_NAME -p $DOCKER_ACCESS_TOKEN


docker push coinflow/klein-office:latest
