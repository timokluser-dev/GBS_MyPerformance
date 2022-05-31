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
    public class ProfessionController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProfessionController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Profession
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Profession>>> GetProfessions()
        {
            return await _context.Professions.ToListAsync();
        }

        // GET: api/Profession/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Profession>> GetProfession(Guid id)
        {
            var profession = await _context.Professions.FindAsync(id);

            if (profession == null)
            {
                return NotFound();
            }

            return profession;
        }

        // PUT: api/Profession/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> PutProfession(Guid id, Profession profession)
        {
            if (id != profession.Id)
            {
                return BadRequest();
            }

            _context.Entry(profession).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfessionExists(id))
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

        // POST: api/Profession
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<Profession>> PostProfession(Profession profession)
        {
            _context.Professions.Add(profession);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProfession", new { id = profession.Id }, profession);
        }

        // DELETE: api/Profession/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<Profession>> DeleteProfession(Guid id)
        {
            var profession = await _context.Professions.FindAsync(id);
            if (profession == null)
            {
                return NotFound();
            }

            _context.Professions.Remove(profession);
            await _context.SaveChangesAsync();

            return profession;
        }

        private bool ProfessionExists(Guid id)
        {
            return _context.Professions.Any(e => e.Id == id);
        }
    }
}
