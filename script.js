/**
 * LinguaNexa OS - Interactivity Script
 * High-Performance DOM Manipulation for Maximum Conversion Rate
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ADVANCED SCROLL REVEAL (Intersection Observer)
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealOnScroll.observe(el));

    // 2. FAQ ACCORDION LOGIC
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all others
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const content = otherItem.querySelector('.accordion-content');
                content.style.maxHeight = null;
            });

            // Open clicked
            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // 3. SMOOTH SCROLLING FOR CTA BUTTONS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                
                // Account for the sticky FOMO bar height (approx 50px)
                const headerOffset = 50;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});