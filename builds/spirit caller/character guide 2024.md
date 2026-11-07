# 💀 Guía de Conversión a Reglas 2024 (D&D 5.5e) — Spirit Caller

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (2024 Undead Sovereign & At-Will Arcane Engine)**  
**Reglas:** D&D 2024 Player's Handbook (5.5e)  
**Clase:** Wizard (School of Necromancy o War Magic / Divination adaptado a nigromancia) 20  
**Especie (2024):** Reborn o Humano con Dote de Origen adicional  
**Dote de Origen (Nivel 1):** *Alert* (Añade Bonificador de Competencia a Iniciativa y permite intercambiar turnos con el Titán aliado)  

---

## 🔄 Novedades y Ajustes Clave del Reglamento 2024

### 1. Rasgos de Mago 2024 (*Wizard Class Features*)
* **Memorizar Conjuro (*Memorize Spell* — Nivel 5):** Permite cambiar un conjuro preparado por cualquier otro de tu libro de conjuros tras completar un **Descanso Corto**, aportando una adaptabilidad situacional total.
* **Adepto del Ritual (*Ritual Adept* — Nivel 1):** Permite lanzar cualquier conjuro con la etiqueta ritual directamente desde el libro sin necesidad de tenerlo preparado en la lista diaria.
* **Maestría de Conjuros (*Spell Mastery* — Nivel 18):** Lanzas *Shield* (nivel 1) y *Misty Step* (nivel 2) **a voluntad sin consumir ranuras de conjuro**, manteniendo una CA de 24 reactiva y teletransporte continuo en cada asalto.
* **Conjuros de Firma (*Signature Spells* — Nivel 20):** Siempre tienes preparados *Animate Dead* y *Counterspell*; puedes lanzar cada uno una vez a nivel 3 por cada Descanso Corto sin gastar espacios de conjuro.

### 2. Regla de Lanzamiento de Conjuros 2024 (*One Leveled Spell per Turn*)
* Como *Misty Step* lanzado a través de *Spell Mastery* no consume espacios de conjuro, el Mago puede teletransportarse como Acción Adicional y lanzar libremente cualquier conjuro potente con su Acción (*Forcecage*, *Wall of Force*, *Wish*) sin infringir las restricciones de lanzamiento de 2024.

### 3. Maestrías de Armas (Weapon Masteries 2024)
* **Dagger (Nick):** Ataque adicional en combate cuerpo a cuerpo integrado en la acción de ataque sin gastar Acción Adicional.
* **Light Crossbow (Slow):** Reduce la velocidad del objetivo en 10 pies al impactar a distancia.

---

## 🧮 Motor Matemático 2024 (LaTeX Math Engine)

### 1. Salva de la Horda de Esqueletos 2024
Con 32 arqueros esqueleto disparando a un objetivo restringido por *Web* o derribado por un conjuro de control (Ventaja constante):

$$\mathbb{P}(\text{Acierto con Ventaja contra CA 19}) = 1 - (1 - 0.30)^2 = 1 - 0.49 = \mathbf{0.51} \quad (51.0\%)$$
$$\mathbb{P}(\text{Crítico con Ventaja}) = 1 - (1 - 0.05)^2 = 1 - 0.9025 = \mathbf{0.0975} \quad (9.75\%)$$

$$\text{Daño por Flecha con Undead Thralls} = 1\text{d}6 + 2 \text{ (DES)} + 6 \text{ (Prof)} = 11.5 \text{ Daño}$$
$$\mathbb{E}[\text{Salva de 32 Esqueletos}] = 32 \times [(0.51 \times 11.5) + (0.0975 \times 3.5)] = 32 \times 6.206 = \mathbf{198.6 \text{ Daño Perforante}}$$

### 2. Eficiencia de Mitigación con *Shield* a Voluntad
Al recibir ataques enemigos:

$$\text{CA Reactiva 2024} = 17 \text{ (Robe of Archmagi + DEX)} + 2 \text{ (Staff of Magi)} + 5 \text{ (Shield a voluntad)} = \mathbf{24 \text{ CA}}$$

Frente a una criatura con $+12$ a impactar:

$$\mathbb{P}(\text{Impacto Enemigo}) = \frac{21 - 12}{20} = \frac{9}{20} = \mathbf{0.45} \quad (45.0\%)$$

Si el Mago está volando en la *Broom of Flying* a 40 pies, la probabilidad de impacto por cuerpo a cuerpo es **0.00**.

---

## 🛡️ Bucle Táctico del Mago 2024

* **Turno 0 / Pre-Combate:** Montar en la *Broom of Flying* (50 ft de vuelo) + *Contingency* (*Dimension Door* a 50 HP) + *Mind Blank* (24h).
* **Turno 1:**
  * **Acción:** *Wall of Force* o *Forcecage* para aislar a los enemigos o *Web* para conferir ventaja.
  * **Bonus Action:** Ordenar al Nightwalker y a los 32 arqueros concentrar fuego.
* **Turno 2+:**
  * **Acción:** *Toll the Dead* ($4\text{d}12$ necrótico) o conjuros de ejecución (*Disintegrate*).
  * **Bonus Action:** *Misty Step* a voluntad para recolocación aérea instantánea.
* **Reacción:** *Shield* a voluntad (+5 CA = 24 CA) o *Counterspell* de firma gratuito.