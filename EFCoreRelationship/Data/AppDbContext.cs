using Microsoft.EntityFrameworkCore;

namespace EFCoreRelationship.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        {
        
        }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Projet> Projets { get; set; }
        public DbSet<Domaine> Domaines { get; set; }
        public DbSet<Competence> Competences { get; set; }
        public DbSet<Module> Modules { get; set; }
        public DbSet<UserProjet> UserProjets { get; set; }
        public DbSet<CompetenceProjet> CompetenceProjets { get; set; }
        public DbSet<ModuleCompetence> ModuleCompetences { get; set; }
        public DbSet<Evaluation> Evaluations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.UserEmail).IsUnique();

                entity.HasMany(u => u.UserProjets)
                    .WithOne(up => up.User)
                    .HasForeignKey(up => up.UserId)
                    .OnDelete(DeleteBehavior.Cascade);
            });

            //modelBuilder.Entity<UserProjet>(entity =>
            //{
            //    entity.HasKey(up => new { up.UserId, up.ProjetId });

            //    entity.HasOne(up => up.User)
            //        .WithMany(u => u.UserProjets)
            //        .HasForeignKey(up => up.UserId);

            //    entity.HasOne(up => up.Projet)
            //        .WithMany(p => p.UserProjets)
            //        .HasForeignKey(up => up.ProjetId);
            //});

            //modelBuilder.Entity<CompetenceProjet>(entity =>
            //{
            //    entity.HasKey(cp => new { cp.CompetenceId, cp.ProjetId });

            //    entity.HasOne(cp => cp.Competence)
            //        .WithMany(c => c.CompetenceProjets)
            //        .HasForeignKey(cp => cp.CompetenceId);

            //    entity.HasOne(cp => cp.Projet)
            //        .WithMany(p => p.CompetenceProjets)
            //        .HasForeignKey(cp => cp.ProjetId);
            //});

            //modelBuilder.Entity<ModuleCompetence>(entity =>
            //{
            //    entity.HasKey(mc => new { mc.ModuleId, mc.CompetenceId });

            //    entity.HasOne(mc => mc.Module)
            //        .WithMany(m => m.ModuleCompetences)
            //        .HasForeignKey(mc => mc.ModuleId);

            //    entity.HasOne(mc => mc.Competence)
            //        .WithMany(c => c.ModuleCompetences)
            //        .HasForeignKey(mc => mc.CompetenceId);
            //});
        }



    }
}
