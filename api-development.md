# API Development

The GBS_MyPerformance Application uses OAuth2 as authentication and authorization. To test the API using Postman, some config is needed.

## Postman

→ [Download](https://www.postman.com/downloads/)

For postman, just import the prepared collection.

- [GBS_MyPerformance.postman_collection.json](GBS_MyPerformance.postman_collection.json)

### Further Configuration

In order to work with the self signed cert of the BE, you need to **disable the cert verification** on requests.

→ Settings > General > "SSL certificate verification" to off

<!-- see: https://stackoverflow.com/a/68488830 -->

## Users with Roles

| Email                      | Password   | Roles                           |
| ------------------------- | ---------- | ------------------------------- |
| student@gbssg.ch          | `GbS2021+` | **STUDENT**                     |
| trainer@gbssg.ch          | `GbS2021+` | **TRAINER**                     |
| teacher@gbssg.ch          | `GbS2021+` | **TEACHER**                     |
| managing-teacher@gbssg.ch | `GbS2021+` | **TEACHER**; **ADMIN** |
| administrator@gbssg.ch    | `GbS2021+` | **ADMIN**               |

→ [AppRoles.cs](GBS_MyPerformance/Identity/AppRoles.cs)
