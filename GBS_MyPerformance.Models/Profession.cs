using System;
using System.Collections.Generic;

namespace GBS_MyPerformance.Models
{
    public class Profession
    {
        /// <summary>
		/// internal id
		/// </summary>
        public Guid Id { get; set; }
        /// <summary>
		/// the name of the profession
        /// (e.g. Applikationsentwickler; Applikationsentwickler mit BM)
		/// </summary>
        public string Name { get; set; }
        /// <summary>
        /// how the diploma mark will be rounded
        /// </summary>
        public RoundingType DiplomaRoundingType { get; set; }
        /// <summary>
        /// the id of the profession area
        /// </summary>
        public Guid ProfessionAreaId { get; set; }
        /// <summary>
        /// profession area for the profession
        /// </summary>
        public virtual ProfessionArea ProfessionArea { get; set; }
        /// <summary>
		/// when the profession is active from
		/// (e.g. BiVo is active)
		/// </summary>
        public DateTime ActiveFrom { get; set; }
        /// <summary>
		/// when the profession will be retired
		/// (e.g. new BiVo 2021 -> ActiveTo will be 2021 + 4 years)
		/// </summary>
        public DateTime? ActiveTo { get; set; }
        /// <summary>
		/// all students of this profession
		/// </summary>
        public List<Student> Students { get; set; }
        /// <summary>
        /// all semesters for this profession
        /// (e.g. 1; 2; 8)
        /// </summary>
        public List<Semester> Semesters { get; set; }

        /// <returns>if the profession is still active</returns>
        public bool IsActive
        {
            get
            {
                return (DateTime.Today >= ActiveFrom && (ActiveTo == null || DateTime.Today <= ActiveTo));
            }
        }

        public Profession()
        {
        }
    }
}
