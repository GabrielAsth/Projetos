/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Import modules
import './navigation.js';
import animationManager from './animations.js';

// Main App Class
class App {
	constructor() {
		this.init();
	}

	init() {
		// Inicializar quando o DOM estiver pronto
		document.addEventListener('DOMContentLoaded', () => {
			this.initNavigation();
			this.initAnimations();
			this.setupEventListeners();
		});
	}

	initNavigation() {
		// NavigationManager já é inicializado automaticamente
		console.log('Navegação inicializada');
	}

	initAnimations() {

	}

	setupEventListeners() {
		// Eventos de redimensionamento
		window.addEventListener('resize', () => {
			this.handleResize();
		});

		// Eventos de rolagem
		window.addEventListener('scroll', () => {
			this.handleScroll();
		});
	}

	handleResize() {
		// Atualizar elementos responsivos
	}

	handleScroll() {
		// Atualizar animações baseadas em scroll
	}
}

// Inicializar a aplicação
window.app = new App();

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