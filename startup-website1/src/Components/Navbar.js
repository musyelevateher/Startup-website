import React from 'react';
import './Navbar.css';
import Vector from '../Collections/rainbow.png';
import Burger from '../Collections/harmburger(2).svg';


const Navbar = () => {
  return ( 
    
    <nav className='navbar'>
     <img src={Vector} alt="" className="vec" />
     <h1 className="begin">Start</h1>
     <img src={Burger} alt="" className='bur' />
     
    </nav>

     );
}
 
export default Navbar;