import React from 'react';
import './Footer.css'; 

// --- REACT ICON IMPORTS ---
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// --- SOCIAL MEDIA IMAGE ASSET IMPORTS ---
// Assuming these are the paths to your images in the assets folder
import facebookImage from '../assets/Facebook_logo_(square).png'; 
import twitterImage from '../assets/twitter-icon.png';
import instagramImage from '../assets/instagram-icon.png';

// --- HELPER COMPONENTS USING ICONS/IMAGES ---
const CallIcon = () => <FaPhoneAlt className="footer-icon" />;
const MailIcon = () => <FaEnvelope className="footer-icon" />;
const LocationIcon = () => <FaMapMarkerAlt className="footer-icon" />;

// Social Media Image Components
const FacebookIcon = () => <img src={facebookImage} alt="Facebook" className="footer-icon social-img" />;
const TwitterIcon = () => <img src={twitterImage} alt="Twitter" className="footer-icon social-img" />;
const InstagramIcon = () => <img src={instagramImage} alt="Instagram" className="footer-icon social-img" />;


const Footer = () => {
    // Service links based on your existing data structure
    const services = [
        "Premium Car Wash",
        "Foam Spreading",
        "Technician Working",
        "Wash Zone",
        "Automotive Servicing",
    ];

    const companyLinks = [
        "About Us",
        "Careers",
        "Blog",
        "Privacy Policy",
        "Terms & Conditions"
    ];

    return (
        <footer className="main-footer">
            <div className="footer-content-container">
                
                {/* 1. Logo and Description */}
                <div className="footer-section footer-about">
                    <h3 className="footer-logo">AR Automotive</h3>
                    <p className="footer-description">
                        Your trusted partner for professional doorstep car detailing and servicing. We bring the garage to you.
                    </p>
                    <div className="social-links">
                        <a href="#facebook" aria-label="Facebook"><FacebookIcon /></a>
                        <a href="#twitter" aria-label="Twitter"><TwitterIcon /></a>
                        <a href="#instagram" aria-label="Instagram"><InstagramIcon /></a>
                    </div>
                </div>

                {/* 2. Services Links */}
                <div className="footer-section footer-links">
                    <h3>Our Services</h3>
                    <ul>
                        {services.map((service, index) => (
                            // Using '#' as placeholder for actual routes
                            <li key={index}><a href={`#service-${index}`}>{service}</a></li>
                        ))}
                    </ul>
                </div>

                {/* 3. Quick Links / Company Info */}
                <div className="footer-section footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        {companyLinks.map((link, index) => (
                            // Using '#' as placeholder for actual routes
                            <li key={index}><a href={`#${link.toLowerCase().replace(/\s/g, '-')}`}>{link}</a></li>
                        ))}
                    </ul>
                </div>

                {/* 4. Contact Details and Address */}
                <div className="footer-section footer-contact">
                    <h3>Contact & Address</h3>
                    <address>
                        <p>
                            <LocationIcon /> 123 Car Care Lane, Auto City, 
                            <br />New Delhi, India 110001
                        </p>
                        <p><CallIcon /> <a href="tel:+919876543210">+91 98765 43210</a></p>
                        <p><MailIcon /> <a href="mailto:support@arautomotive.com">support@arautomotive.com</a></p>
                    </address>
                </div>

            </div>

            {/* Copyright Bar */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} AR Automotive. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;