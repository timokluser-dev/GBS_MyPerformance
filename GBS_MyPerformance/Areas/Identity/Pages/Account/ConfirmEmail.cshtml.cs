using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using GBS_MyPerformance.Identity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Identity.UI.Services;

namespace GBS_MyPerformance.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class ConfirmEmailModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IEmailSender _emailSender;

        public ConfirmEmailModel(UserManager<ApplicationUser> userManager, IEmailSender emailSender)
        {
            _userManager = userManager;
            _emailSender = emailSender;
        }

        [TempData]
        public string StatusMessage { get; set; }

        [TempData]
        public string StatusMessageAdditional { get; set; }

        public async Task<IActionResult> OnGetAsync(string userId, string code)
        {
            if (userId == null || code == null)
            {
                return RedirectToPage("/Index");
            }

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return NotFound($"Benutzer mit ID '{userId}' kann nicht geladen werden.");
            }

            code = Encoding.UTF8.GetString(WebEncoders.Base64UrlDecode(code));
            var result = await _userManager.ConfirmEmailAsync(user, code);
            StatusMessage = result.Succeeded ? "Vielen Dank, dass Sie Ihre E-Mail bestätigt haben." : "Fehler bei der Bestätigung Ihrer E-Mail.";

            await CheckIfUserHasPasswordOrSendResetLink(user);

            return Page();
        }

        private async Task CheckIfUserHasPasswordOrSendResetLink(ApplicationUser user)
        {
            if (user.PasswordHash == null && !user.PasswordInitialSetPending)
            {
                // send mail to reset
                await SendCreatePasswordEmail(user);

                StatusMessageAdditional = "Sie werden umgehend einen Link zur Erstellung des Passworts erhalten.";
            }
        }

        private async Task SendCreatePasswordEmail(ApplicationUser user)
        {
            var code = await _userManager.GeneratePasswordResetTokenAsync(user);
            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
            var email = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(user.Email));
            var callbackUrl = Url.Page(
                "/Account/ResetPassword",
                pageHandler: null,
                values: new { area = "Identity", code, email },
                protocol: Request.Scheme);

            await _emailSender.SendEmailAsync(
                user.Email,
                "Password Erstellen",
                $"Bitte erstellen Sie Ihr Passwort, indem Sie <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>hier klicken</a>.");

            user.PasswordInitialSetPending = true;
            await _userManager.UpdateAsync(user);
        }
    }
}
