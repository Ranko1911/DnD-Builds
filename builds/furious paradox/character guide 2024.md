# Guía de Personaje — Furious Paradox (Edición 2024 / 5.5e)

## Datos Generales

* **System Standard:** D&D 5th Edition (2024 Ruleset - 5.5e Update)
* **Character Level:** 20 (Total)
* **Class Split:** Wizard (Bladesinger) 18 / Barbarian 2
* **Species:** High Elf (Dote de Origen: *Alert* o *Magic Initiate*)
* **Stats (Point Buy 2024 / Trasfondo):**
  * **FUER (STR):** 13 (+1)
  * **DES (DEX):** 20 (+5)
  * **CON:** 14 (+2) *(19 con Amulet of Health)*
  * **INT:** 20 (+5)
  * **SAB (WIS):** 9 (-1)
  * **CAR (CHA):** 8 (-1)

* **Enlaces de Documentación:**
  * [Bastión y Tiempo Muerto](./bastion and downtime.md)
  * [Lista de Conjuros y Recursos](./spell list.md)
  * [Objetos a Obtener](./item list to obtain.md)
  * [Hoja de Ruta 1-20](./roadmap.md)
  * [Inventario Actual](./actual inventory list.md)

---

## 1. Gestión de Recursos y Reglas de Inventario (2024 Ruleset)

* **Maestría de Armas (Weapon Masteries 2024):**
  * **Rapier (*Vex*):** Al impactar con el estoque, obtienes **Ventaja automática** en tu siguiente tirada de ataque contra ese mismo objetivo.
* **Economía de Furia y Bladesong 2024:**
  * La Furia dura 10 minutos y puede mantenerse gastando una Acción Adicional.
  * Conjuros de larga duración sin concentración como *Foresight* (8h), *Crown of Stars* (1h), *Fire Shield* (10 min) y *Mirror Image* (1 min) funcionan de forma ininterrumpida durante la Furia.

---

## 2. Action Economy & Combat Loop (2024)

* **Pre-Combate:** Lanzar *Foresight* (8h), *Crown of Stars* (1h) y *Fire Shield* (10 min).
* **Turno 1:**
  * **Bonus Action:** Activar *Bladesong* (+5 CA, +10 ft velocidad).
  * **Action:** Extra Attack con Rapier (aplica *Vex* para asegurar Ventaja continua).
* **Turno 2+:**
  * **Bonus Action:** Entrar en Furia (resistencia a daño físico) o disparar estrella de *Crown of Stars* ($4\text{d}12$ radiante).
  * **Action:** 2 Ataques con Rapier sumando DEX (+5), INT (+5) y Furia (+2).
  * **Reaction:** *Song of Defense* (reduce el daño en $5 \times \text{slot}$).

---

## 3. Mathematical Engine (2024)

$$\text{CA Pasiva} = 10 + 5_{\text{DEX}} + 4_{\text{CON}} + 5_{\text{INT}} + 2_{\text{Bracers}} = \mathbf{26 \text{ CA Pasiva}} \quad (\text{con Desventaja Enemiga por Foresight})$$

$$\text{DPR Sostenido} = 2 \times (1\text{d}8 + 15) + 4\text{d}12_{\text{Crown of Stars}} = 39.0 + 26.0 = \mathbf{65.0 \text{ DPR}}$$
