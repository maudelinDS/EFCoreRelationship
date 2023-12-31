﻿// <auto-generated />
using System;
using EFCoreRelationship.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace EFCoreRelationship.Data.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("EFCoreRelationship.Competence", b =>
                {
                    b.Property<int>("CompetenceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CompetenceId"));

                    b.Property<string>("CompetenceDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompetenceName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("DomaineId")
                        .HasColumnType("int");

                    b.HasKey("CompetenceId");

                    b.HasIndex("DomaineId");

                    b.ToTable("Competences");
                });

            modelBuilder.Entity("EFCoreRelationship.CompetenceProjet", b =>
                {
                    b.Property<int>("CompetenceProjetId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CompetenceProjetId"));

                    b.Property<int?>("CompetenceId")
                        .HasColumnType("int");

                    b.Property<int?>("ProjetId")
                        .HasColumnType("int");

                    b.HasKey("CompetenceProjetId");

                    b.HasIndex("CompetenceId");

                    b.HasIndex("ProjetId");

                    b.ToTable("CompetenceProjets");
                });

            modelBuilder.Entity("EFCoreRelationship.Domaine", b =>
                {
                    b.Property<int>("DomaineId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DomaineId"));

                    b.Property<string>("DomaineDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DomaineName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("JobId")
                        .HasColumnType("int");

                    b.HasKey("DomaineId");

                    b.HasIndex("JobId");

                    b.ToTable("Domaines");
                });

            modelBuilder.Entity("EFCoreRelationship.Evaluation", b =>
                {
                    b.Property<int>("EvaluationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("EvaluationId"));

                    b.Property<string>("EvaluationComment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("EvaluationNote")
                        .HasColumnType("int");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.Property<int?>("UserProjetId")
                        .HasColumnType("int");

                    b.HasKey("EvaluationId");

                    b.HasIndex("UserId");

                    b.HasIndex("UserProjetId");

                    b.ToTable("Evaluations");
                });

            modelBuilder.Entity("EFCoreRelationship.Job", b =>
                {
                    b.Property<int>("JobId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("JobId"));

                    b.Property<string>("JobDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("JobName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("JobId");

                    b.ToTable("Jobs");
                });

            modelBuilder.Entity("EFCoreRelationship.Module", b =>
                {
                    b.Property<int>("ModuleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ModuleId"));

                    b.Property<string>("ModuleLieux")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ModuleName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ModuleId");

                    b.ToTable("Modules");
                });

            modelBuilder.Entity("EFCoreRelationship.ModuleCompetence", b =>
                {
                    b.Property<int>("ModuleCompetenceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ModuleCompetenceId"));

                    b.Property<int?>("CompetenceId")
                        .HasColumnType("int");

                    b.Property<int?>("ModuleId")
                        .HasColumnType("int");

                    b.HasKey("ModuleCompetenceId");

                    b.HasIndex("CompetenceId");

                    b.HasIndex("ModuleId");

                    b.ToTable("ModuleCompetences");
                });

            modelBuilder.Entity("EFCoreRelationship.Projet", b =>
                {
                    b.Property<int>("ProjetId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProjetId"));

                    b.Property<string>("ProjetDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProjetName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ProjetId");

                    b.ToTable("Projets");
                });

            modelBuilder.Entity("EFCoreRelationship.Role", b =>
                {
                    b.Property<int>("RoleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RoleId"));

                    b.Property<string>("RoleName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RoleId");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("EFCoreRelationship.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<int?>("JobId")
                        .HasColumnType("int");

                    b.Property<int?>("ProjetId")
                        .HasColumnType("int");

                    b.Property<int?>("RoleId")
                        .HasColumnType("int");

                    b.Property<string>("UserEmail")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("UserFirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserLastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserPassword")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double?>("UserPhone")
                        .HasColumnType("float");

                    b.HasKey("UserId");

                    b.HasIndex("JobId");

                    b.HasIndex("ProjetId");

                    b.HasIndex("RoleId");

                    b.HasIndex("UserEmail")
                        .IsUnique()
                        .HasFilter("[UserEmail] IS NOT NULL");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("EFCoreRelationship.UserProjet", b =>
                {
                    b.Property<int>("UserProjetId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserProjetId"));

                    b.Property<int?>("CompetenceId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("End")
                        .HasColumnType("datetime2");

                    b.Property<int?>("ProjetId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("Start")
                        .HasColumnType("datetime2");

                    b.Property<int?>("UserId")
                        .IsRequired()
                        .HasColumnType("int");

                    b.Property<int?>("UsersUserId")
                        .HasColumnType("int");

                    b.HasKey("UserProjetId");

                    b.HasIndex("CompetenceId");

                    b.HasIndex("ProjetId");

                    b.HasIndex("UserId");

                    b.HasIndex("UsersUserId");

                    b.ToTable("UserProjets");
                });

            modelBuilder.Entity("EFCoreRelationship.Competence", b =>
                {
                    b.HasOne("EFCoreRelationship.Domaine", "Domaines")
                        .WithMany()
                        .HasForeignKey("DomaineId");

                    b.Navigation("Domaines");
                });

            modelBuilder.Entity("EFCoreRelationship.CompetenceProjet", b =>
                {
                    b.HasOne("EFCoreRelationship.Competence", "Competences")
                        .WithMany()
                        .HasForeignKey("CompetenceId");

                    b.HasOne("EFCoreRelationship.Projet", "Projets")
                        .WithMany()
                        .HasForeignKey("ProjetId");

                    b.Navigation("Competences");

                    b.Navigation("Projets");
                });

            modelBuilder.Entity("EFCoreRelationship.Domaine", b =>
                {
                    b.HasOne("EFCoreRelationship.Job", "Job")
                        .WithMany("Domaines")
                        .HasForeignKey("JobId");

                    b.Navigation("Job");
                });

            modelBuilder.Entity("EFCoreRelationship.Evaluation", b =>
                {
                    b.HasOne("EFCoreRelationship.User", "Users")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.HasOne("EFCoreRelationship.UserProjet", "UserProjets")
                        .WithMany()
                        .HasForeignKey("UserProjetId");

                    b.Navigation("UserProjets");

                    b.Navigation("Users");
                });

            modelBuilder.Entity("EFCoreRelationship.ModuleCompetence", b =>
                {
                    b.HasOne("EFCoreRelationship.Competence", "Competences")
                        .WithMany()
                        .HasForeignKey("CompetenceId");

                    b.HasOne("EFCoreRelationship.Module", "Modules")
                        .WithMany()
                        .HasForeignKey("ModuleId");

                    b.Navigation("Competences");

                    b.Navigation("Modules");
                });

            modelBuilder.Entity("EFCoreRelationship.User", b =>
                {
                    b.HasOne("EFCoreRelationship.Job", "Job")
                        .WithMany("Users")
                        .HasForeignKey("JobId");

                    b.HasOne("EFCoreRelationship.Projet", "Projet")
                        .WithMany("Users")
                        .HasForeignKey("ProjetId");

                    b.HasOne("EFCoreRelationship.Role", "Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId");

                    b.Navigation("Job");

                    b.Navigation("Projet");

                    b.Navigation("Role");
                });

            modelBuilder.Entity("EFCoreRelationship.UserProjet", b =>
                {
                    b.HasOne("EFCoreRelationship.Competence", "Competence")
                        .WithMany()
                        .HasForeignKey("CompetenceId");

                    b.HasOne("EFCoreRelationship.Projet", "Projet")
                        .WithMany()
                        .HasForeignKey("ProjetId");

                    b.HasOne("EFCoreRelationship.User", "User")
                        .WithMany("UserProjets")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EFCoreRelationship.User", "Users")
                        .WithMany()
                        .HasForeignKey("UsersUserId");

                    b.Navigation("Competence");

                    b.Navigation("Projet");

                    b.Navigation("User");

                    b.Navigation("Users");
                });

            modelBuilder.Entity("EFCoreRelationship.Job", b =>
                {
                    b.Navigation("Domaines");

                    b.Navigation("Users");
                });

            modelBuilder.Entity("EFCoreRelationship.Projet", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("EFCoreRelationship.Role", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("EFCoreRelationship.User", b =>
                {
                    b.Navigation("UserProjets");
                });
#pragma warning restore 612, 618
        }
    }
}
