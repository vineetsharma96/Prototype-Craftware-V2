import { BUSINESS_INFO } from '../data/businessData';

/**
 * Generates official wa.me link with encoded chat context
 */
export const createWhatsAppHandoffUrl = (userQuery, aiResponse) => {
  const phone = BUSINESS_INFO.whatsappNumber;
  
  const text = `Hello ${BUSINESS_INFO.name}, I have an inquiry.

 My Question:
"${userQuery || 'General product inquiry'}"

 AI Assistant Context:
"${aiResponse || 'Requesting additional details from human representative.'}"

Please help me with this request.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};

/**
 * Generates direct general contact link
 */
export const createDirectWhatsAppUrl = (customMessage = '') => {
  const phone = BUSINESS_INFO.whatsappNumber;
  const text = customMessage || `Hi ${BUSINESS_INFO.name}, I'm browsing your website and would like to ask a question.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};