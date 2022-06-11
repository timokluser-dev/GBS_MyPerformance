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
        public async Task<IActionResult> Get()
        {
            try
            {
                var dataObject = await _context.Set<SchoolClass>().Include("Teacher").Include("ProfessionArea").ToListAsync();
                if (dataObject == null || dataObject.Count == 0)
                {
                    return NotFound();
                }

                return Ok(dataObject);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // GET: api/SchoolClass/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByID(Guid id)
        {
            var dataObject = await _context.Set<SchoolClass>().Where(n => n.Id.Equals(id)).ToListAsync();

            if (dataObject == null)
            {
                return NotFound();
            }
            return Ok(dataObject);
        }

        // TODO // NOT COMPLETED
        // GET: api/SchoolClass/5/Students
        [HttpGet("{id}/Students")]
        public async Task<IActionResult> GetClassByIDWithStudents(Guid id)
        {
            var dataObject = await _context.Set<SchoolClass>().Where(n => n.Id.Equals(id)).Include("Students").ToListAsync();

            if (dataObject == null)
            {
                return NotFound();
            }
            return Ok(dataObject);
        }

        // GET: api/SchoolClass/5/Student/5
        // TODO

        // POST: api/SchoolClass
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<SchoolClass>> Create([FromBody]SchoolClass schoolClass)
        {
            if(schoolClass == null)
            {
                return BadRequest();
            }

            _context.SchoolClasses.Add(schoolClass);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSchoolClass", new { id = schoolClass.Id }, schoolClass);
        }

        // PUT: api/SchoolClass/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Update(Guid id, SchoolClass schoolClass)
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

        

        // DELETE: api/SchoolClass/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<SchoolClass>> Delete(Guid id)
        {
            var schoolClass = await _context.SchoolClasses.FindAsync(id);
            if (schoolClass == null)
            {
                return NotFound();
            }

            _context.SchoolClasses.Remove(schoolClass);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool SchoolClassExists(Guid id)
        {
            return _context.SchoolClasses.Any(e => e.Id == id);
        }
    }
}
