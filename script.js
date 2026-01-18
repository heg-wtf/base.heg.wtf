// base — Landing Page Interactions

document.addEventListener('DOMContentLoaded', () => {
    // Navigation scroll effect
    const nav = document.querySelector('nav');
    let lastScrollY = window.scrollY;

    const handleNavScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // Reveal on scroll
    const revealElements = document.querySelectorAll('.story, .feature, .pricing-card, .final-cta h2');

    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll, { passive: true });
    revealOnScroll(); // Initial check

    // Smooth anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Button hover effect enhancement
    const buttons = document.querySelectorAll('.btn-primary, .pricing-cta');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Preload hint for external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('mouseenter', () => {
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'preconnect';
            preloadLink.href = new URL(link.href).origin;
            document.head.appendChild(preloadLink);
        }, { once: true });
    });
});

// Console easter egg
console.log('%cbase', 'font-size: 24px; font-weight: 600; color: #fff;');
console.log('%cLess, done.', 'font-size: 14px; color: #888;');
console.log('');
console.log('%cBuilt with frustration, shipped with clarity.', 'font-size: 12px; color: #555; font-style: italic;');
