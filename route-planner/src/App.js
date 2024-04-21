import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import AvailableRoutesPage from './AvailableRoutes';
import RouteInformationPage from './RouteInformationPage';
import routesData from './routes.json';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<AvailableRoutesPage routes={routesData} />} />
          <Route path="/route/:id" element={<RouteInformationPage routes={routesData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;