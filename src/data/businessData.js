export const BUSINESS_INFO = {
  name: "CraftWave Studio",
  tagline: "Elevate Your Desk Setup to Masterpiece Level",
  description: "CraftWave Studio produces custom artisan wrist rests, coiled cables, and premium desk mats built to enhance ergonomic support and aesthetic elegance.",
  whatsappNumber: "919876543210", // Format: Country code + phone number (no plus or spaces)
  location: "Bengaluru, Karnataka, India",
  openingHours: "Monday to Saturday: 10:00 AM - 7:00 PM IST (Closed Sundays)",
  deliveryInfo: "Standard shipping takes 3-5 business days across India. Custom engraved orders take 5-7 business days for production.",
  returnPolicy: "7-day hassle-free replacement policy for manufacturing defects.",
  
  products: [
    {
      id: "prod-1",
      name: "Artisanal Walnut Wrist Rest",
      category: "Desk Accessories",
      price: "₹1,899",
      availability: "In Stock",
      description: "Precision-carved solid black walnut wrist rest with ergonomic slope and anti-slip silicone pads. Available in 60%, 75%, and full-size layouts."
    },
    {
      id: "prod-2",
      name: "Custom Resin Keycap Set",
      category: "Keyboard Gear",
      price: "₹2,499",
      availability: "In Stock (Limited Run)",
      description: "Hand-poured artisan MX keycaps featuring embedded micro-landscapes and high-clarity polish."
    },
    {
      id: "prod-3",
      name: "Minimalist Felt Desk Mat",
      category: "Desk Accessories",
      price: "₹1,299",
      availability: "In Stock",
      description: "Water-resistant merino wool blend felt mat providing smooth glide and noise dampening. Size: 900x400mm."
    },
    {
      id: "prod-4",
      name: "Coiled Aviator Cable",
      category: "Cables & Power",
      price: "₹1,599",
      availability: "Pre-order (Dispatches in 3 days)",
      description: "Double-sleeved Techflex coiled USB-C cable featuring detachable GX16 aviator connector."
    }
  ],

  faqs: [
    {
      q: "Do you offer custom sizing or timber choices?",
      a: "Yes! We accept custom timber requests (Oak, Mahogany, Walnut) and specialized dimensions via WhatsApp orders."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept UPI, Credit/Debit cards, NetBanking, and Razorpay payment links over WhatsApp."
    }
  ]
};

/**
 * Builds the strict System Instruction prompt enforcing KB grounding.
 */
export const buildSystemInstruction = () => {
  return `You are the helpful customer-support assistant for ${BUSINESS_INFO.name}.

BUSINESS INFORMATION:
- Name: ${BUSINESS_INFO.name}
- Tagline: ${BUSINESS_INFO.tagline}
- Description: ${BUSINESS_INFO.description}
- Location: ${BUSINESS_INFO.location}
- Opening Hours: ${BUSINESS_INFO.openingHours}
- Delivery: ${BUSINESS_INFO.deliveryInfo}
- Policy: ${BUSINESS_INFO.returnPolicy}
- WhatsApp Contact: +${BUSINESS_INFO.whatsappNumber}

PRODUCTS & CATALOG:
${BUSINESS_INFO.products
  .map(
    (p) =>
      `* ${p.name} (${p.category}): Price${p.price} | Status: ${p.availability} \vert{} Details:${p.description}`
  )
  .join("\n")}

FREQUENTLY ASKED QUESTIONS:
${BUSINESS_INFO.faqs.map((f) => `Q: ${f.q}\nA:${f.a}`).join("\n")}

STRICT INSTRUCTIONS:
1. Answer customer questions clearly, politely, and concisely using ONLY the business information provided above.
2. NEVER invent prices, product availability, discounts, delivery times, policies, certifications, or custom health/ergonomic claims.
3. If the requested information is unavailable in the text above, clearly state: "I don't have that specific information right now," and suggest contacting our team directly on WhatsApp.
4. Keep responses short (under 3 sentences where possible) and easy to read.
5. If the customer expresses intent to buy, customize, or submit an inquiry, summarize their request and offer to continue on WhatsApp using our direct handoff link.`;
};