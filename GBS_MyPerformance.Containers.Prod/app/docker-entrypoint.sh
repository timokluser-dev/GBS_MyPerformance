#!/bin/bash

############
# docker-entrypoint for app container
############

function check_appsettings {
    file="/app/appsettings.json"

    if [[ ! -f "/app/appsettings.json" ]]; then
        echo "/app/appsettings.json does not exist";
        exit 1;
    fi
}

check_appsettings

dotnet /app/GBS_MyPerformance.dll
