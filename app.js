document.addEventListener('DOMContentLoaded', () => {
    let buildsData = [];
    let selectedBuild = null;
    let selectedFile = 'character guide.md';
    let lastScrollTop = 0;

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
        'tank': ['tank', 'frontline', 'defensor', 'aggro'],
        'blaster': ['blaster', 'aoe', 'AoE'],
        'controller': ['controller', 'controlador'],
        'striker': ['striker', 'dps', 'melee'],
        'healer': ['healer', 'support', 'sanador', 'soporte']
    };

    // Class Colors mapping for D&D classes
    const CLASS_COLORS = {
        'barbarian': { primary: '#ef4444', secondary: '#b91c1c' }, // Reds
        'bard': { primary: '#ec4899', secondary: '#a855f7' },      // Pink/Purple
        'cleric': { primary: '#eab308', secondary: '#ca8a04' },    // Golds
        'druid': { primary: '#10b981', secondary: '#047857' },     // Greens
        'fighter': { primary: '#64748b', secondary: '#475569' },   // Steels
        'monk': { primary: '#06b6d4', secondary: '#0891b2' },      // Cyans
        'paladin': { primary: '#f59e0b', secondary: '#d97706' },    // Ambers
        'ranger': { primary: '#84cc16', secondary: '#65a30d' },     // Lime/Olive
        'rogue': { primary: '#334155', secondary: '#0f172a' },      // Dark Slate
        'sorcerer': { primary: '#ec4899', secondary: '#db2777' },   // Deep Pink
        'warlock': { primary: '#8b5cf6', secondary: '#6d28d9' },    // Violet/Purple
        'wizard': { primary: '#3b82f6', secondary: '#1d4ed8' },     // Blues
        'artificer': { primary: '#f97316', secondary: '#ea580c' }   // Orange
    };

    // Helper to convert hex to rgba
    function hexToRgba(hex, alpha) {
        hex = hex.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // Extract D&D class colors dynamically from classes string
    function getColorsForClasses(classesStr) {
        if (!classesStr) return null;
        
        const lowerStr = classesStr.toLowerCase();
        const knownClasses = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard', 'artificer'];
        
        const classIndices = [];
        knownClasses.forEach(cls => {
            const index = lowerStr.indexOf(cls);
            if (index !== -1) {
                classIndices.push({ cls, index });
            }
        });
        
        classIndices.sort((a, b) => a.index - b.index);
        const classes = classIndices.map(item => item.cls);
        
        if (classes.length === 0) return null;
        
        const primaryClass = classes[0];
        const secondaryClass = classes[1] || primaryClass;
        
        const primaryColor = CLASS_COLORS[primaryClass].primary;
        const secondaryColor = classes.length > 1 ? CLASS_COLORS[secondaryClass].primary : CLASS_COLORS[primaryClass].secondary;
        
        return {
            primary: primaryColor,
            primaryGlow: hexToRgba(primaryColor, 0.15),
            secondary: secondaryColor,
            secondaryGlow: hexToRgba(secondaryColor, 0.15)
        };
    }

    // Apply colors to document root
    function applyDynamicTheme(colors) {
        const root = document.documentElement;
        if (!colors) {
            // Default Indigo/Violet theme
            root.style.setProperty('--color-primary', '#6366f1');
            root.style.setProperty('--color-primary-glow', 'rgba(99, 102, 241, 0.15)');
            root.style.setProperty('--color-secondary', '#a855f7');
            root.style.setProperty('--color-secondary-glow', 'rgba(168, 85, 247, 0.15)');
            return;
        }
        
        root.style.setProperty('--color-primary', colors.primary);
        root.style.setProperty('--color-primary-glow', colors.primaryGlow);
        root.style.setProperty('--color-secondary', colors.secondary);
        root.style.setProperty('--color-secondary-glow', colors.secondaryGlow);
    }

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

    // Mobile specific controls
    const btnBackCatalog = document.getElementById('btn-back-catalog');
    const btnBackBottom = document.getElementById('btn-back-bottom');
    const btnToggleFilters = document.getElementById('btn-toggle-filters');
    const filterGroup = document.getElementById('filter-group');

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
            card.setAttribute('data-id', build.id);
            
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
            
            // Add click handlers to badges for interactive filtering
            const sysBadge = card.querySelector('.system-badge');
            if (sysBadge) {
                sysBadge.addEventListener('click', (e) => {
                    e.stopPropagation(); // Avoid selecting the card
                    filterSystem.value = is2024 ? '2024' : '2014';
                    renderBuildsList();
                });
            }

            const roleBadges = card.querySelectorAll('.role-badge');
            roleBadges.forEach(badge => {
                badge.addEventListener('click', (e) => {
                    e.stopPropagation(); // Avoid selecting the card
                    
                    const badgeText = badge.textContent.toLowerCase().trim();
                    let filterValue = 'all';
                    
                    if (badgeText.includes('tank') || badgeText.includes('frontline')) filterValue = 'tank';
                    else if (badgeText.includes('blaster') || badgeText.includes('aoe')) filterValue = 'blaster';
                    else if (badgeText.includes('controller') || badgeText.includes('controlador')) filterValue = 'controller';
                    else if (badgeText.includes('striker') || badgeText.includes('dps') || badgeText.includes('melee')) filterValue = 'striker';
                    else if (badgeText.includes('healer') || badgeText.includes('support') || badgeText.includes('soporte') || badgeText.includes('sanador')) filterValue = 'healer';
                    
                    filterRole.value = filterValue;
                    renderBuildsList();
                });
            });

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
            document.body.classList.remove('has-build-selected');
            
            // Un-highlight all cards
            document.querySelectorAll('.build-card').forEach(c => c.classList.remove('active'));
            
            // Reset to default theme
            applyDynamicTheme(null);
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
                document.body.classList.add('has-build-selected');

                // Apply dynamic class theme
                applyDynamicTheme(getColorsForClasses(build.classes));

                // Close filters in mobile view
                if (filterGroup) filterGroup.classList.remove('active');
                if (btnToggleFilters) btnToggleFilters.classList.remove('active');

                // Sync sidebar cards state
                document.querySelectorAll('.build-card').forEach(card => {
                    if (card.getAttribute('data-id') === build.id) {
                        card.classList.add('active');
                    } else {
                        card.classList.remove('active');
                    }
                });

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
                // 1. Auto-link plain text relative path references (like ./roadmap.md)
                let processedMarkdown = markdown.replace(/(?:^|\s)(\.\/[a-zA-Z0-9\s_-]+\.md)/g, (match, path) => {
                    const cleanPath = path.trim();
                    const fileName = cleanPath.replace('./', '');
                    const label = FILE_LABELS[fileName] || fileName;
                    return ` [${label}](${encodeURI(cleanPath)})`;
                });

                // 2. Extract math blocks to protect them from marked.js parsing
                const mathBlocks = [];
                
                // Protect display math $$...$$
                processedMarkdown = processedMarkdown.replace(/\$\$([\s\S]+?)\$\$/g, (match, math) => {
                    const id = `MATHDISPLAYPLACEHOLDER${mathBlocks.length}`;
                    mathBlocks.push({ id, math, display: true });
                    return id;
                });

                // Protect inline math $...$ (ignore escaped \$ and empty $$)
                processedMarkdown = processedMarkdown.replace(/\$([^$\n]+?)\$/g, (match, math) => {
                    const id = `MATHINLINEPLACEHOLDER${mathBlocks.length}`;
                    mathBlocks.push({ id, math, display: false });
                    return id;
                });

                // 3. Parse with marked
                let htmlContent = marked.parse(processedMarkdown);

                // 4. Restore math blocks
                mathBlocks.forEach(({ id, math, display }) => {
                    const restored = display ? `$$${math}$$` : `$${math}$`;
                    htmlContent = htmlContent.replace(id, restored);
                });

                markdownViewer.innerHTML = `<div class="markdown-viewer-content">${htmlContent}</div>`;
                
                // Scroll details to top on file load
                markdownViewer.scrollTop = 0;
                buildContentView.classList.remove('hide-details-nav');
                lastScrollTop = 0;

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
                // Scroll the active tab into view on mobile
                btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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
        
        // Decoded filename for matching
        const decodedHref = decodeURIComponent(href);
        
        // Match relative links like ./roadmap.md or roadmap.md
        if (decodedHref.endsWith('.md') && (decodedHref.startsWith('./') || !decodedHref.includes('/'))) {
            e.preventDefault();
            const filename = decodedHref.replace('./', '');
            
            if (ORDERED_FILES.includes(filename)) {
                navigateTo(selectedBuild.id, filename);
            }
        }
    });

    // Setup Search and Filters Listeners
    searchInput.addEventListener('input', renderBuildsList);
    filterSystem.addEventListener('change', renderBuildsList);
    filterRole.addEventListener('change', renderBuildsList);

    // Mobile Back Button handler
    if (btnBackCatalog) {
        btnBackCatalog.addEventListener('click', () => {
            navigateTo(null);
            // Hide filters on back
            if (filterGroup) filterGroup.classList.remove('active');
            if (btnToggleFilters) btnToggleFilters.classList.remove('active');
        });
    }

    // Bottom Back Button handler
    if (btnBackBottom) {
        btnBackBottom.addEventListener('click', () => {
            navigateTo(null);
            if (filterGroup) filterGroup.classList.remove('active');
            if (btnToggleFilters) btnToggleFilters.classList.remove('active');
        });
    }

    // Mobile Filters toggle handler
    if (btnToggleFilters && filterGroup) {
        btnToggleFilters.addEventListener('click', () => {
            filterGroup.classList.toggle('active');
            btnToggleFilters.classList.toggle('active');
        });
    }

    // Scroll event on markdown viewer to hide/show header & tabs
    const scrollThreshold = 10;
    markdownViewer.addEventListener('scroll', () => {
        const scrollTop = markdownViewer.scrollTop;
        
        // Don't trigger if scroll change is too small
        if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) {
            return;
        }

        if (scrollTop > lastScrollTop && scrollTop > 50) {
            // Scrolling down -> hide header and tabs
            buildContentView.classList.add('hide-details-nav');
        } else {
            // Scrolling up -> show header and tabs
            buildContentView.classList.remove('hide-details-nav');
        }
        
        lastScrollTop = scrollTop;
    });

    // Watch hashchange
    window.addEventListener('hashchange', handleHashChange);
});
