# General Data

System Standard: D&D 5th Edition (2024 / 5.5e Update)

Character Level: 20 (Total)

Class Split: Cleric (Tempest Domain) 4 / Wizard (Order of Scribes) 16

Species: Dwarf (PHB24) + Level 1 Feat: Toughness (PHB24)

Stats: STR 12, DEX 12, CON 17, INT 20, WIS 14, CHA 10

* **STR:** 12
* **DEX:** 12
* **CON:** 17 (15 base + 1 Resilient CON + 1 Epic Boon) [Proficiencia en salvaciones de CON para concentración]
* **INT:** 20 (15 base + 1 War Caster + 2 ASI a nivel 12 + 2 ASI a nivel 16) [Tu estadística primaria de ataque y CD de conjuros]
* **WIS:** 14
* **CHA:** 10

Actual Item List: ./actual inventory list.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Frontline Gish (Tank / Tactical Controller / AoE Burst Damage / Support / Off-healer)

## 1. Resource Management & Inventory Rules

* **Universal Spellcasting Focus:** Se aplica la Regla de Casa 1. La joyería mágica fusionada (Amulet of the Devout + Stormshaper's Amulet) funciona como el foco de lanzamiento universal para conjuros de Clérigo y de Mago.
* **Free-Hand Economy:** Escudo equipado en la mano secundaria. La mano principal queda completamente libre para portar armas (Martillo de Guerra / Staff of the Magi) o manipular componentes Somáticos/Materiales. No se aplican penalizaciones por intercambio de armas.
* **Armor Proficiency:** Armadura Pesada (Plate Armor +3) + Escudo +3. CA pasiva base: **24 CA**. Con el conjuro *Shield* (reacción) tu CA alcanza **29 CA**.

## 2. Action Economy & Combat Loop

* **Action:**
  * **True Strike (Wizard Cantrip):** Ataque cuerpo a cuerpo usando tu **Inteligencia** para impactar/dañar. A nivel 17+, inflige el daño del arma + $3d6$ de daño radiante + $5$ (modificador de INT).
  * **Cast AoE Spell:** Lanzar conjuros de área masivos (como *Meteor Swarm* o *Chain Lightning*) transmutados a Relámpago y maximizados con Ira Destructiva.
* **Bonus Action:**
  * **Misty Step / Teleportation:** Movilidad instantánea de 30 pies.
  * **Reactive Healing:** *Healing Word* (2024) para levantar aliados caídos a distancia.
* **Reaction:**
  * **Shield:** $+5$ a la CA contra un ataque, manteniéndose hasta el inicio de tu próximo turno.
  * **Absorb Elements:** Resistencia a un tipo de daño elemental y daño extra en tu siguiente ataque.
  * **One with the Word (Scribes 14):** Si sufres daño con la mente de tu libro manifestada, puedes usar tu reacción para disipar la mente y **prevenir todo el daño de ese ataque/conjuro** (a cambio de sacrificar conjuros temporalmente).
  * **Wrath of the Storm / Stormshaper's Amulet:** Daño reactivo de relámpago/trueno o empujón de 10 pies sin salvación al atacante.

## 3. The META Combo: Cataclysmic Destructive Wrath

El personaje combina su nivel de caster total (20) y la flexibilidad del libro de Escriba para desatar cataclismos elementales maximizados:

* **El "Meteor Swarm Relámpago" (Caster Level 17+):**
  * **Mecanismo:** Lanzar *Meteor Swarm* (9.º) transmutado a Relámpago usando *Prismatic Wall* (9.º, que tiene relámpago en su descripción) del libro de conjuros.
  * **Rasgo de Clérigo:** Canalizar Divinidad: Ira Destructiva (maximiza el daño de trueno/relámpago).
  * **Cálculo (LaTeX):**
        $$\text{Daño Plano} = 40 \text{ dados} \times 6 = 240 \text{ de daño de Relámpago en área.}$$
        Los objetivos que superen la salvación de Destreza (CD 21) sufren 120 de daño plano. Los que fallen sufren 240 de daño plano. Esto elimina ejércitos enteros en un asalto.
* **El "Chromatic Bounce Garantizado" (Nivel Bajo/Medio):**
  * Lanzar *Chromatic Orb* a 2.º nivel transmutado/lanzado directamente. Al maximizar con Ira Destructiva, todos los dados muestran "8", garantizando el salto a un segundo objetivo bajo las reglas de 2024.

## 4. Wizard Spellbook Blueprint

* Los conjuros ofensivos y de control se eligen de la lista de Mago (para aprovechar tu INT 20 y CD 21).
* Los conjuros de apoyo, curación e inmunidades se eligen de la lista de Clérigo (para evitar la dependencia de tu WIS 14).
* **Rituales 2024:** Conjuros como *Find Familiar*, *Identify*, *Detect Magic*, *Comprehend Languages*, *Tiny Hut* y *Rary's Telepathic Bond* se lanzan como rituales directamente desde el libro sin requerir ranuras de preparación.

## 5. Home Rules (Mesa Tempest)

1. **Foco Universal Único:** El collar mágico del personaje canaliza tanto magia de Mago como de Clérigo, permitiendo empuñar arma y escudo sin penalización.
2. **Fusión de Sintonización:** El Stormshaper's Amulet y el Amulet of the Devout están fusionados en un solo objeto físico (1 sola ranura de sintonización).
3. **Progresión Full Caster Integrada:** El personaje prepara conjuros usando su nivel de lanzador total (20). Esto le permite preparar conjuros de nivel 9 de ambas listas simultáneamente.
4. **Tabla Digital de Canalizar Divinidad:** 2 usos de Canalizar Divinidad por descanso corto o largo desde el Nivel 2 de Clérigo.
