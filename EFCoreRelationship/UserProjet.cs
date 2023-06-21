using System.ComponentModel.DataAnnotations;
using System.Diagnostics;

namespace EFCoreRelationship
{
    public class UserProjet
    {
        [Key]
        public int UserProjetId { get; set; }
        public DateTime? Start { get; set; }
        public DateTime? End { get; set; }

        public User? Users { get; set; }
        public int? UserId { get; set; }
        

        public Projet? Projets { get; set; }
        public int? ProjetId { get; set; }
    }
}
