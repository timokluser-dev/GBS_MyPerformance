using System;
using System.Collections.Generic;

namespace GBS_MyPerformance.Models
{
    public class Company
    {
        /// <summary>
        /// internal id
        /// </summary>
        public Guid Id { get; set; }
        /// <summary>
        /// name of company
        /// </summary>
        public string? Name { get; set; }
        /// <summary>
        /// all apprentices of this company.
        /// active and inactive once.
        /// </summary>
        public List<Student> Apprentices { get; set; }

        public Company()
        {
        }
    }
}
