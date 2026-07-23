# 📜 Registro de Cambios y Actualizaciones — DnDbuilds

Este documento sirve como bitácora oficial de cambios, refactorizaciones, correcciones de interfaz y recálculos del sistema de optimización (META) del proyecto.

---

## 📅 [2026-07-23] — Recálculo de Valoraciones de Builds y Migración a Astro 5 + Vue 3

### 📊 Recálculo del Sistema de Valoraciones (Archivero del Multiverso)
- **Eliminación del Inflado por Dados de Armas Legendarias:**
  - Se auditaron las 29 builds del catálogo para retirar el impacto numérico de objetos que solo añaden dados de daño brutos sin aportar mecánicas tácticas (ej. *Ascendant Dragon's Wrath weapons*, *Flame Tongue*).
  - El valor de **Daño (DPR)** se evalúa ahora estrictamente sobre la base de la economía de acciones, sinergias de conjuros (*Spirit Shroud*, *Armor of Agathys*, *Holy Weapon*, *Smite*, *Eldritch Blast* + invocaciones) y dotes mecánicas (**Sharpshooter**, **Great Weapon Master**, **Weapon Masteries 2024**).
- **Ajustes de Ratings Clave en `builds.json`:**
  - **`Hexbow`:** DPR ajustado de $100$ a **$84$**.
  - **`Warrior of Flame`:** DPR ajustado de $100$ a **$84$**.
  - **`Iron Dancer`:** DPR ajustado de $98$ a **$84$**.
  - **`The BONK`:** DPR ajustado de $96$ a **$76$**.
  - **`Le Biter`:** DPR ajustado de $88$ a **$76$**.
  - **`Beelzebub's Ballista`:** DPR ajustado de $96$ a **$84$**.
- Archivos de datos actualizados en `builds.json` y `public/builds.json`.

---

### ⚡ Migración de Arquitectura: Astro 5 + Vue 3 (Rama `dev-astro`)
- **Inicialización del Entorno:**
  - Creada y configurada la rama **`dev-astro`**.
  - Integración de **Astro 5**, **Vue 3**, `marked` para Markdown y `katex` para renderizado de fórmulas matemáticas LaTeX (`package.json`, `astro.config.mjs`, `tsconfig.json`).
  - Trasladados todos los assets estáticos (`builds/` y `builds.json`) a `public/`.

- **Componentes Creados:**
  - [`src/layouts/Layout.astro`](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/src/layouts/Layout.astro): Shell HTML con Google Fonts (Outfit e Inter) y KaTeX CSS.
  - [`src/pages/index.astro`](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/src/pages/index.astro): Punto de entrada hidratado en cliente.
  - [`src/components/AppCatalog.vue`](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/src/components/AppCatalog.vue): Componente principal reactivo en Vue 3.
  - [`src/components/RadarChart.vue`](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/src/components/RadarChart.vue): Gráfico vectorial SVG para valoraciones de 5 ejes y comparativa multiobjeto.

---

### 🛠️ Correcciones de UI e Interfaz Realizadas
1. **Ajuste de Alineación en Tarjetas del Catálogo:**
   - Añadida regla Flexbox (`display: flex; align-items: center; gap: 0.5rem;`) en `.card-header` para que el checkbox de selección, el nombre del personaje (`h3`) y el badge del reglamento estén alineados horizontalmente a la misma altura.
2. **Formateo y Estilos de Documentos `.md`:**
   - Envuelto el HTML parseado dentro de `<div class="markdown-viewer-content">...</div>` para aplicar automáticamente las 2287 líneas de estilos tipográficos, tablas responsivas, llamadas de alerta y fórmulas KaTeX de `global.css`.
   - Implementada la función `applyRoadmapTableFilter()` para destacar la fila del nivel activo (`.current-level-row`) y atenuar niveles futuros (`.future-level-row`) en `roadmap.md`.
3. **Reconstrucción Completa del Comparador:**
   - Asignación dinámica de colores por clase D&D (`getClassColor()`) en cabeceras de tabla, polígonos del radar SVG y elementos de leyenda.
   - Reintegrado el botón de eliminación de columna (`.btn-remove-col`) con el icono `×`.
   - Reintegrado el efecto interactivo de hover (`.highlighted` y `.dimmed`) entre la leyenda, la tabla y los polígonos del radar.
   - Resaltado automático de la build ganadora en cada categoría con la insignia dorada `🏆` (`.stat-winner`).

---

### 🌐 Sincronización Remota
- Subidos todos los cambios a la rama remota `origin/dev-astro` en GitHub ([`https://github.com/Ranko1911/DnD-Builds`](https://github.com/Ranko1911/DnD-Builds)).
