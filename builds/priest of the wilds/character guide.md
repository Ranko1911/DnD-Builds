# Guía de Personaje — Priest of the Wilds

## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20

Class Split: Ranger (Fey Wanderer) 12 / Cleric (War Domain) 8

Species: Humano Variante + Dote de Origen: Francotirador (Sharpshooter)

Stats:

* **FUER (STR):** 10 (+0) [[Relevancia neutral para carga de equipo]]
* **DES (DEX):** 20 (+5) (15 Base + 1 Racial + 4 ASI) [[Ataques con arco largo, iniciativa y CA]]
* **CON:** 14 (+2) (14 Base) [[Puntos de golpe y concentración en conjuros]]
* **INT:** 8 (-1) [[Atributo de descarte]]
* **SAB (WIS):** 16 (+3) (15 Base + 1 Racial) [[CD de conjuros de Clérigo/Ranger, número de ataques War Priest]]
* **CAR (CHA):** 10 (+0) [[Afinidad social menor de Fey Wanderer]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Francotirador de Daño Sostenido (Ranged Nova Striker) y Soporte Táctico del Terreno.

## 1. Resource Management & Inventory Rules

*   **Economía de Recursos y Manos:**
    *   **Foco Universal Único:** Su arco largo consagrado actúa como foco de lanzamiento unificado para sus magias de explorador y de clérigo. No requiere manos libres adicionales para materializar componentes debido a que el foco está integrado en el arma de dos manos.
*   **Gestión de Espacios/Ranuras (Caster Híbrido):**
    *   Ranger 12 (Caster 6) + Cleric 8 (Caster 8) = Nivel 14 de lanzador de conjuros. Cuenta con ranuras hasta **Nivel 7** (pero solo conoce conjuros de nivel 3 de Ranger y de nivel 4 de Clérigo). Bajo la regla de la mesa, puede preparar y lanzar conjuros de mayor nivel de ambas listas siempre que tenga las ranuras correspondientes.

## 2. Action Economy & Combat Loop

*   **Preparación (Pre-Combate):**
    *   Lanzar *Hunter's Mark* sobre el objetivo primordial. Aplicar *Guidance* sobre sí mismo.
*   **Action:**
    *   **Turno 1 [Ataque Doble con Arco Largo]:** Realizar 2 ataques con arco largo. Aplica la dote *Sharpshooter* (-5 a impactar, +10 al daño plano). Si la tirada de ataque es regular, usar *Guided Strike* para forzar el impacto.
    *   **Turnos 2+:** Repetir los ataques. Si hay múltiples objetivos, distribuir el primer impacto para propagar el daño psíquico de *Dreadful Strikes*.
*   **Bonus Action:**
    *   **Ataque de War Priest:** Realizar un tercer ataque con arco largo como Acción Adicional (hasta 3 veces por día equal a SAB).
    *   **Hunter's Mark:** Reubicar la marca cuando muera el objetivo.
*   **Reaction:**
    *   🔵 **Guided Strike:** Sumar +10 a una tirada de ataque propia que falle.
    *   🟢 **Absorb Elements:** Mitigar daño elemental.

## 3. The META Combo: La Flecha del Ojo del Halcón

La sinergia principal radica en mitigar por completo la penalización de la dote *Sharpshooter* usando *Guided Strike* y *Bless*:

1. **[Paso 1]:** El explorador mantiene activo *Bless* (+1d4 a tiradas de ataque) y el estilo de combate de Arquero (+2). Esto prácticamente anula la penalización de -5 de *Sharpshooter*.
2. **[Paso 2]:** Si aun así falla una flecha cargada con +10 de daño por la dote, usa su reacción para invocar *Guided Strike* sumando +10 plano al ataque, garantizando el impacto.
3. **[Paso 3]:** En total, realiza 3 ataques por turno añadiendo *Sharpshooter*, *Dreadful Strikes* y *Hunter's Mark*.

🧮 Mathematical Engine (Reglas 2014):

$$\text{Ataques con Sharpshooter (3 disparos)} = 3 \times (1d8 (\text{Arco}) + 5 (\text{DES}) + 10 (\text{Sharpshooter}) + 1d6 (\text{Hunter's Mark})) = 3 \times 23 = 69 \text{ de daño medio}$$

$$\text{Daño Psíquico Extra (Dreadful Strikes)} = 1d4 = 2.5 \text{ de daño}$$

$$\text{Daño Total del Turno} = 71.5 \text{ de daño a 600 pies de distancia, ignorando cobertura de tres cuartos}$$

## 4. Cleric (War Domain) Blueprint

El War Domain otorga ataques adicionales e impactos garantizados:

| Habilidad Divina | CD/Usos | Efecto | Notas |
| :---: | :---: | :--- | :--- |
| War Priest | 3/día | Ataque con arma como Acción Adicional | Permite realizar 3 ataques por turno a nivel 6. |
| Guided Strike | 1/descanso | +10 a una tirada de ataque propia | Reacción al fallar, asegura el disparo crítico. |
| Divine Strike | 1/turno | +1d8 de daño al impactar con arma | Añade daño radiante constante. |

## 5. Home Rules

Calcula todas las mecánicas, listas de conjuros, capacidades de combate e inventario bajo las verdades inmutables aprobadas por el DM de esta mesa:
1. **Arco Canalizador:** El arco largo consagrado sirve como foco de clérigo y explorador unificado sin requerir manos libres adicionales.
2. **Progresión de Lanzador Unificada:** Las ranuras totales de nivel 14 permiten lanzar conjuros preparados de nivel alto de ambas clases según la progresión combinada.
