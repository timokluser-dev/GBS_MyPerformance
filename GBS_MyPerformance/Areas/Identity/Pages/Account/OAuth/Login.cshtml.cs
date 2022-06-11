using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;

namespace GBS_MyPerformance.Areas.Identity.Pages.Account.OAuth
{
    [AllowAnonymous]
    public class Login : PageModel
    {
        private readonly IConfiguration _configuration;

        [TempData] public string ErrorMessage { get; set; }

        public Login(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IActionResult OnGet()
        {
            if (Helpers.OAuth.IsEnabled(_configuration))
            {
                return Redirect(Helpers.OAuth.GetRedirectUrl(_configuration));
            }

            ErrorMessage =
                "Das Single-Sign-On Login wurde nicht konfiguriert. Bitte kontaktieren Sie den Administrator.";

            return RedirectToPage("../Login");
        }
    }
}