// Animation Manager
class AnimationManager {
    constructor() {
        this.animations = new Map();
        this.initialize();
    }

    initialize() {
        // Initialize animations when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            this.setupScrollAnimations();
            this.setupHoverAnimations();
        });
    }

    setupScrollAnimations() {
        const elements = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    setupHoverAnimations() {
        const hoverElements = document.querySelectorAll('.hover-scale, .hover-lift');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add('active');
            });

            element.addEventListener('mouseleave', () => {
                element.classList.remove('active');
            });
        });
    }

    // Register new animation
    register(name, animation) {
        this.animations.set(name, animation);
    }

    // Play specific animation
    play(name, element) {
        const animation = this.animations.get(name);
        if (animation) {
            animation(element);
        }
    }
}

// Initialize Animation Manager
const animationManager = new AnimationManager();

// Export for use in other files
export default animationManager; 