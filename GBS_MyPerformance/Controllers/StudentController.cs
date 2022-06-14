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
    public class StudentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public StudentController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Student
        [HttpGet]
        //[Authorize(Roles = "Student")]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        {
            // replace studnet with applicationUser 
            return await _context.Students.FromSqlRaw("SELECT * FROM AspNetUsers us INNER JOIN AspNetUserRoles ur on ur.UserId = us.id INNER JOIN AspNetRoles ro on ro.Id = ur.RoleId where ro.Name = 'Student'").ToListAsync();
           // return await _context.Students.Where(student => student.Email == HttpContext.User.Identity.Name).ToListAsync();
        }

        //// GET: api/Student
        //[HttpGet]
        ////[Authorize(Roles = "Student")]
        //public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        //{
        //    // replace studnet with applicationUser 
        //    return await _context.Students.FromSqlRaw("SELECT * FROM dbo.ASPNETUSERS").ToListAsync();
        //    // return await _context.Students.Where(student => student.Email == HttpContext.User.Identity.Name).ToListAsync();
        //}

        // GET: api/Student/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(string id)
        {
            var student = await _context.Students.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            return student;
        }

        // PUT: api/Student/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> PutStudent(string id, Student student)
        {
            if (id != student.Id)
            {
                return BadRequest();
            }

            _context.Entry(student).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Student
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<Student>> PostStudent(Student student)
        {
            _context.Students.Add(student);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (StudentExists(student.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetStudent", new { id = student.Id }, student);
        }

        // DELETE: api/Student/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<Student>> DeleteStudent(string id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            _context.Students.Remove(student);
            await _context.SaveChangesAsync();

            return student;
        }

        private bool StudentExists(string id)
        {
            return _context.Students.Any(e => e.Id == id);
        }
    }
}
