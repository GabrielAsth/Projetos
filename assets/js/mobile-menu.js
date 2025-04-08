document.addEventListener('DOMContentLoaded', function() {
    console.log('Menu mobile script loaded'); // Debug

    const menuButton = document.querySelector('.menu-mobile-button');
    const nav = document.querySelector('#nav');

    if (!menuButton || !nav) {
        console.error('Menu elements not found'); // Debug
        return;
    }

    console.log('Menu elements found'); // Debug

    // Toggle menu ao clicar no botão
    menuButton.addEventListener('click', function(e) {
        console.log('Menu button clicked'); // Debug
        e.preventDefault();
        e.stopPropagation();
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Controle dos dropdowns no mobile
    const dropdownLinks = document.querySelectorAll('#nav ul li > a:not(:only-child)');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                const parentLi = this.parentElement;
                
                // Fecha todos os outros submenus
                dropdownLinks.forEach(otherLink => {
                    if (otherLink !== this) {
                        otherLink.parentElement.classList.remove('active');
                    }
                });

                // Toggle do submenu atual
                parentLi.classList.toggle('active');
            }
        });
    });

    // Fechar menu ao clicar em links
    const menuLinks = document.querySelectorAll('#nav a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && !this.nextElementSibling) {
                menuButton.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const isClickInside = nav.contains(e.target) || menuButton.contains(e.target);
            if (!isClickInside && nav.classList.contains('active')) {
                menuButton.classList.remove('active');
                nav.classList.remove('active');
            }
        }
    });

    // Fechar menu ao redimensionar a tela
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                menuButton.classList.remove('active');
                nav.classList.remove('active');
                document.querySelectorAll('#nav ul li').forEach(item => {
                    item.classList.remove('active');
                });
            }
        }, 250);
    });
}); 