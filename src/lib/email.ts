/**
 * Email service utilities
 */

export interface ContactFormData {
  name: string;
  company?: string;
  phone: string;
  email: string;
  serviceRequired: string;
  projectDetails: string;
}

/**
 * Send contact form email
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  // Implementation will be done in Phase 3
  // This is a placeholder for the API call
  console.log("Email service:", data);
}

/**
 * Format contact form data for email body
 */
export function formatContactDataForEmail(data: ContactFormData): string {
  return `
Name: ${data.name}
Company: ${data.company || "N/A"}
Phone: ${data.phone}
Email: ${data.email}
Service Required: ${data.serviceRequired}
Project Details:
${data.projectDetails}
  `;
}
