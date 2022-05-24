using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GBS_MyPerformance.Data.Migrations
{
    public partial class add_models : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ApprenticeTrainerEmail",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ApprenticeTrainerId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApprenticeTrainerId1",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "CompanyId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ProfessionId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "SchoolClassId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProfessionAreas",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProfessionAreas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Professions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    DiplomaRoundingType = table.Column<int>(nullable: false),
                    ProfessionAreaId = table.Column<Guid>(nullable: false),
                    ActiveFrom = table.Column<DateTime>(nullable: false),
                    ActiveTo = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Professions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Professions_ProfessionAreas_ProfessionAreaId",
                        column: x => x.ProfessionAreaId,
                        principalTable: "ProfessionAreas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SchoolClasses",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Starting = table.Column<DateTime>(nullable: false),
                    Ending = table.Column<DateTime>(nullable: false),
                    TeacherId = table.Column<Guid>(nullable: true),
                    TeacherId1 = table.Column<string>(nullable: true),
                    ProfessionAreaId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SchoolClasses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SchoolClasses_ProfessionAreas_ProfessionAreaId",
                        column: x => x.ProfessionAreaId,
                        principalTable: "ProfessionAreas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SchoolClasses_AspNetUsers_TeacherId1",
                        column: x => x.TeacherId1,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Subjects",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Abbreviation = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Remarks = table.Column<string>(nullable: true),
                    MarkRoundingType = table.Column<int>(nullable: false),
                    ProfessionAreaId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subjects", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Subjects_ProfessionAreas_ProfessionAreaId",
                        column: x => x.ProfessionAreaId,
                        principalTable: "ProfessionAreas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RatingCategories",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    DiplomaFactor = table.Column<double>(nullable: false),
                    CategoryAverageRoundingType = table.Column<int>(nullable: false),
                    ProfessionId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RatingCategories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RatingCategories_Professions_ProfessionId",
                        column: x => x.ProfessionId,
                        principalTable: "Professions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Semesters",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<int>(nullable: false),
                    ProfessionId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Semesters", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Semesters_Professions_ProfessionId",
                        column: x => x.ProfessionId,
                        principalTable: "Professions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Ratings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    SubjectId = table.Column<Guid>(nullable: false),
                    RatingCategoryId = table.Column<Guid>(nullable: false),
                    Discriminator = table.Column<string>(nullable: false),
                    SemesterId = table.Column<Guid>(nullable: true),
                    RatingCategoryId1 = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ratings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Ratings_RatingCategories_RatingCategoryId",
                        column: x => x.RatingCategoryId,
                        principalTable: "RatingCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Ratings_Subjects_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subjects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Ratings_RatingCategories_RatingCategoryId1",
                        column: x => x.RatingCategoryId1,
                        principalTable: "RatingCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Ratings_Semesters_SemesterId",
                        column: x => x.SemesterId,
                        principalTable: "Semesters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Marks",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Value = table.Column<double>(nullable: false),
                    StudentId = table.Column<Guid>(nullable: false),
                    StudentId1 = table.Column<string>(nullable: true),
                    RatingId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Marks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Marks_Ratings_RatingId",
                        column: x => x.RatingId,
                        principalTable: "Ratings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Marks_AspNetUsers_StudentId1",
                        column: x => x.StudentId1,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_ApprenticeTrainerId1",
                table: "AspNetUsers",
                column: "ApprenticeTrainerId1");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_CompanyId",
                table: "AspNetUsers",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_ProfessionId",
                table: "AspNetUsers",
                column: "ProfessionId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_SchoolClassId",
                table: "AspNetUsers",
                column: "SchoolClassId");

            migrationBuilder.CreateIndex(
                name: "IX_Marks_RatingId",
                table: "Marks",
                column: "RatingId");

            migrationBuilder.CreateIndex(
                name: "IX_Marks_StudentId1",
                table: "Marks",
                column: "StudentId1");

            migrationBuilder.CreateIndex(
                name: "IX_Professions_ProfessionAreaId",
                table: "Professions",
                column: "ProfessionAreaId");

            migrationBuilder.CreateIndex(
                name: "IX_RatingCategories_ProfessionId",
                table: "RatingCategories",
                column: "ProfessionId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_RatingCategoryId",
                table: "Ratings",
                column: "RatingCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_SubjectId",
                table: "Ratings",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_RatingCategoryId1",
                table: "Ratings",
                column: "RatingCategoryId1");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_SemesterId",
                table: "Ratings",
                column: "SemesterId");

            migrationBuilder.CreateIndex(
                name: "IX_SchoolClasses_ProfessionAreaId",
                table: "SchoolClasses",
                column: "ProfessionAreaId");

            migrationBuilder.CreateIndex(
                name: "IX_SchoolClasses_TeacherId1",
                table: "SchoolClasses",
                column: "TeacherId1");

            migrationBuilder.CreateIndex(
                name: "IX_Semesters_ProfessionId",
                table: "Semesters",
                column: "ProfessionId");

            migrationBuilder.CreateIndex(
                name: "IX_Subjects_ProfessionAreaId",
                table: "Subjects",
                column: "ProfessionAreaId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_AspNetUsers_ApprenticeTrainerId1",
                table: "AspNetUsers",
                column: "ApprenticeTrainerId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Companies_CompanyId",
                table: "AspNetUsers",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Professions_ProfessionId",
                table: "AspNetUsers",
                column: "ProfessionId",
                principalTable: "Professions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_SchoolClasses_SchoolClassId",
                table: "AspNetUsers",
                column: "SchoolClassId",
                principalTable: "SchoolClasses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_AspNetUsers_ApprenticeTrainerId1",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Companies_CompanyId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Professions_ProfessionId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_SchoolClasses_SchoolClassId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Companies");

            migrationBuilder.DropTable(
                name: "Marks");

            migrationBuilder.DropTable(
                name: "SchoolClasses");

            migrationBuilder.DropTable(
                name: "Ratings");

            migrationBuilder.DropTable(
                name: "RatingCategories");

            migrationBuilder.DropTable(
                name: "Subjects");

            migrationBuilder.DropTable(
                name: "Semesters");

            migrationBuilder.DropTable(
                name: "Professions");

            migrationBuilder.DropTable(
                name: "ProfessionAreas");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_ApprenticeTrainerId1",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_CompanyId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_ProfessionId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_SchoolClassId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ApprenticeTrainerEmail",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ApprenticeTrainerId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ApprenticeTrainerId1",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "CompanyId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ProfessionId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SchoolClassId",
                table: "AspNetUsers");
        }
    }
}
