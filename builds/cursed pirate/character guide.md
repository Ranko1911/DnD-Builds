# 🏴‍☠️ Archivo Técnico: Cursed Pirate — El Timonel del Arrecife Estelar

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (Unbreakable Concentration Controller & Starry Blaster)**  
**Reglas:** D&D 5.ª Edición (2014 & 2024 Compatible)  
**Nivel Total:** 20  
**Clase:** Druid (Circle of the Stars) 20  
**Especie:** Elfo de Mar (*Sea Elf* — Velocidad de nado 30 ft, respiración subacuática, resistencia al encanto) / Condición de No-Muerto  
**Trasfondo:** Marinero Maldito / Cartógrafo de las Estrellas Abisales  

---

## 📊 Estadísticas Base y Modificadores (Nivel 20)

| Característica | Puntuación | Modificador | Notas de Optimización |
| :--- | :---: | :---: | :--- |
| **Fuerza (STR)** | 10 | +0 | Carga neutral marinera. |
| **Destreza (DEX)** | 14 | +2 | Límite óptimo para aprovechar la Armadura Media (*Half-Plate*). |
| **Constitución (CON)** | 16 | +3 | 15 base + 1 dote (*Resilient: CON*). Concentración inquebrantable. |
| **Inteligencia (INT)** | 10 | +0 | Conocimiento náutico estándar. |
| **Sabiduría (WIS)** | 20 | +5 | 15 base + 2 racial + 1 *Elven Accuracy* + 2 ASI. Primaria de conjuros y Starry Form. |
| **Carisma (CHA)** | 8 | -1 | Dump stat táctico. |

* **Puntos de Golpe (HP Base):** $8 + (19 \times 5) + (20 \times 3) = \mathbf{163 \text{ HP Base}}$
* **Clase de Armadura Pasiva (AC):** $15 \text{ (Half-Plate)} + 2 \text{ (DEX)} + 2 \text{ (Escudo Base)} = \mathbf{19 \text{ CA Pasiva}}$ (Con *Half-Plate +3* y *Shield +3*: $\mathbf{25 \text{ CA Pasiva}}$; con conjuro *Shield*: $\mathbf{30 \text{ CA Reactiva}}$).
* **Salvaciones con Competencia:** Inteligencia ($+6$), Sabiduría ($+11$), Constitución ($+9$ vía *Resilient: CON*).
* **Inmunidades y Respiración:** No-Muerto (inmune a veneno y envenenado, no requiere respirar, comer ni dormir).

---

## 🔗 Navegación y Registros del Faro Estelar

* **Inventario Actual y Equipo:** [actual inventory list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/cursed%20pirate/actual%20inventory%20list.md)
* **Bastión del Faro del Arrecife Estelar:** [bastion and downtime.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/cursed%20pirate/bastion%20and%20downtime.md)
* **Grimorio Estelar y Matriz de Conjuros:** [spell list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/cursed%20pirate/spell%20list.md)
* **Arsenal y Adquisiciones Tácticas:** [item list to obtain.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/cursed%20pirate/item%20list%20to%20obtain.md)
* **Hoja de Ruta (Niveles 1-20):** [roadmap.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/cursed%20pirate/roadmap.md)
* **Manual de Conversión 2024:** [character guide 2024.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/cursed%20pirate/character%20guide%202024.md)

---

## 🧮 Motor Matemático del Archivero (LaTeX Math Engine)

### 1. Blindaje Matemático de Concentración (*Starry Form: Dragon*)
Al activar la constelación del Dragón (*Starry Form: Dragon*), cualquier tirada de d20 para una prueba de concentración o prueba de Sabiduría/Inteligencia con resultado inferior a 10 se trata automáticamente como un **10**.
Con modificador de Constitución $+3$ y competencia por *Resilient: CON* ($+6$ Prof):

$$\text{Salvación Mínima de Concentración} = 10 + 3 + 6 = \mathbf{19 \text{ Mínimo Absoluto Garantizado}}$$

Dado que la CD estándar de concentración es $\text{CD} = \max(10, \lfloor \text{Daño}/2 \rfloor)$:
* Para exigir una CD mayor a 19, un único impacto hostil debe causar al menos **40 puntos de daño**.
* Cualquier impacto que cause entre $1$ y $39$ puntos de daño tiene una probabilidad de fallo de:

$$\mathbb{P}(\text{Pérdida de Concentración ante } \le 39 \text{ Daño}) = \mathbf{0.00} \quad (0.00\% \text{ Imposibilidad Matemática})$$

### 2. Triple Ventaja con Sabiduría (*Elven Accuracy* + *Foresight*)
Lanzando *Foresight* (ventaja constante en todas las tiradas de ataque durante 8 horas) y disponiendo de la dote *Elven Accuracy*, cada tirada de ataque basada en Sabiduría lanza **3d20**:

$$\mathbb{P}(\text{Acierto contra CA 19 con +11}) = 1 - (1 - 0.65)^3 = 1 - (0.35)^3 = 1 - 0.042875 = \mathbf{0.9571} \quad (95.71\%)$$
$$\mathbb{P}(\text{Crítico con Triple Ventaja}) = 1 - (0.95)^3 = 1 - 0.857375 = \mathbf{0.1426} \quad (14.26\%)$$

### 3. Cadencia Ofensiva por Asalto (Guiding Bolt + Starry Archer)
* **Acción:** *Guiding Bolt* (Nivel 5: $8\text{d}6$ daño radiante $= 28.0$ medio). Otorga ventaja al siguiente ataque.
* **Acción Adicional:** Flecha de Luz de *Starry Form: Archer* a 60 pies ($2\text{d}8 + 5 = 14.0$ daño radiante).

