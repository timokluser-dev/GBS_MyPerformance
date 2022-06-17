using GBS_MyPerformance.Data;
using GBS_MyPerformance.Identity.Models;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GBS_MyPerformance.Services
{
    public class UserService
    {
        private readonly ApplicationDbContext _context;

        private readonly UserManager<ApplicationUser> _userManager;
        public UserService(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
            _context = context;
        }

        public async Task<List<ApplicationUser>> GetUsers()
        {
            return (List<ApplicationUser>)await _userManager.GetUsersInRoleAsync("Teacher");
        }
    }
}
