using System;
using System.Collections.Generic;

namespace GBS_MyPerformance.Models
{
    public class Subject
    {
        /// <summary>
		/// internal id
		/// </summary>
        public Guid Id { get; set; }
        /// <summary>
        /// abbreviation / short name
        /// (e.g. M120; SUK)
        /// </summary>
        public string Abbreviation { get; set; }
        /// <summary>
        /// name of subject
        /// (e.g. Benuterschnittstellen implementieren; Sprache und Kommunikation)
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// remarks for the subject
        /// (e.g. UEK)
        /// </summary>
        public string? Remarks { get; set; }
        /// <summary>
        /// how the marks in this subject get rounded
        /// <see cref="MarkRoundingType"/>
        /// </summary>
        public RoundingType MarkRoundingType { get; set; }
        /// <summary>
		/// all ratings of this subject
        /// (e.g. every 2nd semester)
		/// </summary>
		public List<Rating> Ratings { get; set; }
        /// <summary>
        /// id of the profession area
        /// </summary>
        public Guid ProfessionAreaId { get; set; }
        /// <summary>
        /// the profession area, which the subject belongs to
        /// </summary>
        public virtual ProfessionArea ProfessionArea { get; set; }

        public Subject()
        {
        }
    }
}
