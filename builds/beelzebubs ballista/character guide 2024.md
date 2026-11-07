# 🏹 Guía de Conversión a Reglas 2024 (D&D 5.5e) — Beelzebub's Ballista

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (2024 Triple Charisma Cantrip Sniper)**  
**Reglas:** D&D 2024 Player's Handbook (5.5e)  
**División de Clases:** Warlock (The Celestial) 19 / Fighter 1  
**Especie (2024):** Tiefling (*Infernal Legacy*)  
**Dote de Origen (Nivel 1):** *Musician* (Otorga Inspiración Heroica a todo el escuadrón tras descansos)  

---

## 🔄 Novedades y Ajustes Clave del Reglamento 2024

### 1. La Revolución de *True Strike 2024*
* En el PHB 2024, el truco **True Strike** ha sido rediseñado por completo:
  1. Realiza inmediatamente un ataque con un arma que empuñes (en este caso, una **Ballesta Pesada**).
  2. Utiliza tu **característica de lanzamiento de conjuros (Carisma +5)** para la tirada de ataque y de daño en lugar de Fuerza o Destreza.
  3. Convierte el tipo de daño del arma en **Radiante**.
  4. Escala a nivel 5 ($+1\text{d}6$), nivel 11 ($+2\text{d}6$) y nivel 17 ($+3\text{d}6$ de daño radiante adicional).

### 2. Invocaciones Sobrenaturales Universales (*Eldritch Invocations 2024*)
* **Agonizing Blast:** En 2024 ya no está restringido exclusivamente a *Eldritch Blast*. Ahora puede vincularse a **cualquier truco de Brujo que inflija daño**, sumando tu modificador de Carisma ($\mathbf{+5}$) al daño de *True Strike*.
* **Repelling Blast & Lance of Lethargy:** Al estar vinculadas al cantrip de daño de Brujo, empujan **10 pies** y ralentizan **10 pies** al enemigo en cada impacto.

### 3. Maestrías de Armas (Weapon Masteries 2024)
Al contar con competencia marcial de Guerrero a nivel 1, se desbloquea la maestría de la Ballesta Pesada:
* **Heavy Crossbow (Push):** Si la criatura impactada es de tamaño Grande o menor, la empuja **10 pies adicionales** lejos de ti sin tirada de salvación.
* **Efecto de Repulsión Combinado:** $\mathbf{20 \text{ pies de retroceso total}} + \mathbf{10 \text{ pies de reducción de velocidad}}$ en cada disparo sin consumir ranuras de conjuro.

---

## 🧮 Motor Matemático 2024 (LaTeX Math Engine)

### Triple Modificador de Carisma en un Solo Impacto
El daño plano acumulado por el disparo de *True Strike* a nivel 20 es:

$$\text{Bono Plano de Carisma} = +5 \text{ (Base True Strike)} + 5 \text{ (Agonizing Blast)} + 5 \text{ (Radiant Soul)} = \mathbf{+15.0 \text{ Daño}}$$

Con una *Ascendant Dragon's Wrath Heavy Crossbow* ($+3$ mágico, $+3\text{d}6$ daño elemental):

$$\text{Daño Base} = 1\text{d}10 \text{ (Ballesta)} + 3\text{d}6 \text{ (True Strike)} + 3\text{d}6 \text{ (Dragon's Wrath)} + 18 = 5.5 + 21 + 18 = \mathbf{44.5 \text{ Daño Monotarget}}$$

Con una tirada de ataque de $+16$ ($+5$ CAR, $+6$ PB, $+2$ Archery, $+3$ Arma) y Ventaja permanente por el Imp invisible o *Foresight*:

$$\mathbb{P}(\text{Acierto contra CA 19}) = 1 - (1 - 0.90)^2 = \mathbf{99.0\%}$$
$$\mathbb{E}[\text{DPR Cantrip Sostenido 2024}] = (0.99 \times 44.5) + (0.0975 \times 26.5) = \mathbf{46.63 \text{ Daño Continuo}}$$

---

## 🛡️ Bucle Táctico del Artillero 2024

* **Turno 0 / Pre-Combate:** *Foresight* (8h de ventaja y desventaja hostil) + *Celestial Resilience* (24 THP a ti, 14 THP a 5 aliados).
* **Turno 1:**
  * **Acción:** *True Strike* con Ballesta Pesada (44.5 daño radiante + 20 ft de retroceso + 10 ft de ralentización).
  * **Bonus Action:** *Healing Light* para curar a un compañero sin gastar ranuras ni restringir conjuros.
* **Turno 2+:**
  * **Acción:** Repetir *True Strike* (o desatar el cono de aliento dracónico de $12\text{d}6$ del arma).
  * **Bonus Action:** *Hex* o reposición.
* **Reacción:** *Shield* (+5 CA = 26 CA) o *Hellish Rebuke* de nivel 5 ($6\text{d}10$ de fuego).