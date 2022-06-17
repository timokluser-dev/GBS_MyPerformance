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
    public class SemesterRatingController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SemesterRatingController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/SemesterRating
        [HttpGet]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<ActionResult<IEnumerable<SemesterRating>>> GetSemesterRatings()
        {
            return await _context.SemesterRatings.ToListAsync();
        }

        // GET: api/SemesterRating/5
        [HttpGet("{id}")]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<ActionResult<SemesterRating>> GetSemesterRating(Guid id)
        {
            var semesterRating = await _context.SemesterRatings.FindAsync(id);

            if (semesterRating == null)
            {
                return NotFound();
            }

            return semesterRating;
        }

        // PUT: api/SemesterRating/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<IActionResult> PutSemesterRating(Guid id, SemesterRating semesterRating)
        {
            if (id != semesterRating.Id)
            {
                return BadRequest();
            }

            _context.Entry(semesterRating).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SemesterRatingExists(id))
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

        // POST: api/SemesterRating
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<ActionResult<SemesterRating>> PostSemesterRating(SemesterRating semesterRating)
        {
            _context.SemesterRatings.Add(semesterRating);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSemesterRating", new { id = semesterRating.Id }, semesterRating);
        }

        // DELETE: api/SemesterRating/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<ActionResult<SemesterRating>> DeleteSemesterRating(Guid id)
        {
            var semesterRating = await _context.SemesterRatings.FindAsync(id);
            if (semesterRating == null)
            {
                return NotFound();
            }

            _context.SemesterRatings.Remove(semesterRating);
            await _context.SaveChangesAsync();

            return semesterRating;
        }

        private bool SemesterRatingExists(Guid id)
        {
            return _context.SemesterRatings.Any(e => e.Id == id);
        }
    }
}
