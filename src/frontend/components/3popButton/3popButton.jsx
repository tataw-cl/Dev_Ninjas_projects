import React, { useState } from 'react';
import './3popButton.css'; // Assuming you have a CSS file for styling

const Popup = () => {
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
    <div className="popup">
      <h3>Follow Us</h3> <button onclick={togglePopup}>X Close</button>
      <ul>
        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </div>
    </>
  );
};



export default Popup;
