/**
 * WhatsApp integration utilities
 */

// Read WhatsApp number from environment variable or use placeholder
const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+923001234567";

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
