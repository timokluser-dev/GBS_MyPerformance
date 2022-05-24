using System;
using System.Collections.Generic;

namespace GBS_MyPerformance.Models
{
    public class SchoolClass
    {
        /// <summary>
        /// internal id
        /// </summary>
        public Guid Id { get; set; }
        /// <summary>
        /// the name of the class
        /// (e.g. INA1a_2019)
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// starting date of the class
        /// </summary>
        public DateTime Starting { get; set; }
        /// <summary>
        /// ending date of the class.
        /// class will then get archived
        /// </summary>
        public DateTime Ending { get; set; }
        /// <summary>
        /// all students of the class
        /// </summary>
        public List<Student> Students { get; set; }
        /// <summary>
        /// id of the responsible class teacher
        /// </summary>
        public Guid? TeacherId { get; set; }
        /// <summary>
        /// the responsible class teacher
        /// </summary>
        public virtual Teacher Teacher { get; set; }
        /// <summary>
        /// the id of the profession area
        /// </summary>
        public Guid ProfessionAreaId { get; set; }
        /// <summary>
        /// profession area of the school class
        /// </summary>
        public virtual ProfessionArea ProfessionArea { get; set; }

        public SchoolClass()
        {
        }
    }
}
