import React, { useState, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Navbar.css'; 

// --- IMPORT THE MODAL COMPONENT ---
import BookingModal from './BookingModal'; // Assuming BookingModal.jsx is in the same directory or accessible path

// Removed unused import: import Contact from './Contact';

const desktopServiceLinks = [
    { name: "Regular Services", path: "/" },
    { name: "Maintenance Services", path: "/maintenance-services" },
    { name: "Premium Services", path: "/premium-services" },
];

const mobileMenuLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" }, 
    { name: "About", path: "/about" },
    { name: "Book Now", path: "/book-now", isButton: true },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // --- MODIFICATION 1: Modal state management ---
    const [isModalOpen, setIsModalOpen] = useState(false);
    const menuRef = useRef(null);
    
    const toggleMenu = () => {
        setIsMenuOpen(prevState => {
            const newState = !prevState;
            
            if (newState) {
                gsap.set(menuRef.current, { display: 'block' });
                gsap.to(menuRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                gsap.to(menuRef.current, {
                    y: -20,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    onComplete: () => {
                        gsap.set(menuRef.current, { display: 'none' });
                    }
                });
            }
            return newState;
        });
    };
    
    // --- MODIFICATION 2: Modal Click Handler ---
    const handleBookNowClick = (e) => {
        e.preventDefault(); // Prevent link navigation if applicable
        if (isMenuOpen) {
            toggleMenu(); // Close mobile menu if open
        }
        setIsModalOpen(true); // Open the modal
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    useLayoutEffect(() => {
        gsap.set(menuRef.current, { opacity: 0, y: -20, display: 'none' });
    }, []);

    return (
        <>
            <header className="navbar">
                <Link to="/" className="logo">AR Automotive</Link> 
                
                {/* Desktop Service Navigation Links */}
                <nav className="nav-desktop-services">
                    {desktopServiceLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.path} 
                            className="nav-link"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Hamburger Icon (Always visible on desktop and mobile) */}
                <div className="nav-right-container">
                    {/* --- DESKTOP BOOK NOW BUTTON --- */}
                    {/* MODIFICATION 3: Add Desktop Book Now Button */}
                   
                    
                    <button 
                        className="hamburger-icon" 
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? '✕' : '☰'} 
                    </button>
                </div>

                {/* Mobile Menu Content (Appears below the nav bar when toggled) */}
                <nav 
                    ref={menuRef}
                    className={`nav-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
                >
                    <ul>
                        {mobileMenuLinks.map((link) => (
                            <li key={link.name}>
                                {/* --- MODIFICATION 4: Conditional Render for Mobile Book Now --- */}
                                {link.isButton ? (
                                    <button 
                                        className={'btn primary small'} 
                                        onClick={handleBookNowClick} // Calls modal handler
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link 
                                        to={link.path} 
                                        className={'mobile-nav-link'}
                                        onClick={toggleMenu} 
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            
            {/* --- MODIFICATION 5: Render the Booking Modal --- */}
            <BookingModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                // Don't pass serviceName, so it defaults to the generic title
            />
        </>
    );
};

export default Navbar;