# 💀 Archivo Técnico: Spirit Caller — El Señor del Osario

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (Backline Aerial Summoner & Undead Swarm Master)**  
**Reglas:** D&D 5.ª Edición (2014 & 2024 Compatible)  
**Nivel Total:** 20  
**Clase:** Wizard (School of Necromancy) 20  
**Especie:** Reborn (*Knowledge from a Past Life*, *Deathless Nature*: ventaja contra veneno/enfermedades, sin necesidad de dormir ni comer)  
**Trasfondo:** Acólito / Erudito Funerario de la Muerte  

---

## 📊 Estadísticas Base y Modificadores (Nivel 20)

| Característica | Puntuación | Modificador | Notas de Optimización |
| :--- | :---: | :---: | :--- |
| **Fuerza (STR)** | 8 | -1 | Dump stat táctico. |
| **Destreza (DEX)** | 14 | +2 | Límite óptimo para aprovechar *Mage Armor* (CA 15 base). |
| **Constitución (CON)** | 16 | +3 | 15 base + 1 dote (*Resilient: CON*). Competencia en salvaciones y concentración. |
| **Inteligencia (INT)** | 20 | +5 | 15 base + 2 racial + 1 *War Caster* o ASI + 2 ASI. Primaria absoluta para CD 22 y daño. |
| **Sabiduría (WIS)** | 12 | +1 | Salvaciones de percepción y voluntad. |
| **Carisma (CHA)** | 8 | -1 | Dump stat. |

* **Puntos de Golpe (HP Base):** $6 + (19 \times 4) + (20 \times 3) = \mathbf{142 \text{ HP Base}}$
* **Clase de Armadura Pasiva (AC):** $13 \text{ (Mage Armor)} + 2 \text{ (DEX)} = \mathbf{15 \text{ CA Pasiva}}$ (Con *Robe of the Archmagi* y *Staff of the Magi*: $\mathbf{19 \text{ CA}}$; con conjuro *Shield* a voluntad: $\mathbf{24 \text{ CA Reactiva Ilimitada}}$).
* **Salvaciones con Competencia:** Inteligencia ($+11$), Sabiduría ($+7$), Constitución ($+9$ vía *Resilient: CON*).
* **Movilidad Táctica:** Vuelo constante a 50 pies sin sintonización gracias a la *Broom of Flying*.

---

## 🔗 Navegación y Registros de la Cripta

* **Inventario Actual y Equipo:** [actual inventory list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/spirit%20caller/actual%20inventory%20list.md)
* **Bastión del Osario Susurrante:** [bastion and downtime.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/spirit%20caller/bastion%20and%20downtime.md)
* **Grimorio de Sombras y Matriz de Conjuros:** [spell list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/spirit%20caller/spell%20list.md)
* **Arsenal y Adquisiciones Tácticas:** [item list to obtain.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/spirit%20caller/item%20list%20to%20obtain.md)
* **Hoja de Ruta (Niveles 1-20):** [roadmap.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/spirit%20caller/roadmap.md)
* **Manual de Conversión 2024:** [character guide 2024.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/spirit%20caller/character%20guide%202024.md)

---

## 🧮 Motor Matemático del Archivero (LaTeX Math Engine)

### 1. Desglose del Ejército Sostenible de No-Muertos (Nivel 20)
Gracias al rasgo *Undead Thralls* (nivel 6), cualquier siervo alzado suma tu nivel de Mago a sus PG máximos ($+20 \text{ HP}$) y tu bonificador de competencia a sus tiradas de daño de arma ($\mathbf{+6 \text{ Daño}}$):

