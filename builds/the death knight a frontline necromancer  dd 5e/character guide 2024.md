# ⚔️ Guía de Conversión a Reglas 2024 (D&D 5.5e) — Death Knight

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (2024 Frontline Necro-Gish & Graze Engine)**  
**Reglas:** D&D 2024 Player's Handbook (5.5e)  
**División de Clases:** Artificer (Battle Smith) 3 / Wizard (School of Necromancy) 17  
**Especie (2024):** Reborn o Humano con Dote de Origen adicional  
**Dote de Origen (Nivel 1):** *Tough* (+2 HP por nivel = +40 HP a nivel 20) o *Alert* (+PB a Iniciativa)  

---

## 🔄 Novedades y Ajustes Clave del Reglamento 2024

### 1. Maestrías de Armas (Weapon Masteries 2024)
Al contar con competencia en armas marciales vía Artificer, el Death Knight desbloquea propiedades de maestría letales:
* **Greatsword (Graze):** Si fallas una tirada de ataque con el espadón, **infliges de todos modos un daño igual a tu modificador de característica rectora**. Gracias a *Battle Ready*, atacas con Inteligencia ($+5$), por lo que incluso en un fallo total causas **5 puntos de daño plano garantizado** al enemigo.
* **Halberd / Glaive (Cleave):** Si prefieres un arma de asta, una vez por turno al impactar puedes realizar un ataque adicional contra otra criatura adyacente a 5 pies, acelerando la propagación de daño en primera línea.

### 2. Mago 2024 (*Wizard Class Features*)
* **Memorizar Conjuro (*Memorize Spell* — Nivel 5):** Permite cambiar un conjuro preparado por cualquier otro de tu libro tras un Descanso Corto, aportando adaptabilidad total entre asedios y mazmorras.
* **Adepto del Ritual (*Ritual Adept* — Nivel 1):** Lanza conjuros rituales como *Phantom Steed* directamente desde el libro sin tenerlos preparados en la lista diaria.

### 3. Regla de Lanzamiento de Conjuros 2024 (*One Leveled Spell per Turn*)
* Como ordenar a Boris the Bone Boar (*Steel Defender*) o a la horda de esqueletos es una **Acción Adicional de mando de habilidad**, no cuenta como conjuro. Puedes lanzar un conjuro poderoso de nivel alto (*Web*, *Wall of Force*, *Wish*) con tu Acción y ordenar el ataque de la horda con tu Bonus Action en el mismo turno sin restricciones.

---

## 🧮 Motor Matemático 2024 (LaTeX Math Engine)

### 1. Eficiencia de Vanguardia con Espadón y Propiedad *Graze*
Con un bonificador de ataque base $+14$ frente a CA 19 enemiga:

$$\mathbb{P}(\text{Acierto}) = \frac{21 - 5}{20} = \mathbf{0.80} \quad (80.0\%)$$
$$\mathbb{P}(\text{Fallo}) = \mathbf{0.20} \quad (20.0\%)$$

Al combinar *Booming Blade* ($28.5$ de daño al impactar) con la propiedad *Graze* ($+5$ daño en fallo):

$$\mathbb{E}[\text{Daño de Espadón 2024}] = (0.80 \times 28.5) + (0.20 \times 5.0) = 22.8 + 1.0 = \mathbf{23.8 \text{ Daño Mínimo Garantizado}}$$

### 2. Salva de la Horda de Esqueletos 2024 con Ventaja
Con 16 arqueros esqueleto disparando a un objetivo atrapado en la telaraña de hielo (*Web* glaciar, Ventaja constante):

$$\mathbb{E}[\text{Salva de 16 Esqueletos}] = 16 \times 6.206 = \mathbf{99.30 \text{ Daño Perforante}}$$

Añadiendo el Mordisco de Boris ($12.5$) y los dos impactos del Nightwalker dominado ($83.0$):

$$\text{DPR Frontline Total 2024} = 23.8 + 12.5 + 99.30 + 83.0 = \mathbf{218.60 \text{ DPR de Vanguardia Continuo}}$$

---

## 🛡️ Bucle Táctico del Caballero de la Muerte 2024

* **Turno 0 / Pre-Combate:** Montar en el *Phantom Steed* (100 ft de velocidad) + desplegar a Boris the Bone Boar.
* **Turno 1:**
  * **Acción:** *Web* Glaciar para inmovilizar al jefe y conferir ventaja a todo tu ejército.
  * **Bonus Action:** Boris the Bone Boar embiste cuerpo a cuerpo.
* **Turno 2+:**
  * **Acción:** *Booming Blade* con Espadón de Inteligencia (28.5 daño o 5 daño por *Graze* si falla).
  * **Bonus Action:** Comandar la descarga de los 16 arqueros y del Nightwalker.
* **Reacción:** *Shield* (+5 CA = 26 CA) o *Deflect Attack* de Boris para imponer desventaja al atacante hostil.
