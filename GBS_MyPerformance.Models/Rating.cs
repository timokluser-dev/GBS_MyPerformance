using System;
using System.Collections.Generic;

namespace GBS_MyPerformance.Models
{
    public class Rating
    {
        /// <summary>
        /// internal id
        /// </summary>
        public Guid Id { get; set; }
        /// <summary>
        /// the id of the subject, being rated
        /// </summary>
        public Guid SubjectId { get; set; }
        /// <summary>
        /// the subject being rated
        /// </summary>
        public virtual Subject Subject { get; set; }
        /// <summary>
        /// the id of the Rating Category
        /// </summary>
        public Guid RatingCategoryId { get; set; }
        /// <summary>
        /// Rating Category, which this rating belongs to
        /// </summary>
        public virtual RatingCategory RatingCategory { get; set; }
        /// <summary>
        /// all marks for this rating
        /// </summary>
        public List<Mark> Marks { get; set; }

        public Rating()
        {
        }
    }
}
