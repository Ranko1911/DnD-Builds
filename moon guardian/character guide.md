# SYSTEM_PROMPT: Character Build Overview

## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20 (Total)

Class Split: Barbarian (Ancestral Guardian) 7 / Druid (Circle of the Moon) 13

Species: Shifter (Beasthide) [Monsters of the Multiverse — otorga Temp HP y +1 CA al usar la habilidad de cambio PB veces/día]

Stats:

* **FUER (STR):** 16 (15 base + 1 racial) [Ataque cuerpo a cuerpo en forma humanoide y requisito de multiclase]
* **DES (DEX):** 12 [Modificador mínimo para salvaciones y Unarmored Defense]
* **CON:** 20 (14 base + 2 racial + 4 ASI) [Prioridad máxima: HP, Unarmored Defense, salvaciones de concentración]
* **INT:** 8
* **SAB (WIS):** 15 (14 base + 1 Resilient WIS) [Lanzamiento de conjuros druídicos, salvaciones de Sabiduría con competencia vía Resilient]
* **CAR (CHA):** 8

Actual Item List: ./actual inventory list.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Roadmap de Progresión: ./roadmap.md

Combat Role: Frontline Protector Tank / Battlefield Controller / Off-Healer (Protege a los aliados mediante Ancestral Protectors que fuerzan desventaja + resistencia al daño en los aliados, Spirit Shield para reducir daño, y absorbe cantidades masivas de daño gracias a Wild Shape + Rage + enormes reservas de HP temporales y permanentes. Feral Instinct garantiza actuar primero en combate. Aporta utilidad y curación fuera de combate como Druida de nivel 13, incluyendo conjuros de 7.º nivel).

 1. Resource Management & Inventory Rules

* **Economía de Recursos y Formas:**
    * No puedes lanzar conjuros ni mantener concentración mientras estás en **Furia (Rage)**. Sin embargo, los conjuros lanzados ANTES de entrar en Furia y que no requieran concentración (como *Fire Shield*) permanecen activos durante la Furia y la Wild Shape.
    * **Combat Wild Shape** (Moon Druid) permite usar Wild Shape como **acción adicional** en lugar de acción, pero también puedes usarlo como acción. Puedes elegir el orden: Rage (bonus action) + Wild Shape (action) en turno 1, o Wild Shape (bonus action) + Attack (action) en turno 2.
    * Mientras estás en Wild Shape, puedes gastar una ranura de conjuro como **acción adicional** para curarte $Xd8$ HP (siendo X el nivel de la ranura). Esto NO es lanzar un conjuro, por lo que funciona durante la Furia.
* **Equipo y Defensas:**
    * Druidas no visten armadura metálica (en la mayoría de mesas). Sin armadura, usas **Unarmored Defense** del Bárbaro: $10 + \text{DEX (+1)} + \text{CON (+5)} = 16$ CA en forma humanoide, $17$ con Shifter activo, $19$ con escudo de madera.
    * En Wild Shape, usas las estadísticas de la bestia/elemental, pero retienes rasgos de clase y raza.

 2. Action Economy & Combat Loop

* **Preparación (Pre-Combate):**
    * Si anticipas combate: lanzar *Fire Shield* (4.º nivel, sin concentración, 10 min). Luego Wild Shape → Rage.
* **Action:**
    * **Turno 1 (Opción A — combate anticipado):** Rage (BA) + Wild Shape (Action). Turno 2+: Attack (Reckless si conviene).
    * **Turno 1 (Opción B — combate sorpresa):** Gracias a **Feral Instinct** (Barb 7), puedes actuar normalmente aunque seas sorprendido si entras en Rage al inicio de tu turno. Rage (BA) + Attack. Turno 2: Wild Shape (BA) + Attack.
    * **Turnos 2+:** Ataque con forma bestial/elemental. Reckless Attack según necesidad táctica.
* **Iniciativa:** **Feral Instinct** otorga **ventaja en tiradas de iniciativa**. Ir primero es crítico para un protector: puedes aplicar Ancestral Protectors antes de que los enemigos actúen contra tus aliados.
* **Bonus Action:**
    * **Rage** (Turno 1).
    * **Combat Wild Shape** (Turno 1 o 2).
    * **Self-Heal:** Gastar ranura de conjuro para curarte $Xd8$ HP mientras en Wild Shape.
    * **Shifter:** Asumir forma bestial para +1 CA y Temp HP ($1d6 + 2 \times \text{PB}$).
* **Reaction:**
    * **Spirit Shield (Barb 6):** Cuando un aliado dentro de 30 pies recibe daño estando tú en Furia, reduces ese daño en $2d6$ (7 de media) sin límite de usos por turno.

 3. The META Combo: The Unkillable Guardian (Wild Shape + Rage + Ancestral Protectors)

La sinergia principal del build crea un tanque virtualmente indestructible que fuerza a los enemigos a atacarlo a él en lugar de a sus aliados:

