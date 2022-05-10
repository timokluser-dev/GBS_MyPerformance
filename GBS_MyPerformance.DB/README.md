# GBS_MyPerformance.DB

Contains the database for `GBS_MyPerformance`.

## Architecture

Only following DBMS are supported:

- [SQL Server 2019](https://docs.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver15)

## DB Setup

Execute the SQL scripts in the following order:

1. [Schema.sql](01_Schema.sql)
2. [Data.sql](02_Data.sql)

## Performance Test

To test the performance of the DB and the database system.

→ [PerformanceTest.sql](03_PerformanceTest.sql)

## DB Backup

A DB backup can be found here:

[GBS_MyPerformance.bak](backup/GBS_MyPerformance.bak)
