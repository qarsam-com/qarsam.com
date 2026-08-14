/**
 * Email service for sending contact form submissions
 * Uses nodemailer for SMTP-based email delivery
 */

import nodemailer from "nodemailer";

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: {
    name: string;
    email: string;
  };
}

let transporter: nodemailer.Transporter | null = null;

/**
 * Initialize email transporter from environment variables
 */
function getEmailTransporter(): nodemailer.Transporter | null {
  // Return cached transporter if already initialized
  if (transporter) {
    return transporter;
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  // If email is not configured, return null
  if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
    console.warn(
      "Email service not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASSWORD environment variables.",
    );
    return null;
  }

  const smtpSecure = process.env.SMTP_SECURE === "true";

  try {
    transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    return transporter;
  } catch (error) {
    console.error("Failed to initialize email transporter:", error);
    return null;
  }
}

export interface ContactFormEmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  serviceRequired?: string;
  projectDetails?: string;
}

/**
 * Send contact form email to the admin email address
 */
export async function sendContactFormEmail(
  data: ContactFormEmailData,
): Promise<{ success: boolean; error?: string }> {
  const transporter = getEmailTransporter();

  if (!transporter) {
    return {
      success: false,
      error: "Email service is not configured. Please try again later.",
    };
  }

  const destinationEmail = process.env.CONTACT_FORM_EMAIL;
  const fromName = process.env.SMTP_FROM_NAME || "Qarsam Contact Form";
  const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;

  if (!destinationEmail || !fromEmail) {
    console.error(
      "Contact form email not configured. Set CONTACT_FORM_EMAIL and SMTP_FROM_EMAIL.",
    );
    return {
      success: false,
      error: "Email configuration is incomplete. Please try again later.",
    };
  }

  const emailBody = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Company: ${data.company || "Not provided"}
Service Required: ${data.serviceRequired || "Not specified"}

Subject: ${data.subject}

Message:
${data.message}

---
Project Details:
${data.projectDetails || "No additional details provided"}
  `.trim();

  try {
    await transporter.sendMail({
      from: `${fromName} <${fromEmail}>`,
      to: destinationEmail,
      replyTo: data.email,
      subject: `New Contact Form Submission: ${data.subject}`,
      text: emailBody,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <div style="border-top: 2px solid #007bff; padding-top: 20px;">
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone || "Not provided")}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company || "Not provided")}</p>
    <p><strong>Service Required:</strong> ${escapeHtml(data.serviceRequired || "Not specified")}</p>
  </div>
  
  <div style="background-color: #f5f5f5; padding: 15px; margin-top: 20px; border-radius: 5px;">
    <h3 style="margin-top: 0; color: #333;">Subject: ${escapeHtml(data.subject)}</h3>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
  </div>
  
  ${
    data.projectDetails
      ? `
  <div style="background-color: #f0f8ff; padding: 15px; margin-top: 20px; border-radius: 5px;">
    <h4 style="margin-top: 0; color: #333;">Project Details:</h4>
    <p>${escapeHtml(data.projectDetails).replace(/\n/g, "<br />")}</p>
  </div>
  `
      : ""
  }
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
    <p>This email was sent from the Qarsam website contact form.</p>
  </div>
</div>
      `.trim(),
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return {
      success: false,
      error:
        "Failed to send email. Please check your configuration and try again.",
    };
  }
}

/**
 * Simple HTML escape function for security
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
