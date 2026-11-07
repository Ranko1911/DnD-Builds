# ☀️ Guía de Conversión a Reglas 2024 (D&D 5.5e) — Light of Tomorrow

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (Innate Sorcery + Dual Divine Artillery)**  
**Reglas:** D&D 2024 Player's Handbook (5.5e)  
**División de Clases:** Sorcerer (Divine Soul) 18 / Warlock (Hexblade o Celestial adaptado) 2  
**Especie (2024):** Aasimar (*Celestial Revelation*: Alas radiantes, daño radiante extra escalado)  
**Dote de Origen (Nivel 1):** *Alert* (Añade Bonificador de Competencia a Iniciativa y permite intercambiar turnos con aliados)  

---

## 🔄 Novedades y Ajustes Clave del Reglamento 2024

### 1. Hechicería Innata (*Innate Sorcery* — Rasgo de Nivel 1 de Hechicero)
* **Activación:** Acción Adicional (dura 1 minuto, 2 usos por Descanso Largo).
* **Efectos:**
  1. Concede **Ventaja constante en todas las tiradas de ataque de conjuro** (garantiza ventaja en los 4 u 8 rayos de *Eldritch Blast* sin depender de oscuridad ni concentración).
  2. Eleva la **CD de salvación de todos tus conjuros en $+1$** (alcanzando CD 23 con equipo de alto nivel).

### 2. Aasimar 2024 (*Celestial Revelation*)
* En las reglas de 2024, la transformación celestial (*Radiant Consumption* o *Heavenly Wings*) se activa ahora como una **Acción Adicional** (en lugar de una Acción completa), permitiendo al personaje entrar en combate, activar sus alas de vuelo y disparar su salva completa de *Eldritch Blast* en el mismo **Turno 1**.
* El daño radiante adicional se escala de forma consistente con tu Bonificador de Competencia o nivel según la regla de mesa.

### 3. Regla de Lanzamiento de Conjuros 2024 (*One Leveled Spell per Turn*)
* Como *Eldritch Blast* es un cantrip que no consume ranuras de conjuro, el personaje puede alternar libremente entre conjuros de nivel con su Acción (ej. *Heal* o *Synaptic Static*) y acelerar un truco con *Quickened Spell*, o lanzar dos descargas completas de *Eldritch Blast* sin ninguna interferencia de reglas.

### 4. Maestrías de Armas (Weapon Masteries 2024)
* **Dagger (Nick):** Permite realizar un ataque secundario ligero como parte de la acción de ataque principal sin consumir la Acción Adicional.
* **Light Crossbow (Slow):** Reduce la velocidad del objetivo en 10 pies al impactar a distancia.

---

## 🧮 Motor Matemático 2024 (LaTeX Math Engine)

### Precisión con *Innate Sorcery*
Con la activación de *Innate Sorcery*, todos los ataques de conjuro gozan de ventaja automática:

$$\mathbb{P}(\text{Impacto contra CA 19}) = 1 - (1 - \mathbb{P}_{\text{base}})^2$$

Con un bonificador de $+11$ a impactar frente a CA 19 ($\mathbb{P}_{\text{base}} = 0.65$):

$$\mathbb{P}(\text{Fallo}) = (1 - 0.65)^2 = (0.35)^2 = 0.1225 \implies \mathbb{P}(\text{Impacto 2024}) = \mathbf{87.75\%}$$

### Daño Nova Solar Asalto 2024 (8 Rayos)
$$\text{DPR Nova 2024} = (8 \times 20.0) + 20 \text{ (Celestial Revelation)} = \mathbf{180.0 \text{ Daño Monotarget Sustentado}}$$

---

## 🛡️ Bucle Táctico Solar 2024

* **Turno 0 / Pre-Combate:** *Death Ward* duplicado + *Aid* (Nivel 7 u 8).
* **Turno 1:**
  * **Bonus Action:** *Celestial Revelation* (Alas de vuelo + daño radiante extra) o *Innate Sorcery* (+1 CD y ventaja).
  * **Acción:** *Eldritch Blast* (4 rayos con ventaja y rango de crítico 19-20 con *Hexblade's Curse*).
* **Turno 2:**
  * **Acción:** *Eldritch Blast* (4 rayos).
  * **Bonus Action:** *Quickened Eldritch Blast* (4 rayos).
  * **Total:** 8 rayos demoledores (180+ daño).
* **Reacción:** *Shield* (+5 CA = 30 CA) o *Counterspell* (obliga al enemigo a una salvación de Constitución contra tu CD 23).