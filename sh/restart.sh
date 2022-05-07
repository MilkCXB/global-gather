#!/bin/bash

docker login --username lend -p $DOCKER_ACCESS_TOKEN

docker rm -f kleinoffice

docker rmi -f coinflow/klein-office:latest

docker-compose -f docker-compose.yml up -d