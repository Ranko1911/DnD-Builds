# SYSTEM_PROMPT: Character Build Overview

## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20 (Total)

Class Split: Barbarian (Zealot) 6 / Warlock (Fiend) 14

Species: Custom Lineage (o Humano Variante) [Para obtener la dote *Polearm Master* o *Great Weapon Master* a nivel 1]

Stats:

* **FUER (STR):** 20 (15 base + 2 racial + 1 dote + 2 ASI) [Tu estadística primaria de ataque y daño]
* **DES (DEX):** 14 [Suficiente para optimizar la CA de Armadura Media]
* **CON:** 14 [Tu reserva de vida base, que se duplica en efectividad por Furia]
* **INT:** 8
* **SAB (WIS):** 8
* **CAR (CHA):** 14 (13 base + 1 dote) [CD mínima para el multiclaseo de Brujo y escalado de rasgos]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Combat Role: Frontline Thorns Tank / Heavy Physical Striker / Battlefield Grappler (Castiga a los enemigos cuerpo a cuerpo mediante el daño reflejado de *Armor of Agathys* mientras reduce el daño físico a la mitad por Furia, apoyado por el daño adicional del Zealot e impactos brutales con *Great Weapon Master* y *Eldritch Smite*).

 1. Resource Management & Inventory Rules

* **Economía de Espacios / Castigos en Furia:**
  * No puedes lanzar conjuros ni mantener concentración mientras estás en **Furia (Rage)**. Sin embargo, los conjuros que lances ANTES de entrar en Furia y que no requieran concentración (como *Armor of Agathys* o *Mirror Image*) permanecen activos y funcionales durante la Furia.
  * La habilidad **Eldritch Smite** (Castigo Eldritch) no es un conjuro sino una habilidad de canalización de ranuras, por lo que **sí se puede usar mientras estás en Furia**. Te permite gastar ranuras de Warlock de nivel 5 para infligir $+5d8$ de daño de fuerza plano y derribar enemigos.
* **Equipo y Defensas:**
  * Vistes **Half-Plate** (Armadura Media) sin escudo para poder empuñar un arma pesada de dos manos (Glaive o Halberd), alcanzando un AC base de $15 + 2 \text{ (DEX)} = 17$.

 1. Action Economy & Combat Loop

* **Preparación (Pre-Combate):**
  * Lanzar *Armor of Agathys* (utilizando tu ranura de nivel 5 de Warlock para obtener 25 Temp HP).
* **Action:**
  * **Turno 1:** Si no hay *Armor of Agathys* activo, lanzarlo. Si ya está activo, realizar la acción de ataque (*Extra Attack*) de forma **Reckless** (Ataque Temerario) para ganar ventaja en todas tus tiradas de ataque y facilitar los críticos y el uso de *Great Weapon Master*.
* **Bonus Action:**
  * **Entrar en Furia (Rage):** En el Turno 1 para ganar resistencia a daños físicos.
  * **Ataque Adicional de Polearm Master:** En los turnos subsiguientes, realiza un ataque adicional con el extremo opuesto del arma ($1d4 + \text{Fuerza} + \text{Daño de Furia}$).
* **Reaction:**
  * **Ataque de Oportunidad de Polearm Master:** Cuando un enemigo entre en tu alcance (10 pies si usas Glaive/Halberd), realizas un ataque de oportunidad automático.

 1. The META Combo: The Thorns from Hell (Armor of Agathys + Rage + Dark One's Blessing)

La sinergia principal del build multiplica el valor de tus puntos de vida temporales y castiga de forma brutal e inevitable a cualquiera que intente golpearte cuerpo a cuerpo:

1. **Armor of Agathys (Nivel 5):** Te otorga 25 HP temporales. Mientras tengas aunque sea 1 de estos HP temporales activo, cualquier enemigo que te golpee con un ataque cuerpo a cuerpo sufre **25 de daño de frío plano** (sin salvación, sin límite de activaciones por ronda).
2. **Furia (Rage):** Te otorga resistencia al daño físico (cortante, perforante y contundente). Esto significa que cualquier daño físico que recibas se reduce a la mitad.
3. **Vida Temporal Efectiva:** Debido a la resistencia, tu escudo de 25 HP temporales requiere **50 de daño físico** para ser destruido.
4. **Dark One's Blessing (Fiend 1):** Cuando reduces a una criatura a 0 HP, ganas $14 \text{ (Nivel)} + 2 \text{ (CHA)} = 16$ HP temporales. Aunque esto no reactive el daño de frío de *Armor of Agathys*, refresca tu colchón de vida temporal en mitad de la melé sin gastar recursos.

🧮 Mathematical Engine (A Nivel 20):

* **Matemática de Daño Reflejado (Thorns):**
    Si un enemigo te golpea por 8 de daño físico, la Furia lo reduce a 4. Tus HP temporales bajan de 25 a 21. El enemigo sufre **25 de daño de frío**.
    Si te golpean 4 veces por esa cantidad, tus HP temporales siguen activos (bajan a 9) y los atacantes han sufrido un total de **100 de daño de frío plano** sin que hayas tenido que realizar una sola acción en tu turno.
* **Daño por Turno (Ataques en Furia):**
  * *Primer Impacto (Zealot Divine Fury):* $1d10 + 5 \text{ (STR)} + 2 \text{ (Rage)} + 1d6 + 3 \text{ (Zealot)} + 10 \text{ (GWM)} = 1d10 + 1d6 + 20$ (Medio: $29 \text{ daño}$).
  * *Segundo Impacto:* $1d10 + 5 \text{ (STR)} + 2 \text{ (Rage)} + 10 \text{ (GWM)} = 1d10 + 17$ (Medio: $22.5 \text{ daño}$).
  * *Ataque de Acción Adicional (PAM):* $1d4 + 5 \text{ (STR)} + 2 \text{ (Rage)} + 10 \text{ (GWM)} = 1d4 + 17$ (Medio: $19.5 \text{ daño}$).
  * *Daño Medio Total sin Críticos:* $29 + 22.5 + 19.5 = 71 \text{ de daño por turno.}$
  * *Eldritch Smite Nova:* Puedes añadir $+5d8$ de daño de fuerza ($22.5$ de daño medio) a un impacto y derribar al objetivo propenso automáticamente.

 1. Zealot and Fiend Subclass Features

* **Warrior of the Gods (Barbarian 3):** Eres un heraldo del infierno. Si mueres, cualquier conjuro para resucitarte (como *Revivify*) no requiere componentes materiales (ahorras los diamantes de 300 po al clérigo de tu grupo).
* **Fanatical Focus (Barbarian 6):** Rerroll de una salvación fallida por furia.
* **Dark One's Own Luck (Warlock 6):** Añade $1d10$ a una salvación o prueba de característica por descanso corto.
* **Hurl Through Hell (Warlock 14):** En un impacto con tu arma, destierras al enemigo al plano del infierno hasta el final de tu siguiente turno, infligiéndole **10d10 de daño psíquico** al regresar.

 1. home rules
(Calcula todas las mecánicas bajo las reglas vigentes en tu mesa, permitiendo el uso de Eldritch Smite durante la Furia ya que es una característica de clase y no una acción de lanzamiento de conjuros).
