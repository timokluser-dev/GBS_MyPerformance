using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    public class UserConfigurationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserConfigurationController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/UserConfiguration
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserConfiguration>>> GetUserConfigurations()
        {
            return await _context.UserConfigurations.Where(userConfiguration => userConfiguration.User.Email == HttpContext.User.Identity.Name).ToListAsync();
        }

        // GET: api/UserConfiguration/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserConfiguration>> GetUserConfiguration(Guid id)
        {
            var userConfiguration = await _context.UserConfigurations.FindAsync(id);

            if (userConfiguration == null)
            {
                return NotFound();
            }

            return userConfiguration;
        }

        // PUT: api/UserConfiguration/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserConfiguration(Guid id, UserConfiguration userConfiguration)
        {
            if (id != userConfiguration.Id)
            {
                return BadRequest();
            }

            _context.Entry(userConfiguration).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserConfigurationExists(id))
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

        // POST: api/UserConfiguration
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<UserConfiguration>> PostUserConfiguration(UserConfiguration userConfiguration)
        {
            _context.UserConfigurations.Add(userConfiguration);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserConfiguration", new { id = userConfiguration.Id }, userConfiguration);
        }

        // DELETE: api/UserConfiguration/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserConfiguration>> DeleteUserConfiguration(Guid id)
        {
            var userConfiguration = await _context.UserConfigurations.FindAsync(id);
            if (userConfiguration == null)
            {
                return NotFound();
            }

            _context.UserConfigurations.Remove(userConfiguration);
            await _context.SaveChangesAsync();

            return userConfiguration;
        }

        private bool UserConfigurationExists(Guid id)
        {
            return _context.UserConfigurations.Any(e => e.Id == id);
        }
    }
}
