using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace EFCoreRelationship
{
    public class Evaluation
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int EvaluationId { get; set; }
        public int? EvaluationNote { get; set; }
        public string? EvaluationComment{ get; set; }

        public User? Users { get; set; }


        public int? UserId { get; set; }


        public UserProjet? UserProjets { get; set; }

        public int? UserProjetId { get; set; }

    }
}
