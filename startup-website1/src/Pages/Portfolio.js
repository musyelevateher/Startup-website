import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Folio from '../Collections/portfolio.svg';
import './Portfolio.css';

const Portfolio = () => {
  return ( 
  <div>
    <div>
      <Navbar />
    </div>
    <div className='portfolio-contents'>
      <h1 className='portfolio-heading'>WORKS</h1>
      <h2 className="portfolio">Portfolio</h2>
      <p className="sum">Lorem ipsum, dolor sit amet<br /> <span className="center-line">consectetur</span><br />
<span className="center-line">adipisicing elit.</span></p>
      
<div className="portfolio-images">
  <img src={Folio} alt="" />
  <button className="more">Learn More</button>

</div>
    </div>

<div>
  <Footer />
</div>
</div>
  );
}
 
export default Portfolio;