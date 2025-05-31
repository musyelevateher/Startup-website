import React from 'react';
import './Researchers.css';
import peg from '../Collections/peg.svg';
import richard from '../Collections/richard.svg';
import stola from '../Collections/stola.svg';
import bray from '../Collections/bray.svg';
const Researchers = () => {
  return ( 
    <div>
      <div className="researchers-container">
      <img src={peg} alt="" />
      <h4>Peg Legge</h4>
      <h6>CEO</h6>
      <img src={richard} alt="" />
      <h4>Richard Guerra</h4>
      <h6>CTO</h6>
      <img src={stola} alt="" />
      <h4>Alexandra Stola</h4>
      <h6>DESIGNER</h6>
      <img src={bray} alt="" />
      <h4>Janet Bray</h4>
      <h6>DEVELOPER</h6>
      </div>
  <button>Learn More</button>
    </div>
    

   );
}
    
export default Researchers;