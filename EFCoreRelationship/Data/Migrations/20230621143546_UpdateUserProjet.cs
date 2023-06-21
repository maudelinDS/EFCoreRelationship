using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EFCoreRelationship.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUserProjet : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CompetenceId",
                table: "UserProjets",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserProjets_CompetenceId",
                table: "UserProjets",
                column: "CompetenceId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserProjets_Competences_CompetenceId",
                table: "UserProjets",
                column: "CompetenceId",
                principalTable: "Competences",
                principalColumn: "CompetenceId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserProjets_Competences_CompetenceId",
                table: "UserProjets");

            migrationBuilder.DropIndex(
                name: "IX_UserProjets_CompetenceId",
                table: "UserProjets");

            migrationBuilder.DropColumn(
                name: "CompetenceId",
                table: "UserProjets");
        }
    }
}
