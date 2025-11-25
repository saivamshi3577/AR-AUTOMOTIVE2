import React, { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');
        const links = document.querySelectorAll('a, button, .btn, .faq-question');
        
        // --- 1. Follow Cursor Logic ---
        const moveCursor = (e) => {
            // Use transform: translate for better performance than 'top'/'left'
            cursor.style.transform = `translate3d(${e.clientX - 15}px, ${e.clientY - 15}px, 0)`;
        };

        window.addEventListener('mousemove', moveCursor);

        // --- 2. Hover Interaction Logic ---
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
            });
            link.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
            });
        });

        // Cleanup function for useEffect
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            links.forEach(link => {
                link.removeEventListener('mouseenter', () => {
                    cursor.classList.add('active');
                });
                link.removeEventListener('mouseleave', () => {
                    cursor.classList.remove('active');
                });
            });
        };
    }, []);

    // Return the custom cursor element
    return <div className="custom-cursor"></div>;
};

export default CustomCursor;