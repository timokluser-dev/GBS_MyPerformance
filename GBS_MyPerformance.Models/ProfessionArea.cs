using System;
using System.Collections.Generic;

namespace GBS_MyPerformance.Models
{
    public class ProfessionArea
    {
        /// <summary>
        /// internal id
        /// </summary>
        public Guid Id { get; set; }
        /// <summary>
        /// name of the professionarea (Fachbereich)
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// all professions to this area
        /// </summary>
        public List<Profession> Professions { get; set; }
        /// <summary>
        /// all school classes corresponding to this area
        /// </summary>
        public List<SchoolClass> SchoolClasses { get; set; }
        /// <summary>
        /// all subjects for this area
        /// </summary>
        public List<Subject> Subjects { get; set; }

        public ProfessionArea()
        {
        }
    }
}
