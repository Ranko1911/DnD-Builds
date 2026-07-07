# SYSTEM_PROMPT: Character Build Overview

 ## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20 (Total)

Class Split: Sorcerer (Clockwork Soul) 18 / Warlock (Hexblade) 2

Species: Half-Elf (o Elf) [Esencial para poder elegir la dote *Elven Accuracy*]

Stats: 
*   **FUER (STR):** 8
*   **DES (DEX):** 14 [Máximo para optimizar la Armadura Media]
*   **CON:** 16 (15 base + 1 racial)
*   **INT:** 8
*   **SAB (WIS):** 10
*   **CAR (CHA):** 20 (15 base + 2 racial + 1 Elven Accuracy + 2 ASI) [Tu estadística primaria de ataque y salvaciones]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Combat Role: Backline Blaster / Battlefield Controller / Probability Manipulator (Ametralladora de *Eldritch Blast* con triple ventaja constante y alta probabilidad de críticos, protegido por barreras Clockwork y control de dados).

 1. Resource Management & Inventory Rules

*   **Magia de Relojería (Clockwork Magic):**
    *   Este rasgo te permite reemplazar los conjuros predeterminados de la subclase por cualquier conjuro de la escuela de **Abjuración** o **Transmutación** de las listas de Sorcerer, Warlock o Wizard. Esto te permite aprender hechizos rotos como *Armor of Agathys* (de Warlock) y *Shield* o *Absorb Elements* (de Wizard).
*   **Equipo y Defensas:**
    *   Vistes **Half-Plate** (Armadura Media) y llevas un **Escudo** gracias al Hexblade, alcanzando un AC base de $15 + 2 \text{ (DEX)} + 2 \text{ (Escudo)} = 19$ (que sube a $24$ con el conjuro *Shield*).
    *   Fusión de ranuras de Warlock de primer nivel a puntos de sorcería en descansos cortos.

 2. Action Economy & Combat Loop

*   **Action:** 
    *   **Turno 1:** Lanzar el conjuro *Darkness* (o *Greater Invisibility*) sobre un objeto que lleves para ganar total ocultación. O activar la habilidad racial *Radiant Soul* si eres Aasimar (pero este build usa Elfo para *Elven Accuracy*).
    *   **Turnos 2+:** Acción de ataque disparando *Eldritch Blast* (4 rayos a nivel 20) con ventaja triple.
*   **Bonus Action:** 
    *   **Quickened Eldritch Blast:** Gasta 2 Puntos de Sorcería para volver a disparar *Eldritch Blast* como acción adicional, disparando un total de **8 rayos por turno**.
    *   **Hexblade's Curse:** Para aumentar el daño en $+6$ por rayo y ampliar el rango de críticos a 19-20.
    *   **Bastion of Law (Sorcerer 6):** Crear un escudo protector que absorbe daño.
*   **Reaction:** 
    *   *Shield* o *Absorb Elements* para defensa.
    *   *Restore Balance* para anular ventaja enemiga o desventaja propia en tiradas importantes.

 3. The META Combo: The Clockwork Minigun (Elven Accuracy + Darkness + Devil's Sight + Trance of Order)

La combinación definitiva para disparar sin fallar y demoler jefes con impactos críticos constantes:

1.  **Darkness + Devil's Sight:** Eres invisible dentro de tu propia nube de oscuridad. Los enemigos tienen desventaja al atacarte y tú tienes **Ventaja** en todos tus ataques.
2.  **Elven Accuracy:** Cuando realizas un ataque con ventaja usando Carisma (como *Eldritch Blast*), tiras **3d20** en lugar de 2d20.
3.  **Hexblade's Curse:** Tus impactos críticos ocurren con un resultado de **19 o 20**.
4.  **Trance of Order (Sorcerer 14):** Durante 1 minuto, cualquier tirada de ataque, salvación o prueba por debajo de 10 es tratada como un **10**.

🧮 Mathematical Engine (A Nivel 20):

*   **Probabilidad de Crítico por Rayo con Elven Accuracy y Hexblade's Curse:**
    Con 3 dados y rango de crítico de 19-20 (10% de probabilidad base):
    $$\text{Probabilidad de Crítico} = 1 - (0.9)^3 = 1 - 0.729 = 0.271 \text{ o } 27.1\% \text{ por rayo.}$$
*   **Ataque Nova (8 Rayos):**
    Disparar 8 rayos con una probabilidad del 27.1% por rayo significa una media de **2.16 impactos críticos por turno**.
*   **Daño por Rayo (Eldritch Blast con Curse):**
    $$1d10 + 5 \text{ (CAR)} + 6 \text{ (Curse)} = 1d10 + 11 \text{ de daño.}$$
    *   *Daño Medio por Rayo:* $16.5 \text{ de daño.}$
    *   *Daño Medio Nova (8 Rayos sin contar Críticos):* $8 \times 16.5 = 132 \text{ de daño plano.}$
*   **Garantía de Impacto con Trance of Order:**
    Bajo *Trance of Order*, tu tirada mínima en el dado es 10. Con tu bonificador de $+11$ a impactar ($+5$ CAR, $+6$ Competencia), tu **tirada mínima es un 21 para impactar**. Prácticamente todos tus rayos impactarán incluso contra objetivos de AC muy alta.

 4. Clockwork Sorcerer Features

*   **Bastion of Law (Nivel 6):** Te permite gastar hasta 5 Puntos de Sorcería para crear un escudo de engranajes mágicos. Al recibir daño, puedes tirar $1d8$ por punto gastado y reducir el daño en el resultado.
*   **Trance of Order (Nivel 14):** La habilidad definitiva de alineamiento mecánico para asegurar ataques y salvaciones.

 5. home rules
(Calcula todas las mecánicas bajo las reglas de tu mesa, manteniendo la sintonización universal de focos para no restringir el uso de escudo físico).
