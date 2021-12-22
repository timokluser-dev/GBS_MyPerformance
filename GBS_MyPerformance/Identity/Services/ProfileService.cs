using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using GBS_MyPerformance.Identity.Models;
using IdentityModel;
using IdentityServer4.Models;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;

namespace GBS_MyPerformance.Identity.Services
{
    public class ProfileService : IProfileService
    {
        protected UserManager<ApplicationUser> UserManager;

        public ProfileService(UserManager<ApplicationUser> userManager)
        {
            UserManager = userManager;
        }

        public async Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            ApplicationUser user = await UserManager.GetUserAsync(context.Subject);

            IList<string> roles = await UserManager.GetRolesAsync(user);

            IList<Claim> roleClaims = new List<Claim>();
            foreach (string role in roles)
            {
                roleClaims.Add(new Claim(JwtClaimTypes.Role, role));
            }

            context.IssuedClaims.AddRange(roleClaims);

            var name = new Claim(JwtClaimTypes.Name, (user.Name != null) ? user.Name : user.Email);
            var preferedUsername = new Claim(JwtClaimTypes.PreferredUserName, user.UserName);

            // add preferred_username name
            context.IssuedClaims.Add(name);
            context.IssuedClaims.Add(preferedUsername);

        }

        public Task IsActiveAsync(IsActiveContext context)
        {
            return Task.CompletedTask;
        }
    }
}
