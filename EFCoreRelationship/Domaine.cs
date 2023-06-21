using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace EFCoreRelationship
{
    public class Domaine
    {


        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int DomaineId { get; set; }
        public string? DomaineName { get; set; }
        public string? DomaineDescription{ get; set; }
        
        [JsonIgnore]
        public Job? Job { get; set; } 
        public int? JobId { get; set;}
    }
}
