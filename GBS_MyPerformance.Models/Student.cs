using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using GBS_MyPerformance.Identity.Models;

namespace GBS_MyPerformance.Models
{
    //attempt to map this class to a table

    public class Student : ApplicationUser
    {
        /// <summary>
        /// the email of the apprentice trainer
        /// only used for searching the corresponding and create a user for him
        /// </summary>
        public string ApprenticeTrainerEmail { get; set; }
        /// <summary>
        /// the id of the apprentice trainer
        /// </summary>
        public Guid? ApprenticeTrainerId { get; set; }
        /// <summary>
        /// the apprentice trainer with view rights to students data
        /// </summary>
        public virtual ApprenticeTrainer? ApprenticeTrainer { get; set; }
        /// <summary>
        /// the id of the profession
        /// </summary>
        public Guid ProfessionId { get; set; }
        /// <summary>
        /// the profession of the stuent
        /// (e.g. Software Engineer w/o BM)
        /// </summary>
        public virtual Profession Profession { get; set; }
        /// <summary>
        /// the id of the company
        /// </summary>
        public Guid? CompanyId { get; set; }
        /// <summary>
        /// the company of the apprentice
        /// </summary>
        public virtual Company? Company { get; set; }
        /// <summary>
		/// the id of the class
		/// [nullable for class migrations]
		/// </summary>
        public Guid? SchoolClassId { get; set; }
        /// <summary>
		/// the class, in which the student is
		/// [nullable for class migrations]
		/// </summary>
		public SchoolClass? SchoolClass { get; set; }
        /// <summary>
		/// all the marks achieved by the student
		/// SingleMarks & SemesterMarks
		/// </summary>
        public List<Mark> Marks { get; set; }


        public Student()
        {
            MainRole = UserRoles.Student;
        }
    }
}
