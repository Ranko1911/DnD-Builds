# 🏴‍☠️ Guía de Conversión a Reglas 2024 (D&D 5.5e) — Cursed Pirate

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (2024 Astral Navigator & Unshakable Caster)**  
**Reglas:** D&D 2024 Player's Handbook (5.5e)  
**Clase:** Druid (Circle of the Stars) 20  
**Especie (2024):** Elfo de Mar (o Elfo con dote de origen adicional)  
**Dote de Origen (Nivel 1):** *Alert* (Añade Bonificador de Competencia a Iniciativa y permite intercambiar turnos con aliados)  

---

## 🔄 Novedades y Ajustes Clave del Reglamento 2024

### 1. Druida 2024 (*Druid Class Features*)
* **Forma Salvaje (*Wild Shape* 2024):** Se activa ahora como una **Acción Adicional** para todas las subclases, permitiendo entrar en combate, activar la Forma Salvaje o la Forma Estelar (*Starry Form*) y mantener libre la Acción principal para conjurar desde el primer asalto.
* **Archidruida (*Archdruid* — Nivel 20):** Recupera usos de Forma Salvaje al iniciar combate y permite convertir usos de Forma Salvaje en ranuras de conjuro de nivel bajo mediante *Wild Resurgence*, otorgando una flexibilidad de recursos sin precedentes.
* **Lanzamiento de Conjuros en Forma Salvaje:** En 2024, puedes mantener la concentración y lanzar conjuros de Druida que no tengan componentes materiales costosos en cualquier forma salvaje desde niveles tempranos.

### 2. Regla de Lanzamiento de Conjuros 2024 (*One Leveled Spell per Turn*)
* Como la flecha estelar de *Starry Form: Archer* es una **habilidad de rasgo de clase** (y no un conjuro con ranura), puedes lanzar un conjuro poderoso de nivel alto con tu Acción (*Wall of Force*, *Sunburst*, *Chain Lightning*) y disparar la flecha estelar con tu Acción Adicional en el mismo turno sin ninguna restricción.

### 3. Maestrías de Armas (Weapon Masteries 2024)
* **Scimitar (Nick):** Ataque adicional con arma secundaria integrado en la acción de ataque sin consumir la Acción Adicional si se combate en abordajes navales cuerpo a cuerpo.
* **Dagger (Nick):** Misma propiedad para armas ligeras arrojadizas.

---

## 🧮 Motor Matemático 2024 (LaTeX Math Engine)

### 1. Certeza de Concentración bajo Forma de Dragón 2024
En las reglas de 2024, la interacción entre *Starry Form: Dragon* y la dote *Resilient: CON* permanece idéntica y representa la defensa más sólida del sistema:

$$\text{Tirada Mínima de Salvación} = 10 \text{ (Floor)} + 3 \text{ (CON)} + 6 \text{ (Prof)} = \mathbf{19 \text{ Mínimo Absoluto}}$$

Cualquier impacto enemigo que cause hasta $38$ puntos de daño exige una salvación de $\text{CD} \le 19$, resultando en:

$$\mathbb{P}(\text{Pérdida de Concentración ante Daño } \le 38) = \mathbf{0.00} \quad (0.00\% \text{ Imposibilidad de Fallo})$$

### 2. Cadencia Ofensiva Radiante 2024 (Triple Ventaja con *Foresight*)
Con *Foresight* activo durante 8 horas sin requerir tirada de salvación:

$$\mathbb{P}(\text{Impacto contra CA 19}) = 1 - (1 - 0.65)^3 = \mathbf{95.71\%}$$

$$\text{DPR Blaster (Guiding Bolt Nivel 5 + Archer)} = 30.79 + 14.68 = \mathbf{45.47 \text{ Daño Radiante Monotarget}}$$

---

## 🛡️ Bucle Táctico del Pirata 2024

* **Turno 0 / Pre-Combate:** *Foresight* (8h) + *Starry Form: Dragon* (mínimo 19 en concentración).
* **Turno 1:**
  * **Acción:** Conjuro de control masivo (*Wall of Force*, *Globe of Invulnerability*, *Forcecage*).
  * **Bonus Action:** Transición a *Starry Form: Archer* o disparo de flecha de luz ($2\text{d}8 + 5$).
* **Turno 2+:**
  * **Acción:** *Guiding Bolt* (Nivel 5) o conjuro de área (*Sunburst*).
  * **Bonus Action:** Flecha estelar de *Archer* a 60 pies.
* **Reacción:** *Shield* (+5 CA = 30 CA) o *Counterspell* de reacción. En caso de daño letal, *Archdruid* te transforma instantáneamente en un Elemental de Agua con 114 HP frescos.