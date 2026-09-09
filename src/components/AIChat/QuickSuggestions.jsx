import React from 'react';

const SUGGESTIONS = [
  "Product information",
  "Price enquiry",
  "Availability",
  "Delivery & Shipping",
  "Contact details"
];

export default function QuickSuggestions({ onSelect }) {
  return (
    <div className="ai-suggestions-container" aria-label="Quick prompts">
      {SUGGESTIONS.map((text, idx) => (
        <button
          key={idx}
          className="ai-chip"
          onClick={() => onSelect(text)}
          type="button"
        >
          {text}
        </button>
      ))}
    </div>
  );
}