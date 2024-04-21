import React from 'react';

const AvailableRoutesPage = ({ routes }) => {
  return (
    <div>
      <h2>Available Routes</h2>
      <ul>
        {routes.map(route => (
          <li key={route.id}>
            <a href={`/route/${route.id}`}>{route.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableRoutesPage;