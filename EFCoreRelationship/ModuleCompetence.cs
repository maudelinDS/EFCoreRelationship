using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace EFCoreRelationship
{
    public class ModuleCompetence
    {
        [Key]
        public int ModuleCompetenceId { get; set; }

        [JsonIgnore]
        public Competence? Competences { get; set; }
        public int? CompetenceId { get; set; }

        [JsonIgnore]
        public Module? Modules { get; set; }

        public int? ModuleId { get; set; }
    }
}
