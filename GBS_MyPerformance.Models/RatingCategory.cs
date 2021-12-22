using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GBS_MyPerformance.Models
{
    public class RatingCategory
    {
        /// <summary>
		/// internal id
		/// </summary>
        public Guid Id { get; set; }
        /// <summary>
        /// name of category
        /// (e.g. Informatikkompetenzen BFS; Informatikkompetenzen ÜK; Allgemeinbildung)
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// how much the category will be weighted for the final mark
        /// not in percent format (decimal instead)
        /// </summary>
        [Range(0.01, 1)]
        public double DiplomaFactor { get; set; }
        /// <summary>
        /// how the avergae of the category will be rounded
        /// (e.g. IK = .1; EGK = .5)
        /// </summary>
        public RoundingType CategoryAverageRoundingType { get; set; }
        /// <summary>
        /// id of profession
        /// </summary>
        public Guid ProfessionId { get; set; }
        /// <summary>
        /// the profession
        /// </summary>
        public virtual Profession Profession { get; set; }
        /// <summary>
        /// the semerster ratings
        /// (e.g. ENG; GES; SUK)
        /// </summary>
        //public List<Rating> SemesterRatings { get; set; }
        public List<SemesterRating> SemesterRatings { get; set; }
        /// <summary>
        /// single ratings
        /// (e.g. IT Module; ÜK Module; IPA; VA)
        /// </summary>
        public List<Rating> SingleRatings { get; set; }

        #region AVG Docs

        // HOWTO Calc Category AVG:
        // ========================
        // 1. AVG of all Semesters each by each
        // 2. Add every single mark to it
        // 3. calc AVG
        // e.g. 1) 5.5 --- 2) 5.5 + 5.6 + 5.8 --- 3) 16.9 / 3 = 5.6333 (round by CategoryAverageRoundingType)



        // HOWTO Calc Semester AVG:
        // ========================
        // Semester AVG is always .5 rounded


        // HOWTO Calc Single Ratings AVG:
        // ==============================
        // !!! no AVG here
        //     each mark will go directly into the CATEGORY AVG

        #endregion AVG Docs

        public RatingCategory()
        {
        }
    }
}
