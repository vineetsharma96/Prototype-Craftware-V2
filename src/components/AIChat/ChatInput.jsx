import React, { useState } from 'react';

export default function ChatInput({ onSendMessage, isLoading }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSendMessage(input.trim());
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="ai-chat-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="ai-chat-input"
        placeholder="Type your question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        aria-label="Ask AI Assistant"
      />
      <button
        type="submit"
        className="ai-send-btn"
        disabled={!input.trim() || isLoading}
        aria-label="Send message"
      >
        ➔
      </button>
    </form>
  );
}