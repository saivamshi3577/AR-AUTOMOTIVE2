import React, { useState } from 'react';
// Import React Icons for a professional look
import { MdLocationOn, MdEmail, MdPhone, MdAccessTime } from 'react-icons/md';
import './contact.css'; 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert(`Thank you, ${formData.name}! We have received your message and will be in touch shortly.`);
        // Reset form after submission
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    // Placeholder Google Maps embed URL for a generic location (Hyderabad)
    // IMPORTANT: Replace the 'src' with your actual workshop's embed code for production.
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.50426210712!2d78.3697926!3d17.4300302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a105f9c567%3A0xc078864a78c005f2!2sGachibowli%2C%20Hyderabad%2C%20Telangana%20500032!5e0!3m2!1sen!2sin!4v1700908800000!5m2!1sen!2sin";

    return (
        <section className="contact-page">
            <div className="contact-hero">
                <h1>Get In Touch</h1>
                <p>We're here to help with all your premium detailing, maintenance, and repair needs. Contact our team using the form below or visit us directly.</p>
            </div>

            <div className="contact-container">
                {/* --- 1. Address and Info Section --- */}
                <div className="contact-info">
                    <h2>Our Workshop Details</h2>
                    
                    <div className="info-item">
                        <span className="icon"><MdLocationOn /></span> {/* React Icon */}
                        <p>
                            **Primary Location:**<br/>
                            AR Automotive Service Center<br/>
                            14/A, Industrial Area, Sector V<br/>
                            Gachibowli, Hyderabad - 500032
                        </p>
                    </div>

                    <div className="info-item">
                        <span className="icon"><MdEmail /></span> {/* React Icon */}
                        <p>
                            **Email Support:**<br/>
                            <a href="mailto:support@arautomotive.com">support@arautomotive.com</a>
                        </p>
                    </div>

                    <div className="info-item">
                        <span className="icon"><MdPhone /></span> {/* React Icon */}
                        <p>
                            **Phone/WhatsApp:**<br/>
                            <a href="tel:+919876543210">+91 98765 43210</a>
                        </p>
                    </div>

                    <div className="info-item">
                        <span className="icon"><MdAccessTime /></span> {/* React Icon */}
                        <p>
                            **Operating Hours:**<br/>
                            Mon - Sat: 9:00 AM - 7:00 PM<br/>
                            Sunday: Closed
                        </p>
                    </div>
                </div>

                {/* --- 2. Contact Form Section --- */}
                <div className="contact-form-wrapper">
                    <h2>Send Us a Message</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Your Full Name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email Address" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Mobile Number (Optional)" 
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <textarea 
                            name="message" 
                            placeholder="Your Message or Service Enquiry..." 
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        
                        <button type="submit" className="btn primary full-width">
                            Submit Enquiry
                        </button>
                    </form>
                </div>
            </div>
            
            {/* --- 3. Map Section (Using Iframe) --- */}
            <div className="map-section">
                <h2>Find Us on the Map</h2>
                <div className="map-embed-container">
                    <iframe 
                        src={mapEmbedUrl}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        title="Workshop Location"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;