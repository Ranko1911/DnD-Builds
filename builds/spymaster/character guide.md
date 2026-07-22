# Guía de Personaje — Spymaster

## General Data

System Standard: D&D 5th Edition (2024 / 5.5e Update)

Character Level: 20

Class Split: Rogue (Soulknife) 18 / Artificer 2

Species: Elfo (Elfo de la Selva) + Dote de Origen: Alerta (Alert)

Stats:

* **FUER (STR):** 8 (-1) [[Voluntad para salvar contra empujones, carga irrelevante]]
* **DES (DEX):** 20 (+5) (15 Base + 2 Racial + 3 ASI) [[Ataques, iniciativa, salvaciones principales y CA]]
* **CON:** 14 (+2) (14 Base) [[Puntos de golpe y salvaciones de concentración]]
* **INT:** 14 (+2) (13 Base + 1 Racial) [[Lanzamiento de conjuros de Artificer, investigación y herramientas]]
* **SAB (WIS):** 12 (+1) (12 Base) [[Percepción y salvaciones contra efectos mentaless]]
* **CAR (CHA):** 10 (+0) (10 Base) [[Engaño y persuasión situacionales]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Infiltrador Técnico, Utilidad de Campo, Skill Monkey y Gish Elusivo.

## 1. Resource Management & Inventory Rules

*   **Economía de Recursos y Manos:**
    *   **Foco Universal Único:** El canalizador del personaje es su herramienta de ladrón infundida o su propio foco arcano táctico en un guantelete. Esto le permite ignorar restricciones de manos libres mientras porta un Escudo infundido (+2 CA) en una mano y mantiene la otra libre para lanzar sus Hojas Psíquicas (*Psychic Blades*) u objetos arrojadizos.
*   **Gestión de Espacios/Ranuras:**
    *   Como multiclase de Artificer 2 / Rogue 18, cuenta con 4 ranuras de nivel 1 de Artificer. Su magia se enfoca en utilidad reactiva (*Absorb Elements*, *Cure Wounds*) e infiltración (*Disguise Self*).

## 2. Action Economy & Combat Loop

*   **Preparación (Pre-Combate):**
    *   Activar *Disguise Self* (tematizado como máscara de simulación tecnológica) y aplicar *Guidance* sobre las tiradas de Sigilo o Iniciativa.
*   **Action:**
    *   **Turno 1 [Melee/Rango]:** Atacar con *Booming Blade* utilizando una daga infundida de retorno (*Returning Weapon*) o invocar las *Psychic Blades* para realizar un ataque psíquico a distancia.
    *   **Turnos 2+:** Repetir ataque principal aplicando el Daño de Sigilo (*Sneak Attack*) si hay aliados cerca o si se cuenta con ventaja gracias a tácticas de ocultamiento.
*   **Bonus Action:**
    *   **Cunning Action:** Usar *Disengage* para golpear con *Booming Blade* y retirarse del cuerpo a cuerpo sin provocar ataques de oportunidad, o *Hide* para recuperar sigilo en coberturas.
    *   **Homunculi / Psychic Blade Attack:** Realizar un ataque secundario psíquico de 1d4 + DES si no se usó Cunning Action.
*   **Reaction:**
    *   🔵 **Uncanny Dodge:** Reducir a la mitad el daño de un ataque entrante que el personaje pueda ver.
    *   🟢 **Absorb Elements:** Absorber daño elemental entrante (fuego, frío, etc.) y ganar resistencia temporal como reacción.

## 3. The META Combo: Ataque y Fuga Atronadora

El combo clave consiste en abusar de la dote *Booming Blade* obtenida por la clase Artificer y la acción de *Cunning Action (Disengage)* del Pícaro:

1. **[Paso 1]:** El personaje se aproxima al enemigo portando un escudo (+2 CA, más +1 CA de la infusión *Enhanced Defense*) y ataca con la acción principal usando *Booming Blade*.
2. **[Paso 2]:** Si impacta, inflige el daño del arma, el daño del truco y el daño total de *Sneak Attack* del Pícaro de nivel 18.
3. **[Paso 3]:** Usa la Acción Adicional para realizar *Disengage* y se retira 30 pies. El enemigo se ve obligado a quedarse quieto o moverse y recibir un brutal daño sónico automático.

🧮 Mathematical Engine (Reglas 2024 / 5.5e):

$$\text{Daño Medio} = 1d6 (\text{Arma}) + 5 (\text{DES}) + 3d8 (\text{Booming Blade}) + 9d6 (\text{Sneak Attack}) = 53.5 \text{ de daño}$$

$$\text{Daño de Movimiento Adicional} = 4d8 (\text{Sónico}) = 18 \text{ de daño}$$

$$\text{Daño Total Potencial por Turno} = 71.5 \text{ de daño medio}$$

## 4. Rogue (Soulknife) Blueprint

El personaje utiliza la subclase *Soulknife* para complementar su versatilidad técnica y añadir capacidades psíquicas a su arsenal de infiltrador.

| Habilidad Psíquica | Dado de Energía | Usos | Bonificación | Notas |
| :---: | :---: | :--- | :---: | :--- |
| Psi-Bolstered Knack | 1d12 | Igual a 2x PB | Sumar a tirada fallida | No consume el dado si la tirada vuelve a fallar. |
| Psychic Whispers | 1d12 | 1 gratis / descanso | Telepatía grupal | Dura tantas horas como el número sacado en el dado. |

## 5. Home Rules

Calcula todas las mecánicas, listas de conjuros, capacidades de combate e inventario bajo las verdades inmutables aprobadas por el DM de esta mesa:
1. **Foco Universal Único:** Un único foco (herramientas de ladrón del Artificer) canaliza y ejecuta toda la magia sin restricciones de manos libres o componentes somáticos sin coste de oro.
2. **Progresión Full Caster Integrada:** Los multiclases preparan hechizos utilizando su nivel total de lanzador combinado, lo que en este caso permite una selección flexible de conjuros tácticos dentro de la limitada capacidad de ranuras de nivel 1.
