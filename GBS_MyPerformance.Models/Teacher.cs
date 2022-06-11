using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using GBS_MyPerformance.Identity.Models;

namespace GBS_MyPerformance.Models
{
    [Table("AspNetUsers")]
    public class Teacher : ApplicationUser
    {
        /// <summary>
        /// all classes of the teacher
        /// </summary>
        public List<SchoolClass> SchoolClasses { get; set; }

        public Teacher()
        {
            MainRole = UserRoles.Teacher;
        }
    }
}
