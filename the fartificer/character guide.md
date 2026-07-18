# Guía de Personaje — Fartificer

## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20

Class Split: Fighter (Eldritch Knight) 17 / Artificer (Battle Smith) 3

Species: Humano Variante + Dote de Origen: Francotirador (Sharpshooter)

Stats:

* **FUER (STR):** 8 (-1) [[Atributo de descarte]]
* **DES (DEX):** 20 (+5) (15 Base + 1 Racial + 4 ASI) [[Ataques con ballesta, iniciativa, CA y salvaciones]]
* **CON:** 14 (+2) (14 Base) [[Puntos de golpe totales y concentración de conjuros]]
* **INT:** 14 (+2) (13 Base + 1 Racial) [[Lanzamiento de conjuros, iniciativa de Eldritch Knight y Artificer]]
* **SAB (WIS):** 12 (+1) (12 Base) [[Percepción pasiva y salvaciones]]
* **CAR (CHA):** 8 (-1) [[Atributo de descarte]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Francotirador de Rango Pesado, Tanque de Cobertura y Especialista en Artilugios.

## 1. Resource Management & Inventory Rules

* **Economía de Recursos y Manos:**
  * **Foco Universal Único:** Su ballesta pesada infundida con *Repeating Shot* actúa como su canalizador unificado.
  * **Infusión de Disparo Repetido (Repeating Shot):** Esta infusión mágica elimina la propiedad de carga (*Loading*) de la ballesta e invoca munición mágica infinitamente de la nada. Esto permite disparar una Ballesta Pesada múltiples veces por turno usando la acción de ataque del Guerrero sin restricciones de munición. Si usa una Ballesta de Mano, puede portar un Escudo (+2 CA) en la mano contraria al no necesitar una mano libre para cargar saetas.
* **Gestión de Espacios/Ranuras (Caster Híbrido):**
  * Eldritch Knight 17 (Caster 5) + Artificer 3 (Caster 2) = Nivel 7 de lanzador de conjuros. Cuenta con ranuras hasta de **Nivel 2** (4 de nivel 1, 3 de nivel 2).

## 2. Action Economy & Combat Loop

* **Preparación (Pre-Combate):**
  * Activar la infusión *Repeating Shot* sobre la ballesta y convocar al Defensor de Acero (*Steel Defender*) para que marche a su lado.
* **Action:**
  * **Turno 1 [Ataque Triple de Rango]:** Realizar 3 ataques con su ballesta pesada usando Destreza. Aplica la dote *Sharpshooter* (-5 a golpear, +10 al daño plano) aprovechando el estilo de combate de Arquero (+2 a golpear) e infusión (+1).
  * **Action Surge:** Ejecutar una segunda acción de ataque completo (3 ataques adicionales con ballesta).
* **Bonus Action:**
  * **Dirigir al Defensor de Acero:** Ordenar al Defensor que realice un ataque de Fuerza en cuerpo a cuerpo (1d8 + PB daño) o se posicione para dar cobertura.
  * **Segundo Viento (Second Wind):** Curación menor de emergencia.
* **Reaction:**
  * 🔵 **Shield:** Reacción mágica para aumentar la CA en +5 hasta el inicio de su siguiente turno.
  * 🟢 **Deflect Attack (Defensor de Acero):** El Defensor de Acero usa su reacción para imponer desventaja a un ataque enemigo contra el Fartificer si está a 5 pies de él.

## 3. The META Combo: La Torreta Blindada Móvil

El combo principal radica en la inmunidad a la propiedad de carga de la ballesta pesada y la cobertura activa del Defensor de Acero:

1. **[Paso 1]:** El personaje se posiciona a rango medio/largo (hasta 400 pies sin desventaja por *Sharpshooter*).
2. **[Paso 2]:** Mantiene activo a su Defensor de Acero en cuerpo a cuerpo con el enemigo o como cobertura móvil a su lado. El defensor puede imponer desventaja en ataques entrantes.
3. **[Paso 3]:** Descarga 3 ataques de ballesta pesada por turno (6 con Action Surge) aplicando el daño masivo de *Sharpshooter*.

🧮 Mathematical Engine (Reglas 2014):

$$\text{Daño Ataque Ballesta Pesada} = 3 \times (1d10 (\text{Ballesta}) + 5 (\text{DES}) + 1 (\text{Infusión}) + 10 (\text{Sharpshooter})) = 3 \times 21.5 = 64.5 \text{ de daño medio}$$

$$\text{Daño con Action Surge (6 Ataques)} = 6 \times 21.5 = 129 \text{ de daño medio}$$

$$\text{Daño del Defensor de Acero (Acción Adicional)} = 1d8 + 6 (\text{PB}) = 10.5 \text{ de daño de fuerza}$$

$$\text{Daño Total de Ráfaga} = 139.5 \text{ de daño en un asalto de apertura}$$

## 4. Artificer (Battle Smith) Blueprint

El Battle Smith aporta el Defensor de Acero y herramientas de combate que potencian al guerrero:

| Habilidad de Battle Smith | Estadísticas del Defensor | Funciones Clave | Notas |
| :---: | :---: | :--- | :--- |
| Steel Defender | CA 15, PG 21 | Deflect Attack (Desventaja al atacante) | Protege al Fartificer en primera línea. |
| Tool Proficiency | — | Competencia con Herramientas de Herrero | Útil para reparar al Defensor de Acero. |

## 5. Home Rules

Calcula todas las mecánicas, listas de conjuros, capacidades de combate e inventario bajo las verdades inmutables aprobadas por el DM de esta mesa:

1. **Foco del Mecánico:** Las herramientas de inventor o el arma infundida sirven de foco unificado para todos sus conjuros de Eldritch Knight y Artificer, permitiendo lanzar magia reactiva con el arma empuñada.
2. **Disparo Sin Carga:** La infusión de Disparo Repetido anula la carga de cualquier arma de rango, permitiendo el uso del ataque triple del Guerrero de nivel 11+ sin penalizaciones.
