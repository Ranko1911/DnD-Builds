document.addEventListener('DOMContentLoaded', () => {
    let buildsData = [];
    let selectedBuild = null;
    let selectedFile = 'character guide.md';

    const ORDERED_FILES = [
        'character guide.md',
        'spell list.md',
        'roadmap.md',
        'actual inventory list.md',
        'item list to obtain.md',
        'bastion and downtime.md'
    ];

    const FILE_LABELS = {
        'character guide.md': 'Guía Principal',
        'spell list.md': 'Conjuros',
        'roadmap.md': 'Progresión',
        'actual inventory list.md': 'Inventario Equipado',
        'item list to obtain.md': 'Objetos Deseados',
        'bastion and downtime.md': 'Bastión y Tiempo Muerto'
    };

    const ROLE_KEYWORDS = {
        'tank': ['tank', 'frontline', 'defensor'],
        'blaster': ['blaster', 'aoe'],
        'controller': ['controller', 'controlador'],
        'striker': ['striker', 'dps', 'melee'],
        'healer': ['healer', 'support', 'sanador', 'soporte']
    };

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
    const detailBreadcrumbs = document.getElementById('detail-breadcrumbs');
    
    // Tabs & Viewer
    const tabButtons = document.querySelectorAll('.tab-btn');
    const markdownViewer = document.getElementById('markdown-viewer');

    // Bottom Navigation Buttons
    const btnPrevFile = document.getElementById('btn-prev-file');
    const btnNextFile = document.getElementById('btn-next-file');

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
            
            // Handle initial URL hash on page load
            handleHashChange();
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
            let matchesRole = false;
            if (roleFilter === 'all') {
                matchesRole = true;
            } else {
                const keywords = ROLE_KEYWORDS[roleFilter] || [roleFilter];
                const buildRoleLower = build.role.toLowerCase();
                matchesRole = keywords.some(keyword => buildRoleLower.includes(keyword));
            }
                
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
            
            card.addEventListener('click', () => {
                navigateTo(build.id, 'character guide.md');
            });
            buildsList.appendChild(card);
        });
    }

    // Set Hash Navigation State
    function navigateTo(buildId, file) {
        if (!buildId) {
            location.hash = '';
            return;
        }
        location.hash = `#build=${buildId}&file=${encodeURIComponent(file)}`;
    }

    // Handle Hash Router Logic
    function handleHashChange() {
        const hash = location.hash.substring(1);
        if (!hash) {
            selectedBuild = null;
            selectedFile = 'character guide.md';
            welcomeView.classList.remove('hidden');
            buildContentView.classList.add('hidden');
            
            // Un-highlight all cards
            document.querySelectorAll('.build-card').forEach(c => c.classList.remove('active'));
            return;
        }

        const params = new URLSearchParams(hash);
        const buildId = params.get('build');
        const file = params.get('file') || 'character guide.md';

        if (buildId) {
            const build = buildsData.find(b => b.id === buildId);
            if (build) {
                selectedBuild = build;
                selectedFile = file;

                // Sync sidebar cards state
                document.querySelectorAll('.build-card').forEach(card => {
                    card.classList.remove('active');
                });
                
                // Force active class in DOM
                const activeCard = Array.from(buildsList.children).find(
                    c => c.querySelector('h3').textContent === build.name
                );
                if (activeCard) {
                    activeCard.classList.add('active');
                }

                // Show details view
                welcomeView.classList.add('hidden');
                buildContentView.classList.remove('hidden');

                // Populate headers
                detailBuildName.textContent = build.name;
                detailClasses.textContent = build.classes;
                
                const is2024 = build.system.includes('2024');
                detailSystemBadge.className = `system-badge ${is2024 ? 'system-2024' : 'system-2014'}`;
                detailSystemBadge.textContent = is2024 ? 'D&D 2024 (5.5e)' : 'D&D 5e (2014)';

                if (build.youtube) {
                    detailYoutubeBtn.href = build.youtube;
                    detailYoutubeBtn.classList.remove('hidden');
                } else {
                    detailYoutubeBtn.classList.add('hidden');
                }

                // Refresh subcomponents
                updateBreadcrumbs();
                updateActiveTab();
                loadTabContent();
                updateNavButtons();
            }
        }
    }

    // Update Interactive Breadcrumbs
    function updateBreadcrumbs() {
        if (!selectedBuild) return;

        detailBreadcrumbs.innerHTML = `
            <span class="crumb-root" id="crumb-go-home">Builds</span> / 
            <span class="crumb-build" id="crumb-go-build">${selectedBuild.name}</span> / 
            <span class="crumb-file">${FILE_LABELS[selectedFile] || selectedFile}</span>
        `;

        document.getElementById('crumb-go-home').addEventListener('click', () => navigateTo(null));
        document.getElementById('crumb-go-build').addEventListener('click', () => navigateTo(selectedBuild.id, 'character guide.md'));
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
                const htmlContent = marked.parse(markdown);
                markdownViewer.innerHTML = `<div class="markdown-viewer-content">${htmlContent}</div>`;
                
                // Scroll details to top on file load
                markdownViewer.scrollTop = 0;

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

    // Update Previous / Next Navigation Buttons
    function updateNavButtons() {
        const currentIndex = ORDERED_FILES.indexOf(selectedFile);

        if (currentIndex > 0) {
            btnPrevFile.disabled = false;
            const prevFile = ORDERED_FILES[currentIndex - 1];
            btnPrevFile.title = `Ir a: ${FILE_LABELS[prevFile]}`;
        } else {
            btnPrevFile.disabled = true;
            btnPrevFile.title = '';
        }

        if (currentIndex < ORDERED_FILES.length - 1 && currentIndex !== -1) {
            btnNextFile.disabled = false;
            const nextFile = ORDERED_FILES[currentIndex + 1];
            btnNextFile.title = `Ir a: ${FILE_LABELS[nextFile]}`;
        } else {
            btnNextFile.disabled = true;
            btnNextFile.title = '';
        }
    }

    // Setup Tab Button Event Listeners
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const file = btn.getAttribute('data-file');
            navigateTo(selectedBuild.id, file);
        });
    });

    // Prev / Next button click handlers
    btnPrevFile.addEventListener('click', () => {
        const currentIndex = ORDERED_FILES.indexOf(selectedFile);
        if (currentIndex > 0) {
            navigateTo(selectedBuild.id, ORDERED_FILES[currentIndex - 1]);
        }
    });

    btnNextFile.addEventListener('click', () => {
        const currentIndex = ORDERED_FILES.indexOf(selectedFile);
        if (currentIndex < ORDERED_FILES.length - 1 && currentIndex !== -1) {
            navigateTo(selectedBuild.id, ORDERED_FILES[currentIndex + 1]);
        }
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
            const filename = href.replace('./', '');
            
            if (ORDERED_FILES.includes(filename)) {
                navigateTo(selectedBuild.id, filename);
            }
        }
    });

    // Setup Search and Filters Listeners
    searchInput.addEventListener('input', renderBuildsList);
    filterSystem.addEventListener('change', renderBuildsList);
    filterRole.addEventListener('change', renderBuildsList);

    // Watch hashchange
    window.addEventListener('hashchange', handleHashChange);
});
