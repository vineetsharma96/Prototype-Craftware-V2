import { buildSystemInstruction } from '../data/businessData';

const MODEL = import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.5-flash-lite';

/**
 * Formats app message state array into Gemini's expected multi-turn contents payload
 */
const formatMessagesForGemini = (messages) => {
  return messages
    .filter((m) => m.role === 'user' || m.role === 'assistant')
    .map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }]
    }));
};

/**
 * Sends conversation payload to either Vercel serverless function or direct client API fallback
 */
export const fetchGeminiResponse = async (conversationHistory) => {
  const contents = formatMessagesForGemini(conversationHistory);
  const systemInstruction = buildSystemInstruction();

  // 1. Production Pathway: Try calling Vercel Serverless API first
  try {
    const apiResponse = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        systemInstruction,
        model: MODEL
      })
    });

    if (apiResponse.ok) {
      const data = await apiResponse.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) return { success: true, text };
    }
  } catch {
    // Silent fail over to direct client API mode for local dev preview
  }

  // 2. Client-Side Dev/Demo Fallback Pathway
  const clientApiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!clientApiKey || clientApiKey === 'your_gemini_api_key_here') {
    throw new Error('MISSING_KEY');
  }

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${clientApiKey}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        },
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 300
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Gemini API Error');
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      throw new Error('Empty response received from AI model.');
    }

    return { success: true, text };
  } catch (err) {
    return { success: false, error: err.message };
  }
};