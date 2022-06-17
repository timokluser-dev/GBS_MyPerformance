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
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var dataObject = await _context.Set<ProfessionArea>().ToListAsync();
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

        // GET: api/Profession/5
        [HttpGet("{id}")]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<IActionResult> GetProfessionArea(Guid id)
        {
            var dataObject = await _context.Set<ProfessionArea>().Where(n => n.Id.Equals(id)).ToListAsync();

            if (dataObject == null)
            {
                return NotFound();
            }
            return Ok(dataObject);
        }

        // POST: api/ProfessionArea
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Create(ProfessionArea professionArea)
        {
            if(professionArea == null)
            {
                return BadRequest();
            }

            _context.ProfessionAreas.Add(professionArea);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProfessionArea", new { id = professionArea.Id }, professionArea);
        }

        // PUT: api/ProfessionArea/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Update(Guid id, ProfessionArea professionArea)
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

        

        // DELETE: api/ProfessionArea/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var professionArea = await _context.ProfessionAreas.FindAsync(id);
            if (professionArea == null)
            {
                return NotFound();
            }

            _context.ProfessionAreas.Remove(professionArea);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool ProfessionAreaExists(Guid id)
        {
            return _context.ProfessionAreas.Any(e => e.Id == id);
        }
    }
}
