import React, { useState } from 'react';
import BookingModal from './BookingModal'; // Reuse the existing Booking Modal
import './maintain.css'; 

// --- 1. IMPORT IMAGES FROM SRC/ASSETS ---
import oilChangeImage from '../assets/oil_change.jpg';
import syntheticOilImage from '../assets/service/full_synthetic_oil.jpg';
import coolantFlushImage from '../assets/service/coolant_flush.jpg';
import brakePadsImage from '../assets/brake_pads.jpg';
import rotorSkimmingImage from '../assets/rotor_skimming.jpg';
import suspensionCheckImage from '../assets/service/suspension_check.jpg';
import checkEngineImage from '../assets/service/check_engine_light.jpg';
import batteryTestImage from '../assets/battery_test.jpg';

// --- Data for Maintenance Services (Structured by Category) ---
const maintenanceServicesData = {
    'Essential Fluid Service': [
        {
            id: 101,
            name: "Standard Oil Change",
            rates: "₹1,800 - ₹3,500",
            details: "High-quality synthetic blend oil, filter replacement, and 21-point vehicle check. Suitable for most standard sedans.",
            imageUrl: oilChangeImage, // <--- UPDATED
        },
        {
            id: 102,
            name: "Full Synthetic Oil Change",
            rates: "₹4,500 - ₹8,000",
            details: "Premium fully synthetic oil, top-tier filter, and comprehensive fluid level top-up. Recommended for performance and luxury vehicles.",
            imageUrl: syntheticOilImage, // <--- UPDATED
        },
        {
            id: 103,
            name: "Coolant Flush & Replacement",
            rates: "₹2,500 - ₹5,000",
            details: "Complete system flush to remove contaminants, followed by refill with OEM-recommended long-life coolant.",
            imageUrl: coolantFlushImage, // <--- UPDATED 



        },
    ],
    'Brake & Suspension': [
        {
            id: 201,
            name: "Brake Pad Replacement (Front)",
            rates: "₹3,000 - ₹6,500",
            details: "Installation of high-performance ceramic brake pads and rotor inspection. Price is for labor and parts.",
            imageUrl: brakePadsImage, // <--- UPDATED
        },
        {
            id: 202,
            name: "Rotor Skimming/Replacement",
            rates: "₹1,500 - ₹4,000 / rotor",
            details: "Inspection of brake rotors; skimming to correct warpage or full replacement if thickness is below safety limits. " + "",
            imageUrl: rotorSkimmingImage, // <--- UPDATED
        },
        {
            id: 203,
            name: "Suspension Inspection & Tuning",
            rates: "₹1,200 (Inspection Fee)",
            details: "Detailed check of shocks, struts, and bushings. Includes a road test and estimate for necessary repairs/tuning. " + "",
            imageUrl: suspensionCheckImage, // <--- UPDATED
        },
    ],
    'Diagnostics & Electrical': [
        {
            id: 301,
            name: "Check Engine Light Diagnosis",
            rates: "₹800 - ₹1,500",
            details: "Use of professional OBD-II scanners to pull and analyze error codes. Includes a brief technical report. " + "",
            imageUrl: checkEngineImage, // <--- UPDATED
        },
        {
            id: 302,
            name: "Battery Health Check & Service",
            rates: "₹500 (Check Only)",
            details: "Testing battery voltage, cranking amps, and alternator output. Includes terminal cleaning and corrosion prevention.",
            imageUrl: batteryTestImage, // <--- UPDATED
        },
    ]
};

const MaintenanceService = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [activeCategory, setActiveCategory] = useState(Object.keys(maintenanceServicesData)[0]);

    const openBookingModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    return (
        <section className="maintenance-services-page">
            <div className="maintenance-hero">
                <h1> Essential Car Maintenance Services</h1>
                <p>Keep your vehicle running smoothly, efficiently, and safely with our comprehensive range of essential maintenance services. Quality parts and certified technicians, guaranteed.</p>
            </div>

            {/* Category Tabs */}
            <div className="maintenance-tabs-container">
                {Object.keys(maintenanceServicesData).map((category) => (
                    <button
                        key={category}
                        className={`maintenance-tab ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Service Grid for Active Category */}
            <div className="maintenance-grid-container">
                {maintenanceServicesData[activeCategory].map((service) => (
                    <div 
                        key={service.id} 
                        className="maintenance-card" 
                        onClick={() => openBookingModal(service)}
                    >
                        <div className="maintenance-image-placeholder">
                            {/* 2. USE THE IMPORTED MODULE VARIABLE HERE */}
                            <img 
                                src={service.imageUrl} 
                                alt={service.name} 
                                style={{ height: '180px', width: '100%', objectFit: 'cover' }} 
                            />
                        </div>

                        <div className="maintenance-card-content">
                            <h3 className="service-name">{service.name}</h3>
                            <p className="service-details">{service.details}</p>
                            
                            <div className="service-rate-info">
                                <span className="rate-label">Starting From:</span>
                                <span className="rate-value">{service.rates}</span>
                            </div>
                            
                            <button className="btn secondary full-width">View Details & Book</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Reusable Booking Modal */}
            <BookingModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                serviceName={selectedService ? selectedService.name : "Unknown Maintenance Service"}
            />
        </section>
    );
};

export default MaintenanceService;