 import React from 'react';
import Navbar from '../Components/Navbar';
import Herosection from '../Components/Herosection';
import Joint from '../Components/Joint';
import Researchers from '../Components/Researchers';
import Chat from '../Components/Chat';
import Read from '../Components/Read';
import Team from '../Components/Team';
import Footer from '../Components/Footer';
const Home = () => {
  return ( 
    <div>
      <Navbar />
      <Herosection />
      <Joint />
      <Chat />
      <Read />
      <Team />
      <Researchers />
      <Footer />
    </div>
   );
}
 
export default Home;
