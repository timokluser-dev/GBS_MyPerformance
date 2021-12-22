using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using GBS_MyPerformance.Models;

namespace GBS_MyPerformance.Tests
{
    [TestClass]
    public class ProfessionTests
    {
        [TestMethod]
        public void TestActive()
        {
            var profession = new Profession()
            {
                Id = new Guid("6718692c-689f-4773-ac59-e38db3e7024e"),
                Name = "Informatiker/in EFZ Applikationsentwicklung",
                ActiveFrom = new DateTime(2014, 8, 1),
                ActiveTo = null
            };

            Assert.AreEqual(true, profession.IsActive);
        }

        [TestMethod]
        public void TestInActive()
        {
            var profession = new Profession()
            {
                Id = new Guid("a2194ad4-6782-4f9d-9dd0-bc5f28882649"),
                Name = "Informatiker/in EFZ Applikationsentwicklung",
                ActiveFrom = new DateTime(2011, 8, 1),
                ActiveTo = new DateTime(2017, 7, 31)
            };

            Assert.AreEqual(false, profession.IsActive);
        }
    }
}
