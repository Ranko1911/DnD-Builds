# ⏱️ Archivo Técnico: Clocklock — El Arquitecto del Horologio

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (Backline Blaster & Probability Manipulator)**  
**Reglas:** D&D 5.ª Edición (2014 & 2024 Compatible)  
**Nivel Total:** 20  
**División de Clases:** Sorcerer (Clockwork Soul) 18 / Warlock (Hexblade) 2  
**Especie:** Semielfo / Elfo (Requisito estricto para *Elven Accuracy*)  
**Trasfondo:** Sabio / Erudito Planar de Mechanus  

---

## 📊 Estadísticas Base y Modificadores (Nivel 20)

| Característica | Puntuación | Modificador | Notas de Optimización |
| :--- | :---: | :---: | :--- |
| **Fuerza (STR)** | 8 | -1 | Dump stat táctico. |
| **Destreza (DEX)** | 14 | +2 | Límite óptimo para aprovechar la Armadura Media (*Half-Plate*). |
| **Constitución (CON)** | 16 | +3 | Base 15 + 1 racial. Competencia en salvaciones por iniciar como Hechicero. |
| **Inteligencia (INT)** | 8 | -1 | Dump stat. |
| **Sabiduría (WIS)** | 10 | +0 | Neutral para salvaciones de percepción y voluntad. |
| **Carisma (CHA)** | 20 | +5 | Base 15 + 2 racial + 1 *Elven Accuracy* + 2 ASI. Clave de ataque y CD. |

* **Puntos de Golpe (HP):** $8 + (17 \times 5) + (2 \times 5) + (20 \times 3) = \mathbf{163 \text{ HP Base}}$
* **Clase de Armadura Pasiva (AC):** $15 \text{ (Half-Plate)} + 2 \text{ (DEX)} + 2 \text{ (Escudo Base)} = \mathbf{19 \text{ CA Pasiva}}$ (Con *Shield +3*: $\mathbf{22 \text{ CA}}$; con conjuro *Shield*: $\mathbf{27 \text{ CA}}$).
* **Salvaciones con Competencia:** Constitución ($+9$), Carisma ($+11$).

---

## 🔗 Navegación y Registros de la Cámara

* **Inventario Actual y Equipo:** [actual inventory list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/Clocklock/actual%20inventory%20list.md)
* **Bastión del Orden Mecánico:** [bastion and downtime.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/Clocklock/bastion%20and%20downtime.md)
* **Grimorio y Matriz de Conjuros:** [spell list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/Clocklock/spell%20list.md)
* **Arsenal y Adquisiciones Tácticas:** [item list to obtain.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/Clocklock/item%20list%20to%20obtain.md)
* **Hoja de Ruta (Niveles 1-20):** [roadmap.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/Clocklock/roadmap.md)
* **Manual de Conversión 2024:** [character guide 2024.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/Clocklock/character%20guide%202024.md)

---

## 🧮 Motor Matemático del Archivero (LaTeX Math Engine)

### 1. Probabilidad de Impacto Crítico (Triple Ventaja + Rango 19-20)
Gracias a la interacción entre *Darkness* / *Shadow of Moil* + *Devil's Sight* (ventaja garantizada), la dote *Elven Accuracy* (tirar 3 dados d20 en tiradas de Carisma) y *Hexblade's Curse* (críticos con 19 o 20 en el d20, $p_c = 0.10$):

$$\mathbb{P}(\text{Crítico por Rayo}) = 1 - (1 - 0.10)^3 = 1 - (0.90)^3 = 1 - 0.729 = \mathbf{0.271} \quad (27.10\%)$$

