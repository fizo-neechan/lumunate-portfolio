import { AdminEmailProps, AdminNotification } from "@/emails/contact/admin-notification";
import { UserAcknowledgment, UserEmailProps } from "@/emails/contact/user-acknowledgement";
import { sendgridConfig } from "@/lib/sendgrid";
import { ContactFormInputs } from "@/types/contact-us";
import { EmailError, sendEmail } from "@/utils/send-email";
import { render } from "@react-email/render";

export async function sendContactFormEmails(data: ContactFormInputs) {
  sendAcknowledgementEmail(data.email, data);
  sendAdminNotificationEmail(data);
}

async function sendAcknowledgementEmail(email: string, data: UserEmailProps): Promise<string> {
  try {
    const html = await render(UserAcknowledgment(data));

    return await sendEmail(html, {
      to: email,
      subject: "Thank you for contacting Lumunate.",
    });
  } catch (error) {
    if (error instanceof EmailError) {
      throw error;
    }
    throw new EmailError("Failed to prepare verification email", error);
  }
}

async function sendAdminNotificationEmail(data: AdminEmailProps): Promise<string> {
  try {
    const html = await render(AdminNotification(data));

    return await sendEmail(html, {
      to: sendgridConfig.senderEmail,
      subject: "New Contact Form Submission",
    });
  } catch (error) {
    if (error instanceof EmailError) {
      throw error;
    }
    throw new EmailError("Failed to prepare client receive email", error);
  }
}
