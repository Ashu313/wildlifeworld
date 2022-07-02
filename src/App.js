import React from 'react';

import './App.css';
import Navbar from './common/Navbar/Navbar';
import Home from './components/homesection/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import About1 from './components/About/About1';
import Gallery from './components/photo/Gallery';
import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/contact/contact';
import ScrollToTop from './common/Scrolltotop/scroll';



function App() {
  return (
    <React.Fragment>




    <Router>
      <ScrollToTop></ScrollToTop>
    <Navbar></Navbar>
   
          
          <Routes>
            <Route exact path="/"element={<Home/>} />
            <Route exact path="/about"element={<About1/>} />
            <Route exact path="/gallery"element={<Gallery/>} />
            <Route exact path="/Testimonials"element={<Testimonial/>} />
            <Route exact path="/contact"element={<Contact/>} />
          

            
          
          </Routes>
      
    
     
    
      
    </Router>

    </React.Fragment>
  );
}

export default App;
