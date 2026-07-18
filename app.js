document.addEventListener('DOMContentLoaded', () => {
    let buildsData = [];
    let selectedBuild = null;
    let selectedFile = 'character guide.md';
    let lastScrollTop = 0;
    let lastClientHeight = 0;
    let lastScrollHeight = 0;
    let selectedLevel = 20;
    let currentBuildLevelsMap = {};
    let compareBuildIds = [];

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
    const sortSelect = document.getElementById('sort-select');
    
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

    // Level selector
    const levelSlider = document.getElementById('level-slider');
    const levelValueEl = document.getElementById('level-value');

    // Panel toggles
    const toggleTracker = document.getElementById('toggle-tracker');
    const toggleRadar = document.getElementById('toggle-radar');

    // Layout customization elements
    const appHeader = document.getElementById('app-header');
    const buildsSidebar = document.getElementById('builds-sidebar');
    const sidebarResizer = document.getElementById('sidebar-resizer');
    const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
    const btnLayoutSettings = document.getElementById('btn-layout-settings');
    const layoutSettingsDropdown = document.getElementById('layout-settings-dropdown');
    const settingToggleSidebar = document.getElementById('setting-toggle-sidebar');
    const settingToggleHeader = document.getElementById('setting-toggle-header');
    const settingSidebarWidth = document.getElementById('setting-sidebar-width');
    const valSidebarWidth = document.getElementById('val-sidebar-width');
    const btnRestoreHeader = document.getElementById('btn-restore-header');

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

        // Sort filtered array
        const sortValue = sortSelect ? sortSelect.value : 'name-asc';
        filtered.sort((a, b) => {
            const r = (build, key) => (build.ratings && build.ratings[key]) || 0;
            if (sortValue === 'name-asc')        return a.name.localeCompare(b.name);
            if (sortValue === 'name-desc')       return b.name.localeCompare(a.name);
            if (sortValue === 'class-asc')       return a.classes.localeCompare(b.classes);
            if (sortValue === 'class-desc')      return b.classes.localeCompare(a.classes);
            if (sortValue === 'dpr-desc')        return r(b, 'dpr')        - r(a, 'dpr');
            if (sortValue === 'ehp-desc')        return r(b, 'ehp')        - r(a, 'ehp');
            if (sortValue === 'control-desc')    return r(b, 'control')    - r(a, 'control');
            if (sortValue === 'support-desc')    return r(b, 'support')    - r(a, 'support');
            if (sortValue === 'complexity-asc')  return r(a, 'complexity') - r(b, 'complexity');
            if (sortValue === 'complexity-desc') return r(b, 'complexity') - r(a, 'complexity');
            return 0;
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

            const isChecked = compareBuildIds.includes(build.id) ? 'checked' : '';

            card.innerHTML = `
                <div class="card-title-row">
                    <div class="card-compare-selector">
                        <input type="checkbox" class="compare-checkbox" id="chk-${build.id}" data-id="${build.id}" ${isChecked}>
                        <label for="chk-${build.id}" class="compare-checkbox-custom" title="Seleccionar para comparar"></label>
                    </div>
                    <h3>${build.name}</h3>
                    <span class="system-badge ${systemClass}">${systemLabel}</span>
                </div>
                <div class="card-classes">${build.classes}</div>
                <div class="card-role-row">
                    ${rolesHTML}
                </div>
            `;
            
            // Prevent card selection when clicking on the checkbox area
            const compareSelector = card.querySelector('.card-compare-selector');
            if (compareSelector) {
                compareSelector.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            }
            
            // Add change handlers to checkboxes
            const checkbox = card.querySelector('.compare-checkbox');
            if (checkbox) {
                checkbox.addEventListener('change', () => {
                    toggleBuildCompare(build.id, checkbox.checked);
                });
            }

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
            
            // Hide compare-view
            const compareView = document.getElementById('compare-view');
            if (compareView) compareView.classList.add('hidden');

            // Hide radar-table-view
            const radarTableView = document.getElementById('radar-table-view');
            if (radarTableView) radarTableView.classList.add('hidden');

            // Un-highlight all cards
            document.querySelectorAll('.build-card').forEach(c => c.classList.remove('active'));
            
            // Reset to default theme
            applyDynamicTheme(null);
            if (btnShowRadarTable) btnShowRadarTable.classList.remove('active');
            
            // Hide resource tracker
            const tracker = document.getElementById('resource-tracker');
            if (tracker) tracker.classList.add('hidden');
            return;
        }

        const params = new URLSearchParams(hash);
        const buildId = params.get('build');
        const view = params.get('view');
        const file = params.get('file') || 'character guide.md';

        if (view === 'radar-table') {
            document.body.classList.add('has-build-selected');
            
            // Hide other views
            welcomeView.classList.add('hidden');
            buildContentView.classList.add('hidden');
            const compareView = document.getElementById('compare-view');
            if (compareView) compareView.classList.add('hidden');
            
            // Show radar table view
            const radarTableView = document.getElementById('radar-table-view');
            if (radarTableView) radarTableView.classList.remove('hidden');
            if (btnShowRadarTable) btnShowRadarTable.classList.add('active');
            
            // Un-highlight all cards
            document.querySelectorAll('.build-card').forEach(c => c.classList.remove('active'));
            
            // Render the data
            renderRadarTableData();
            applyDynamicTheme(null);
            
            // Close filters in mobile view
            if (filterGroup) filterGroup.classList.remove('active');
            if (btnToggleFilters) btnToggleFilters.classList.remove('active');
            return;
        }

        if (buildId) {
            const build = buildsData.find(b => b.id === buildId);
            if (build) {
                selectedBuild = build;
                selectedFile = file;
                document.body.classList.add('has-build-selected');

                // Hide compare-view
                const compareView = document.getElementById('compare-view');
                if (compareView) compareView.classList.add('hidden');

                // Hide radar table view
                const radarTableView = document.getElementById('radar-table-view');
                if (radarTableView) radarTableView.classList.add('hidden');

                // Apply dynamic class theme
                applyDynamicTheme(getColorsForClasses(build.classes));
                if (btnShowRadarTable) btnShowRadarTable.classList.remove('active');

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

                // Reset level slider
                selectedLevel = 20;
                currentBuildLevelsMap = {};
                if (levelSlider) { levelSlider.value = 20; }
                if (levelValueEl) { levelValueEl.textContent = '20'; }

                // Fetch roadmap in background to build levels map
                fetch(`${build.folder}/roadmap.md`)
                    .then(r => r.ok ? r.text() : Promise.reject())
                    .then(md => {
                        currentBuildLevelsMap = parseRoadmapLevels(md);
                        renderResourceTracker(build);
                        if (selectedFile === 'roadmap.md') applyRoadmapFilter();
                    })
                    .catch(() => renderResourceTracker(build));

                // Refresh subcomponents
                updateBreadcrumbs();
                updateActiveTab();
                loadTabContent();
                updateNavButtons();
                renderResourceTracker(build);
                renderRadarChart(build);
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
                lastClientHeight = 0;
                lastScrollHeight = 0;

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

                // Apply level filter if viewing roadmap
                if (selectedFile === 'roadmap.md') applyRoadmapFilter();
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
    if (sortSelect) {
        sortSelect.addEventListener('change', renderBuildsList);
    }

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
        const clientHeight = markdownViewer.clientHeight;
        const scrollHeight = markdownViewer.scrollHeight;

        // Initialize values on first scroll
        if (lastClientHeight === 0 && lastScrollHeight === 0) {
            lastClientHeight = clientHeight;
            lastScrollHeight = scrollHeight;
        }

        // If the container's height or scroll content height changes, it is a layout-induced scroll.
        // Update baseline measurements and return without toggling the header class.
        if (clientHeight !== lastClientHeight || scrollHeight !== lastScrollHeight) {
            lastClientHeight = clientHeight;
            lastScrollHeight = scrollHeight;
            lastScrollTop = scrollTop;
            return;
        }
        
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

    // Spell slots progression table (1 to 20 caster level)
    const SPELL_SLOTS_TABLE = {
        1: [2],
        2: [3],
        3: [4, 2],
        4: [4, 3],
        5: [4, 3, 2],
        6: [4, 3, 3],
        7: [4, 3, 3, 1],
        8: [4, 3, 3, 2],
        9: [4, 3, 3, 3, 1],
        10: [4, 3, 3, 3, 2],
        11: [4, 3, 3, 3, 2, 1],
        12: [4, 3, 3, 3, 2, 1],
        13: [4, 3, 3, 3, 2, 1, 1],
        14: [4, 3, 3, 3, 2, 1, 1],
        15: [4, 3, 3, 3, 2, 1, 1, 1],
        16: [4, 3, 3, 3, 2, 1, 1, 1],
        17: [4, 3, 3, 3, 2, 1, 1, 1, 1],
        18: [4, 3, 3, 3, 3, 1, 1, 1, 1],
        19: [4, 3, 3, 3, 3, 2, 1, 1, 1],
        20: [4, 3, 3, 3, 3, 2, 2, 1, 1]
    };

    // Parser to extract levels from classes string
    function parseClasses(classesStr) {
        const result = {
            barbarian: 0, bard: 0, cleric: 0, druid: 0, fighter: 0, monk: 0,
            paladin: 0, ranger: 0, rogue: 0, sorcerer: 0, warlock: 0, wizard: 0, artificer: 0
        };
        if (!classesStr) return result;
        
        const parts = classesStr.split('/');
        parts.forEach(part => {
            const lowerPart = part.toLowerCase();
            const matchClass = Object.keys(result).find(cls => lowerPart.includes(cls));
            if (matchClass) {
                const numMatch = part.match(/\d+/);
                if (numMatch) {
                    result[matchClass] = parseInt(numMatch[0]);
                }
            }
        });
        return result;
    }

    // Render interactive resource tracker panel
    function renderResourceTracker(build) {
        const tracker = document.getElementById('resource-tracker');
        if (!tracker) return;
        if (!toggleTracker || !toggleTracker.checked) { tracker.classList.add('hidden'); return; }
        
        // Use level-aware class split when available
        let levels;
        if (Object.keys(currentBuildLevelsMap).length > 0 && selectedLevel < 20) {
            const base = { barbarian:0, bard:0, cleric:0, druid:0, fighter:0, monk:0, paladin:0, ranger:0, rogue:0, sorcerer:0, warlock:0, wizard:0, artificer:0 };
            let t = selectedLevel;
            while (t > 0 && !currentBuildLevelsMap[t]) t--;
            levels = { ...base, ...(currentBuildLevelsMap[t] || {}) };
        } else {
            levels = parseClasses(build.classes);
        }
        const casterLevel = levels.sorcerer + levels.cleric + levels.druid + levels.wizard + levels.bard + Math.floor(levels.paladin / 2) + Math.ceil(levels.artificer / 2);
        
        let resources = [];
        
        // 1. Barbarian Rages
        if (levels.barbarian > 0) {
            let ragesCount = 2;
            if (levels.barbarian > 2 && levels.barbarian <= 5) ragesCount = 3;
            else if (levels.barbarian > 5 && levels.barbarian <= 11) ragesCount = 4;
            else if (levels.barbarian > 11 && levels.barbarian <= 16) ragesCount = 5;
            else if (levels.barbarian > 16) ragesCount = 6;
            resources.push({ id: 'rage', label: 'Furias (Rage)', count: ragesCount });
        }
        
        // 2. Bardic Inspiration (CHA mod uses, min 1; die scales with bard level)
        if (levels.bard > 0) {
            const biUses = Math.max(1, 5); // Assuming CHA 20 = mod 5
            let biDie = 'd6';
            if (levels.bard >= 15) biDie = 'd12';
            else if (levels.bard >= 10) biDie = 'd10';
            else if (levels.bard >= 5) biDie = 'd8';
            resources.push({ id: 'inspiration', label: `Inspiración Bárdica (${biDie})`, count: biUses });
        }
        
        // 3. Sorcery Points
        if (levels.sorcerer >= 2) {
            resources.push({ id: 'sorcery', label: 'Puntos de Sorcería', count: levels.sorcerer });
        }
        
        // 4. Warlock Pact Slots
        if (levels.warlock > 0) {
            let warlockSlots = 2;
            let warlockSlotLevel = 1;
            if (levels.warlock === 1) { warlockSlots = 1; warlockSlotLevel = 1; }
            else if (levels.warlock === 2) { warlockSlots = 2; warlockSlotLevel = 1; }
            else if (levels.warlock >= 3 && levels.warlock <= 4) { warlockSlots = 2; warlockSlotLevel = 2; }
            else if (levels.warlock >= 5 && levels.warlock <= 6) { warlockSlots = 2; warlockSlotLevel = 3; }
            else if (levels.warlock >= 7 && levels.warlock <= 8) { warlockSlots = 2; warlockSlotLevel = 4; }
            else { warlockSlots = (levels.warlock >= 17) ? 4 : 3; warlockSlotLevel = 5; }
            resources.push({ id: 'pact', label: `Espacios de Pacto (Nv. ${warlockSlotLevel})`, count: warlockSlots });
        }
        
        // 5. Wild Shape (Druid 2+)
        if (levels.druid >= 2) {
            const wsUses = (levels.druid >= 20) ? 999 : 2; // Unlimited at 20, else 2/short rest
            resources.push({ id: 'wildshape', label: wsUses === 999 ? 'Forma Salvaje (∞)' : 'Forma Salvaje', count: Math.min(wsUses, 2) });
        }

        // 6. Channel Divinity (Cleric 2+ / Paladin 3+)
        if (levels.cleric >= 2 || levels.paladin >= 3) {
            let cdUses = 1;
            if (levels.cleric >= 18) cdUses = 3;
            else if (levels.cleric >= 6) cdUses = 2;
            if (levels.paladin >= 3 && levels.cleric < 2) cdUses = 1;
            resources.push({ id: 'channel', label: 'Canalizar Divinidad', count: cdUses });
        }

        // 7. Ki / Discipline Points (Monk 2+)
        if (levels.monk >= 2) {
            resources.push({ id: 'ki', label: 'Puntos de Ki', count: levels.monk });
        }

        // 8. Lay on Hands pool (Paladin 1+) — shown as 5-point "charges"
        if (levels.paladin >= 1) {
            const lohPool = levels.paladin * 5;
            const charges = Math.floor(lohPool / 5);
            resources.push({ id: 'layonhands', label: `Imposición de Manos (${lohPool} HP)`, count: Math.min(charges, 20) });
        }

        // 9. Action Surge (Fighter 2+)
        if (levels.fighter >= 2) {
            resources.push({ id: 'actionsurge', label: 'Acción Impetuosa', count: levels.fighter >= 17 ? 2 : 1 });
        }

        // 10. Second Wind (Fighter 1+)
        if (levels.fighter >= 1) {
            resources.push({ id: 'secondwind', label: `Retomar Aliento (1d10+${levels.fighter})`, count: 1 });
        }

        // 11. Spell Slots (standard multiclass caster table)
        if (casterLevel > 0) {
            const slots = SPELL_SLOTS_TABLE[casterLevel] || [];
            slots.forEach((count, idx) => {
                resources.push({ id: `slot-${idx + 1}`, label: `Espacios Nivel ${idx + 1}`, count: count });
            });
        }
        
        if (resources.length === 0) {
            tracker.classList.add('hidden');
            return;
        }
        
        tracker.classList.remove('hidden');
        
        let html = `
            <div class="tracker-header">
                <h4>⚔️ Control de Recursos (Sesión Activa)</h4>
                <button id="btn-reset-tracker" class="btn btn-secondary btn-small">Restablecer</button>
            </div>
            <div class="tracker-grid">
        `;
        
        resources.forEach(res => {
            let bubblesHtml = '';
            const storageKey = `tracker-${build.id}-${res.id}`;
            const checkedCount = parseInt(sessionStorage.getItem(storageKey) || '0');
            
            for (let i = 0; i < res.count; i++) {
                const isChecked = i < checkedCount ? 'checked' : '';
                bubblesHtml += `<div class="tracker-bubble ${isChecked}" data-index="${i}"></div>`;
            }
            
            html += `
                <div class="tracker-group" data-res-id="${res.id}">
                    <span class="group-label">${res.label}</span>
                    <div class="group-bubbles">${bubblesHtml}</div>
                </div>
            `;
        });
        
        html += `</div>`;
        tracker.innerHTML = html;
        
        // Add click events to bubbles
        tracker.querySelectorAll('.tracker-group').forEach(group => {
            const resId = group.getAttribute('data-res-id');
            const bubbles = group.querySelectorAll('.tracker-bubble');
            const storageKey = `tracker-${build.id}-${resId}`;
            
            bubbles.forEach((bubble, idx) => {
                bubble.addEventListener('click', () => {
                    const currentChecked = parseInt(sessionStorage.getItem(storageKey) || '0');
                    let newChecked = idx + 1;
                    
                    if (currentChecked === newChecked) {
                        newChecked = idx; // Uncheck one slot
                    }
                    
                    sessionStorage.setItem(storageKey, newChecked);
                    
                    bubbles.forEach((b, bIdx) => {
                        if (bIdx < newChecked) {
                            b.classList.add('checked');
                        } else {
                            b.classList.remove('checked');
                        }
                    });
                });
            });
        });
        
        // Reset button event
        document.getElementById('btn-reset-tracker').addEventListener('click', () => {
            resources.forEach(res => {
                const storageKey = `tracker-${build.id}-${res.id}`;
                sessionStorage.removeItem(storageKey);
            });
            renderResourceTracker(build);
        });
    }

    // Render radar chart SVG for build ratings
    function renderRadarChart(build) {
        const panel = document.getElementById('radar-chart-panel');
        if (!panel) return;
        if (!toggleRadar || !toggleRadar.checked || !build.ratings) { panel.classList.add('hidden'); return; }

        const r = build.ratings;
        const MAX_RATING = 50;
        const axes = [
            { key: 'dpr',        label: 'DPR',         val: r.dpr        || 0 },
            { key: 'ehp',        label: 'EHP',         val: r.ehp        || 0 },
            { key: 'control',    label: 'Control',     val: r.control    || 0 },
            { key: 'support',    label: 'Soporte',     val: r.support    || 0 },
            { key: 'complexity', label: 'Complejidad', val: r.complexity || 0 }
        ];
        const n = axes.length;
        const cx = 180, cy = 140, maxR = 100;
        const angleOff = -Math.PI / 2; // start at top

        function polar(i, scale) {
            const a = angleOff + (2 * Math.PI * i) / n;
            return { x: cx + Math.cos(a) * maxR * scale, y: cy + Math.sin(a) * maxR * scale };
        }

        // Grid rings at 10, 20, 30, 40, 50
        let gridSvg = '';
        let ringLabelsSvg = '';
        [10, 20, 30, 40, 50].forEach(val => {
            const s = val / MAX_RATING;
            const pts = [];
            for (let i = 0; i < n; i++) { const p = polar(i, s); pts.push(`${p.x},${p.y}`); }
            const isFull = val === MAX_RATING;
            gridSvg += `<polygon points="${pts.join(' ')}" fill="none" stroke="rgba(255,255,255,${isFull ? '0.12' : '0.06'})" stroke-width="${isFull ? 1.5 : 1}"/>`;
            // Etiqueta sobre el eje DPR (apunta arriba), desplazada 6px a la derecha
            ringLabelsSvg += `<text x="${cx + 6}" y="${cy - s * maxR}" dominant-baseline="central" fill="rgba(255,255,255,0.28)" style="font-size:8px; font-family:var(--font-body);">${val}</text>`;
        });

        // Axis lines
        let axisSvg = '';
        for (let i = 0; i < n; i++) {
            const p = polar(i, 1);
            axisSvg += `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>`;
        }

        // Data polygon
        const dataPts = [];
        for (let i = 0; i < n; i++) {
            const p = polar(i, axes[i].val / MAX_RATING);
            dataPts.push(`${p.x},${p.y}`);
        }
        const dataFill = `rgba(99, 102, 241, 0.25)`;
        const dataStroke = `rgba(99, 102, 241, 0.8)`;
        const dataSvg = `<polygon points="${dataPts.join(' ')}" fill="${dataFill}" stroke="${dataStroke}" stroke-width="2"/>`;

        // Data dots + labels
        let dotsSvg = '';
        let labelsSvg = '';
        for (let i = 0; i < n; i++) {
            const pDot = polar(i, axes[i].val / MAX_RATING);
            dotsSvg += `<circle cx="${pDot.x}" cy="${pDot.y}" r="3" fill="${dataStroke}"/>`;
            // Axis label con valor integrado (evita superposición con etiquetas de anillos)
            const pLabel = polar(i, 1.22);
            const anchor = pLabel.x < cx - 5 ? 'end' : pLabel.x > cx + 5 ? 'start' : 'middle';
            labelsSvg += `<text x="${pLabel.x}" y="${pLabel.y - 6}" text-anchor="${anchor}" dominant-baseline="central" class="radar-label">${axes[i].label}</text>`;
            labelsSvg += `<text x="${pLabel.x}" y="${pLabel.y + 8}" text-anchor="${anchor}" dominant-baseline="central" class="radar-value-label">${axes[i].val}/50</text>`;
        }

        panel.innerHTML = `<svg viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg">${gridSvg}${axisSvg}${dataSvg}${dotsSvg}${ringLabelsSvg}${labelsSvg}</svg>`;
        panel.classList.remove('hidden');
    }


    // --- Level slider logic ---
    if (levelSlider) {
        levelSlider.addEventListener('input', () => {
            selectedLevel = parseInt(levelSlider.value);
            if (levelValueEl) levelValueEl.textContent = selectedLevel;
            if (selectedBuild) renderResourceTracker(selectedBuild);
            if (selectedFile === 'roadmap.md') applyRoadmapFilter();
        });
    }

    // --- Panel toggle logic ---
    if (toggleTracker) {
        toggleTracker.addEventListener('change', () => {
            if (selectedBuild) renderResourceTracker(selectedBuild);
        });
    }
    if (toggleRadar) {
        toggleRadar.addEventListener('change', () => {
            if (selectedBuild) renderRadarChart(selectedBuild);
        });
    }

    // Dim future rows & highlight current level in roadmap table
    function applyRoadmapFilter() {
        markdownViewer.querySelectorAll('table').forEach(table => {
            table.querySelectorAll('tbody tr, tr').forEach(row => {
                const firstTd = row.querySelector('td');
                if (!firstTd) return;
                const m = firstTd.textContent.match(/\d+/);
                if (!m) return;
                const rowLvl = parseInt(m[0]);
                row.classList.toggle('current-level-row', rowLvl === selectedLevel);
                row.classList.toggle('future-level-row', rowLvl > selectedLevel);
            });
        });
    }

    // Parse roadmap markdown table to extract class splits per total level
    function parseRoadmapLevels(md) {
        const map = {};
        const accum = {};
        const CLASS_MAP = {
            barbarian:'barbarian', bard:'bard', cleric:'cleric', 'clérigo':'cleric',
            druid:'druid', druida:'druid', fighter:'fighter', guerrero:'fighter',
            monk:'monk', monje:'monk', paladin:'paladin', 'paladín':'paladin',
            ranger:'ranger', explorador:'ranger', rogue:'rogue', 'pícaro':'rogue',
            sorcerer:'sorcerer', hechicero:'sorcerer', warlock:'warlock', brujo:'warlock',
            wizard:'wizard', mago:'wizard', artificer:'artificer', 'artífice':'artificer'
        };
        md.split('\n').forEach(line => {
            const t = line.trim();
            if (!t.startsWith('|')) return;
            const cells = t.split('|').map(c => c.trim()).filter(Boolean);
            if (cells.length < 2 || cells[0].includes('---') || cells[0].toLowerCase().includes('nivel')) return;
            const lvlMatch = cells[0].match(/\d+/);
            if (!lvlMatch) return;
            const lvl = parseInt(lvlMatch[0]);
            // cells[1] is the "Clase y Nivel" column
            cells[1].split('/').forEach(part => {
                const lower = part.trim().toLowerCase();
                for (const [keyword, key] of Object.entries(CLASS_MAP)) {
                    if (lower.includes(keyword)) {
                        const numM = lower.match(/\d+/);
                        if (numM) accum[key] = parseInt(numM[0]);
                        break;
                    }
                }
            });
            map[lvl] = { ...accum };
        });
        return map;
    }

    // --- Lógica del Comparador Interactivo (Fase 3) ---
    
    const compareBar = document.getElementById('compare-bar');
    const compareCount = document.getElementById('compare-count');
    const btnCompare = document.getElementById('btn-compare');
    const btnCloseCompare = document.getElementById('btn-close-compare');
    const btnCloseCompareMobile = document.getElementById('btn-close-compare-mobile');

    // Radar Table elements
    const btnShowRadarTable = document.getElementById('btn-show-radar-table');
    const welcomeBtnRadarTable = document.getElementById('welcome-btn-radar-table');
    const btnCloseRadarTable = document.getElementById('btn-close-radar-table');
    const btnCloseRadarTableMobile = document.getElementById('btn-close-radar-table-mobile');

    function toggleBuildCompare(buildId, isChecked) {
        if (isChecked) {
            if (!compareBuildIds.includes(buildId)) {
                compareBuildIds.push(buildId);
            }
        } else {
            compareBuildIds = compareBuildIds.filter(id => id !== buildId);
        }
        updateCompareBar();
    }

    function updateCompareBar() {
        if (!compareBar || !compareCount) return;
        if (compareBuildIds.length >= 2) {
            compareBar.classList.remove('hidden');
            compareCount.textContent = compareBuildIds.length;
            buildsList.classList.add('builds-sidebar-has-compare');
        } else {
            compareBar.classList.add('hidden');
            buildsList.classList.remove('builds-sidebar-has-compare');
        }
    }

    function showCompareView() {
        welcomeView.classList.add('hidden');
        buildContentView.classList.add('hidden');
        
        const compareView = document.getElementById('compare-view');
        if (compareView) {
            compareView.classList.remove('hidden');
        }
        
        document.body.classList.add('has-build-selected');
        renderCompareData();
    }

    function closeCompareView() {
        const compareView = document.getElementById('compare-view');
        if (compareView) {
            compareView.classList.add('hidden');
        }
        
        if (selectedBuild) {
            buildContentView.classList.remove('hidden');
        } else {
            welcomeView.classList.remove('hidden');
            document.body.classList.remove('has-build-selected');
        }
    }

    function highlightCompareBuild(buildId) {
        document.querySelectorAll('#compare-table-container td, #compare-table-container th').forEach(el => {
            if (el.getAttribute('data-build-id') === buildId) {
                el.classList.add('highlighted');
            } else {
                el.classList.remove('highlighted');
            }
        });
        
        document.querySelectorAll('.compare-polygon').forEach(poly => {
            if (poly.getAttribute('data-build-id') === buildId) {
                poly.classList.remove('dimmed');
                poly.classList.add('highlighted');
            } else {
                poly.classList.remove('highlighted');
                poly.classList.add('dimmed');
            }
        });
        
        document.querySelectorAll('.legend-item').forEach(item => {
            if (item.getAttribute('data-build-id') === buildId) {
                item.classList.add('highlighted');
            } else {
                item.classList.remove('highlighted');
            }
        });
    }

    function clearHighlightCompareBuild() {
        document.querySelectorAll('#compare-table-container td, #compare-table-container th').forEach(el => {
            el.classList.remove('highlighted');
        });
        document.querySelectorAll('.compare-polygon').forEach(poly => {
            poly.classList.remove('dimmed', 'highlighted');
        });
        document.querySelectorAll('.legend-item').forEach(item => {
            item.classList.remove('highlighted');
        });
    }

    function renderCompareData() {
        const tableContainer = document.getElementById('compare-table-container');
        if (!tableContainer) return;
        
        const builds = compareBuildIds.map(id => buildsData.find(b => b.id === id)).filter(Boolean);
        
        if (builds.length === 0) {
            tableContainer.innerHTML = '<p class="no-results">No hay builds seleccionadas para comparar.</p>';
            return;
        }
        
        const ratingsKeys = ['dpr', 'ehp', 'control', 'support', 'complexity'];
        const maxRatings = {};
        ratingsKeys.forEach(key => {
            maxRatings[key] = Math.max(...builds.map(b => (b.ratings && b.ratings[key]) || 0));
        });
        
        let html = `<table class="compare-table">`;
        
        // Cabecera
        html += `<thead><tr><th>Característica</th>`;
        builds.forEach(build => {
            const colors = getColorsForClasses(build.classes) || { primary: '#6366f1' };
            html += `
                <th class="build-col-${build.id}" data-build-id="${build.id}">
                    <div class="compare-header-cell">
                        <span style="color: ${colors.primary}; font-weight: 700;">${build.name}</span>
                        <button class="btn-remove-col" data-id="${build.id}" title="Quitar de la comparación">×</button>
                    </div>
                </th>
            `;
        });
        html += `</tr></thead><tbody>`;
        
        // Fila Clases
        html += `<tr><td>Clases</td>`;
        builds.forEach(build => {
            html += `<td class="build-col-${build.id}" data-build-id="${build.id}">${build.classes}</td>`;
        });
        html += `</tr>`;
        
        // Fila Reglamento
        html += `<tr><td>Reglamento</td>`;
        builds.forEach(build => {
            const is2024 = build.system.includes('2024');
            const systemClass = is2024 ? 'system-2024' : 'system-2014';
            const systemLabel = is2024 ? '2024 (5.5e)' : '2014 (5e)';
            html += `<td class="build-col-${build.id}" data-build-id="${build.id}"><span class="system-badge ${systemClass}">${systemLabel}</span></td>`;
        });
        html += `</tr>`;
        
        // Fila Rol
        html += `<tr><td>Rol Principal</td>`;
        builds.forEach(build => {
            html += `<td class="build-col-${build.id}" data-build-id="${build.id}">${build.role}</td>`;
        });
        html += `</tr>`;
        
        // Filas Ratings
        const ratingLabels = {
            dpr: 'Daño (DPR)',
            ehp: 'Tanque (EHP)',
            control: 'Control',
            support: 'Soporte',
            complexity: 'Mecánicas'
        };
        
        Object.keys(ratingLabels).forEach(key => {
            html += `<tr><td>${ratingLabels[key]}</td>`;
            builds.forEach(build => {
                const val = (build.ratings && build.ratings[key]) || 0;
                let cellContent = `${val}/50`;
                
                if (val === maxRatings[key] && val > 0) {
                    cellContent = `<span class="stat-winner">${val}/50</span>`;
                }
                
                html += `<td class="build-col-${build.id}" data-build-id="${build.id}">${cellContent}</td>`;
            });
            html += `</tr>`;
        });
        
        html += `</tbody></table>`;
        tableContainer.innerHTML = html;
        
        // Eliminar columnas
        tableContainer.querySelectorAll('.btn-remove-col').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = btn.getAttribute('data-id');
                const chk = document.getElementById(`chk-${id}`);
                if (chk) chk.checked = false;
                
                toggleBuildCompare(id, false);
                
                if (compareBuildIds.length < 2) {
                    closeCompareView();
                    renderBuildsList();
                } else {
                    renderCompareData();
                }
            });
        });
        
        // Hovers interactivos
        builds.forEach(build => {
            const cols = tableContainer.querySelectorAll(`.build-col-${build.id}`);
            cols.forEach(col => {
                col.addEventListener('mouseenter', () => {
                    highlightCompareBuild(build.id);
                });
                col.addEventListener('mouseleave', () => {
                    clearHighlightCompareBuild();
                });
            });
        });
        
        renderCompareRadar(builds);
        renderCompareLegend(builds);
    }

    function renderCompareRadar(builds) {
        const container = document.getElementById('compare-radar-chart');
        if (!container) return;
        
        const axes = [
            { key: 'dpr',        label: 'DPR' },
            { key: 'ehp',        label: 'EHP' },
            { key: 'control',    label: 'Control' },
            { key: 'support',    label: 'Soporte' },
            { key: 'complexity', label: 'Complejidad' }
        ];
        const n = axes.length;
        const MAX_RATING = 50;
        const cx = 180, cy = 140, maxR = 100;
        const angleOff = -Math.PI / 2;

        function polar(i, scale) {
            const a = angleOff + (2 * Math.PI * i) / n;
            return { x: cx + Math.cos(a) * maxR * scale, y: cy + Math.sin(a) * maxR * scale };
        }

        // Grid rings at 10, 20, 30, 40, 50
        let gridSvg = '';
        let ringLabelsSvg = '';
        [10, 20, 30, 40, 50].forEach(val => {
            const s = val / MAX_RATING;
            const pts = [];
            for (let i = 0; i < n; i++) { const p = polar(i, s); pts.push(`${p.x},${p.y}`); }
            const isFull = val === MAX_RATING;
            gridSvg += `<polygon points="${pts.join(' ')}" fill="none" stroke="rgba(255,255,255,${isFull ? '0.12' : '0.06'})" stroke-width="${isFull ? 1.5 : 1}"/>`;
            // Etiqueta sobre el eje DPR (apunta arriba), desplazada 6px a la derecha
            ringLabelsSvg += `<text x="${cx + 6}" y="${cy - s * maxR}" dominant-baseline="central" fill="rgba(255,255,255,0.28)" style="font-size:8px; font-family:var(--font-body);">${val}</text>`;
        });

        // Axis lines
        let axisSvg = '';
        for (let i = 0; i < n; i++) {
            const p = polar(i, 1);
            axisSvg += `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>`;
        }

        // Data Polygons
        let polygonsSvg = '';
        let dotsSvg = '';
        
        builds.forEach(build => {
            const r = build.ratings || {};
            const colors = getColorsForClasses(build.classes) || { primary: '#6366f1' };
            const dataPts = [];
            
            for (let i = 0; i < n; i++) {
                const key = axes[i].key;
                const val = r[key] || 0;
                const p = polar(i, val / MAX_RATING);
                dataPts.push(`${p.x},${p.y}`);
                
                dotsSvg += `<circle cx="${p.x}" cy="${p.y}" r="3.5" fill="${colors.primary}" class="compare-polygon" data-build-id="${build.id}" style="pointer-events: none;"/>`;
            }
            
            polygonsSvg += `
                <polygon points="${dataPts.join(' ')}" 
                         fill="${colors.primary}" 
                         stroke="${colors.primary}" 
                         class="compare-polygon" 
                         data-build-id="${build.id}" 
                         style="stroke: ${colors.primary}; fill: ${colors.primary};" />
            `;
        });

        // Axis labels
        let labelsSvg = '';
        for (let i = 0; i < n; i++) {
            const pLabel = polar(i, 1.22);
            const anchor = pLabel.x < cx - 5 ? 'end' : pLabel.x > cx + 5 ? 'start' : 'middle';
            labelsSvg += `<text x="${pLabel.x}" y="${pLabel.y}" text-anchor="${anchor}" dominant-baseline="central" fill="var(--color-text-muted)" style="font-size: 10px; font-weight: 600; font-family: var(--font-body);">${axes[i].label}</text>`;
        }

        container.innerHTML = `
            <svg viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg">
                ${gridSvg}
                ${axisSvg}
                ${polygonsSvg}
                ${dotsSvg}
                ${ringLabelsSvg}
                ${labelsSvg}
            </svg>
        `;
    }


    function renderCompareLegend(builds) {
        const legendContainer = document.getElementById('compare-legend');
        if (!legendContainer) return;
        
        let html = '';
        builds.forEach(build => {
            const colors = getColorsForClasses(build.classes) || { primary: '#6366f1' };
            html += `
                <div class="legend-item" data-build-id="${build.id}">
                    <span class="legend-color" style="background-color: ${colors.primary};"></span>
                    <span>${build.name}</span>
                </div>
            `;
        });
        legendContainer.innerHTML = html;
        
        legendContainer.querySelectorAll('.legend-item').forEach(item => {
            const buildId = item.getAttribute('data-build-id');
            item.addEventListener('mouseenter', () => {
                highlightCompareBuild(buildId);
            });
            item.addEventListener('mouseleave', () => {
                clearHighlightCompareBuild();
            });
        });
    }

    // --- Lógica de la Tabla Comparativa de Radar ---
    let radarTableSortKey = 'name';
    let radarTableSortDir = 'asc';

    function closeRadarTableView() {
        const radarTableView = document.getElementById('radar-table-view');
        if (radarTableView) {
            radarTableView.classList.add('hidden');
        }
        
        if (selectedBuild) {
            buildContentView.classList.remove('hidden');
            location.hash = `#build=${selectedBuild.id}&file=${encodeURIComponent(selectedFile)}`;
        } else {
            welcomeView.classList.remove('hidden');
            document.body.classList.remove('has-build-selected');
            location.hash = '';
        }
    }

    function renderRadarTableData() {
        const container = document.getElementById('radar-table-container-div');
        if (!container) return;
        
        const sortedBuilds = [...buildsData].sort((a, b) => {
            let valA, valB;
            
            if (radarTableSortKey === 'name') {
                valA = a.name.toLowerCase();
                valB = b.name.toLowerCase();
            } else if (radarTableSortKey === 'classes') {
                valA = a.classes.toLowerCase();
                valB = b.classes.toLowerCase();
            } else if (radarTableSortKey === 'system') {
                valA = a.system.toLowerCase();
                valB = b.system.toLowerCase();
            } else if (radarTableSortKey === 'role') {
                valA = a.role.toLowerCase();
                valB = b.role.toLowerCase();
            } else {
                valA = (a.ratings && a.ratings[radarTableSortKey]) || 0;
                valB = (b.ratings && b.ratings[radarTableSortKey]) || 0;
            }
            
            if (valA < valB) return radarTableSortDir === 'asc' ? -1 : 1;
            if (valA > valB) return radarTableSortDir === 'asc' ? 1 : -1;
            return 0;
        });

        const getSortIndicator = (key) => {
            if (radarTableSortKey === key) {
                return radarTableSortDir === 'asc' ? ' <span class="sort-indicator asc">▲</span>' : ' <span class="sort-indicator desc">▼</span>';
            }
            return ' <span class="sort-indicator placeholder">▲</span>';
        };

        let html = `
            <table class="radar-compare-table">
                <thead>
                    <tr>
                        <th data-sort="name" class="${radarTableSortKey === 'name' ? 'sorted' : ''}"><div class="th-content">Nombre${getSortIndicator('name')}</div></th>
                        <th data-sort="classes" class="${radarTableSortKey === 'classes' ? 'sorted' : ''}"><div class="th-content">Clases${getSortIndicator('classes')}</div></th>
                        <th data-sort="system" class="${radarTableSortKey === 'system' ? 'sorted' : ''}"><div class="th-content">Reglamento${getSortIndicator('system')}</div></th>
                        <th data-sort="role" class="${radarTableSortKey === 'role' ? 'sorted' : ''}"><div class="th-content">Rol${getSortIndicator('role')}</div></th>
                        <th data-sort="dpr" class="${radarTableSortKey === 'dpr' ? 'sorted text-center' : 'text-center'}"><div class="th-content">⚔️ Daño (DPR)${getSortIndicator('dpr')}</div></th>
                        <th data-sort="ehp" class="${radarTableSortKey === 'ehp' ? 'sorted text-center' : 'text-center'}"><div class="th-content">🛡️ Tanque (EHP)${getSortIndicator('ehp')}</div></th>
                        <th data-sort="control" class="${radarTableSortKey === 'control' ? 'sorted text-center' : 'text-center'}"><div class="th-content">🌪️ Control${getSortIndicator('control')}</div></th>
                        <th data-sort="support" class="${radarTableSortKey === 'support' ? 'sorted text-center' : 'text-center'}"><div class="th-content">💖 Soporte${getSortIndicator('support')}</div></th>
                        <th data-sort="complexity" class="${radarTableSortKey === 'complexity' ? 'sorted text-center' : 'text-center'}"><div class="th-content">🧠 Mecánicas${getSortIndicator('complexity')}</div></th>
                    </tr>
                </thead>
                <tbody>
        `;

        sortedBuilds.forEach(build => {
            const colors = getColorsForClasses(build.classes) || { primary: '#6366f1' };
            const is2024 = build.system.includes('2024');
            const systemClass = is2024 ? 'system-2024' : 'system-2014';
            const systemLabel = is2024 ? '2024 (5.5e)' : '2014 (5e)';
            
            const ratings = build.ratings || { dpr: 0, ehp: 0, control: 0, support: 0, complexity: 0 };
            
            html += `
                <tr class="radar-table-row" data-id="${build.id}">
                    <td class="build-name-cell font-heading font-bold" style="color: ${colors.primary};">
                        ${build.name}
                    </td>
                    <td class="classes-cell">${build.classes}</td>
                    <td><span class="system-badge ${systemClass}">${systemLabel}</span></td>
                    <td class="role-cell">${build.role}</td>
                    
                    <!-- DPR -->
                    <td>
                        <div class="rating-cell">
                            <span class="rating-val">${ratings.dpr}</span>
                            <div class="rating-bar-bg">
                                <div class="rating-bar-fill dpr-color" style="width: ${(ratings.dpr / 50) * 100}%"></div>
                            </div>
                        </div>
                    </td>
                    
                    <!-- EHP -->
                    <td>
                        <div class="rating-cell">
                            <span class="rating-val">${ratings.ehp}</span>
                            <div class="rating-bar-bg">
                                <div class="rating-bar-fill ehp-color" style="width: ${(ratings.ehp / 50) * 100}%"></div>
                            </div>
                        </div>
                    </td>
                    
                    <!-- Control -->
                    <td>
                        <div class="rating-cell">
                            <span class="rating-val">${ratings.control}</span>
                            <div class="rating-bar-bg">
                                <div class="rating-bar-fill control-color" style="width: ${(ratings.control / 50) * 100}%"></div>
                            </div>
                        </div>
                    </td>
                    
                    <!-- Support -->
                    <td>
                        <div class="rating-cell">
                            <span class="rating-val">${ratings.support}</span>
                            <div class="rating-bar-bg">
                                <div class="rating-bar-fill support-color" style="width: ${(ratings.support / 50) * 100}%"></div>
                            </div>
                        </div>
                    </td>
                    
                    <!-- Complexity -->
                    <td>
                        <div class="rating-cell">
                            <span class="rating-val">${ratings.complexity}</span>
                            <div class="rating-bar-bg">
                                <div class="rating-bar-fill complexity-color" style="width: ${(ratings.complexity / 50) * 100}%"></div>
                            </div>
                        </div>
                    </td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;
        
        container.innerHTML = html;

        // Add event listeners for sorting by clicking on headers
        container.querySelectorAll('thead th').forEach(th => {
            th.addEventListener('click', () => {
                const sortKey = th.getAttribute('data-sort');
                if (radarTableSortKey === sortKey) {
                    radarTableSortDir = radarTableSortDir === 'asc' ? 'desc' : 'asc';
                } else {
                    radarTableSortKey = sortKey;
                    radarTableSortDir = ['name', 'classes', 'system', 'role'].includes(sortKey) ? 'asc' : 'desc';
                }
                renderRadarTableData();
            });
        });

        // Add event listener to row clicking to navigate to the build!
        container.querySelectorAll('.radar-table-row').forEach(row => {
            row.addEventListener('click', () => {
                const buildId = row.getAttribute('data-id');
                location.hash = `#build=${buildId}&file=character%20guide.md`;
            });
        });
    }

    if (btnCompare) {
        btnCompare.addEventListener('click', showCompareView);
    }
    if (btnCloseCompare) {
        btnCloseCompare.addEventListener('click', closeCompareView);
    }
    if (btnCloseCompareMobile) {
        btnCloseCompareMobile.addEventListener('click', closeCompareView);
    }

    // Radar Table listeners
    if (btnShowRadarTable) {
        btnShowRadarTable.addEventListener('click', () => {
            const isRadarView = location.hash === '#view=radar-table' || location.hash.includes('view=radar-table');
            if (isRadarView) {
                closeRadarTableView();
            } else {
                location.hash = '#view=radar-table';
            }
        });
    }
    if (welcomeBtnRadarTable) {
        welcomeBtnRadarTable.addEventListener('click', () => {
            location.hash = '#view=radar-table';
        });
    }
    if (btnCloseRadarTable) {
        btnCloseRadarTable.addEventListener('click', closeRadarTableView);
    }
    if (btnCloseRadarTableMobile) {
        btnCloseRadarTableMobile.addEventListener('click', closeRadarTableView);
    }

    // ==========================================
    // PERSONALIZACIÓN Y AJUSTES DE INTERFAZ
    // ==========================================

    // 1. Cargar estado inicial desde localStorage
    const savedSidebarWidth = localStorage.getItem('sidebar-width') || '380';
    const savedSidebarCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
    const savedHeaderCollapsed = localStorage.getItem('header-collapsed') === 'true';

    // Aplicar ancho de barra lateral (solo en escritorio)
    if (window.innerWidth > 768) {
        applySidebarWidth(savedSidebarWidth);
    } else {
        if (buildsSidebar) buildsSidebar.style.width = '';
    }

    // Aplicar colapso de barra lateral
    if (savedSidebarCollapsed) {
        if (buildsSidebar) buildsSidebar.classList.add('collapsed');
        if (settingToggleSidebar) settingToggleSidebar.checked = true;
    }

    // Aplicar colapso de cabecera
    if (savedHeaderCollapsed) {
        if (appHeader) appHeader.classList.add('collapsed');
        if (btnRestoreHeader) btnRestoreHeader.classList.remove('hidden');
        if (settingToggleHeader) settingToggleHeader.checked = true;
    }

    // Función auxiliar para aplicar el ancho de barra lateral
    function applySidebarWidth(width) {
        if (!buildsSidebar) return;
        const w = Math.max(260, Math.min(550, parseInt(width)));
        buildsSidebar.style.width = `${w}px`;
        
        if (settingSidebarWidth) settingSidebarWidth.value = w;
        if (valSidebarWidth) valSidebarWidth.textContent = `${w}px`;
    }

    // 2. Eventos del menú desplegable de ajustes
    if (btnLayoutSettings && layoutSettingsDropdown) {
        btnLayoutSettings.addEventListener('click', (e) => {
            e.stopPropagation();
            layoutSettingsDropdown.classList.toggle('hidden');
            btnLayoutSettings.classList.toggle('active');
        });

        // Evitar que los clics dentro del dropdown lo cierren
        layoutSettingsDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Cerrar dropdown al hacer clic fuera
        document.addEventListener('click', () => {
            layoutSettingsDropdown.classList.add('hidden');
            btnLayoutSettings.classList.remove('active');
        });
    }

    // 3. Alternar colapso de barra lateral (Sidebar)
    function toggleSidebarCollapsed(collapsed) {
        if (!buildsSidebar) return;
        
        if (collapsed) {
            buildsSidebar.classList.add('collapsed');
        } else {
            buildsSidebar.classList.remove('collapsed');
        }
        
        // Sincronizar checkbox si existe
        if (settingToggleSidebar) settingToggleSidebar.checked = collapsed;
        
        localStorage.setItem('sidebar-collapsed', collapsed);
    }

    if (btnToggleSidebar) {
        btnToggleSidebar.addEventListener('click', (e) => {
            e.stopPropagation();
            const isCollapsed = buildsSidebar.classList.contains('collapsed');
            toggleSidebarCollapsed(!isCollapsed);
        });
    }

    if (settingToggleSidebar) {
        settingToggleSidebar.addEventListener('change', () => {
            toggleSidebarCollapsed(settingToggleSidebar.checked);
        });
    }

    // 4. Alternar colapso de cabecera (Header / Modo Enfoque)
    function toggleHeaderCollapsed(collapsed) {
        if (!appHeader) return;
        
        if (collapsed) {
            appHeader.classList.add('collapsed');
            if (btnRestoreHeader) btnRestoreHeader.classList.remove('hidden');
        } else {
            appHeader.classList.remove('collapsed');
            if (btnRestoreHeader) btnRestoreHeader.classList.add('hidden');
        }
        
        // Sincronizar checkbox si existe
        if (settingToggleHeader) settingToggleHeader.checked = collapsed;
        
        localStorage.setItem('header-collapsed', collapsed);
    }

    if (settingToggleHeader) {
        settingToggleHeader.addEventListener('change', () => {
            toggleHeaderCollapsed(settingToggleHeader.checked);
        });
    }

    if (btnRestoreHeader) {
        btnRestoreHeader.addEventListener('click', () => {
            toggleHeaderCollapsed(false);
        });
    }

    // 5. Cambiar ancho de la barra lateral desde el slider del dropdown
    if (settingSidebarWidth) {
        settingSidebarWidth.addEventListener('input', () => {
            const width = settingSidebarWidth.value;
            applySidebarWidth(width);
            localStorage.setItem('sidebar-width', width);
        });
    }

    // 6. Redimensionamiento manual con arrastre del divisor (Drag and Resize)
    if (sidebarResizer) {
        let isResizing = false;

        sidebarResizer.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isResizing = true;
            sidebarResizer.classList.add('active');
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            const newWidth = e.clientX;
            applySidebarWidth(newWidth);
        });

        document.addEventListener('mouseup', () => {
            if (!isResizing) return;
            isResizing = false;
            sidebarResizer.classList.remove('active');
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
            
            if (buildsSidebar && buildsSidebar.style.width) {
                const width = parseInt(buildsSidebar.style.width);
                localStorage.setItem('sidebar-width', width);
            }
        });

        // Restablecer al hacer doble clic
        sidebarResizer.addEventListener('dblclick', () => {
            applySidebarWidth(380);
            localStorage.setItem('sidebar-width', 380);
        });
    }

    // Ajuste responsivo del redimensionador al cambiar de tamaño la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            if (buildsSidebar) buildsSidebar.style.width = '';
        } else {
            const currentWidth = localStorage.getItem('sidebar-width') || '380';
            applySidebarWidth(currentWidth);
        }
    });

    // Watch hashchange
    window.addEventListener('hashchange', handleHashChange);
});
