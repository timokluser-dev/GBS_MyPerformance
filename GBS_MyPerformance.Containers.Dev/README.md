# GBS_MyPerformance.Containers.Dev

**→ Start from the project root.**

```bash
docker-compose -f ./GBS_MyPerformance.Containers.Dev/docker-compose.yml up -d
```

## Containers

- `mssql`
  - SQL Server with Database
  - Access 
    - [Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver15)
    - Host: localhost:14330
    - User: sa
    - Password: DEV_1234
- `smtp`
  - SMTP Server for Mail testing
  - Access 
    - http://localhost:8080/#/
