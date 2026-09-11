import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import QuickSuggestions from './QuickSuggestions';
import { fetchGeminiResponse } from '../../services/geminiService';
import { BUSINESS_INFO } from '../../data/businessData';
import './AIChat.css';

const INITIAL_GREETING = {
  id: 'msg-init',
  role: 'assistant',
  text: `Hi! 👋 I'm your ${BUSINESS_INFO.name} AI assistant. How can I help you today?`
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_GREETING]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUserQuery, setLastUserQuery] = useState('');
  
  const chatEndRef = useRef(null);

  // Auto-scroll to latest message on update
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async (text) => {
    const userMsg = { id: `user-${Date.now()}`, role: 'user', text };
    const updatedHistory = [...messages, userMsg];
    
    setMessages(updatedHistory);
    setLastUserQuery(text);
    setIsLoading(true);

    try {
      const res = await fetchGeminiResponse(updatedHistory);

      if (res.success) {
        // Detect if assistant output indicates missing info to append WhatsApp handoff option
        const needsHandoff = 
          res.text.toLowerCase().includes("don't have that") || 
          res.text.toLowerCase().includes("whatsapp") ||
          res.text.toLowerCase().includes("unavailable");

        setMessages((prev) => [
          ...prev,
          {
            id: `asst-${Date.now()}`,
            role: 'assistant',
            text: res.text,
            showHandoff: needsHandoff
          }
        ]);
      } else {
        throw new Error(res.error || 'Failed to fetch response');
      }
    } catch (err) {
      let errorText = "I'm having trouble connecting to the AI service right now.";
      if (err.message === 'MISSING_KEY') {
        errorText = "AI API key is missing. Please set VITE_GEMINI_API_KEY in your .env file or deploy via Vercel.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: 'assistant',
          text: errorText,
          isError: true
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([INITIAL_GREETING]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          className="ai-widget-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Customer Assistant"
        >
          <span className="ai-trigger-badge">🤖</span>
          <span>Ask AI Assistant</span>
        </button>
      )}

      {/* Floating Chat Modal Panel */}
      {isOpen && (
        <div className="ai-chat-panel" role="dialog" aria-label="AI Customer Support Chat">
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-header-profile">
              <div className="ai-avatar">
                🤖
                <span className="ai-online-indicator" title="Online"></span>
              </div>
              <div>
                <div className="ai-header-title">{BUSINESS_INFO.name} Support</div>
                <div className="ai-header-subtitle">Powered by Gemini AI</div>
              </div>
            </div>
            <div className="ai-header-actions">
              <button
                className="ai-icon-btn"
                onClick={handleClearChat}
                title="Clear conversation"
                aria-label="Clear conversation"
              >
                🗑️
              </button>
              <button
                className="ai-icon-btn"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Chat Body / Messages */}
          <div className="ai-chat-body">
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg}
                lastUserQuery={lastUserQuery}
              />
            ))}

            {isLoading && (
              <div className="ai-message assistant">
                <div className="ai-typing-indicator">
                  <div className="ai-dot"></div>
                  <div className="ai-dot"></div>
                  <div className="ai-dot"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestions */}
          <QuickSuggestions onSelect={handleSend} />

          {/* Input Bar */}
          <ChatInput onSendMessage={handleSend} isLoading={isLoading} />
        </div>
      )}
    </>
  );
}