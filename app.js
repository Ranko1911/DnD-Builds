document.addEventListener('DOMContentLoaded', () => {
    let buildsData = [];
    let selectedBuild = null;
    let selectedFile = 'character guide.md';

    // Elements
    const buildsList = document.getElementById('builds-list');
    const searchInput = document.getElementById('build-search');
    const filterSystem = document.getElementById('filter-system');
    const filterRole = document.getElementById('filter-role');
    const buildsCount = document.getElementById('builds-count');
    
    // Stats elements
    const statTotal = document.getElementById('stat-total');
    const stat2024 = document.getElementById('stat-2024');
    const stat2014 = document.getElementById('stat-2014');
    
    // View panels
    const welcomeView = document.getElementById('welcome-view');
    const buildContentView = document.getElementById('build-content-view');
    
    // Detail headers
    const detailBuildName = document.getElementById('detail-build-name');
    const detailSystemBadge = document.getElementById('detail-system-badge');
    const detailClasses = document.getElementById('detail-classes');
    const detailYoutubeBtn = document.getElementById('detail-youtube-btn');
    
    // Tabs & Viewer
    const tabButtons = document.querySelectorAll('.tab-btn');
    const markdownViewer = document.getElementById('markdown-viewer');

    // Configure Marked Options
    marked.setOptions({
        gfm: true,
        breaks: true,
        headerIds: false,
        mangle: false
    });

    // 1. Fetch builds catalog metadata
    fetch('builds.json')
        .then(response => response.json())
        .then(data => {
            buildsData = data;
            updateStats();
            renderBuildsList();
        })
        .catch(err => {
            console.error('Error al cargar builds.json:', err);
            buildsList.innerHTML = '<p class="error-msg">Error al cargar el catálogo de builds.</p>';
        });

    // Update Catalog Statistics
    function updateStats() {
        const total = buildsData.length;
        const count2024 = buildsData.filter(b => b.system.includes('2024')).length;
        const count2014 = total - count2024;
        
        statTotal.textContent = total;
        stat2024.textContent = count2024;
        stat2014.textContent = count2014;
        buildsCount.textContent = total;
    }

    // Render Build Cards List
    function renderBuildsList() {
        buildsList.innerHTML = '';
        
        const searchQuery = searchInput.value.toLowerCase().trim();
        const systemFilter = filterSystem.value;
        const roleFilter = filterRole.value.toLowerCase();
        
        const filtered = buildsData.filter(build => {
            // Search match
            const matchesSearch = 
                build.name.toLowerCase().includes(searchQuery) ||
                build.classes.toLowerCase().includes(searchQuery) ||
                build.role.toLowerCase().includes(searchQuery);
            
            // System match
            const matchesSystem = 
                systemFilter === 'all' || 
                (systemFilter === '2024' && build.system.includes('2024')) ||
                (systemFilter === '2014' && build.system.includes('2014'));
            
            // Role match
            const matchesRole = 
                roleFilter === 'all' ||
                build.role.toLowerCase().includes(roleFilter);
                
            return matchesSearch && matchesSystem && matchesRole;
        });

        buildsCount.textContent = filtered.length;

        if (filtered.length === 0) {
            buildsList.innerHTML = '<p class="no-results">No se encontraron builds.</p>';
            return;
        }

        filtered.forEach(build => {
            const card = document.createElement('div');
            card.className = `build-card ${selectedBuild && selectedBuild.id === build.id ? 'active' : ''}`;
            
            const is2024 = build.system.includes('2024');
            const systemClass = is2024 ? 'system-2024' : 'system-2014';
            const systemLabel = is2024 ? '5.5e (2024)' : '5e (2014)';
            
            // Roles list tags
            const roles = build.role.split('/').map(r => r.trim());
            const rolesHTML = roles.map(r => `<span class="role-badge">${r}</span>`).join('');

            card.innerHTML = `
                <div class="card-title-row">
                    <h3>${build.name}</h3>
                    <span class="system-badge ${systemClass}">${systemLabel}</span>
                </div>
                <div class="card-classes">${build.classes}</div>
                <div class="card-role-row">
                    ${rolesHTML}
                </div>
            `;
            
            card.addEventListener('click', () => selectBuildCard(build));
            buildsList.appendChild(card);
        });
    }

    // Select and Load a Build
    function selectBuildCard(build) {
        selectedBuild = build;
        
        // Highlight active card
        document.querySelectorAll('.build-card').forEach(card => {
            card.classList.remove('active');
        });
        
        // Re-render sidebar to apply active class properly
        renderBuildsList();

        // Switch panel view
        welcomeView.classList.add('hidden');
        buildContentView.classList.remove('hidden');

        // Populate detail header
        detailBuildName.textContent = build.name;
        detailClasses.textContent = build.classes;
        
        const is2024 = build.system.includes('2024');
        detailSystemBadge.className = `system-badge ${is2024 ? 'system-2024' : 'system-2014'}`;
        detailSystemBadge.textContent = is2024 ? 'D&D 2024 (5.5e)' : 'D&D 5e (2014)';

        // YouTube Button
        if (build.youtube) {
            detailYoutubeBtn.href = build.youtube;
            detailYoutubeBtn.classList.remove('hidden');
        } else {
            detailYoutubeBtn.classList.add('hidden');
        }

        // Set default tab back to guide
        selectedFile = 'character guide.md';
        updateActiveTab();
        
        // Load the file content
        loadTabContent();
    }

    // Load Markdown File content of Selected Tab
    function loadTabContent() {
        if (!selectedBuild) return;

        markdownViewer.innerHTML = '<div class="skeleton-loader" style="height: 250px;"></div>';
        
        const filePath = `${selectedBuild.folder}/${selectedFile}`;

        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Archivo no disponible');
                }
                return response.text();
            })
            .then(markdown => {
                // Parse markdown into HTML
                const htmlContent = marked.parse(markdown);
                markdownViewer.innerHTML = `<div class="markdown-viewer-content">${htmlContent}</div>`;
                
                // Render KaTeX Math Equations
                if (window.renderMathInElement) {
                    renderMathInElement(markdownViewer, {
                        delimiters: [
                            {left: '$$', right: '$$', display: true},
                            {left: '$', right: '$', display: false},
                            {left: '\\(', right: '\\)', display: false},
                            {left: '\\[', right: '\\]', display: true}
                        ],
                        throwOnError: false
                    });
                }
            })
            .catch(err => {
                console.warn('Error loading tab file:', filePath, err);
                markdownViewer.innerHTML = `
                    <div class="markdown-viewer-content">
                        <h3>Contenido No Disponible</h3>
                        <p>No se pudo cargar el archivo <code>${selectedFile}</code> para esta build.</p>
                        <p>Asegúrate de que el archivo existe en el directorio <code>${selectedBuild.folder}/</code>.</p>
                    </div>
                `;
            });
    }

    // Update Active Tab Button Styles
    function updateActiveTab() {
        tabButtons.forEach(btn => {
            if (btn.getAttribute('data-file') === selectedFile) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Setup Tab Button Event Listeners
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedFile = btn.getAttribute('data-file');
            updateActiveTab();
            loadTabContent();
        });
    });

    // Intercept Link Clicks inside Markdown Viewer to Switch Tabs
    markdownViewer.addEventListener('click', (e) => {
        const anchor = e.target.closest('a');
        if (!anchor) return;
        
        const href = anchor.getAttribute('href');
        if (!href) return;
        
        // Match relative links like ./roadmap.md or roadmap.md
        if (href.endsWith('.md') && (href.startsWith('./') || !href.includes('/'))) {
            e.preventDefault();
            
            // Clean path
            const filename = href.replace('./', '');
            
            // Find tab button with matching file
            const targetTab = Array.from(tabButtons).find(btn => btn.getAttribute('data-file') === filename);
            if (targetTab) {
                targetTab.click();
            }
        }
    });

    // Setup Search and Filters Listeners
    searchInput.addEventListener('input', renderBuildsList);
    filterSystem.addEventListener('change', renderBuildsList);
    filterRole.addEventListener('change', renderBuildsList);
});
