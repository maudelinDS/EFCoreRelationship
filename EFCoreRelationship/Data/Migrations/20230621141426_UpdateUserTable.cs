using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EFCoreRelationship.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUserTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserProjets_Users_UserId",
                table: "UserProjets");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "UserProjets",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UsersUserId",
                table: "UserProjets",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserProjets_UsersUserId",
                table: "UserProjets",
                column: "UsersUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserProjets_Users_UserId",
                table: "UserProjets",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserProjets_Users_UsersUserId",
                table: "UserProjets",
                column: "UsersUserId",
                principalTable: "Users",
                principalColumn: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserProjets_Users_UserId",
                table: "UserProjets");

            migrationBuilder.DropForeignKey(
                name: "FK_UserProjets_Users_UsersUserId",
                table: "UserProjets");

            migrationBuilder.DropIndex(
                name: "IX_UserProjets_UsersUserId",
                table: "UserProjets");

            migrationBuilder.DropColumn(
                name: "UsersUserId",
                table: "UserProjets");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "UserProjets",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_UserProjets_Users_UserId",
                table: "UserProjets",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId");
        }
    }
}
