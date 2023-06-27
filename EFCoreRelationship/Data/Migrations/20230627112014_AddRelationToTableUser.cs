using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EFCoreRelationship.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddRelationToTableUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Competences",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Competences_UserId",
                table: "Competences",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Competences_Users_UserId",
                table: "Competences",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Competences_Users_UserId",
                table: "Competences");

            migrationBuilder.DropIndex(
                name: "IX_Competences_UserId",
                table: "Competences");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Competences");
        }
    }
}
