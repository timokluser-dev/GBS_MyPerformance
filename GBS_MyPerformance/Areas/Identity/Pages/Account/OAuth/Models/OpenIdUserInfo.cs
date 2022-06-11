namespace GBS_MyPerformance.Areas.Identity.Pages.Account.OAuth.Models
{
    public class OpenIdUserInfo
    {
        public string sub { get; set; }
        public string name { get; set; }
        public string family_name { get; set; }
        public string given_name { get; set; }
        public string picture { get; set; }
        public string email { get; set; }
    }
}