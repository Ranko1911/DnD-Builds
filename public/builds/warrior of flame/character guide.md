# Guía de Personaje — Warrior of Flame

## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20

Class Split: Sorcerer (Draconic Bloodline - Gold) 14 / Paladin (Devotion) 6

Species: Humano Variante + Dote de Origen: Lanzador de Conjuros de Guerra (War Caster)

Stats:

* **FUER (STR):** 15 (+2) (15 Base) [[Requisito de Armadura de Placas y multiclase de Paladín]]
* **DES (DEX):** 8 (-1) [[Atributo de descarte]]
* **CON:** 14 (+2) (14 Base) [[Puntos de golpe totales y concentración de conjuros]]
* **INT:** 8 (-1) [[Atributo de descarte]]
* **SAB (WIS):** 10 (+0) [[Atributo neutral]]
* **CAR (CHA):** 20 (+5) (15 Base + 1 Racial + 4 ASI) [[Aura de Protección, conjuros de Hechicero, daño elemental de Fuego]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Tanque de Apoyo (Aura Tank), Atacante Nova de Fuego/Fuerza, Volador Táctico.

## 1. Resource Management & Inventory Rules

*   **Economía de Recursos y Manos:**
    *   **Foco Sagrado/Arcano Único:** Su escudo lleva grabado el blasón sagrado de su linaje de dragón dorado, sirviendo como canalizador unificado. Al poseer la dote *War Caster*, puede realizar componentes somáticos e interactuar con magia incluso portando su Espada Larga y Escudo de forma simultánea.
*   **Gestión de Espacios (Caster Avanzado):**
    *   Paladin 6 (Caster 3) + Sorcerer 14 (Caster 14) = Nivel 17 de lanzador de conjuros (Full Caster slots!).
    *   Gestiona **14 Puntos de Sorcería** por descanso largo (usados para Metamagia).

## 2. Action Economy & Combat Loop

*   **Preparación (Pre-Combate):**
    *   Lanzar *Shield of Faith* (+2 CA) o *Haste* (Acción, duplicar velocidad, +2 CA y un ataque extra). Invocar sus alas de dragón (*Dragon Wings*).
*   **Action:**
    *   **Turno 1 [Ataque Sagrado Nova]:** Realizar la acción de ataque (2 golpes con espada larga). Al impactar, puede gastar ranuras de conjuro de Hechicero (hasta nivel 5) para activar el Castigo Divino (*Divine Smite*), añadiendo hasta +5d8 de daño radiante por impacto.
*   **Bonus Action:**
    *   **Hechizo Acelerado (Quickened Spell):** Lanzar el truco *Green-Flame Blade* como Acción Adicional (cuesta 2 Puntos de Sorcería). Esto le permite ejecutar un tercer ataque de espada en el turno que inflige daño de arma + daño de fuego de hechicero dracónico, y además permite smitear de nuevo.
*   **Reaction:**
    *   🔵 **Shield:** Reacción mágica de Hechicero (+5 CA hasta su siguiente turno).
    *   🟢 **Green-Flame Blade (War Caster):** Si un enemigo se retira de su rango sin destrabarse, lanza *Green-Flame Blade* como ataque de oportunidad en lugar de un golpe ordinario.

## 3. The META Combo: La Espada de la Llama Dorada

La sinergia principal del Warrior of Flame radica en añadir el modificador de Carisma (+5) a los ataques de *Green-Flame Blade* mediante el rasgo dracónico de nivel 6 (*Elemental Affinity*) y acelerar este ataque como Acción Adicional:

1. **[Paso 1]:** El personaje ataca dos veces con su acción (Espada Larga + Castigo Divino).
2. **[Paso 2]:** Usa *Quickened Metamagic* para lanzar *Green-Flame Blade* como Acción Adicional.
3. **[Paso 3]:** Al impactar con la espada infundida de fuego, añade el daño del arma + 3d8 de fuego + 5 (CAR) por Afinidad Elemental. El fuego salta a un enemigo cercano infligiendo 3d8 + 5 (CAR) + 5 (Afinidad dracónica). Puede aplicar un tercer Castigo Divino en este golpe.

🧮 Mathematical Engine (Reglas 2014):

$$\text{Daño de Ataque Base (2 golpes)} = 2 \times (1d8 (\text{Espada}) + 2 (\text{FUER}) + 5d8 (\text{Smite Lvl 4})) = 2 \times 29 = 58 \text{ de daño medio}$$

$$\text{Daño GFB Acelerada (1 golpe)} = 1d8 (\text{Espada}) + 2 (\text{FUER}) + 3d8 (\text{Fuego GFB}) + 5 (\text{Afinidad}) + 5d8 (\text{Smite Lvl 4}) = 9d8 + 7 = 47.5 \text{ de daño}$$

$$\text{Daño Salto de Llama (Enemigo Secundario)} = 3d8 + 5 (\text{CAR}) + 5 (\text{Afinidad}) = 3d8 + 10 = 23.5 \text{ de daño}$$

$$\text{Daño Total del Turno Nova} = 105.5 \text{ de daño ofensivo al objetivo principal y 23.5 al secundario en un asalto}$$

Su CA es de 20 (Placas + Escudo), elevable a 22 con *Shield of Faith* y a 27 reactivamente con el conjuro *Shield*. Todos sus aliados a 10 pies añaden +5 a sus salvaciones gracias a su Aura de Protección.

## 4. Draconic Bloodline & Aura of Protection Blueprint

La combinación aporta vuelo ilimitado, defensa mágica aliada y daño elemental potenciado:

| Habilidad de Hechicero / Paladín | CD / Rango | Efecto Clave | Notas |
| :---: | :---: | :--- | :--- |
| Aura of Protection | 10 ft | +5 a todas las salvaciones | Protege pasivamente a todo el grupo en primera línea. |
| Dragon Wings | Libre | Vuelo a velocidad de caminar | Permite sobrevolar campos y evitar enemigos cuerpo a cuerpo. |
| Elemental Affinity | Pasivo | +5 a cualquier daño de fuego | Incrementa el daño plano de tu Green-Flame Blade. |

## 5. Home Rules

Calcula todas las mecánicas, listas de conjuros, capacidades de combate e inventario bajo las verdades inmutables aprobadas por el DM de esta mesa:
1. **Escudo Canalizador Sagrado/Arcano:** Su escudo sirve como foco mágico universal de ambas clases.
2. **Espacios Combinados Full Caster:** La progresión mixta de nivel 17 otorga espacios de nivel 9 utilizables para Castigos Divinos y conjuros de Hechicero.
