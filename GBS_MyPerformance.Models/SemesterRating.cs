using System;
using System.Collections.Generic;

namespace GBS_MyPerformance.Models
{
    public class SemesterRating : Rating
    {
        /// <summary>
		/// the id of the semester
		/// </summary>
        public Guid SemesterId { get; set; }
        /// <summary>
		/// the semester, which this rating is for
		/// (e.g. Semester 2)
		/// </summary>
        public virtual Semester Semester { get; set; }

        public SemesterRating()
        {
        }
    }
}
