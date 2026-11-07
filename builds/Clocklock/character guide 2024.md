# ⏱️ Guía de Conversión a Reglas 2024 (D&D 5.5e) — Clocklock

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (Innate Sorcery + Clockwork Minigun)**  
**Reglas:** D&D 2024 Player's Handbook (5.5e)  
**División de Clases:** Sorcerer (Clockwork Soul) 18 / Warlock (Hexblade o Archfey / Great Old One adaptado) 2  
**Especie (2024):** Elfo (Alto Elfo o Elfo de los Bosques para *Elven Accuracy*) o Humano con Dote de Origen Adicional  
**Dote de Origen (Nivel 1):** *Alert* (Añade Bonificador de Competencia a Iniciativa y permite intercambiar iniciativas con un aliado)  

---

## 🔄 Novedades y Ajustes Clave del Reglamento 2024

### 1. Hechicería Innata (*Innate Sorcery* — Rasgo de Nivel 1 de Sorcerer)
* **Activación:** Acción Adicional (dura 1 minuto, 2 usos por Descanso Largo).
* **Efectos:**
  1. Otorga **Ventaja constante en todas las tiradas de ataque de conjuro** de Hechicero (sin depender de *Darkness* en salas iluminadas).
  2. Aumenta la **CD de salvación de todos tus conjuros de Hechicero en $+1$** (alcanzando CD 23 con equipo legendario).
* **Sinergia:** Activar *Innate Sorcery* desata de inmediato la triple ventaja de *Elven Accuracy* para todos los rayos de *Eldritch Blast* sin necesidad de oscurecer el mapa para tus aliados.

### 2. Regla de Lanzamiento de Conjuros 2024 (*One Leveled Spell per Turn*)
* Las reglas de 2024 eliminaron la antigua limitación engorrosa de conjuros rápidos: ahora la restricción es simplemente que **solo puedes gastar 1 espacio de conjuro (ranura) por turno**.
* Dado que *Eldritch Blast* es un **truco (cantrip)** que no consume ranuras, puedes lanzar un conjuro de nivel alto con tu Acción (por ejemplo, *Wall of Force* o *Synaptic Static*) y utilizar *Quickened Spell* para lanzar *Eldritch Blast* como Acción Adicional, o lanzar dos descargas de *Eldritch Blast* seguidas (Acción + Bonus Action) sin ninguna restricción.

### 3. Maestrías de Armas (Weapon Masteries)
Al acceder a competencias marciales vía Warlock, el Clocklock puede desbloquear propiedades de maestría:
* **Dagger (Nick):** Permite realizar el ataque con arma secundaria como parte de la acción de ataque principal sin consumir la Acción Adicional si se requiere en combate cuerpo a cuerpo extremo.
* **Light Crossbow (Slow):** Reduce la velocidad de movimiento del objetivo en 10 pies al impactar a distancia.

---

## 🧮 Motor Matemático 2024 (LaTeX Math Engine)

### Precisión con *Innate Sorcery* + *Elven Accuracy*
Con la activación de *Innate Sorcery*, el Clocklock obtiene ventaja automática en ataques de conjuro sin coste de concentración:

$$\mathbb{P}(\text{Impacto contra CA 19}) = 1 - (1 - \mathbb{P}_{\text{base}})^3$$

Con $+11$ a impactar contra CA 19, la tirada requerida en el dado es $8$ o superior ($\mathbb{P}_{\text{base}} = 0.65$):

$$\mathbb{P}(\text{Fallo}) = (1 - 0.65)^3 = (0.35)^3 = 0.0428 \implies \mathbb{P}(\text{Impacto 2024}) = \mathbf{95.72\%}$$

Si se activa adicionalmente *Trance of Order* (nivel 14), la tirada mínima es 10 ($10 + 11 = 21$), convirtiendo la probabilidad de acierto en:

$$\mathbb{P}(\text{Acierto con Trance of Order}) = \mathbf{100.0\%}$$

### Daño Nova Asalto 2024 (8 Rayos)
$$\text{DPR Nova Sustentado} = 8 \times [16.5 + (0.271 \times 5.5)] = 8 \times 17.99 = \mathbf{143.92 \text{ Daño de Fuerza}}$$

---

## 🛡️ Bucle Defensivo y Mitigación 2024

* **Turno 0 / Pre-Combate:** *Armor of Agathys* (Nivel 8) para 40 THP + 40 Daño de Frío reactivo.
* **Turno 1:** Bonus Action: *Innate Sorcery* (+1 CD y ventaja). Acción: *Eldritch Blast* (4 rayos con triple ventaja).
* **Turno 2:** Bonus Action: *Quickened Eldritch Blast* (4 rayos). Acción: *Eldritch Blast* (4 rayos). Total: 8 rayos demoledores.
* **Reacción:** *Shield* (+5 CA) o *Counterspell* (ahora requiere una salvación de Constitución por parte del lanzador enemigo frente a tu CD de 23).