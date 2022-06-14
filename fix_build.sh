#!/usr/bin/env bash
set -e

# load nvm
. ~/.nvm/nvm.sh

BASE_PATH=$(pwd)

npm run docker:down

npm run docker:up

nvm use

npm i

chmod +x ./GBS_MyPerformance/ClientApp/projects/build.sh

cd ./GBS_MyPerformance/ClientApp/projects
./build.sh

cd $BASE_PATH

npm run backend:start
