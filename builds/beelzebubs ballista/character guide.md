# 🏹 Archivo Técnico: Beelzebub's Ballista — El Cañón del Sol Negro

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (2024 Triple Charisma Ballista Sniper & Extreme Repulsor)**  
**Reglas:** D&D 5.ª Edición (2024 Ruleset - 5.5e)  
**Nivel Total:** 20  
**División de Clases:** Warlock (The Celestial) 19 / Fighter 1  
**Especie:** Tiefling (*Fiendish Resilience*, *Thaumaturgy*, resistencia al fuego)  
**Trasfondo:** Músico de Corte / Erudito Celestial (*Dote de Origen: Musician*)  

---

## 📊 Estadísticas Base y Modificadores (Nivel 20)

| Característica | Puntuación | Modificador | Notas de Optimización |
| :--- | :---: | :---: | :--- |
| **Fuerza (STR)** | 8 | -1 | Dump stat táctico. |
| **Destreza (DEX)** | 14 | +2 | Límite óptimo para armadura media o movilidad con armaduras ligeras. |
| **Constitución (CON)** | 14 | +2 | Puntos de golpe y concentración en conjuros (*Hex*, *Spirit Guardians*). |
| **Inteligencia (INT)** | 10 | +0 | Conocimiento arcano neutral. |
| **Sabiduría (WIS)** | 10 | +0 | Salvaciones y percepción básica. |
| **Carisma (CHA)** | 20 | +5 | 15 base + 2 racial + 1 dote (*Fey Touched*) + 2 ASI. Primaria absoluta que escala el daño $\times 3$. |

* **Puntos de Golpe (HP Base):** $10 \text{ (Fighter)} + (19 \times 5) + (20 \times 2) = \mathbf{145 \text{ HP Base}}$
* **Clase de Armadura Pasiva (AC):** $18 \text{ (Plate Armor)} + 3 \text{ (Mejora mágica)} = \mathbf{21 \text{ CA Pasiva}}$ (Con conjuro *Shield*: $\mathbf{26 \text{ CA Reactiva}}$).
* **Salvaciones con Competencia:** Fuerza ($+5$), Constitución ($+8$) por iniciar como Guerrero a Nivel 1.
* **Compañero de Apoyo:** Familiar Imp invisible que otorga **Ventaja constante** en el ataque mediante la acción de *Help* (Ayuda).

---

## 🔗 Navegación y Registros de la Catedral

* **Inventario Actual y Equipo:** [actual inventory list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/beelzebubs%20ballista/actual%20inventory%20list.md)
* **Bastión de la Catedral del Sol Negro:** [bastion and downtime.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/beelzebubs%20ballista/bastion%20and%20downtime.md)
* **Grimorio Sagrado y Matriz de Conjuros:** [spell list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/beelzebubs%20ballista/spell%20list.md)
* **Arsenal y Adquisiciones Tácticas:** [item list to obtain.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/beelzebubs%20ballista/item%20list%20to%20obtain.md)
* **Hoja de Ruta (Niveles 1-20):** [roadmap.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/beelzebubs%20ballista/roadmap.md)
* **Manual de Conversión 2024:** [character guide 2024.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/beelzebubs%20ballista/character%20guide%202024.md)

---

## 🧮 Motor Matemático del Archivero (LaTeX Math Engine)

### 1. El Combo Insignia: Multiplicador Triple de Carisma en Cantrip (*True Strike 2024*)
La actualización de reglas 2024 redefine *True Strike* y las invocaciones sobrenaturales, permitiendo una acumulación devastadora de modificadores planos:
1. **True Strike 2024 (Ataque con Carisma):** Realiza un ataque con arma utilizando Carisma (+5) para la tirada de ataque y daño, convirtiendo el daño en **Radiante**. A nivel 17+, inflige el daño del arma $+3\text{d}6$ radiante.
2. **Agonizing Blast 2024 (Universal para Cantrips):** En las reglas 2024, *Agonizing Blast* puede aplicarse a **cualquier truco de Brujo que haga daño**, sumando por segunda vez tu Carisma ($\mathbf{+5 \text{ Daño}}$).
3. **Radiant Soul (Celestial Warlock 6):** Al lanzar un conjuro que cause daño radiante o de fuego, sumas tu modificador de Carisma ($\mathbf{+5 \text{ Daño}}$) a una tirada de daño.

