FROM caddy:2.4.6-alpine

LABEL org.opencontainers.image.source=https://github.com/timokluser-dev/GBS_MyPerformance

COPY ./Caddyfile /etc/caddy/Caddyfile
