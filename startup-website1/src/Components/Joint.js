import React from 'react';
import './Joint.css'; 
import google from 
'../Collections/google.svg'; 
import microsoft from '../Collections/microsoft.svg';
import air from '../Collections/air.svg';
import facebook from '../Collections/facebook(2).svg';
import spot from '../Collections/spot.svg';

const Joint = () => {
  return (
    <div className="joint">
      <h1 className="par">PARTNERS</h1>
      <h3 className="rem">Lorem Ipsum Dolor</h3>
      <p className="sum">Lorem ipsum, dolor sit amet consectetur<br /><span className='center-line'>
adipisicing elit.</span></p>
      <div className="joint-images">
        <img src={google} alt="" />
        <img src={microsoft} alt="" />
        <img src={air} alt="" />
        <img src={facebook} alt="" />
        <img src={spot} alt="" />
      </div>
      <button className="more">Learn More</button>
    </div>
  );
};

export default Joint;