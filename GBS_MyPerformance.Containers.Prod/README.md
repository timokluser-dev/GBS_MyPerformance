# GBS_MyPerformance.Containers.Prod

## How To Deploy

1. setup DNS records

    `curl 'https://api.ipify.org'`

2. copy .env.sample to .env

    `cp -n .env.sample .env`

3. edit .env config

    `nano .env`

3. run containers (from project root)

    `docker-compose -f ./GBS_MyPerformance.Containers.Prod/docker-compose.yml up -d`
