import React from 'react';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
           <Route path="/portfolio" element={<Portfolio/>}/>  
           <Route path="/service"  element={<Service/>}/>
           <Route path='/contact' element={<Contact/>}/>
          <Route />
        </Routes>

      </Router>
       
    </div>
  );
}

export default App;
