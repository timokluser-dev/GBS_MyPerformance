using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GBS_MyPerformance.Data;
using GBS_MyPerformance.Identity.Models;
using GBS_MyPerformance.Models;
using Microsoft.AspNetCore.Authorization;

namespace GBS_MyPerformance.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProfessionAreaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProfessionAreaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ProfessionArea
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProfessionArea>>> GetProfessionAreas()
        {
            return await _context.ProfessionAreas.ToListAsync();
        }

        // GET: api/ProfessionArea/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProfessionArea>> GetProfessionArea(Guid id)
        {
            var professionArea = await _context.ProfessionAreas.FindAsync(id);

            if (professionArea == null)
            {
                return NotFound();
            }

            return professionArea;
        }

        // PUT: api/ProfessionArea/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> PutProfessionArea(Guid id, ProfessionArea professionArea)
        {
            if (id != professionArea.Id)
            {
                return BadRequest();
            }

            _context.Entry(professionArea).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfessionAreaExists(id))
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

        // POST: api/ProfessionArea
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<ProfessionArea>> PostProfessionArea(ProfessionArea professionArea)
        {
            _context.ProfessionAreas.Add(professionArea);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProfessionArea", new { id = professionArea.Id }, professionArea);
        }

        // DELETE: api/ProfessionArea/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<ProfessionArea>> DeleteProfessionArea(Guid id)
        {
            var professionArea = await _context.ProfessionAreas.FindAsync(id);
            if (professionArea == null)
            {
                return NotFound();
            }

            _context.ProfessionAreas.Remove(professionArea);
            await _context.SaveChangesAsync();

            return professionArea;
        }

        private bool ProfessionAreaExists(Guid id)
        {
            return _context.ProfessionAreas.Any(e => e.Id == id);
        }
    }
}
