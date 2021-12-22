using System;
using System.Collections.Generic;
using GBS_MyPerformance.Identity.Models;

namespace GBS_MyPerformance.Models
{
    public class Teacher : ApplicationUser
    {
        /// <summary>
        /// all classes of the teacher
        /// </summary>
        public List<SchoolClass> SchoolClasses { get; set; }

        public Teacher()
        {
        }
    }
}
