#!/bin/bash

############
# docker-entrypoint for app container
############

function check_appsettings {
    file="/app/appsettings.json"

    if [[ ! -f "$file" ]]; then
        echo "$file does not exist";
        exit 1;
    fi
}

check_appsettings

dotnet /app/GBS_MyPerformance.dll