| Unidad / Rango | Origen de Control | Ficha / Stat Block Base | Cantidad | Puntos de Golpe (PG) | Tipo de Daño Principal |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **Mago Comandante (Tú)** | Personaje Principal | Mago Nivel 20 | 1 | $142 \text{ PG}$ | Mágico variado (*Wish*, Control) |
| **Simulacro (Simulacrum)** | Conjuro Nivel 7 | Duplicado de Mago Nivel 20 | 1 | $142 \text{ PG}$ | Mágico variado |
| **Titán: Nightwalker** | Command Undead (Tú) | Nightwalker (CR 20) | 1 | $297 \text{ PG}$ | Necrótico (Aniquilación) |
| **Teniente: Mummy Lord** | Command Undead (Simulacro) | Mummy Lord (CR 15) | 1 | $97 \text{ PG}$ | Necrótico / Contundente + Maldición |
| **Horda del Señor de las Momias** | *Animate Dead* (Mummy Lord) | Esqueletos estándar | 8 | $8 \times 13 = 104 \text{ PG}$ | Perforante |
| **Guardia Real (Ghasts)** | *Create Undead* (Nivel 8 x2) | Ghast (CR 2) | 10 | $10 \times 36 = 360 \text{ PG}$ | Cortante (Parálisis) + Hedor |
| **Arqueros Esqueleto (Élite)** | *Animate Dead* (Tú + Simulacro) | Skeleton (+Undead Thralls) | 32 | $32 \times 33 = 1056 \text{ PG}$ | Perforante ($1\text{d}6 + 8$) |
| **Espíritus de No-Muerto** | *Summon Undead* (Nivel 9 + 6) | Spirit of Undead (Putrid) | 2 | $110 + 80 = 190 \text{ PG}$ | Necrótico + Veneno/Parálisis |
| **RESUMEN TOTAL** | **Presupuesto Sostenible** | — | **55 Unidades** | **2,388 PG Totales** | **Aura Necrótica Inofensiva** |

### 2. Salva Balística de los 32 Arqueros Esqueleto
Cada esqueleto empuña un arco corto (+4 a impactar base). Gracias a *Undead Thralls*, su daño por flecha es:

$$\text{Daño por Flecha} = 1\text{d}6 + 2 \text{ (DES)} + 6 \text{ (Prof)} = 3.5 + 8 = \mathbf{11.5 \text{ Daño Promedio}}$$

Frente a una CA enemiga de $19$, la tirada mínima requerida es un 15 ($\mathbb{P}_{\text{impacto}} = 0.30$, $\mathbb{P}_{\text{crit}} = 0.05$):

$$\mathbb{E}[\text{Daño por Esqueleto}] = (0.30 \times 11.5) + (0.05 \times 3.5) = 3.45 + 0.175 = \mathbf{3.625}$$
$$\text{DPR Salva de 32 Esqueletos} = 32 \times 3.625 = \mathbf{116.0 \text{ Daño Perforante Plano}}$$

Si el objetivo está derribado o apresado (*Web*, *Grease*, *Sleet Storm*), los arqueros disparan con **Ventaja** ($\mathbb{P}_{\text{impacto}} = 0.51$, $\mathbb{P}_{\text{crit}} = 0.0975$):

$$\mathbb{E}[\text{Daño con Ventaja}] = (0.51 \times 11.5) + (0.0975 \times 3.5) = 5.865 + 0.341 = \mathbf{6.206}$$
$$\text{DPR Salva con Ventaja} = 32 \times 6.206 = \mathbf{198.6 \text{ Daño Perforante Directo}}$$

### 3. Aporte Ofensivo del Nightwalker + Mummy Lord + Mago
* **Nightwalker (2 Ataques):** $+12$ a impactar, $5\text{d}6 + 6 + 4\text{d}8 \text{ necrótico} = 41.5$ de daño por ataque $\implies \mathbf{83.0 \text{ DPR}}$.
* **Summon Undead (Putrid Nivel 9):** 4 ataques con $+11$ a impactar, $1\text{d}8 + 3 + 9 = 16.5$ por impacto $\implies \mathbf{66.0 \text{ DPR}}$ con chequeo de parálisis.
* **Toll the Dead (Cantrip Mago Nivel 20):** $4\text{d}12 = \mathbf{26.0 \text{ Daño Necrótico}}$.

$$\text{DPR Total del Ejército Sostenible} = 198.6 \text{ (Arqueros)} + 83.0 \text{ (Nightwalker)} + 66.0 \text{ (Espíritu)} + 26.0 = \mathbf{373.6 \text{ DPR Continuo}}$$

