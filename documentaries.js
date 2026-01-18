// documentaries.js - COMPLETE VERSION
document.addEventListener('DOMContentLoaded', function() {
    console.log('Documentaries page loaded');
    
    // DOM Elements
    const documentariesGrid = document.getElementById('documentariesGrid');
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
    const searchInput = document.getElementById('documentariesSearch');
    const searchBtn = document.getElementById('documentariesSearchBtn');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const documentaryType = document.getElementById('documentaryType');
    const narratorName = document.getElementById('narratorName');
    const documentaryFocus = document.getElementById('documentaryFocus');
    
    // Check if movies data is loaded
    if (typeof movies === 'undefined') {
        console.error('movies data not loaded!');
        documentariesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Data Not Loaded</h3>
                <p>Check if data.js is loaded correctly</p>
            </div>
        `;
        return;
    }
    
    // Filter data to only include documentaries
    const allDocumentaries = movies.filter(doc => 
        doc.genres && doc.genres.includes('Documentary')
    );
    
    console.log('Found documentaries:', allDocumentaries.length);
    
    // Documentary-specific data
    const documentaryNarrators = ['David Attenborough', 'Morgan Freeman', 'Werner Herzog', 'Ken Burns', 'Michael Wood', 'Lucy Worsley', 'Neil deGrasse Tyson', 'Brian Cox', 'Oprah Winfrey', 'Leonardo DiCaprio'];
    const documentaryFocusAreas = ['Wildlife Conservation', 'Historical Events', 'Scientific Discovery', 'Cultural Heritage', 'Environmental Issues', 'Human Society', 'Space Exploration', 'Oceanography', 'Social Justice', 'Technology Impact'];
    
    // Add documentary specific data
    const enhancedDocumentaries = allDocumentaries.map((doc, index) => {
        // Generate documentary-specific data
        const type = doc.duration && doc.duration.includes('TV Series') ? 'Series' : 'Feature Film';
        const narrator = documentaryNarrators[index % documentaryNarrators.length];
        const focus = documentaryFocusAreas[index % documentaryFocusAreas.length];
        
        return {
            ...doc,
            type: type,
            narrator: narrator,
            focus: focus
        };
    });
    
    // Initialize the documentaries page
    function initDocumentariesPage() {
        console.log('Initializing documentaries page with', enhancedDocumentaries.length, 'documentaries');
        renderDocumentaries(enhancedDocumentaries);
        setupEventListeners();
    }
    
    // Render documentaries to the grid
    function renderDocumentaries(documentariesArray) {
        documentariesGrid.innerHTML = '';
        
        if (!documentariesArray || documentariesArray.length === 0) {
            documentariesGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-globe-americas"></i>
                    <h3>No Documentaries Found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }
        
        documentariesArray.forEach(doc => {
            const docCard = document.createElement('div');
            docCard.className = 'movie-card';
            docCard.dataset.id = doc.id;
            
            // Filter out 'Documentary' from genres for display
            const displayGenres = doc.genres ? doc.genres.filter(genre => genre !== 'Documentary') : [];
            
            docCard.innerHTML = `
                <div class="poster-container">
                    <img src="${doc.poster}" alt="${doc.title}" class="movie-poster" onerror="this.src='https://images.unsplash.com/photo-1614730321146-b6fa91a116b3?q=80&w=1974'">
                    <div class="rating-badge">
                        <i class="fas fa-star"></i> ${doc.rating || 'N/A'}
                    </div>
                    <div class="type-badge">${doc.type || 'Documentary'}</div>
                    ${doc.narrator ? `<div class="narrator-badge">${doc.narrator}</div>` : ''}
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${doc.title || 'Untitled'}</h3>
                    <div class="movie-meta">
                        <span>${doc.year || 'N/A'}</span>
                        <span>${doc.duration || 'N/A'}</span>
                    </div>
                    <div class="movie-tags">
                        ${displayGenres.map(genre => `<span class="movie-tag">${genre}</span>`).join('')}
                    </div>
                    <p class="movie-description">${doc.description || 'No description available.'}</p>
                    <a href="#" class="watch-btn">View Details</a>
                </div>
            `;
            documentariesGrid.appendChild(docCard);
        });
    }
    
    // Setup all event listeners
    function setupEventListeners() {
        // Documentary card click
        documentariesGrid.addEventListener('click', (e) => {
            const docCard = e.target.closest('.movie-card');
            if (docCard) {
                const docId = parseInt(docCard.dataset.id);
                openDocumentaryModal(docId);
            }
            
            if (e.target.classList.contains('watch-btn')) {
                e.preventDefault();
                const docCard = e.target.closest('.movie-card');
                const docId = parseInt(docCard.dataset.id);
                openDocumentaryModal(docId);
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
                    filterDocumentaries(category);
                }
            });
        }
        
        // Close modal
        closeModal.addEventListener('click', closeDocumentaryModal);
        
        // Close modal when clicking outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeDocumentaryModal();
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
                closeDocumentaryModal();
            }
        });
    }
    
    // Filter documentaries by category
    function filterDocumentaries(category) {
        console.log('Filtering by category:', category);
        
        if (category === 'all') {
            renderDocumentaries(enhancedDocumentaries);
            return;
        }
        
        const filteredDocumentaries = enhancedDocumentaries.filter(doc => {
            // Check genres (excluding 'Documentary' from display)
            const displayGenres = doc.genres ? doc.genres.filter(g => g !== 'Documentary').map(g => g.toLowerCase()) : [];
            
            // Also check the focus area
            const hasGenre = displayGenres.includes(category);
            const hasFocus = doc.focus && doc.focus.toLowerCase().includes(category);
            
            return hasGenre || hasFocus;
        });
        
        console.log('Filtered documentaries:', filteredDocumentaries.length);
        renderDocumentaries(filteredDocumentaries);
    }
    
    // Open documentary modal with details
    function openDocumentaryModal(docId) {
        const doc = enhancedDocumentaries.find(d => d.id === docId);
        
        if (doc) {
            modalTitle.textContent = doc.title || 'Untitled';
            modalYear.textContent = doc.year || 'N/A';
            modalDuration.textContent = doc.duration || 'N/A';
            modalRating.innerHTML = `<i class="fas fa-star"></i> ${doc.rating || 'N/A'}`;
            modalDescription.textContent = doc.description || 'No description available.';
            modalPoster.src = doc.poster;
            modalPoster.onerror = function() {
                this.src = 'https://images.unsplash.com/photo-1614730321146-b6fa91a116b3?q=80&w=1974';
            };
            
            // Update documentary-specific info
            if (documentaryType) documentaryType.textContent = doc.type || 'N/A';
            if (narratorName) narratorName.textContent = doc.narrator || 'N/A';
            if (documentaryFocus) documentaryFocus.textContent = doc.focus || 'N/A';
            
            // Clear and add tags (excluding 'Documentary' genre)
            modalTags.innerHTML = '';
            const displayGenres = doc.genres ? doc.genres.filter(genre => genre !== 'Documentary') : [];
            displayGenres.forEach(genre => {
                const tag = document.createElement('span');
                tag.className = 'tag';
                tag.textContent = genre;
                modalTags.appendChild(tag);
            });
            
            // Clear and add why watch points
            whyWatchList.innerHTML = '';
            if (doc.whyWatch && Array.isArray(doc.whyWatch)) {
                doc.whyWatch.forEach(point => {
                    const li = document.createElement('li');
                    li.textContent = point;
                    whyWatchList.appendChild(li);
                });
            }
            
            // Clear and add platforms
            platforms.innerHTML = '';
            if (doc.platforms && Array.isArray(doc.platforms)) {
                doc.platforms.forEach(platform => {
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
    
    // Close documentary modal
    function closeDocumentaryModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Search documentaries
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (!searchTerm) {
            // If search is empty, show all documentaries
            const activeCategory = document.querySelector('.category-btn.active');
            if (activeCategory) {
                filterDocumentaries(activeCategory.dataset.category);
            } else {
                renderDocumentaries(enhancedDocumentaries);
            }
            return;
        }
        
        const filteredDocumentaries = enhancedDocumentaries.filter(doc => 
            (doc.title && doc.title.toLowerCase().includes(searchTerm)) ||
            (doc.description && doc.description.toLowerCase().includes(searchTerm)) ||
            (doc.genres && doc.genres.some(genre => genre.toLowerCase().includes(searchTerm))) ||
            (doc.narrator && doc.narrator.toLowerCase().includes(searchTerm)) ||
            (doc.focus && doc.focus.toLowerCase().includes(searchTerm))
        );
        
        renderDocumentaries(filteredDocumentaries);
    }
    
    // Initialize the documentaries page
    initDocumentariesPage();
});