import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default sgMail;

export const sendgridConfig = {
  apiKey: process.env.SENDGRID_API_KEY,
  senderEmail: process.env.SENDGRID_SENDER_EMAIL as string,
  senderName: process.env.SENDGRID_SENDER_NAME as string, 
};