import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PremiumService from './components/PremiumService';
import MaintenanceService from './components/MaintenanceService';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import "./App.css";
const App = () => {
    return (
        <Router>
            <Navbar /> 
            
            <main>
                <Routes>
    
                    <Route path="/" element={<Home />} /> 

                    <Route path="/premium-services" element={<PremiumService />} />
                    
                    <Route path="/maintenance-services" element={<MaintenanceService />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<MaintenanceService />} />
                      <Route path="/about" element={<About />} />
              
                </Routes>
            </main>

            <Footer />
            <CustomCursor />
        </Router>
    );
};

export default App;