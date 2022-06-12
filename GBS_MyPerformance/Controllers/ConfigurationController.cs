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
    public class ConfigurationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ConfigurationController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Configuration
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Configuration>>> GetConfigurations()
        {
            return await _context.Configurations.ToListAsync();
        }

        // GET: api/Configuration/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Configuration>> GetConfiguration(Guid id)
        {
            var configuration = await _context.Configurations.FindAsync(id);

            if (configuration == null)
            {
                return NotFound();
            }

            return configuration;
        }

        // PUT: api/Configuration/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConfiguration(Guid id, Configuration configuration)
        {
            if (id != configuration.Id)
            {
                return BadRequest();
            }

            _context.Entry(configuration).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConfigurationExists(id))
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

        // POST: api/Configuration
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Configuration>> PostConfiguration(Configuration configuration)
        {
            _context.Configurations.Add(configuration);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConfiguration", new { id = configuration.Id }, configuration);
        }

        // DELETE: api/Configuration/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Configuration>> DeleteConfiguration(Guid id)
        {
            var configuration = await _context.Configurations.FindAsync(id);
            if (configuration == null)
            {
                return NotFound();
            }

            _context.Configurations.Remove(configuration);
            await _context.SaveChangesAsync();

            return configuration;
        }

        private bool ConfigurationExists(Guid id)
        {
            return _context.Configurations.Any(e => e.Id == id);
        }
    }
}
