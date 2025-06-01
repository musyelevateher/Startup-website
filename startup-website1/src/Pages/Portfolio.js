import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Folio from '../Collections/portfolio.svg';
import land from '../Collections/img1.svg';
import land2 from '../Collections/img2.svg';
import land3 from '../Collections/img3.svg';
import land4 from '../Collections/img4.svg';
import land5 from '../Collections/img5.svg';
import land6 from '../Collections/img6.svg';
import land7 from '../Collections/img7.svg';
import land8 from '../Collections/img8.svg';
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
      <p className="sum">Lorem ipsum, dolor sit amet consectetur<br /><span className='center-line'>
adipisicing elit.</span></p>
     {/* <p className="sum">Lorem ipsum, dolor sit amet<br /> <span className="center-line">consectetur</span><br />
<span className="center-line">adipisicing elit.</span></p> */}
      
<div className="portfolio-images">
  {/*<img src={Folio} alt="" /> */}
  <img src={land}alt="" />
  <img src={land2} alt="" />
  <img src={land3} alt="" />
  <img src={land4} alt="" />
  <img src={land5} alt="" />
  <img src={land6} alt="" />
  <img src={land7} alt="" />
  <img src={land8} alt="" />
 
</div>
 <button className="more">Learn More</button>

    </div>

<div>
  <Footer />
</div>
</div>
  );
}
 
export default Portfolio;