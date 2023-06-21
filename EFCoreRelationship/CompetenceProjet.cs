
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace EFCoreRelationship
{
    public class CompetenceProjet
    {
        [Key]
        public int CompetenceProjetId { get; set; }

        [JsonIgnore]
        public Competence? Competences { get; set; }
        public int? CompetenceId { get; set; }

        [JsonIgnore]
        public Projet? Projets { get; set; }
        public int? ProjetId { get; set; }

    }
}
