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
    public class LoginDomainController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public LoginDomainController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/LoginDomain
        [HttpGet]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<ActionResult<IEnumerable<LoginDomain>>> GetLoginDomains()
        {
            return await _context.LoginDomains.ToListAsync();
        }

        // GET: api/LoginDomain/5
        [HttpGet("{id}")]
        [Authorize(Roles = "Student,Trainer, Administrator, Teacher")]
        public async Task<ActionResult<LoginDomain>> GetLoginDomain(Guid id)
        {
            var loginDomain = await _context.LoginDomains.FindAsync(id);

            if (loginDomain == null)
            {
                return NotFound();
            }

            return loginDomain;
        }

        // PUT: api/LoginDomain/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> PutLoginDomain(Guid id, LoginDomain loginDomain)
        {
            if (id != loginDomain.Id)
            {
                return BadRequest();
            }

            _context.Entry(loginDomain).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoginDomainExists(id))
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

        // POST: api/LoginDomain
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<LoginDomain>> PostLoginDomain(LoginDomain loginDomain)
        {
            _context.LoginDomains.Add(loginDomain);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLoginDomain", new { id = loginDomain.Id }, loginDomain);
        }

        // DELETE: api/LoginDomain/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<LoginDomain>> DeleteLoginDomain(Guid id)
        {
            var loginDomain = await _context.LoginDomains.FindAsync(id);
            if (loginDomain == null)
            {
                return NotFound();
            }

            _context.LoginDomains.Remove(loginDomain);
            await _context.SaveChangesAsync();

            return loginDomain;
        }

        private bool LoginDomainExists(Guid id)
        {
            return _context.LoginDomains.Any(e => e.Id == id);
        }
    }
}
