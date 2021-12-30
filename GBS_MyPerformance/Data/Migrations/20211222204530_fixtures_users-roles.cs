using Microsoft.EntityFrameworkCore.Migrations;

namespace GBS_MyPerformance.Data.Migrations
{
    public partial class fixtures_usersroles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // teacher with admin rights
            migrationBuilder.Sql("INSERT INTO dbo.AspNetUsers(Id, UserName, NormalizedUserName, Email, NormalizedEmail, EmailConfirmed, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled, AccessFailedCount, SecurityStamp, PasswordHash) Values(NEWID(), 'managing-teacher@gbssg.ch', 'MANAGING-TEACHER@GBSSG.CH', 'managing-teacher@gbssg.ch', 'MANAGING-TEACHER@GBSSG.CH', 1, 0, 0, 1, 0, 'Q4EVFMI7F3GC7X5ICM2AYVPGBO4RKGBW', 'AQAAAAEAACcQAAAAEKCe396gjH6w8omgfSy+H0R4W8yO73WHdLDrB9Lqx88db3VzLcJ+3IbMxUKtsXoNbA==')");

            migrationBuilder.Sql("INSERT INTO dbo.AspNetUserRoles(UserId, RoleId) SELECT (SELECT Id FROM dbo.AspNetUsers WHERE NormalizedEmail = 'STUDENT@GBSSG.CH'), (SELECT Id FROM dbo.AspNetRoles WHERE NormalizedName = 'STUDENT')");
            migrationBuilder.Sql("INSERT INTO dbo.AspNetUserRoles(UserId, RoleId) SELECT (SELECT Id FROM dbo.AspNetUsers WHERE NormalizedEmail = 'TRAINER@GBSSG.CH'), (SELECT Id FROM dbo.AspNetRoles WHERE NormalizedName = 'TRAINER')");
            migrationBuilder.Sql("INSERT INTO dbo.AspNetUserRoles(UserId, RoleId) SELECT (SELECT Id FROM dbo.AspNetUsers WHERE NormalizedEmail = 'TEACHER@GBSSG.CH'), (SELECT Id FROM dbo.AspNetRoles WHERE NormalizedName = 'TEACHER')");
            migrationBuilder.Sql("INSERT INTO dbo.AspNetUserRoles(UserId, RoleId) SELECT (SELECT Id FROM dbo.AspNetUsers WHERE NormalizedEmail = 'ADMINISTRATOR@GBSSG.CH'), (SELECT Id FROM dbo.AspNetRoles WHERE NormalizedName = 'ADMINISTRATOR')");

            migrationBuilder.Sql("INSERT INTO dbo.AspNetUserRoles(UserId, RoleId) SELECT (SELECT Id FROM dbo.AspNetUsers WHERE NormalizedEmail = 'MANAGING-TEACHER@GBSSG.CH'), (SELECT Id FROM dbo.AspNetRoles WHERE NormalizedName = 'TEACHER')");
            migrationBuilder.Sql("INSERT INTO dbo.AspNetUserRoles(UserId, RoleId) SELECT (SELECT Id FROM dbo.AspNetUsers WHERE NormalizedEmail = 'MANAGING-TEACHER@GBSSG.CH'), (SELECT Id FROM dbo.AspNetRoles WHERE NormalizedName = 'ADMINISTRATOR')");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