1. **Ancestral Protectors (Barb 3):** El primer enemigo que golpeas cada turno sufre desventaja en ataques contra cualquiera que no seas tú hasta tu siguiente turno. Si aún así golpea a un aliado, ese aliado tiene **resistencia a todo el daño** de ese ataque.
2. **Rage + Wild Shape:** Mientras estás en Furia dentro de Wild Shape, tienes resistencia a daño cortante, perforante y contundente. Tus enormes HP de forma bestial/elemental se duplican en efectividad.
3. **Reckless Attack:** Aunque da ventaja a los enemigos contra ti, actúa como un "taunt suave" adicional: incentiva a los enemigos a atacarte a TI (que es exactamente lo que quieres).
4. **Capas de HP:** Al caer a 0 HP en Wild Shape, simplemente reviertes a forma humanoide con tus HP propios. Puedes tener 126 HP (Earth Elemental) + 252 HP (humanoide) = **hasta 570+ HP potenciales** a nivel 20 contando curación con ranuras de hasta 7.º nivel.
5. **Feral Instinct (Barb 7):** Ventaja en iniciativa te asegura actuar antes que los enemigos en la mayoría de combates. Incluso si eres sorprendido, puedes actuar normalmente si entras en Rage.

🧮 Mathematical Engine (A Nivel 20):

* **HP Totales Potenciales:** 126 HP (Earth Elemental) + curación con ranuras (hasta $7d8$ por slot de 7.º = 31.5 media) + 252 HP (humanoide con Tough) = **570+ HP** (récord absoluto entre tanks).
* **Protección de Aliados por Turno:**
    * Ancestral Protectors: Desventaja + resistencia al daño contra el objetivo marcado.
    * Spirit Shield: $-2d6$ (-7 media) de daño a un aliado por reacción.
    * Feral Instinct: Actúas primero → Ancestral Protectors activos antes de que los enemigos actúen.
* **Fire Shield (si activo):** Cualquier enemigo que te golpee cuerpo a cuerpo sufre $2d8$ de daño de fuego/frío (~9 media). En un tanque que atrae ataques constantemente, esto genera daño pasivo muy significativo.
* **Regenerate (7.º nivel, pre-combate):** Si lo lanzas antes de entrar en Rage, recuperas 1 HP al inicio de cada turno durante 1 hora sin concentración... espera, Regenerate SÍ requiere concentración. Sin embargo, como ranura de 7.º nivel para self-heal en Wild Shape, otorga $7d8$ (31.5 media) de curación como bonus action.

 4. Druid (Circle of the Moon) Blueprint

**Formas de Wild Shape recomendadas por nivel:**

| Druid Level | CR Máx | Forma Recomendada | AC | HP | Notas |
| :---: | :---: | :--- | :---: | :---: | :--- |
| 2 | CR 1 | **Direwolf** | 14 | 37 | Pack Tactics (ventaja sin Reckless), prono en golpe |
| 4 | CR 1 (swim) | **Giant Octopus** | 11 | 52 | Grapple con tentáculos, 15 ft reach, divertidísimo |
| 6 | CR 2 | **Giant Constrictor Snake** | 12 | 60 | Constrict (grapple + restrain), huge, más HP |
| 8 | CR 2 (fly) | **Giant Eagle / Quetzalcoatlus** | — | — | Utilidad de vuelo y transporte |
| 9 | CR 3 | **Giant Snapping Turtle** | 17 | 75 | Mejor AC de cualquier bestia, tanque puro |
| 10 | Elemental | **Earth Elemental** | 17 | 126 | Mejor opción ofensiva y defensiva. Cuesta 2 usos |

**Conjuros clave preparados (fuera de combate / pre-combate):**
* Regenerate (7.º): Restaura miembros perdidos, curación sostenida fuera de combate.
* Plane Shift (7.º): Transporte planar de emergencia o destierro de enemigo (requiere ataque de toque).
* Fire Shield (4.º): Pre-combate, sin concentración, daño reflejado.
* Aura of Vitality (3.º): Curación masiva fuera de combate.
* Revivify (3.º): Resurrección de emergencia.
* Healing Spirit (2.º), Pass Without Trace (2.º), Lesser Restoration (2.º).
* Goodberry, Cure Wounds, Healing Word (1.º): Utilidad y curación.

 5. home rules
(Calcula todas las mecánicas bajo las reglas vigentes en tu mesa. Decisiones clave que consultar con el DM:)
1. ¿Puede la habilidad Shifter (Beasthide) usarse mientras estás en Wild Shape? (Asumido que sí si Wild Shape va primero y luego Shift).
2. ¿Fire Shield persiste al entrar en Wild Shape + Rage? (RAW sí, ya que no requiere concentración ni es una acción de lanzar conjuro).
3. ¿Los ataques en Wild Shape cuentan como "ataques basados en Fuerza" para Reckless Attack? (Generalmente sí, ya que las bestias usan Fuerza).
