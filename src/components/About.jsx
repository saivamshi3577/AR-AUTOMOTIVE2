import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import './about.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --- 1. IMPORT IMAGES FROM SRC/ASSETS ---
import foundationImg1 from '../assets/service/about_foundation_1.jpg';
import foundationImg2 from '../assets/service/about_foundation_1.jpg';
import growthImg1 from '../assets/service/about_foundation_1.jpg';
import growthImg2 from '../assets/service/about_foundation_1.jpg';
import upgradeImg1 from '../assets/service/blog2.jpg';
import upgradeImg2 from '../assets/service/about_foundation_1.jpg';
import innovationImg1 from '../assets/service/about_foundation_1.jpg';
import innovationImg2 from '../assets/service/about_foundation_1.jpg';


// --- Data for the Timeline (Using Imported Variables) ---
const timelineEvents = [
    {
        year: '2014',
        title: 'Foundation',
        description: 'The idea for hassle-free doorstep car workshop and fast service was born. Started as a small, passionate team with a big vision.',
        images: [
            foundationImg1, // <--- UPDATED
            foundationImg2  // <--- UPDATED
        ],
        alignment: 'left' 
    },
    {
        year: '2018',
        title: 'Growth Phase',
        description: 'Operations expanded with improved service quality and a trained technician network. Introduced new service categories and reached more customers.',
        images: [
            growthImg1, // <--- UPDATED
            growthImg2  // <--- UPDATED
        ],
        alignment: 'right'
    },
    {
        year: '2022',
        title: 'Service Upgrade',
        description: 'Introduced premium detailing, maintenance services, and seamless online booking. Focused on enhancing customer convenience and digital integration.',
        images: [
            upgradeImg1, // <--- UPDATED
            upgradeImg2  // <--- UPDATED
        ],
        alignment: 'left'
    },
    {
        year: '2025',
        title: 'Innovation Era',
        description: 'Launching smart diagnostics, real-time tracking, and AI-powered service scheduling. Aiming for the future of automotive care with cutting-edge technology.',
        images: [
            innovationImg1, // <--- UPDATED
            innovationImg2  // <--- UPDATED
        ],
        alignment: 'right'
    }
];

const About = () => {
    const timelineRefs = useRef([]);
    timelineRefs.current = [];

    // Add refs to the array
    const addToRefs = (el) => {
        if (el && !timelineRefs.current.includes(el)) {
            timelineRefs.current.push(el);
        }
    };

    useEffect(() => {
        // Simple GSAP animation for hero text
        gsap.fromTo(".about-hero h1", 
            { opacity: 0, y: -20 }, 
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
        gsap.fromTo(".about-hero p", 
            { opacity: 0, y: -20 }, 
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
        );

        // GSAP ScrollTrigger animation for timeline items
        timelineRefs.current.forEach((el, index) => {
            gsap.fromTo(el, 
                { opacity: 0, y: 50 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%", 
                        end: "bottom 20%",
                        toggleActions: "play none none reverse", 
                    }
                }
            );
        });

        // Cleanup function for ScrollTrigger
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="about-page">
            <div className="about-hero">
                <h1>About Us</h1>
                <p>We are committed to providing exceptional automotive services, combining expertise with a passion for vehicles.</p>
            </div>

            {/* --- Mission & Vision --- */}
            <div className="mission-vision-section">
                <div className="mission-card">
                    <h2>Our Mission</h2>
                    <p>To deliver unparalleled automotive care and customer service, ensuring every vehicle performs at its best and every client drives away satisfied.</p>
                </div>
                <div className="vision-card">
                    <h2>Our Vision</h2>
                    <p>To be the most trusted and innovative automotive service provider, leading the industry with advanced technology, skilled technicians, and an unwavering commitment to quality.</p>
                </div>
            </div>

            {/* --- Timeline Section --- */}
            <div className="timeline-section">
                <h2>Our Journey & Milestones</h2>
                <p className="timeline-intro">From humble beginnings to a future of innovation, explore the key moments that define AR Automotive Service Center.</p>
                
                <div className="timeline-container">
                    <div className="timeline-line"></div> {/* The vertical dotted line */}

                    {timelineEvents.map((event, index) => (
                        <div 
                            key={index} 
                            ref={addToRefs} // Attach ref for GSAP animation
                            className={`timeline-item ${event.alignment}`}
                        >
                            <div className="timeline-dot"></div> {/* The blue circle */}
                            <div className="timeline-content">
                                <span className="timeline-year">{event.year}</span>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <div className="timeline-images">
                                    {event.images.map((imgSrc, imgIndex) => (
                                        <img 
                                            key={imgIndex} 
                                            // 2. USE THE IMPORTED MODULE VARIABLE HERE
                                            src={imgSrc} 
                                            alt={`${event.title} ${imgIndex + 1}`} 
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;