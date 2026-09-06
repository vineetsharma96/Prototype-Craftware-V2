# CraftWave Studio - Frontend & AI Integration Portfolio

A modern, responsive business website integrated with a grounded AI customer support widget powered by **Google Gemini 2.5 Flash-Lite**.

---

## 🌟 Key Features

1. **Grounded AI Knowledge Base**: Answers questions regarding products, pricing, and shipping strictly using `src/data/businessData.js`.
2. **Dual-Layer Architecture**:
   - **Production (Vercel)**: Calls `/api/chat.js` serverless route to protect Gemini API keys.
   - **Development**: Client-side fallback using `.env` for quick local setup.
3. **WhatsApp Handoff**: If the AI encounters missing data or an API error, it generates a pre-formatted `https://wa.me/` link containing the conversation context.
4. **Responsive Floating UI**: Custom CSS matching the website's dark slate palette (`#0f172a`, `#1e293b`, `#3b82f6`).

---

## 🚀 Environment Setup

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_actual_gemini_api_key
VITE_GEMINI_MODEL=gemini-2.5-flash-lite