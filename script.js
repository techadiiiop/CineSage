// script.js - COMPLETE VERSION FOR HOME PAGE
document.addEventListener('DOMContentLoaded', function() {
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
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const exploreBtn = document.getElementById('exploreBtn');
    const trendingBtn = document.getElementById('trendingBtn');
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    console.log('Home page loaded with', movies ? movies.length : 0, 'total items');
    
    // Initialize the application
    function initApp() {
        if (movies && movies.length > 0) {
            // Show ALL content initially
            renderContent(movies.slice(0, 12)); // Show first 12 items
            setupEventListeners();
            console.log('App initialized showing all content');
        } else {
            console.error('No data found!');
            moviesGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Data Not Loaded</h3>
                    <p>Check if data.js is loaded correctly</p>
                </div>
            `;
        }
    }
    
    // Render content to the grid (ALL types)
    function renderContent(contentArray) {
        moviesGrid.innerHTML = '';
        
        if (!contentArray || contentArray.length === 0) {
            moviesGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-film"></i>
                    <h3>No Content Found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }
        
        contentArray.forEach(item => {
            const contentCard = document.createElement('div');
            contentCard.className = 'movie-card';
            contentCard.dataset.id = item.id;
            
            // Determine type badge
            let typeBadge = '';
            if (item.genres && item.genres.includes('Anime')) {
                typeBadge = '<div class="type-badge">Anime</div>';
            } else if (item.genres && item.genres.includes('Documentary')) {
                typeBadge = '<div class="type-badge">Documentary</div>';
            } else if (item.duration && item.duration.includes('TV Series')) {
                typeBadge = '<div class="type-badge">TV Series</div>';
            }
            
            contentCard.innerHTML = `
                <div class="poster-container">
                    <img src="${item.poster}" alt="${item.title}" class="movie-poster" onerror="this.src='https://images.unsplash.com/photo-1489599809505-f2b4ef8f6a60?q=80&w=2070'">
                    <div class="rating-badge">
                        <i class="fas fa-star"></i> ${item.rating || 'N/A'}
                    </div>
                    ${typeBadge}
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${item.title || 'Untitled'}</h3>
                    <div class="movie-meta">
                        <span>${item.year || 'N/A'}</span>
                        <span>${item.duration || 'N/A'}</span>
                    </div>
                    <div class="movie-tags">
                        ${item.genres ? item.genres.filter(genre => genre !== 'Anime' && genre !== 'Documentary').map(genre => `<span class="movie-tag">${genre}</span>`).join('') : ''}
                    </div>
                    <p class="movie-description">${item.description ? item.description.substring(0, 100) + '...' : 'No description available.'}</p>
                    <a href="#" class="watch-btn">View Details</a>
                </div>
            `;
            moviesGrid.appendChild(contentCard);
        });
    }
    
    // Setup all event listeners
    function setupEventListeners() {
        // Content card click
        moviesGrid.addEventListener('click', (e) => {
            const contentCard = e.target.closest('.movie-card');
            if (contentCard) {
                const contentId = parseInt(contentCard.dataset.id);
                openContentModal(contentId);
            }
            
            if (e.target.classList.contains('watch-btn')) {
                e.preventDefault();
                const contentCard = e.target.closest('.movie-card');
                const contentId = parseInt(contentCard.dataset.id);
                openContentModal(contentId);
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
                    filterContent(category);
                }
            });
        }
        
        // Close modal
        closeModal.addEventListener('click', closeContentModal);
        
        // Close modal when clicking outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeContentModal();
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
        
        // Hero buttons
        if (exploreBtn) {
            exploreBtn.addEventListener('click', () => {
                // Show all content
                renderContent(movies.slice(0, 12));
                // Update active button
                categoryBtns.forEach(btn => btn.classList.remove('active'));
                const allBtn = document.querySelector('.category-btn[data-category="all"]');
                if (allBtn) allBtn.classList.add('active');
                
                // Scroll to grid
                if (moviesGrid) {
                    window.scrollTo({
                        top: moviesGrid.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        }
        
        if (trendingBtn) {
            trendingBtn.addEventListener('click', () => {
                // Sort by rating and show top 8 of ALL content
                const trendingContent = [...movies]
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 8);
                renderContent(trendingContent);
                
                // Update UI
                categoryBtns.forEach(btn => btn.classList.remove('active'));
                const allBtn = document.querySelector('.category-btn[data-category="all"]');
                if (allBtn) allBtn.classList.add('active');
                
                // Scroll to grid
                if (moviesGrid) {
                    window.scrollTo({
                        top: moviesGrid.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        }
        
        // Keyboard support for closing modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeContentModal();
            }
        });
    }
    
    // Filter content by category
    function filterContent(category) {
        console.log('Filtering by category:', category);
        
        if (category === 'all') {
            // Show ALL content (first 12 items)
            renderContent(movies.slice(0, 12));
            return;
        }
        
        // Special handling for content type categories
        if (category === 'anime') {
            const filteredContent = movies.filter(item => 
                item.genres && item.genres.includes('Anime')
            ).slice(0, 12);
            renderContent(filteredContent);
            return;
        }
        
        if (category === 'documentary') {
            const filteredContent = movies.filter(item => 
                item.genres && item.genres.includes('Documentary')
            ).slice(0, 12);
            renderContent(filteredContent);
            return;
        }
        
        // For genre categories (action, drama, etc.)
        const filteredContent = movies.filter(item => 
            item.genres && item.genres.map(g => g.toLowerCase()).includes(category)
        ).slice(0, 12);
        
        renderContent(filteredContent);
    }
    
    // Open content modal with details
    function openContentModal(contentId) {
        const content = movies.find(m => m.id === contentId);
        
        if (content) {
            modalTitle.textContent = content.title || 'Untitled';
            modalYear.textContent = content.year || 'N/A';
            modalDuration.textContent = content.duration || 'N/A';
            modalRating.innerHTML = `<i class="fas fa-star"></i> ${content.rating || 'N/A'}`;
            modalDescription.textContent = content.description || 'No description available.';
            modalPoster.src = content.poster;
            modalPoster.onerror = function() {
                this.src = 'https://images.unsplash.com/photo-1489599809505-f2b4ef8f6a60?q=80&w=2070';
            };
            
            // Clear and add tags
            modalTags.innerHTML = '';
            if (content.genres && Array.isArray(content.genres)) {
                content.genres.forEach(genre => {
                    const tag = document.createElement('span');
                    tag.className = 'tag';
                    tag.textContent = genre;
                    modalTags.appendChild(tag);
                });
            }
            
            // Clear and add why watch points
            whyWatchList.innerHTML = '';
            if (content.whyWatch && Array.isArray(content.whyWatch)) {
                content.whyWatch.forEach(point => {
                    const li = document.createElement('li');
                    li.textContent = point;
                    whyWatchList.appendChild(li);
                });
            }
            
            // Clear and add platforms
            platforms.innerHTML = '';
            if (content.platforms && Array.isArray(content.platforms)) {
                content.platforms.forEach(platform => {
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
    
    // Close content modal
    function closeContentModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Search content
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (!searchTerm) {
            // If search is empty, show all content
            const activeCategory = document.querySelector('.category-btn.active');
            if (activeCategory) {
                filterContent(activeCategory.dataset.category);
            } else {
                renderContent(movies.slice(0, 12));
            }
            return;
        }
        
        const filteredContent = movies.filter(item => 
            (item.title && item.title.toLowerCase().includes(searchTerm)) ||
            (item.description && item.description.toLowerCase().includes(searchTerm)) ||
            (item.genres && item.genres.some(genre => genre.toLowerCase().includes(searchTerm)))
        ).slice(0, 12);
        
        renderContent(filteredContent);
    }
    
    // Initialize the application when DOM is loaded
    initApp();
});