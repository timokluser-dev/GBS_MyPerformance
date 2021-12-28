using System;
namespace GBS_MyPerformance.Models
{
    public class LoginDomain
    {
        /// <summary>
        /// internal id
        /// </summary>
        public Guid Id { get; set; }
        /// <summary>
        /// the fdqn
        /// </summary>
        public string Domain { get; set; }
        /// <summary>
        /// the domain is valid for this role
        /// </summary>
        public UserRoles Role { get; set; }

        public LoginDomain()
        {
        }
    }
}
