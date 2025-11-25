import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';
import Navbar from './Navbar';
// --- IMPORT BOOKING MODAL ---
import BookingModal from './BookingModal'; // Assuming BookingModal is in the same directory or accessible path
// ... other imports ...
import heroImage from '../assets/carwashblue.png';
import foamSpreadingImage from '../assets/foamwashblue.png';
import technicianImage from '../assets/engineteshblue.png';
import washZoneImage from '../assets/carwashhouse.png'; 
import servicingImage from '../assets/engineteshblue.png';

// Placeholders for How It Works icons
import step1Image from '../assets/step1.png'; 
import step2Image from '../assets/step2.png'; 
import step3Image from '../assets/step3.png'; 

// Testimonial Profile Images
import aditiImage from '../assets/employee.jpg'; 
import arjunImage from '../assets/employee.jpg';
import rahulImage from '../assets/employee.jpg';


const servicePanels = [
    // ... (Service Panels Data remains the same) ...
    { title: "Premium Car Wash", tag: "Most Loved", startPrice: "₹ 1125", endPrice: "₹ 2500", image: heroImage, description: "Deep exterior cleaning, tire shine, and interior vacuum." },
    { title: "Foam Spreading", tag: "Most Popular", startPrice: "₹ 800", endPrice: "₹ 1500", image: foamSpreadingImage, description: "pH-neutral foam bath for gentle, scratch-free dirt removal." },
    { title: "Technician Working", tag: "Most Popular", startPrice: "₹ 1500", endPrice: "₹ 4500", image: technicianImage, description: "Diagnostic checks, fluid top-ups, and basic engine service." },
    { title: "Wash Zone", tag: "Pro-Detail", startPrice: "₹ 800", endPrice: "₹ 2000", image: washZoneImage, description: "Automated, high-pressure, touchless car wash system." },
    { title: "Automotive Servicing Motion", tag: "Best Value", startPrice: "₹ 2500", endPrice: "₹ 7500", image: servicingImage, description: "Full service, including oil change, filter replacement, and multi-point inspection." },
];

const allTestimonials = [
    // ... (Testimonials Data remains the same) ...
    { quote: "Amazing service! the mechanic arrived on time and fixed my car right at home. Super convenient and trustworthy.", name: "Aditi Sharma", rating: 5, image: aditiImage },
    { quote: "Quick, affordable, and hassle-free. I didn't have to visit the garage, everything was done at my doorstep.", name: "Arjun Verma", rating: 5, image: arjunImage },
    { quote: "Excellent experience! The technician explained everything clearly and the service quality was top-notch.", name: "Rahul Mehta", rating: 5, image: rahulImage },
    { quote: "My car looks brand new after the Premium Wash. Highly recommend the team for their attention to detail!", name: "Priya Singh", rating: 5, image: aditiImage },
    { quote: "The engine servicing was done efficiently right in my office parking lot. Saved me a ton of time.", name: "Karan Joshi", rating: 5, image: arjunImage },
    { quote: "The foam spreading process was gentle yet effective. My paint feels smoother than ever.", name: "Sneha Reddy", rating: 5, image: rahulImage },
];

const faqs = [
    // ... (FAQ Data remains the same) ...
    {
        question: "What areas do you cover for doorstep service?",
        answer: "We currently cover all major metropolitan areas and their surrounding suburbs. Please enter your pincode during booking to confirm service availability in your area."
    },
    {
        question: "How long does a standard car wash or service take?",
        answer: "A standard car wash typically takes 45-60 minutes, while a full service or detailing can take 2-4 hours, depending on the package selected."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit/debit cards, net banking, and popular digital wallets (e.g., Paytm, Google Pay). Payment is processed securely after the service is completed to your satisfaction."
    },
    {
        question: "Are your technicians certified and insured?",
        answer: "Yes, all our technicians are highly trained, certified mechanics with years of experience, and they are fully insured for all work performed."
    }
];

// ... (GSAP Imports and utility hooks: useHowItWorksAnimation, useTestimonialCarousel remain the same) ...

// GSAP registration must be here or in App entry
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


