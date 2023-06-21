using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace EFCoreRelationship
{
    public class Competence
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CompetenceId { get; set; }
        public string? CompetenceName { get; set; }
        public string? CompetenceDescription { get; set; }

        [JsonIgnore]
        public Domaine? Domaines { get; set; }
        public int? DomaineId { get; set; }


    }
}
