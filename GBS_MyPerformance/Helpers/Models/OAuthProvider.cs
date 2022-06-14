namespace GBS_MyPerformance.Helpers.Models
{
    public class OAuthProvider
    {
        /// <summary>
        /// idp provider name
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// relative to wwwroot/
        /// </summary>
        public string LogoPath { get; set; }
    }
}