using System;
using GBS_MyPerformance.Identity.Models;

namespace GBS_MyPerformance.Models
{
    public class UserConfiguration : Configuration
    {
        /// <summary>
        /// id of user
        /// </summary>
        public Guid UserId { get; set; }
        /// <summary>
        /// if bound to a user, not null
        /// </summary>
        public ApplicationUser User { get; set; }
    }
}