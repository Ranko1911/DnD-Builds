# 🕵️‍♂️ Archivo Técnico: Spymaster — La Sombra del Consejo

**Clasificación del Archivero:** 🟢 **Build Competitivo / Infiltrador Técnico, Maestro de Habilidades y Asesino Psiónico (Skill Monkey & Booming Skirmisher)**  
**Reglas:** D&D 5.ª Edición (2014 & 2024 Compatible)  
**Nivel Total:** 20  
**División de Clases:** Rogue (Soulknife) 18 / Artificer 2  
**Especie:** Elfo de los Bosques (*Wood Elf* — Velocidad 35 ft, *Mask of the Wild*, resistencia al encanto)  
**Trasfondo:** Espía de la Corona / Agente de Inteligencia (*Dote de Origen: Alert*)  

---

## 📊 Estadísticas Base y Modificadores (Nivel 20)

| Característica | Puntuación | Modificador | Notas de Optimización |
| :--- | :---: | :---: | :--- |
| **Fuerza (STR)** | 8 | -1 | Dump stat táctico. |
| **Destreza (DEX)** | 20 | +5 | 15 base + 2 racial + 3 ASIs. Precisión balística, daño, CA, iniciativa y sigilo. |
| **Constitución (CON)** | 14 | +2 | Puntos de vida y concentración para *Absorb Elements*. |
| **Inteligencia (INT)** | 14 | +2 | 13 base + 1 racial. Conjuros de Artífice, investigación y herramientas. |
| **Sabiduría (WIS)** | 12 | +1 | Percepción pasiva y salvaciones de voluntad (*Slippery Mind*). |
| **Carisma (CHA)** | 10 | +0 | Engaño y persuasión en misiones diplomáticas encubiertas. |

* **Puntos de Golpe (HP Base):** $8 + 5 + (18 \times 5) + (20 \times 2) = \mathbf{143 \text{ HP Base}}$
* **Clase de Armadura Pasiva (AC):** $12 \text{ (Studded Leather)} + 5 \text{ (DEX)} + 2 \text{ (Escudo)} = \mathbf{19 \text{ CA Pasiva}}$ (Con *Studded Leather +3* y *Shield +3*: $\mathbf{25 \text{ CA Pasiva}}$).
* **Salvaciones con Competencia:** Destreza ($+11$), Inteligencia ($+8$), Sabiduría ($+7$ vía *Slippery Mind*).
* **Percepción Pasiva:** $10 + 1 \text{ (SAB)} + 12 \text{ (Expertise)} = \mathbf{23 \text{ Pasiva}}$ (Inmune a sorpresa gracias a *Alert*).

---

## 🔗 Navegación y Registros de la Red Sombra

* **Inventario Actual y Equipo:** [actual inventory list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/spymaster/actual%20inventory%20list.md)
* **Bastión de la Red Sombra:** [bastion and downtime.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/spymaster/bastion%20and%20downtime.md)
* **Grimorio Táctico y Hojas Psíquicas:** [spell list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/spymaster/spell%20list.md)
* **Arsenal y Adquisiciones Tácticas:** [item list to obtain.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/spymaster/item%20list%20to%20obtain.md)
* **Hoja de Ruta (Niveles 1-20):** [roadmap.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/spymaster/roadmap.md)
* **Manual de Conversión 2024:** [character guide 2024.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/spymaster/character%20guide%202024.md)

---

## 🧮 Motor Matemático del Archivero (LaTeX Math Engine)

### 1. El Suelo Imposible de Habilidades (*Reliable Talent* + *Psi-Bolstered Knack*)
Gracias al rasgo *Reliable Talent* (Nivel 11 de Pícaro), cualquier tirada de d20 en una habilidad en la que tengas competencia que resulte menor a 10 se trata automáticamente como un **10**.
Con Pericia (*Expertise*) en **Sigilo**, **Juegos de Manos** y **Herramientas de Ladrón** (+12 Prof) y Destreza $+5$:

$$\text{Tirada Mínima de Sigilo Pasivo/Activo} = 10 \text{ (Floor)} + 5 \text{ (DES)} + 12 \text{ (Prof)} = \mathbf{27 \text{ Mínimo Absoluto}}$$

Si aun así una prueba extraordinaria fallase, *Psi-Bolstered Knack* permite sumar un dado psiónico de **1d12** a la tirada. **Si la prueba sigue fallando, el dado no se consume**:

$$\text{Rango Real de Tirada de Sigilo} = 27 + 1\text{d}12 = \mathbf{28 \text{ a } 39 \text{ en Prueba de Sigilo}}$$

Ninguna criatura mortal en el multiverso puede detectar al Spymaster mediante Percepción Pasiva estándar (CD típica 15-22).

### 2. Cadencia Melee: Ataque Atronador y Fuga (*Booming Hit & Run*)
El combo ofensivo integra *Booming Blade* con una Daga Retornable $+3$ (o Hoja Psíquica) y el daño masivo de *Sneak Attack* ($9\text{d}6$):
* **Bono de Ataque:** $+5 \text{ (DES)} + 6 \text{ (Prof)} + 3 \text{ (Mágico)} = \mathbf{+14 \text{ al Impactar}}$.
* **Probabilidad de Impacto con Ventaja (desde Sigilo):** Frente a CA 19 enemiga:

$$\mathbb{P}(\text{Acierto con Ventaja}) = 1 - (1 - 0.80)^2 = 1 - 0.04 = \mathbf{0.96} \quad (96.0\%)$$
$$\mathbb{P}(\text{Crítico con Ventaja}) = 1 - (0.95)^2 = \mathbf{0.0975} \quad (9.75\%)$$

