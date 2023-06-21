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
            modelBuilder.Entity<User>(entity =>

            {
                entity.HasIndex(e => e.UserEmail).IsUnique();
            });
                
        }


    }
}
