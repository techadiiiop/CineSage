// tv-shows.js - COMPLETE VERSION
document.addEventListener('DOMContentLoaded', function() {
    console.log('TV Shows page loaded');
    
    // DOM Elements
    const showsGrid = document.getElementById('showsGrid');
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
    const searchInput = document.getElementById('tvSearch');
    const searchBtn = document.getElementById('tvSearchBtn');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const seasonsCount = document.getElementById('seasonsCount');
    const episodesCount = document.getElementById('episodesCount');
    
    // Filter data to only include TV shows
    const allShows = movies.filter(show => 
        show.duration && show.duration.includes('TV Series')
    );
    
    console.log('Found TV shows:', allShows.length);
    
    // Add TV show specific data
    const enhancedShows = allShows.map(show => {
        // Generate random seasons and episodes for demo
        const seasons = Math.floor(Math.random() * 6) + 1;
        const episodes = seasons * (Math.floor(Math.random() * 15) + 6);
        
        return {
            ...show,
            seasons: seasons,
            episodes: episodes
        };
    });
    
    // Initialize the TV shows page
    function initTVShowsPage() {
        renderShows(enhancedShows);
        setupEventListeners();
    }
    
    // Render TV shows to the grid
    function renderShows(showsArray) {
        showsGrid.innerHTML = '';
        
        if (!showsArray || showsArray.length === 0) {
            showsGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-tv"></i>
                    <h3>No TV Shows Found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }
        
        showsArray.forEach(show => {
            const showCard = document.createElement('div');
            showCard.className = 'movie-card';
            showCard.dataset.id = show.id;
            showCard.innerHTML = `
                <div class="poster-container">
                    <img src="${show.poster}" alt="${show.title}" class="movie-poster" onerror="this.src='https://images.unsplash.com/photo-1616530940355-351fabd952d1?q=80&w=1935'">
                    <div class="rating-badge">
                        <i class="fas fa-star"></i> ${show.rating || 'N/A'}
                    </div>
                    ${show.seasons ? `<div class="season-badge">${show.seasons} Season${show.seasons > 1 ? 's' : ''}</div>` : ''}
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${show.title || 'Untitled'}</h3>
                    <div class="movie-meta">
                        <span>${show.year || 'N/A'}</span>
                        <span>${show.seasons || 'N/A'} Seasons</span>
                    </div>
                    <div class="movie-tags">
                        ${show.genres ? show.genres.map(genre => `<span class="movie-tag">${genre}</span>`).join('') : ''}
                    </div>
                    <p class="movie-description">${show.description || 'No description available.'}</p>
                    <a href="#" class="watch-btn">View Details</a>
                </div>
            `;
            showsGrid.appendChild(showCard);
        });
    }
    
    // Setup all event listeners
    function setupEventListeners() {
        // Show card click
        showsGrid.addEventListener('click', (e) => {
            const showCard = e.target.closest('.movie-card');
            if (showCard) {
                const showId = parseInt(showCard.dataset.id);
                openShowModal(showId);
            }
            
            if (e.target.classList.contains('watch-btn')) {
                e.preventDefault();
                const showCard = e.target.closest('.movie-card');
                const showId = parseInt(showCard.dataset.id);
                openShowModal(showId);
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
                    filterShows(category);
                }
            });
        }
        
        // Close modal
        closeModal.addEventListener('click', closeShowModal);
        
        // Close modal when clicking outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeShowModal();
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
                closeShowModal();
            }
        });
    }
    
    // Filter shows by category
    function filterShows(category) {
        console.log('Filtering shows by category:', category);
        
        if (category === 'all') {
            renderShows(enhancedShows);
            return;
        }
        
        const filteredShows = enhancedShows.filter(show => 
            show.genres && show.genres.map(g => g.toLowerCase()).includes(category)
        );
        
        renderShows(filteredShows);
    }
    
    // Open show modal with details
    function openShowModal(showId) {
        const show = enhancedShows.find(s => s.id === showId);
        
        if (show) {
            modalTitle.textContent = show.title || 'Untitled';
            modalYear.textContent = show.year || 'N/A';
            modalDuration.textContent = show.duration || 'N/A';
            modalRating.innerHTML = `<i class="fas fa-star"></i> ${show.rating || 'N/A'}`;
            modalDescription.textContent = show.description || 'No description available.';
            modalPoster.src = show.poster;
            modalPoster.onerror = function() {
                this.src = 'https://images.unsplash.com/photo-1616530940355-351fabd952d1?q=80&w=1935';
            };
            
            // Update seasons and episodes info
            if (seasonsCount && episodesCount) {
                seasonsCount.textContent = show.seasons || 'N/A';
                episodesCount.textContent = show.episodes || 'N/A';
            }
            
            // Clear and add tags
            modalTags.innerHTML = '';
            if (show.genres && Array.isArray(show.genres)) {
                show.genres.forEach(genre => {
                    const tag = document.createElement('span');
                    tag.className = 'tag';
                    tag.textContent = genre;
                    modalTags.appendChild(tag);
                });
            }
            
            // Clear and add why watch points
            whyWatchList.innerHTML = '';
            if (show.whyWatch && Array.isArray(show.whyWatch)) {
                show.whyWatch.forEach(point => {
                    const li = document.createElement('li');
                    li.textContent = point;
                    whyWatchList.appendChild(li);
                });
            }
            
            // Clear and add platforms
            platforms.innerHTML = '';
            if (show.platforms && Array.isArray(show.platforms)) {
                show.platforms.forEach(platform => {
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
    
    // Close show modal
    function closeShowModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Search TV shows
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (!searchTerm) {
            // If search is empty, show all shows
            const activeCategory = document.querySelector('.category-btn.active');
            if (activeCategory) {
                filterShows(activeCategory.dataset.category);
            } else {
                renderShows(enhancedShows);
            }
            return;
        }
        
        const filteredShows = enhancedShows.filter(show => 
            (show.title && show.title.toLowerCase().includes(searchTerm)) ||
            (show.description && show.description.toLowerCase().includes(searchTerm)) ||
            (show.genres && show.genres.some(genre => genre.toLowerCase().includes(searchTerm)))
        );
        
        renderShows(filteredShows);
    }
    
    // Initialize the TV shows page
    initTVShowsPage();
});