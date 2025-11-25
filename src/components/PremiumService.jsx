import React, { useState } from 'react';
import BookingModal from './BookingModal';
import './premiumservice.css'; 

// --- 1. IMPORT IMAGES FROM SRC/ASSETS ---
// Assuming your images are directly inside the src/assets folder
import ceramicImage from '../assets/service/car_ceramic_coating.jpg';
import interiorImage from '../assets/interior_cleaning.jpg';
import correctionImage from '../assets/features_bg.jpg';
import ppfImage from '../assets/car_ppf_installation.jpg';

// --- Data for Premium Services ---
const premiumServicesData = [
    {
        id: 1,
        name: "Ceramic Pro Coating (5-Year)",
        rates: "₹25,000 - ₹55,000",
        category: "Paint Protection",
        description: "The ultimate long-term paint protection using professional-grade Ceramic Pro products. Provides deep gloss, extreme hydrophobic properties, and superior scratch resistance. Ideal for luxury SUVs, sports cars, and high-end sedans.",
        imageUrl: ceramicImage, // <--- UPDATED TO USE IMPORTED MODULE
        features: ["5-Year Warranty", "9H Hardness", "Deep Wet Look Finish"]
    },
    {
        id: 2,
        name: "Full Interior Steam & Sanitation",
        rates: "₹8,000 - ₹15,000",
        category: "Interior Detailing",
        description: "A comprehensive interior overhaul utilizing high-temperature steam to sanitize all surfaces, eliminate bacteria, and remove deeply embedded stains from carpets, leather, and upholstery. Perfect for high-cost models where hygiene and perfection are paramount.",
        imageUrl: interiorImage, // <--- UPDATED TO USE IMPORTED MODULE
        features: ["Ozone Treatment Included", "Leather Rejuvenation", "A/C Vent Sanitation"]
    },
    {
        id: 3,
        name: "Showroom-Level Paint Correction",
        rates: "₹18,000 - ₹35,000",
        category: "Restoration",
        description: "Multi-stage paint correction process (up to 3 steps of compounding and polishing) to remove heavy swirl marks, deep scratches, and oxidation, restoring the paint to a condition better than factory new. Essential before applying any long-term coating.",
        imageUrl: correctionImage, // <--- UPDATED TO USE IMPORTED MODULE
        features: ["Trained Master Technicians", "Scratch Removal Guarantee", "UV Meter Inspection"]
    },
    {
        id: 4,
        name: "High-Performance PPF Installation",
        rates: "₹80,000 - ₹2,00,000+",
        category: "Ultimate Protection",
        description: "Installation of self-healing Paint Protection Film (PPF) on full body panels. Provides an invisible layer of defense against stone chips, road debris, and minor abrasions. Recommended for supercars and premium imported vehicles.",
        imageUrl: ppfImage, // <--- UPDATED TO USE IMPORTED MODULE
        features: ["10-Year Warranty", "Self-Healing Properties", "Custom Edge Wrapping"]
    }
];

const PremiumService = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openBookingModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    return (
        <section className="premium-services-page">
            <div className="premium-hero">
                <h1> Premium Detailing & Protection Services</h1>
                <p>Exclusive care packages designed for **high-cost and top-model cars**, focusing on long-term protection, restoration, and impeccable finish.</p>
            </div>
            
            <div className="premium-grid-container">
                {premiumServicesData.map((service) => (
                    <div key={service.id} className="premium-card" onClick={() => openBookingModal(service)}>
                        
                        <div className="premium-image-placeholder">
                             <img 
                                // 2. USE THE IMPORTED MODULE VARIABLE HERE
                                src={service.imageUrl} 
                                alt={service.name} 
                                style={{ height: '200px', width: '100%', objectFit: 'cover' }} 
                            />
                        </div>

                        <div className="premium-card-content">
                            <h3 className="service-name">{service.name}</h3>
                            <p className="service-category">{service.category}</p>
                            
                            <p className="service-description-preview">{service.description.substring(0, 120)}...</p>
                            
                            <div className="service-rate-info">
                                <span className="rate-label">Starting Rate:</span>
                                <span className="rate-value">{service.rates}</span>
                            </div>
                            
                            <button className="btn secondary full-width">Book Now</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Reusable Booking Modal */}
            <BookingModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                serviceName={selectedService ? selectedService.name : "Unknown Service"}
            />
        </section>
    );
};

export default PremiumService;