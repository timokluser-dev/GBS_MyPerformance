using System;
using System.Net.Http;
using System.Threading.Tasks;
using GBS_MyPerformance.Identity.Models;
using IdentityServer4.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;

namespace GBS_MyPerformance.Areas.Identity.Pages.Account.OAuth
{
    [AllowAnonymous]
    // ignore csrf in order to allow post backs from azure oauth
    [IgnoreAntiforgeryToken]
    public class Callback : PageModel
    {
        private readonly IConfiguration _configuration;
        private readonly HttpClient _httpClient = new HttpClient();
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        [TempData] public string ErrorMessage { get; set; }

        public Callback(IConfiguration configuration, SignInManager<ApplicationUser> signInManager,
            UserManager<ApplicationUser> userManager)
        {
            _configuration = configuration;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public IActionResult OnGet()
        {
            return RedirectToPage("../Login");
        }


        public async Task<IActionResult> OnPost([FromForm(Name = "access_token")] string accessToken)
        {
            try
            {
                if (accessToken.IsNullOrEmpty())
                {
                    throw new Exception("IdP does not return an access token. Could not load User Data");
                }

                var userInfo = await Helpers.OAuth.GetOpenIdUserInfo(_configuration, _httpClient, accessToken);

                var user = await _userManager.FindByNameAsync(userInfo.email) ??
                           await _userManager.FindByEmailAsync(userInfo.email);
                if (user == null)
                {
                    ErrorMessage =
                        $"Kein Benutzer mit der Kennung '{userInfo.email}' gefunden. Bitte kontaktieren Sie den Administrator.";

                    return RedirectToPage("../Login");
                }

                #region Populate User Data

                if (user.FirstName.IsNullOrEmpty()) user.FirstName = userInfo.given_name;

                if (user.LastName.IsNullOrEmpty()) user.LastName = userInfo.family_name;

                await _userManager.UpdateAsync(user);

                #endregion

                await _signInManager.SignInAsync(user, false);

                return LocalRedirect("~/");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);

                ErrorMessage =
                    "Ein unbekannter Fehler beim Identitätsanbieter ist aufgetreten. Bitte kontaktieren Sie den Administrator.";

                return RedirectToPage("../Login");
            }
        }
    }
}