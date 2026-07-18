# General Data

System Standard: D&D 5th Edition (2024 / 5.5e Update)

Character Level: 20

Class Split: Bard (College of Valor) 19 / Warlock 1

Species: Bugbear + Alert (Feat de Nivel 1)

Stats:

- **FUER (STR):** 8 (-1) [[Volcado]]
- **DES (DEX):** 17 (+3) (15 base + 2 racial) [[Estadística principal para ataques con armas de sutileza (Finesse)]]
- **CON:** 14 (+2) [[Para HP y salvaciones de concentración de Conjure Minor Elementals]]
- **INT:** 8 (-1) [[Volcado]]
- **SAB (WIS):** 10 (0) [[Habilidad básica]]
- **CAR (CHA):** 16 (+3) (15 base + 1 racial) [[Estadística de conjuros de bardo/hechicero y daño de Eldritch Blast]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Nova Melee/Ranged Striker (Daño explosivo en primer turno + alcance táctico)

## 1. Resource Management & Inventory Rules

- **Economía de Recursos y Manos:**
  - **Armas:** Dos armas ligeras: un Estoque en la mano principal y un Cimitarra (con propiedad _Nick_) en la mano secundaria.
  - **Foco Universal Único:** Un único lazo o colgante focal que elimina la necesidad de componentes somáticos y materiales libres para tus conjuros de bardo y warlock.
- **Gestión de Espacios/Ranuras:**
  - Como un lanzador de nivel 19, dispones de espacios de conjuro hasta nivel 9.
  - **Conjure Minor Elementals (CME):** El conjuro que define el daño ofensivo. Debe mantenerse en concentración y activarse antes del combate (duración: 10 minutos).

## 2. Action Economy & Combat Loop

- **Preparación (Pre-Combate):**
  - Lanzar **Conjure Minor Elementals** en el espacio más alto disponible (ej. nivel 7 para +5d8 de daño por golpe).
  - Asegurar que tu Imp familiar o el sigilo te den la oportunidad de actuar antes que el enemigo en la iniciativa (potenciado por dote _Alert_).
- **Action:**
  - **Turno 1 (Turno Nova):** Acción: Attack Action (Extra Attack de Valor Bard):
    1. **Primer Ataque:** Un golpe de tu esto que principal con 10 pies de alcance (gracias a _Long-Limbed_ de Bugbear).
    2. **Segundo Ataque (Reemplazado por Cantrip):** Lanzar **Eldritch Blast** (3 rayos a nivel 11, 4 rayos a nivel 17). Al estar a 10 pies del enemigo, no tienes desventaja al disparar un conjuro a distancia.
    3. **Ataque Adicional (Propiedad Nick):** Al realizar un ataque con un arma ligera, puedes atacar con la cimitarra en tu otra mano como parte de la misma acción de ataque.
    - **Total de Impactos:** 1 esto que + 3 rayos de EB + 1 cimitarra = 5 ataques.
- **Bonus Action:**
  - **Turno 1:** Generalmente libre para otorgar Bardic Inspiration o reposicionarte. Si posees la dote Dual Wielder, puedes realizar un ataque adicional con tu arma secundaria, aumentando a 6 ataques totales.
- **Reaction:**
  - 🔵 **Cutting Words** (si cambias de subclase) o **Shield** (si se aprende vía Warlock/dotes): +5 CA reactivo.

## 3. The META Combo: Furry Reach Nova

El combo explota la combinación de la dote de especie de Bugbear (alcance de 10 pies en ataques cuerpo a cuerpo) con la habilidad de Valor Bard de 2024 de sustituir un ataque de tu acción de ataque por un cantrip (_Eldritch Blast_).

1. **Bugbear Long-Limbed (Pasiva):** Tus ataques cuerpo a cuerpo tienen 10 pies de alcance.
2. **Casting a 10 pies:** Te colocas exactamente a 10 pies del objetivo. Atacas con tu esto que y cimitarra cuerpo a cuerpo. Luego disparas _Eldritch Blast_. Dado que el enemigo está a 10 pies (no dentro de 5 pies), las tiradas de Eldritch Blast **no tienen desventaja**.
3. **Surprise Attack (Bugbear):** Si golpeas a una criatura que no ha actuado en el combate, añades +2d6 a cada impacto. Con 5 impactos, sumas +10d6 de daño.
4. **Conjure Minor Elementals (Upcast):** Cada ataque conectado añade daño de CME (ej: 5d8 si se lanza a nivel 7). 5 impactos = +25d8.

🧮 Mathematical Engine (D&D 5e 2024 — Nivel 13, CA enemigo 17):

**Estadísticas a nivel 13 (Bard 12 / Warlock 1) con CME de Nivel 7 (+5d8):**

- Modificador de ataque (Armas): +10 (+5 DEX, +5 PB).
- Modificador de ataque (Eldritch Blast): +8 (+3 CAR, +5 PB) con ventaja (familiar/iniciativa).
- Daño de Estoque: $1\text{d}8 + 5$ (DEX) + $2\text{d}6$ (Surprise) + $5\text{d}8$ (CME) (promedio: 34.5).
- Daño de Cimitarra (Nick): $1\text{d}6$ (sin destreza si no tienes estilo) + $2\text{d}6$ (Surprise) + $5\text{d}8$ (CME) (promedio: 33).
- Daño de Eldritch Blast (3 rayos): $3 \times (1\text{d}10 + 3 \text{ CAR} + 2\text{d}6 \text{ Surprise} + 5\text{d}8 \text{ CME})$ (promedio: $3 \times 38 = 114$).
- **Fórmula Promedio Turno Nova (5 impactos exitosos):**
  $$\text{Daño Total Nova} = 3\text{d}10 + 12\text{d}6 + 25\text{d}8 + 25 = 16.5 + 42 + 112.5 + 25 = 196 \text{ daño medio}$$

$$\text{P(Impactar CA 17 con armas)} = 0.70 \text{ (ventaja } \approx 0.91\text{)}$$
$$\text{P(Impactar CA 17 con EB)} = 0.60 \text{ (ventaja } \approx 0.84\text{)}$$
$$\text{DPR Nova Promedio Ajustado (con ventaja)} \approx 2 \times 0.91 \times 33.75 + 3 \times 0.84 \times 38 \approx 61.42 + 95.76 = 157.18 \text{ daño efectivo}$$

## 4. Valor Bard / Warlock Blueprint

El Valor Bard aporta la armadura y el motor de ataques híbridos a nivel 6, junto con Magical Secrets a nivel 10 para aprender el demoledor conjuro _Conjure Minor Elementals_.

| Nivel | Clase     | Habilidad Clave              | Impacto en Combate | Notas                                                                    |
| :---: | :-------- | :--------------------------- | :----------------: | :----------------------------------------------------------------------- |
|   1   | Warlock 1 | Eldritch Blast, Invocaciones | 🔵 Extraordinario  | Otorga el cantrip ofensivo multirrayo y Agonizing Blast.                 |
|   7   | Bard 6    | Extra Attack (Híbrido)       |   🔵 Roto (2024)   | Permite alternar ataques de armas con Eldritch Blast en la misma acción. |
|  11   | Bard 10   | Magical Secrets (CME)        |   🔵 Roto (2024)   | Prepara Conjure Minor Elementals para disparar el daño por golpe.        |

## 5. Home Rules

1. **Foco Universal Único:** Un único foco de bardo/warlock permite canalizar todos los conjuros sin restricciones de manos.
2. **Progresión Full Caster Integrada:** Nivel de lanzador unificado de 19.
