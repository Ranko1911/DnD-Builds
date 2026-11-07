# 🎼 Guía de Conversión a Reglas 2024 (D&D 5.5e) — The Conductor

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (2024 Tactical Reaction Puppetmaster)**  
**Reglas:** D&D 2024 Player's Handbook (5.5e)  
**División de Clases:** Cleric (Order Domain o Life / War adaptado) 1 / Bard (College of Glamour) 19  
**Especie (2024):** Hobgoblin o Humano con Dote de Origen adicional  
**Dote de Origen (Nivel 1):** *Alert* (Suma PB a Iniciativa y permite intercambiar iniciativas con el Pícaro o Paladín del grupo)  

---

## 🔄 Novedades y Ajustes Clave del Reglamento 2024

### 1. Colegio del Glamour 2024 (*College of Glamour Redesign*)
* **Magia Seductora (*Beguiling Magic* — Nivel 3):** Cada vez que lanzas un conjuro de la escuela de **Encantamiento** o **Ilusión**, puedes obligar de inmediato a una criatura en 60 pies a superar una salvación de Sabiduría contra tu CD o quedar **Hechizada** o **Asustada** durante 1 minuto.
* **Manto de Inspiración (*Mantle of Inspiration* — Nivel 3):** Acción Adicional que concede THP masivos calculados mediante tiradas de dados de inspiración y permite a tus aliados usar su Reacción para desplazarse a toda velocidad sin provocar ataques de oportunidad.
* **Manto de Majestad (*Mantle of Majesty* — Nivel 6):** Lanzas *Command* como Acción Adicional sin gastar ranuras de conjuro durante 1 minuto. En las reglas 2024, **las criaturas que estén Hechizadas fallan automáticamente su tirada de salvación contra este *Command***, generando una sinergia perfecta con *Beguiling Magic*.

### 2. Orden Divina del Clérigo 2024 (*Divine Order: Protector*)
* Permite seleccionar la opción de **Protector** a Nivel 1 de Clérigo, obteniendo automáticamente competencia con **Armaduras Pesadas** y **Armas Marciales**, eliminando la necesidad de invertir en atributos de fuerza si se portan armaduras enanas o de mitril.

### 3. Maestrías de Armas (Weapon Masteries 2024)
* **Dagger (Nick):** Ataque adicional en combate cuerpo a cuerpo integrado en la acción de ataque sin consumir la Acción Adicional.
* **Light Crossbow (Slow):** Reduce la velocidad de movimiento del enemigo en 10 pies al impactar a distancia, facilitando el kiteo del escuadrón.

---

## 🧮 Motor Matemático 2024 (LaTeX Math Engine)

### 1. Eficiencia de Reacción con *Voice of Authority* 2024
La regla de conjuros de 2024 (*One Leveled Spell per Turn*) permite utilizar conjuros de reacción como *Silvery Barbs* durante el turno del enemigo sin interferir en los conjuros lanzados en tu propio turno:

$$\mathbb{E}[\text{Daño Regalado por Reacción}] = \mathbb{P}(\text{Acierto Aliado con Ventaja}) \times \text{Daño de Ataque Aliado}$$

Con un Pícaro 2024 aplicando *Nick* y *Sneak Attack* ($10\text{d}6 + 1\text{d}8 + 5 = 44.5$ de daño medio):

$$\mathbb{E}[\text{DPR Indirecto}] = 0.8775 \times 44.5 + [1 - (0.95)^2] \times 39.5 = \mathbf{42.90 \text{ Daño Fuera de Turno}}$$

### 2. Cadena de Control Seductora (Beguiling Command)
Al lanzar *Command* bajo *Mantle of Majesty*:
1. Si el enemigo ya está bajo efecto de encanto (*Beguiling Magic* o *Charm Person*):

$$\mathbb{P}(\text{Éxito de Command}) = \mathbf{1.00} \quad (100\% \text{ Fallo Automático del Enemigo})$$

2. El objetivo queda derribado (*Grovel*), perdiendo su turno y otorgando **Ventaja a todos los ataques cuerpo a cuerpo de tus aliados**.

---

## 🛡️ Bucle Táctico del Conductor 2024

* **Turno 0 / Pre-Combate:** *Heroes' Feast* + *Aid* (Nivel 8) para dotar de más de 200 puntos de colchón de salud al grupo.
* **Turno 1:** 
  * **Bonus Action:** *Mantle of Inspiration* (reposiciona a 5 aliados y otorga 70 THP).
  * **Acción:** *Bless* o *Haste* sobre el combatiente marcial (activa *Voice of Authority* para 1 ataque de arma instantáneo).
* **Turno 2+:** 
  * **Bonus Action:** *Command* gratuito (*Mantle of Majesty*).
  * **Acción:** Ataque a distancia con ballesta ligera (*Slow*) o conjuro de control (*Hypnotic Pattern*).
* **En Turnos Enemigos:** *Silvery Barbs* como Reacción para anular el mejor impacto del jefe y regalar un nuevo ataque con ventaja a tu aliado principal.
