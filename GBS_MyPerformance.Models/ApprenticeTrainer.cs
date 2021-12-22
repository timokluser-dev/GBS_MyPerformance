using System;
using System.Collections.Generic;
using GBS_MyPerformance.Identity.Models;

namespace GBS_MyPerformance.Models
{
    public class ApprenticeTrainer : ApplicationUser
    {
        public List<Student> Apprentices { get; set; }

        public ApprenticeTrainer()
        {
        }
    }
}
