using EFCoreRelationship.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EFCoreRelationship.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjetsController : ControllerBase
    {
        private readonly AppDbContext appDbContext;
        public ProjetsController(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Projet>>> GetAllProjets()
        {
            var projets = await appDbContext.Projets
                    .ToListAsync();
            return projets;
        }

        [HttpGet("{projetId:int}")]
        public async Task<ActionResult<List<Projet>>> GetProjetById(int projetId)
        {
            var projets = await appDbContext.Projets
                    .Where(x => x.ProjetId == projetId)
                    .ToListAsync();
            return projets;
        }

        [HttpPost]
        public async Task<ActionResult<Projet>> CreateJob(Projet projet)
        {
            appDbContext.Projets.Add(projet);
            await appDbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetProjetById), new { projetId = projet.ProjetId }, projet);
        }

        [HttpDelete("{projetId}")]
        public async Task<IActionResult> DeleteJob(int projetId)
        {
            var projet = await appDbContext.Projets.FindAsync(projetId);

            if (projet == null)
            {
                return NotFound();
            }

            appDbContext.Projets.Remove(projet);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{projetId}")]
        public async Task<IActionResult> UpdateRojetById(int projetId, Projet updatedProjet)
        {
            var projet = await appDbContext.Projets.FindAsync(projetId);

            if (projet == null)
            {
                return NotFound();
            }
            projet.ProjetName = updatedProjet.ProjetName;
            projet.ProjetDescription = updatedProjet.ProjetDescription;


            appDbContext.Projets.Update(projet);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
