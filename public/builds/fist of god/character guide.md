# Guía de Personaje — Fist of God

## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20

Class Split: Monk (Way of Mercy) 12 / Cleric (War Domain) 8

Species: Elfo de la Selva (Wood Elf) + Dote de Origen: Fey Touched

Stats:

* **FUER (STR):** 8 (-1) [[Atributo de descarte]]
* **DES (DEX):** 20 (+5) (15 Base + 2 Racial + 3 ASI) [[Ataques, CA de Monje sin armadura e iniciativa]]
* **CON:** 14 (+2) (14 Base) [[Puntos de golpe totales y concentración de conjuros]]
* **INT:** 10 (+0) (10 Base) [[Atributo neutral]]
* **SAB (WIS):** 20 (+5) (15 Base + 1 Racial + 4 ASI) [[CA de Monje, CD de Ki, CD de conjuros de Clérigo]]
* **CAR (CHA):** 8 (-1) [[Atributo de descarte]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Gish de Primera Línea, Atacante de Daño Radiante/Necrótico, Sanador Táctico y Debilitador (Poisoner).

## 1. Resource Management & Inventory Rules

*   **Economía de Recursos y Manos:**
    *   **Foco Universal Único:** Su canalizador sagrado está tatuado en las palmas de sus manos (o en sus vendajes de combate), sirviendo como foco unificado. Esto le permite combatir con las manos completamente libres para realizar golpes desarmados o empuñar una Espada Larga a dos manos (*Versatile*, 1d10 de daño base) como arma dedicada de Monje.
*   **Gestión de Espacios/Ranuras (Lanzador Híbrido):**
    *   Como Clérigo de nivel 8, cuenta con ranuras de conjuros hasta **Nivel 4** (4 de nivel 1, 3 de nivel 2, 3 de nivel 3, 2 de nivel 4).
    *   Gestiona **12 Puntos de Ki** por descanso corto y **2 usos de Canalizar Divinidad** por descanso corto.

## 2. Action Economy & Combat Loop

*   **Preparación (Pre-Combate):**
    *   Lanzar *Divine Favor* (Acción Adicional, Nivel 1) para infundir todos sus ataques con daño radiante.
*   **Action:**
    *   **Turno 1 [Ataque Versátil + Veneno]:** Realizar 2 ataques con su espada larga a dos manos. Al impactar, puede gastar 1 punto de Ki para activar la Mano del Perjuicio (*Hand of Harm*), infligiendo daño necrótico adicional e imponiendo la condición de **Envenenado** (desventaja en ataques/chequeos) al enemigo sin tirada de salvación.
    *   **Guided Strike (Canalizar Divinidad):** Si falla un ataque crucial (necesario para aplicar el veneno), usa su reacción para sumar un bono de +10 a la tirada, asegurando el impacto.
*   **Bonus Action:**
    *   **Divine Favor:** Activar en el Turno 1.
    *   **Flurry of Blows (Ráfaga de Golpes):** Realizar 2 ataques desarmados adicionales, cada uno de los cuales sumará el daño radiante de *Divine Favor*.
    *   **Hand of Healing (Mano de la Curación):** Curar a un aliado adyacente gastando Ki (sustituyendo uno de los ataques de la ráfaga de golpes).
*   **Reaction:**
    *   🔵 **Guided Strike:** Sumar +10 a una tirada de ataque propia que haya fallado.
    *   🟢 **Deflect Missiles:** Reducir daño de proyectiles.

## 3. The META Combo: El Toque Divino Envenenador

El combo del "Fist of God" radica en encadenar múltiples golpes infundidos con daño radiante y aplicar un veneno inevitable en el primer golpe exitoso:

1. **[Paso 1]:** El personaje activa *Divine Favor* (Acción Adicional). A partir de ese momento, cada golpe exitoso inflige +1d4 de daño radiante.
2. **[Paso 2]:** Realiza la acción de Ataque (2 golpes de espada larga de 1d10) y sigue con la Ráfaga de Golpes (2 golpes desarmados de 1d8). Son 4 ataques en total.
3. **[Paso 3]:** Al impactar el primero, activa *Hand of Harm* (1 Ki), sumando daño necrótico e imponiendo **Envenenado** sin salvación. Si el ataque hubiera fallado, activa *Guided Strike* (+10 reactivo) para forzar el impacto.

🧮 Mathematical Engine (Reglas 2014):

$$\text{Daño Espada Larga (2 Impactos)} = 2 \times (1d10 (\text{Espada}) + 5 (\text{DES}) + 1d4 (\text{Radiante})) = 2 \times 13 = 26 \text{ de daño medio}$$

$$\text{Daño Desarmado (2 Impactos)} = 2 \times (1d8 (\text{Golpe}) + 5 (\text{DES}) + 1d4 (\text{Radiante})) = 2 \times 12 = 24 \text{ de daño medio}$$

$$\text{Daño Mano del Perjuicio (1/turno)} = 1d8 (\text{Artes Marciales}) + 5 (\text{SAB}) = 9.5 \text{ de daño necrótico}$$

$$\text{Daño Total del Asalto (4 Impactos)} = 59.5 \text{ de daño mixto (Radiante/Necrótico/Físico)}$$

El enemigo queda envenenado (desventaja en ataques) automáticamente durante un asalto completo, protegiendo al Fist of God en primera línea.

## 4. Monk (Way of Mercy) Blueprint

La senda de la Misericordia permite curar y dañar alternativamente usando puntos de Ki:

| Habilidad de Misericordia | Coste de Ki | Daño/Curación | Efecto Adicional | Notas |
| :---: | :---: | :---: | :--- | :--- |
| Hand of Healing | 1 Ki | 1d8 + 5 (SAB) | Cura a un aliado | Puede usarse dentro de la Ráfaga de Golpes. |
| Hand of Harm | 1 Ki | 1d8 + 5 (SAB) | Daño necrótico | Impone estado **Envenenado** sin salvación. |
| Physician's Touch | — | — | Cura ceguera/sordera/parálisis | Aplicado al usar Hand of Healing. |

## 5. Home Rules

Calcula todas las mecánicas, listas de conjuros, capacidades de combate e inventario bajo las verdades inmutables aprobadas por el DM de esta mesa:
1. **Foco unificado corporal:** Sus tatuajes o vendajes consagrados actúan como foco de clérigo y monje, permitiendo canalizar toda su magia sin portar amuletos físicos.
2. **Espada Larga como Arma de Monje:** Permite utilizar la Espada Larga con daño versátil de 1d10 como arma de clase para el monje sin perder la velocidad ni las artes marciales.
