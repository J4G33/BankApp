#!/bin/bash

docker build -t j23916garcia/playbank:latest -f Dockerfile .
docker push j23916garcia/playbank:latest

docker build -t j23916garcia/playbank-api:latest -f Dockerfile.api .
docker push j23916garcia/playbank-api:latest