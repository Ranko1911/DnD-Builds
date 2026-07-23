# Guía de Personaje — Shadow Tank

## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20

Class Split: Warlock (Hexblade) 17 / Barbarian (Totem Warrior) 3

Species: Semi-orco (Half-Orc) + Dote de Origen: Alerta (Alert)

Stats:

* **FUER (STR):** 13 (+1) (13 Base) [[Requisito multiclase de Bárbaro]]
* **DES (DEX):** 14 (+2) (14 Base) [[Máxima CA con Armadura Media]]
* **CON:** 16 (+3) (15 Base + 1 Racial) [[Puntos de golpe totales y duración de la Furia]]
* **INT:** 8 (-1) [[Atributo de descarte]]
* **SAB (WIS):** 10 (+0) [[Atributo neutral]]
* **CAR (CHA):** 20 (+5) (14 Base + 2 Racial + 4 ASI) [[Ataques con Arma de Pacto, CD de conjuros de Warlock]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Tanque de Espinas de Primera Línea, Atacante de Daño Frío/Fuerza, Crítico Nova.

## 1. Resource Management & Inventory Rules

* **Economía de Recursos y Manos:**
  * **Foco Universal Único:** Su Espadón de Pacto (*Greatsword*) actúa como foco unificado para todos sus conjuros de Warlock. Puede conjurarla de la nada mediante el rasgo *Pact of the Blade*, eliminando la necesidad de portar armas físicas.
* **Gestión de Espacios/Ranuras (Pacto de Magia):**
  * Cuenta con **4 espacios de conjuro de Nivel 5** que se recuperan con un descanso corto.
  * Dispone de un espacio de **Misticismo Arcano** para niveles 6, 7, 8 y 9 (1 uso al día de cada uno).
  * Gestiona **3 usos de Furia** por descanso largo.

## 2. Action Economy & Combat Loop

* **Preparación (Pre-Combate):**
  * Lanzar *Armor of Agathys* usando un espacio de Nivel 5 (concede 25 puntos de golpe temporales por 1 hora sin concentración).
* **Action:**
  * **Turno 1 [Furia Espiritual]:** Realizar la acción de ataque (2 golpes con su espadón de pacto usando Carisma). Si el enemigo es el objetivo de la maldición de Hexblade, añade bono de daño (+6) y rango crítico de 19-20.
  * **Eldritch Smite (Castigo Eldritch):** Al impactar con su espadón, puede gastar un espacio de conjuro de nivel 5 para infligir +6d8 de daño de Fuerza y derribar al enemigo al suelo boca abajo sin tirada de salvación. Esto funciona incluso mientras está furioso, ya que es una habilidad de clase y no un conjuro.
* **Bonus Action:**
  * **Maldición de Hexblade (Hexblade's Curse):** Activar sobre el enemigo más peligroso.
  * **Entrar en Furia (Barbarian Rage):** Activar en el Turno 1 tras haber lanzado *Armor of Agathys*.
* **Reaction:**
  * 🔵 **Resistencia Relámpago (Barbarian Bear Totem):** Mitiga la mitad del daño de todos los tipos de ataque recibidos (excepto psíquico) de forma pasiva mientras dure la furia.

## 3. The META Combo: El Escudo de Espinas Heladas

La sinergia destructiva de este build radica en duplicar la durabilidad del escudo temporal *Armor of Agathys* mediante la Furia del Tótem del Oso:

1. **[Paso 1]:** El Warlock lanza *Armor of Agathys* a nivel 5 antes de combatir. Otorga **25 PG Temporales**. Cualquier criatura que lo golpee cuerpo a cuerpo recibe **25 de daño de frío automático** sin tirada de salvación.
2. **[Paso 2]:** Entra en Furia (Tótem del Oso). La furia reduce a la mitad todo daño físico y elemental entrante. Por lo tanto, para quitarle los 25 PG temporales al Shadow Tank, los enemigos deben infligirle **50 de daño real**.
3. **[Paso 3]:** Durante el tiempo en que los enemigos intentan agotar el escudo de 25 PG temporales, cada golpe cuerpo a cuerpo que reciba el Shadow Tank devuelve 25 de daño de frío plano al atacante.

🧮 Mathematical Engine (Reglas 2014):

$$\text{Daño Devuelto por Impacto Cuerpo a Cuerpo} = 25 \text{ de daño de frío automático}$$

$$\text{Daño Estimado Reflejado (mínimo 3 golpes antes de romper el escudo)} = 3 \times 25 = 75 \text{ de daño de frío}$$

$$\text{Daño de Espadón de Pacto (2 Impactos)} = 2 \times (2d6 (\text{Espadón}) + 5 (\text{CAR}) + 5 (\text{Lifedrinker}) + 6 (\text{Maldición})) = 2 \times 23 = 46 \text{ de daño}$$

$$\text{Daño con Eldritch Smite (Nivel 5)} = 6d8 = 27 \text{ de daño de fuerza plano}$$

$$\text{Daño Total de Ráfaga en un Asalto} = 73 \text{ de daño ofensivo + 25 de daño de frío devuelto por golpe}$$

## 4. Totem Warrior (Bear) Blueprint

La combinación del bárbaro proporciona la máxima mitigación del daño para mantener activo el escudo de frío:

| Rasgo de Furia | Tipo de Resistencia | Beneficio Adicional | Notas |
| :---: | :---: | :--- | :--- |
| Totem Spirit (Bear) | Todos los tipos de daño (excepto Psíquico) | Reduce el daño recibido en un 50% | Duplica el valor numérico de la armadura de Agathys. |
| Danger Sense | Ventaja en salvaciones de DES | Evita trampas y fuegos de área | Excelente apoyo defensivo pasivo. |

## 5. Home Rules

Calcula todas las mecánicas, listas de conjuros, capacidades de combate e inventario bajo las verdades inmutables aprobadas por el DM de esta mesa:

1. **Espadón Canalizador:** El espadón de pacto actúa como foco de conjuros de warlock unificado.
2. **Habilidades Raging Invocation:** Se permite el uso de habilidades activas no-mágicas de Warlock (como Eldritch Smite y Lifedrinker) mientras se está bajo los efectos de la Furia de Bárbaro.
