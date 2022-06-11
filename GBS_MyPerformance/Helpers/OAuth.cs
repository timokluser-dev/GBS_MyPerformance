using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using GBS_MyPerformance.Areas.Identity.Pages.Account.OAuth.Models;
using GBS_MyPerformance.Helpers.Models;
using IdentityServer4.Extensions;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace GBS_MyPerformance.Helpers
{
    public static class OAuth
    {
        public static bool IsEnabled(IConfiguration configuration)
        {
            return configuration.GetValue<bool>("OAuth:Enabled") &&
                   !(configuration.GetValue<string>("OAuth:AuthorizeUrl").IsNullOrEmpty() ||
                     configuration.GetValue<string>("OAuth:ClientId").IsNullOrEmpty() ||
                     configuration.GetValue<string>("OAuth:RedirectUrl").IsNullOrEmpty());
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

        public static async Task<OpenIdUserInfo> GetOpenIdUserInfo(IConfiguration configuration, HttpClient httpClient,
            string accessToken)
        {
            if (configuration.GetValue<string>("OAuth:OpenIdUserInfoUrl").IsNullOrEmpty())
            {
                throw new Exception("openid user info url is not specified");
            }

            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

            var httpResponse = await httpClient.GetAsync(configuration.GetValue<string>("OAuth:OpenIdUserInfoUrl"));
            httpResponse.EnsureSuccessStatusCode();
            var response = await httpResponse.Content.ReadAsStringAsync();

            if (response.IsNullOrEmpty())
            {
                throw new Exception("cannot load openid user profile");
            }

            return JsonConvert.DeserializeObject<OpenIdUserInfo>(response);
        }

        public static OAuthProvider GetOAuthProvider(IConfiguration configuration)
        {
            return new OAuthProvider()
            {
                Name = configuration.GetValue<string>("OAuth:ProviderName") ?? "SSO",
                LogoPath = configuration.GetValue<string>("OAuth:LogoPath")
            };
        }
    }
}