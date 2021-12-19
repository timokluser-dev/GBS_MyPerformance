using System;
using System.ComponentModel;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.Configuration;

namespace GBS_MyPerformance.Identity
{
    public class EmailSender : IEmailSender
    {
        private readonly IConfiguration Configuration;
        private SmtpClient Client;
        private MailMessage MailMessage;

        public EmailSender(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public Task SendEmailAsync(string recipientEmail, string emailSubject, string emailBody)
        {
            this.Client = new SmtpClient()
            {
                Host = Configuration.GetValue<string>("Email:SmtpHost"),
                Port = Configuration.GetValue<int>("Email:SmtpPort"),
                EnableSsl = Configuration.GetValue<bool>("Email:SmtpSsl"),
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(Configuration.GetValue<string>("Email:User"), Configuration.GetValue<string>("Email:Password")),
                DeliveryMethod = SmtpDeliveryMethod.Network
            };

            MailAddress fromAddress = new MailAddress(Configuration.GetValue<string>("Email:EmailFrom"), Configuration.GetValue<string>("Email:EmailFromDisplayName"));
            MailAddress toAddress = new MailAddress(recipientEmail);
            this.MailMessage = new MailMessage(fromAddress, toAddress)
            {
                Subject = emailSubject,
                Body = emailBody,
                IsBodyHtml = true
            };

            Client.SendCompleted += OnSendCompleted;

            return Client.SendMailAsync(this.MailMessage);
        }

        private void OnSendCompleted(object sender, AsyncCompletedEventArgs e)
        {
            this.Client.Dispose();
            this.MailMessage.Dispose();
        }
    }
}
