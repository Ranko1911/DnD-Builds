# Guía de Personaje — Le Biter

## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20

Class Split: Fighter (Battle Master) 17 / Bard (College of Swords) 3

Species: Humano Variante + Dote de Origen: Alerta (Alert)

Stats:

* **FUER (STR):** 8 (-1) [[Atributo de descarte]]
* **DES (DEX):** 20 (+5) (15 Base + 1 Racial + 4 ASI) [[Ataques con estoque, iniciativa, salvaciones y CA]]
* **CON:** 14 (+2) (14 Base) [[Puntos de golpe totales y concentración de conjuros]]
* **INT:** 10 (+0) (10 Base) [[Atributo neutral]]
* **SAB (WIS):** 10 (+0) (10 Base) [[Salvaciones y percepción neutral]]
* **CAR (CHA):** 16 (+3) (13 Base + 1 Racial + 1 Dote Fey Touched + 1 Dote Telekinetic) [[Conjuros de bardo, usos de inspiración y habilidades sociales]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Gish de Primera Línea, Controlador Táctico y Líder del Grupo (Face).

## 1. Resource Management & Inventory Rules

*   **Economía de Recursos y Manos:**
    *   **Foco Universal Único:** Su estoque actua como foco de lanzamiento de conjuros gracias al rasgo de la subclase *College of Swords*. Esto le permite sostener un estoque en una mano y un escudo (+2 CA) en la otra sin verse penalizado para lanzar magia de bardo o guerrero.
*   **Gestión de Espacios/Ranuras:**
    *   Cuenta con ranuras de conjuro de nivel 1 (4) y nivel 2 (2) como Bardo de nivel 3. Las utiliza principalmente para soporte rápido y defensas mágicas (*Shield*, *Mirror Image*, *Silvery Barbs*).
    *   Gestiona **6 Dados de Superioridad (d10)** que se recuperan con descanso corto y **3 Dados de Inspiración Bardica (d6)** que se recuperan con descanso largo.

## 2. Action Economy & Combat Loop

*   **Preparación (Pre-Combate):**
    *   Lanzar *Mirror Image* para crear copias ilusorias que absorban impactos antes de entrar en melé.
*   **Action:**
    *   **Turno 1 [Ataque Triple]:** Realizar 3 ataques con su Estoque usando Destreza. Al impactar, puede aplicar en el mismo golpe una Maniobra de Guerrero y un Floreo de Bardo.
    *   **Action Surge:** Ejecutar una segunda acción de ataque completo (3 ataques adicionales) o lanzar un conjuro de control como *Hold Person*.
*   **Bonus Action:**
    *   **Inspiración Bardica:** Dar dados de apoyo a aliados.
    *   **Silvery Barbs:** Forzar fallos de enemigos y otorgar ventaja a aliados de forma reactiva (o como reacción).
*   **Reaction:**
    *   🔵 **Shield:** Aumentar temporalmente la CA en +5 hasta el inicio de su siguiente turno.
    *   🟢 **Riposte (Contraataque):** Si un enemigo falla un ataque contra él, consume un dado de superioridad para realizar un ataque de estoque inmediato como reacción.

## 3. The META Combo: Floreo de Superioridad Acumulada

La fuerza del build radica en combinar en un único impacto un dado de superioridad de *Battle Master* y un dado de floreo de *Swords Bard*:

1. **[Paso 1]:** El guerrero realiza sus 3 ataques con ventaja. Al impactar el primero, activa la maniobra *Trip Attack* (CD 19 de Fuerza) para derribar al enemigo.
2. **[Paso 2]:** En ese mismo impacto, activa *Defensive Flourish* del Bardo de las Espadas, sumando 1d6 al daño y añadiendo el resultado a su Clase de Armadura hasta su siguiente turno.
3. **[Paso 3]:** Con el enemigo derribado en el suelo, realiza los otros 2 ataques de su acción principal con ventaja absoluta cuerpo a cuerpo. Su CA se eleva a niveles absurdos.

🧮 Mathematical Engine (Reglas 2014):

$$\text{Daño Ataque Base} = 3 \times (1d8 (\text{Estoque}) + 5 (\text{DES})) = 3 \times 9.5 = 28.5 \text{ de daño}$$

$$\text{Daño Maniobra (Trip)} = 1d10 = 5.5 \text{ de daño}$$

$$\text{Daño Floreo (Defensive)} = 1d6 = 3.5 \text{ de daño}$$

$$\text{Daño Total del Asalto (Sin Action Surge)} = 37.5 \text{ de daño}$$

$$\text{Clase de Armadura con Floreo Defensivo} = 18 (\text{Placas}) + 2 (\text{Escudo}) + 1d6 (\text{Floreo}) = 23.5 \text{ de CA promedio (pudiendo subir a 28.5 con Shield)}$$

## 4. Bard (College of Swords) Blueprint

El College of Swords aporta floreos de combate versátiles que amplían la capacidad táctica del personaje:

| Floreo de Combate | Efecto de Daño | Efecto Secundario | Notas |
| :---: | :---: | :--- | :--- |
| Defensive Flourish | +1d6 | Sumar resultado a tu CA | Aumenta masivamente la supervivencia en melé. |
| Slashing Flourish | +1d6 | Daño igual a otra criatura a 5 ft | Excelente para limpiar hordas menores. |
| Mobile Flourish | +1d6 | Empujar 5+1d6 ft y teletransportarse | Movilidad y reposicionamiento inmediato. |

## 5. Home Rules

Calcula todas las mecánicas, listas de conjuros, capacidades de combate e inventario bajo las verdades inmutables aprobadas por el DM de esta mesa:
1. **Foco de Espadas:** El estoque cuenta como foco de bardo y guerrero, permitiendo lanzar conjuros reactivos con escudo equipado sin penalizaciones de manos.
2. **Action Surge Mágico:** Permite lanzar un conjuro de acción y realizar la acción de ataque en el mismo turno combinando la destreza marcial del guerrero y el bardo.
