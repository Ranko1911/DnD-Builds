# SYSTEM_PROMPT: Character Build Overview

 ## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20

Class Split: Fighter (Eldritch Knight) 20

Species: Variant Human + War Caster (Feat de Nivel 1)

Stats: STR 10, DEX 16, CON 16, INT 14, WIS 12, CHA 8

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Frontline Gish Striker / Battlefield Controller (Daño mono-objetivo sostenido + control con Sentinel)

 1. Resource Management & Inventory Rules

*   **Economía de Recursos y Manos:**
    *   **Shadow Blade** se invoca como Acción Adicional en combate (turno 1) y se sostiene con Concentración. Como arma de Finesse, beneficia de DEX para ataque y daño. El build no usa escudo para maximizar los dados de daño de Shadow Blade a 2 manos (2d8 base psíquico).
    *   **Foco Arcano (Crystal Orb o equivalente):** La mesa aplica la Regla de Mesa de Foco Universal; cualquier foco canaliza e inicia todos los conjuros sin restricción de manos libres.
*   **Gestión de Espacios/Ranuras:**
    *   El Eldritch Knight tiene progresión de lanzador de 1/3 (máximo slots de nivel 4 a nivel 20). Gestiona los slots como recurso premium: Shadow Blade upcast en slot de nivel 3+ para 3d8 psíquico (nivel 7+), o nivel 4 para 4d8.
    *   **Acción Adicional (Recuperada):** El Fighter recupera un uso de Action Surge con Descanso Corto. Prioridad táctica: guardar para el turno de burst o para reposicionarse vía Arcane Charge.

 2. Action Economy & Combat Loop

*   **Action:**
    *   **Turno 1:** Lanzar *Shadow Blade* como Acción Adicional (BA), luego Atacar con Action → *Booming Blade* (cantrip + ataque) para aplicar el daño extra de trueno si el enemigo se mueve. Usar War Magic para hacer 1 ataque adicional con BA tras el cantrip.
    *   **Turno 2 (Nivel 5+):** Action: Extra Attack → 2 ataques con Shadow Blade. Si disponible, reemplazar 1 ataque por Booming Blade para aplicar el daño de trueno + War Magic.
    *   **Turnos 2+ (Ruta estándar):** 3 ataques con Shadow Blade (nivel 11) o 4 ataques (nivel 20). Usar Booming Blade en la 1ª parte de War Magic para máximo daño si el enemigo puede moverse.
*   **Bonus Action:**
    *   **Turno 1:** Lanzar *Shadow Blade* (2nd level spell slot, concentración).
    *   **Turnos 2+:** War Magic → 1 ataque adicional tras lanzar Booming Blade con la Acción.
    *   Alternativa: *Misty Step* si hay necesidad de reposicionamiento urgente (gasta un slot adicional).
*   **Reaction:**
    *   🔵 **Shield:** +5 CA reactivo ante un ataque que impacte. Gasta un slot de nivel 1.
    *   🔵 **Sentinel (Oportunidad de Ataque):** Al activar, detiene el movimiento del enemigo (velocidad 0). Permite lanzar **Booming Blade** como ataque de oportunidad (gracias a War Caster), combinando el daño de Shadow Blade + BB en la reacción.
    *   🟢 **Absorb Elements:** Reducir daño elemental y devolver el tipo de daño en el siguiente ataque cuerpo a cuerpo.

 3. The META Combo: The Shadow Sentinel Loop

El núcleo del build es mantener **Shadow Blade** en concentración y usar **Sentinel + War Caster** para convertir la Reacción en un ataque devastador de oportunidad con *Booming Blade*:

1. **Shadow Blade activa:** 3d8 psíquico (slot nivel 3) con ventaja en luz tenue u oscuridad.
2. **Booming Blade como OA (Reacción):** Si el enemigo intenta moverse o atacar a un aliado adyacente, Sentinel permite un Ataque de Oportunidad; War Caster permite lanzar Booming Blade como ese ataque → 3d8 psíquico + daño de trueno condicional + Thunder adicional si el enemigo se mueve.
3. **Mirror Image como backup:** 3 ilusiones que absorben ataques y liberan al personaje de depender solo de Shield para la defensa, conservando los slots.

