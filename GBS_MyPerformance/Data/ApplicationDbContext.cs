using GBS_MyPerformance.Identity.Models;
using GBS_MyPerformance.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GBS_MyPerformance.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        #region DbSets GBS_MyPerformance

        //public DbSet<Profession> Professions { get; set; }
        //public DbSet<ProfessionArea> ProfessionAreas { get; set; }
        //public DbSet<Semester> Semesters { get; set; }
        //public DbSet<SchoolClass> SchoolClasses { get; set; }
        //public DbSet<Teacher> Teachers { get; set; }
        //public DbSet<Student> Students { get; set; }
        //public DbSet<Company> Companies { get; set; }
        //public DbSet<ApprenticeTrainer> ApprenticeTrainers { get; set; }
        //public DbSet<Subject> Subjects { get; set; }
        //public DbSet<Rating> Ratings { get; set; }
        //public DbSet<SemesterRating> SemesterRatings { get; set; }
        //public DbSet<Mark> Marks { get; set; }
        //public DbSet<RatingCategory> RatingCategories { get; set; }

        #endregion DbSets GBS_MyPerformance

        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
    }
}
