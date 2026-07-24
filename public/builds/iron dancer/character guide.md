# Guía de Personaje — Iron Dancer

## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20

Class Split: Wizard (Bladesinger) 18 / Artificer 2

Species: Linaje Personalizado + Dote de Origen: Lanzador de Conjuros de Guerra (War Caster)

Stats:

- **FUER (STR):** 8 (-1) [[Atributo de descarte]]
- **DES (DEX):** 20 (+5) (15 Base + 2 Racial + 3 ASI) [[Ataques físicos con estoque, iniciativa y CA]]
- **CON:** 14 (+2) (14 Base) [[Puntos de golpe totales y concentración en Furia arcanos]]
- **INT:** 20 (+5) (15 Base + 5 ASI) [[CA de Bladesong, salvaciones de CON, daño de Song of Victory y CD]]
- **SAB (WIS):** 10 (+0) [[Atributo neutral]]
- **CAR (CHA):** 8 (-1) [[Atributo de descarte]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Tanque Evasivo de Primera Línea, Duelista Psíquico/Radiante, Concentración Absoluta, Ángel Exterminador Aéreo.

## 1. Resource Management & Inventory Rules

- **Economía de Recursos y Manos:**
  - **Foco Universal Único:** Su estoque de combate actúa como foco unificado para todos sus conjuros de Mago y Artífice.
  - **Maestría de Conjuros (Spell Mastery):** Al nivel 18 de Mago, elige el conjuro _Shield_ (nivel 1). Esto le permite lanzar _Shield_ a voluntad como reacción **sin consumir espacios de conjuro**, otorgándole un incremento plano y permanente de +5 a la CA casi todos los turnos.
- **Gestión de Espacios/Ranuras (Caster Avanzado):**
  - Artificer 2 (Caster 1) + Wizard 18 (Caster 18) = Nivel 19 de lanzador de conjuros. Cuenta con ranuras hasta de **Nivel 9** (incluyendo el conjuro _Shapechange_).

## 2. Action Economy & Combat Loop

- **Preparación (Pre-Combate):**
  - Lanzar _Mage Armor_ (CA 13 + DES). Iniciar _Bladesong_ (Acción Adicional).
  - Lanzar _Shapechange_ (Nivel 9) para transformarse en un **Planetar** (CR 16), manteniendo todos sus rasgos de clase de Bladesinger activos.
- **Action:**
  - **Turno 1 [El Baile del Ángel]:** Realiza la acción de ataque del Bladesinger (2 ataques, uno sustituible por truco):
  - **Ataque 1:** Tajo de estoque que inflige 1d8 + 5 (DES) + 5 (INT - _Song of Victory_) + 5d8 (Radiante natural de Planetar) = 6d8 + 10 de daño.
  - **Ataque 2 (Cantrip):** Lanza _Green-Flame Blade_ con su estoque. Inflige 1d8 + 5 (DES) + 5 (INT) + 5d8 (Radiante) + 3d8 (Fuego GFB) + 5 (INT GFB) = 9d8 + 15 de daño. Las llamas saltan a un enemigo secundario adyacente infligiendo 3d8 + 10 de daño de fuego.
- **Bonus Action:**
  - **Bladesong:** Activar en el Turno 1. Suma +5 (INT) a la CA y +5 (INT) a salvaciones de concentración.
- **Reaction:**
  - 🔵 **Shield (Spell Mastery):** Sumar +5 a la CA de forma gratuita hasta el inicio de su siguiente turno.
  - 🟢 **Song of Defense:** Si un enemigo logra impactar su altísima CA, consume ranuras de conjuro bajas para reducir el daño plano recibido.

## 3. The META Combo: La Transmutación del Ángel Exterminador

La sinergia destructiva final de este build radica en usar _Shapechange_ a nivel 9 para transformarse en un Planetar mientras mantiene las dotes y rasgos defensivos de Bladesinger:

1. **[Paso 1]:** Se transforma en Planetar. Su CA base natural pasa a ser de 19.
2. **[Paso 2]:** Activa _Bladesong_. Su CA se convierte en:
   $$\text{CA de Bladesong (Planetar)} = 19 (\text{Natural}) + 5 (\text{INT}) = 24 \text{ CA}$$
   Si lanza el conjuro _Shield_ (gratis vía Maestría de Conjuros) asciende a **29 CA**.
3. **[Paso 3]:** Su velocidad de vuelo como Planetar (120 ft) se incrementa por Bladesong (+10 ft) y la dote _Mobile_ (+10 ft), alcanzando un **vuelo de 140 pies**. No provoca ataques de oportunidad de los enemigos que ataque.
4. **[Paso 4]:** Goza de Resistencia Mágica (ventaja en salvaciones contra magia) y Visión Verdadera a 120 pies. Su concentración es indestructible gracias al bono de +13 y el zapping protector de la túnica _Mind Sharpener_.

🧮 Mathematical Engine (Nivel 20 con Ascendant Dragon's Wrath Rapier + Planetar Shapechange):

$$\text{Daño Ataque 1 (Estoque)} = 1\text{d}8 (\text{Estoque}) + 5 (\text{DES}) + 5 (\text{Song of Victory}) + 5\text{d}8 (\text{Planetar Radiante}) + 3\text{d}6 (\text{Dragon's Wrath}) + 3 (\text{Magia}) = 6\text{d}8 + 3\text{d}6 + 13 = \mathbf{50.5 \text{ daño medio}}$$

$$\text{Daño Ataque 2 (GFB)} = 1\text{d}8 + 5 (\text{DES}) + 5 (\text{Song of Victory}) + 5\text{d}8 (\text{Planetar}) + 3\text{d}8 (\text{GFB}) + 3\text{d}6 (\text{Dragon's Wrath}) + 5 (\text{INT GFB}) + 3 (\text{Magia}) = 9\text{d}8 + 3\text{d}6 + 18 = \mathbf{69.0 \text{ daño medio}}$$

$$\text{Daño Salto de Llama (2.º Objetivo)} = 3\text{d}8 + 10 = \mathbf{23.5 \text{ daño de fuego}}$$

$$\text{Daño Total de Ráfaga Aérea} = 50.5 + 69.0 = \mathbf{119.5 \text{ daño plano al objetivo principal (más 23.5 al secundario) sin consumir ranuras de conjuro}}$$

## 4. Bladesinger & Artificer Blueprint

El inicio como Artificer concede salvaciones de Constitución nativas sin retrasar la progresión de espacios de conjuro finales:

|   Habilidad / Rasgo    |       CD / Usos       | Efecto Clave                              | Notas                                                                |
| :--------------------: | :-------------------: | :---------------------------------------- | :------------------------------------------------------------------- |
| Spell Mastery (Shield) | A voluntad (Reacción) | +5 a la CA gratis sin gastar espacios     | Te convierte en un tanque defensivo casi intocable en primera línea. |
|    Song of Victory     |  Pasivo (Bladesong)   | +5 (INT) a todo daño con armas            | Incrementa enormemente tu DPR en cuerpo a cuerpo.                    |
|     Mind Sharpener     |         4/día         | Éxito automático en concentración fallida | Evita perder la forma de Planetar ante golpes fortuitos masivos.     |

## 5. Home Rules

Calcula todas las mecánicas, listas de conjuros, capacidades de combate e inventario bajo las verdades inmutables aprobadas por el DM de esta mesa:

1. **Estoques como Foco Mágico:** Se ratifica el estoque de acero como canalizador universal de ambas clases.
2. **Mantenimiento de Rasgos en Transformación:** El Bladesinger mantiene activo su Bladesong, dotes (_Mobile_, _War Caster_) y rasgos (_Song of Victory_) al usar _Shapechange_.

---

## 6. Análisis del Archivero — Planetar vs. Marilith para Shapechange

### 🔵 PLANETAR (CR 16) — _Forma Óptima del Build_

| Parámetro              | Valor                                                  | Evaluación |
| :--------------------- | :----------------------------------------------------- | :--------: |
| **CA base**            | 19 (armadura natural)                                  |     🔵     |
| **Velocidad de vuelo** | 120 ft (+10 Bladesong +10 Mobile = **140 ft**)         |     🔵     |
| **Resistencia Mágica** | Ventaja en todas las ST contra magia                   |     🔵     |
| **Daño extra en arma** | 5d8 radiante en **cada** ataque cuerpo a cuerpo        |     🟢     |
| **True Sight**         | 120 ft                                                 |     🟢     |
| **CA final con combo** | 19 + 5 (INT Bladesong) + 5 (Shield gratis) = **29 CA** |     🔵     |
| **DPR Turno Base**     | ~92.5 sin consumir espacios de conjuro                 |     🔵     |

### 🟡 MARILITH (CR 16) — _Candidata Descartada_

| Parámetro                   | Valor                                                                         | Evaluación |
| :-------------------------- | :---------------------------------------------------------------------------- | :--------: |
| **CA base**                 | 18 (armadura natural)                                                         |     🟡     |
| **Velocidad**               | 40 ft en tierra, **SIN VUELO**                                                |     🔴     |
| **Resistencia Mágica**      | ✅ Sí                                                                         |     🔵     |
| **7 ataques (Multiattack)** | No se usan — el loop de ataque sigue siendo del Bladesinger (2 ataques + GFB) |     🔴     |
| **Daño extra en arma**      | Ninguno equivalente al 5d8 Radiante del Planetar                              |     🔴     |
| **CA final con combo**      | 18 + 5 (INT) + 5 (Shield) = **28 CA**                                         |     🟡     |

### ⚖️ Veredicto

**El Planetar gana en todos los vectores que importan.**

Los 7 ataques de la Marilith son un **espejismo mecánico**: Shapechange otorga los rasgos pasivos del monstruo, pero el loop de ataque del Bladesinger opera sobre sus acciones de clase, no sobre la Multiattack de la criatura. El Planetar aporta **5d8 radiante pasivos que sí se suman** a cada golpe.

La ausencia de vuelo en la Marilith inutiliza por completo el bucle aéreo de 140 pies que es el núcleo del build: atacar, alejarse sin provocar ataques de oportunidad (Mobile), y mantenerse fuera de alcance cuerpo a cuerpo. En tierra, el Iron Dancer pierde su ventaja táctica definitoria.

### 🧭 Si se usa Shapechange de 2014 (RAW)

Si se aplica el Shapechange de 2014 de forma estricta, la comparación cambia de forma importante:

1. **La Marilith sube mucho de valor:** en esa lectura, sí puedes aprovechar su Multiattack completa, por lo que deja de ser solo una comparación teórica y pasa a ser una opción ofensiva real.
2. **El Planetar sigue siendo la forma más consistente:** conserva mejor la identidad del build porque sigue ofreciendo CA alta, vuelo, resistencia mágica y daño radiante pasivo, todo lo cual encaja mejor con el concepto de tanque evasivo y duelista aéreo.
3. **Se pierde parte del núcleo del Iron Dancer:** si no se mantienen Bladesong, Song of Victory, Mobile y War Caster en la transformación, el personaje ya no funciona como el mismo loop de combate de la guía original.
4. **La diferencia se reduce, pero no desaparece:** la Marilith se vuelve más competitive en combate cerrado y en estilo de juego agresivo, mientras que el Planetar sigue siendo superior para un concepto de control de espacio, movilidad y supervivencia.

> **Conclusión ajustada:** con Shapechange de 2014 RAW, la Marilith deja de ser una candidata descartada y pasa a ser una opción seria, pero el Planetar sigue siendo la forma superior para este build si se busca mantener la identidad defensiva, aérea y de control del Iron Dancer. La Marilith solo domina si la mesa prioriza el daño bruto y permite un combate muy agresivo sin depender del bucle de movilidad del Bladesinger.

---

## 7. Plan de Combate Óptimo sin Shapechange (Forma Humanoide / Tiers 1-4)

En escenarios donde *Shapechange* no esté disponible (combates de desgaste previo al nivel 17, entornos con *Antimagic Field*, necesidad de reservar la ranura de nivel 9 o enfrentamientos con *Dispel Magic* de nivel alto), el **Iron Dancer** sigue siendo uno de los duelistas de primera línea más letales y difíciles de matar del juego en su forma humanoide base.

### 🛡️ 1. Matriz Defensiva Base (Forma Humanoide)

* **CA Pasiva de Combate:** $13 (\text{Mage Armor}) + 5 (\text{DES}) = 18 \text{ CA}$.
* **CA con Bladesong:** $18 + 5 (\text{INT}) = 23 \text{ CA}$.
* **CA con Shield A Voluntad (Spell Mastery):** $23 + 5 (\text{Shield}) = \mathbf{28 \text{ CA}}$.
* **Protección de Concentración:** Bono de salvación $+13$ ($\text{INT } +5 + \text{CON } +2 + \text{Proficiencia } +6$) con Ventaja (**War Caster**) y $4$ éxitos automáticos diarios por **Mind Sharpener**. Tirada mínima de concentración: $14$ (falla automática solo en daños superiores a $30$ de un solo golpe).

---

### ⚔️ 2. Rutas de Concentración y Carga Ofensiva

#### 🔵 Ruta A: *Spirit Shroud* Escalado (Nivel 5, 7 o 9) — *El Triturador Elemental*
* **Mecánica:** Al lanzarse como conjuro de nivel 7, cada impacto de arma añade **+3d8 de daño** (Radiante, Necrótico o Frío) dentro de un radio de 10 pies y reduce la velocidad del objetivo en 10 pies (impidiendo que recupere Puntos de Golpe).
* **Ráfaga por Turno (Ataque Extra Bladesinger + Cantrip):**
  * **Ataque 1 (Estoque):** $1\text{d}8 (\text{Estoque}) + 5 (\text{DES}) + 5 (\text{Song of Victory}) + 3\text{d}8 (\text{Spirit Shroud Lvl 7}) + 3\text{d}6 (\text{Dragon's Wrath}) + 3 (\text{Magia}) = 4\text{d}8 + 3\text{d}6 + 13 = \mathbf{41.5 \text{ daño medio}}$.
  * **Ataque 2 (Green-Flame Blade):** $1\text{d}8 + 5 (\text{DES}) + 5 (\text{Song of Victory}) + 3\text{d}8 (\text{Spirit Shroud}) + 3\text{d}8 (\text{GFB}) + 3\text{d}6 (\text{Dragon's Wrath}) + 5 (\text{INT GFB}) + 3 (\text{Magia}) = 7\text{d}8 + 3\text{d}6 + 18 = \mathbf{60.0 \text{ daño medio}}$.
  * **Salto de Llama (Secundario):** $3\text{d}8 + 10 = \mathbf{23.5 \text{ daño de fuego}}$.
  * **DPR Total Humanoide:** $41.5 + 60.0 = \mathbf{101.5 \text{ daño medio sostenido a un solo objetivo}}$ (más 23.5 al secundario) usando únicamente una ranura de nivel 7.

#### 🟢 Ruta B: *Foresight* (Previsión - 8h Sin Concentración) + *Haste* — *El Espectro Intocable*
* **Mecánica:** Se lanza *Foresight* (nivel 9) al inicio de la jornada. Al durar 8 horas **sin requerir concentración**, otorga ventaja en todas las tiradas de ataque, salvaciones y pruebas, e impone desventaja a los ataques enemigos.
* **En combate:** Se concentra en *Haste* (nivel 3):
  * **CA Alcanzada:** $23 (\text{Bladesong}) + 2 (\text{Haste}) + 5 (\text{Shield}) = \mathbf{30 \text{ CA}}$.
  * **Ataque Adicional de Haste:** Realiza un 3.er ataque de estoque por turno: $1\text{d}8 + 5 (\text{DES}) + 5 (\text{Song of Victory}) + 3\text{d}6 (\text{Dragon's Wrath}) + 3 = \mathbf{23.0 \text{ daño medio adicionales}}$.
  * **Ventaja Permanente en los 3 Ataques:** Duplica la tasa de críticos ($9.75\%$ por ataque) sin depender de invisibilidad.

#### 🟡 Ruta C: *Greater Invisibility* — *El Duelista Sombra*
* **Mecánica:** Otorga invisibilidad total durante el combate.
* **Ventaja Táctica:** Inmunidad a todos los conjuros que requieren "una criatura que puedas ver" (*Counterspell*, *Power Word Kill*, *Dominate Monster*). Todos los ataques enemigos sufren desventaja (acumulable a tu CA de 28).

---

### ⚖️ 3. Tabla de Rendimiento Táctico sin Shapechange

| Configuración / Opción | DPR Estimado | CA Máxima | Inmunidades / Ventajas Especiales | Evaluación Archivero |
| :--- | :---: | :---: | :--- | :---: |
| **Ruta A: Spirit Shroud (Lvl 7)** | **101.5** | **28 CA** | Reducción de velocidad enemiga, bloqueo de curación | 🔵 **Máximo DPR Humanoide** |
| **Ruta B: Foresight + Haste** | **94.5** | **30 CA** | Ventaja universal, Desventaja a enemigos, 30 CA | 🔵 **God-Mode Defensivo** |
| **Ruta C: Greater Invisibility** | **71.5** | **28 CA** | Inmunidad a Spells visuales, Ventaja en ataques | 🟢 **Infiltración y Anti-Caster** |
| **Ruta D: Shadow Blade (Lvl 7)** | **92.0** | **28 CA** | 5d8 daño psíquico base en arma de sombra | 🟡 **Aceptable (RAW dependiente)** |

### 🧭 Veredicto Táctico del Archivero

Sin depender de *Shapechange*, la combinación de **Foresight (Previsión)** antes del combate sumado a **Spirit Shroud (Nivel 7)** o **Haste** durante el combate convierte al Iron Dancer en una máquina de combate cuerpo a cuerpo que supera los **100 DPR sostenidos** manteniendo **28 a 30 de CA**, concentración ininterrumpida y versatilidad absoluta.

