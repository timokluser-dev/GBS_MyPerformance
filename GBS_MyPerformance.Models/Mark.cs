using System;
using System.ComponentModel.DataAnnotations;

namespace GBS_MyPerformance.Models
{
    public class Mark
    {
        /// <summary>
        /// internal id
        /// </summary>
        public Guid Id { get; set; }
        /// <summary>
        /// the value of this mark
        /// </summary>
        [Range(1, 6)]
        public double Value { get; set; }
        /// <summary>
        /// the id of the student
        /// </summary>
        public Guid StudentId { get; set; }
        /// <summary>
        /// the student, which claimed the mark
        /// </summary>
        public virtual Student Student { get; set; }
        /// <summary>
        /// the id of the rating
        /// </summary>
        public Guid RatingId { get; set; }
        /// <summary>
        /// the rating for the mark
        /// </summary>
        public virtual Rating Rating { get; set; }

        public Mark()
        {
        }
    }
}
