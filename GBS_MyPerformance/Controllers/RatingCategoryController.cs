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
    public class RatingCategoryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RatingCategoryController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/RatingCategory
        [HttpGet]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<ActionResult<IEnumerable<RatingCategory>>> GetRatingCategories()
        {
            return await _context.RatingCategories.ToListAsync();
        }

        // GET: api/RatingCategory/5
        [HttpGet("{id}")]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<ActionResult<RatingCategory>> GetRatingCategory(Guid id)
        {
            var ratingCategory = await _context.RatingCategories.FindAsync(id);

            if (ratingCategory == null)
            {
                return NotFound();
            }

            return ratingCategory;
        }

        // PUT: api/RatingCategory/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> PutRatingCategory(Guid id, RatingCategory ratingCategory)
        {
            if (id != ratingCategory.Id)
            {
                return BadRequest();
            }

            _context.Entry(ratingCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RatingCategoryExists(id))
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

        // POST: api/RatingCategory
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<RatingCategory>> PostRatingCategory(RatingCategory ratingCategory)
        {
            _context.RatingCategories.Add(ratingCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRatingCategory", new { id = ratingCategory.Id }, ratingCategory);
        }

        // DELETE: api/RatingCategory/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<RatingCategory>> DeleteRatingCategory(Guid id)
        {
            var ratingCategory = await _context.RatingCategories.FindAsync(id);
            if (ratingCategory == null)
            {
                return NotFound();
            }

            _context.RatingCategories.Remove(ratingCategory);
            await _context.SaveChangesAsync();

            return ratingCategory;
        }

        private bool RatingCategoryExists(Guid id)
        {
            return _context.RatingCategories.Any(e => e.Id == id);
        }
    }
}
