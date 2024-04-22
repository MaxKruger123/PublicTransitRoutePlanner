import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmationPage from './ConfirmationPage';

const TicketPurchasePage = ({ selectedRoutes, onUpdateQuantity, onRemoveRoute }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);

  const handleUpdateQuantity = (id, quantity) => {
    onUpdateQuantity(id, quantity);
  };

  const handleRemoveRoute = (id) => {
    onRemoveRoute(id);
  };

  const renderSelectedRoutes = () => {
    return selectedRoutes.map(route => (
      <div key={route.id}>
        <p>{route.title}</p>
        <p>Quantity: 
          <input 
            type="number" 
            min="1" 
            value={route.quantity} 
            onChange={(e) => handleUpdateQuantity(route.id, parseInt(e.target.value))} 
          />
        </p>
        <button onClick={() => handleRemoveRoute(route.id)}>Remove</button>
      </div>
    ));
  };

  const calculateTotalAmount = () => {
    return selectedRoutes.reduce((total, route) => {
      return total + (route.price * route.quantity);
    }, 0);
  };

  const handleCheckout = () => {
    setPurchasedItems(selectedRoutes); // Update purchasedItems state
    setIsCheckingOut(true);
  };

  console.log("Purchased Items Before Rendering:", purchasedItems); // Log purchased items before rendering

  return (
    <div>
      <h2>Ticket Purchase</h2>
      {!selectedRoutes || selectedRoutes.length === 0 ? (
        <p>No tickets selected</p>
      ) : (
        <>
          {renderSelectedRoutes()}
          <p>Total Amount Due: ${calculateTotalAmount().toFixed(2)}</p>
          <Link
  to={{
    pathname: '/confirmation',
    state: { purchasedItems: selectedRoutes }
  }}
>
  Proceed to Confirmation
</Link>
          {/* Render the Link to the confirmation page with purchasedItems as a state */}
          {purchasedItems.length > 0 && <Link to={{ pathname: '/confirmation', state: { purchasedItems } }}>Proceed to Confirmation</Link>}
        </>
      )}
    </div>
  );
};

export default TicketPurchasePage;
