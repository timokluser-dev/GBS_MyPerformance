using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GBS_MyPerformance.Data;
using GBS_MyPerformance.Models;
using Microsoft.AspNetCore.Authorization;

namespace GBS_MyPerformance.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TeacherController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Student
        [HttpGet]
        //[Authorize(Roles = "Student")]
        public async Task<ActionResult<IEnumerable<Teacher>>> GetStudents()
        {

            return await _context.Teachers.FromSqlRaw("SELECT * FROM dbo.ASPNETUSERS where Username ='daniel@gbssg.ch'").ToListAsync();
            // return await _context.Students.Where(student => student.Email == HttpContext.User.Identity.Name).ToListAsync();
        }
    }
     
}
