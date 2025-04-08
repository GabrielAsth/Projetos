class SearchManager {
    constructor() {
        this.searchInput = document.querySelector('.search__input');
        this.searchButton = document.querySelector('#lupa');
        this.closeButton = document.querySelector('#fechar');
        this.movies = document.querySelectorAll('.swiper-slide');
        this.sections = document.querySelectorAll('.movies');
        
        this.init();
    }

    init() {
        this.searchButton.addEventListener('click', () => this.toggleSearch());
        this.closeButton.addEventListener('click', () => this.clearSearch());
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
    }

    toggleSearch() {
        this.searchInput.classList.toggle('active');
        if (this.searchInput.classList.contains('active')) {
            this.searchInput.focus();
        } else {
            this.clearSearch();
        }
    }

    handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            this.clearSearch();
            return;
        }

        let hasMatches = false;

        this.movies.forEach(movie => {
            const title = movie.querySelector('h3')?.textContent.toLowerCase() || '';
            const match = title.includes(searchTerm);
            
            if (match) {
                movie.style.opacity = '1';
                movie.style.visibility = 'visible';
                movie.classList.add('search-match');
                hasMatches = true;
            } else {
                movie.style.opacity = '0';
                movie.style.visibility = 'hidden';
                movie.classList.remove('search-match');
            }
        });

        this.sections.forEach(section => {
            const sectionMovies = section.querySelectorAll('.swiper-slide');
            const hasSectionMatches = Array.from(sectionMovies).some(movie => 
                movie.style.visibility === 'visible'
            );
            
            if (hasSectionMatches) {
                section.classList.add('has-results');
            } else {
                section.classList.remove('has-results');
            }
        });
    }

    clearSearch() {
        this.searchInput.value = '';
        this.searchInput.classList.remove('active');
        
        this.movies.forEach(movie => {
            movie.style.opacity = '1';
            movie.style.visibility = 'visible';
            movie.classList.remove('search-match');
        });

        this.sections.forEach(section => {
            section.classList.remove('has-results');
        });
    }
}

// Inicializa o gerenciador de busca
document.addEventListener('DOMContentLoaded', () => {
    new SearchManager();
});