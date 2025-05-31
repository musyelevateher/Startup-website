import React from 'react';
import './Read.css';
import reader from '../Collections/reader.svg';

const Read = () => {
  return (
    <div>
      <img src={reader} alt="Reader Icon" className="reader-icon" />
      
      <h2 className="sit">Lorem ipsum dolor sit amet consectetur </h2>
      <p className="dolor">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
      <button className="learn">Learn More</button>
    </div>
  );
};

export default Read;