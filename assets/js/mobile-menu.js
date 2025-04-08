document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-mobile-button');
    const nav = document.querySelector('#nav');
    const dropdownLinks = document.querySelectorAll('#nav ul li > a:not(:only-child)');

    // Toggle menu ao clicar no botão
    menuButton.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Controle dos dropdowns no mobile
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('#nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && !this.nextElementSibling) {
                menuButton.classList.remove('active');
                nav.classList.remove('active');
            }
        });
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