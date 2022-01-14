# https://hub.docker.com/_/microsoft-dotnet-sdk/
FROM mcr.microsoft.com/dotnet/sdk:3.1.416-bullseye
SHELL ["/bin/bash", "-c"]
USER root
WORKDIR /app

# copy project
WORKDIR /app
COPY . .

# install packages
RUN apt-get update
RUN apt-get install -y \
    netcat

# install dotnet tools
WORKDIR /app/GBS_MyPerformance
RUN dotnet restore
RUN dotnet tool install --global dotnet-ef

ENV PATH $PATH:/root/.dotnet/tools

# add entrypoint
COPY GBS_MyPerformance.Containers.Prod/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]
