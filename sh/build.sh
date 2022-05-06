#!/bin/sh
yarn 
yarn compile-external-abi-types

yarn build

docker build -t  coinflow/crv-office-web:latest .

docker login --username $DOCKER_ACCESS_NAME -p $DOCKER_ACCESS_TOKEN


docker push coinflow/crv-office-web:latest
