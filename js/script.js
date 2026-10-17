// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active Navigation Link
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

// Form Validation
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.borderColor = '#e53e3e';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }

        // Email validation
        if (input.type === 'email' && input.value && !validateEmail(input.value)) {
            input.style.borderColor = '#e53e3e';
            isValid = false;
        }
    });

    return isValid;
}

// Event Form Submission
const createEventForm = document.getElementById('createEventForm');
if (createEventForm) {
    createEventForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm('createEventForm')) {
            alert('Event created successfully!');
            this.reset();
        } else {
            alert('Please fill in all required fields with valid data.');
        }
    });
}

// Login Form Submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm('loginForm')) {
            alert('Login successful! Redirecting...');
            // Redirect to dashboard (replace with actual URL)
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            alert('Please enter valid credentials.');
        }
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm('contactForm')) {
            alert('Message sent successfully!');
            this.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Newsletter Subscription
const newsletterBtn = document.querySelector('.footer-section .btn-small');
if (newsletterBtn) {
    newsletterBtn.addEventListener('click', function () {
        const emailInput = this.previousElementSibling;
        if (emailInput && validateEmail(emailInput.value)) {
            alert('Successfully subscribed to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.style.animation || 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card, .event-card, .team-member').forEach(el => {
    observer.observe(el);
});

// Scroll to Top Button
let scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, #6366f1, #ec4899);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'flex';
        scrollTopBtn.style.alignItems = 'center';
        scrollTopBtn.style.justifyContent = 'center';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('hover', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
});

// Typing Animation for Hero Title
function typeWriter(element, text, speed = 50) {
    let index = 0;
    element.innerHTML = '';

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Apply typing animation if hero exists
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    // Uncomment to enable typing animation
    // typeWriter(heroTitle, originalText, 50);
}

// Event Filtering (for events page)
function filterEvents(category) {
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 10);
        } else {
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Add event listeners to filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterEvents(this.dataset.filter);
    });
});

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function () {
        if (this.type === 'submit' || this.getAttribute('onclick')) {
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.disabled = true;

            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 1500);
        }
    });
});

// Local Storage for user preferences
function saveUserPreference(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getUserPreference(key) {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
}

// Remember user settings
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    const savedTheme = getUserPreference('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        saveUserPreference('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
}

// Console welcome message
console.log('%c🎉 Welcome to Meet at Event!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cCreate amazing events and connect with people!', 'font-size: 14px; color: #ec4899;');
