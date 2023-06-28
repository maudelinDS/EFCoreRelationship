using EFCoreRelationship.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EFCoreRelationship.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModulesController : ControllerBase
    {
        private readonly AppDbContext appDbContext;
        public ModulesController(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Module>>> GetAllModules ()
        {
            var modules = await appDbContext.Modules
                    .ToListAsync();
            return modules;
        }


        [HttpGet("{moduleId:int}")]
        public async Task<ActionResult<List<Module>>> GetModuleById(int moduleId)
        {
            var modules = await appDbContext.Modules
                    .Where(x => x.ModuleId == moduleId)
                    .ToListAsync();
            return modules;
        }

        [HttpPost]
        public async Task<ActionResult<Module>> CreateRole(Module module)
        {
            appDbContext.Modules.Add(module);
            await appDbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetModuleById), new { moduleId = module.ModuleId }, module);
        }

        [HttpDelete("{moduleId:int}")]
        public async Task<IActionResult> DeleteModule(int moduleId)
        {
            var module = await appDbContext.Modules.FindAsync(moduleId);

            if (module == null)
            {
                return NotFound();
            }

            appDbContext.Modules.Remove(module);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{moduleId:int}")]
        public async Task<IActionResult> UpdateModuleById(int moduleId, Module updatedModule)
        {
            var module = await appDbContext.Modules.FindAsync(moduleId);

            if (module == null)
            {
                return NotFound();
            }
            module.ModuleName = updatedModule.ModuleName;
            module.ModuleLieux = updatedModule.ModuleLieux;


            appDbContext.Modules.Update(module);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
