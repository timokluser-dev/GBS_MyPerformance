using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using GBS_MyPerformance.Identity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Logging;
using GBS_MyPerformance.Identity;

namespace GBS_MyPerformance.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class RegisterModel : PageModel
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger<RegisterModel> _logger;
        private readonly IEmailSender _emailSender;

        public RegisterModel(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            ILogger<RegisterModel> logger,
            IEmailSender emailSender)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            _emailSender = emailSender;
        }

        [BindProperty]
        public InputModel Input { get; set; }

        public string ReturnUrl { get; set; }

        public IList<AuthenticationScheme> ExternalLogins { get; set; }

        public class InputModel
        {
            [Required]
            [EmailAddress]
            [Display(Name = "E-Mail")]
            public string Email { get; set; }

            [Required]
            [EmailAddress]
            [Display(Name = "E-Mail Ausbildner")]
            public string EmailApprenticeTrainer { get; set; }

            [Required]
            [StringLength(10, ErrorMessage = "Der {0} muss mindestens {2} und darf höchstens {1} Zeichen lang sein.", MinimumLength = 5)]
            [Display(Name = "Einschreibeschlüssel")]
            public string SchoolClass { get; set; }

            [Required]
            [StringLength(100, ErrorMessage = "Das {0} muss mindestens {2} und darf höchstens {1} Zeichen lang sein.", MinimumLength = 6)]
            [DataType(DataType.Password)]
            [Display(Name = "Passwort")]
            public string Password { get; set; }

            [DataType(DataType.Password)]
            [Display(Name = "Passwort wiederholen")]
            [Compare("Password", ErrorMessage = "Die Passwörter stimmen nicht überein.")]
            public string ConfirmPassword { get; set; }
        }

        public async Task OnGetAsync(string returnUrl = null)
        {
            ReturnUrl = returnUrl;
            ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
        }

        public async Task<IActionResult> OnPostAsync(string returnUrl = null)
        {
            returnUrl = returnUrl ?? Url.Content("~/");
            ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
            if (ModelState.IsValid)
            {
                if (!IsValidEmailForRegistration(Input.Email))
                {
                    ModelState.AddModelError(string.Empty, "Diese Domain ist leider nicht für die Registrierung zugelassen");
                    return Page();
                }

                var user = new ApplicationUser { UserName = Input.Email, Email = Input.Email };
                var result = await _userManager.CreateAsync(user, Input.Password);
                if (result.Succeeded)
                {
                    _logger.LogInformation("User created a new account with password.");

                    await CreateAccountForTrainer();

                    await SendEmailConfirmation(user, returnUrl);

                    if (_userManager.Options.SignIn.RequireConfirmedAccount)
                    {
                        return RedirectToPage("RegisterConfirmation", new { email = Input.Email, returnUrl = returnUrl });
                    }
                    else
                    {
                        await _signInManager.SignInAsync(user, isPersistent: false);
                        return LocalRedirect(returnUrl);
                    }
                }
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
            }

            // If we got this far, something failed, redisplay form
            return Page();
        }

        private bool IsValidEmailForRegistration(string email)
        {
            string[] validStudentEmailDomains = { "edu.gbssg.ch", "ksb-sg.ch" };

            bool isValid = validStudentEmailDomains.Contains(email[(email.IndexOf('@') + 1)..]);

            return isValid;
        }

        private async Task SendEmailConfirmation(ApplicationUser user, string returnUrl = "/")
        {
            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
            var callbackUrl = Url.Page(
                "/Account/ConfirmEmail",
                pageHandler: null,
                values: new { area = "Identity", userId = user.Id, code = code, returnUrl = returnUrl },
                protocol: Request.Scheme);

            await _emailSender.SendEmailAsync(user.Email, "E-Mail Bestätigen",
                $"Bitte bestätigen Sie Ihr Konto, indem Sie <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>hier klicken</a>.");
        }

        private async Task CreateAccountForTrainer()
        {
            var userApprenticeTrainer = new ApplicationUser { UserName = Input.EmailApprenticeTrainer, Email = Input.EmailApprenticeTrainer };
            var result = await _userManager.CreateAsync(userApprenticeTrainer);

            if (result.Succeeded)
            {
                await SendEmailConfirmation(userApprenticeTrainer);
                await _userManager.AddToRoleAsync(userApprenticeTrainer, AppRoles.TRAINER);
            }
            else
            {
                // user already exists

                if (!await _userManager.IsInRoleAsync(await _userManager.FindByEmailAsync(userApprenticeTrainer.Email),AppRoles.TRAINER))
                {
                    var resRole = await _userManager.AddToRoleAsync(await _userManager.FindByEmailAsync(userApprenticeTrainer.Email), AppRoles.TRAINER);
                }

                // TODO: add apprentice reference
            }
        }
    }
}