$$\text{Bono Plano de Carisma por Disparo} = +5 \text{ (Base)} + 5 \text{ (Agonizing Blast)} + 5 \text{ (Radiant Soul)} = \mathbf{+15.0 \text{ Daño Plano}}$$

### 2. Precisión con Ballesta Pesada y Estilo de Arquero
Con Ballesta Pesada Dragón Ascendente $+3$ y Estilo de Arquero (*Archery Fighting Style* $+2$ a impactar):

$$\text{Bono de Ataque} = +5 \text{ (CAR)} + 6 \text{ (Prof)} + 2 \text{ (Archery)} + 3 \text{ (Arma +3)} = \mathbf{+16 \text{ al Impactar}}$$

Con la acción de *Help* del Imp invisible, el ataque goza de **Ventaja**. Frente a CA 19 enemiga:

$$\mathbb{P}(\text{Acierto contra CA 19}) = 1 - (1 - 0.90)^2 = 1 - (0.10)^2 = \mathbf{0.99} \quad (99.00\%)$$
$$\mathbb{P}(\text{Crítico con Ventaja}) = 1 - (0.95)^2 = 1 - 0.9025 = \mathbf{0.0975} \quad (9.75\%)$$

### 3. Daño por Disparo Sostenido (Sin Gastar Ranuras)
Equipando una *Ascendant Dragon's Wrath Heavy Crossbow* ($+3\text{d}6$ daño elemental):

