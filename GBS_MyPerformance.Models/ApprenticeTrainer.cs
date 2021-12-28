using System;
using System.Collections.Generic;
using GBS_MyPerformance.Identity.Models;

namespace GBS_MyPerformance.Models
{
    public class ApprenticeTrainer : ApplicationUser
    {
        /// <summary>
        /// all apprentices, supervised by the trainer
        /// </summary>
        public List<Student> Apprentices { get; set; }

        public ApprenticeTrainer()
        {
            MainRole = UserRoles.Trainer;
        }
    }
}
