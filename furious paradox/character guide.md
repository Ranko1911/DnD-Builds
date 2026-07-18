# General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20

Class Split: Wizard (Bladesinger) 18 / Barbarian 2

Species: Elfo (Alto Elfo) + War Caster (Feat de Nivel 1)

Stats:

- **FUER (STR):** 13 (+1) [[Requisito mínimo para multiclase de Bárbaro]]
- **DES (DEX):** 16 (+3) (15 base + 1 racial) [[Ataques físicos cuerpo a cuerpo, iniciativa y CA]]
- **CON:** 14 (+2) [[Puntos de golpe, CA base de Unarmored Defense y concentración]]
- **INT:** 16 (+3) (14 base + 2 racial) [[Bono de Bladesong a CA y salvaciones, ranuras de conjuros y Song of Defense]]
- **SAB (WIS):** 9 (-1) [[Volcado]]
- **CAR (CHA):** 8 (-1) [[Volcado]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Frontline Thorns Tank / Gish Inmortal (Tanque pesado por evasión y reducción extrema de daño)

## 1. Resource Management & Inventory Rules

- **Economía de Recursos y Manos:**
  - **Armas:** Estoque en la mano principal (Finesse). Bladesong prohíbe el uso de escudos o armas a dos manos.
  - **Foco Universal Único:** El estoque o tu ropa misma sirven como foco unificado para lanzar tus conjuros defensivos (Shield, Mirror Image, Fire Shield) antes de entrar en Rage.
- **Gestión de Espacios/Ranuras:**
  - Como Wizard 18, dispones de ranuras de conjuros de hasta nivel 9.
  - **Rage vs Lanzamiento:** No puedes lanzar ni concentrarte en conjuros mientras estás en Rabia (Rage). Por tanto, tus ranuras se dividen en dos funciones:
    1. Lanzar conjuros de larga duración y sin concentración _antes_ de entrar en Rabia (ej: _Mirror Image_, _Fire Shield_, _False Life_).
    2. Quemar espacios de conjuros de cualquier nivel para activar **Song of Defense** y reducir a cero el daño que logre atravesar tu CA y tu Rabia.

## 2. Action Economy & Combat Loop

- **Preparación (Pre-Combate):**
  - Lanzar _Fire Shield_ (nivel 4, sin concentración) y _Mirror Image_ (nivel 2, sin concentración).
- **Action:**
  - **Turno 1:** Acción: Bladesong (BA) + Extra Attack (Acción) para golpear dos veces con tu Estoque.
  - **Turno 2 (Setup de Furia):** Acción: Atacar dos veces con tu Estoque. Si es necesario, usar Reckless Attack para obtener ventaja a costa de dar ventaja al enemigo (mitigado por tu CA masiva y resistencia).
- **Bonus Action:**
  - **Turno 1:** 🔵 **Bladesong** (+3 a CA, +10 ft de velocidad, ventaja en Acrobacias).
  - **Turno 2:** 🔵 **Rage** (Rabia para resistencia al daño físico).
- **Reaction:**
  - 🔵 **Song of Defense (Wizard 10):** Al recibir daño, quemas una ranura de conjuro para reducir el daño recibido en $5 \times \text{nivel de ranura}$. Dado que tu rabia ya divide a la mitad el daño físico, esta reducción te permite ignorar por completo la gran mayoría de los impactos.

## 3. The META Combo: The Raging Bladesinger

El build aprovecha que las habilidades clave del Bladesinger Wizard (**Bladesong** a nivel 2 y **Song of Defense** a nivel 10) son **habilidades de clase y no conjuros**, por lo que siguen siendo 100% funcionales mientras estás bajo los efectos de la Rabia del Bárbaro.

1. **Defensa de Atributos Triples:** Usando la armadura natural del Bárbaro (_Unarmored Defense_) combinada con _Bladesong_:
   $$\text{CA} = 10 + \text{DEX } (3) + \text{CON } (2) + \text{INT } (3) = 18 \text{ sin armadura ni escudo}$$
   _(Nota: Con Amulet of Health (CON 19) e incremento de DEX/INT a nivel alto, la CA pasiva alcanza fácilmente los 23-25 sin magia)._
2. **Setup de Doble Capa Defensiva:**
   - **Primera Capa:** _Mirror Image_ (sin concentración, los enemigos golpean a los clones).
   - **Segunda Capa:** _Fire Shield_ (sin concentración, devuelve $2\text{d}8$ daño de fuego/frío a quien te golpee cuerpo a cuerpo).
3. **El Escudo Arcano:** Si un golpe logra impactarte, primero se reduce a la mitad por tu Rabia (Rage). Luego utilizas **Song of Defense** como Reacción gastando una ranura de nivel 3 para restar 15 puntos de daño al remanente, reduciendo el golpe a 0 e infligiendo daño de vuelta con _Fire Shield_.

🧮 Mathematical Engine (D&D 5e 2014 — Nivel 12, CA enemigo 18, Ataque enemigo promedio de 30 de daño):

**Estadísticas a nivel 12 (Wizard 10 / Barbarian 2) con Bladesong activo:**

- CA base: 18 (10 + 3 Dex + 2 Con + 3 Int).
- P(Impactar CA 18 con bono enemigo +8) = 0.55.
- Si el ataque impacta con 30 de daño físico:
  1. Rabia (Rage) reduce el daño a la mitad: $30 / 2 = 15$.
  2. Usas Reacción: **Song of Defense** consumiendo una ranura de nivel 3 (reduce $3 \times 5 = 15$ daño).
  3. Daño total recibido: $15 - 15 = 0$.
  4. El atacante recibe $2\text{d}8$ daño de fuego (promedio: 9) de _Fire Shield_ por haberte golpeado.

## 4. Bladesinger Wizard / Barbarian Blueprint

El Bladesinger aporta la base mágica defensiva y las ranuras para la mitigación de daño, mientras que el Bárbaro aporta la resistencia física y la base de puntos de golpe de Unarmored Defense.

| Nivel | Clase       | Habilidad Clave         |  Impacto en Combate   | Notas                                                            |
| :---: | :---------- | :---------------------- | :-------------------: | :--------------------------------------------------------------- |
|   2   | Wizard 2    | Bladesong               |   🔵 Extraordinario   | Otorga bonus de CA, velocidad y salvaciones basadas en INT.      |
|   3   | Barbarian 1 | Rage, Unarmored Defense | 🔵 Roto (Apilamiento) | Mitad de daño físico recibido y combinación de stats para la CA. |
|   4   | Barbarian 2 | Reckless Attack         |        🟢 Alto        | Otorga ventaja en tus ataques cuerpo a cuerpo.                   |
|  12   | Wizard 10   | Song of Defense         | 🔵 Roto (Apilamiento) | Mitigación absoluta consumiendo slots de conjuros no usados.     |

## 5. Home Rules

1. **Foco Universal Único:** El estoque actúa como el foco universal de lanzamiento para el Bladesinger, permitiendo realizar todos los componentes.
2. **Progresión Full Caster Integrada:** Nivel de lanzador unificado de 18.
