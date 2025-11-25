import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './booking.css'; 

// --- MODIFICATION: Destructure serviceName with a default value ---
const BookingModal = ({ isOpen, onClose, serviceName }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            // GSAP to animate the modal open
            gsap.to(modalRef.current, { 
                opacity: 1, 
                scale: 1, 
                duration: 0.3, 
                ease: "back.out(1.2)",
                pointerEvents: 'auto' 
            });
            document.body.style.overflow = 'hidden'; 
        } else {
            // GSAP to animate the modal close
            gsap.to(modalRef.current, { 
                opacity: 0, 
                scale: 0.8, 
                duration: 0.2, 
                ease: "power2.inOut",
                pointerEvents: 'none'
            });
            document.body.style.overflow = 'auto'; 
        }
    }, [isOpen]);

    // Render nothing if the modal is closed (but GSAP handles display)
    if (!isOpen && modalRef.current && gsap.getProperty(modalRef.current, 'opacity') === 0) return null;

    // --- LOGIC FOR GENERIC/SPECIFIC TITLES ---
    const isGenericBooking = !serviceName || serviceName === "Unknown Service" || serviceName === "General Booking";
    const modalTitle = isGenericBooking ? "General Service Enquiry" : "Book Your Premium Service";
    const serviceDisplay = isGenericBooking ? "General Enquiry" : `**${serviceName}**`;

    return (
        <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
            <div 
                ref={modalRef} 
                className="booking-modal-content" 
                onClick={(e) => e.stopPropagation()} 
            >
                <button className="close-button" onClick={onClose}>✕</button>
                
                {/* --- UPDATED TITLE --- */}
                <h2>{modalTitle}</h2> 
                
                {/* --- UPDATED SERVICE NAME DISPLAY --- */}
                <p className="modal-service-name">Service: {serviceDisplay}</p>
                
                <p className="modal-info">
                    You've selected a **{isGenericBooking ? 'general enquiry' : 'premium-tier service'}**. Please provide your details, and one of our dedicated **Master Technicians** will contact you within **1 hour** to discuss your needs and schedule the appointment.
                </p>

                <form className="booking-form">
                    <input type="text" placeholder="Your Full Name" required />
                    <input type="tel" placeholder="Mobile Number" required />
                    <input type="email" placeholder="Email Address" required />
                    <textarea 
                        placeholder={isGenericBooking ? "Vehicle Model & Service Required (e.g., Oil change, Brake Inspection)" : "Vehicle Model (e.g., Mercedes S-Class, BMW 7 Series) & Specific Needs"}
                    ></textarea>
                    
                    <button type="submit" className="btn primary full-width modal-submit">
                        Confirm Enquiry
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;