const useHowItWorksAnimation = (sectionRef) => {
    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const path = section.querySelector('.flow-path');

        if (path) {
            // ... (GSAP Animation logic remains the same) ...
            gsap.fromTo(path, 
                { strokeDashoffset: path.getTotalLength() },
                {
                    strokeDashoffset: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        id: 'how-it-works-flow', // Added ID for cleanup
                        start: "top 70%", // Start animation when section hits 70% of viewport
                        end: "bottom 30%", // End animation when section leaves 30% of viewport
                        scrub: 1,
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getById('how-it-works-flow')?.kill();
        };
    }, [sectionRef]);
};

const HowItWorksSection = () => {
    const sectionRef = useRef(null);
    useHowItWorksAnimation(sectionRef);

    // ... (JSX for HowItWorksSection remains the same) ...
    return (
        <section ref={sectionRef} className="how-it-works-section-alt">
            <div className="section-header">
                <h2>How It Works</h2>
                <p>Get your car serviced at your doorstep in just a few simple steps. No waiting, no garage visits - fast, easy, and reliable.</p>
            </div>
            
            <div className="steps-container-alt">
                <svg className="flow-svg" viewBox="0 0 1000 200" preserveAspectRatio="none">
    
                    <path 
                        className="flow-path" 
                        d="M 50 150 C 250 10, 750 10, 950 150" 
                        fill="none" 
                        stroke="#007bff" 
                        strokeWidth="5" 
                        strokeDasharray="1000"
                    />
                </svg>

                {/* Step Content */}
                <div className="step-group">
                    <div className="step-visual">
                        <img src={step1Image} alt="Step 1" className="step-number-img" />
                    </div>
                    <div className="step-details-alt">
                        <h3>Book Your Service</h3>
                        <p>Select the service you need, choose a time slot, and share your location. Booking takes less than a minute.</p>
                    </div>
                </div>
                
                <div className="step-group">
                    <div className="step-visual">
                        <img src={step2Image} alt="Step 2" className="step-number-img" />
                    </div>
                    <div className="step-details-alt">
                        <h3>Technician Arrives at Your Doorstep</h3>
                        <p>Our professional technician arrives with all the necessary tools and equipment right to your selected location.</p>
                    </div>
                </div>
                
                <div className="step-group last-step">
                    <div className="step-visual">
                        <img src={step3Image} alt="Step 3" className="step-number-img" />
                    </div>
                    <div className="step-details-alt">
                        <h3>Your Car Gets Serviced</h3>
                        <p>We complete the service efficiently, keep you updated throughout, and ensure quality before you make the payment.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};


const useTestimonialCarousel = (data, interval = 3000) => {
    // ... (Hook logic remains the same) ...
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const totalGroups = Math.ceil(data.length / 3);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % totalGroups);
        }, interval);

        return () => clearInterval(timer);
    }, [interval, totalGroups]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        
        const xOffset = -currentIndex * 100;
        
        gsap.to(container, {
            x: `${xOffset}%`,
            duration: 0.8,
            ease: "power2.inOut",
        });
    }, [currentIndex]);
    
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return { containerRef, currentIndex, totalGroups, handleDotClick };
};

const TestimonialCard = ({ testimonial }) => {
    // ... (JSX logic remains the same) ...
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={i < rating ? "star-filled" : "star-empty"}>
                    ★
                </span>
            );
        }
        return <div className="rating-stars">{stars}</div>;
    };

    return (
        <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="quote-text">{testimonial.quote}</p>
            <div className="card-footer">
                <img src={testimonial.image} alt={testimonial.name} className="profile-img" />
                <div className="profile-details">
                    <p className="name">{testimonial.name}</p>
                    {renderStars(testimonial.rating)}
                </div>
            </div>
        </div>
    );
};

