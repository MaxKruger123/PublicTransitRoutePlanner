import React from 'react';
import { Link } from 'react-router-dom';

const AvailableRoutesPage = ({ routes }) => {
  return (
    <div>
      <h2>Available Routes</h2>
      {routes.map(route => (
        <div key={route.id}>
          <p>{route.title}</p>
          <Link to={`/route/${route.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AvailableRoutesPage;