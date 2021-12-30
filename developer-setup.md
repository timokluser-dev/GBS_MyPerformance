# Developer Setup

This repo is a [**Monorepo**](https://www.atlassian.com/git/tutorials/monorepos).
Run helper scripts using npm-scripts.

## Prerequisites

- **Git**
  - Windows: https://git-scm.com/download/win
  - macOS: https://git-scm.com/download/mac
- **Node.js** - Version [16.13.0](.nvmrc)
  - Windows: https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.zip
  - macOS: https://github.com/nvm-sh/nvm#install--update-script
- **dotnet SDK** - Version [3.1.416](global.json)
  - Windows: https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-3.1.416-windows-x64-installer
  - macOS: https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-3.1.416-windows-x64-installer
- **Docker Desktop**
  - Windows: https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe
  - macOS: https://desktop.docker.com/mac/main/amd64/Docker.dmg

### dotnet tools

```bash
dotnet tool install --global dotnet-ef
```

## Installation

- Windows: use `Windows PowerShell` **as Admin**
- macOS: use `zsh` or `bash`

```bash
# clone the repo
git clone https://github.com/timokluser-dev/GBS_MyPerformance.git
cd GBS_MyPerformance
git checkout master

# copy .sample files
cp GBS_MyPerformance/appsettings.Development.sample.json GBS_MyPerformance/appsettings.Development.json
cp GBS_MyPerformance/appsettings.sample.json GBS_MyPerformance/appsettings.json

# activate node version
nvm install $(cat .nvmrc)
nvm use $(cat .nvmrc)

# install dependencies
npm install
npm run clientapp:install
# if failed: cd ./GBS_MyPerformance/ClientApp ; npm install ; cd ../..

# open 'Docker Desktop'
# Windows: make sure that linux containers are selected

# start containers
npm run docker:up

# run migrations
dotnet ef database update -p GBS_MyPerformance

# start visual studio from terminal
npm run win:vs # npm run mac:vs

# install certificates
dotnet dev-certs https --clean
dotnet dev-certs https --trust
```

## Running

The following command starts both, BE & FE.

```bash
npm run backend:start
```

:arrow_right: https://localhost:5001

## Developing

When doing changes to the BE & FE.

```bash
# start visual studio from terminal
npm run mac:vs
npm run win:vs

# start with auto reload
npm run backend:start-dev
```

:arrow_right: https://localhost:5001

## ❔ Questions

:arrow_right: Contact [timo.kluser@edu.gbssg.ch](https://teams.microsoft.com/l/chat/0/0?users=timo.kluser@edu.gbssg.ch)
