using System;
using System.Web;
using Microsoft.Extensions.Configuration;

namespace GBS_MyPerformance.Helpers
{
    public static class OAuth
    {
        public static bool IsEnabled(IConfiguration configuration)
        {
            return configuration.GetValue<bool>("OAuth:Enabled") &&
                   !(configuration.GetValue<string>("OAuth:AuthorizeUrl") == null ||
                     configuration.GetValue<string>("OAuth:ClientId") == null ||
                     configuration.GetValue<string>("OAuth:RedirectUrl") == null);
        }

        public static string GetRedirectUrl(IConfiguration configuration, Guid? state = null)
        {
            if (!IsEnabled(configuration)) return null;

            state = state ?? Guid.NewGuid();

            return
                $"{configuration.GetValue<string>("OAuth:AuthorizeUrl")}?" +
                $"client_id={configuration.GetValue<string>("OAuth:ClientId")}" +
                $"&response_type=token" +
                $"&redirect_uri={HttpUtility.UrlEncode(configuration.GetValue<string>("OAuth:RedirectUrl"))}" +
                $"&response_mode=form_post" +
                $"&scope=openid%20offline_access&state={state}";
        }
    }
}