import React, { useState, useEffect } from 'react';

const ConfirmationPage = ({ purchasedItems }) => {
  const [showMessage, setShowMessage] = useState(false);

  // Function to handle the "Return" button click
  const handleReturn = () => {
    // Redirect the user to the available routes page
    window.location.href = '/';
  };

  // Function to simulate a delay and show the message after 2 seconds
  const simulatePayment = () => {
    setTimeout(() => {
      setShowMessage(true);
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  // Call the simulatePayment function when the component mounts
  useEffect(() => {
    simulatePayment();
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <div>
      {/* Conditionally render the message after the delay */}
      {showMessage ? (
        <>
          <h2>Payment Successful</h2>
          <h3>Details of Purchased Items:</h3>
          {/* Map over the purchasedItems prop to display each item */}
          {purchasedItems.map((item, index) => (
            <div key={index}>
              <p>ID: {item.id}</p>
              <p>Title: {item.title}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <hr />
            </div>
          ))}
          <button onClick={handleReturn}>Return to Available Routes</button>
        </>
      ) : (
        <p>Processing Payment...</p>
      )}
    </div>
  );
};

export default ConfirmationPage;
