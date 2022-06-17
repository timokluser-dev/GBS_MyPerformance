using Microsoft.EntityFrameworkCore.Migrations;

namespace GBS_MyPerformance.Data.Migrations
{
    public partial class added_einschreibeschluessel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "einschreibeschluesselCode",
                table: "SchoolClasses",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "einschreibeschluesselCode",
                table: "SchoolClasses");
        }
    }
}
