# General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20

Class Split: Artificer (Alchemist) 14 / Fighter 2 / Wizard (Bladesinger) 2 / Monk 2

Species: Tabaxi

Stats: STR 8, DEX 16 (14 base + 2 racial), CON 12, INT 14, WIS 14, CHA 11 (10 base + 1 racial)

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Speed Gimmick / Ranged Sprinter (El personaje más rápido del multiverso, diseñado para cubrir distancias extremas en un solo asalto mediante la acumulación y multiplicación de bonificadores de movimiento).

## 1. Resource Management & Inventory Rules

* **Economía de Recursos y Manos:**
  * **Sin Armas ni Escudo:** Para beneficiarse de *Unarmored Movement* del Monje, el personaje debe ir sin armadura y sin escudo. Sus manos están libres para activar objetos mágicos, pergaminos, abrir su libro de glifos o usar herramientas.
* **Gestión de Ranuras y Preparaciones:**
  * Al ser un Artificer 14 / Wizard 2 / Monk 2 / Fighter 2, el nivel total de lanzador de conjuros a efectos de ranuras es 9 (mitad de nivel de Artificer redondeado hacia arriba [7] + nivel de Mago [2]). Esto le otorga ranuras hasta nivel 5.
  * Los conjuros clave (*Haste*, *Longstrider*, *Glyph of Warding*) se preparan a través de la lista de Artífice y Mago de forma unificada.

## 2. Action Economy & Combat Loop

* **Action:**
  * **Turno 1 (Preparación):** Lanzar *Haste* sobre sí mismo (o activarlo mediante un Glifo de Guardián). Alternativamente, usar la Acción para realizar un Dash si los efectos ya están activos.
  * **Turno de Sprint Máximo:**
    * Acción regular: Dash.
    * Acción adicional de *Haste*: Dash.
    * Acción Surge (Fighter): Dash.
* **Bonus Action:**
  * Activar *Bladesong* (Mago Bladesinger).
  * Activar *Boots of Speed* (Botas de Velocidad).
  * Usar *Step of the Wind* (Monje) gastando 1 punto de Ki para realizar un Dash como Acción Adicional.
* **Reaction:**
  * Provocar un movimiento reactivo. Por ejemplo, al activarse un *Glyph of Warding* con el conjuro *Dissonant Whispers* dentro de su *Bag of Holding*, el personaje puede usar su reacción para moverse inmediatamente toda su velocidad sin provocar ataques de oportunidad.

## 3. The META Combo: The Relentless Velocity

Este build combina la habilidad racial de los Tabaxi (*Feline Agility*) que duplica la velocidad de movimiento con bonificadores planos de clase (*Unarmored Movement* del Monje, *Bladesong* del Mago, *Swiftness Elixir* del Alquimista), dotes (*Mobile*) y multiplicadores mágicos (*Haste* y *Boots of Speed*).

Para saltarse la restricción de concentración y tiempo de casteo en combate, el build utiliza un libro repleto de *Glyph of Warding* dentro de una *Bag of Holding* (Bolsa de Contención). Dado que la bolsa de contención es un plano dimensional de bolsillo, mover la bolsa no mueve los glifos respecto a su espacio tridimensional local, evitando que se rompan. Al abrir el libro, el personaje activa múltiples glifos que le otorgan *Haste*, *Longstrider* y activan reacciones de movimiento de forma instantánea.

🧮 Mathematical Engine (D&D 5e):

1. **Velocidad de Movimiento Base:**
   * Movimiento base Tabaxi: $30\text{ ft.}$
   * Monk 2 (Unarmored Movement): $+10\text{ ft.}$
   * Bladesinger 2 (Bladesong): $+10\text{ ft.}$
   * Artificer (Alchemist Elixir - Swiftness): $+10\text{ ft.}$
   * Feat (Mobile): $+10\text{ ft.}$
   * Spell (Longstrider): $+10\text{ ft.}$
   * **Total Base:** $80\text{ ft.}$

2. **Multiplicadores Activos:**
   * *Haste* (Velocidad): $\times 2$
   * *Boots of Speed* (Botas de Velocidad): $\times 2$
   * *Feline Agility* (Habilidad racial Tabaxi): $\times 2$
   * **Velocidad de Movimiento Final:** $80 \times 2 \times 2 \times 2 = 640\text{ ft.}$ por movimiento.

3. **Acciones de Movimiento (Sprint):**
   * Movimiento normal: $640\text{ ft.}$
   * Acción regular (Dash): $+640\text{ ft.}$
   * Acción de *Haste* (Dash): $+640\text{ ft.}$
   * Acción Surge (Dash): $+640\text{ ft.}$
   * Bonus Action (Step of the Wind - Dash): $+640\text{ ft.}$
   * Reacción (Dissonant Whispers - Movimiento reactivo): $+640\text{ ft.}$
   * **Distancia Máxima en 1 Asalto (6 segundos):**
   
   $$\text{Distancia Total} = 640 \times 6 = 3840\text{ ft. } (\approx 1170 \text{ metros})$$

Esto equivale a una velocidad de **436 mph (702 km/h)**, convirtiendo al personaje en un proyectil viviente.

## 4. Alchemist Artificer Blueprint

* **Infusiones de Artífice Clave (Nivel 14):**
  * **Replicate Magic Item (Boots of Speed):** Otorga el multiplicador de velocidad del build.
  * **Replicate Magic Item (Bag of Holding):** Indispensable para la estrategia del libro de glifos.
  * **Replicate Magic Item (Ring of Free Action):** Para ignorar terreno difícil y evitar ser paralizado.
* **Elixires Experimentales:**
  * Utilizar todas las ranuras de nivel bajo al inicio del día para crear elixires de *Swiftness* (+10 ft. de velocidad).

## 5. Home Rules
Este build está calculado bajo las siguientes reglas de la mesa:
1. **Planos de Bolsillo y Movimiento:** El movimiento de una *Bag of Holding* no se considera movimiento físico para los efectos del hechizo *Glyph of Warding* depositado en un objeto en su interior.
2. **Multiclase Sin Restricción de Stat Principal:** Se permite multiclasear cumpliendo estrictamente con los mínimos de 13 en las puntuaciones requeridas (DEX 13, INT 13, WIS 13).
3. **Reacciones de Movimiento:** Cualquier efecto que permita al personaje moverse usando su reacción se beneficia de todos los multiplicadores de velocidad activos en ese instante.