La build es extraordinariamente **bien redondeada**: no es la más explosiva (no hay nova Warlock), pero combina daño psíquico sostenido, control de posición, movilidad reactiva y una defensa sólida.

🧮 Mathematical Engine (D&D 5e 2014 — Nivel 11, CA enemigo 16):

**Estadísticas de ataque a nivel 11:**
- Modificador de ataque: +8 (DEX +3 tras ASI, PB +4)
- Shadow Blade (3d8 psíquico, slot nivel 3): 13.5 daño promedio × ataque
- Booming Blade (nivel 11): +3d8 trueno adicional al impactar = +13.5

**DPR sostenido (3 ataques estándar, sin Booming Blade):**

$$\text{P(impactar CA 16)} = \frac{21 - (16 - 8)}{20} = \frac{13}{20} = 0.65$$

$$\text{DPR}_{\text{sostenido}} = 3 \times 0.65 \times 13.5 = 26.33 \text{ daño/turno}$$

**DPR turno con Booming Blade (War Magic — 1 BB + 2 ataques):**

$$\text{DPR}_{\text{burst}} = 0.65 \times (13.5 + 13.5) + 2 \times 0.65 \times 13.5 = 17.55 + 17.55 = 35.1$$

**OA con Booming Blade (Sentinel + War Caster — Reacción):**

$$\text{DPR}_{\text{OA}} = 0.65 \times (13.5 + 13.5) = 17.55 \text{ daño extra en reacción}$$

> **Nota:** Shadow Blade concede ventaja en penumbra/oscuridad → P(impactar) sube a ≈0.87, disparando el DPR total a ~47 daño/turno en condiciones óptimas de luz baja.

 4. Fighter (Eldritch Knight) Blueprint

**Selección de Conjuros Clave (Escuela Abjuración + Evocación/Ilusión):**

- *Cantrips:* **Booming Blade** (principal), **Blade Ward** (situacional)
- *Nivel 1:* **Shield** 🔵, **Absorb Elements** 🔵, **Find Familiar** 🟢 (Búho → acción de Ayuda para ventaja)
- *Nivel 2:* **Shadow Blade** 🔵 (conjuro de concentración principal), **Mirror Image** 🟢, **Misty Step** 🟢
- *Nivel 3:* **Counterspell** 🟢 (situacional), **Haste** 🟡 (concentración conflictiva con Shadow Blade)
- *Nivel 4:* **Greater Invisibility** 🟢 (ventaja en todos los ataques, pero interrumpe Shadow Blade si se usa en su lugar)

**Habilidades clave de la clase:**
- **War Magic (Nv. 7):** Permite 1 ataque adicional (BA) tras lanzar un cantrip con la Acción. Motor principal del combat loop.
- **Eldritch Strike (Nv. 10):** Los ataques del personaje imponen Desventaja en las TS contra sus conjuros — potencia Counterspell y cualquier conjuro de salvación.
- **Arcane Charge (Nv. 15):** Al activar Action Surge, puede teletransportarse hasta 30 pies antes o después de los ataques. Movilidad táctica de alta utilidad.
- **Action Surge:** Duplica el número de ataques en 1 turno: 6 ataques a nivel 11 (3+3), o 8 ataques a nivel 20. Turno de burst letal.

 5. Home Rules

[Calcula todas las mecánicas, listas de conjuros, capacidades de combate e inventario bajo las verdades inmutables aprobadas por el DM de esta mesa:]
1. **Foco Universal Único:** Un único foco de cualquiera de las clases del personaje canaliza e inicia todos sus conjuros. Ignora las restricciones de manos libres y componentes somáticos/materiales (sin coste de oro) si el personaje empuña o viste dicho foco.
2. **Progresión Full Caster Integrada (Regla de Oro):** El personaje prepara conjuros utilizando su nivel de lanzador total unificado. En este build mono-clase, el EK opera como lanzador de nivel 6.67 (1/3 de 20) pero las reglas de mesa permiten acceder a conjuros de nivel superior si tiene los slots disponibles.
3. *[Añadir regla adicional si aplica]*
