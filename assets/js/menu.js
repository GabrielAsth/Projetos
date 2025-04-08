document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('#titleBar .toggle');
    const nav = document.querySelector('#nav');
    const titleBar = document.querySelector('#titleBar');
    const body = document.body;

    // Função para fechar o menu
    function closeMenu() {
        nav.classList.remove('active');
        titleBar.classList.remove('active');
        body.classList.remove('navPanel-visible');
    }

    // Toggle do menu ao clicar no botão
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        nav.classList.toggle('active');
        titleBar.classList.toggle('active');
        body.classList.toggle('navPanel-visible');
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (body.classList.contains('navPanel-visible')) {
            if (!nav.contains(e.target) && !toggle.contains(e.target)) {
                closeMenu();
            }
        }
    });

    // Fechar menu ao redimensionar a janela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    // Controle dos submenus
    const hasSubmenu = document.querySelectorAll('#nav ul li > ul');
    if (hasSubmenu.length > 0) {
        const parentItems = document.querySelectorAll('#nav ul li:has(> ul)');
        parentItems.forEach(item => {
            item.addEventListener('click', function(e) {
                if (e.target === item || e.target === item.querySelector('a')) {
                    e.preventDefault();
                    this.classList.toggle('active');
                }
            });
        });
    }
}); 