﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace GBS_MyPerformance.Data.Migrations
{
    public partial class ApplicationUser_PasswordInitialSetPending : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "PasswordInitialSetPending",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PasswordInitialSetPending",
                table: "AspNetUsers");
        }
    }
}
