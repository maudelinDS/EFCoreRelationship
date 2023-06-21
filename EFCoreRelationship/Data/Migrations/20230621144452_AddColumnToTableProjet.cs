using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EFCoreRelationship.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddColumnToTableProjet : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProjetId",
                table: "Users",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_ProjetId",
                table: "Users",
                column: "ProjetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Projets_ProjetId",
                table: "Users",
                column: "ProjetId",
                principalTable: "Projets",
                principalColumn: "ProjetId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Projets_ProjetId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_ProjetId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "ProjetId",
                table: "Users");
        }
    }
}
