using System;

namespace GBS_MyPerformance.Models
{
    public enum RoundingType
    {
        /// <summary>
        /// rounding to .1
        /// (e.g. 5.26 -> 5.3; 5.74 -> 5.7; 5.75 -> 5.8)
        /// </summary>
        CentMarks = 1,
        /// <summary>
        /// rounding to .5
        /// (e.g. 5.26 -> 5.5; 5.74 -> 5.5; 5.75 -> 6)
        /// </summary>
        HalfMarks = 5
    }
}
