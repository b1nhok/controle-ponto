import { navigation, practiceAreas, teamMembers, caseStudies, testimonials, contactInfo } from './utils/data';
import { NavigationItem, PracticeArea, TeamMember } from './types';

class BarristarApp {
    private navigationData: NavigationItem[];
    private practiceAreasData: PracticeArea[];
    private teamData: TeamMember[];

    constructor() {
        this.navigationData = navigation;
        this.practiceAreasData = practiceAreas;
        this.teamData = teamMembers;
        this.init();
    }

    private init(): void {
        this.setupEventListeners();
        this.setupSmoothScrolling();
        this.setupNavbarScrollEffect();
        this.setupMobileMenu();
        this.setupDropdownMenus();
        this.setupContactForm();
    }

    private setupEventListeners(): void {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('Barristar Law Firm Website Loaded');
            this.updateStatistics();
        });
    }

    private setupSmoothScrolling(): void {
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

    private setupNavbarScrollEffect(): void {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            const currentScrollY = window.scrollY;
            
            if (nav) {
                if (currentScrollY > 100) {
                    nav.classList.add('backdrop-blur-sm', 'bg-white/95');
                } else {
                    nav.classList.remove('backdrop-blur-sm', 'bg-white/95');
                }
                
                // Hide/show navbar on scroll
                if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    nav.style.transform = 'translateY(-100%)';
                } else {
                    nav.style.transform = 'translateY(0)';
                }
            }
            
            lastScrollY = currentScrollY;
        });
    }

    private setupMobileMenu(): void {
        const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.contains('hidden');
                if (isHidden) {
                    mobileMenu.classList.remove('hidden');
                } else {
                    mobileMenu.classList.add('hidden');
                }
            });
        }
    }

    private setupDropdownMenus(): void {
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

    private setupContactForm(): void {
        const form = document.querySelector('#contact-form') as HTMLFormElement;
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactFormSubmission(form);
            });
        }
    }

    private handleContactFormSubmission(form: HTMLFormElement): void {
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

    private showNotification(message: string, type: 'success' | 'error'): void {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
            type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    private updateStatistics(): void {
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
                this.animateCounter(element as HTMLElement, stat.target, stat.suffix);
            }
        });
    }

    private animateCounter(element: HTMLElement, target: number, suffix: string): void {
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
    public getNavigationData(): NavigationItem[] {
        return this.navigationData;
    }

    public getPracticeAreas(): PracticeArea[] {
        return this.practiceAreasData;
    }

    public getTeamMembers(): TeamMember[] {
        return this.teamData;
    }
}

// Initialize the application
const app = new BarristarApp();

// Export for global access
(window as any).BarristarApp = app;

export default BarristarApp;