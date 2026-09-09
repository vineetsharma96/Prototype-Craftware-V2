import React from 'react';
import { createWhatsAppHandoffUrl } from '../../services/whatsappService';

export default function ChatMessage({ message, lastUserQuery }) {
  const isUser = message.role === 'user';
  const isError = message.isError;

  return (
    <div className={`ai-message ${isUser ? 'user' : 'assistant'}`}>
      <div className={`ai-bubble ${isError ? 'error' : ''}`}>
        {message.text}

        {/* If AI response suggests handoff or error occurred, render WhatsApp CTA */}
        {!isUser && (message.showHandoff || isError) && (
          <div>
            <a
              href={createWhatsAppHandoffUrl(lastUserQuery, message.text)}
              target="_blank"
              rel="noopener noreferrer"
              className="ai-handoff-btn"
            >
              💬 Continue on WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}