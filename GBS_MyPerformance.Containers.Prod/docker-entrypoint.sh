#!/bin/bash

############
# docker-entrypoint for migrations container
############

function apply_db_migrations {
    dotnet ef database update
}

# Wait for the database to be available
until nc -vzw 2 "$DB_HOST" "$DB_PORT"
do 
    echo "db is not available. waiting..."
    sleep 2
done

apply_db_migrations

exit 0
