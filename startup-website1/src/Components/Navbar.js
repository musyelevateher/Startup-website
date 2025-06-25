import React, { useState } from "react";
import './Navbar.css';
import Vector from '../Collections/rainbow.png';
import Burger from '../Collections/harmburger(2).svg';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return ( 
    <nav className='navbar'>
      <div className="logo-section">
        <img src={Vector} alt="Logo" className="vec" />
        <h1 className="begin">Start</h1>
      </div>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <ul>
          <li><Link to = "/">HOME</Link></li>
          <li><Link to = "/portfolio">PORTFOLIO</Link></li>
          <li><Link to = "/service">SERVICE</Link></li>
          <li><Link to ="/contact">CONTACT</Link></li>
        </ul>
      </div>
      <img 
        src={Burger} 
        alt="Menu" 
        className='bur hamburger' 
        onClick={() => setOpen(!open)} 
      />
    </nav>
  );
}

export default Navbar;