using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using EFCoreRelationship.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNet.Identity;

namespace EFCoreRelationship.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext appDbContext;
        public UsersController(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            var users = await appDbContext.Users
            

                    .ToListAsync();
            return users;
        }

        [HttpGet("{userId:int}")]
        public async Task<ActionResult<List<User>>> GetUserById(int userId)
        {
            var users = await appDbContext.Users
                    .Where(x => x.UserId == userId)
                    .ToListAsync();
            return users;
        }

        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            if (ModelState.IsValid)
            {
                appDbContext.Users.Add(user);
                await appDbContext.SaveChangesAsync();

                return CreatedAtAction(nameof(GetUserById), new { userId = user.UserId }, user);
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("{userId}")]
        public async Task<IActionResult> DeleteUser(int userId)
        {
            var user = await appDbContext.Users.FindAsync(userId);

            if (user == null)
            {
                return NotFound();
            }

            appDbContext.Users.Remove(user);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{userId}")]
        public async Task<IActionResult> UpdateUserById(int userId, User updatedUser)
        {
            var user = await appDbContext.Users.FindAsync(userId);

            if (user == null)
            {
                return NotFound();
            }
            user.UserFirstName = updatedUser.UserFirstName;
            user.UserLastName = updatedUser.UserLastName;
            user.UserEmail = updatedUser.UserEmail;
            user.UserPhone = updatedUser.UserPhone;
            user.UserPassword= updatedUser.UserPassword;
            user.RoleId= updatedUser.RoleId;
            user.JobId= updatedUser.JobId;      

        appDbContext.Users.Update(user);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }

    }

    

}
