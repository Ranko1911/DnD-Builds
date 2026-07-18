# SYSTEM_PROMPT: Character Build Overview

## General Data

System Standard: D&D 5th Edition (2024 / 5.5e Update)

Character Level: 20

Class Split: Sorcerer (Wild Magic) 1 / Rogue (Swashbuckler) 19

Species: Humano + Alert (Feat de Nivel 1)

Stats:

* **FUER (STR):** 8 (-1) [[Volcado, estadística de descarte]]
* **DES (DEX):** 17 (+3) (15 base + 2 racial) [[Estadística principal para ataques, iniciativa y CA]]
* **CON:** 14 (+2) [[Suficiente para HP y mantener concentración]]
* **INT:** 10 (0) [[Habilidades de investigación básica]]
* **SAB (WIS):** 12 (+1) [[Percepción y tiradas de salvación]]
* **CAR (CHA):** 16 (+3) (15 base + 1 racial) [[Utilizado para habilidades de interacción social (Face) y Panache de Swashbuckler]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Striker de Ráfaga Móvil / Face del grupo / Experto en Habilidades (Skill Monkey)

## 1. Resource Management & Inventory Rules

*   **Economía de Recursos y Manos:**
    *   **Armas:** Daga en mano principal (para lanzar/combate cuerpo a cuerpo) y un Estoque en la mano principal (Finesse). Al usar la regla de Foco Universal de la mesa, un único anillo o amuleto que sirva de foco canaliza todos los conjuros sin requerir manos libres.
    *   **Innate Sorcery:** Recurso clave del Sorcerer (2024). Concede 1 minuto de ventaja en tiradas de ataque con conjuros de Sorcerer (incluyendo cantrips de espada). Se recupera en Descanso Largo.
*   **Gestión de Espacios/Ranuras:**
    *   Con Sorcerer 1, el personaje dispone de 2 espacios de conjuro de nivel 1. Se guardan estrictamente para lanzar *Shield* o *Absorb Elements* en situaciones de emergencia.
    *   Al no ser Swashbuckler una clase lanzadora, el nivel unificado de lanzador es 1.

## 2. Action Economy & Combat Loop

*   **Preparación (Pre-Combate):**
    *   Si se sospecha de un combate inminente, utilizar la dote **Alert** para asegurar actuar primero en el orden de iniciativa e intercambiarla con un aliado si es necesario.
*   **Action:**
    *   **Turno 1 [Innate Sorcery activa]:** Acción: Lanzar **Booming Blade** usando el Estoque (Daño del estoque + Sneak Attack garantizado gracias a la ventaja + daño de trueno del cantrip).
    *   **Turnos 2+ [Enemigo aislado]:** Acción: Lanzar **Booming Blade**. Gracias a *Fancy Footwork* (Swashbuckler), tras realizar un ataque cuerpo a cuerpo contra una criatura, esta no puede realizar ataques de oportunidad contra ti el resto del turno. Te retiras sin gastar acción de Disengage.
*   **Bonus Action:**
    *   **Turno 1:** 🔵 **Innate Sorcery** (activa ventaja automática durante 1 minuto en cantrips de Sorcerer).
    *   **Turnos 2+:** **Cunning Action** (Dash para reposicionarse a gran velocidad o Hide si hay cobertura disponible).
*   **Reaction:**
    *   🔵 **Shield:** +5 CA reactivo contra un impacto directo.
    *   🟢 **Absorb Elements:** Reducción de daño elemental recibido y daño extra en el siguiente ataque.
    *   🟢 **Uncanny Dodge:** Reducir a la mitad el daño de un ataque que te impacte (si no tienes slots para Shield o es un golpe crítico físico).

## 3. The META Combo: Innate Booming Murder

El núcleo de la build aprovecha que los cantrips de espada como **Booming Blade** e **True Strike** de 2024 requieren una tirada de ataque como parte de la acción de lanzar un conjuro. Al ser conjuros de Sorcerer, la habilidad **Innate Sorcery** del Sorcerer nivel 1 les otorga **Ventaja automática** en la tirada de ataque. Esta ventaja permanente durante 1 minuto activa el **Sneak Attack** del Rogue de forma incondicional cada turno.

1. **Activar Innate Sorcery (BA):** Concedes ventaja a todos tus conjuros de Sorcerer durante 1 minuto.
2. **Lanzar Booming Blade (Acción):** Realizas un ataque con tu estoque con ventaja. Al impactar, aplicas el daño del Estoque + el daño de Booming Blade + **Sneak Attack** (por tener ventaja).
3. **Fancy Footwork (Pasiva Swashbuckler):** Te retiras a una distancia segura sin provocar ataques de oportunidad del objetivo. El enemigo se ve obligado a moverse si quiere atacarte, activando el daño secundario de Booming Blade.

🧮 Mathematical Engine (D&D 5e 2024 — Nivel 11, CA enemigo 17):

**Estadísticas de ataque a nivel 11:**
* Modificador de ataque: +9 (DEX 20 tras ASIs, PB +4) con ventaja (gracias a Innate Sorcery).
* Daño de Estoque: $1\text{d}8 + 5$ perforante (promedio: 9.5).
* Daño de Booming Blade (Nivel 11): $2\text{d}8$ trueno adicional (promedio: 9) + $3\text{d}8$ trueno si se mueve (promedio: 13.5).
* Sneak Attack (Rogue 10): $5\text{d}6$ daño de precisión (promedio: 17.5).

$$\text{P(Impactar sin ventaja)} = \frac{21 - (17 - 9)}{20} = 0.65$$
$$\text{P(Impactar con ventaja)} = 1 - (1 - 0.65)^2 = 1 - 0.1225 = 0.8775$$
$$\text{DPR promedio sostenido (con movimiento enemigo)} = 0.8775 \times (9.5 + 9 + 17.5 + 13.5) = 0.8775 \times 49.5 = 43.43 \text{ daño/turno}$$

## 4. Rogue (Swashbuckler) / Sorcerer Blueprint

El Swashbuckler aporta la capacidad de actuar como el "Face" definitivo gracias a la dependencia compartida de Charisma con el Sorcerer y habilidades de manipulación en combate.

| Nivel | Clase | Habilidad Clave | Impacto en Combate | Notas |
| :---: | :--- | :--- | :---: | :--- |
| 1 | Sorcerer | Innate Sorcery, Cantrips | 🔵 Extraordinario | Otorga ventaja incondicional y defensa con Shield. |
| 4 | Rogue 3 | Fancy Footwork, Rakish Audacity | 🟢 Alto | Permite retirarse gratis tras atacar y Sneak Attack adicional sin ventaja. |
| 10 | Rogue 9 | Panache | 🟢 Alto | Provoca enemigos (tanque por evasión) o seduce fuera de combate. |
| 18 | Rogue 17 | Master Duelist | 🟢 Alto | Permite repetir un ataque fallido por descanso corto/largo. |

## 5. Home Rules

1. **Foco Universal Único:** Un único foco de cualquiera de las clases del personaje canaliza e inicia todos sus conjuros. Ignora las restricciones de manos libres y componentes somáticos/materiales (sin coste en oro específico) si el personaje viste o empuña dicho foco.
2. **Progresión Full Caster Integrada:** Nivel de lanzador unificado de 1.
