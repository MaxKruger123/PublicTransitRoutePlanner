import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import AvailableRoutesPage from './AvailableRoutes';
import RouteInformationPage from './RouteInformationPage';
import TicketPurchasePage from './TicketPurchase';
import ConfirmationPage from './ConfirmationPage';
import routesData from './routes.json';

const App = () => {
  const [selectedRoutes, setSelectedRoutes] = useState([]);

  const onSelectRoute = (route) => {
    setSelectedRoutes([...selectedRoutes, route]);
  };

  const onUpdateQuantity = (id, quantity) => {
    const updatedRoutes = selectedRoutes.map(route => {
      if (route.id === id) {
        return { ...route, quantity };
      }
      return route;
    });
    setSelectedRoutes(updatedRoutes);
  };

  const onRemoveRoute = (id) => {
    const updatedRoutes = selectedRoutes.filter(route => route.id !== id);
    setSelectedRoutes(updatedRoutes);
  };

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
          <Route
            path="/confirmation"
            element={<ConfirmationPage purchasedItems={selectedRoutes} />}
          />
          {/* Add a default route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
