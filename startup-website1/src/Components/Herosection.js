import React from 'react';
import './Herosection.css';
import picture from '../Collections/Group(1).svg'
const Herosection = () => {
  return (
    <section className="hero">
      <img src={picture} alt="Hero Illustration" className="hero-image" />
      <div className="hero-content"> 
      <h1 className="we">WELCOME</h1>
      <h4 className="lo1">Lorem ipsum dolor sit amet <span className="sec">consectetur</span> </h4>
      <p className="ip">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
      <button>Explore</button>
      </div>
    </section>
  );
};

export default Herosection;