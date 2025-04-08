// Navigation Manager
class NavigationManager {
    constructor() {
        this.nav = document.querySelector('#nav');
        this.menuItems = document.querySelectorAll('#nav ul li');
        this.initialize();
    }

    initialize() {
        // Initialize navigation when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            this.setupMobileMenu();
            this.setupDropdowns();
            this.setupSmoothScroll();
            this.setupProjectNavigation();
        });
    }

    setupMobileMenu() {
        const menuToggle = document.createElement('button');
        menuToggle.classList.add('menu-toggle');
        menuToggle.innerHTML = '<span></span><span></span><span></span>';
        
        menuToggle.addEventListener('click', () => {
            this.nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        this.nav.parentElement.insertBefore(menuToggle, this.nav);
    }

    setupDropdowns() {
        const dropdowns = document.querySelectorAll('#nav ul li ul');
        
        dropdowns.forEach(dropdown => {
            const parent = dropdown.parentElement;
            
            parent.addEventListener('mouseenter', () => {
                dropdown.style.display = 'block';
            });

            parent.addEventListener('mouseleave', () => {
                dropdown.style.display = 'none';
            });
        });
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupProjectNavigation() {
        // Setup "Voltar aos Projetos" button in project pages
        const backToProjectsBtn = document.querySelector('.button.style2[href="index.html#highlights"]');
        if (backToProjectsBtn) {
            backToProjectsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                // Usar setTimeout para garantir que outros event listeners não interfiram
                setTimeout(() => {
                    window.location.href = 'index.html#highlights';
                }, 50);
            });
        }
    }

    // Update active menu item
    updateActiveMenuItem() {
        const currentPath = window.location.pathname;
        
        this.menuItems.forEach(item => {
            const link = item.querySelector('a');
            if (link && link.getAttribute('href') === currentPath) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
}

// Initialize Navigation Manager
const navigationManager = new NavigationManager();

// Export for use in other files
export default navigationManager; 