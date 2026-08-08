# Propuestas de Mejora y Optimización - DnD Build Archivist

Documento de análisis de arquitectura, componentes Vue, scripts de conversión y flujos de trabajo del proyecto.

---

## 1. 🐛 Correcciones en el Parser de Markdown (`scripts/md_to_json.py`)

### 1.1. Control de Bloques de Código (Code Blocks Guard)
* **Problema:** El parser actual evalúa encabezados (`#`) y tablas (`|`) línea por línea sin verificar si la línea está dentro de un bloque de código markdown (`````...`````). Si un bloque contiene código con comentarios o tablas de ejemplo, rompe la estructura del JSON resultante.
* **Solución:** Introducir una bandera `in_code_block` al iterar por las líneas:
  ```python
  if stripped.startswith("```"):
      in_code_block = not in_code_block
      continue
  ```

### 1.2. Soporte para Tuberías Escapadas (`\|`) en Tablas
* **Problema:** `split('|')` separa celdas dividiendo erróneamente por tuberías dentro de código o texto escapado (`\|`).
* **Solución:** Usar expresiones regulares para procesar delimitadores sin afectar caracteres escapados.

---

## 2. ⚡ Unificación de Scripts de Conversión (`sync-data`, `md-to-json`, `md_to_json.py`)

* **Problema de Mantenibilidad:** Existen múltiples scripts que realizan conversiones y sincronizaciones parciales o totales:
  - `scripts/sync-data.js`
  - `scripts/md-to-json.js`
  - `scripts/md_to_json.py`
* **Propuesta:** Centralizar la conversión en un único pipeline en Node.js (aprovechando el entorno de Astro). Esto garantiza que:
  - No existan discrepancias entre el JSON estático generado y los datos leídos en tiempo de ejecución.
  - El comando `npm run sync-data` (ejecutado en `predev` y `prebuild`) sea la única fuente de verdad.
  - Los scripts `.bat` llamen directamente a este script Node.js unificado.

---

## 3. 🎨 Mejoras en los Componentes Vue

### 3.1. Estadísticas Primarias Dinámicas (`BuildStatsGrid.vue`)
* **Problema:** La función `isPrimaryStat` tiene las características hardcodeadas (`['SAB', 'WIS', 'DES', 'DEX', 'CON', 'INT']`).
* **Solución:** Calcular dinámicamente qué característica resaltar según las clases declaradas en la build (ej. Carisma para Warlock/Sorcerer/Paladin, Fuerza/Destreza para Fighter/Barbarian).

### 3.2. Tolerancia en Regex de Atributos
* **Problema:** La expresión `statRegex` exige un formato estricto `**STR:** 16 (+3)`. Ligeras variaciones tipográficas en el markdown (ej. `**STR**: 16` o `STR: 16 (+3)`) provocan que no se rendericen en el dashboard.
* **Solución:** Hacer la regex flexible ante espacios y ubicación de asteriscos.

### 3.3. Tipado Estricto de TypeScript (`BuildDetail.vue` & `BuildStatsGrid.vue`)
* **Solución:** Reemplazar tipos `any` por interfaces fuertemente tipadas (`ParsedBuildData`, `BuildSection`, `TableData`, `Build`).

---

## 4. 🧹 Higiene del Repositorio y Gestión de Artefactos Git

* **Filtro de Archivos Compilados (`.gitignore`):**
  - Actualmente `public/builds/` contiene más de 100 archivos `.json` duplicados de la carpeta `builds/`.
  - Dado que estos se vuelven a generar automáticamente al ejecutar `npm run build` o `npm run dev`, se recomienda incluirlos en `.gitignore` para no saturar el historial de Git con cambios redundantes de artefactos generados.

---
*Fecha de creación: 2 de Agosto de 2026*
