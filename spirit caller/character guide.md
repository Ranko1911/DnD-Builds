# Character Build Overview: Spirit Caller

## General Data

* **System Standard:** D&D 5th Edition (2024 / 5.5e Update)
* **Character Level:** Wizard (Necromancer) 6
* **Species:** Reborn (Legacy / Creature Type: Undead + Humanoid)
* **Background:** Acolyte (Origin Feat: Magic Initiate (Cleric))
* **Stats (Point Buy + Background):**
  * **STR:** 8 (-1)
  * **DEX:** 14 (+2)
  * **CON:** 14 (+2)
  * **INT:** 18 (+4) *(15 Base + 2 Background + 1 Feat o 16 Base + 2 ASI)*
  * **WIS:** 13 (+1) *(12 Base + 1 Background)*
  * **CHA:** 8 (-1)

### Actual Item List

1. **Component Pouch / Arcane Focus:** A skull or a carved bone focus.
2. **Spellbook:** Bound in dark leather and containing your necromantic studies.
3. **Skeletons Equipment:** 4 Shortbows, 4 Quivers (with 20 arrows each), and 4 sets of leather scraps (to armor them if DM allows).
4. **Flying Broom**: A tool that allows the character to fly

---

## Combat Role: Backline Aerial Summoner (Controller + Support + Blaster)

### 1. Resource Management & Inventory Rules

* **Undead Upkeep:** You must reserve one 3rd-level spell slot daily to cast **Animate Dead** (reasserting control over your 4 skeletons). This leaves you with:
  * 1st level slots: 4/4
  * 2nd level slots: 3/3
  * 3rd level slots: 2/3
* **Corpse Economy:** Deberás conseguir y llevar un registro de los cadáveres u huesos humanoides disponibles. Si te quedas sin cuerpos físicos, dependes de **Summon Undead** (que usa un foco reutilizable). *Nota:* Esta limitación se elimina por completo una vez que obtienes el **Anillo del Pastor de Almas**, el cual te permite alzar sirvientes a partir de ectoplasma del Plano de la Sombra sin necesidad de restos físicos.
* **Ammunition Tracking:** Maintain a tally of arrows fired by your skeletons (average 4 arrows per round total).
* **Aerial Mobility:** Con la **Flying Broom** (Escoba Voladora), tienes una velocidad de vuelo de 50 pies sin requerir sintonización. Mantente siempre flotando a una altura segura (20-30 pies) para evitar por completo a los enemigos cuerpo a cuerpo.

### 2. Action Economy & Combat Loop

* **Pre-combat:** Asegúrate de que tus esqueletos están armados y de estar montado en tu **Flying Broom**.
* **Turn 1:**
  * **Action:** Lanza **Bless** (1.º nivel) sobre ti y tus esbirros.
  * **Movement:** Vuela hacia arriba (20-30 pies de altura) para posicionarte fuera del alcance cuerpo a cuerpo.
  * **Bonus Action:** Ordena a tus esqueletos concentrar el fuego en un objetivo clave (ej. lanzador de conjuros enemigo).
* **Turn 2+:**
  * **Action:** Lanza **Toll the Dead** (rango 60 pies, ideal desde el aire) o **Mind Sliver**.
  * **Bonus Action:** Ordena atacar a los esqueletos.
  * **Reaction:** Lanza **Shield** o **Absorb Elements** contra ataques a distancia o conjuros enemigos. Si eres derribado o desmontado en el aire, reserva tu reacción para **Feather Fall** (evitando daño por caída e interrupción de concentración).

---

## 3. The META: Summon Undead and Boost Them with Wizard Spells

The core optimization of the **Spirit Caller** relies on two synergistic pillars:

### A. The Skeleton Archer Battery (*Animate Dead* + *Bless*)

At level 6, **Undead Thralls** increases your skeletons' HP to 19 ($13 + 6$) and their shortbow damage by +3 (your PB).

* **Without Bless:** A skeleton has +4 to hit. Against CA 15, it has a 50% hit chance.
* **With Bless:** A skeleton gets +1d4 (average +2.5) to hit. Against CA 15, its hit chance increases to **62.5%**.
* **DPR Equation (4 Skeletons + Bless):**
    $$\text{DPR} = 4 \times \left(0.625 \times (1d6 + 5) + 0.05 \times 1d6\right) = 4 \times 5.4875 = 21.95 \text{ DPR}$$
* Combined with your own **Toll the Dead** (approx. 7.80 DPR), this setup yields **29.75 DPR** sustainably without expending high-level slots in active combat.

### B. The Single Dreadful Spirit (*Summon Undead* - 3rd/4th Level)

When physical bodies are unavailable, use **Summon Undead** (Ghostly, Putrid, or Skeletal):

* **Putrid Option:** Excellent for control. Its attacks can poison the enemy, and poisoned enemies within 5 feet of it must save or become **Paralyzed**.
* **Skeletal Option (3rd level slot):** Makes 1 Grave Bolt attack at +7 to hit ($P = 0.65$ against CA 15).
    $$\text{DPR} = 0.65 \times (1d6 + 6) + 0.05 \times 1d6 = 6.35 \text{ DPR}$$
* **Skeletal Option (4th level slot):** Makes 2 attacks.
    $$\text{DPR} = 2 \times 7.00 = 14.00 \text{ DPR}$$

---

## 4. Home Rules & Species Specifics

* **Undead Type Immunity:** As a Reborn (Undead), you are immune to humanoid-targeting spells.
* **Knowledge from a Past Life:** You can roll a $1d4$ (or $1d6$ depending on legacy version) and add it to skill checks $PB$ times per long rest. Use this for crucial Arcana or History checks.
