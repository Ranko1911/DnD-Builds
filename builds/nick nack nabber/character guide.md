# 🤖 Archivo Técnico: Nick Nack Nabber — El Artífice de Manos Rápidas

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (Action Economy Abuser, Frontline Aggro Tank & Fast-Handed Gadgeteer)**  
**Reglas:** D&D 5.ª Edición (2024 Ruleset - 5.5e)  
**Nivel Total:** 20  
**División de Clases:** Artificer (Armorer) 17 / Rogue (Thief) 3  
**Especie:** Gnomo de las Rocas (*Rock Gnome* — *Gnome Cunning*: ventaja en salvaciones de INT, SAB y CAR contra magia; *Artificer's Lore*)  
**Trasfondo:** Artesano / Inventor del Gremio (*Dote de Origen: Crafter*)  

---

## 📊 Estadísticas Base y Modificadores (Nivel 20)

| Característica | Puntuación | Modificador | Notas de Optimización |
| :--- | :---: | :---: | :--- |
| **Fuerza (STR)** | 8 | -1 | Dump stat táctico (Armorer elimina requisitos de fuerza para armaduras pesadas). |
| **Destreza (DEX)** | 14 | +2 | Límite para salvaciones y habilidades de ladrón. |
| **Constitución (CON)** | 14 | +2 | Puntos de golpe y concentración en conjuros arcanos. |
| **Inteligencia (INT)** | 20 | +5 | 15 base + 2 racial + 1 *Fey Touched* + 2 ASI. Primaria absoluta de ataque, daño, CD y Flash of Genius. |
| **Sabiduría (WIS)** | 12 | +1 | Percepción y salvaciones de voluntad. |
| **Carisma (CHA)** | 10 | +0 | Habilidad social e interacción básica con gremios. |

* **Puntos de Golpe (HP Base):** $8 + (16 \times 5) + (3 \times 5) + (20 \times 2) = \mathbf{143 \text{ HP Base}}$
* **Clase de Armadura Pasiva (AC):** $18 \text{ (Plate Armor)} + 3 \text{ (Infusión/Magia)} + 2 \text{ (Escudo Base)} + 3 \text{ (Escudo +3)} = \mathbf{26 \text{ CA Pasiva}}$ (Con conjuro *Shield*: $\mathbf{31 \text{ CA Reactiva}}$).
* **Salvaciones con Competencia:** Constitución ($+8$), Inteligencia ($+11$) + *Flash of Genius* (+5 a cualquier salvación 5/día).
* **Ranuras de Sintonización:** **5 Objetos Sintonizados Simultáneamente** gracias a *Magic Item Savant* (Nivel 14 de Artífice).

---

## 🔗 Navegación y Registros de la Torre del Engranaje

* **Inventario Actual y Equipo:** [actual inventory list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/nick%20nack%20nabber/actual%20inventory%20list.md)
* **Bastión de la Torre del Engranaje:** [bastion and downtime.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/nick%20nack%20nabber/bastion%20and%20downtime.md)
* **Grimorio de Artífice y Almacén Mágico:** [spell list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/nick%20nack%20nabber/spell%20list.md)
* **Arsenal y Adquisiciones Tácticas:** [item list to obtain.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/nick%20nack%20nabber/item%20list%20to%20obtain.md)
* **Hoja de Ruta (Niveles 1-20):** [roadmap.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/nick%20nack%20nabber/roadmap.md)
* **Manual de Conversión 2024:** [character guide 2024.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/nick%20nack%20nabber/character%20guide%202024.md)

---

## 🧮 Motor Matemático del Archivero (LaTeX Math Engine)

### 1. El Bucle Roto de Economía de Acciones (*Fast Hands* + *Spell-Storing Item*)
En las reglas de 2024, la habilidad *Fast Hands* (Nivel 3 de Thief) permite ejecutar la **Acción Magic** (la acción requerida para activar objetos mágicos y el *Spell-Storing Item*) como una **Acción Adicional**.
* **Spell-Storing Item (Nivel 11 de Artífice):** Contiene **10 usos** de un conjuro de nivel 1 o 2 (ej. *Web*, *Vortex Warp* o *Cure Wounds*).
* **Consecuencia Táctica:** El Armorer ataca dos veces con su Acción principal para fijar el aggro enemigo e inmediatamente lanza un conjuro de control de área (*Web*) o cura a un aliado como Acción Adicional sin consumir ninguna ranura de conjuro.

### 2. Fijación de Aggro: Guanteletes del Trueno (*Thunder Gauntlets*)
Con *Extra Attack* empuñando los Guanteletes del Trueno (Armadura modelo Guardián):
* **Bono de Ataque:** $+5 \text{ (INT)} + 6 \text{ (Prof)} + 3 \text{ (Infusión)} = \mathbf{+14 \text{ al Impactar}}$.
* **Probabilidad de Impacto frente a CA 19:** $\mathbb{P}(\text{Acierto}) = \frac{21 - 5}{20} = \mathbf{0.80} \quad (80.0\%)$.

$$\text{Daño por Impacto} = 1\text{d}8 + 5 \text{ (INT)} + 3 \text{ (Mágico)} = 4.5 + 8 = \mathbf{12.5 \text{ Daño de Trueno}}$$
$$\text{DPR Melee (2 Golpes)} = 2 \times 12.5 = \mathbf{25.0 \text{ Daño de Trueno}}$$

* **Efecto de Provocación Ineludible:** Cada criatura impactada sufre **Desventaja en todas sus tiradas de ataque contra cualquier objetivo que no seas tú** hasta el inicio de tu siguiente turno. Al golpear a dos objetivos diferentes, proteges a todo tu escuadrón.

### 3. Control de Área sin Ranuras (*Web* vía *Spell-Storing Item*)
Como Acción Adicional (*Fast Hands*), el personaje activa *Web* con una **CD de Salvación de 19**:
* Frente a un enemigo con tirada de salvación de $+4$:

$$\mathbb{P}(\text{Fallo de Salvación de Web}) = \frac{19 - 4 - 1}{20} = \mathbf{0.70} \quad (70.0\%)$$

Las criaturas atrapadas quedan **Restringidas (Restrained)**: sus ataques tienen Desventaja adicional y todos los ataques contra ellas gozan de **Ventaja**.

### 4. Resiliencia Defensiva Inexpugnable (EHP & AC)
* **HP Base:** $143 \text{ HP}$.
* **CA Pasiva Base:** $26 \text{ CA}$ (Plate Armor +3 + Shield +3).
* **CA Reactiva con *Shield*:** $\mathbf{31 \text{ CA}}$.
* **Dilema del Enemigo Marcado:**
  1. Si el enemigo intenta atacar a tus aliados, tira con **Desventaja**.
  2. Si el enemigo intenta atacarte a ti, debe superar una **CA de 31**. Frente a un jefe con $+14$ a impactar:

$$\mathbb{P}(\text{Impacto Hostil contra CA 31}) = \frac{21 - 17}{20} = \frac{4}{20} = \mathbf{0.20} \quad (20.0\%)$$

$$\text{EHP Efectivo Físico} = \frac{143}{0.20} = \mathbf{715.0 \text{ EHP Pasivo}}$$

* **Campo Defensivo (*Defensive Field*):** Otorga **17 Puntos de Golpe Temporales (THP)** como acción adicional, utilizable 6 veces por descanso largo ($\mathbf{+102 \text{ THP}}$ acumulables).
* **Destello de Genio (*Flash of Genius*):** Suma $+5$ a cualquier tirada de salvación propia o aliada en 30 pies (5 veces/día).

---

## ⚔️ Bucle Táctico y Economía de Acciones (Action Loop)

```
        [Ronda 0: Pre-Combate de Artífice]
   Defensive Field activo (+17 THP) + Spell-Storing Item cargado con 10 usos de Web
   Armadura de Placas Arcana (CA 26 pasiva / CA 31 con Shield)
                    │
                    ▼
       [Ronda 1: Bloqueo de Aggro y Telaraña]
   Acción: Extra Attack con Thunder Gauntlets (+14 al impactar)
   Impacto: Marca a 2 enemigos con Desventaja para atacar a tus aliados
   Bonus Action: Fast Hands activa Spell-Storing Item -> Lanza Web sin gastar ranura
   Efecto: Ambos enemigos quedan atrapados en telaraña con CD 19
                    │
                    ▼
      [Ronda 2+: Muro de Control y Rescate]
   Acción: Atacar con Thunder Gauntlets (25 daño trueno + aggro renovado)
   Bonus Action: Fast Hands activa Spell-Storing Item con Cure Wounds (14 HP curados)
   Reacción: Shield (+5 CA = 31 CA) o Flash of Genius (+5 a salvación crítica)
```

* **Acción (Action):** Dos ataques con *Thunder Gauntlets* (25 daño trueno + aggro impuesto a 2 objetivos).
* **Acción Adicional (Bonus Action):** *Fast Hands* activa el *Spell-Storing Item* para lanzar *Web* o *Cure Wounds*, o activar una varita mágica (*Wand of Magic Missiles*).
* **Reacción (Reaction):** *Shield* (+5 CA hasta CA 31), *Flash of Genius* (+5 a salvación propia o aliada), o *Mind Sharpener* (supera concentración automáticamente).

---

## 🏷️ Matriz de Evaluación Táctica del Archivero

| Capacidad Táctica | Nivel | Justificación del Archivero |
| :--- | :---: | :--- |
| **Control de Aggro en Vanguardia** | 🔵 | Impone Desventaja a dos atacantes hostiles simultáneamente en cada asalto. |
| **Abuso de Economía de Acciones** | 🔵 | *Fast Hands* lanza conjuros de nivel 2 y activa varitas como Acción Adicional sin gastar ranuras. |
| **Resiliencia Defensiva (EHP)** | 🔵 | CA pasiva 26, CA reactiva 31, salvaciones con +5 de *Flash of Genius* y 102 THP de campo. |
| **Capacidad de Sintonización** | 🔵 | 5 ranuras de sintonización activas gracias a *Magic Item Savant*. |
| **Soporte Médico Desacoplado** | 🟢 | 10 usos gratuitos de *Cure Wounds* lanzados como acción adicional en combate. |
| **Versatilidad de Herramientas** | 🔵 | Pericia universal con todas las herramientas de artesano (*Tool Expertise*). |

---

## 📜 Reglas de Casa (House Rules) y Ajustes de Mesa

1. **Armadura Canalizadora Unificada:** La armadura de placas arcana actúa como foco de lanzamiento unificado para todos los conjuros de Artífice, permitiendo portar escudo sin requerir manos libres.
2. **Sinergia Fast Hands + Spell-Storing Item:** Cumplimiento oficial de 5.5e: activar un objeto con propiedades mágicas o el rasgo *Spell-Storing Item* es legalmente una Acción Adicional bajo las reglas de *Fast Hands*.
3. **Imposición de Desventaja con Thunder Gauntlets:** La marca de desventaja no requiere tirada de salvación por parte del enemigo; se aplica automáticamente al recibir el impacto del guantelete.