$$\text{Dados de Daño} = 1\text{d}10 \text{ (Ballesta)} + 3\text{d}6 \text{ (True Strike)} + 3\text{d}6 \text{ (Dragon's Wrath)} = 5.5 + 10.5 + 10.5 = 26.5$$
$$\text{Modificadores Planos} = 15 \text{ (Triple CAR)} + 3 \text{ (Mágico)} = +18.0$$
$$\text{Daño Base al Impactar} = 26.5 + 18.0 = \mathbf{44.5 \text{ Daño por Disparo}}$$

$$\mathbb{E}[\text{DPR Cantrip Sostenido}] = (0.99 \times 44.5) + (0.0975 \times 26.5) = 44.05 + 2.58 = \mathbf{46.63 \text{ Daño/Asalto}}$$

### 4. Bucle de Control Balístico Extremo (Repulsión y Ralentización)
Al impactar con *True Strike* (truco de Brujo con arma pesada):
* **Repelling Blast (Invocación):** Empuja al objetivo **10 pies** en línea recta.
* **Lance of Lethargy (Invocación):** Reduce la velocidad de movimiento del objetivo en **10 pies**.
* **Weapon Mastery: Push (Ballesta Pesada 2024):** Si la criatura es Grande o menor, la empuja otros **10 pies**.

$$\text{Efecto Total por Disparo} = \text{\textbf{Empuje de 20 Pies}} + \text{\textbf{Ralentizacion de 10 Pies}}$$

Cualquier monstruo con 30 pies de movimiento que intente acercarse al personaje es repelido 20 pies y ve su velocidad reducida a 20 pies, haciendo **imposible que alcance al Brujo en cuerpo a cuerpo**.

### 5. Puntos de Golpe Efectivos y Curación Divina (EHP)
* **HP Base:** $145 \text{ HP}$.
* **CA Pasiva Base:** $21$ (Plate Armor +3).
* **Resiliencia Celestial (*Celestial Resilience* — Nivel 10):** Concede **24 THP al Brujo** y **14 THP a hasta 5 aliados** tras cada descanso corto o largo ($\mathbf{+94 \text{ THP colectivos}}$).
* **Luz Sanadora (*Healing Light*):** Reserva de **20d6 dados de curación** utilizables como Acción Adicional (hasta 5d6 por asalto) que **no cuentan como conjuro lanzado**, permitiendo levantar aliados mientras se dispara *True Strike*.

---

## ⚔️ Bucle Táctico y Economía de Acciones (Action Loop)

```
        [Ronda 0: Pre-Combate Celestial]
   Foresight (8h: ventaja en todo y desventaja hostil) o Hex desplegado
   Celestial Resilience activo (+24 THP propios, +14 THP a aliados)
                    │
                    ▼
        [Ronda 1: Disparo de Cañón Pesado]
   Acción: True Strike con Ballesta Pesada (Ataque con CAR +16 con Ventaja por Imp)
   Impacto: 44.5 Daño Radiante/Perforante (con Triple Carisma +15 plano)
   Efecto: Empuja 20 ft al objetivo y reduce su velocidad en 10 ft
   Bonus Action: Hex (+1d6 necrótico) o Healing Light sobre aliado herido
                    │
                    ▼
      [Ronda 2+: Cerrojo de Artillería]
   Acción: True Strike (44.5 daño + 20 ft repulsión)
   Bonus Action: Healing Light (recupera 5d6 HP a un compañero sin gastar ranura)
   Reacción: Shield (+5 CA = 26 CA) o Hellish Rebuke (daño de fuego reactivo)
```

* **Acción (Action):** *True Strike* potenciado con Ballesta Pesada (44.5 daño radiante + 20 ft repulsión continua).
* **Acción Adicional (Bonus Action):** *Healing Light* (curación de $1\text{d}6$ a $5\text{d}6$ sin consumir ranuras ni restringir conjuros), o *Hex*.
* **Reacción (Reaction):** *Shield* (+5 CA hasta CA 26), o *Hellish Rebuke* de nivel 5 ($6\text{d}10$ fuego).

---

## 🏷️ Matriz de Evaluación Táctica del Archivero

| Capacidad Táctica | Nivel | Justificación del Archivero |
| :--- | :---: | :--- |
| **Daño Monotarget por Cantrip** | 🔵 | 46.63 DPR continuo sin gastar ninguna ranura gracias al triple modificador de Carisma (+15 plano). |
| **Control de Posicionamiento (Kiting)** | 🔵 | Empuja 20 pies y ralentiza 10 pies en cada impacto; neutraliza jefes de cuerpo a cuerpo. |
| **Soporte Médico Desacoplado** | 🔵 | *Healing Light* (20d6) cura como acción adicional sin interferir en el lanzamiento de conjuros. |
| **Buffer Preventivo de Escuadrón** | 🟢 | *Celestial Resilience* aporta 94 THP al grupo en cada descanso corto. |
| **Resiliencia Defensiva (EHP)** | 🟢 | CA 21/26 reactiva, salvaciones de CON nativas, 24 THP pasivos y *Foresight*. |
| **Poder Místico de Alto Rango** | 🔵 | Acceso a *Foresight* (9.º nivel), *Crown of Stars*, *Forcecage* y ranuras de pacto de nivel 5. |

---

## 📜 Reglas de Casa (House Rules) y Ajustes de Mesa

1. **Ballesta Foco Universal:** La ballesta pesada actúa como foco arcano unificado de Brujo, permitiendo la ejecución de componentes somáticos sin necesidad de manos libres adicionales.
2. **Aplicación de Agonizing Blast a True Strike:** Cumplimiento oficial de las reglas 2024: *Agonizing Blast* se vincula a *True Strike* al seleccionarlo como truco de daño de Warlock.
3. **Triple Acumulación de Carisma:** La suma de modificador base de *True Strike* (+5), *Agonizing Blast* (+5) y *Radiant Soul* (+5) opera de forma legal e independiente según las directrices de bonificadores nombrados de 5.5e.