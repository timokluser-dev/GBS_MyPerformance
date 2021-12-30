using Microsoft.EntityFrameworkCore.Migrations;

namespace GBS_MyPerformance.Data.Migrations
{
    public partial class fixtures_users : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // User Passwords: GbS2021+
            migrationBuilder.Sql("INSERT INTO dbo.AspNetUsers(Id, UserName, NormalizedUserName, Email, NormalizedEmail, EmailConfirmed, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled, AccessFailedCount, SecurityStamp, PasswordHash) Values(NEWID(), 'student@gbssg.ch', 'STUDENT@GBSSG.CH', 'student@gbssg.ch', 'STUDENT@GBSSG.CH', 1, 0, 0, 1, 0, 'Q4EVFMI7F3GC7X5ICM2AYVPGBO4RKGBW', 'AQAAAAEAACcQAAAAEKCe396gjH6w8omgfSy+H0R4W8yO73WHdLDrB9Lqx88db3VzLcJ+3IbMxUKtsXoNbA==')");
            migrationBuilder.Sql("INSERT INTO dbo.AspNetUsers(Id, UserName, NormalizedUserName, Email, NormalizedEmail, EmailConfirmed, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled, AccessFailedCount, SecurityStamp, PasswordHash) Values(NEWID(), 'trainer@gbssg.ch', 'TRAINER@GBSSG.CH', 'trainer@gbssg.ch', 'TRAINER@GBSSG.CH', 1, 0, 0, 1, 0, 'Q4EVFMI7F3GC7X5ICM2AYVPGBO4RKGBW', 'AQAAAAEAACcQAAAAEKCe396gjH6w8omgfSy+H0R4W8yO73WHdLDrB9Lqx88db3VzLcJ+3IbMxUKtsXoNbA==')");
            migrationBuilder.Sql("INSERT INTO dbo.AspNetUsers(Id, UserName, NormalizedUserName, Email, NormalizedEmail, EmailConfirmed, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled, AccessFailedCount, SecurityStamp, PasswordHash) Values(NEWID(), 'teacher@gbssg.ch', 'TEACHER@GBSSG.CH', 'teacher@gbssg.ch', 'TEACHER@GBSSG.CH', 1, 0, 0, 1, 0, 'Q4EVFMI7F3GC7X5ICM2AYVPGBO4RKGBW', 'AQAAAAEAACcQAAAAEKCe396gjH6w8omgfSy+H0R4W8yO73WHdLDrB9Lqx88db3VzLcJ+3IbMxUKtsXoNbA==')");
            migrationBuilder.Sql("INSERT INTO dbo.AspNetUsers(Id, UserName, NormalizedUserName, Email, NormalizedEmail, EmailConfirmed, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled, AccessFailedCount, SecurityStamp, PasswordHash) Values(NEWID(), 'administrator@gbssg.ch', 'ADMINISTRATOR@GBSSG.CH', 'administrator@gbssg.ch', 'ADMINISTRATOR@GBSSG.CH', 1, 0, 0, 1, 0, 'Q4EVFMI7F3GC7X5ICM2AYVPGBO4RKGBW', 'AQAAAAEAACcQAAAAEKCe396gjH6w8omgfSy+H0R4W8yO73WHdLDrB9Lqx88db3VzLcJ+3IbMxUKtsXoNbA==')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
