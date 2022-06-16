using System;
using System.Linq;
using GBS_MyPerformance.Data;

namespace GBS_MyPerformance.Services
{
    public class MarkCalculationService
    {
        private readonly ApplicationDbContext _context;

        public MarkCalculationService(ApplicationDbContext context)
        {
            _context = context;
        }

        public double getEfzNote(Guid studentId)
        {
            double ik_durchschnitt = getIkDurchschnitt(studentId);
            double uek_durchschnitt = getUekDurchschnitt(studentId);
            double egk_durchschnitt = getEgkDurchschnitt(studentId);
            double abu_durchschnitt = getAbuDurchschnitt(studentId);
            double fa_note = getFaNote(studentId);

            if(ik_durchschnitt==0 || uek_durchschnitt==0 || egk_durchschnitt==0 || abu_durchschnitt==0 || fa_note==0)
            {
                return 0;
            }

            return (ik_durchschnitt * 0.24) + (uek_durchschnitt * 0.06) + (egk_durchschnitt * 0.2) + (abu_durchschnitt * 0.2) + (fa_note * 0.2);

        }

        private double getFaNote(Guid studentId)
        {
            var ratingCategory = _context.RatingCategories.Where(n => n.Name.Contains("FA")).FirstOrDefault(); 
            var ratingCategoryId = _context.Entry(ratingCategory).Property(u => u.Id).CurrentValue;

            var faNoteObjekt = _context.Marks.Where(n => n.RatingId.Equals(ratingCategoryId) && n.StudentId.Equals(studentId)).First();
            double faNote = (double)_context.Entry(faNoteObjekt).Property(u => u.Rating).CurrentValue;
            if (faNoteObjekt == null)
            {
                return 0;
            }
            return faNote;
        }

        private double getAbuDurchschnitt(Guid studentId)
        {
            var ratingCategory = _context.RatingCategories.Where(n => n.Name.Contains("ABU")).First(); 
            var ratingCategoryId = _context.Entry(ratingCategory).Property(u => u.Id).CurrentValue;

            var abuMarks = _context.Marks.Where(n => n.RatingId.Equals(ratingCategoryId) && n.StudentId.Equals(studentId)).ToList();

            if (abuMarks == null)
            {
                return 0;
            }

            double sumMarks = 0;

            for(int i = 0; i > abuMarks.Count(); i++)
            {
                double singleMark = (double)_context.Entry(abuMarks[i]).Property(u => u.Rating).CurrentValue;
                sumMarks = sumMarks + singleMark;
            }

            return sumMarks / abuMarks.Count();

        }

        private double getEgkDurchschnitt(Guid studentId)
        {
            var ratingCategory = _context.RatingCategories.Where(n => n.Name.Contains("EGK")).First();
            var ratingCategoryId = _context.Entry(ratingCategory).Property(u => u.Id).CurrentValue;

            var egkMarks = _context.Marks.Where(n => n.RatingId.Equals(ratingCategoryId) && n.StudentId.Equals(studentId)).ToList();

            if (egkMarks == null)
            {
                return 0;
            }

            double sumMarks = 0;

            for (int i = 0; i > egkMarks.Count(); i++)
            {
                double singleMark = (double)_context.Entry(egkMarks[i]).Property(u => u.Rating).CurrentValue;
                sumMarks = sumMarks + singleMark;
            }

            return sumMarks / egkMarks.Count();
        }

        private double getUekDurchschnitt(Guid studentId)
        {
            var ratingCategory = _context.RatingCategories.Where(n => n.Name.Contains("ÜK") || n.Name.Contains("UEK")).First();
            var ratingCategoryId = _context.Entry(ratingCategory).Property(u => u.Id).CurrentValue;

            var uekMarks = _context.Marks.Where(n => n.RatingId.Equals(ratingCategoryId) && n.StudentId.Equals(studentId)).ToList();

            if (uekMarks == null)
            {
                return 0;
            }

            double sumMarks = 0;

            for (int i = 0; i > uekMarks.Count(); i++)
            {
                double singleMark = (double)_context.Entry(uekMarks[i]).Property(u => u.Rating).CurrentValue;
                sumMarks = sumMarks + singleMark;
            }

            return sumMarks / uekMarks.Count();
        }

        private double getIkDurchschnitt(Guid studentId)
        {
            var ratingCategory = _context.RatingCategories.Where(n => n.Name.Contains("ÜK") || n.Name.Contains("UEK")).First();
            var ratingCategoryId = _context.Entry(ratingCategory).Property(u => u.Id).CurrentValue;

            var ikMarks = _context.Marks.Where(n => n.RatingId.Equals(ratingCategoryId) && n.StudentId.Equals(studentId)).ToList();

            if (ikMarks == null)
            {
                return 0;
            }

            double sumMarks = 0;

            for (int i = 0; i > ikMarks.Count(); i++)
            {
                double singleMark = (double)_context.Entry(ikMarks[i]).Property(u => u.Rating).CurrentValue;
                sumMarks = sumMarks + singleMark;
            }

            return sumMarks / ikMarks.Count();
        }
    }
}
