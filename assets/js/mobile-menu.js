document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-mobile-button');
    const nav = document.querySelector('#nav');
    const dropdownLinks = document.querySelectorAll('#nav ul li > a:not(:only-child)');
    const allLinks = document.querySelectorAll('#nav a');

    // Toggle menu ao clicar no botão
    menuButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Controle dos dropdowns no mobile
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

    // Fechar menu ao clicar em um link final (sem submenu)
    allLinks.forEach(link => {
        if (!link.nextElementSibling) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    menuButton.classList.remove('active');
                    nav.classList.remove('active');
                    // Remove active de todos os submenus
                    document.querySelectorAll('#nav ul li').forEach(item => {
                        item.classList.remove('active');
                    });
                }
            });
        }
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!nav.contains(e.target) && !menuButton.contains(e.target)) {
                menuButton.classList.remove('active');
                nav.classList.remove('active');
                // Remove active de todos os submenus
                document.querySelectorAll('#nav ul li').forEach(item => {
                    item.classList.remove('active');
                });
            }
        }
    });

    // Fechar menu ao redimensionar a tela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menuButton.classList.remove('active');
            nav.classList.remove('active');
            document.querySelectorAll('#nav ul li').forEach(item => {
                item.classList.remove('active');
            });
        }
    });
}); 