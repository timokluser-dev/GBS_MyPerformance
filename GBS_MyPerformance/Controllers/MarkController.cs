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
    public class MarkController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MarkController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Mark/5
        [HttpGet("{id}")]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<ActionResult<Mark>> GetMark(Guid id)
        {
            var mark = await _context.Marks.FindAsync(id);

            if (mark == null)
            {
                return NotFound();
            }

            return mark;
        }

        // GET: api/Mark
        [HttpGet]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<IActionResult> Get()
        {
            var mark = await _context.Marks.ToListAsync();

            if (mark == null)
            {
                return NotFound();
            }

            return Ok(mark);
        }

        // GET: api/Mark/Student/5
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        [HttpGet("Student/{id}")]
        public async Task<IActionResult> GetByStudentID(Guid id)
        {
            var dataObject = await _context.Set<Mark>().Where(n => n.StudentId.Equals(id)).ToListAsync();

            if (dataObject == null || dataObject.Count() == 0)
            {
                return NotFound();
            }

            return Ok(dataObject);
        }

        // POST: api/Mark
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<IActionResult> Create(Mark mark)
        {
            if(mark == null)
            {
                return BadRequest();
            }

            _context.Marks.Add(mark);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMark", new { id = mark.Id }, mark);
        }


        // PUT: api/Mark/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<IActionResult> Update(Guid id, Mark mark)
        {
            if(mark == null)
            {
                return BadRequest();
            }
            
            if (id != mark.Id)
            {
                return BadRequest();
            }

            _context.Entry(mark).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MarkExists(id))
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

        

        // DELETE: api/Mark/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<ActionResult<Mark>> DeleteMark(Guid id)
        {
            var mark = await _context.Marks.FindAsync(id);
            if (mark == null)
            {
                return NotFound();
            }

            _context.Marks.Remove(mark);
            await _context.SaveChangesAsync();

            return mark;
        }

        private bool MarkExists(Guid id)
        {
            return _context.Marks.Any(e => e.Id == id);
        }
    }
}
