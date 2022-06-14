FROM caddy:2.4.6-alpine

LABEL org.opencontainers.image.source=https://github.com/timokluser-dev/GBS_MyPerformance
LABEL org.opencontainers.image.description="GBS_MyPerformance: Reverse Proxy with SSLTLS"

COPY ./caddy/Caddyfile /etc/caddy/Caddyfile