En una descarga completa de **8 rayos de *Eldritch Blast*** (Acción estándar + Acción Adicional acelerada vía *Quickened Spell* o *Illusionist's Bracers*):

$$\mathbb{E}[\text{Críticos por Turno Nova}] = 8 \times 0.271 = \mathbf{2.168 \text{ Impactos Críticos Garantizados}}$$

### 2. Certeza Absoluta de Impacto bajo *Trance of Order*
Al activar *Trance of Order* (nivel 14 de Hechicero), cualquier tirada de d20 para un ataque, salvación o prueba con resultado menor a 10 se convierte en un **10**.
Con bonificador de ataque base $+11$ ($+5$ CAR, $+6$ Competencia):

$$\text{Tirada Mínima de Ataque} = 10 + 11 = \mathbf{21 \text{ al impactar}}$$

Frente a una CA enemiga típica de nivel alto ($CA = 19$):

$$\mathbb{P}(\text{Acierto con Trance of Order}) = \mathbf{1.00} \quad (100\% \text{ de certeza matemática})$$

### 3. Daño Promedio por Rayo (DPR)
Cada rayo de *Eldritch Blast* con *Agonizing Blast* ($+5$ CAR) y *Hexblade's Curse* ($+6$ Prof):

$$\text{Daño Base por Rayo} = 1\text{d}10 + 5 + 6 = 5.5 + 11 = \mathbf{16.5}$$
$$\text{Daño Adicional por Crítico} = 1\text{d}10 = \mathbf{5.5}$$
$$\mathbb{E}[\text{Daño por Rayo}] = (1.00 \times 16.5) + (0.271 \times 5.5) = 16.5 + 1.49 = \mathbf{17.99}$$

### 4. Ciclo Nova: 8 Rayos Acelerados
$$\text{DPR Nova Sustentado} = 8 \times 17.99 = \mathbf{143.92 \text{ Daño de Fuerza / Asalto}}$$

### 5. Puntos de Golpe Efectivos (EHP Defensivo)
* **HP Base:** $163$
* **Escudo de Engranajes (*Bastion of Law* con 5 Puntos de Hechicería):** Absorbe $5\text{d}8 = \mathbf{22.5 \text{ daño directos}}$.
* **Armadura de Agathys (*Armor of Agathys* Upcast Nivel 8):** $\mathbf{40 \text{ THP}}$ y devuelve **40 daño de frío** garantizado por cada impacto cuerpo a cuerpo recibido.
* **Salvaguarda de Muerte (*Death Ward*):** Previene la caída a 0 HP una vez al día.
* **Desventaja Enemiga:** Al estar dentro de *Darkness* / *Shadow of Moil*, los atacantes tienen Desventaja constante. Frente a CA 27 (Half-Plate + Shield +3 + spell *Shield*), la probabilidad de impacto de un jefe con $+12$ a impactar es:

$$\mathbb{P}(\text{Impacto Enemigo}) = \left(\frac{21 - 15}{20}\right)^2 = \left(\frac{6}{20}\right)^2 = (0.30)^2 = \mathbf{0.09} \quad (9\%)$$

$$\text{EHP Teórico Frente a Físico} = \frac{163 + 40 + 22.5}{0.09} = \frac{225.5}{0.09} = \mathbf{2505.5 \text{ EHP Efectivo}}$$

---

## ⚔️ Bucle Táctico y Economía de Acciones (Action Loop)

```
        [Ronda 0: Pre-Buff]
       Armor of Agathys (Nivel 8) + Bastion of Law (5 Puntos)
                    │
                    ▼
         [Ronda 1: Setup Táctico]
   Acción: Lanzar Darkness (en objeto propio) o Shadow of Moil
   Bonus Action: Hexblade's Curse sobre el objetivo prioritario
   Movimiento: Posicionamiento a 60-90 pies de distancia
                    │
                    ▼
       [Ronda 2: Activación de Orden]
   Bonus Action: Activar Trance of Order (mínimo 10 en d20)
   Acción: Eldritch Blast (4 rayos con triple ventaja)
                    │
                    ▼
      [Ronda 3+: Ametralladora Nova]
   Acción: Eldritch Blast (4 rayos)
   Bonus Action: Quickened Eldritch Blast (4 rayos, gasta 2 SP)
   Reacción: Shield / Absorb Elements / Restore Balance
```

* **Acción (Action):** *Eldritch Blast* (4 rayos de fuerza). En situaciones de control de masas, *Hypnotic Pattern*, *Banishment* o *Wall of Force*.
* **Acción Adicional (Bonus Action):** *Quickened Spell* (*Eldritch Blast* duplicado = 8 rayos), *Hexblade's Curse*, o activación de *Trance of Order*.
* **Reacción (Reaction):** *Shield* (+5 CA), *Absorb Elements* (resistencia elemental), *Counterspell* (anulación arcana), o *Restore Balance* (cancelar ventaja enemiga o desventaja aliada).

---

## 🏷️ Matriz de Evaluación Táctica del Archivero

| Capacidad Táctica | Nivel | Justificación del Archivero |
| :--- | :---: | :--- |
| **Daño Monotarget Sustentado** | 🔵 | 143.92 DPR garantizado a distancia con daño de Fuerza (casi inmune a resistencias). |
| **Fiabilidad / Precisión** | 🔵 | *Trance of Order* anula la varianza del d20; 100% de impactos contra CA estándar. |
| **Resiliencia Defensiva (EHP)** | 🔵 | CA 27 reactiva, desventaja atacante, *Armor of Agathys* (40 THP), *Bastion of Law* (22.5 reducción). |
| **Manipulación Probabilística** | 🔵 | *Restore Balance* y *Trance of Order* reescriben las leyes aleatorias de la mesa. |
| **Control de Masas (AoE)** | 🟢 | Acceso a *Wall of Force*, *Hypnotic Pattern*, *Synaptic Static* y *Reverse Gravity*. |
| **Movilidad y Posicionamiento** | 🟢 | *Misty Step*, *Dimension Door* y teletransportes libres sin romper concentración. |

---

## 📜 Reglas de Casa (House Rules) y Ajustes de Mesa

1. **Foco Arcano y Escudo Físico:** Se asume la regla estándar de componentes donde el foco puede ser empuñado en la mano libre o integrado en el escudo según dote *War Caster*.
2. **Conversión de Ranuras de Pacto:** Las 2 ranuras de nivel 1 de Warlock se convierten en 2 Puntos de Hechicería en cada Descanso Corto, permitiendo generar Puntos de Sorcería infinitos durante tiempo de inactividad controlado.
3. **Sustitución de Magia de Relojería (Clockwork Magic):** Cumplimiento estricto de la regla de *Tasha's Cauldron of Everything*: cada conjuro de subclase se reemplaza en subida de nivel por conjuros de Abjuración o Transmutación de Sorcerer, Warlock o Wizard (*Armor of Agathys*, *Wall of Force*, *Tiny Servant*).