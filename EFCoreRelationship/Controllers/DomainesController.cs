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
    public class DomainesController : ControllerBase
    {
        private readonly AppDbContext appDbContext;
        public DomainesController(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Domaine>>> GetAllDomaines()
        {
            var domaines = await appDbContext.Domaines
                .Include(s => s.Job)

                    .ToListAsync();
            return domaines;
        }

        [HttpGet("{domaineId:int}")]
        public async Task<ActionResult<List<Domaine>>> GetDomaineById(int domaineId)
        {
            var domaines = await appDbContext.Domaines
                    .Where(x => x.DomaineId == domaineId)
                    .ToListAsync();
            return domaines;
        }

        [HttpPost]
        public async Task<ActionResult<Domaine>> CreateDomaine(Domaine domaine)
        {
            appDbContext.Domaines.Add(domaine);
            await appDbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDomaineById), new { domaineId = domaine.DomaineId }, domaine);
        }

        [HttpDelete("{domaineId:int}")]
        public async Task<IActionResult> DeleteDomaine(int domaineId)
        {
            var domaine = await appDbContext.Domaines.FindAsync(domaineId);

            if (domaine == null)
            {
                return NotFound();
            }

            appDbContext.Domaines.Remove(domaine);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{domaineId:int}")]
        public async Task<IActionResult> UpdateDomaineById(int domaineId, Domaine updatedDomaine)
        {
            var domaine = await appDbContext.Domaines.FindAsync(domaineId);

            if (domaine == null)
            {
                return NotFound();
            }
            domaine.DomaineName = updatedDomaine.DomaineName;
            domaine.DomaineDescription = updatedDomaine.DomaineDescription;
                

        appDbContext.Domaines.Update(domaine);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }

    }

    

}
