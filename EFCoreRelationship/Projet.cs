using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace EFCoreRelationship
{
    public class Projet
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int ProjetId { get; set; }
            public string? ProjetName { get; set; }
            public string? ProjetDescription{ get; set; }

        public List<User>? Users { get; set; }



        //  [JsonIgnore]
        //public List<Competence>? Competences { get; set; }

    }
}
