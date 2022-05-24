using System;
using GBS_MyPerformance.Identity.Models;

namespace GBS_MyPerformance.Models
{
    public class Configuration
    {
        /// <summary>
        /// internal id
        /// </summary>
        public Guid Id { get; set; }
        /// <summary>
        /// settings identifier
        /// (e.g. user.color-schema)
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// the value of the setting
        /// (e.g. in JSON format)
        /// </summary>
        public string Value { get; set; }

        public Configuration()
        {
        }
    }
}
