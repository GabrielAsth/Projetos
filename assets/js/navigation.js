// Navigation Manager
class NavigationManager {
    constructor() {
        this.nav = document.querySelector('#nav');
        this.titleBar = document.querySelector('#titleBar');
        this.toggle = document.querySelector('#titleBar .toggle');
        this.body = document.body;
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupDropdowns();
        this.setupSmoothScroll();
        this.setupActiveItems();
    }

    setupMobileMenu() {
        // Toggle do menu
        this.toggle.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleMobileMenu();
        });

        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (this.body.classList.contains('navPanel-visible')) {
                if (!this.nav.contains(e.target) && !this.toggle.contains(e.target)) {
                    this.closeMobileMenu();
                }
            }
        });

        // Fechar ao redimensionar
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.closeMobileMenu();
            }
        });
    }

    setupDropdowns() {
        const dropdowns = document.querySelectorAll('#nav ul li:has(> ul)');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => {
                if (window.innerWidth > 768) {
                    dropdown.classList.add('hover');
                }
            });

            dropdown.addEventListener('mouseleave', () => {
                if (window.innerWidth > 768) {
                    dropdown.classList.remove('hover');
                }
            });

            dropdown.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    if (e.target === dropdown || e.target === dropdown.querySelector('a')) {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                    }
                }
            });
        });
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    this.closeMobileMenu();
                }
            });
        });
    }

    setupActiveItems() {
        const navItems = document.querySelectorAll('#nav a');
        const updateActive = () => {
            const currentPath = window.location.pathname;
            navItems.forEach(item => {
                if (item.getAttribute('href') === currentPath) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        };

        updateActive();
        window.addEventListener('popstate', updateActive);
    }

    toggleMobileMenu() {
        this.nav.classList.toggle('active');
        this.titleBar.classList.toggle('active');
        this.body.classList.toggle('navPanel-visible');
    }

    closeMobileMenu() {
        this.nav.classList.remove('active');
        this.titleBar.classList.remove('active');
        this.body.classList.remove('navPanel-visible');
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    window.navigationManager = new NavigationManager();
});

// Export for use in other files
export default window.navigationManager; 