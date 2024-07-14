#!/bin/bash
set -e

# Function to create a database
create_database() {
    local dbname=$1
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
        CREATE DATABASE "$dbname";
EOSQL
}

# Create databases
create_database "laptops"
