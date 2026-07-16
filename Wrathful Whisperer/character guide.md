# General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20 (Total)

Class Split: Paladin 2 / Bard (College of Swords) 18

Species: Dragonborn (Copper o Ravenite) [Se elige por temática y rasgos raciales. El Dragonborn de Cobre se alinea perfectamente con la devoción a Hlal, deidad dracónica de la diversión e ingenio]

Stats: STR 16, DEX 10, CON 14 (16 con cinturón), INT 8, WIS 10, CHA 20

* **STR:** 16 (15 base + 1 racial) [Permite vestir Armadura de Placas sin penalización]
* **DEX:** 10
* **CON:** 14 (sube a 16 con el *Belt of Dwarvenkind*) [Aumenta tus puntos de golpe y mejora tus salvaciones para mantener la concentración]
* **INT:** 8
* **WIS:** 10
* **CHA:** 20 (15 base + 2 racial + 2 ASI a nivel 10 + 2 ASI a nivel 14) [Tanto tu estadística primaria de lanzamiento como tu recurso para Blade Flourishes]

Actual Item List: ./actual inventory list.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Roadmap de Progresión: ./roadmap.md

Combat Role: Frontline Striker / Skirmisher / Crowd Controller / Party Face (Tanque de evasión por CA alta / Daño melee ráfaga mediante *Divine Smite* y floreos tácticos)

 1. Resource Management & Inventory Rules

* **Economía de Recursos y Manos:**
  * Vistes **Plate Armor** y llevas un **Escudo** junto con tu Rapier para una CA base sólida. La característica clave de College of Swords te permite usar cualquier arma cuerpo a cuerpo en la que seas competente (como tu Rapier) como un foco de lanzamiento para tus conjuros de Bardo, solucionando la economía de manos libres mientras sostienes escudo y arma.
* **Gestión de Espacios/Ranuras:**
  * Eres un lanzador de conjuros multiclase equivalente a nivel 19 (Paladin 2 cuenta como nivel 1 caster, Bard 18 cuenta como nivel 18 caster). Esto te proporciona espacios de conjuro de nivel alto hasta nivel 9, que puedes usar para conjuros legendarios como *Wish* o *True Polymorph*, o canalizar en tus golpes críticos de *Divine Smite*.

 1. Action Economy & Combat Loop

* **Action:**
  * **Turno 1:** Lanzar un conjuro de control de área poderoso (*Hypnotic Pattern*, *Fear*, o *Forcecage*) o invocar tu presencia duplicada con *Simulacrum*.
  * **Turnos 2+:** Acción de ataque (*Extra Attack*) aplicando **Blade Flourish** (generalmente *Defensive Flourish* para aumentar tu CA drásticamente, o *Mobile Flourish* para reposicionarte y empujar enemigos) combinándolo con *Divine Smite* de nivel alto para descargar ráfagas masivas. O bien, dirigir la **Tempestad de Plata** (Animate Objects a nivel 9).
* **Bonus Action:**
  * Dar órdenes a tus objetos animados (*Animate Objects*) o activar habilidades como *Healing Word* o *Find Greater Steed*.
  * **Sinergia con Scimitar of Speed:** Si portas este objeto, puedes realizar un ataque cuerpo a cuerpo (y aplicar *Divine Smite*) como Acción Adicional sin condiciones. Esto te permite atacar incluso en el Turno 1 tras usar tu Acción principal para lanzar un conjuro de control, o realizar un tercer ataque en turnos posteriores.
* **Reaction:**
  * Lanzar *Counterspell* (gracias a tus Magical Secrets) para interrumpir conjuros enemigos cruciales de forma reactiva.

 1. The META Combo: Divine Smite + Blade Flourish (Slashing Smite)

La combinación de *Divine Smite* de Paladín (daño radiante plano) con los *Blade Flourishes* de Swords Bard (daño extra del dado de floreo que escala hasta $1d12$ a nivel 15 de Bardo) te permite descargar un daño masivo en un solo golpe.

El floreo defensivo (*Defensive Flourish*) no solo añade daño, sino que añade el resultado del dado a tu CA. Esto, combinado con una Armadura de Placas base ($18$) y un Escudo ($+2$), eleva tu CA de forma pasiva a $20$, y con un buen dado de floreo ($+1d12$), puede superar los **30 de CA** sin requerir conjuros defensivos adicionales, haciéndote virtualmente intocable en primera línea.

🧮 Mathematical Engine (A Nivel 20):

**Un solo ataque con todas las capacidades activas (Ataque Nova):**

