import React from 'react';
import { useParams, Link } from 'react-router-dom';

//defines react component, taking in 2 props and uses useParams hook to extract the id parameter. \\
const RouteInformationPage = ({ routes, onSelectRoute }) => {
  const { id } = useParams();
  const route = routes.find(route => route.id === id);

  //returns message if route was not founr, this is error handling
  if (!route) {
    return <div>Route not found</div>;
  }


//triggered when user purchases ticket and passes the route object as an argument. 
  const handlePurchaseTicket = () => {
    onSelectRoute(route);
  };


// returns the routes infromation after clicking on "view details" as JSX so the user can see all the specifics of their chosen route. They are then allowed to purchase a ticket.
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
