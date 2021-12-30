using System;
using System.Collections.Generic;

namespace GBS_MyPerformance.Models
{
    public class Semester
    {
        /// <summary>
        /// internal id
        /// </summary>
        public Guid Id { get; set; }
        /// <summary>
        /// number of semester
        /// (e.g. 2; 8)
        /// </summary>
        public int Number { get; set; }
        /// <summary>
        /// all semester ratings for this semester.
        /// is shared between rating categories
        /// </summary>
        public List<SemesterRating> SemesterRatings { get; set; }
        /// <summary>
        /// id of the profession
        /// </summary>
        public Guid ProfessionId { get; set; }
        /// <summary>
        /// profession, which this semester belongs to
        /// </summary>
        public virtual Profession Profession { get; set; }

        public Semester()
        {
        }
    }
}