* **Daño Físico (Rapier de una mano):** $1d8 + 3 \text{ (STR)} = 7.5$ de daño medio.
* **Divine Smite (Slot de nivel 4):** $5d8 = 22.5$ de daño radiante.
* **Blade Flourish (Swords Bard 18):** $1d12 = 6.5$ de daño.
* **Fórmula del Daño de un Solo Golpe:**
    $$\text{Daño Total Medio} = \underbrace{(1d8 + 3)}_{7.5} + \underbrace{5d8}_{22.5} + \underbrace{1d12}_{6.5} = 36.5 \text{ de daño.}$$
* Realizando tu segundo ataque de *Extra Attack* aplicando otro *Divine Smite* de nivel 4 ($5d8$), tu daño en un solo turno alcanza fácilmente los **66.5 de daño monobjetivo medio**, mientras tu CA aumenta en $+1d12$ (media de $+6.5$).

### 3.1 El Combo de la "Tempestad de Plata" (Animate Objects 9.º + Crusader's Mantle)

Este combo maximiza el número de ataques por asalto utilizando tus recursos de nivel 9 y la coordinación con tu duplicado de *Simulacrum*.

* **Preparación:** Lanzas *Animate Objects* usando tu espacio de nivel 9, lo que te permite animar **18 monedas de plata** (de tamaño *Tiny*). Al ser de plata, evaden la resistencia al daño físico no mágico que tienen la mayoría de monstruos de VD alto.
* **Sinergia del Simulacro:** Como ambos conjuros requieren concentración, tu duplicado de *Simulacrum* (o tú) mantiene la concentración en **Crusader's Mantle** (hechizo de Paladín de nivel 3 obtenido vía *Magical Secrets*). Este conjuro añade $+1d4$ de daño radiante a todos los ataques con armas de criaturas amistosas dentro de un aura de 30 pies.
* **Efecto:** Cada uno de los 18 ataques de slam de tus monedas de plata cuenta como ataque con arma y se beneficia del daño extra de *Crusader's Mantle*.

🧮 Análisis Matemático de la Tempestad de Plata (Daño por Turno):

* **Daño de Slam (18 monedas):** $18 \times (1d4 + 4 \text{ bludgeoning}) = 18 \times 6.5 = 117$ de daño medio.
* **Bono de Crusader's Mantle:** $18 \times (1d4 \text{ radiant}) = 18 \times 2.5 = 45$ de daño medio.
* **Daño Máximo Teórico (100% de impactos):** $117 \text{ bludgeoning} + 45 \text{ radiant} = 162$ de daño medio por asalto en tu Acción Adicional.
* **Daño Promedio Real (55% de probabilidad de impacto contra CA 18):**
    $$\text{Daño Medio Estimado} = 162 \times 0.55 = 89.1 \text{ de daño por asalto.}$$
* **Con Ventaja (Foresight o Faerie Fire, ~80% de impacto):**
    $$\text{Daño con Ventaja} = 162 \times 0.7975 = 129.2 \text{ de daño por asalto.}$$
* **Con Parálisis (Hold Person/Monster, impactos críticos automáticos):**
  * Cada golpe crítico duplica los dados a $2d4$ (slam) y $2d4$ (mantle):
  * Daño por impacto crítico = $(2d4 + 4) + 2d4 = 5 + 4 + 5 = 14$ de daño medio.
  * Daño esperado con ventaja por parálisis:
        $$\text{Daño en Parálisis} = 18 \times 14 \times 0.7975 = 201 \text{ de daño medio por asalto.}$$

 1. Bardic & Magical Secrets Blueprint

* **Magical Secrets (Nivel 10 Bard / Nivel 12 Total):**
  * *Counterspell:* Esencial para interrumpir conjuros enemigos clave.
  * *Find Greater Steed:* Para invocar una montura celestial voladora (como un Pegaso o Grifo) que encaje con el sabor y la movilidad del build.
* **Magical Secrets (Nivel 14 Bard / Nivel 16 Total):**
  * *Simulacrum:* Te permite crear un duplicado de ti mismo que comparte tus estadísticas, ranuras y habilidades (incluyendo Smites y Floreos) para duplicar la potencia del grupo.
  * *Crusader's Mantle* (o *Crown of Stars*): *Crusader's Mantle* es vital para activar el combo de la Tempestad de Plata junto a tu simulacro. Si prefieres daño monobjetivo sin concentración externa, *Crown of Stars* es la alternativa.
* **Magical Secrets (Nivel 18 Bard / Nivel 20 Total):**
  * *Wish:* El conjuro más versátil del juego para duplicar cualquier otro conjuro de nivel 8 o inferior de cualquier lista sin coste.
  * *True Polymorph:* Para transformarte a ti mismo, a tu simulacro o a un aliado en un dragón o criatura de VD 20, o convertir objetos en aliados permanentes.

 1. home rules
(Calcula todas las mecánicas bajo las reglas vigentes en tu mesa, priorizando la sintonización unificada de focos si aplica para mantener libre la economía de manos con escudo).
