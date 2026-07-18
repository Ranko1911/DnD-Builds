# General Data

System Standard: D&D 5th Edition (2024 / 5.5e Update)

Character Level: 20

Class Split: Warlock (Celestial) 19 / Fighter 1

Species: Tiefling + Musician (Feat de Nivel 1)

Stats:

- **FUER (STR):** 8 (-1) [[Volcado]]
- **DES (DEX):** 14 (+2) [[Requisito máximo para armadura media (CA)]]
- **CON:** 14 (+2) [[Puntos de golpe y salvaciones de concentración]]
- **INT:** 10 (0) [[Habilidades de conocimiento]]
- **SAB (WIS):** 10 (0) [[Voluntad y percepción básica]]
- **CAR (CHA):** 17 (+3) (15 base + 2 racial) [[Estadística principal para ataques, daño (x3) y conjuros]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Ranged Control Striker / Torreta de Artillería (Daño de ráfaga masivo a distancia + empuje constante)

## 1. Resource Management & Inventory Rules

- **Economía de Recursos y Manos:**
  - **Armas:** Ballesta Pesada (Heavy Crossbow) (1d10 perforante, alcance 100/400).
  - **Foco Universal Único:** La regla de la casa permite utilizar la ballesta pesada como foco arcano o llevar un anillo focal que anula la necesidad de manos libres para conjurar _Shield_ o lanzar _True Strike_.
- **Gestión de Espacios/Ranuras:**
  - Como Warlock, dispones de Pact Slots de nivel 5 (4 slots a nivel 20) que se recargan con Descanso Corto.
  - El nivel de lanzador unificado es 19.

## 2. Action Economy & Combat Loop

- **Preparación (Pre-Combate):**
  - Llamar al familiar (Imp invisible) y ordenarle que use la acción de **Help** (Ayuda) en el primer ataque del turno.
- **Action:**
  - **Turno 1+:** Acción: Lanzar el truco **True Strike** utilizando la Ballesta Pesada. Haces un ataque con ventaja (familiar) a +12 para golpear (+5 CAR, +2 Archery, +5 PB).
- **Bonus Action:**
  - **Turno 1:** **Hex** (para añadir 1d6 daño por impacto y desventaja en TS) o **Celestial Resistance** para otorgar puntos de golpe temporales.
  - **Turnos 2+:** **Healing Light** (Celestial Warlock) para curar a aliados de forma reactiva (no cuenta como lanzar un conjuro, por lo que puedes seguir atacando con True Strike).
- **Reaction:**
  - 🔵 **Shield** (obtenido a través de dotes o multiclase): +5 CA.
  - 🟢 **Hellish Rebuke:** Contraataque ígneo cuando eres dañado.

## 3. The META Combo: Beelzebub's Heavy Bolt

El combo insignia explota la redefinición del truco **True Strike** en 2024, que convierte un ataque de arma en un ataque basado en tu estadística de lanzamiento (CAR) e inflige daño radiante. Bajo la actualización de 2024:

1. **True Strike (CAR para Ataque):** Tu ballesta pesada dispara usando CAR (+5). Daño base: $1\text{d}10 \text{ piercing} + 1\text{d}6 \text{ radiant} + 5 \text{ (Mod CAR)}$.
2. **Agonizing Blast (2024):** Aplicable a _cualquier_ cantrip de Warlock que haga daño. Suma de nuevo tu Mod CAR al daño (+5).
3. **Radiant Soul (Celestial Warlock 6):** Cuando lanzas un conjuro que hace daño radiante (como True Strike), sumas tu Mod CAR al daño (+5).
4. **Archery Fighting Style (+2 a impactar):** Suma +2 a tu tirada de ataque con armas a distancia, compensando cualquier cobertura.
5. **Efecto de Empuje (Repelling Blast):** Al impactar con True Strike (cantrip de Warlock), empujas al enemigo 10 pies hacia atrás.

🧮 Mathematical Engine (D&D 5e 2024 — Nivel 11, CA enemigo 17):

**Estadísticas de ataque a nivel 11 (Celestial 10 / Fighter 1):**

- Modificador de ataque: +11 (+5 CAR, +4 PB, +2 Archery) con Ventaja constante (ayuda del Imp invisible).
- Daño de Ballesta Pesada: $1\text{d}10 + 5$ (CAR base) + $5$ (Agonizing) + $5$ (Radiant Soul) + $2\text{d}6$ (True Strike a nivel 11) = $1\text{d}10 + 2\text{d}6 + 15$ promedio: (5.5 + 7 + 15 = 27.5).
- Adicionalmente, el objetivo es empujado 10 pies (Repelling Blast) y su velocidad se reduce en 10 pies (Lance of Lethargy).

$$\text{P(Impactar con ventaja)} = 1 - (1 - \frac{21 - (17 - 11)}{20})^2 = 1 - (1 - 0.75)^2 = 1 - 0.0625 = 0.9375$$
$$\text{DPR promedio sostenido} = 0.9375 \times 27.5 + 0.0975 \times (\text{Daño crítico extra: } 5.5 + 7) \approx 25.78 + 1.22 = 27 \text{ daño/turno}$$

_(Nota: Este daño se realiza con un solo ataque de cantrip a gran distancia, sin consumir recursos ni ranuras de conjuro, empujando al enemigo e impidiendo que se acerque)._

## 4. Celestial Warlock / Fighter Blueprint

El Celestial Warlock aporta curación y resistencia al grupo, mientras que la dip de Fighter asegura la puntería impecable y la armadura.

| Nivel | Clase      | Habilidad Clave                  | Impacto en Combate | Notas                                                        |
| :---: | :--------- | :------------------------------- | :----------------: | :----------------------------------------------------------- |
|   1   | Fighter    | Archery Style, Heavy Armor       | 🔵 Extraordinario  | Aumenta la CA y da +2 a impactar.                            |
|   3   | Warlock 2  | Agonizing Blast, Repelling Blast |   🔵 Roto (2024)   | Añade CAR por segunda vez al daño y empuja al impactar.      |
|   7   | Warlock 6  | Radiant Soul                     |   🔵 Roto (2024)   | Añade CAR por tercera vez al daño de True Strike.            |
|  12   | Warlock 11 | Pact Slots de nivel 5            |      🟢 Alto       | Tres ranuras de conjuro que se recuperan con descansa corto. |

## 5. Home Rules

1. **Foco Universal Único:** La ballesta pesada actúa como el foco universal de lanzamiento para el Warlock, permitiendo realizar todos los componentes somáticos.
2. **Progresión Full Caster Integrada:** Nivel de lanzador unificado de 19.
