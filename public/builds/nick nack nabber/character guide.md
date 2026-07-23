# General Data

System Standard: D&D 5th Edition (2024 / 5.5e Update)

Character Level: 20

Class Split: Artificer (Armorer) 17 / Rogue (Thief) 3

Species: Rock Gnome + Crafter (Feat de Nivel 1)

Stats:

- **FUER (STR):** 8 (-1) [[Volcado]]
- **DES (DEX):** 14 (+2) [[Requisito máximo para armadura media (si se usa armadura media o pesada sin penalización de fuerza gracias a Armorer)]]
- **CON:** 14 (+2) [[Salvaciones de concentración y puntos de golpe]]
- **INT:** 17 (+3) (15 base + 2 racial) [[Estadística principal para ataques, salvaciones de conjuros y fabricación de objetos]]
- **SAB (WIS):** 12 (+1) [[Percepción y salvaciones de voluntad]]
- **CAR (CHA):** 10 (0) [[Habilidad social básica]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Frontline Utility Tank / Especialista en Objetos Mágicos (Controlador de aggro + curación y control por acción adicional)

## 1. Resource Management & Inventory Rules

- **Economía de Recursos y Manos:**
  - **Armas:** Guanteletes del Trueno (Thunder Gauntlets) integrados en la armadura modelo Guardián (Guardian model).
  - **Foco Universal Único:** Al ser Artificer, tu propia armadura de energía sirve de foco de lanzamiento, lo que te permite llevar un escudo en una mano y tener la otra libre para activar varitas u otros objetos arcanos sin penalización.
- **Gestión de Espacios/Ranuras:**
  - Como Artificer 17, eres un lanzador de "media progresión" (dispones de slots hasta nivel 5). El nivel de lanzador unificado es 17.
  - **Spell-Storing Item:** Recurso clave. Te permite almacenar un conjuro de nivel 1 o 2 (ej: _Web_ o _Cure Wounds_) en un objeto y activarlo hasta 10 veces (2x INT mod) al día.

## 2. Action Economy & Combat Loop

- **Preparación (Pre-Combate):**
  - Activar infusiones en tus objetos (como _Mind Sharpener_ o _Enhanced Defense_).
  - Tener el **Spell-Storing Item** listo en una mano (cargado con el conjuro _Web_ o _Cure Wounds_).
- **Action:**
  - **Turno 1+:** Acción: Extra Attack → Realizar dos ataques con tus **Thunder Gauntlets** utilizando INT (+11 a impactar). Al impactar, el enemigo tiene desventaja en tiradas de ataque contra cualquier criatura que no seas tú hasta el inicio de tu próximo turno.
- **Bonus Action:**
  - **Turno 1+ (Control):** Usar la acción **Magic** como Acción Adicional (vía _Fast Hands_ del Thief) para activar el **Spell-Storing Item** y lanzar _Web_ sin gastar ranuras ni usar tu acción principal.
  - **Turno 1+ (Soporte):** Usar la acción **Magic** con _Fast Hands_ para activar el Spell-Storing Item con _Cure Wounds_ para levantar a un aliado caído de forma instantánea.
- **Reaction:**
  - 🔵 **Flash of Genius:** Añadir tu modificador de INT (+5) a una tirada de salvación o prueba de habilidad propia o de un aliado a 30 ft.
  - 🟢 **Mind Sharpener (Infusión):** Consumir una carga para pasar automáticamente una salvación de concentración fallida.

## 3. The META Combo: The Fast-Handed Artificer

El build aprovecha una interacción explícita y potenciada en el reglamento de 2024: el uso de la **Acción Magic** como Acción Adicional gracias a la habilidad **Fast Hands** del pícaro Thief.

1. **Spell-Storing Item (Artificer 11):** Almacenas el conjuro _Web_ en un objeto (como un anillo o varita).
2. **Fast Hands (Thief 3):** Te permite realizar la acción **Magic** (la acción requerida para activar varitas y el Spell-Storing Item) como una **Acción Adicional**.
3. **Turno de Combate Optimizado:**
   - **Acción:** Atacas dos veces con tus _Thunder Gauntlets_ marcando a dos enemigos diferentes para que tengan desventaja al atacar a tus aliados.
   - **Acción Adicional:** Activas el Spell-Storing Item para lanzar _Web_ y atrapar a los enemigos marcados en el área.
   - **Reacción:** Guardas _Flash of Genius_ para proteger a tus aliados o a ti mismo de salvaciones críticas.

🧮 Mathematical Engine (D&D 5e 2024 — Nivel 14, CA enemigo 18, Salvación enemigo +4):

**Estadísticas a nivel 14 (Artificer 11 / Rogue 3):**

- Modificador de ataque (Thunder Gauntlets): +10 (+5 INT, +5 PB).
- CD de salvación de conjuros (para _Web_): 18 (+5 INT, +5 PB, +8 base).
- Daño de Thunder Gauntlets: $1\text{d}8 + 5$ trueno (promedio: 9.5).

$$\text{P(Impactar CA 18)} = \frac{21 - (18 - 10)}{20} = 0.65$$
$$\text{DPR promedio en CaC} = 2 \times 0.65 \times 9.5 = 12.35 \text{ daño/turno y marca a dos enemigos}$$
$$\text{Probabilidad de que el enemigo falle la salvación de Web (CD 18 con TS +4)} = \frac{18 - 4 - 1}{20} = 0.65$$

_(El valor real del build no es el DPR, sino la inmensa economía de acciones: meter dos ataques de aggro y lanzar un conjuro de control de área de nivel 2 de alta CD en el mismo turno, de forma sostenida 10 veces por día sin consumir ranuras)._

## 4. Artificer (Armorer) / Rogue (Thief) Blueprint

El Armorer aporta las herramientas ofensivas y defensivas integradas, mientras que el Thief aporta la velocidad táctica.

| Nivel | Clase        | Habilidad Clave            | Impacto en Combate | Notas                                                                                |
| :---: | :----------- | :------------------------- | :----------------: | :----------------------------------------------------------------------------------- |
|   3   | Artificer 3  | Armadura Arcana (Guardián) |      🟢 Alto       | Da acceso a Thunder Gauntlets (ataque con INT) y CA pesada sin requisitos de fuerza. |
|  11   | Artificer 8  | Flash of Genius            | 🔵 Extraordinario  | Añade INT (+5) a cualquier tirada de salvación/habilidad cercana.                    |
|  14   | Artificer 11 | Spell-Storing Item         |   🔵 Roto (2024)   | Almacena 10 usos de Web o Cure Wounds.                                               |
|  17   | Rogue 3      | Fast Hands                 |   🔵 Roto (2024)   | Permite activar el Spell-Storing Item como Bonus Action.                             |

## 5. Home Rules

1. **Foco Universal Único:** Tu armadura arcana actúa como tu foco y canalizador, liberando la necesidad de componentes somáticos.
2. **Progresión Full Caster Integrada:** Nivel de lanzador unificado de 17.
