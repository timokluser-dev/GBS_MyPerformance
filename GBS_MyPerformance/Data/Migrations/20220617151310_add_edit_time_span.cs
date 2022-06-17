using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GBS_MyPerformance.Data.Migrations
{
    public partial class add_edit_time_span : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO dbo.EditTimeSpans([Id],[From],[To]) VALUES ('00000000-0000-0000-0000-000000000001','2022-01-01 00:00:00','2022-12-31 23:59:59');");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM dbo.EditTimeSpans WHERE [Id] = '00000000-0000-0000-0000-000000000001';)");
        }
    }
}