const TestimonialsSection = () => {
    const { containerRef, currentIndex, totalGroups, handleDotClick } = useTestimonialCarousel(allTestimonials, 5000); 

    const testimonialGroups = [];
    for (let i = 0; i < allTestimonials.length; i += 3) {
        testimonialGroups.push(allTestimonials.slice(i, i + 3));
    }
    
    // ... (JSX for TestimonialsSection remains the same) ...
    return (
        <section className="testimonials-section">
            <div className="section-header">
                <h2>Customer Testimonials</h2>
                <p>Hear what our happy customers say about our doorstep car services: real experiences, real satisfaction.</p>
            </div>
            
            <div className="carousel-window">
                <div className="testimonials-carousel" ref={containerRef}>
                    {testimonialGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="carousel-group">
                            {group.map((testimonial, cardIndex) => (
                                <TestimonialCard key={cardIndex} testimonial={testimonial} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="carousel-dots">
                {Array.from({ length: totalGroups }).map((_, index) => (
                    <span 
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
            
             <button 
                 className="btn secondary large view-more-btn"
                 onClick={() => alert("Redirecting to full reviews page!")}
             >
                 View More Reviews
             </button>
        </section>
    );
};

const AccordionItem = ({ question, answer }) => {
    // ... (JSX for AccordionItem remains the same) ...
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span className="question-text">{question}</span>
                <span className={`icon ${isOpen ? 'open' : ''}`}>+</span>
            </button>

            <div className={`faq-answer-container ${isOpen ? 'expanded' : ''}`}>
                <p className="faq-answer">{answer}</p>
            </div>
        </div>
    );
};

const FAQsSection = () => {
    // ... (JSX for FAQsSection remains the same) ...
    return (
        <section className="faqs-section"> 
            <div className="section-header">
                <h2>Frequently Asked Questions</h2>
                <p>Find quick answers to the most common questions about our doorstep car services.</p>
            </div>
            <div className="accordion-container">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} question={faq.question} answer={faq.answer} index={index} />
                ))}
            </div>
            <button className="btn primary large"><Link to="/contact" className="btn primary large">
                Still Have Questions? Contact Us
            </Link></button>
        </section>
    );
};


const Home = () => {
    // --- NEW: State for Booking Modal ---
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null); // Used to pass service name, optional

    const heroSectionRef = useRef(null);
    const heroTextRef = useRef(null);
    const heroImageRef = useRef(null);
    const primaryButtonRef = useRef(null); 
    const secondaryButtonRef = useRef(null); 
    const processSectionRef = useRef(null);
    const panelsRef = useRef([]);

    // --- NEW: Modal Functions ---
    const openBookingModal = (serviceTitle = "General Booking") => {
        setSelectedService(serviceTitle);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    useLayoutEffect(() => {
        const heroSection = heroSectionRef.current;
        const processSection = processSectionRef.current;
        const panels = panelsRef.current;
        
        // ... (GSAP setup remains the same) ...
        if (!processSection || panels.length === 0 || !heroSection) return;
        const heroTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: heroSection,
                start: "top top", 
                end: "bottom top", 
                scrub: 0.5,
            }
        });

        heroTimeline.to(heroTextRef.current, {
            x: -300, 
            opacity: 0,
            duration: 1,
            ease: "power2.in",
        }, 0); 

        heroTimeline.to(heroImageRef.current, {
            x: 300, 
            opacity: 0,
            duration: 1,
            ease: "power2.in",
        }, 0); 

        const scrollTween = gsap.to(panels, {
            xPercent: -100 * (panels.length - 1), 
            ease: "none",
            scrollTrigger: {
                trigger: processSection,
                pin: true, 
                scrub: 1, 
                end: () => `+=${processSection.offsetWidth}`, 
            }
        });

        // --- 3. Individual Panel Fade/Slide Effect (Unchanged) ---
        panels.forEach((panel, i) => {
            if (i > 0) {
                gsap.fromTo(panel, 
                    { opacity: 0, scale: 0.95 },
                    {
                        opacity: 1,
                        scale: 1,
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: processSection,
                            containerAnimation: scrollTween,
                            start: () => `left ${i * 100}%`, 
                            end: () => `left ${i * 100 + 50}%`, 
                            scrub: 0.5,
                        }
                    }
                );
            }
        });
    
        gsap.to(primaryButtonRef.current, {
            scale: 1.05,
            duration: 0.2,
            paused: true,
            onReverseComplete: () => gsap.to(primaryButtonRef.current, { scale: 1, duration: 0.2 }),
        });

        gsap.to(secondaryButtonRef.current, {
            backgroundColor: "var(--primary-color)",
            color: "white",
            duration: 0.2,
            paused: true,
            onReverseComplete: () => gsap.to(secondaryButtonRef.current, { backgroundColor: "transparent", color: "var(--primary-color)", duration: 0.2 }),
        });

        const addHoverAnimation = (ref) => {
            if (ref.current) {
                ref.current.onmouseover = () => gsap.to(ref.current, { scale: 1.05, duration: 0.2, ease: "power1.out" });
                ref.current.onmouseleave = () => gsap.to(ref.current, { scale: 1, duration: 0.2, ease: "power1.out" });
            }
        };

        addHoverAnimation(primaryButtonRef);
        addHoverAnimation(secondaryButtonRef);


        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            if (primaryButtonRef.current) {
                primaryButtonRef.current.onmouseover = null;
                primaryButtonRef.current.onmouseleave = null;
            }
            if (secondaryButtonRef.current) {
                secondaryButtonRef.current.onmouseover = null;
                secondaryButtonRef.current.onmouseleave = null;
            }
        };

    }, []);

    const Panel = ({ service, index }) => (
        <div 
            className="service-panel"
            ref={el => panelsRef.current[index] = el}
        >
            <div className="panel-content">
                <div className="panel-text">
                    <span className={`tag ${service.tag.toLowerCase().replace(/\s/g, '-')}`}>{service.tag}</span>
                    <h2>{service.title}</h2>
                    <p className="prices">
                        Start at <span className="start-price">{service.startPrice}</span> | 
                        Ends at price <span className="end-price">{service.endPrice}</span>
                    </p>
                    <p className="description">{service.description}</p>
                    <div className="panel-buttons">
                        {/* --- MODIFICATION 1: Call openBookingModal with Service Name --- */}
                        <button 
                            className="btn primary small"
                            onClick={() => openBookingModal(service.title)} // Pass specific service title
                        >
                            Book Now
                        </button>
                        <button className="btn secondary small">View Details</button>
                    </div>
                </div>
                <div className="panel-image">
                    <img src={service.image} alt={service.title} />
                </div>
            </div>
        </div>
    );

    return (
        <div className="home-page">
            {/* --- MODIFICATION 2: Pass the generic modal opening function to Navbar --- */}
            <Navbar onBookNowClick={openBookingModal} /> 
            
            <section ref={heroSectionRef} className="hero-section">
                <div className="hero-content">
                    <div ref={heroTextRef} className="hero-text-container">
                        <h1>Shine & Protect Professional Car Detailing</h1>
                        <p>We use Eco-friendly cleaners, precision tools, and certified technicians to remove dirt, restore paintwork, and protect your vehicle inside and out. Quick service, lasting results.</p>
                        <div className="hero-buttons">
                            {/* --- MODIFICATION 3: Hero Button calls generic modal function --- */}
                            <button 
                                ref={primaryButtonRef} 
                                className="btn primary large"
                                onClick={() => openBookingModal()} // No argument = "General Booking"
                            >
                                Book Now
                            </button>
                            <button ref={secondaryButtonRef} className="btn secondary large">View Details</button>
                        </div>
                    </div>
                    <div ref={heroImageRef} className="hero-image-container">
                        <img src={heroImage} alt="Premium Car Wash" />
                    </div>
                </div>
            </section>

            <section ref={processSectionRef} className="process-section">
                <div className="panel-container">
                    {servicePanels.map((service, index) => (
                        <Panel key={index} service={service} index={index} />
                    ))}
                </div>
            </section>
            
            {/* --- How It Works Section --- */}
            <HowItWorksSection />

            {/* --- Testimonials Section --- */}
            <TestimonialsSection />
            
            {/* --- FAQ Section --- */}
            <FAQsSection />

            {/* --- Content After (Optional) --- */}
             <section className="after-scroll-section">
                 <div className="after-scroll-content">
                     <h2>Ready to get started?</h2>
                     <p>Contact us or book your service now to experience the AR Automotive difference.</p>
                 </div>
             </section>

            {/* --- MODIFICATION 4: Render the Booking Modal here, using state from Home --- */}
            <BookingModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                serviceName={selectedService} // Will be null/undefined for Navbar click, which BookingModal handles
            />
            
        
        </div>
    );
};
export default Home;