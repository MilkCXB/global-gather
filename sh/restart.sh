#!/bin/bash

docker login --username lend -p $DOCKER_ACCESS_TOKEN

docker rm -f crvweb

docker rmi -f coinflow/crv-office-web:latest

docker-compose -f docker-compose.yml up -d