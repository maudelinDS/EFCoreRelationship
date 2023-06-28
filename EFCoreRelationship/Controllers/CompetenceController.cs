using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using EFCoreRelationship.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EFCoreRelationship.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompetenceController : ControllerBase
    {
        private readonly AppDbContext appDbContext;
        public CompetenceController(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Competence>>> GetAllCompetences()
        {
            var competences = await appDbContext.Competences
                    .ToListAsync();
            return competences;
        }

        [HttpGet("{competenceId:int}")]
        public async Task<ActionResult<List<Competence>>> GetCompetenceById(int competenceId)
        {
            var competences = await appDbContext.Competences
                    .Where(x => x.CompetenceId == competenceId)
                    .ToListAsync();
            return competences;
        }

        [HttpPost]
        public async Task<ActionResult<Competence>> CreateCompetence(Competence competence)
        {
            appDbContext.Competences.Add(competence);
            await appDbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetCompetenceById), new { competenceId = competence.CompetenceId }, competence);
        }

        [HttpDelete("{competenceId}:int")]
        public async Task<IActionResult> DeleteCompetence(int competenceId)
        {
            var competences = await appDbContext.Competences.FindAsync(competenceId);

            if (competences == null)
            {
                return NotFound();
            }
            
            appDbContext.Competences.Remove(competences);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{competenceId}:int")]
        public async Task<IActionResult> UpdateCompetenceById(int competenceId, Competence updatedcompetence)
        {
            var competence = await appDbContext.Competences.FindAsync(competenceId);

            if (competence == null)
            {
                return NotFound();
            }
            competence.CompetenceName = updatedcompetence.CompetenceName;
            competence.CompetenceDescription = updatedcompetence.CompetenceDescription;
            competence.DomaineId = updatedcompetence.DomaineId;


            appDbContext.Competences.Update(competence);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }

    }



}



