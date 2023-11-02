import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import NavbarSimple from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
       <NavbarSimple /> 
      <Hero /> 
      <Footer />
    </div>
  );
};

export default App;