#!/bin/bash

docker login --username lend -p $DOCKER_ACCESS_TOKEN

docker rm -f kleinweb

docker rmi -f coinflow/klein-office-web:latest

docker-compose -f docker-compose.yml up -d