# Guía de Personaje — The BONK

## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20

Class Split: Barbarian (Path of the Beast) 3 / Monk (Way of the Long Death) 17

Species: Tortle (Tortuga)

Stats:

* **FUER (STR):** 20 (+5) (15 Base + 2 Racial + 1 Dote Crusher + 2 ASI) [[Ataques, daño, atletismo / grappling]]
* **DES (DEX):** 13 (+1) (13 Base) [[Requisito de multiclase de Monje, salvaciones]]
* **CON:** 16 (+3) (16 Base) [[Puntos de golpe totales y supervivencia]]
* **INT:** 8 (-1) (8 Base) [[Atributo de descarte]]
* **SAB (WIS):** 14 (+2) (13 Base + 1 Racial) [[Requisito de multiclase de Monje y salvaciones]]
* **CAR (CHA):** 8 (-1) (8 Base) [[Atributo de descarte]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Tanque de Primera Línea, Daño de Ráfaga Física, Controlador por Agarre (Grappler).

## 1. Resource Management & Inventory Rules

*   **Economía de Recursos y Manos:**
    *   **Foco Universal Único:** No aplica directamente como lanzador de conjuros, pero sus propias garras naturales y golpes desarmados no requieren empuñar armas tradicionales, liberando sus manos completamente para realizar agarres (*Grappling*) y empujones (*Shoving*).
    *   **Armadura Tortle:** Su caparazón natural le otorga una CA fija de 17. Esto permite ignorar la Destreza y Sabiduría para la CA convencional de Monje, permitiendo enfocar todos los recursos en Fuerza.
*   **Gestión de Espacios/Ranuras:**
    *   No tiene ranuras de conjuros. En su lugar, gestiona sus puntos de **Ki (17 por descanso corto)** y sus usos de **Furia (3 por descanso largo)**.

## 2. Action Economy & Combat Loop

*   **Preparación (Pre-Combate):**
    *   No requiere hechizos. Entrar en Furia (*Rage*) en el turno 1.
*   **Action:**
    *   **Turno 1 [Furia Activa]:** Declarar Ataque Temerario (*Reckless Attack*). Realizar la acción de ataque con las Garras de la Bestia (*Form of the Beast - Claws*):
        *   Ataque 1: Garra de la bestia (Fuerza).
        *   Ataque 2 (Garra Extra): Un ataque de garra adicional como parte de la misma acción.
        *   Ataque 3 (Extra Attack de Monje): Tercer ataque de garra.
    *   **Turnos 2+:** Repetir los 3 ataques con garras con ventaja. Opcionalmente, usar un ataque para derribar al enemigo y otro para agarrarlo (con ventaja por Furia).
*   **Bonus Action:**
    *   **Rage:** Activar Furia en el Turno 1.
    *   **Flurry of Blows (Ráfaga de Golpes):** Realizar 2 ataques desarmados adicionales usando Fuerza.
    *   **Patient Defense / Step of the Wind:** Opciones defensivas de Monje consumiendo 1 Ki.
*   **Reaction:**
    *   🔵 **Deflect Missiles:** Reducir daño de proyectiles físicos e intentar devolverlos.
    *   🟢 **Mastery of Death:** Si cae a 0 PG, consume 1 punto de Ki para quedarse en 1 PG de forma reactiva (sin límite de veces por turno, mientras tenga Ki).

## 3. The META Combo: La Licuadora de Garras Temerarias

El combo de "The BONK" radica en la sinergia de la Furia, Reckless Attack y las Garras de la Bestia con los ataques adicionales de Monje:

1. **[Paso 1]:** El personaje entra en Furia, ganando resistencia a daños físicos y un bono de +2 a todo ataque de Fuerza.
2. **[Paso 2]:** Activa *Reckless Attack* para tener ventaja en todos sus ataques cuerpo a cuerpo de Fuerza durante el turno.
3. **[Paso 3]:** Ejecuta la acción de Ataque con Garras, logrando 3 ataques por el rasgo de garras y Extra Attack. Luego usa la acción adicional para *Flurry of Blows* (2 ataques). Son 5 ataques por turno, todos con ventaja y añadiendo Fuerza + Rage flat damage.

🧮 Mathematical Engine (Reglas 2014):

$$\text{Daño Garras} = 3 \times (1d6 + 5 (\text{FUER}) + 2 (\text{Furia})) = 3 \times 10.5 = 31.5 \text{ de daño medio}$$

$$\text{Daño Golpes Desarmados} = 2 \times (1d10 + 5 (\text{FUER}) + 2 (\text{Furia})) = 2 \times 12.5 = 25 \text{ de daño medio}$$

$$\text{Daño Total Medio (5 Impactos)} = 56.5 \text{ de daño físico}$$

Además, gracias a *Touch of Death* de Long Death Monk, ganarás 19 PG temporales cada vez que derribes a una criatura, los cuales se duplican virtualmente en efectividad debido a la resistencia de Furia.

## 4. Monk (Long Death) Blueprint

La combinación con Monje de la Muerte Larga proporciona una supervivencia absurda en primera línea:

| Habilidad de Monje | Coste de Ki | Usos | Efecto | Notas |
| :---: | :---: | :--- | :---: | :--- |
| Touch of Death | 0 | Pasivo | +19 Temp HP al matar | Sinergiza con la resistencia de Furia. |
| Hour of Reap | 0 | Acción | Asustar en área de 30 ft | Salvación de Sabiduría (CD 16) o asustado. |
| Mastery of Death | 1 | Reacción | Evitar caer a 0 PG (quedarse en 1) | Increíble tanque de aguante puro. |

## 5. Home Rules

Calcula todas las mecánicas, listas de conjuros, capacidades de combate e inventario bajo las verdades inmutables aprobadas por el DM de esta mesa:
1. **Garras como Armas de Monje:** Las garras naturales de la Bestia Barbárica se consideran armas sencillas cuerpo a cuerpo y, por ende, califican como Armas de Monje para desencadenar la Ráfaga de Golpes y el dado de Artes Marciales (escalado a 1d10 por nivel 17).
2. **Ignorar Armadura unificada:** El caparazón Tortle de CA 17 no interfiere con los rasgos de movimiento o defensa sin armadura del Monje o Bárbaro.
