# Guía de Personaje — Barbarian from Hell (Edición 2024 / 5.5e)

## General Data

System Standard: D&D 5th Edition (2024 Ruleset - 5.5e)

Character Level: 20 (Total)

Class Split: Barbarian (Zealot) 6 / Warlock (Fiend) 14

Species: Goliath (o Humano) [Dote de Origen: Alerta o Cazador Salvaje / Savage Attacker]

Stats (Point Buy 2024):

- **FUER (STR):** 20 (15 base + 2 Especie + 1 GWM + 1 PAM + 1 ASI) [[Atributo primario de ataque y daño]]
- **DES (DEX):** 14 (14 base) [[CA óptima con Armadura Media (Half-Plate)]]
- **CON:** 14 (14 base) [[Reserva de vida base amplificada por Furia]]
- **INT:** 8 (-1) [[Atributo de descarte]]
- **SAB (WIS):** 8 (-1) [[Atributo de descarte]]
- **CAR (CHA):** 14 (13 base + 1 Dote/ASI) [[CD de conjuros de Brujo y escalado de bendiciones]]

Actual Item List: ./actual inventory list.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Roadmap de Progresión 2024: ./roadmap 2024.md

Combat Role: Frontline Thorns Tank / Heavy Striker / Guaranteed Precision Striker (Castiga a los enemigos cuerpo a cuerpo mediante el daño reflejado de *Armor of Agathys* en Furia mientras inflige daño físico masivo sin penalización de tirada gracias a *Great Weapon Master 2024* y la maestría *Graze*).

---

## 1. Resource Management & Inventory Rules (2024 Ruleset)

- **Maestría de Armas (Weapon Masteries 2024):**
  - **Glaive (Graze):** Si fallas un ataque con tu Glaive, infliges **daño de Fuerza plano igual a tu modificador de Fuerza (+5)**. ¡Garantiza daño en cada turno incluso contra CA extrema!
  - **Halberd (Cleave):** Una vez por turno, puedes hacer un ataque de daño base a una criatura adyacente.
  - **Pike (Push):** Empuja a la víctima 10 pies sin tirada de salvación al impactar.

- **Economía de Espacios / Castigos en Furia 2024:**
  - **Armor of Agathys (2024):** Se puede lanzar como Acción o Acción Adicional antes de la Furia. Otorga 25 Temp HP a nivel 5.
  - **Eldritch Smite (2024):** Invocación Eldritch (Warlock 5+). No es un conjuro y **se puede usar en Furia**. Consume una ranura de nivel 5 para infligir $+5\text{d}8$ de daño de fuerza y derribar al objetivo propenso (*Prone*).

---

## 2. Action Economy & Combat Loop (2024)

- **Preparación (Pre-Combate):**
  - Lanzar *Armor of Agathys* (Ranura de Nivel 5 de Warlock para obtener 25 Temp HP).
- **Action:**
  - Realizar la acción de ataque con **Reckless Attack 2024** (Ventaja en todos tus ataques de Fuerza).
  - **Ataque 1:** Tajo de Glaive con ventaja: $1\text{d}10 + 5 (\text{STR}) + 2 (\text{Rage}) + 6 (\text{GWM Competencia}) + 1\text{d}6 + 3 (\text{Zealot Divine Fury 2024}) + 3 (\text{Magia}) = 1\text{d}10 + 1\text{d}6 + 19$.
  - **Ataque 2:** Tajo de Glaive con ventaja: $1\text{d}10 + 5 (\text{STR}) + 2 (\text{Rage}) + 6 (\text{GWM Competencia}) + 3 (\text{Magia}) = 1\text{d}10 + 16$.
  - **En caso de fallo (Graze):** Infliges 5 de daño de Fuerza automático.
- **Bonus Action:**
  - **Turno 1:** Entrar en **Furia (Rage 2024)** o usar la curación de *Warrior of the Gods* (4d6 de reserva).
  - **Turnos subsiguientes:** Ataque adicional de *Polearm Master* ($1\text{d}4 + 5 \text{ STR} + 2 \text{ Rage} + 3 = 1\text{d}4 + 10$).
- **Reaction:**
  - Ataque de oportunidad de *Polearm Master* cuando un enemigo entra en tu alcance de 10 pies.

---

## 3. The META Combo: Thorns from Hell 2024 (Armor of Agathys + Rage 2024 + Dark One's Blessing)

1. **Armor of Agathys (Nivel 5):** Otorga 25 Temp HP. Cada enemigo que te golpee melec sufre **25 de daño de frío plano** sin salvación mientras conserves al menos 1 Temp HP.
2. **Furia (Rage 2024):** Reduce el daño físico a la mitad. Tus 25 Temp HP equivalen a **50 HP efectivos**.
3. **Dark One's Blessing (Fiend 2024):** Cuando tú o un aliado cercano reducen a un enemigo a 0 HP, ganas $14 (\text{Nivel Warlock}) + 2 (\text{CHA}) = 16$ Temp HP.

🧮 Mathematical Engine 2024 (Nivel 20 contra CA 18):

$$\text{Probabilidad de Impacto con Reckless Attack 2024} = 87.75\%$$

$$\text{Daño Ataque 1 (Zealot)} = 1\text{d}10 + 5 (\text{STR}) + 2 (\text{Rage}) + 6 (\text{GWM}) + 1\text{d}6 + 3 (\text{Zealot}) + 3 = 1\text{d}10 + 1\text{d}6 + 19 = \mathbf{28.0 \text{ daño medio}}$$

$$\text{Daño Ataque 2} = 1\text{d}10 + 5 (\text{STR}) + 2 (\text{Rage}) + 6 (\text{GWM}) + 3 = 1\text{d}10 + 16 = \mathbf{24.5 \text{ daño medio}}$$

$$\text{Daño Ataque Bonus (PAM)} = 1\text{d}4 + 5 (\text{STR}) + 2 (\text{Rage}) + 3 = 1\text{d}4 + 10 = \mathbf{12.5 \text{ daño medio}}$$

$$\text{Seguro de Fallo (Graze Mastery)} = 0.1225 \times 5 = \mathbf{0.61 \text{ daño garantizado}}$$

$$\text{DPR Medio Total Sostenido (2024)} = \mathbf{54.4 \text{ daño físico/necrótico plano por turno}} + \text{Thorns de 25 de frío por cada golpe enemigo recibido}$$

---

## 4. Zealot and Fiend Subclass Features (2024 Update)

| Habilidad / Rasgo | Versión 2024 | Uso y Efecto Clave |
| :---: | :---: | :--- |
| **Divine Fury (Zealot 3)** | 2024 | $1\text{d}6 + 3$ de daño necrótico/radiante adicional en el 1.er golpe de cada turno. |
| **Warrior of the Gods (Zealot 3)** | 2024 | Reserva de d6s (4d6) para curarte a ti mismo en Furia como Acción Adicional. |
| **GWM 2024 Feat** | 2024 | Suma tu Bono de Competencia (+6 a Nivel 20) al daño sin penalizador a impactar. |
| **Weapon Mastery: Graze** | 2024 | 5 de daño de Fuerza automático cuando un ataque de Glaive falla. |
| **Hurl Through Hell (Fiend 14)** | 2024 | $8\text{d}10$ de daño psíquico (reutilizable gastando ranuras de nivel 5). |
