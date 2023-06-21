using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace EFCoreRelationship
{
    public class Job
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int JobId { get; set; }
        public string? JobName { get; set; }
        public string? JobDescription{ get; set; }

        [JsonIgnore]

        public List<User>? Users { get; set;}

        [JsonIgnore]

        public List<Domaine>? Domaines { get; set; }

    }
}
