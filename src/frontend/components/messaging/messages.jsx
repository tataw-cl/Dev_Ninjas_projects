import React, { useState } from 'react';
import './Messaging.css'; // Import the CSS file

function Messaging() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [link, setLink] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, link }]);
      setInput('');
      setLink('');
    }
  };

  return (
    <div className="messaging-container">
      <h1 className="messaging-header">Message Board</h1>
      <div className="messaging-list">
        {messages.map((msg, index) => (
          <div key={index} className="messaging-message">
            <p>{msg.text}</p>
            {msg.link && (
              <a href={msg.link} target="_blank" rel="noopener noreferrer" className="messaging-link">
                {msg.link}
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="messaging-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
          className="messaging-input"
        />
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Add a link (optional)"
          className="messaging-input"
        />
        <button onClick={handleSendMessage} className="messaging-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default Messaging;
