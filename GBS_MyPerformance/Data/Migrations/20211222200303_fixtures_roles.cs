using Microsoft.EntityFrameworkCore.Migrations;

namespace GBS_MyPerformance.Data.Migrations
{
    public partial class fixtures_roles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO dbo.AspNetRoles(Id, Name, NormalizedName) Values(NEWID(), 'Student', 'STUDENT')");
            migrationBuilder.Sql("INSERT INTO dbo.AspNetRoles(Id, Name, NormalizedName) Values(NEWID(), 'Trainer', 'TRAINER')");
            migrationBuilder.Sql("INSERT INTO dbo.AspNetRoles(Id, Name, NormalizedName) Values(NEWID(), 'Teacher', 'TEACHER')");
            migrationBuilder.Sql("INSERT INTO dbo.AspNetRoles(Id, Name, NormalizedName) Values(NEWID(), 'Administrator', 'ADMINISTRATOR')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
