"use server";

import { sendContactFormEmails } from "@/services/contact-us";
import { ContactFormInputs } from "@/types/contact-us";

export async function submitContactForm(data: ContactFormInputs) {
  try {
    await sendContactFormEmails(data);
    return { success: true, message: "Thank you for your message!" };
  } catch (error) {
    console.error("Server action error:", error);
    return { success: false, message: "Failed to send message. Please try again." };
  }
}
