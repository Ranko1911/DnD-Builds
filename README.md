#  DnD-Builds

Archivo personal de builds optimizados para **Dungeons & Dragons 5e** (ediciones 2014 y 2024/5.5e). Incluye una web app local para navegar, comparar y consultar los personajes con renderizado de Markdown y f�rmulas LaTeX.

---

##  Web App

La app se sirve est�ticamente. Para abrirla localmente:

```bash
# Cualquier servidor HTTP est�tico funciona, p.ej.:
python -m http.server 8000
# Luego abrir http://localhost:8000
```

**Stack:** HTML + Vanilla CSS + Vanilla JS  sin frameworks, sin build step.  
**Dependencias CDN:** [Marked.js](https://marked.js.org/) (Markdown) � [KaTeX](https://katex.org/) (LaTeX) � Google Fonts (Inter / Outfit).

### Funcionalidades

-  **Cat�logo** con tarjetas filtrables por reglamento y rol
-  **B�squeda** por nombre, clase o rol
-  **Visor de documentos** con 6 pesta�as por build (gu�a, conjuros, roadmap, inventario, objetos, basti�n)
-  **Radar chart** de estad�sticas por build (DPR / EHP / Control / Soporte / Complejidad)
-  **Comparador** de hasta N builds en gr�fico superpuesto + tabla
-  **Slider de nivel** para mostrar progresi�n
-  **Enlace a YouTube** cuando el build tiene v�deo de referencia

---

##  Estructura del Repositorio

```
DnDbuilds/

 index.html              # App principal
 style.css               # Estilos (dark mode, glassmorphism)
 app.js                  # L�gica de la app
 builds.json             # �ndice de todos los builds

 <nombre-del-build>/     # Una carpeta por build
     character guide.md      # Resumen general, combat loop, matem�ticas
     roadmap.md              # Progresi�n nivel 1-20
     spell list.md           # Lista de conjuros optimizada
     actual inventory list.md # Inventario actual
     item list to obtain.md  # Objetos m�gicos a conseguir (por tier)
     bastion and downtime.md # Basti�n, tiempo muerto, facciones, log�stica
```

### `builds.json`  esquema de entrada

```jsonc
{
  "id": "slug-del-build",       // usado en la URL ?build=slug
  "name": "Nombre del Build",
  "classes": "Clase (Subclase) X / Clase Y",
  "system": "D&D 5e (2014)",    // o "D&D 5e (2024 / 5.5e)"
  "role": "Rol en combate",
  "folder": "nombre de carpeta",
  "youtube": "https://...",     // null si no tiene v�deo
  "ratings": { "dpr": 0-10, "ehp": 0-10, "control": 0-10, "support": 0-10, "complexity": 0-10 }
}
```

---

##  Builds Disponibles

| Build                   | Clases                                                                 | Sistema | Rol                                             |                     YouTube                      |
| :---------------------- | :--------------------------------------------------------------------- | :-----: | :---------------------------------------------- | :----------------------------------------------: |
| **Barbarian from Hell** | Barbarian (Zealot) 6 / Warlock (Fiend) 14                              |  2014   | Frontline Thorns Tank / Heavy Striker           |                                                 |
| **Clocklock**           | Sorcerer (Clockwork Soul) 18 / Warlock (Hexblade) 2                    |  2014   | Backline Blaster / Probability Manipulator      |                                                 |
| **Cursed Pirate**       | Druid (Circle of the Stars) 20                                         |  2014   | Controller / Blaster                            |                                                 |
| **Hexbow**              | Warlock (Hexblade) 17 / Fighter (Battle Master) 3                      |  2014   | Ranged Nova Striker / Battlefield Sniper        |                                                 |
| **Light of Tomorrow**   | Sorcerer (Divine Soul) 18 / Warlock (Hexblade) 2                       |  2014   | Backline Blaster / Primary Healer / Support     | [](https://www.youtube.com/watch?v=mStIR0mOJ1Y) |
| **Spirit Caller**       | Wizard (Necromancer) 6                                                 |  2024   | Backline Aerial Summoner / Controller           |                                                 |
| **Techpriest**          | Artificer (Armorer) 14 / Cleric (Forge) 6                              |  2014   | Frontline Dread Tank / Aggro Controller         | [](https://www.youtube.com/watch?v=2AlDD4nQW-8) |
| **Tempest Demiurge**    | Cleric (Tempest) 4 / Wizard (Scribes) 16                               |  2024   | Frontline Gish Tank / AoE Blaster               | [](https://www.youtube.com/watch?v=E3uPr0wLiaQ) |
| **Wrathful Whisperer**  | Paladin 2 / Bard (College of Swords) 18                                |  2014   | Frontline Striker / Evasion Tank                |                                                 |
| **Moon Guardian**       | Barbarian (Ancestral Guardian) 7 / Druid (Circle of the Moon) 13       |  2014   | Frontline Protector Tank / Off-Healer           | [](https://www.youtube.com/watch?v=WXXzI8kzwnY) |
| **The Bullet**          | Artificer (Alchemist) 14 / Fighter 2 / Wizard (Bladesinger) 2 / Monk 2 |  2014   | Speed Gimmick / Ranged Sprinter (702 km/h)      | [](https://www.youtube.com/watch?v=2VaxXiIcgDU) |
| **Eldritch Shadow**     | Fighter (Eldritch Knight) 20                                           |  2014   | Frontline Gish Striker / Battlefield Controller | [](https://www.youtube.com/watch?v=3cTpabjXj90) |

---

##  Reglas de Mesa

Todos los builds se calculan bajo estas reglas caseras aprobadas por el DM:

1. **Foco Universal �nico:** Un �nico foco canaliza e inicia todos los conjuros del personaje, independientemente de la clase. Ignora las restricciones de manos libres y componentes som�ticos/materiales (sin coste en oro) si el personaje empu�a o viste dicho foco.

2. **Progresi�n Full Caster Integrada:** El personaje prepara conjuros usando su **nivel de lanzador total unificado** (suma de niveles en clases con progresi�n de lanzador). Puede preparar y lanzar conjuros de nivel superior de _cualquier_ lista de clase que posea, siempre que tenga slots de ese nivel.

---

##  A�adir un nuevo build

1. Crear la carpeta `<nombre>/` con los 6 archivos del template (copiar desde `template/`).
2. A�adir la entrada en `builds.json`.
3. Recargar la app  aparece autom�ticamente.
