import React from 'react';
import { useParams, Link } from 'react-router-dom';

const RouteInformationPage = ({ routes, onSelectRoute }) => {
  const { id } = useParams();
  const route = routes.find(route => route.id === id);

  if (!route) {
    return <div>Route not found</div>;
  }

  const handlePurchaseTicket = () => {
    onSelectRoute(route);
  };

  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h2>Route Information</h2>
      <p>ID: {route.id}</p>
      <p>Title: {route.title}</p>
      <p>Description: {route.description}</p>
      <p>Duration: {route.duration}</p>
      <p>Stops: {route.stops}</p>
      <p>Price: {route.price}</p>
      <Link to="/TicketPurchase">
        <button onClick={handlePurchaseTicket}>Purchase Ticket</button>
      </Link>
    </div>
  );
};

export default RouteInformationPage;