### 4. Puntos de Golpe Efectivos y Blindaje (EHP)
* **Colchón de Carne y Hueso:** El enemigo debe atravesar **2,388 PG** de siervos antes de poder tocar al Mago.
* **Defensa Personal Activa:** Flotando a 30-50 pies en la *Broom of Flying*, inmune a armas de melé.
* **Maestría de Conjuros (*Spell Mastery*):** Con *Shield* y *Misty Step* ilimitados a voluntad, la CA reactiva es de **24 CA** en todos los asaltos sin gastar ranuras de conjuro.
* **Inmortalidad por Clones (*Clone*):** 3 clones almacenados en frascos en el Bastión garantizan que si el Mago es aniquilado, su alma despierta instantáneamente en su base con equipo completo.

---

## ⚔️ Bucle Táctico y Economía de Acciones (Action Loop)

```
        [Ronda 0: Pre-Combate Aéreo]
   Montar en Broom of Flying (vuelo 50 ft) + Simulacrum activo
   Mind Blank (24h) + Mage Armor (a voluntad)
                    │
                    ▼
        [Ronda 1: Control y Descarga]
   Acción: Wall of Force / Forcecage (aislar al jefe de sus esbirros)
   Movimiento: Ascenso a 40 pies de altura
   Bonus Action: Ordenar a los 32 arqueros y Nightwalker concentrar fuego
                    │
                    ▼
      [Ronda 2+: Ametralladora Ósea]
   Acción: Toll the Dead (4d12) o Disintegrate / Finger of Death
   Bonus Action: Misty Step a voluntad (para reposición aérea instantánea)
   Reacción: Shield a voluntad (+5 CA = 24 CA) o Counterspell
```

* **Acción (Action):** Conjuros de control sin salvación (*Wall of Force*, *Forcecage*, *Maze*) o daño de ejecución (*Toll the Dead*, *Finger of Death*, *Disintegrate*).
* **Acción Adicional (Bonus Action):** Comandar mentalmente a las 55 criaturas del ejército no-muerto, o lanzar *Misty Step* **a voluntad sin coste** vía *Spell Mastery*.
* **Reacción (Reaction):** *Shield* **a voluntad sin consumir ranuras** para alcanzar CA 24, o *Counterspell* (gratis 1 por descanso corto vía *Signature Spells*).

---

## 🏷️ Matriz de Evaluación Táctica del Archivero

| Capacidad Táctica | Nivel | Justificación del Archivero |
| :--- | :---: | :--- |
| **Daño Monotarget del Ejército** | 🔵 | $>370$ DPR continuo combinando arqueros, Nightwalker y convocaciones sin quemar ranuras. |
| **Reserva Colectiva de EHP** | 🔵 | 2,388 PG de carne de cañón no muerta inmune a venenos y efectos mentales. |
| **Defensa Personal Inexpugnable** | 🔵 | Vuelo aéreo permanente a 50 ft + *Shield* a voluntad (CA 24) + *Misty Step* a voluntad. |
| **Inmortalidad Estratégica** | 🔵 | Cámaras de *Clone* en el Bastión; muerte permanente eliminada de la ecuación. |
| **Control de Campo de Batalla** | 🔵 | Acceso completo a la lista de conjuros de Mago: *Forcecage*, *Wall of Force*, *Wish*. |
| **Logística de Despliegue** | 🟢 | Círculos de teletransporte de Bastión y *Demiplane* para transportar al ejército oculto. |

---

## 📜 Reglas de Casa (House Rules) y Ajustes de Mesa

1. **Aura del Nightwalker (Annihilation Aura):** Solo daña a criaturas vivas; tus no-muertos y tu condición de Reborn son 100% inmunes al daño necrótico del Titán aliado.
2. **Control Doble de Titanes mediante Simulacro:** Cumplimiento oficial de reglas: el *Simulacrum* es una criatura independiente con sus propias acciones y puede usar *Command Undead* sobre un segundo no-muerto de alto nivel (*Mummy Lord* CR 15).
3. **Anillo del Pastor de Almas (Soul Shepherd Ring):** Permite materializar siervos esqueléticos empleando ectoplasma del Plano de las Sombras si la mesa restringe la disponibilidad de cadáveres físicos en el entorno.