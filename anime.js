// anime.js - COMPLETE VERSION
document.addEventListener('DOMContentLoaded', function() {
    console.log('Anime page loaded');
    
    // DOM Elements
    const animeGrid = document.getElementById('animeGrid');
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
    const searchInput = document.getElementById('animeSearch');
    const searchBtn = document.getElementById('animeSearchBtn');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const animeType = document.getElementById('animeType');
    const episodesCount = document.getElementById('episodesCount');
    const studioName = document.getElementById('studioName');
    
    // Filter data to only include anime
    const allAnime = movies.filter(anime => 
        anime.genres && anime.genres.includes('Anime')
    );
    
    console.log('Found anime:', allAnime.length);
    
    // Anime studios for demo data
    const animeStudios = ['Studio Ghibli', 'Madhouse', 'Bones', 'Ufotable', 'Wit Studio', 'MAPPA', 'Kyoto Animation', 'Production I.G', 'Toei Animation', 'Pierrot'];
    
    // Add anime specific data
    const enhancedAnime = allAnime.map(anime => {
        // Generate random anime-specific data for demo
        const type = Math.random() > 0.5 ? 'TV Series' : 'Movie';
        const episodes = type === 'TV Series' ? Math.floor(Math.random() * 24) + 12 : 1;
        const studio = animeStudios[Math.floor(Math.random() * animeStudios.length)];
        
        return {
            ...anime,
            type: type,
            episodes: episodes,
            studio: studio
        };
    });
    
    // Initialize the anime page
    function initAnimePage() {
        renderAnime(enhancedAnime);
        setupEventListeners();
    }
    
    // Render anime to the grid
    function renderAnime(animeArray) {
        animeGrid.innerHTML = '';
        
        if (!animeArray || animeArray.length === 0) {
            animeGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-ghost"></i>
                    <h3>No Anime Found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }
        
        animeArray.forEach(anime => {
            const animeCard = document.createElement('div');
            animeCard.className = 'movie-card';
            animeCard.dataset.id = anime.id;
            animeCard.innerHTML = `
                <div class="poster-container">
                    <img src="${anime.poster}" alt="${anime.title}" class="movie-poster" onerror="this.src='https://images.unsplash.com/photo-1632108204150-1b4e1baa1b8d?q=80&w=2070'">
                    <div class="rating-badge">
                        <i class="fas fa-star"></i> ${anime.rating || 'N/A'}
                    </div>
                    <div class="type-badge">${anime.type || 'Anime'}</div>
                    ${anime.studio ? `<div class="studio-badge">${anime.studio}</div>` : ''}
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${anime.title || 'Untitled'}</h3>
                    <div class="movie-meta">
                        <span>${anime.year || 'N/A'}</span>
                        <span>${anime.type === 'TV Series' ? `${anime.episodes || 'N/A'} Episodes` : anime.duration || 'N/A'}</span>
                    </div>
                    <div class="movie-tags">
                        ${anime.genres ? anime.genres.filter(g => g !== 'Anime').map(genre => `<span class="movie-tag">${genre}</span>`).join('') : ''}
                    </div>
                    <p class="movie-description">${anime.description || 'No description available.'}</p>
                    <a href="#" class="watch-btn">View Details</a>
                </div>
            `;
            animeGrid.appendChild(animeCard);
        });
    }
    
    // Setup all event listeners
    function setupEventListeners() {
        // Anime card click
        animeGrid.addEventListener('click', (e) => {
            const animeCard = e.target.closest('.movie-card');
            if (animeCard) {
                const animeId = parseInt(animeCard.dataset.id);
                openAnimeModal(animeId);
            }
            
            if (e.target.classList.contains('watch-btn')) {
                e.preventDefault();
                const animeCard = e.target.closest('.movie-card');
                const animeId = parseInt(animeCard.dataset.id);
                openAnimeModal(animeId);
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
                    filterAnime(category);
                }
            });
        }
        
        // Close modal
        closeModal.addEventListener('click', closeAnimeModal);
        
        // Close modal when clicking outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAnimeModal();
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
                closeAnimeModal();
            }
        });
    }
    
    // Filter anime by category
    function filterAnime(category) {
        console.log('Filtering anime by category:', category);
        
        if (category === 'all') {
            renderAnime(enhancedAnime);
            return;
        }
        
        const filteredAnime = enhancedAnime.filter(anime => {
            const displayGenres = anime.genres ? anime.genres.filter(g => g !== 'Anime').map(g => g.toLowerCase()) : [];
            return displayGenres.includes(category);
        });
        
        renderAnime(filteredAnime);
    }
    
    // Open anime modal with details
    function openAnimeModal(animeId) {
        const anime = enhancedAnime.find(a => a.id === animeId);
        
        if (anime) {
            modalTitle.textContent = anime.title || 'Untitled';
            modalYear.textContent = anime.year || 'N/A';
            modalDuration.textContent = anime.duration || 'N/A';
            modalRating.innerHTML = `<i class="fas fa-star"></i> ${anime.rating || 'N/A'}`;
            modalDescription.textContent = anime.description || 'No description available.';
            modalPoster.src = anime.poster;
            modalPoster.onerror = function() {
                this.src = 'https://images.unsplash.com/photo-1632108204150-1b4e1baa1b8d?q=80&w=2070';
            };
            
            // Update anime-specific info
            if (animeType && episodesCount && studioName) {
                animeType.textContent = anime.type || 'N/A';
                episodesCount.textContent = anime.episodes || 'N/A';
                studioName.textContent = anime.studio || 'N/A';
            }
            
            // Clear and add tags
            modalTags.innerHTML = '';
            const displayGenres = anime.genres ? anime.genres.filter(genre => genre !== 'Anime') : [];
            displayGenres.forEach(genre => {
                const tag = document.createElement('span');
                tag.className = 'tag';
                tag.textContent = genre;
                modalTags.appendChild(tag);
            });
            
            // Clear and add why watch points
            whyWatchList.innerHTML = '';
            if (anime.whyWatch && Array.isArray(anime.whyWatch)) {
                anime.whyWatch.forEach(point => {
                    const li = document.createElement('li');
                    li.textContent = point;
                    whyWatchList.appendChild(li);
                });
            }
            
            // Clear and add platforms
            platforms.innerHTML = '';
            if (anime.platforms && Array.isArray(anime.platforms)) {
                anime.platforms.forEach(platform => {
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
    
    // Close anime modal
    function closeAnimeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Search anime
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (!searchTerm) {
            // If search is empty, show all anime
            const activeCategory = document.querySelector('.category-btn.active');
            if (activeCategory) {
                filterAnime(activeCategory.dataset.category);
            } else {
                renderAnime(enhancedAnime);
            }
            return;
        }
        
        const filteredAnime = enhancedAnime.filter(anime => 
            (anime.title && anime.title.toLowerCase().includes(searchTerm)) ||
            (anime.description && anime.description.toLowerCase().includes(searchTerm)) ||
            (anime.genres && anime.genres.some(genre => genre.toLowerCase().includes(searchTerm))) ||
            (anime.studio && anime.studio.toLowerCase().includes(searchTerm))
        );
        
        renderAnime(filteredAnime);
    }
    
    // Initialize the anime page
    initAnimePage();
});