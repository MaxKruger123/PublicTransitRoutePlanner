import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmationPage from './ConfirmationPage';

//handles ticket purchasing. Recieves 3 props to manage the selected routes. setIsCheckingOut handles checking out process.
const TicketPurchasePage = ({ selectedRoutes, onUpdateQuantity, onRemoveRoute }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);

  //handles the quantity of tickets bought by the user
  const handleUpdateQuantity = (id, quantity) => {
    onUpdateQuantity(id, quantity);
  };

  //handles the removal of a route from their cart.
  const handleRemoveRoute = (id) => {
    onRemoveRoute(id);
  };
// displays the JSX of the chosen routes in the users car by displaying the route id, name and quantity
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

  //calculates the total sum of the amount of tickets that are about to be purchased by the user
  const calculateTotalAmount = () => {
    return selectedRoutes.reduce((total, route) => {
      return total + (route.price * route.quantity);
    }, 0);
  };

  //stores the purchased items information as well as updates checking out state
  const handleCheckout = () => {
    setPurchasedItems(selectedRoutes); // Update purchasedItems state
    setIsCheckingOut(true);
  };

  //linked to the issue I had in App.js this line was for debugging. Initially my purchases were not displaying. It displays the array of purchasedItems to ensure it was not empty.
  console.log("Purchased Items Before Rendering:", purchasedItems); // Log purchased items before rendering

  // returns the JSX of the users cart with all of the necessary information such as each ticket and their quantity aswell as the total amount due.
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
