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
    public class SchoolClassController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SchoolClassController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/SchoolClass
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SchoolClass>>> GetSchoolClasses()
        {
            return await _context.SchoolClasses.ToListAsync();
        }

        // GET: api/SchoolClass/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SchoolClass>> GetSchoolClass(Guid id)
        {
            var schoolClass = await _context.SchoolClasses.FindAsync(id);

            if (schoolClass == null)
            {
                return NotFound();
            }

            return schoolClass;
        }
        
        // GET: api/SchoolClass/5/Students
        // TODO
        
        // GET: api/SchoolClass/5/Student/5
        // TODO

        // PUT: api/SchoolClass/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> PutSchoolClass(Guid id, SchoolClass schoolClass)
        {
            if (id != schoolClass.Id)
            {
                return BadRequest();
            }

            _context.Entry(schoolClass).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SchoolClassExists(id))
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

        // POST: api/SchoolClass
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<SchoolClass>> PostSchoolClass(SchoolClass schoolClass)
        {
            _context.SchoolClasses.Add(schoolClass);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSchoolClass", new { id = schoolClass.Id }, schoolClass);
        }

        // DELETE: api/SchoolClass/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<SchoolClass>> DeleteSchoolClass(Guid id)
        {
            var schoolClass = await _context.SchoolClasses.FindAsync(id);
            if (schoolClass == null)
            {
                return NotFound();
            }

            _context.SchoolClasses.Remove(schoolClass);
            await _context.SaveChangesAsync();

            return schoolClass;
        }

        private bool SchoolClassExists(Guid id)
        {
            return _context.SchoolClasses.Any(e => e.Id == id);
        }
    }
}
