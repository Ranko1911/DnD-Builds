# SYSTEM_PROMPT: Character Build Overview

## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20 (Total)

Class Split: Sorcerer (Divine Soul) 18 / Warlock (Hexblade) 2 (Variante v2.0 - Recomendada) o Sorcerer (Divine Soul) 17 / Warlock (Hexblade) 3 (Variante v1.0)

Species: Aasimar (Protector)

Stats:

* **FUER (STR):** 8
* **DES (DEX):** 14 (Máximo para optimizar la Armadura Media)
* **CON:** 16 (15 base + 1 racial)
* **INT:** 8
* **SAB (WIS):** 10
* **CAR (CHA):** 20 (15 base + 2 racial + 2 ASIs)

Actual Item List: (No especificado en el origen, pero optimizado para usar una Armadura Media, un Escudo y la *Scimitar of Speed* o un *Foco Arcano*).

Roadmap de Progresión: ./light of tomorrow roadmap.md

Combat Role: Backline Blaster / Primary Healer / Ultimate Support Hybrid (La "Ametralladora" de Eldritch Blast combinada con curación de alto impacto).

 1. Resource Management & Inventory Rules

* **Economía de Ranuras de Pacto a Puntos de Sorcería:**
  * Como Warlock de Nivel 3, tienes **2 ranuras de conjuro de 2.º nivel** que se recuperan con un descanso corto.
  * Puedes convertir estas ranuras de Warlock en **4 Puntos de Sorcería** en total (2 puntos por ranura de 2.º nivel) antes de realizar un descanso corto (técnica de *Coffeelock/Cocainelock* o simplemente gestión eficiente de recursos en descansos cortos).
* **Pacto del Tomo y Utilidad de Rituales:**
  * **Pact of the Tome (Nivel 3 Warlock):** Otorga 3 trucos adicionales de cualquier lista de conjuros.
* **Book of Ancient Secrets (Invocación):** Permite aprender y lanzar cualquier conjuro con la etiqueta ritual en el juego (de cualquier clase), como *Find Familiar*, *Detect Magic*, *Identify* y *Leomund's Tiny Hut*. Esto convierte al personaje en un centro de utilidad fuera de combate.
* **Defensa y Foco:**
  * Acceso a Armadura Media (Half-Plate) y Escudo gracias al Hexblade, alcanzando un AC base de $15 + 2 \text{ (DEX)} + 2 \text{ (Escudo)} = 19$.
  * Uso del conjuro *Shield* (Warlock) para subir a $24 \text{ AC}$ temporalmente.

 1. Action Economy & Combat Loop

* **Action:**
  * **Turno 1:** Aplicar *Hexblade's Curse* (Acción Adicional) y lanzar *Eldritch Blast* (Acción, 4 rayos) o un conjuro de control.
  * **Turnos 2+:** Lanzar *Eldritch Blast* (Acción, 4 rayos) y usar Metamagia (*Quickened Spell*) para lanzar *Eldritch Blast* otra vez (Acción Adicional, 4 rayos), disparando un total de **8 rayos por turno**.
* **Bonus Action:**
  * **Metamagia Quickened:** Lanzar *Eldritch Blast* como acción adicional.
  * **Hex / Hexblade's Curse:** Mover o aplicar marcas de daño.
  * **Healing Word:** Curación de emergencia para revivir aliados caídos a distancia.
* **Reaction:**
  * *Counterspell* para denegar magia enemiga.
  * *Shield* / *Absorb Elements* para defensa personal.

 1. The META Combo: The Eldritch Blast Minigun (Turno 2+)

El combo combina los modificadores de daño acumulativos de *Agonizing Blast*, *Hex*, *Hexblade's Curse* y la habilidad racial *Radiant Soul* del Protector Aasimar para concentrar un daño masivo en un solo objetivo.

* **Invocación Clave:** *Agonizing Blast* (Suma $+5$ de CAR al daño de cada rayo).
* **Marca 1:** *Hex* (Suma $+1d6$ de daño necrótico por impacto).
* **Marca 2:** *Hexblade's Curse* (Suma el bono de competencia, $+6$ a nivel 20, al daño de cada impacto. Además, los ataques tienen crítico con 19 y 20).
* **Habilidad Racial:** *Radiant Soul* (Una vez por turno, al golpear, suma tu nivel total, $+20$, como daño radiante adicional).

