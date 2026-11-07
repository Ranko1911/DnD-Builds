# Guía de Personaje — Shadow Tank (Edición 2024 / 5.5e)

## Datos Generales

* **System Standard:** D&D 5th Edition (2024 Ruleset - 5.5e Update)
* **Character Level:** 20 (Total)
* **Class Split:** Warlock (Hexblade) 17 / Barbarian (Wild Heart / Bear) 3
* **Species:** Semiorco / Orc (Dote de Origen: *Alert* o *Savage Attacker*)
* **Stats (Point Buy 2024 / Trasfondo):**
  * **FUER (STR):** 13 (+1)
  * **DES (DEX):** 14 (+2)
  * **CON:** 16 (+3)
  * **INT:** 8 (-1)
  * **SAB (WIS):** 10 (+0)
  * **CAR (CHA):** 20 (+5)

* **Enlaces de Documentación:**
  * [Bastión y Tiempo Muerto](./bastion and downtime.md)
  * [Lista de Conjuros y Recursos](./spell list.md)
  * [Objetos a Obtener](./item list to obtain.md)
  * [Hoja de Ruta 1-20](./roadmap.md)
  * [Inventario Actual](./actual inventory list.md)

---

## 1. Gestión de Recursos y Reglas de Inventario (2024 Ruleset)

* **Maestría de Armas (Weapon Masteries 2024):**
  * **Greatsword (*Graze*):** Si fallas un ataque con el espadón, infliges daño igual a tu modificador de Carisma (+5) automáticamente sin tirada.
* **Economía de Furia 2024:**
  * La Furia dura 10 minutos completos. Se mantiene activa atacando, forzando salvaciones o gastando una Acción Adicional.
  * Conjuros de larga duración sin concentración como *Foresight* (8 horas) y *Armor of Agathys* (1 hora) funcionan al 100% durante la Furia.

---

## 2. Action Economy & Combat Loop (2024)

* **Pre-Combate:** Activar *Foresight* (Nivel 9, 8 horas) y lanzar *Armor of Agathys* con ranura de nivel 5 (25 THP + 25 frío por golpe recibido).
* **Turno 1:**
  * **Bonus Action:** Activar *Hexblade's Curse* sobre el enemigo principal.
  * **Action:** 2 Ataques con Espadón usando Carisma (+5) con Ventaja de *Foresight* y crítico en 19-20. Aplica *Graze* (+5 daño) si fallas.
  * **Smite:** Descarga *Eldritch Smite* (+6d8 fuerza + derribo automático).
* **Turno 2+:**
  * **Bonus Action:** Entrar en Furia del Oso (resistencia a todo daño excepto psíquico).
  * **Action:** 2 Ataques con Espadón con Ventaja permanente contra el enemigo derribado.

---

## 3. Mathematical Engine (2024)

$$\text{DPR Sostenido} = 2 \times [0.9375 \times 26.0 + 0.19 \times 10.5] = \mathbf{52.74 \text{ DPR}} + 50\text{ Frío/Espinas Pasivo}$$

$$\text{EHP Universal Efectivo} = \frac{\text{HP Real } (185) + 25_{\text{Agathys}} + 100_{\text{Sanctum}}}{0.50} = \mathbf{620 \text{ EHP}}$$
