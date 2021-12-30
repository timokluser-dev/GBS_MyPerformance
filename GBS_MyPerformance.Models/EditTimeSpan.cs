using System;
namespace GBS_MyPerformance.Models
{
    public class EditTimeSpan
    {
        /// <summary>
        /// internal id
        /// </summary>
        public Guid Id { get; set; }
        /// <summary>
        /// from the time, the edit window will open
        /// </summary>
        public DateTime From { get; set; }
        /// <summary>
        /// until and including the time, the edit window will close
        /// </summary>
        public DateTime To { get; set; }

        public EditTimeSpan()
        {
        }
    }
}
