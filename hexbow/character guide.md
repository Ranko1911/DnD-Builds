# SYSTEM_PROMPT: Character Build Overview

 ## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20 (Total)

Class Split: Warlock (Hexblade) 17 / Fighter (Battle Master) 3

Species: Half-Elf (o Elf) [Esencial para obtener la dote *Elven Accuracy*]

Stats: 
*   **FUER (STR):** 8
*   **DES (DEX):** 14 [Suficiente para optimizar la CA de Armadura Media]
*   **CON:** 16 (15 base + 1 racial)
*   **INT:** 8
*   **SAB (WIS):** 10
*   **CAR (CHA):** 20 (15 base + 2 racial + 1 Elven Accuracy + 2 ASI) [Tu estadística primaria de ataque, daño y salvaciones arcanas]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Combat Role: Ranged Nova Striker / Battlefield Sniper (Ametralladora de ballesta de mano con ventaja triple, maniobras de precisión para asegurar los impactos de *Sharpshooter* y descargas masivas de *Eldritch Smite*).

 1. Resource Management & Inventory Rules

*   **Economía de Manos y Munición:**
    *   Utilizas una **Ballesta de Mano (Hand Crossbow)** como tu Arma del Pacto. Gracias a la dote **Crossbow Expert**, ignoras la propiedad de *carga (loading)* de la ballesta, permitiendo realizar múltiples ataques por turno.
    *   **CRÍTICO:** Aunque no tengas la propiedad de carga, la ballesta conserva la propiedad de *munición (ammunition)*, lo que significa que **necesitas una mano libre** para cargar cada virote. Por lo tanto, **no puedes equipar un escudo** físico mientras disparas.
*   **Gestión de Ranuras Pactadas:**
    *   Tus 4 ranuras de Warlock de nivel 5 se regeneran por completo en descansos cortos, permitiéndote smitear de forma agresiva en múltiples combates al día.

 2. Action Economy & Combat Loop

*   **Turno de Configuración (Turno 1):**
    *   **Action:** Lanzar *Shadow of Moil* (o *Darkness*) para obtener ventaja constante (y desventaja para los enemigos al atacarte) sin cegar a tus aliados (con *Shadow of Moil*).
    *   **Bonus Action:** Aplicar *Hexblade's Curse* sobre el enemigo principal.
*   **Turno de Ataque (Turnos 2+):**
    *   **Action:** Acción de ataque (*Extra Attack*). Realizas 2 ataques con tu ballesta de mano usando Carisma.
    *   **Bonus Action:** Realizar un ataque adicional de ballesta de mano gracias a *Crossbow Expert*.
    *   **Action Surge (Fighter 2):** Una vez por descanso corto, realizas una acción de ataque adicional completa (2 ataques más), logrando un total de **5 ataques en un turno**.

 3. The META Combo: The Critical Sniper (Elven Accuracy + Precision Attack + Eldritch Smite)

El build maximiza la precisión mecánica de cada tiro para asegurar impactos continuos con el penalizador de *Sharpshooter*, descargando golpes críticos demoledores:

1.  **Shadow of Moil + Elven Accuracy:** Tienes ventaja en todos tus ataques de Carisma. Con *Elven Accuracy*, tiras **3d20** por cada ataque.
2.  **Hexblade's Curse:** Tus impactos críticos ocurren con un resultado de **19 o 20** (10% base).
3.  **Maneuver: Precision Attack (Battle Master):** Si fallas un ataque debido a la penalización de $-5$ de *Sharpshooter* ($+10$ al daño), gastas un dado de superioridad ($1d8$) y lo sumas a tu tirada de ataque, convirtiendo fallos en impactos seguros.
4.  **Eldritch Smite (Nova de Críticos):** Al realizar 5 ataques con ventaja triple, tu probabilidad de crítico es altísima. Cuando consigues un crítico, aplicas *Eldritch Smite* gastando una ranura de nivel 5 para sumar $+5d8$ de daño de fuerza, que se duplica en el crítico a **10d8 de fuerza** y derriba al objetivo.
    *   *Nota de Optimización:* Utiliza el *Eldritch Smite* en el **último ataque** de tu turno, ya que derribar a un objetivo propenso otorga desventaja a los ataques a distancia posteriores realizados contra él a más de 5 pies.

🧮 Mathematical Engine (A Nivel 20):

*   **Probabilidad de Crítico por Virote:**
    Con 3 dados y rango de crítico de 19-20 (10% de probabilidad base):
    $$\text{Probabilidad de Crítico} = 1 - (0.9)^3 = 1 - 0.729 = 0.271 \text{ o } 27.1\% \text{ por ataque.}$$
*   **Nova de Action Surge (5 Ataques):**
    Disparar 5 tiros con ventaja triple resulta en una probabilidad acumulada de **84.3% de conseguir al menos un impacto crítico** en ese turno para detonar el *Eldritch Smite*.
*   **Daño por Virote (Sharpshooter + Curse + Lifedrinker):**
    $$1d6 + 5 \text{ (CAR)} + 6 \text{ (Curse)} + 5 \text{ (Lifedrinker)} + 10 \text{ (Sharpshooter)} = 1d6 + 26 \text{ de daño.}$$
    *   *Daño Medio por Virote:* $29.5 \text{ de daño.}$
    *   *Daño Medio Nova (5 Impactos planos):* $5 \times 29.5 = 147.5 \text{ de daño.}$
    *   *Eldritch Smite Crítico (Slots de Nivel 5):* $+10d8$ de fuerza (Media: $+45$ de daño).

 4. Fighter & Hexblade Blueprints

*   **Archery Fighting Style (Fighter 1):** $+2$ plano a todas tus tiradas de ataque con armas a distancia. Esto compensa directamente el $-5$ de *Sharpshooter*, reduciendo la penalización real a solo $-3$.
*   **Lifedrinker (Warlock 12):** Suma tu modificador de Carisma ($+5$) como daño necrótico adicional a cada impacto.
*   **Master of Hexes (Warlock 14):** Te permite transferir tu *Hexblade's Curse* de una criatura muerta a otra sin gastar usos.

 5. home rules
(Calcula todas las mecánicas bajo las reglas vigentes en tu mesa, confirmando que la ballesta de mano requiere una mano libre para cargar incluso con la dote Crossbow Expert).
