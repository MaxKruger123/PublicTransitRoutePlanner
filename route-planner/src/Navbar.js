import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
{/*simply displays 2 page links as a navigation bar to swap between available routes if 
the user wants to purchase more tickets and the users cart so that they may complete payment.*/}
const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/">Available Routes</Link>
        </li>
        <li>
          <Link to="/TicketPurchase">Ticket Purchase</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;