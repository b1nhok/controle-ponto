"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./utils/data");
class BarristarApp {
    constructor() {
        this.navigationData = data_1.navigation;
        this.practiceAreasData = data_1.practiceAreas;
        this.teamData = data_1.teamMembers;
        this.init();
    }
    init() {
        this.setupEventListeners();
        this.setupSmoothScrolling();
        this.setupNavbarScrollEffect();
        this.setupMobileMenu();
        this.setupDropdownMenus();
        this.setupContactForm();
    }
    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('Barristar Law Firm Website Loaded');
            this.updateStatistics();
        });
    }
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const href = anchor.getAttribute('href');
                if (href && href !== '#') {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
    setupNavbarScrollEffect() {
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            const currentScrollY = window.scrollY;
            if (nav) {
                if (currentScrollY > 100) {
                    nav.classList.add('backdrop-blur-sm', 'bg-white/95');
                }
                else {
                    nav.classList.remove('backdrop-blur-sm', 'bg-white/95');
                }
                // Hide/show navbar on scroll
                if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    nav.style.transform = 'translateY(-100%)';
                }
                else {
                    nav.style.transform = 'translateY(0)';
                }
            }
            lastScrollY = currentScrollY;
        });
    }
    setupMobileMenu() {
        const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.contains('hidden');
                if (isHidden) {
                    mobileMenu.classList.remove('hidden');
                }
                else {
                    mobileMenu.classList.add('hidden');
                }
            });
        }
    }
    setupDropdownMenus() {
        const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');
        dropdownTriggers.forEach(trigger => {
            const dropdown = trigger.nextElementSibling;
            if (dropdown) {
                trigger.addEventListener('mouseenter', () => {
                    dropdown.classList.remove('hidden');
                });
                trigger.addEventListener('mouseleave', () => {
                    setTimeout(() => {
                        if (!dropdown.matches(':hover')) {
                            dropdown.classList.add('hidden');
                        }
                    }, 100);
                });
                dropdown.addEventListener('mouseleave', () => {
                    dropdown.classList.add('hidden');
                });
            }
        });
    }
    setupContactForm() {
        const form = document.querySelector('#contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactFormSubmission(form);
            });
        }
    }
    handleContactFormSubmission(form) {
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            practiceArea: formData.get('practice-area'),
            message: formData.get('message')
        };
        // Simulate form submission
        console.log('Contact Form Submitted:', data);
        // Show success message
        this.showNotification('Thank you for your message. We will contact you soon!', 'success');
        // Reset form
        form.reset();
    }
    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
    updateStatistics() {
        // Animate statistics counters
        const stats = [
            { element: '[data-stat="cases-won"]', target: 95, suffix: '%' },
            { element: '[data-stat="clients"]', target: 500, suffix: '+' },
            { element: '[data-stat="lawyers"]', target: 50, suffix: '+' },
            { element: '[data-stat="dismissed"]', target: 98, suffix: '%' }
        ];
        stats.forEach(stat => {
            const element = document.querySelector(stat.element);
            if (element) {
                this.animateCounter(element, stat.target, stat.suffix);
            }
        });
    }
    animateCounter(element, target, suffix) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 50);
    }
    // Public methods for external access
    getNavigationData() {
        return this.navigationData;
    }
    getPracticeAreas() {
        return this.practiceAreasData;
    }
    getTeamMembers() {
        return this.teamData;
    }
}
// Initialize the application
const app = new BarristarApp();
// Export for global access
window.BarristarApp = app;
exports.default = BarristarApp;
//# sourceMappingURL=main.js.map