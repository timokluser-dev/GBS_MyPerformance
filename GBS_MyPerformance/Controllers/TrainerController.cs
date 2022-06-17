using GBS_MyPerformance.Data;
using GBS_MyPerformance.Identity.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GBS_MyPerformance.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TrainerController : Controller
    {
        private readonly ApplicationDbContext _context;

        private readonly UserManager<ApplicationUser> userManager;

        public TrainerController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            this.userManager = userManager;
            _context = context;
        }

        // GET: api/Student
        [HttpGet]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<List<ApplicationUser>> Get()
        {
            return (List<ApplicationUser>)await userManager.GetUsersInRoleAsync("Trainer");
        }
    }
}
