export const BUSINESS_INFO = {
  name: "CraftWave Systems",
  tagline: "High-Performance Computing Hardware & Mechanical Keyboard Peripherals",
  description: "CraftWave Systems designs precision CNC aluminum mechanical keyboards, Hall-effect rapid-trigger controllers, Thunderbolt 4 docks, and high-performance computing peripherals.",
  whatsappNumber: "919650022810", // Format: Country code + phone number (no plus or spaces)
  location: "Janakpuri, New Delhi, India",
  openingHours: "Monday to Saturday: 10:00 AM - 7:00 PM IST (Closed Sundays)",
  deliveryInfo: "Express insured shipping takes 2-4 business days across India. Custom-tuned switch & firmware orders ship in 4-6 business days.",
  returnPolicy: "1-year comprehensive hardware warranty and 7-day hassle-free replacement policy for manufacturing defects.",

  products: [
    {
      id: "prod-1",
      name: "Apex Pro 65% CNC Aluminum Keyboard",
      category: "Keyboards & Keypads",
      price: "₹14,999",
      availability: "In Stock",
      description: "Precision 5-axis CNC 6063 aluminum unibody, gasket mounted, hot-swappable PCB with per-key RGB and QMK/VIA firmware."
    },
    {
      id: "prod-2",
      name: "Magnetic Hall-Effect Rapid Trigger Keypad",
      category: "Keyboards & Keypads",
      price: "₹6,499",
      availability: "In Stock",
      description: "Contactless magnetic switches with 0.1mm-4.0mm adjustable actuation, 8000Hz ultra-polling, and dynamic rapid trigger."
    },
    {
      id: "prod-3",
      name: "Quantum 40Gbps Thunderbolt 4 Studio Dock",
      category: "Docks & Connectivity",
      price: "₹18,499",
      availability: "In Stock",
      description: "Dual 4K 144Hz / single 8K output, 100W GaN power delivery, 2.5G Ethernet, and UHS-II high-speed card reader."
    },
    {
      id: "prod-4",
      name: "Programmable OLED Rotary Macro Deck",
      category: "Controllers & Macro Decks",
      price: "₹5,299",
      availability: "In Stock",
      description: "9 hot-swappable mechanical switches, dual CNC rotary encoders, live CPU/RAM OLED telemetry, and RP2040 processor."
    },
    {
      id: "prod-5",
      name: "Double-Sleeved GX16 Coiled Aviator Cable",
      category: "Cables & Power",
      price: "₹1,899",
      availability: "In Stock",
      description: "Heavy-duty Techflex PET sleeving, 4-pin chrome GX16 detachable aviator connector, gold-plated USB-C with shielding."
    },
    {
      id: "prod-6",
      name: "Carbon Fiber 49g 4K Wireless Mouse",
      category: "Peripherals",
      price: "₹7,999",
      availability: "In Stock (Batch 2)",
      description: "Ultra-lightweight genuine carbon fiber unibody, PAW3395 26,000 DPI sensor, Nordic 52840 MCU, and 4000Hz wireless dongle."
    }
  ],

  faqs: [
    {
      q: "Do you support custom QMK or VIA firmware flashing?",
      a: "Yes! All our keyboards and macro decks ship with open-source QMK/VIA compatibility and on-the-fly web configurator support."
    },
    {
      q: "How does the Hall Effect Rapid Trigger switch work?",
      a: "Our contactless magnetic sensors measure key travel continuously with 0.1mm accuracy, resetting instantly upon release without mechanical debounce delay."
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