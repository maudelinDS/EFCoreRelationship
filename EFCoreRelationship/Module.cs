using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace EFCoreRelationship
{
    public class Module
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int ModuleId { get; set; }
        public string? ModuleName { get; set; }
        public string? ModuleLieux{ get; set; }



    }
}
