import react from "react";
import './Service.css';
import Basic from '../Collections/basic.svg';
import Plus from '../Collections/plus.svg';
import Pro from '../Collections/pro.svg';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Service = () => {
  return ( 
    <>
    <Navbar />

    <div className="service">
      <img src={Basic} alt="" />
      <img src={Plus} alt="" />
      <img src={Pro} alt="" />

    </div>
    <Footer />
    </>
    
   );
}
 
export default Service;