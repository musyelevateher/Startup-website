import React from 'react';
import './Herosection.css';
import picture from '../Collections/Group(1).svg'
const Herosection = () => {
  return (
    <section className="hero">
      <img src={picture} alt="Hero Illustration" className="hero-image" />
      <hr />
      <h1>WELCOME</h1>
      <h4>Lorem ipsum dolor sit amet consectetur </h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
      <button>Explore</button>
    </section>
  );
};

export default Herosection;