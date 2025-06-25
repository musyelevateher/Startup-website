import React from 'react';
import './Researchers.css';
import peg from '../Collections/peg.svg';
import richard from '../Collections/richard.svg';
import stola from '../Collections/stola.svg';
import bray from '../Collections/bray.svg';
const Researchers = () => {
  return ( 
    <div> 
      <div className="research-parent">
        <div className="researcher-box">
          <img src={peg} alt="" />
          <h4 className="peg">Peg Legge</h4>
          <h6 className="prof">CEO</h6>
        </div>
        <div className="researcher-box">
          <img src={richard} alt="" />
          <h4 className="peg">Richard Guerra</h4>
          <h6 className="prof">CTO</h6>
        </div>
        <div className="researcher-box">
          <img src={stola} alt="" />
          <h4 className="peg">Alexandra Stola</h4>
          <h6 className="prof">DESIGNER</h6>
        </div>
        <div className="researcher-box">
          <img src={bray} alt="" />
          <h4 className="peg">Janet Bray</h4>
          <h6 className="prof">DEVELOPER</h6>
      </div>
 {/* <button className="learn">Learn More</button> */}


      </div>
      <button className='learn'>View Team</button>

        
</div>     
        
    

);
}
    
export default Researchers;