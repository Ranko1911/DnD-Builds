# Guía de Personaje — Barbarian from Hell (Edición 2024 / 5.5e)

## Datos Generales

* **System Standard:** D&D 5th Edition (2024 Ruleset - 5.5e Update)
* **Character Level:** 20 (Total)
* **Class Split:** Barbarian (Zealot) 6 / Warlock (Fiend) 14
* **Species:** Goliath (Hill Giant) o Tiefling Infernal (Dote de Origen: *Alert* o *Savage Attacker*)
* **Stats (Point Buy 2024 / Trasfondo):**
  * **FUER (STR):** 20 (+5)
  * **DES (DEX):** 14 (+2)
  * **CON:** 14 (+2)
  * **INT:** 8 (-1)
  * **SAB (WIS):** 8 (-1)
  * **CAR (CHA):** 14 (+2)

* **Enlaces de Documentación:**
  * [Bastión y Tiempo Muerto](./bastion and downtime.md)
  * [Lista de Conjuros y Recursos](./spell list.md)
  * [Objetos a Obtener](./item list to obtain.md)
  * [Hoja de Ruta 1-20](./roadmap.md)
  * [Inventario Actual](./actual inventory list.md)

---

## 1. Gestión de Recursos y Reglas de Inventario (2024 Ruleset)

* **Maestría de Armas (Weapon Masteries 2024):**
  * **Glaive (*Graze*):** Si fallas un ataque con el Glaive, infliges daño igual a tu modificador de Fuerza (+5) automáticamente.
  * **Halberd (*Cleave*):** Si impactas a un enemigo, puedes realizar un ataque adicional contra otra criatura adyacente una vez por turno.
* **Economía de Furia 2024:**
  * En D&D 2024, la Furia dura 10 minutos y puede mantenerse activa si realizas una tirada de ataque, fuerzas una tirada de salvación a un enemigo o gastas una Acción Adicional para extenderla.
  * Los conjuros sin concentración (*Armor of Agathys*, *Mirror Image*) lanzados antes del combate permanecen activos en Furia.

---

## 2. Action Economy & Combat Loop (2024)

* **Pre-Combate:** Lanzar *Armor of Agathys* con ranura de nivel 5 (25 THP + 25 frío por golpe recibido).
* **Turno 1:**
  * **Bonus Action:** Entrar en Furia.
  * **Action:** 2 Ataques con Glaive con *Reckless Attack* (Ventaja permanente). Si fallas, aplicas *Graze* (+5 daño garantizado).
  * **Impacto 1:** Activa *Divine Fury* ($1\text{d}6 + 3$).
* **Turno 2+:**
  * **Action:** Ataques con Glaive con Ventaja temeraria.
  * **Bonus Action:** Ataque con el extremo del asta (*Polearm Master*).
  * **Reaction:** Ataque de oportunidad cuando un enemigo entra a 10 ft (*Polearm Master*).

---

## 3. Mathematical Engine (2024)

$$\text{DPR Sostenido (2024)} = 2 \times (1\text{d}10 + 5_{\text{STR}} + 3_{\text{Item}} + 2_{\text{Rage}} + 1\text{d}6 + 3_{\text{Zealot}}) + (1\text{d}4 + 10) = \mathbf{72.5 \text{ DPR}} + 50\text{ Frío/Espinas}$$

$$\text{EHP Físico Efectivo} = \frac{\text{HP Real } (185) + 25_{\text{Agathys}}}{0.50} = \mathbf{420 \text{ EHP}}$$
