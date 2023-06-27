using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using System.Linq;

namespace EFCoreRelationship
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int UserId { get; set; }
        public string? UserFirstName { get; set;}
        public string? UserLastName { get; set;}
        public string? UserEmail { get; set;}

        public double? UserPhone { get; set;}
        
        public string? UserPassword { get; set;}


        [ForeignKey("Job")]

        public int? JobId { get; set; }
        [JsonIgnore]
        public Job? Job { get; set; }

        public int? RoleId { get; set; }
        [JsonIgnore]
        public Role? Role { get; set; } 
        
        public int? ProjetId { get; set; }
        [JsonIgnore]
        public Projet? Projet { get; set; }

        [JsonIgnore]
        public List<UserProjet>? UserProjets { get; set; }
    }
}
