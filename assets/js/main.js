/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Import modules
import navigationManager from './navigation.js';
import animationManager from './animations.js';

// Main App Class
class App {
	constructor() {
		this.initialize();
	}

	initialize() {
		// Initialize when DOM is loaded
		document.addEventListener('DOMContentLoaded', () => {
			this.setupEventListeners();
			this.initializeModules();
		});
	}

	setupEventListeners() {
		// Window resize handler
		window.addEventListener('resize', () => {
			this.handleResize();
		});

		// Scroll handler
		window.addEventListener('scroll', () => {
			this.handleScroll();
		});
	}

	initializeModules() {
		// Initialize navigation
		navigationManager.updateActiveMenuItem();

		// Initialize animations
		animationManager.initialize();
	}

	handleResize() {
		// Handle responsive behavior
		if (window.innerWidth > 768) {
			document.querySelector('#nav').classList.remove('active');
		}
	}

	handleScroll() {
		// Handle scroll-based animations
		animationManager.handleScroll();
	}
}

// Initialize App
const app = new App();

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);