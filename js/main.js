document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('h-0');
    mobileMenu.classList.toggle('h-auto');
});

// Add this JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('[data-nav-link]');

    // Add active class
    const activeClass = 'active-nav-link';
    const activeStyles = 'text-green-600 font-medium';

    function updateActiveLink() {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove(activeClass);
                    link.querySelector('span span:first-child').classList.remove(...activeStyles.split(' '));
                    
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add(activeClass);
                        link.querySelector('span span:first-child').classList.add(...activeStyles.split(' '));
                    }
                });
            }
        });
    }

    // Initial check
    updateActiveLink();

    // Update on scroll
    window.addEventListener('scroll', updateActiveLink);

    // Update on click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// mobile menu
// Add this JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const mobileNavLinks = document.querySelectorAll('#mobile-menu a[href^="#"]');
    
    function updateActiveMobileLink() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                mobileNavLinks.forEach(link => {
                    // Remove active state from all links
                    link.classList.remove('bg-green-500', 'text-white');
                    
                    // Add active state to current section link
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('bg-green-500', 'text-white');
                    }
                });
            }
        });
    }

    // Update active state on scroll
    window.addEventListener('scroll', updateActiveMobileLink);
    
    // Update active state on click
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active state from all links
            mobileNavLinks.forEach(l => l.classList.remove('bg-green-500', 'text-white'));
            
            // Add active state to clicked link
            link.classList.add('bg-green-500', 'text-white');
            
            // Smooth scroll to section
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.remove('h-auto');
            mobileMenu.classList.add('h-0');
            document.getElementById('mobile-menu-button').classList.remove('active');
        });
    });
});