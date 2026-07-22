# Guía de Personaje — Sneaky Smasher

## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20

Class Split: Rogue (Soulknife) 17 / Barbarian (Totem Warrior) 3

Species: Bugbear + Dote de Origen: Alerta (Alert)

Stats:

* **FUER (STR):** 20 (+5) (15 Base + 2 Racial + 3 ASI) [[Ataques con Fuerza, daño de Furia, atletismo y agarre]]
* **DES (DEX):** 14 (+2) (14 Base) [[CA máxima con armadura media y salvaciones]]
* **CON:** 14 (+2) (13 Base + 1 Racial) [[Puntos de golpe y aguante en Furia]]
* **INT:** 10 (+0) [[Atributo neutral]]
* **SAB (WIS):** 12 (+1) [[Percepción pasiva]]
* **CAR (CHA):** 8 (-1) [[Atributo de descarte]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Luchador/Agarrador Cuerpo a Cuerpo (Grappler God), Atacante Nova Psíquico, Tanque Evasivo.

## 1. Resource Management & Inventory Rules

* **Economía de Recursos y Manos:**
  * **Foco Psiónico Único:** Sus armas principales son Hojas Psiónicas (*Psychic Blades*) convocadas mentalmente cuando tiene las manos vacías. Esto le permite combatir con las manos 100% libres, facilitando agarrar a dos enemigos simultáneamente (*Grappling*) y seguir atacándoles con su mente.
* **Gestión de Espacios/Dice (Psiónica):**
  * Gestiona **12 Dados de Energía Psiónica** (escalan con el PB del personaje, d12 a nivel 20) por descanso largo.
  * Gestiona **3 usos de Furia** por descanso largo.

## 2. Action Economy & Combat Loop

* **Preparación (Pre-Combate):**
  * Activar telepatía silenciosa con su grupo (*Psi-Bolstered Knack* / *Whispered Conspiracy*).
* **Action:**
  * **Turno 1 [Ataque Temerario]:** Realizar la acción de ataque. Invoca la hoja psiónica (1d6). Activa Ataque Temerario (*Reckless Attack*): ataca con ventaja usando Fuerza.
  * **Ataque Furtivo (Sneak Attack):** Al atacar con ventaja (garantizada por Reckless Attack), se activa el Ataque Furtivo (+9d6) usando Fuerza. Esto es legal bajo las reglas debido a que las Hojas Psiónicas poseen la propiedad *Finesse* (sutil), la cual permite elegir Fuerza para impactar.
  * **Agarre Olimpo (Expertise Athletics):** Si lo prefiere, sustituye un ataque por un intento de Agarre. Su modificador de Atletismo es de +17 con ventaja (concedida por la Furia), haciendo casi imposible que un enemigo escape.
* **Bonus Action:**
  * **Entrar en Furia (Barbarian Rage):** Activar en el Turno 1.
  * **Hoja Psiónica Secundaria:** Realizar un ataque secundario desarmado como Acción Adicional (1d4 psíquico + Fuerza + Daño de Furia).
  * **Acción Astuta (Cunning Action):** Correr (*Dash*) o Destrabarse (*Disengage*) si no está en furia.
* **Reaction:**
  * 🔵 **Esquiva Asombrosa (Uncanny Dodge):** Reducir a la mitad el daño recibido de un impacto enemigo que pueda ver. Combina con la resistencia de Furia, reduciendo el daño real al **25%**.

## 3. The META Combo: El Demoledor Temerario Silencioso

La sinergia principal del Sneaky Smasher radica en forzar ataques con ventaja constante mediante *Reckless Attack* para activar el Ataque Furtivo de Rogue usando Fuerza:

1. **[Paso 1]:** El personaje entra en combate. Gracias a ser un Bugbear, si ataca antes de que el enemigo actúe, añade **+2d6 de daño extra** en cada golpe.
2. **[Paso 2]:** Declara *Reckless Attack*. Esto le otorga ventaja a sus golpes de Fuerza.
3. **[Paso 3]:** Al atacar con ventaja usando Fuerza y un arma Sutil (hoja psiónica), suma los bonos de Furia (+2) y su Ataque Furtivo (+9d6) de manera garantizada cada turno sin requerir aliados.

🧮 Mathematical Engine (Reglas 2014):

$$\text{Daño Hoja Principal} = 1d6 (\text{Hoja}) + 5 (\text{FUER}) + 2 (\text{Furia}) + 9d6 (\text{Furtivo}) = 10d6 + 7 = 42 \text{ de daño medio}$$

$$\text{Daño Hoja Secundaria} = 1d4 (\text{Hoja}) + 5 (\text{FUER}) + 2 (\text{Furia}) = 1d4 + 7 = 9.5 \text{ de daño medio}$$

$$\text{Bono Bugbear (Apertura - 2 Impactos)} = 2 \times 2d6 = 14 \text{ de daño plano}$$

$$\text{Daño Total de Apertura} = 65.5 \text{ de daño mixto (Psíquico/Físico) con ventaja garantizada}$$

$$\text{Tirada de Agarre} = 1d20 + 5 (\text{FUER}) + 12 (\text{Expertise}) + \text{ventaja (Furia)} = 1d20 + 17 \text{ con ventaja}$$

## 4. Soulknife Rogue & Totem Barbarian Blueprint

La progresión combinada optimiza los dados de psiónica (que escalan por PB) y las resistencias de tótem:

| Rasgo Psiónico / Tótem | Usos / Dados | Efecto Clave | Notas |
| :---: | :---: | :--- | :--- |
| Psi-Bolstered Knack | 12 dados (d12) | Suma d12 a chequeos fallidos | El dado solo se consume si el chequeo tiene éxito. |
| Bear Totem Spirit | Pasivo (Furia) | Resistencia a todo daño (excepto psíquico) | Otorga 50% de mitigación de daño físico y elemental. |
| Psychic Blades | Libre | Invoca hojas sutiles de rango 60 ft | Elimina la dependencia de desenfundar armas. |

## 5. Home Rules

Calcula todas las mecánicas, listas de conjuros, capacidades de combate e inventario bajo las verdades inmutables aprobadas por el DM de esta mesa:

1. **Ataque Sutil con Fuerza:** Se ratifica el uso del modificador de Fuerza para los ataques realizados con armas sutiles (Finesse) para activar la Furia y el Furtivo de forma simultánea.
2. **Dados de Energía por PB:** Los dados psiónicos de Soulknife escalan directamente con el modificador de Competencia total del personaje (+6), mitigando el retraso por los niveles de bárbaro.
