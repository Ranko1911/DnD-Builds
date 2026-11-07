# ☀️ Archivo Técnico: Light of Tomorrow — El Heraldo Solar

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (Backline Divine Artillery & Dual-Target Master Healer)**  
**Reglas:** D&D 5.ª Edición (2014 & 2024 Compatible)  
**Nivel Total:** 20  
**División de Clases:** Sorcerer (Divine Soul) 18 / Warlock (Hexblade) 2  
**Especie:** Aasimar Protector (*Radiant Soul*, *Celestial Resistance*, *Healing Hands*)  
**Trasfondo:** Acólito / Enviado Solar del Monte Celestia  

---

## 📊 Estadísticas Base y Modificadores (Nivel 20)

| Característica | Puntuación | Modificador | Notas de Optimización |
| :--- | :---: | :---: | :--- |
| **Fuerza (STR)** | 8 | -1 | Dump stat táctico. |
| **Destreza (DEX)** | 14 | +2 | Límite óptimo para aprovechar la Armadura Media (*Half-Plate*). |
| **Constitución (CON)** | 16 | +3 | 15 base + 1 racial. Competencia en salvaciones por clase inicial de Hechicero. |
| **Inteligencia (INT)** | 8 | -1 | Dump stat. |
| **Sabiduría (WIS)** | 10 | +0 | Neutral para salvaciones de percepción y voluntad. |
| **Carisma (CHA)** | 20 | +5 | 15 base + 2 racial + 2 ASIs (+1 adicional por Tomo si aplica). Primaria absoluta. |

* **Puntos de Golpe (HP Base):** $8 + (17 \times 5) + (2 \times 5) + (20 \times 3) = \mathbf{163 \text{ HP Base}}$
* **Clase de Armadura Pasiva (AC):** $15 \text{ (Half-Plate)} + 2 \text{ (DEX)} + 2 \text{ (Escudo Base)} = \mathbf{19 \text{ CA Pasiva}}$ (Con *Half-Plate +3* y *Shield +3*: $\mathbf{25 \text{ CA Pasiva}}$; con conjuro *Shield*: $\mathbf{30 \text{ CA Reactiva}}$).
* **Salvaciones con Competencia:** Constitución ($+9$), Carisma ($+11$).

---

## 🔗 Navegación y Registros del Sagrario Solar

* **Inventario Actual y Equipo:** [actual inventory list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/light%20of%20tomorrow/actual%20inventory%20list.md)
* **Bastión de la Llama Inmortal:** [bastion and downtime.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/light%20of%20tomorrow/bastion%20and%20downtime.md)
* **Grimorio Sagrado y Matriz de Conjuros:** [spell list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/light%20of%20tomorrow/spell%20list.md)
* **Arsenal y Adquisiciones Tácticas:** [item list to obtain.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/light%20of%20tomorrow/item%20list%20to%20obtain.md)
* **Hoja de Ruta (Niveles 1-20):** [roadmap.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/light%20of%20tomorrow/roadmap.md)
* **Manual de Conversión 2024:** [character guide 2024.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/light%20of%20tomorrow/character%20guide%202024.md)

---

## 🧮 Motor Matemático del Archivero (LaTeX Math Engine)

### 1. Desglose de Daño por Rayo (Eldritch Blast con Todas las Marcas)
Al concentrar *Agonizing Blast* ($+5$ CAR), *Hex* ($+1\text{d}6$ necrótico) y *Hexblade's Curse* ($+6$ bono de competencia):

$$\text{Daño Base por Rayo} = 1\text{d}10 + 5 + 1\text{d}6 + 6 = 5.5 + 5 + 3.5 + 6 = \mathbf{20.0 \text{ Daño Medio}}$$

### 2. Probabilidad de Impacto Crítico (Rango 19-20 con Ventaja Aérea)
Volando a 30 pies con *Radiant Soul* o bajo *Greater Invisibility*, disponiendo de ventaja en tiradas de ataque con rango de crítico 19-20 ($p_c = 0.10$):

$$\mathbb{P}(\text{Crítico por Rayo}) = 1 - (1 - 0.10)^2 = 1 - 0.81 = \mathbf{0.19} \quad (19.00\%)$$

En una salva Nova de **8 rayos de *Eldritch Blast*** (Acción estándar + Acción Adicional acelerada vía *Quickened Spell*):

$$\mathbb{E}[\text{Críticos en Asalto Nova}] = 8 \times 0.19 = \mathbf{1.52 \text{ Impactos Críticos por Asalto}}$$

### 3. Ciclo Ofensivo Nova: Salva Solar de 8 Rayos + *Radiant Soul*
Al alcanzar nivel 20, la habilidad racial *Radiant Soul* añade un bono plano igual a tu nivel total ($\mathbf{+20 \text{ Daño Radiante}}$) una vez por turno al impactar a un objetivo:

$$\text{Daño Base 8 Rayos} = 8 \times 20.0 = 160.0$$
$$\text{Aporte Radiant Soul} = +20.0$$
$$\text{Extra por Críticos Esperados} = 1.52 \times (1\text{d}10 + 1\text{d}6) = 1.52 \times 9.0 = 13.68$$
$$\text{DPR Nova Solar} = 160.0 + 20.0 + 13.68 = \mathbf{193.68 \text{ Daño Monotarget / Asalto}}$$

