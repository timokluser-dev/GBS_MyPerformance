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
    public class RatingController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RatingController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Rating
        [HttpGet]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<IActionResult> GetRatings()
        {
            var dataObject = await _context.Set<Rating>().ToListAsync();
            if(dataObject == null)
            {
                return NotFound();
            }

            return Ok(dataObject);
        }

        ////Get: api/Rating/ByStudentID/5
        //[HttpGet("ByStudentID{studentid}")]
        //public async Task<IActionResult> GetByStudentID(Guid studentid)
        //{
        //    var dataObject = await _context.Set<Rating>().Where(n => n..Equals(id)).Include("ProfessionArea").ToListAsync();

        //    if (dataObject == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(dataObject);
        //}



        // GET: api/Rating/5
        [HttpGet("{id}")]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<ActionResult<Rating>> GetRating(Guid id)
        {
            var rating = await _context.Ratings.FindAsync(id);

            if (rating == null)
            {
                return NotFound();
            }

            return rating;
        }

        // PUT: api/Rating/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<IActionResult> PutRating(Guid id, Rating rating)
        {
            if (id != rating.Id)
            {
                return BadRequest();
            }

            _context.Entry(rating).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RatingExists(id))
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

        // POST: api/Rating
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<ActionResult<Rating>> PostRating(Rating rating)
        {
            _context.Ratings.Add(rating);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRating", new { id = rating.Id }, rating);
        }

        // DELETE: api/Rating/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<ActionResult<Rating>> DeleteRating(Guid id)
        {
            var rating = await _context.Ratings.FindAsync(id);
            if (rating == null)
            {
                return NotFound();
            }

            _context.Ratings.Remove(rating);
            await _context.SaveChangesAsync();

            return rating;
        }

        private bool RatingExists(Guid id)
        {
            return _context.Ratings.Any(e => e.Id == id);
        }
    }
}
