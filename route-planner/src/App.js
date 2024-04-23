import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import AvailableRoutesPage from './AvailableRoutes';
import RouteInformationPage from './RouteInformationPage';
import TicketPurchasePage from './TicketPurchase';
import ConfirmationPage from './ConfirmationPage';
import routesData from './routes.json';

{/*declares state variable using the useState hook */}
const App = () => {
  const [selectedRoutes, setSelectedRoutes] = useState([]);
//updates selected routes state and appends the new route object.
  const onSelectRoute = (route) => {
    setSelectedRoutes([...selectedRoutes, route]);
  };

  //maps over the array and creates a new route if the id's match with an the updates quantity.
  const onUpdateQuantity = (id, quantity) => {
    const updatedRoutes = selectedRoutes.map(route => {
      if (route.id === id) {
        return { ...route, quantity };
      }
      return route;
    });
    setSelectedRoutes(updatedRoutes);
  };

  //creates functionality to remove a route from cart and then updates cart
  const onRemoveRoute = (id) => {
    const updatedRoutes = selectedRoutes.filter(route => route.id !== id);
    setSelectedRoutes(updatedRoutes);
  };

  {/*this code segnments returns the JSX that sets up the routing between different pages. 
There was an isssue I was having here where I was attempting to use a Link component to navigate 
to the confirmation page with the purchased Items as a state. This did not work so I instead rendered 
the confirmation page directly and passed the purchasedItems as a prop*/}

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<AvailableRoutesPage routes={routesData} />} />
          <Route path="/route/:id" element={<RouteInformationPage routes={routesData} onSelectRoute={onSelectRoute} />} />
          <Route
            path="/TicketPurchase"
            element={<TicketPurchasePage selectedRoutes={selectedRoutes} onUpdateQuantity={onUpdateQuantity} onRemoveRoute={onRemoveRoute} />}
          />
          {/*This is where I resvolved my issue */}
          <Route
            path="/confirmation"
            element={<ConfirmationPage purchasedItems={selectedRoutes} />}
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