$$\mathbb{E}[\text{Daño Guiding Bolt}] = (0.9571 \times 28.0) + (0.1426 \times 28.0) = 26.80 + 3.99 = \mathbf{30.79}$$
$$\mathbb{E}[\text{Daño Flecha Estelar}] = (0.9571 \times 14.0) + (0.1426 \times 9.0) = 13.40 + 1.28 = \mathbf{14.68}$$
$$\text{DPR Blaster Sostenido} = 30.79 + 14.68 = \mathbf{45.47 \text{ Daño Radiante Monotarget}}$$

Con conjuros arcanos de área (*Sunburst* o *Chain Lightning* de 9.º nivel: $12\text{d}6 = 42.0$ daño) combinados con la flecha estelar:

$$\text{DPR AoE Nova} = 42.0 \text{ (en radio de 60 ft)} + 14.68 = \mathbf{56.68 \text{ Daño Total}}$$

### 4. Puntos de Golpe Efectivos y Resistencia Física (EHP)
* **HP Base:** $163$
* **Resistencia Física (*Full of Stars* — Nivel 14 de Estrellas):** Mientras estés en Forma Estelar, obtienes **resistencia pasiva al daño contundente, perforante y cortante**. Esto duplica directamente tus HP efectivos frente a armas:

$$\text{HP Efectivos Físicos} = 163 \times 2 = \mathbf{326.0 \text{ HP}}$$

* **CA Pasiva Base:** $25$ (Half-Plate +3 + Shield +3).
* **CA Reactiva con *Shield*:** $30 \text{ CA}$.
* **Archidruida (*Archdruid* — Nivel 20):** Formas Salvajes **ilimitadas**. Si estás en apuros, puedes transformarte en *Elemental de Agua* (114 HP extras) como acción adicional todas las veces que desees, dotándote de una reserva de vida virtualmente **infinita**.

---

## ⚔️ Bucle Táctico y Economía de Acciones (Action Loop)

```
        [Ronda 0: Pre-Buff de Alta Mar]
   Foresight (8h: triple ventaja en ataques y desventaja hostil) + Starry Form (Dragon)
                    │
                    ▼
         [Ronda 1: Bloqueo de Campo]
   Acción: Wall of Force o Globe of Invulnerability (aislar enemigos arcanos)
   Bonus Action: Cambiar a Starry Form: Archer o disparar flecha de luz (2d8 + 5)
   Pasivo: Concentración blindada con mínimo 19 en dados
                    │
                    ▼
      [Ronda 2+: Bombardeo Estelar]
   Acción: Guiding Bolt (Nivel 5) o Chain Lightning / Sunburst
   Bonus Action: Flecha Estelar de Archer (14 daño a 60 ft)
   Reacción: Shield (+5 CA = CA 30) o Cosmic Omen (sumar/restar 1d6 a un d20 clave)
```

* **Acción (Action):** Conjuros arcanos de control (*Wall of Force*, *Forcecage*, *Globe of Invulnerability*) o daño de choque (*Guiding Bolt*, *Sunburst*, *Chain Lightning*).
* **Acción Adicional (Bonus Action):** Disparo de flecha luminosa de *Starry Form: Archer*, o transformación en Elemental de Agua vía *Archdruid*.
* **Reacción (Reaction):** *Shield* (+5 CA hasta CA 30), *Counterspell* (interrupción mágica) o *Cosmic Omen* (altera tiradas con $1\text{d}6$).

---

## 🏷️ Matriz de Evaluación Táctica del Archivero

| Capacidad Táctica | Nivel | Justificación del Archivero |
| :--- | :---: | :--- |
| **Blindaje de Concentración** | 🔵 | *Starry Form: Dragon* garantiza un mínimo de 19 en concentración; fallo imposible ante $\le 39$ daño. |
| **EHP y Vida Infinita** | 🔵 | *Archdruid* permite renovar formas elementales ilimitadamente; resistencia física pasiva de subclase. |
| **Precisión Balística Mágica** | 🔵 | *Elven Accuracy* + *Foresight* confiere triple ventaja permanente; 95.7% de acierto. |
| **Versatilidad de Conjuros** | 🔵 | Acceso a la lista completa de Mago combinada con la lista de Druida mediante regla de mesa. |
| **Control Náutico y Terrestre** | 🟢 | Respiración acuática, velocidad de nado nativa e inmunidad a veneno/enfermedades. |
| **Economía de Materiales** | 🔵 | *Archdruid* a nivel 20 ignora todos los componentes verbales, somáticos y materiales sin coste. |

---

## 📜 Reglas de Casa (House Rules) y Ajustes de Mesa

1. **Acceso Arcano Completo:** Toda la lista de conjuros del Mago está disponible para preparar y lanzar diariamente como conjuros de Druida utilizando **Sabiduría** como atributo rector.
2. **Condición de No-Muerto (Undead):** El Pirata cuenta como no-muerto; es inmune a daño de veneno y a la condición envenenado, no respira ni duerme. Las curaciones tradicionales de clérigo que excluyan no-muertos no le afectan, pero sus propias curaciones druídicas y de *Chalice* operan normalmente.
3. **Archidruida sin Componentes:** Cumple la regla estricta de nivel 20: puede lanzar cualquier conjuro sin componentes verbales, somáticos ni materiales no costosos, impidiendo que sea contrahechizado si se oculta.