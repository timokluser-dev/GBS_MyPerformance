#!/usr/bin/env bash
set -e

# ANGULAR
NG_VERSION=8.2.12

# OPENAPI
SPEC_URL="https://localhost:5001/swagger/v1/swagger.json"
SPEC_FILE="tmp/spec.json"

#####

cd ./myperformance-client

#####

# rm -rf ./src
# mkdir ./src

mkdir -p tmp

wget --quiet --no-check-certificate $SPEC_URL -O $SPEC_FILE

docker run --rm --net=host -u="$(id -u)" -v ${PWD}:/local swaggerapi/swagger-codegen-cli-v3:unstable generate \
    --model-name-suffix=DTO \
    -i /local/$SPEC_FILE \
    -l typescript-angular \
    -o /local/src \
    --additional-properties ngVersion=$NG_VERSION

# fix: error imports
find ./src/model/*.ts -type f -exec sed -i '' -e 's|DTODTO|DTO|g' {} \;
find ./src/api/*.service.ts -type f -exec sed -i '' -e 's|DTODTO|DTO|g' {} \;
