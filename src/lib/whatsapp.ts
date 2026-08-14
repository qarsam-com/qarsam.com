/**
 * WhatsApp integration utilities
 */

export const WHATSAPP_NUMBER = "+923001234567"; // To be updated

/**
 * Generate WhatsApp link with message
 */
export function getWhatsAppLink(message?: string): string {
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodedMessage}`;
}

/**
 * Get WhatsApp link for general inquiry
 */
export function getWhatsAppInquiryLink(): string {
  return getWhatsAppLink(
    "Hi Qarsam! I'd like to discuss a project with you. Can you help?"
  );
}

/**
 * Get WhatsApp link for quote request
 */
export function getWhatsAppQuoteLink(): string {
  return getWhatsAppLink("Hi Qarsam! I'd like to request a free quote for my project.");
}
