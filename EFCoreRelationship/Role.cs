using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace EFCoreRelationship
{
    public class Role
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int RoleId { get; set; }
        public string? RoleName { get; set; }

        [JsonIgnore]
        public List<User>? Users { get; set; }

    }
}
