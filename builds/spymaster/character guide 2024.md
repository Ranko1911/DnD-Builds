# 🕵️‍♂️ Guía de Conversión a Reglas 2024 (D&D 5.5e) — Spymaster

**Clasificación del Archivero:** 🟢 **Build Competitivo / Infiltrador Táctico y Hostigador Psiónico (2024 Cunning Skirmisher)**  
**Reglas:** D&D 2024 Player's Handbook (5.5e)  
**División de Clases:** Rogue (Soulknife) 18 / Artificer 2  
**Especie (2024):** Elfo de los Bosques (*Wood Elf* — Velocidad 35 ft nativa)  
**Dote de Origen (Nivel 1):** *Alert* (Añade Bonificador de Competencia a Iniciativa y permite intercambiar turnos con aliados)  

---

## 🔄 Novedades y Ajustes Clave del Reglamento 2024

### 1. Golpe Astuto del Pícaro 2024 (*Cunning Strike*)
* En el PHB 2024, el Pícaro gana el rasgo **Cunning Strike** (Nivel 5): te permite restar dados a tu *Sneak Attack* a cambio de aplicar efectos de control garantizados al impactar:
  * **Withdraw (1d6):** Te permite retirarte hasta la mitad de tu velocidad de movimiento sin provocar ataques de oportunidad inmediatamente tras golpear, liberando tu Acción Adicional para otros propósitos.
  * **Poison (1d6):** Fuerza al objetivo a una salvación de Constitución contra tu CD (19); si falla, queda **Envenenado durante 1 minuto**, sufriendo Desventaja en todas sus tiradas de ataque y pruebas.
  * **Trip (1d6):** Derriba al objetivo si es de tamaño Grande o menor (salvación de Destreza), confiriendo Ventaja cuerpo a cuerpo a tus aliados.

### 2. Maestrías de Armas (Weapon Masteries 2024)
* **Dagger (Nick):** Permite realizar el ataque secundario de arma ligera como parte de la acción de ataque principal sin consumir la Acción Adicional.
* **Shortsword (Vex):** Cada impacto exitoso concede **Ventaja automática en la siguiente tirada de ataque** contra el mismo objetivo, garantizando la activación continua de *Sneak Attack*.

### 3. Hojas Psíquicas 2024 (*Soulknife Redesign*)
* Las *Psychic Blades* ahora interactúan de forma fluida con las reglas de ataque con armas y maestrías de 2024, permitiendo realizar ataques de oportunidad con hojas psíquicas cuando un enemigo abandona tu alcance.

---

## 🧮 Motor Matemático 2024 (LaTeX Math Engine)

### 1. Cadencia con Daga y Propiedad *Vex*
Al impactar con una Daga Retornable $+3$ bajo la maestría *Vex*:

$$\mathbb{P}(\text{Acierto contra CA 19 con Ventaja}) = 1 - (1 - 0.80)^2 = \mathbf{96.0\%}$$

Al aplicar *Booming Blade* ($13.5$ trueno) y *Sneak Attack* ($9\text{d}6 = 31.5$):

$$\text{Daño al Impactar 2024} = 1\text{d}6 + 5 \text{ (DES)} + 3 \text{ (Magia)} + 13.5 + 31.5 = \mathbf{56.5 \text{ Daño Monotarget}}$$

Si se utiliza *Cunning Strike: Poison* (restando 1d6 de Sneak Attack), inflige **53.0 de daño** y el enemigo debe salvar contra CD 19 o quedar con Desventaja permanente en todos sus ataques.

### 2. Suelo Infranqueable de Sigilo 2024 (*Reliable Talent*)
Con *Reliable Talent* fijando el mínimo de d20 en 10:

$$\text{Suelo Mínimo de Sigilo} = 10 + 5 \text{ (DES)} + 12 \text{ (Prof)} = \mathbf{27 \text{ Mínimo Absoluto}}$$

Con el dado psiónico de *Psi-Bolstered Knack* ($+1\text{d}12$):

$$\text{Rango de Sigilo} = \mathbf{28 \text{ a } 39 \text{ Garantizado sin Consumir el Dado en Fallo}}$$

---

## 🛡️ Bucle Táctico del Spymaster 2024

* **Turno 0 / Pre-Combate:** *Psychic Veil* (Invisibilidad de 1 hora sin concentración) + Sigilo (mínimo 27).
* **Turno 1:**
  * **Acción:** *Booming Blade* con Daga Retornable +3 (56.5 daño con Ventaja).
  * **Cunning Strike:** Aplica *Withdraw* para retroceder 20 pies gratis.
  * **Bonus Action:** *Cunning Action: Hide* para volver a entrar en sigilo en penumbra.
* **Turno 2+:**
  * Repetir emboscada desde sigilo o lanzar Hojas Psíquicas a distancia (60 pies).
* **Reacción:** *Uncanny Dodge* (divide a la mitad el daño recibido) o *Absorb Elements*. *Elusive* anula cualquier ventaja que los enemigos intenten tener contra ti.