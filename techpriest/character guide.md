# SYSTEM_PROMPT: Character Build Overview

## General Data

System Standard: D&D 5th Edition (2014 Ruleset)

Character Level: 20 (Total)

Class Split: Artificer (Armorer) 14 / Cleric (Forge Domain) 6

Species: Warforged [+1 AC nativo, Constructed Resilience]

Stats:

* **FUER (STR):** 8 [Ignorada gracias al rasgo de Armorer que elimina el requisito de fuerza de las armaduras pesadas]
* **DES (DEX):** 10
* **CON:** 16 (15 base + 1 racial)
* **INT:** 17 (15 base + 2 racial) [Se incrementa a 20 con dotes y mejoras]
* **SAB (WIS):** 14 [Suficiente para el multiclaseo de Clérigo]
* **CAR (CHA):** 8

Actual Item List: ./actual inventory list.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Roadmap de Progresión: ./roadmap.md

Combat Role: Frontline Dread Tank / Master Craftsman / Aggro Controller (Defensor indestructible en primera línea, capaz de atraer ataques mediante *Thunder Gauntlets* mientras mantiene inmunidad práctica gracias a su AC extrema).

 1. Resource Management & Inventory Rules

* **Economía de Armadura de Mago:**
  * Como **Armorer Artificer** de nivel 9 o superior, obtienes el rasgo **Armor Modifications**. Tu armadura arcana se divide en cuatro piezas independientes (pecho, botas, casco y arma), permitiéndote infundir cada pieza de forma individual. Esto te otorga $+2$ ranuras de infusión adicionales de uso exclusivo en tu armadura.
* **Foco y Sintonía:**
  * Tu armadura arcana sirve como tu foco de lanzamiento para conjuros de Artificer. Tu escudo u objetos mágicos pueden canalizar los de Clérigo.
  * Al nivel 14 de Artífice, puedes mantener hasta **5 objetos sintonizados** simultáneamente y puedes sintonizar cualquier objeto sin importar las restricciones de clase o raza.

 1. Action Economy & Combat Loop

* **Action:**
  * **Turno 1:** Lanzar *Spirit Guardians* (Clérigo 3) o *Heat Metal* (Forge Cleric 2) para control de área o daño garantizado.
  * **Turnos 2+:** Acción de ataque (*Extra Attack* usando tus puños **Thunder Gauntlets**). Cada impacto obliga al objetivo a tener desventaja en sus tiradas de ataque contra cualquier criatura que no seas tú hasta el inicio de tu siguiente turno.
* **Bonus Action:**
  * **Defensive Field (Armorer):** Ganas puntos de golpe temporales iguales a tu nivel de Artífice (14 HP) como acción adicional para mitigar cualquier daño residual.
  * Redirigir marcas de conjuros o activar el ataque de *Spiritual Weapon*.
* **Reaction:**
  * **Shield:** Obtienes $+5$ a tu CA (llegando a 33 CA) para anular por completo impactos críticos o ataques que superen tu armadura base.
  * **Absorb Elements:** Para resistir daño elemental masivo.
  * **Flash of Genius:** Añade tu modificador de Inteligencia ($+5$) a una tirada de salvación o prueba de característica tuya o de un aliado en 30 pies.

 1. The META Combo: The Invincible Wall (AC 28/33)

El build apila todas las bonificaciones pasivas de AC del juego utilizando las infusiones del Artífice y las bendiciones del Clérigo de la Forja, creando un tanque inalcanzable que debilita a los enemigos que deciden ignorarlo.

* **Paladines de la AC (Pasiva CD 28 - Nivel Base sin Items Legendarios):**
  * Armadura de Placas Pesada (Base $18$) + Escudo común ($+2$) = $20 \text{ AC}$.
  * *Warforged Integrated Protection:* $+1 \text{ AC}$ (Nativo).
  * *Blessing of the Forge* (Forge Cleric 1): $+1 \text{ AC}$ a tu armadura (requiere que sea no mágica).
  * *Soul of the Forge* (Forge Cleric 6): $+1 \text{ AC}$ al vestir armadura pesada.
  * *Enhanced Defense* (Infusión de Artífice de nivel 10+): $+2 \text{ AC}$ en el pecho (requiere que sea no mágica).
  * *Repulsion Shield* (Infusión de Artífice): $+1 \text{ AC}$ en tu escudo (requiere que sea no mágico).
  * *Ring of Protection* (Infusión o Item): $+1 \text{ AC}$ y $+1$ a todas las salvaciones.
  * *Cloak of Protection* (Infusión o Item): $+1 \text{ AC}$ y $+1$ a todas las salvaciones.

🧮 Mathematical Engine (2014 Rules - Nivel Base):

$$\text{AC Pasiva} = 18 \text{ (Placas)} + 2 \text{ (Escudo)} + 1 \text{ (Warforged)} + 1 \text{ (Blessing)} + 1 \text{ (Soul)} + 2 \text{ (Infusión)} + 1 \text{ (Escudo Mágico)} + 1 \text{ (Anillo)} + 1 \text{ (Capa)} = 28 \text{ AC.}$$

$$\text{AC con Escudo (Conjuro)} = 28 \text{ (Base)} + 5 \text{ (Shield)} = 33 \text{ AC.}$$

---

### ⚠️ El Dilema de Fin de Juego: Placas +3 y Escudo +3 (Dependencia del Master)

