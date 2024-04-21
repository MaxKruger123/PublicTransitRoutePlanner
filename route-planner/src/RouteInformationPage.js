import React from 'react';
import { useParams } from 'react-router-dom';

const RouteInformationPage = ({ routes }) => {
  const { id } = useParams();
  const route = routes.find(route => route.id === parseInt(id));

  if (!route) {
    return <div>Route not found</div>;
  }

  return (
    <div>
      <h2>Route Information</h2>
      <p>ID: {route.id}</p>
      <p>Title: {route.title}</p>
      <p>Description: {route.description}</p>
      <p>Duration: {route.duration}</p>
      <p>stops: {route.stops}</p>
      <p>price: {route.price}</p>
      
      {/* Add more details as needed */}
    </div>
  );
};

export default RouteInformationPage;