import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div>
      {/* Chatbot Floating Button with animated message */}
      <div className="chatbot-float-container">
        <button
          className="chatbot-toggle-btn"
          onClick={toggleChatbot}
        >
          <img
            src="/images/cookie.png" // Adjust path as needed
            alt="Chatbot"
            style={{ width: '65px', height: '65px' }}
          />
        </button>

        {/* Animated Message */}
        {!isChatbotOpen && <div className="chatbot-message">How can I help you?</div>}
      </div>

      {/* Chatbot Container */}
      {isChatbotOpen && (
        <div className="chatbot-container">
          <div className="chat-window">
            <iframe
              key={Date.now()} // Ensures the iframe reloads each time
              src="https://copilotstudio.microsoft.com/environments/Default-2c5bdaf4-8ff2-4bd9-bd54-7c50ab219590/bots/crec9_cookie/webchat?__version__=2"
              frameBorder="0"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                border: 'none',
              }}
              title="Embedded Chatbot"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
