// movies.js - COMPLETE VERSION
document.addEventListener('DOMContentLoaded', function() {
    console.log('Movies page loaded');
    
    // DOM Elements
    const moviesGrid = document.getElementById('moviesGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    const modal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalYear = document.getElementById('modalYear');
    const modalDuration = document.getElementById('modalDuration');
    const modalRating = document.getElementById('modalRating');
    const modalTags = document.getElementById('modalTags');
    const modalDescription = document.getElementById('modalDescription');
    const modalPoster = document.getElementById('modalPoster');
    const whyWatchList = document.getElementById('whyWatchList');
    const platforms = document.getElementById('platforms');
    const closeModal = document.getElementById('closeModal');
    const searchInput = document.getElementById('moviesSearch');
    const searchBtn = document.getElementById('moviesSearchBtn');
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    // Filter movies to only include actual movies (not TV series or documentaries or anime)
    const allMovies = movies.filter(movie => 
        !movie.duration.includes('TV Series') && 
        !movie.genres.includes('Documentary') &&
        !movie.genres.includes('Anime')
    );
    
    console.log('Filtered movies:', allMovies.length);
    
    // Initialize the movies page
    function initMoviesPage() {
        renderMovies(allMovies);
        setupEventListeners();
    }
    
    // Render movies to the grid
    function renderMovies(moviesArray) {
        moviesGrid.innerHTML = '';
        
        if (!moviesArray || moviesArray.length === 0) {
            moviesGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-film"></i>
                    <h3>No Movies Found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }
        
        moviesArray.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.dataset.id = movie.id;
            movieCard.innerHTML = `
                <div class="poster-container">
                    <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925'">
                    <div class="rating-badge">
                        <i class="fas fa-star"></i> ${movie.rating || 'N/A'}
                    </div>
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title || 'Untitled'}</h3>
                    <div class="movie-meta">
                        <span>${movie.year || 'N/A'}</span>
                        <span>${movie.duration || 'N/A'}</span>
                    </div>
                    <div class="movie-tags">
                        ${movie.genres ? movie.genres.map(genre => `<span class="movie-tag">${genre}</span>`).join('') : ''}
                    </div>
                    <p class="movie-description">${movie.description || 'No description available.'}</p>
                    <a href="#" class="watch-btn">View Details</a>
                </div>
            `;
            moviesGrid.appendChild(movieCard);
        });
    }
    
    // Setup all event listeners
    function setupEventListeners() {
        // Movie card click
        moviesGrid.addEventListener('click', (e) => {
            const movieCard = e.target.closest('.movie-card');
            if (movieCard) {
                const movieId = parseInt(movieCard.dataset.id);
                openMovieModal(movieId);
            }
            
            if (e.target.classList.contains('watch-btn')) {
                e.preventDefault();
                const movieCard = e.target.closest('.movie-card');
                const movieId = parseInt(movieCard.dataset.id);
                openMovieModal(movieId);
            }
        });
        
        // Category filtering
        if (categoryFilter) {
            categoryFilter.addEventListener('click', (e) => {
                if (e.target.classList.contains('category-btn')) {
                    // Update active button
                    categoryBtns.forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                    
                    const category = e.target.dataset.category;
                    filterMovies(category);
                }
            });
        }
        
        // Close modal
        closeModal.addEventListener('click', closeMovieModal);
        
        // Close modal when clicking outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeMovieModal();
            }
        });
        
        // Search functionality
        searchBtn.addEventListener('click', performSearch);
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }
        
        // Keyboard support for closing modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeMovieModal();
            }
        });
    }
    
    // Filter movies by category
    function filterMovies(category) {
        console.log('Filtering movies by category:', category);
        
        if (category === 'all') {
            renderMovies(allMovies);
            return;
        }
        
        const filteredMovies = allMovies.filter(movie => 
            movie.genres && movie.genres.map(g => g.toLowerCase()).includes(category)
        );
        
        renderMovies(filteredMovies);
    }
    
    // Open movie modal with details
    function openMovieModal(movieId) {
        const movie = allMovies.find(m => m.id === movieId);
        
        if (movie) {
            modalTitle.textContent = movie.title || 'Untitled';
            modalYear.textContent = movie.year || 'N/A';
            modalDuration.textContent = movie.duration || 'N/A';
            modalRating.innerHTML = `<i class="fas fa-star"></i> ${movie.rating || 'N/A'}`;
            modalDescription.textContent = movie.description || 'No description available.';
            modalPoster.src = movie.poster;
            modalPoster.onerror = function() {
                this.src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925';
            };
            
            // Clear and add tags
            modalTags.innerHTML = '';
            if (movie.genres && Array.isArray(movie.genres)) {
                movie.genres.forEach(genre => {
                    const tag = document.createElement('span');
                    tag.className = 'tag';
                    tag.textContent = genre;
                    modalTags.appendChild(tag);
                });
            }
            
            // Clear and add why watch points
            whyWatchList.innerHTML = '';
            if (movie.whyWatch && Array.isArray(movie.whyWatch)) {
                movie.whyWatch.forEach(point => {
                    const li = document.createElement('li');
                    li.textContent = point;
                    whyWatchList.appendChild(li);
                });
            }
            
            // Clear and add platforms
            platforms.innerHTML = '';
            if (movie.platforms && Array.isArray(movie.platforms)) {
                movie.platforms.forEach(platform => {
                    const platformBtn = document.createElement('a');
                    platformBtn.className = 'platform-btn';
                    platformBtn.href = platform.url || '#';
                    platformBtn.target = '_blank';
                    platformBtn.innerHTML = `
                        <i class="${platform.icon || 'fas fa-play'}"></i> ${platform.name || 'Stream'}
                    `;
                    platforms.appendChild(platformBtn);
                });
            }
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Close movie modal
    function closeMovieModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Search movies
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (!searchTerm) {
            // If search is empty, show all movies
            const activeCategory = document.querySelector('.category-btn.active');
            if (activeCategory) {
                filterMovies(activeCategory.dataset.category);
            } else {
                renderMovies(allMovies);
            }
            return;
        }
        
        const filteredMovies = allMovies.filter(movie => 
            (movie.title && movie.title.toLowerCase().includes(searchTerm)) ||
            (movie.description && movie.description.toLowerCase().includes(searchTerm)) ||
            (movie.genres && movie.genres.some(genre => genre.toLowerCase().includes(searchTerm)))
        );
        
        renderMovies(filteredMovies);
    }
    
    // Initialize the movies page
    initMoviesPage();
});