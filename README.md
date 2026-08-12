# 📜 DnD-Builds

Archivo personal de builds optimizados para **Dungeons & Dragons 5e** (ediciones 2014 y 2024/5.5e). Incluye una web app local para navegar, comparar y consultar los personajes con renderizado de Markdown y fórmulas LaTeX.

---

## 🌐 Web App

La app se sirve estáticamente. Para abrirla localmente:

```bash
# Cualquier servidor HTTP estático funciona, p.ej.:
python -m http.server 8000
# Luego abrir http://localhost:8000
```

**Stack:** HTML + Vanilla CSS + Vanilla JS (sin frameworks, sin build step).  
**Dependencias CDN:** [Marked.js](https://marked.js.org/) (Markdown) • [KaTeX](https://katex.org/) (LaTeX) • Google Fonts (Inter / Outfit).

### Funcionalidades

- 🗂️ **Catálogo** con tarjetas filtrables por reglamento, clase y rol principal.
- 🔍 **Búsqueda** por nombre, clase o rol con actualización en tiempo real.
- 📑 **Visor de documentos** con 6 pestañas por build (Guía de Personaje, Conjuros, Roadmap, Inventario Actual, Objetos por Tier, Bastión).
- 📊 **Radar chart** de estadísticas por build (DPR / EHP / Control / Soporte / Complejidad) en **Escala 0–100**.
- ⚔️ **Comparador de builds** en gráfico de radar superpuesto y tabla comparativa interactiva con resaltado del ganador.
- 🎚️ **Slider de nivel** para mostrar progresión y filtrado dinámico.
- 📺 **Enlace a YouTube** cuando la build cuenta con vídeo de referencia.

---

## 📊 Cálculo de Estadísticas y Valoraciones (Escala 0–100)

Todas las valoraciones del radar y la tabla comparativa se evalúan en una escala normalizada de **0 a 100**, considerando el rendimiento del personaje a **Nivel 20 con su equipamiento definitivo (Tier 4 / Legendario)**:

1. **⚔️ Daño (DPR - Damage Per Round):**
   - **Métrica:** Daño sostenido plano por asalto (sin consumir recursos limitados) + Daño de ráfaga (*Burst Damage*) por descanso corto/largo.
   - **Cálculo:** Evalúa la probabilidad de impacto con ventaja $P(\text{Impacto}) \times \text{Daño Promedio}$, número de ataques por turno, multiplicadores de cantrips redefinidos (2024 *True Strike*, *Green-Flame Blade*, *Booming Blade*), dados extra por armas mágicas (*Ascendant Dragon's Wrath*, *Flame Tongue*, *Holy Avenger*) y probabilidad de golpe crítico.
   - **Escala:** $100/100$ representa $+100$ DPR plano sostenido o ráfagas explosivas sostenidas de $+150$ en combate.

2. **🛡️ Tanque / Aguante (EHP - Effective Hit Points):**
   - **Métrica:** Puntos de golpe efectivos acumulados + Clase de Armadura (CA) activa y pasiva + Bonificadores a salvaciones de concentración + Resistencias e inmunidades de especie/objetos.
   - **Cálculo:** Combina CA base y reactiva (ej: CA 27+ con *Shield* a voluntad), bonificadores a salvaciones de Constitución ($+13$ o más con ventaja vía *War Caster* / *Mind Sharpener*), inmunidades de tipo (ej: *Reborn*, *Armor of Invulnerability*) y reducción directa de daño (*Song of Defense*, *Rage*).
   - **Escala:** $100/100$ representa invulnerabilidad virtual o CA 29+ indestructible.

3. **🌪️ Control (Control de Masas / Campo de Batalla):**
   - **Métrica:** Capacidad para alterar el terreno, inmovilizar o aislar jefes enemigos e imponer estados nocivos (*Paralyzed*, *Restrained*, *Frightened*).
   - **Cálculo:** Mide la Clase de Salvación (CD de conjuros de 19 a 22+ con objetos como *Staff of the Magi*, *Amulet of the Devout +3*, *Tome of Clear Thought*), acceso a conjuros de control sin salvación (*Forcecage*, *Maze*, *Wall of Force*), habilidades de empuje (*Repelling Blast*) y desventaja impuesta a salvaciones enemigas (*Ollamh Harp*).

4. **💖 Soporte (Curación, Bufos y Utilidad de Grupo):**
   - **Métrica:** Capacidad para mantener con vida al equipo, otorgar ventaja o puntos de golpe temporales a aliados, desacoplar efectos nocivos y maximizar tiradas del grupo.
   - **Cálculo:** Evalúa conjuros de soporte masivo (*Mass Cure Wounds*, *Twinned Heal*, *Bless*, *Foresight*), maximización de sanación (*Book of Exalted Deeds*), capacidades de mitigación a aliados y reservas de curación reactivas (*Healing Light*).

5. **🛠️ Utilidad (Versatilidad y Exploración Fuera de Combate):**
   - **Métrica:** Capacidad del personaje para resolver desafíos fuera del combate (infiltración, habilidades sociales, investigación, rituales arcanos y movilidad logística).
   - **Cálculo:** Evalúa el perfil de *Skill Monkey* (múltiples competencias y *Expertise*), acceso a rituales de exploración (*Find Familiar*, *Teleportation Circle*, *Leomund's Tiny Hut*), capacidades de sigilo, movilidad global (vuelo, teletransporte, velocidades especiales) y utilidades de tiempo muerto o bastión.

6. **🧠 Complejidad (Nivel de Microgestión Táctica):**
   - **Métrica:** Nivel de gestión táctica exigido al jugador durante el turno y en la preparación pre-combate.
   - **Cálculo:** Evalúa la cantidad de opciones por turno (uso simultáneo de Acción, Acción Adicional y Reacción), interacción entre reglas de multiclaseo, gestión de libro de conjuros hasta Nivel 9, invocaciones/esbirros simultáneos (*Undead Thralls*, *Simulacrum*, *Imp*) y microgestión de recursos.

7. **📊 Media Total (Rating Global):**
   - **Fórmula de la Tabla:**
     $$\text{Media Total} = \frac{\text{DPR} + \text{EHP} + \text{Control} + \text{Soporte} + \text{Utilidad}}{5}$$
   - Muestra la valoración global integrada sobre 100 en el catálogo y ranking. *(Nota: La Complejidad se mide de 0 a 100 como indicador de dificultad de juego para el jugador, pero se excluye del promedio de efectividad).*

---

## 📁 Estructura del Repositorio

```
DnDbuilds/
├── index.html              # App principal
├── style.css               # Estilos (dark mode, glassmorphism)
├── app.js                  # Lógica de la app y renderizado de gráficos
├── builds.json             # Índice de todos los builds y ratings (0-100)
├── builds/                 # Catálogo de builds (36 personajes + plantilla)
│   └── <nombre-del-build>/ # Una carpeta por build
│       ├── character guide.md      # Resumen general, combat loop, matemáticas
│       ├── roadmap.md              # Progresión nivel 1-20
│       ├── spell list.md           # Lista de conjuros optimizada
│       ├── actual inventory list.md # Inventario actual (Nivel 20 / Tier 4)
│       ├── item list to obtain.md  # Objetos mágicos a conseguir por Tier (1 a 4)
│       └── bastion and downtime.md # Bastión (6 instalaciones), tiempo muerto y logística
├── docs/                   # Documentación adicional e ideas de implementación
├── scratch/                # Transcripciones y scripts utilitarios
└── ollama-agent.cjs        # Agente LLM local para consultar e interactuar
```

### `builds.json` — Esquema de Entrada

```jsonc
{
  "id": "slug-del-build",       // Usado en la URL ?build=slug
  "name": "Nombre del Build",
  "classes": "Clase (Subclase) X / Clase Y",
  "system": "D&D 5e (2014)",    // o "D&D 5e (2024 / 5.5e)"
  "role": "Rol en combate",
  "folder": "builds/nombre de carpeta",
  "youtube": "https://...",     // null si no tiene vídeo
  "ratings": { "dpr": 0-100, "ehp": 0-100, "control": 0-100, "support": 0-100, "utility": 0-100, "complexity": 0-100 }
}
```

---

## 🛡️ Builds Disponibles (36 Personajes Optimizados)

| Build | Clases | Sistema | Rol | YouTube |
| :--- | :--- | :---: | :--- | :---: |
| **Barbarian from Hell** | Barbarian (Zealot) 6 / Warlock (Fiend) 14 | D&D 5e (2014) | Tanque de Espinas de Vanguardia / Atacante Pesado | [Vídeo](https://www.youtube.com/watch?v=gZEG5HBO2mo) |
| **Non-Hexblade Fire Genie** | Barbarian (Zealot) 6 / Warlock (Genie - Efreeti) 14 | D&D 5e (2024 / 5.5e) | Atacante de Fuego Ofensivo / Gish Móvil | [Vídeo](https://www.youtube.com/watch?v=UmiNKz9TXvw) |
| **Clocklock** | Sorcerer (Clockwork Soul) 18 / Warlock (Hexblade) 2 | D&D 5e (2014) | Lanzador de Retaguardia / Soporte / Controlador de Probabilidades | — |
| **Cursed Pirate** | Druid (Circle of the Stars) 20 | D&D 5e (2014) | Controlador / Lanzador / Atacante Estelar | — |
| **Hexbow** | Warlock (Hexblade) 17 / Fighter (Battle Master) 3 | D&D 5e (2014) | Atacante Nova a Distancia / Francotirador de Campo | — |
| **Light of Tomorrow** | Sorcerer (Divine Soul) 18 / Warlock (Hexblade) 2 | D&D 5e (2014) | Lanzador de Retaguardia / Sanador Principal / Soporte | [Vídeo](https://www.youtube.com/watch?v=mStIR0mOJ1Y) |
| **Spirit Caller** | Wizard (Necromancer) 20 | D&D 5e (2024 / 5.5e) | Invocador Aéreo de Retaguardia / Maestro Controlador | — |
| **Techpriest** | Artificer (Armorer) 14 / Cleric (Forge) 6 | D&D 5e (2014) | Tanque Temible de Vanguardia / Controlador de Amenaza | [Vídeo](https://www.youtube.com/watch?v=2AlDD4nQW-8) |
| **Tempest Demiurge** | Cleric (Tempest) 4 / Wizard (Scribes) 16 | D&D 5e (2024 / 5.5e) | Tanque Gish de Vanguardia / Lanzador Táctico en Área | [Vídeo](https://www.youtube.com/watch?v=29_n1luQRmI) |
| **Wrathful Whisperer** | Paladin 2 / Bard (College of Swords) 18 | D&D 5e (2014) | Atacante de Vanguardia / Tanque de Evasión | — |
| **Moon Guardian** | Barbarian (Ancestral Guardian) 7 / Druid (Circle of the Moon) 13 | D&D 5e (2014) | Tanque Protector de Vanguardia / Soporte Sanador Secundario | [Vídeo](https://www.youtube.com/watch?v=WXXzI8kzwnY) |
| **The Bullet** | Artificer (Alchemist) 14 / Fighter 2 / Wizard (Bladesinger) 2 / Monk 2 | D&D 5e (2014) | Especialista en Velocidad / Corredor a Distancia / Especialista en Movilidad | [Vídeo](https://www.youtube.com/watch?v=2VaxXiIcgDU) |
| **Eldritch Shadow** | Fighter (Eldritch Knight) 20 | D&D 5e (2014) | Atacante Gish de Vanguardia / Controlador del Campo de Batalla | [Vídeo](https://www.youtube.com/watch?v=3cTpabjXj90) |
| **Magical Mischief Murder Man** | Sorcerer 1 / Rogue (Swashbuckler) 19 | D&D 5e (2024 / 5.5e) | Atacante de Vanguardia / Líder Social / Maestro de Habilidades | [Vídeo](https://www.youtube.com/watch?v=CwWNdQ_7uGc) |
| **Beelzebub's Ballista** | Warlock (Celestial) 19 / Fighter 1 | D&D 5e (2024 / 5.5e) | Atacante de Control a Distancia / Torreta de Artillería | [Vídeo](https://www.youtube.com/watch?v=CwWNdQ_7uGc) |
| **Nick Nack Nabber** | Artificer (Armorer) 17 / Rogue (Thief) 3 | D&D 5e (2024 / 5.5e) | Tanque de Vanguardia / Utilidad / Especialista en Objetos | [Vídeo](https://www.youtube.com/watch?v=CwWNdQ_7uGc) |
| **Furry Fury** | Bard (Valor) 19 / Warlock 1 | D&D 5e (2024 / 5.5e) | Atacante Nova Cuerpo a Cuerpo y Distancia / Soporte | [Vídeo](https://www.youtube.com/watch?v=CwWNdQ_7uGc) |
| **Furious Paradox** | Wizard (Bladesinger) 18 / Barbarian 2 | D&D 5e (2014) | Tanque de Espinas y Aguante / Gish | [Vídeo](https://www.youtube.com/watch?v=CwWNdQ_7uGc) |
| **Spymaster** | Rogue (Soulknife) 18 / Artificer 2 | D&D 5e (2024 / 5.5e) | Infiltrador / Maestro de Habilidades / Gish de Utilidad | [Vídeo](https://www.youtube.com/watch?v=gZEG5HBO2mo) |
| **BONK** | Barbarian (Beast) 3 / Monk (Long Death) 17 | D&D 5e (2014) | Atacante de Vanguardia / Agarrador / Tanque de Vida Temporal | [Vídeo](https://www.youtube.com/watch?v=29_n1luQRmI) |
| **Le Biter** | Fighter (Battle Master) 17 / Bard (Swords) 3 | D&D 5e (2014) | Gish de Vanguardia / Controlador / Líder Social | [Vídeo](https://www.youtube.com/watch?v=gZEG5HBO2mo) |
| **Penny Pinchin' Preacher** | Rogue (Soulknife) 18 / Cleric (Twilight) 2 | D&D 5e (2024 / 5.5e) | Soporte Resistente / Maestro de Habilidades / Infiltrador | [Vídeo](https://www.youtube.com/watch?v=gZEG5HBO2mo) |
| **Bear with a Flamethrower** | Druid (Moon) 17 / Artificer (Artillerist) 3 | D&D 5e (2024 / 5.5e) | Lanzador de Fuego en Forma Salvaje / Tanque de Vida Temporal | [Vídeo](https://www.youtube.com/watch?v=gZEG5HBO2mo) |
| **Fartificer** | Fighter (Eldritch Knight) 17 / Artificer (Battle Smith) 3 | D&D 5e (2014) | Francotirador de Artefactos / Atacante Pesado | [Vídeo](https://www.youtube.com/watch?v=29_n1luQRmI) |
| **Fist of God** | Monk (Way of Mercy) 12 / Cleric (War Domain) 8 | D&D 5e (2014) | Atacante de Vanguardia / Sanador Divino / Controlador | [Vídeo](https://www.youtube.com/watch?v=29_n1luQRmI) |
| **Priest of the Wilds** | Ranger (Fey Wanderer) 12 / Cleric (War Domain) 8 | D&D 5e (2014) | Francotirador Nova a Distancia / Torreta de Soporte | [Vídeo](https://www.youtube.com/watch?v=Yddy6J-_VMU) |
| **Shadow Tank** | Warlock (Hexblade) 17 / Barbarian (Totem Warrior) 3 | D&D 5e (2014) | Tanque de Espinas / Atacante Pesado | [Vídeo](https://www.youtube.com/watch?v=Yddy6J-_VMU) |
| **Sneaky Smasher** | Rogue (Soulknife) 17 / Barbarian (Totem Warrior) 3 | D&D 5e (2014) | Atacante de Evasión de Vanguardia / Agarrador | [Vídeo](https://www.youtube.com/watch?v=Yddy6J-_VMU) |
| **Warrior of Flame** | Sorcerer (Draconic) 14 / Paladin (Devotion) 6 | D&D 5e (2014) | Atacante Nova de Vanguardia / Soporte de Auras | [Vídeo](https://www.youtube.com/watch?v=Yddy6J-_VMU) |
| **Iron Dancer** | Wizard (Bladesinger) 18 / Artificer 2 | D&D 5e (2014) | Tanque de Evasión / Ángel de Metamorfosis / Maestro de Conjuros | [Vídeo](https://www.youtube.com/watch?v=Yddy6J-_VMU) |
| **Super Sneaker Life Deleter** | Rogue (Assassin) 14 / Fighter (Battle Master) 6 | D&D 5e (2014 / 2024) | Asesino de Emboscada / Atacante Ráfaga de Primer Turno | [Vídeo](https://www.youtube.com/watch?v=29_n1luQRmI) |
| **Hurricane Monk** | Monk (Warrior of Elements) 19 / Ranger 1 | D&D 5e (2024 / 5.5e) | Controlador Marcial de Vanguardia / Martinete Aéreo / Dominador de Campo | [Vídeo](https://www.youtube.com/watch?v=jtlTkKIYpJc) |
| **Death Knight** | Artificer (Battle Smith) 3 / Wizard (Necromancy) 17 | D&D 5e (2014) | Tanque Gish de Vanguardia / Comandante Nigromante / Controlador Glaciar | [Vídeo](https://www.youtube.com/watch?v=ACBnrSxzHoE) |
| **The Conductor** | Cleric (Order Domain) 1 / Bard (College of Glamour) 19 | D&D 5e (2014) | Soporte Total / Habilitador de Reacciones / Director Táctico | [Vídeo](https://www.youtube.com/watch?v=9QPHif--dts) |
| **Armorlock** | Artificer (Armorer) 17 / Warlock (Fathomless) 3 | D&D 5e (2014) | Tanque Pesado de Inteligencia / Provocador de Amenaza / Controlador de Velocidad | [Vídeo](https://www.youtube.com/watch?v=4BNa8c2wR0w) |
| **Shadow Mage** | Cleric (Twilight Domain) 2 / Wizard (Bladesinger) 18 | D&D 5e (2014) | Atacante Gish de Súper Ventaja / Tanque de Evasión / Controlador del Crepúsculo | [Vídeo](https://www.youtube.com/watch?v=gXSIsFy_HA8) |

---

## 🏠 Reglas de la Mesa

Todos los builds se calculan bajo estas reglas caseras aprobadas por el DM:

1. **Foco Universal Único:** Un único foco canaliza e inicia todos los conjuros del personaje, independientemente de la clase. Ignora las restricciones de manos libres y componentes somáticos/materiales (sin coste en oro) si el personaje empuña o viste dicho foco.

2. **Progresión Full Caster Integrada:** El personaje prepara conjuros usando su **nivel de lanzador total unificado** (suma de niveles en clases con progresión de lanzador). Puede preparar y lanzar conjuros de nivel superior de *cualquier* lista de clase que posea, siempre que tenga slots de ese nivel.

---

## ➕ Añadir un nuevo build

1. Crear la carpeta `<nombre>/` con los 6 archivos del template (copiar desde `template/`).
2. Añadir la entrada correspondiente en `builds.json`.
3. Recargar la app (el build aparecerá automáticamente en el catálogo).
