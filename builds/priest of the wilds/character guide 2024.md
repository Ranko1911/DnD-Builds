# 🏹 Guía de Conversión a Reglas 2024 (D&D 5.5e) — Priest of the Wilds

**Clasificación del Archivero:** 🟢 **Build Competitivo / Francotirador Sagrado de Precisión y Control (2024 Precision Archer)**  
**Reglas:** D&D 2024 Player's Handbook (5.5e)  
**División de Clases:** Ranger (Fey Wanderer) 12 / Cleric (War Domain) 8  
**Especie (2024):** Humano con Dote de Origen adicional o Elfo de los Bosques (*Fleet of Foot*: 35 ft velocidad base)  
**Dote de Origen (Nivel 1):** *Alert* (Añade Bonificador de Competencia a Iniciativa y permite intercambiar turnos con aliados)  

---

## 🔄 Novedades y Ajustes Clave del Reglamento 2024

### 1. Maestrías de Armas (Weapon Masteries 2024)
* **Longbow (Slow):** Al impactar con el arco largo a distancia, reduce automáticamente la velocidad de movimiento del objetivo en **10 pies** hasta el inicio de tu siguiente turno sin tirada de salvación. Con 3 impactos por turno, puedes reducir la velocidad enemiga de forma sostenida para imposibilitar que te alcancen.
* **Shortbow (Vex):** Si se utiliza un arco corto en distancias medias, cada impacto otorga **Ventaja automática en la siguiente tirada de ataque** contra ese mismo objetivo.

### 2. Explorador 2024 (*Ranger Class Features*)
* **Marca del Cazador (*Hunter's Mark*):** Ahora se lanzan usos gratuitos de *Hunter's Mark* sin consumir ranuras de conjuro según tu bonificador de competencia, liberando tus ranuras de nivel 1 para *Bless*, *Goodberry* o *Shield of Faith*.
* **Trotador Férico (*Fey Wanderer* 2024):** *Dreadful Strikes* se activa de forma automática sin consumir recursos adicionales, infligiendo daño psíquico plano en cada asalto.

### 3. Clérigo de la Guerra 2024 (*War Domain 2024*)
* **Sacerdote de Guerra (*War Priest*):** Permite realizar un ataque con arma como Acción Adicional un número de veces igual a tu modificador de Sabiduría ($+3$). En las reglas 2024, estos usos **se recuperan en cada Descanso Corto o Largo**, triplicando la frecuencia de disparos triples durante una jornada de mazmorra.
* **Golpe Guiado (*Guided Strike*):** Se mantiene como Canalizar Divinidad reactivo (+10 a impactar).

### 4. Ajuste de la Dote Francotirador (*Sharpshooter 2024*)
* En el PHB 2024, *Sharpshooter* es una dote general que otorga $+1$ a Destreza, elimina la desventaja por disparar cuerpo a cuerpo (a 5 pies) e ignora la cobertura de tres cuartos y media hasta el alcance máximo.
* Si la mesa utiliza la regla híbrida o el rasgo clásico de daño masivo ($-5$ a impactar por $+10$ de daño), el motor matemático aprovecha *Guided Strike* y *Bless* para neutralizar la penalización.

---

## 🧮 Motor Matemático 2024 (LaTeX Math Engine)

### 1. Cadencia Ofensiva Balística 2024 (Arco Largo + Slow)
Con un bonificador de ataque base $+11$ ($+5$ DES, $+6$ Prof) y maestría *Slow*:

$$\text{Impacto contra CA 19} = \frac{21 - 8}{20} = \mathbf{0.65} \quad (65.0\%)$$
$$\text{Impacto con Bless (+1d4 = +2.5)} = \frac{21 - 5.5}{20} = \mathbf{0.775} \quad (77.5\%)$$

Con 3 disparos por asalto (Acción de ataque + *War Priest* como Acción Adicional):
* Cada impacto inflige $1\text{d}8 + 5 \text{ (DES)} + 3 \text{ (Mágico)} + 1\text{d}6 \text{ (Hunter's Mark)} = 16.0 \text{ daño}$.
* Divine Strike suma $+1\text{d}8 = 4.5$ y Dreadful Strikes suma $+1\text{d}6 = 3.5$.

$$\text{DPR Sostenido 2024} = (3 \times 16.0) + 4.5 + 3.5 = \mathbf{56.0 \text{ Daño Monotarget Sostenido}}$$

Si se utiliza la variante clásica de *Sharpshooter* ($-5/+10$):

$$\text{DPR con Daño Masivo} = (3 \times 26.0) + 4.5 + 3.5 = \mathbf{86.0 \text{ Daño Monotarget a 600 Pies}}$$

---

## 🛡️ Bucle Táctico del Francotirador 2024

* **Turno 0 / Pre-Combate:** *Pass without Trace* (+10 Sigilo grupal) para asegurar distancia de 600 pies y ronda de sorpresa.
* **Turno 1:**
  * **Bonus Action:** *Hunter's Mark* gratuita o *Bless* (+1d4 precisión).
  * **Acción:** Ataque doble con Arco Largo aplicando propiedad *Slow* (-10 ft velocidad al jefe enemigo).
* **Turno 2:**
  * **Acción:** Ataque doble con Arco Largo.
  * **Bonus Action:** Ataque extra de *War Priest* (tercer disparo).
  * **Reacción:** *Guided Strike* (+10 plano) si alguna flecha falla.
* **Control Férico Continuo:** *Beguiling Twist* como reacción cuando un enemigo supere una salvación de encanto/miedo, obligando a otro objetivo a salvar contra terror durante 1 minuto.