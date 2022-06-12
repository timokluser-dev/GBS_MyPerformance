# https://hub.docker.com/_/microsoft-dotnet-sdk/
FROM mcr.microsoft.com/dotnet/sdk:3.1.416-bullseye
SHELL ["/bin/bash", "-c"]
USER root
WORKDIR /app

LABEL org.opencontainers.image.source=https://github.com/timokluser-dev/GBS_MyPerformance

# # --> temp: apt-get exception due to image issues
# RUN echo 'APT::Get::AllowUnauthenticated "true";' > /etc/apt/apt.conf.d/AllowUnauthenticated.conf

# install packages
RUN apt-get update
RUN apt-get install netcat -y

# # --> temp: remove exception again
# RUN rm -f /etc/apt/apt.conf.d/AllowUnauthenticated.conf

# copy project
WORKDIR /app
COPY . .

# install dotnet tools
WORKDIR /app/GBS_MyPerformance
RUN dotnet restore
RUN dotnet tool install --global dotnet-ef

ENV PATH=$PATH:/root/.dotnet/tools

# add entrypoint
COPY GBS_MyPerformance.Containers.Prod/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENV ASPNETCORE_ENVIRONMENT=Production
ENV DB_HOST=mssql
ENV DB_PORT=1433

ENTRYPOINT ["docker-entrypoint"]