Cuando el personaje obtiene equipamiento legendario como **Placas +3** y **Escudo +3**, el cálculo de CA cambia críticamente según la interpretación del Dungeon Master de las reglas oficiales:

#### Escenario A: Reglas Oficiales (RAW)
Las reglas oficiales prohíben infundir objetos mágicos (*"you cannot infuse magic items"*) y aplicar la bendición del clérigo en ellos (*"touch one nonmagic object"*). Al usar Placas +3 y Escudo +3 mágicos, pierdes *Enhanced Defense*, *Repulsion Shield* y *Blessing of the Forge*.

$$\text{AC Pasiva (RAW)} = 21 \text{ (Placas +3)} + 5 \text{ (Escudo +3)} + 1 \text{ (Warforged)} + 1 \text{ (Soul)} + 2 \text{ (Ring + Cloak of Protection)} = 30 \text{ AC}$$
$$\text{AC con Escudo (Conjuro)} = 30 + 5 = 35 \text{ AC}$$
*(Incremento neto de solo +2 CA respecto al equipamiento básico infundido, perdiendo además los efectos especiales de las infusiones sobre armadura/escudo).*

#### Escenario B: Reglas de Mesa Permisivas (Homebrew)
Si el Master permite infundir y bendecir objetos mágicos preexistentes, puedes alcanzar la máxima efectividad posible. Aquí se abren dos configuraciones óptimas de nivel 20 (limitadas por tus **5 slots de sintonización**):

##### 1. Variante "El Bastión Imperturbable" (Foco en CA Máxima)
* **Sintonización (5/5):** Ring of Protection, Cloak of Protection, Repulsion Shield (infundido), Núcleo del Dios Máquina (Homebrew), Amulet of the Devout +3.
* **Infusiones (5/5):** Enhanced Defense +2 (en Placas +3), Repulsion Shield +1 (en Escudo +3), Enhanced Weapon +2 (en Puños), Ring of Protection, Cloak of Protection.
$$\text{AC Pasiva} = 21 \text{ (Placas +3)} + 5 \text{ (Escudo +3)} + 1 \text{ (Warforged)} + 1 \text{ (Blessing)} + 1 \text{ (Soul)} + 2 \text{ (Enhanced Def.)} + 1 \text{ (Rep. Shield)} + 2 \text{ (Ring + Cloak)} = 34 \text{ AC}$$
$$\text{AC con Escudo (Conjuro)} = 34 + 5 = 39 \text{ CA}$$

##### 2. Variante "El Heraldo de la Forja" (Foco Equilibrado - Altamente Recomendada)
*Sacrifica solo 1 punto de CA para obtener una CD de conjuros de Artífice legendaria de 22 e inmunidad práctica a perder concentración.*
* **Sintonización (5/5):** All-Purpose Tool +3, Amulet of the Devout +3, Ring of Protection, Cloak of Protection, Núcleo del Dios Máquina (Homebrew).
* **Infusiones (5/5):** Enhanced Defense +2 (en Placas +3), Mind Sharpener (en tus botas/casco, no requiere sintonización, da 4 auto-éxitos en concentración), Enhanced Weapon +2 (en Puños), Ring of Protection, Cloak of Protection.
$$\text{AC Pasiva} = 21 \text{ (Placas +3)} + 5 \text{ (Escudo +3)} + 1 \text{ (Warforged)} + 1 \text{ (Blessing)} + 1 \text{ (Soul)} + 2 \text{ (Enhanced Def.)} + 2 \text{ (Ring + Cloak)} = 33 \text{ AC}$$
$$\text{AC con Escudo (Conjuro)} = 33 + 5 = 38 \text{ CA}$$
* **CD de Conjuros:** Clérigo (Spirit Guardians) CD 19 / Artífice CD 22 (gracias al All-Purpose Tool +3).
* **Salvación de Concentración:** $+16$ ($+21$ con Flash of Genius) junto con los 4 auto-éxitos diarios de Mind Sharpener.

---

 Debido a que tus ataques con *Thunder Gauntlets* imponen desventaja a los enemigos que atacan a otros, los enemigos se ven obligados a atacarte a ti (con AC de hasta 33/38 pasiva/activa y amortiguación de 14 HP temporales por turno) o fallar miserablemente sus ataques contra tus aliados.

 1. Artificer Modifications & Infusions Blueprint

Al nivel 14 de Artífice, tus **5 infusiones activas** se distribuyen para optimizar tu AC y tus estadísticas secundarias:

1. **Enhanced Defense +2** (Aplicado a tu armadura de pecho).
2. **Repulsion Shield +1** (Aplicado a tu escudo, permitiendo empujar 15 pies a un atacante que te impacte).
3. **Ring of Protection** (Aplicado a un anillo común).
4. **Cloak of Protection** (Aplicado a una capa común).
5. **Enhanced Weapon +2** o **Radiant Weapon** (Aplicado a tus puños de trueno para asegurar impacto y dar opción de ceguera).

* *Alternativa:* **Belt of Hill Giant Strength** (Infusión de nivel 14) o **Amulet of Health** si necesitas fijar tu Fuerza a 21 o tu Constitución a 19.

 1. home rules
(Calcula todas las mecánicas bajo las reglas vigentes en tu mesa, priorizando la sintonización unificada de focos si aplica para mantener libre la economía de manos con escudo).
