using System.Diagnostics.Metrics;
using System.Net;
using EFCoreRelationship.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace EFCoreRelationship.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private readonly AppDbContext appDbContext;
        public JobsController(AppDbContext appDbContext) 
        {
        this.appDbContext = appDbContext;
        }

      /*  [HttpGet]
        public async Task<ActionResult<List<Student>>> GetStudentByJobId(int studentId)
        { 
        var users = await appDbContext.Students
                .Where(x => x.JobId == studentId)
                .Include(x => x.Projets)
                .Include(x => x.Role)
                .Include(x => x.Job)
                .ToListAsync();
            return users;
        }
      */
          [HttpGet]
        public async Task<ActionResult<List<Job>>> GetAllJobs()
        { 
        var jobs = await appDbContext.Jobs
                .ToListAsync();
            return jobs;
        }  
        

        [HttpGet("{jobId:int}")]
        public async Task<ActionResult<List<Job>>> GetJobById(int jobId)
        { 
        var jobs = await appDbContext.Jobs
                .Where(x => x.JobId == jobId)
                .ToListAsync();
            return jobs;
        }

        [HttpPost]
        public async Task<ActionResult<Job>> CreateJob(Job job)
        {
            appDbContext.Jobs.Add(job);
            await appDbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetJobById), new { jobId = job.JobId}, job);
        }




        [HttpDelete("{jobId}")]
        public async Task<IActionResult> DeleteJobById(int jobId)
        {
            var job = await appDbContext.Jobs.FindAsync(jobId);

            if (job == null)
            {
                return NotFound();
            }

            appDbContext.Jobs.Remove(job);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }


        [HttpPut("{jobId}")]
        public async Task<IActionResult> UpdateJobById(int jobId, Job updatedJob)
        {
            var job = await appDbContext.Jobs.FindAsync(jobId);

            if (job == null)
            {
                return NotFound();
            }
            job.JobName = updatedJob.JobName;
            job.JobDescription = updatedJob.JobDescription;
     

            appDbContext.Jobs.Update(job);
            await appDbContext.SaveChangesAsync();

            return NoContent();
        }



    };
}
