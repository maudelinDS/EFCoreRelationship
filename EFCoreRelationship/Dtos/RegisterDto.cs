using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace EFCoreRelationship.Dtos
{
    public class RegisterDto
    {
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        public string UserEmail { get; set; }   
        public string UserPassword { get; set; }


        public double? UserPhone { get; set; }




        [ForeignKey("Job")]

        public int? JobId { get; set; }
        [JsonIgnore]
        public Job? Job { get; set; }

        public int? RoleId { get; set; }
        
        [JsonIgnore]
        public Role? Role { get; set; }
    }
}