### 4. Eficiencia de Curación Divina Duplicada (Twinned Heal)
Gracias a la metamagia *Twinned Spell* aplicada a conjuros de la lista de Clérigo vía *Divine Soul*:
* Se gastan 6 Puntos de Hechicería para duplicar el conjuro *Heal* (Nivel 6).
* Cada objetivo recibe **70 Puntos de Golpe fijos**, sin tiradas de dados ni varianza aleatoria, y queda limpio de cegueras y sorderas.

$$\text{Curación Neta Instantánea} = 70 + 70 = \mathbf{140.0 \text{ Puntos de Vida Netos Restaurados}}$$

### 5. Puntos de Golpe Efectivos (EHP Defensivo)
* **HP Base:** $163$
* **CA Pasiva Base:** $25$ (Half-Plate +3 + Shield +3).
* **CA Reactiva con *Shield*:** $30 \text{ CA}$.
* **Probabilidad de Impacto Enemigo:** Contra un jefe de desafío 20 con $+14$ a impactar:

$$\mathbb{P}(\text{Impacto Hostil contra CA 30}) = \frac{21 - 16}{20} = \frac{5}{20} = \mathbf{0.25} \quad (25.0\%)$$

$$\text{EHP Pasivo sin Curación} = \frac{163}{0.25} = \mathbf{652.0 \text{ EHP Físico}}$$

Con *Favored by the Gods* (añade $+2\text{d}4$ a una salvación fallida), resistencia a daño Radiante y Necrótico nativa, y *Twinned Heal* (140 HP), el EHP real en combate prolongado supera los **2,200 EHP**.

---

## ⚔️ Bucle Táctico y Economía de Acciones (Action Loop)

```
        [Ronda 0: Pre-Buff de Campaña]
     Death Ward (Duplicado vía Twinned Spell sobre Conductor y Paladín)
     Aid (Nivel 7: +30 Max HP a 3 aliados)
                    │
                    ▼
       [Ronda 1: Activación y Posicionamiento]
   Bonus Action: Hexblade's Curse o Hex sobre el objetivo primordial
   Acción: Activar Radiant Soul (alas de luz, vuelo 30 ft, +20 daño) o Eldritch Blast (4 rayos)
   Movimiento: Ascenso vertical a 30 pies para eludir ataques cuerpo a cuerpo
                    │
                    ▼
     [Ronda 2: Descarga Ametralladora Nova]
   Acción: Eldritch Blast (4 rayos)
   Bonus Action: Quickened Eldritch Blast (4 rayos, gasta 2 SP)
   Aporte: +20 daño radiante plano de Radiant Soul en el primer impacto
   Daño: 193.68 Daño total concentrado
                    │
                    ▼
     [Ronda de Rescate: Emergencia Sanitaria]
   Acción: Twinned Heal (cura 70 HP a dos aliados distintos a 60 ft)
   Bonus Action: Spiritual Weapon o Healing Word
   Reacción: Shield (+5 CA = CA 30) o Counterspell
```

* **Acción (Action):** *Eldritch Blast* (4 rayos de fuerza) o conjuros de impacto masivo (*Holy Aura*, *Fireball*, *Synaptic Static*, *Twinned Heal*).
* **Acción Adicional (Bonus Action):** *Quickened Eldritch Blast* (4 rayos extra), *Hex*, *Hexblade's Curse*, o *Healing Word* (rescate rápido a 60 pies).
* **Reacción (Reaction):** *Shield* (+5 CA hasta CA 30), *Absorb Elements* (resistencia elemental inmediata) o *Counterspell* (interrupción arcana a 60 pies).

---

## 🏷️ Matriz de Evaluación Táctica del Archivero

| Capacidad Táctica | Nivel | Justificación del Archivero |
| :--- | :---: | :--- |
| **Daño Monotarget Nova** | 🔵 | 193.68 DPR concentrado a distancia con daño de Fuerza y Radiante. |
| **Curación de Choque / Rescate** | 🔵 | *Twinned Heal* restaura 140 HP fijos sin dados; acceso a *Wish* y *Mass Heal*. |
| **Movilidad Táctica Tridimensional** | 🟢 | Vuelo aéreo pasivo durante *Radiant Soul* y teletransporte con *Misty Step*. |
| **Resiliencia Defensiva (EHP)** | 🔵 | CA pasiva 25, CA reactiva 30, *Favored by the Gods* y resistencias raciales. |
| **Sostenibilidad de Recursos** | 🔵 | Reciclaje de ranuras cortas de Warlock en Puntos de Hechicería (*Coffeelock* táctico). |
| **Control y Buffs Colectivos** | 🟢 | *Holy Aura* (ventaja en salvaciones y desventaja en ataques hostiles para todo el grupo). |

---

## 📜 Reglas de Casa (House Rules) y Ajustes de Mesa

1. **Foco Arcano y Sagrado Unificado:** El amuleto solar bendecido funciona como foco arcano de Hechicero y foco sagrado de Clérigo simultáneamente.
2. **Sinergia de Twinned Spell con Conjuros de Clérigo:** Cumple estrictamente las reglas oficiales: cualquier conjuro que seleccione un único objetivo y no tenga rango personal puede duplicarse gastando Puntos de Hechicería iguales a su nivel (*Heal*, *Death Ward*, *Greater Invisibility*, *Guiding Bolt*).
3. **Conversión de Ranuras Cortas:** Las 2 ranuras de nivel 1 de Warlock se transforman en 2 Puntos de Sorcería antes de cada Descanso Corto, recargándose al 100% tras 1 hora de descanso.