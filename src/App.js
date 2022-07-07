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
import Leopard from './common/animal/leopard';
import Panda from './common/animal/Panda/Panda';
import Empty from './common/Empty/empty';
import Allitems from './components/Packages/packages';
import Get from './components/getinvolve/get';




function App() {
  return (
    <React.Fragment>




    <Router>
      <ScrollToTop></ScrollToTop>
    <Navbar></Navbar>
   
          
          <Routes>
            <Route path="/"element={<Home/>} />
            <Route exact path="/about"element={<About1/>} />
            <Route exact path="/gallery"element={<Gallery/>} />
            <Route exact path="/Testimonials"element={<Testimonial/>} />
            <Route exact path="/packages"element={<Allitems/>} />
            <Route exact path="/contact"element={<Contact/>} />
          
            <Route exact path="/animal/leopard"element={<Leopard/>} />
            <Route exact path="/animal/panda"element={<Panda/>} />

            <Route exact path="/animal/elephants"element={<Empty/>} />
             <Route exact path="/animal/reptiles"element={<Empty/>} />
            
          
          </Routes>
      
    
     
    
      
    </Router>

    </React.Fragment>
  );
}

export default App;