$$\text{Daño Base de Daga} = 1\text{d}6 + 5 \text{ (DES)} + 3 \text{ (Mágico)} = 3.5 + 8 = 11.5$$
$$\text{Booming Blade (Nivel 17+)} = 3\text{d}8 \text{ (Trueno)} = \mathbf{13.5}$$
$$\text{Sneak Attack (Pícaro 18)} = 9\text{d}6 = \mathbf{31.5}$$
$$\text{Daño Directo al Impactar} = 11.5 + 13.5 + 31.5 = \mathbf{56.5 \text{ Daño Monotarget}}$$

$$\text{Rider si el Objetivo se Mueve} = 4\text{d}8 = \mathbf{18.0 \text{ Daño de Trueno}}$$
$$\text{DPR Total Potencial} = 56.5 + 18.0 = \mathbf{74.5 \text{ Daño por Asalto}}$$

Tras impactar, el personaje utiliza **Cunning Action: Disengage** como Acción Adicional y se retira 40 pies sin provocar ataques de oportunidad. El enemigo debe quedarse inmóvil o avanzar sufriendo los 18 puntos de daño sónico adicionales.

### 3. Puntos de Golpe Efectivos y Evasión (EHP Defensivo)
* **HP Base:** $143 \text{ HP}$.
* **CA Pasiva Base:** $25$ (Studded Leather +3 + DEX +5 + Shield +3).
* **Evasión Táctica (*Evasion*):** En salvaciones de Destreza ($+11$), sufre **0 daño** si supera la tirada y solo la mitad si falla.
* **Esquiva Asombrosa (*Uncanny Dodge*):** Reacción para reducir a la mitad el daño de cualquier ataque visible recibido. Frente a un impacto crítico de 60 daño, lo reduce a **30 daño**.
* **Velo Psíquico (*Psychic Veil* — Nivel 13 de Soulknife):** Se vuelve invisible durante **1 hora sin requerir concentración**. Impone Desventaja a todos los atacantes hostiles y obtiene Ventaja automática en sus ataques.

---

## ⚔️ Bucle Táctico y Economía de Acciones (Action Loop)

```
        [Ronda 0: Pre-Combate e Infiltración]
   Psychic Veil (Invisibilidad por 1 hora sin concentración) + Sigilo (mínimo 27)
   Escudo +3 equipado en mano zurda (CA 25)
                    │
                    ▼
       [Ronda 1: Emboscada Atronadora]
   Acción: Booming Blade con Daga Retornable +3 (con Ventaja desde invisibilidad)
   Impacto: 56.5 Daño perforante/trueno + Sneak Attack (9d6)
   Bonus Action: Cunning Action: Disengage (retirada táctica a 40 ft sin AdO)
   Efecto: El enemigo sufre 18 daño trueno adicional si intenta perseguirte
                    │
                    ▼
       [Ronda 2+: Hostigamiento Psíquico]
   Acción: Lanzamiento de Hojas Psíquicas a 60 ft (1d6 + 5 + 9d6)
   Bonus Action: Ataque secundario psíquico (1d4 + 5) o Cunning Action: Hide
   Reacción: Uncanny Dodge (mitad de daño) o Absorb Elements
```

* **Acción (Action):** *Booming Blade* en cuerpo a cuerpo (56.5 daño) o disparo de *Psychic Blades* a 60 pies.
* **Acción Adicional (Bonus Action):** *Cunning Action* (*Disengage* para huir sin ataques de oportunidad, o *Hide* para reiniciar ventaja), o ataque secundario psíquico ($1\text{d}4 + 5$).
* **Reacción (Reaction):** *Uncanny Dodge* (divide a la mitad el daño del ataque recibido), o *Absorb Elements* (resistencia elemental inmediata).

---

## 🏷️ Matriz de Evaluación Táctica del Archivero

| Capacidad Táctica | Nivel | Justificación del Archivero |
| :--- | :---: | :--- |
| **Infiltración y Sigilo Infalible** | 🔵 | Mínimo absoluto de 27 en Sigilo; invisibilidad de 1 hora sin concentración (*Psychic Veil*). |
| **Tácticas de Guerrilla (Hit & Run)** | 🔵 | *Booming Blade* castiga el movimiento enemigo mientras *Disengage* permite escapar impunemente. |
| **Resiliencia en Evasión (EHP)** | 🟢 | CA pasiva 25 con escudo, *Uncanny Dodge* a la mitad, *Evasion* y salvaciones de CON/WIS. |
| **Red de Telecomunicaciones** | 🟢 | *Psychic Whispers* conecta a todo el grupo telepáticamente durante horas sin ruido verbal. |
| **Utilidad Técnica y Herramientas** | 🔵 | Infusiones de Artífice, herramientas de ladrón legendarias y tiradas mínimas de 27 en sabotajes. |
| **Daño Monotarget Sostenido** | 🟢 | 56.5 a 74.5 DPR con daño de trueno, perforante y psíquico continuo. |

---

## 📜 Reglas de Casa (House Rules) y Ajustes de Mesa

1. **Foco Universal de Herramientas:** Las herramientas de ladrón infundidas del Artífice actúan como foco de lanzamiento unificado, permitiendo conjurar sin restricciones con el escudo equipado.
2. **Hojas Psíquicas y Ataque Furtivo:** Las *Psychic Blades* de Soulknife cumplen estrictamente el requisito de armas sutiles (*Finesse*), aplicando el daño completo de *Sneak Attack* a distancia (60 pies) o melé.
3. **Persistencia de Psi-Bolstered Knack:** El dado de $1\text{d}12$ solo se consume si la prueba resulta en éxito tras sumarlo; si la prueba sigue siendo insuficiente, el dado se conserva íntegro.