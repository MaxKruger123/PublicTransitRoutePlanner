import React from 'react';

const Notification = ({ details, onClose }) => {
  return (
    <div className="notification-container">
      <div className="notification">
        <h2>Thank you for your purchase!</h2>
        <p>{details}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Notification;