🧮 Mathematical Engine (A Nivel 20):

* **Daño de un solo rayo de Eldritch Blast con todas las marcas aplicadas:**
    $$1d10 \text{ (fuerza)} + 5 \text{ (CAR)} + 1d6 \text{ (necrótico)} + 6 \text{ (Curse)} = 1d10 + 1d6 + 11 \text{ de daño.}$$
  * *Daño Medio por Rayo:* $5.5 + 3.5 + 11 = 20 \text{ de daño.}$

* **Turno "Nova" completo (Acción + Acción Adicional Quickened = 8 Rayos):**
  * 8 rayos impactando al mismo objetivo:
        $$8 \times 20 = 160 \text{ de daño medio.}$$
  * Aplicación de *Radiant Soul* (Una vez por turno):
        $$160 + 20 \text{ (nivel)} = 180 \text{ de daño medio total.}$$
  * **Críticos:** Al realizar 8 ataques con una probabilidad de crítico ampliada al 10% (19-20), hay una alta probabilidad de duplicar los dados de daño de varios rayos ($2d10 + 2d6 + 11$).

 1. Healing & Divine Metamagic Blueprint

Gracias al origen de **Divine Soul**, el personaje tiene acceso a toda la lista de conjuros del Clérigo, lo que permite duplicar el valor de curaciones y soportes utilizando Metamagia.

* **Twinned Heal (Nivel 6):**
  * Gasta 6 Puntos de Sorcería para duplicar el conjuro *Heal* de 6.º nivel.
  * Cura **70 puntos de vida fijos** a **dos aliados distintos simultáneamente** (140 de curación total sin tiradas de dados).
* **Twinned Death Ward (Nivel 4) / Greater Invisibility (Nivel 4):**
  * Protege o invisibiliza a dos aliados a la vez con un solo casteo.
* **Spiritual Weapon (Nivel 2):**
  * Permite un ataque adicional consistente usando la acción adicional sin consumir puntos de sorcería en turnos donde no se requiera curar o ametrallar.

 1. Spell list

### Warlock Spells (Hexblade - Max Nivel 2)

* Cantrip: *Eldritch Blast*
* Cantrip: *Minor Illusion*
* Nivel 1: *Shield* (Defensa reactiva)
* Nivel 1: *Hex* (Daño adicional)
* Nivel 2: *Misty Step* (Movilidad)
* Rituales del Tomo (Book of Ancient Secrets): *Find Familiar*, *Detect Magic*, *Identify*, *Leomund's Tiny Hut*.

### Sorcerer Spells (Divine Soul - Hasta Nivel 9)

#### Trucos (Cantrips)

* *Guidance* (Clérigo - Utilidad constante)
* *Light*
* *Message*
* *Prestidigitation*
* *Vicious Mockery*

#### Nivel 1 (1st Level)

* *Healing Word* (Clérigo - Revivir aliados caídos)
* *Absorb Elements* (Defensa elemental)

#### Nivel 2 (2nd Level)

* *Aid* (Clérigo - Aumento de HP máximo)
* *Spiritual Weapon* (Clérigo - Daño continuo de acción adicional)

#### Nivel 3 (3rd Level)

* *Revivify* (Clérigo - Resurrección)
* *Counterspell* (Denegación)
* *Haste* (Soporte ofensivo)

#### Nivel 4 (4th Level)

* *Death Ward* (Clérigo - Prevención de muerte)
* *Banishment* (Control de masas)

#### Nivel 5 (5th Level)

* *Greater Restoration* (Clérigo - Limpieza de estados)
* *Synaptic Static* (Daño en área y debuff)

#### Nivel 6 (6th Level)

* *Heal* (Clérigo - Curación masiva de 70 HP)

#### Nivel 7 (7th Level)

* *Conjure Celestial* (Clérigo - Invocación potente)

#### Nivel 8 (8th Level)

* *Holy Aura* (Clérigo - Búfalo defensivo del grupo)

#### Nivel 9 (9th Level)

* *Wish* (Flexibilidad máxima)
