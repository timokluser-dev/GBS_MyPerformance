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
    public class EditTimeSpanController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EditTimeSpanController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/EditTimeSpan
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var dataObject = await _context.Set<EditTimeSpan>().ToListAsync();
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


        // POST: api/EditTimeSpan
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Create([FromBody] EditTimeSpan editTimeSpan)
        {
            if (editTimeSpan == null)
            {
                return BadRequest();
            }

            _context.Set<EditTimeSpan>().Add(editTimeSpan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEditTimeSpan", new { id = editTimeSpan.Id }, editTimeSpan);
        }

        // PUT: api/EditTimeSpan/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, EditTimeSpan editTimeSpan)
        {
            if (id != editTimeSpan.Id)
            {
                return BadRequest();
            }

            _context.Entry(editTimeSpan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EditTimeSpanExists(id))
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

        // POST: api/EditTimeSpan
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<IActionResult> PostEditTimeSpan(EditTimeSpan editTimeSpan)
        {
            _context.EditTimeSpans.Add(editTimeSpan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEditTimeSpan", new { id = editTimeSpan.Id }, editTimeSpan);
        }

        // DELETE: api/EditTimeSpan/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var editTimeSpan = await _context.EditTimeSpans.FindAsync(id);
            if (editTimeSpan == null)
            {
                return NotFound();
            }

            _context.EditTimeSpans.Remove(editTimeSpan);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool EditTimeSpanExists(Guid id)
        {
            return _context.EditTimeSpans.Any(e => e.Id == id);
        }
    }
}
