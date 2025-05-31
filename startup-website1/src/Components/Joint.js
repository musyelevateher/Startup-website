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
    <div>
      <h1>PARTNERS</h1>
      <h3>Lorem Ipsum Dolor</h3>
      <p>Lorem ipsum, dolor sit amet consectetur
adipisicing elit.</p>
<img src={google}alt="" />
<img src={microsoft} alt="" />
<img src={air}alt="" />
<img src={facebook}alt="" />
<img src={spot} alt="" />
<button>Learn More</button>
    </div>
  );
};

export default Joint;