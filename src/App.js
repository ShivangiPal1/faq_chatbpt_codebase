import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {/* Embedding iframe for chatbot */}
        <iframe
          src="https://copilotstudio.microsoft.com/environments/Default-2c5bdaf4-8ff2-4bd9-bd54-7c50ab219590/bots/crec9_cookie/webchat?__version__=2"
          frameBorder="0"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '10px', // Makes the iframe edges rounded
            border: 'none', // Removes any border
          }}
          title="Embedded Chatbot"
        ></iframe>
      </div>
    </div>
  );
};

export default App;
