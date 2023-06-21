using EFCoreRelationship.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EFCoreRelationship.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private readonly AppDbContext appDbContext;
        public RolesController(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Role>>> GetAllRoles()
        {
            var roles = await appDbContext.Roles
                    .ToListAsync();
            return roles;
        }

        [HttpGet("{roleId:int}")]
        public async Task<ActionResult<List<Role>>> GetRoleById(int roleId)
        {
            var roles = await appDbContext.Roles
                    .Where(x => x.RoleId == roleId)
                    .ToListAsync();
            return roles;
        }

        [HttpPost]
        public async Task<ActionResult<Role>> CreateRole(Role role)
        {
            appDbContext.Roles.Add(role);
            await appDbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetRoleById), new { roleId = role.RoleId }, role);
        }

        [HttpDelete("{roleId}")]
        public async Task<IActionResult> DeleteRole(int roleId)
        {
            var role = await appDbContext.Roles.FindAsync(roleId);

            if (role == null)
            {
                return NotFound();
            }

            appDbContext.Roles.Remove(role);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{roleId}")]
        public async Task<IActionResult> UpdateRoleById(int roleId, Role updatedRole)
        {
            var role = await appDbContext.Roles.FindAsync(roleId);

            if (role == null)
            {
                return NotFound();
            }
            role.RoleName = updatedRole.RoleName;


            appDbContext.Roles.Update(role);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
