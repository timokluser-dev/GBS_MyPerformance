######## BUILD

# https://hub.docker.com/_/microsoft-dotnet-sdk/
FROM mcr.microsoft.com/dotnet/sdk:3.1.416-bullseye AS build
SHELL ["/bin/bash", "-c"]
USER root
WORKDIR /build

# # --> temp: apt-get exception due to image issues
# RUN echo 'APT::Get::AllowUnauthenticated "true";' > /etc/apt/apt.conf.d/AllowUnauthenticated.conf

# nodejs
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install nodejs -y

# # --> temp: remove exception again
# RUN rm -f /etc/apt/apt.conf.d/AllowUnauthenticated.conf

# copy everything 
WORKDIR /build
COPY . .

# build app
WORKDIR /build/GBS_MyPerformance
RUN dotnet restore
RUN dotnet publish -c release -o release --no-cache --no-self-contained

######## RUN

# https://hub.docker.com/_/microsoft-dotnet-aspnet/
FROM mcr.microsoft.com/dotnet/aspnet:3.1.22-bullseye-slim
WORKDIR /app

LABEL org.opencontainers.image.source=https://github.com/timokluser-dev/GBS_MyPerformance

COPY --from=build /build/GBS_MyPerformance/release ./

ENV ASPNETCORE_ENVIRONMENT=Production

EXPOSE 80

ENTRYPOINT ["dotnet", "GBS_MyPerformance.dll"]
