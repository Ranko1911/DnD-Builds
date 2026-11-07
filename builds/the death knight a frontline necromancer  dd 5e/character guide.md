# ⚔️ Archivo Técnico: Death Knight — El Campeón del Trono Helado

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (Frontline Gish Tank, Undead Army Commander & Glacial Controller)**  
**Reglas:** D&D 5.ª Edición (2014 & 2024 Compatible)  
**Nivel Total:** 20  
**División de Clases:** Artificer (Battle Smith) 3 / Wizard (School of Necromancy) 17  
**Especie:** Reborn (*Ancestral Legacy*, *Deathless Nature*: ventaja contra veneno/enfermedades, sin necesidad de dormir ni comer)  
**Trasfondo:** Caballero Caído / Veterano de la Legión de Hielo  

---

## 📊 Estadísticas Base y Modificadores (Nivel 20)

| Característica | Puntuación | Modificador | Notas de Optimización |
| :--- | :---: | :---: | :--- |
| **Fuerza (STR)** | 10 | +0 | Carga neutral (los ataques con armas mágicas usan Inteligencia vía *Battle Ready*). |
| **Destreza (DEX)** | 14 | +2 | Límite óptimo para Armadura Media o movilidad pesada. |
| **Constitución (CON)** | 16 | +3 | 15 base + 1 dote (*Resilient/Tough*). Competencia en salvaciones por clase inicial de Artífice. |
| **Inteligencia (INT)** | 20 | +5 | 15 base + 2 racial + 1 *Fey Touched* + 2 ASI. Primaria de ataque, daño, CA y conjuros. |
| **Sabiduría (WIS)** | 10 | +0 | Neutral para salvaciones de percepción y voluntad. |
| **Carisma (CHA)** | 8 | -1 | Dump stat táctico. |

* **Puntos de Golpe (HP Base):** $8 + (2 \times 5) + (17 \times 4) + (20 \times 3) + 40 \text{ (Tough)} = \mathbf{186 \text{ HP Totales}}$
* **Clase de Armadura Pasiva (AC):** $18 \text{ (Plate Armor)} + 3 \text{ (Mejora mágica)} = \mathbf{21 \text{ CA Pasiva}}$ (Con conjuro *Shield*: $\mathbf{26 \text{ CA Reactiva}}$).
* **Salvaciones con Competencia:** Constitución ($+9$), Inteligencia ($+11$).
* **Defensa de Escudo de Boris:** Boris the Bone Boar (*Steel Defender*) impone **Desventaja reactiva** al ataque de cualquier criatura a 5 pies.

---

## 🔗 Navegación y Registros de la Cripta Helada

* **Inventario Actual y Equipo:** [actual inventory list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/the%20death%20knight%20a%20frontline%20necromancer%20%20dd%205e/actual%20inventory%20list.md)
* **Bastión de la Cripta de la Espada Helada:** [bastion and downtime.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/the%20death%20knight%20a%20frontline%20necromancer%20%20dd%205e/bastion%20and%20downtime.md)
* **Grimorio de Escarcha y Matriz de Conjuros:** [spell list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/the%20death%20knight%20a%20frontline%20necromancer%20%20dd%205e/spell%20list.md)
* **Arsenal y Adquisiciones Tácticas:** [item list to obtain.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/the%20death%20knight%20a%20frontline%20necromancer%20%20dd%205e/item%20list%20to%20obtain.md)
* **Hoja de Ruta (Niveles 1-20):** [roadmap.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/the%20death%20knight%20a%20frontline%20necromancer%20%20dd%205e/roadmap.md)
* **Manual de Conversión 2024:** [character guide 2024.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/the%20death%20knight%20a%20frontline%20necromancer%20%20dd%205e/character%20guide%202024.md)

---

## 🧮 Motor Matemático del Archivero (LaTeX Math Engine)

### 1. Ataque en Vanguardia: Espadón con Inteligencia (*Battle Ready* + *Booming Blade*)
Gracias a *Battle Ready* (Battle Smith 3), el Caballero de la Muerte empuña un Espadón $+3$ utilizando **Inteligencia (+5)** para impactar y para el daño:

$$\text{Bono de Ataque} = +5 \text{ (INT)} + 6 \text{ (Prof)} + 3 \text{ (Espadón +3)} = \mathbf{+14 \text{ al Impactar}}$$

Al impactar con *Booming Blade* a nivel 20:

$$\text{Daño Base del Espadón} = 2\text{d}6 + 5 \text{ (INT)} + 3 \text{ (Mágico)} = 7.0 + 8.0 = 15.0$$
$$\text{Daño de Booming Blade al Impactar} = 3\text{d}8 = \mathbf{13.5 \text{ Daño de Trueno}}$$
$$\text{Daño Total de Impacto Melee} = 15.0 + 13.5 = \mathbf{28.5 \text{ Daño Directo}}$$
$$\text{Rider si el Objetivo se Mueve} = 4\text{d}8 = \mathbf{18.0 \text{ Daño Adicional}}$$

### 2. Aporte Ofensivo del Defensor de Acero (Boris the Bone Boar)
Boris actúa inmediatamente después de tu turno y ataca como Acción Adicional propia:

$$\text{Mordisco de Fuerza de Boris} = 1\text{d}8 + 2 \text{ (Fuerza)} + 6 \text{ (Prof)} = 4.5 + 8 = \mathbf{12.5 \text{ Daño de Fuerza}}$$

### 3. Salva del Pelotón de 16 Arqueros Esqueleto (+Undead Thralls)
Con *Undead Thralls* (Nivel 6 de Mago), tus 16 esqueletos suman $+17 \text{ HP}$ y $+6 \text{ al daño de flecha}$:

$$\text{Daño por Flecha} = 1\text{d}6 + 2 \text{ (DES)} + 6 \text{ (Prof)} = 3.5 + 8 = \mathbf{11.5 \text{ Daño Promedio}}$$

Con el objetivo atrapado en la telaraña de hielo (*Web* glaciar, tirando con **Ventaja** frente a CA 19 enemiga, $\mathbb{P}_{\text{impacto}} = 0.51$, $\mathbb{P}_{\text{crit}} = 0.0975$):

$$\mathbb{E}[\text{Salva de 16 Esqueletos}] = 16 \times [(0.51 \times 11.5) + (0.0975 \times 3.5)] = 16 \times 6.206 = \mathbf{99.30 \text{ Daño Perforante}}$$

### 4. Titán Dominado: Nightwalker (CR 20 vía *Command Undead*)
El rasgo *Command Undead* (Nivel 14 de Nigromancia) otorga control permanente sobre una abominación no-muerta colosal:
* **Nightwalker (2 Ataques con $+12$):** $5\text{d}6 + 6 + 4\text{d}8 \text{ necrótico} = 41.5 \text{ cada uno} \implies \mathbf{83.0 \text{ Daño Necrótico Sustentado}}$.

$$\text{DPR Frontline Total Sostenido} = 28.5 \text{ (Espadón)} + 12.5 \text{ (Boris)} + 99.30 \text{ (Arqueros)} + 83.0 \text{ (Nightwalker)} = \mathbf{223.30 \text{ DPR Combinado}}$$

### 5. Puntos de Golpe Efectivos y Muro de Hueso (EHP)
* **HP Base Propio:** $186 \text{ HP}$ (con dote *Tough*).
* **Pool de Absorción de Siervos:** 
  * Boris the Bone Boar: $40 \text{ HP}$
  * 16 Esqueletos élite ($16 \times 30 = 480 \text{ HP}$)
  * Titán Nightwalker: $297 \text{ HP}$
  * **Reserva Total de Carne y Hueso:** $\mathbf{817 \text{ PG Protegidos}}$ antes de que el enemigo pueda concentrar ataques en el Mago.
* **CA Pasiva Base:** $21$ (Plate Armor +3).
* **CA Reactiva con *Shield*:** $\mathbf{26 \text{ CA}}$.
* **Deflect Attack (Boris):** Si un enemigo a 5 pies te ataca, Boris impone **Desventaja** a ese ataque como reacción.

---

## ⚔️ Bucle Táctico y Economía de Acciones (Action Loop)

```
        [Ronda 0: Pre-Combate de Vanguardia]
   Phantom Steed (100 ft de velocidad) + Invocación de 16 Esqueletos
   Plate Armor +3 equipada + Boris the Bone Boar desplegado a tu flanco
                    │
                    ▼
         [Ronda 1: Bloqueo de Escarcha]
   Acción: Web Glaciar (área de 20 ft con escarcha que inmoviliza y otorga Ventaja)
   Bonus Action: Boris the Bone Boar embiste al jefe y lo derriba
   Movimiento: Carga a lomos del corcel espectral a melé
                    │
                    ▼
        [Ronda 2+: Golpe de Guadaña]
   Acción: Booming Blade con Espadón de Inteligencia (+14 al impactar, 28.5 daño)
   Bonus Action: Ordenar a los 16 arqueros y Nightwalker descargar fuego
   Reacción: Shield (+5 CA = 26 CA) o Deflect Attack de Boris (impone Desventaja)
```

* **Acción (Action):** Ataque con Espadón canalizado con Inteligencia + *Booming Blade*, o conjuro de muerte (*Wish*, *Finger of Death*, *Cone of Cold*).
* **Acción Adicional (Bonus Action):** Comandar el ataque de Boris the Bone Boar y de la horda de arqueros esqueleto, o teletransporte con *Misty Step*.
* **Reacción (Reaction):** *Shield* (+5 CA hasta CA 26), *Absorb Elements* (resistencia elemental), o *Silvery Barbs*.

---

## 🏷️ Matriz de Evaluación Táctica del Archivero

| Capacidad Táctica | Nivel | Justificación del Archivero |
| :--- | :---: | :--- |
| **Daño Híbrido Melee + Horda** | 🔵 | 223.30 DPR continuo combinando espadón con INT, *Booming Blade*, Boris y Nightwalker. |
| **Resistencia en Vanguardia (EHP)** | 🔵 | CA 26 reactiva, salvaciones de CON nativas, 186 HP y 817 PG de colchón no-muerto. |
| **Monopolio de Inteligencia (SAD)** | 🔵 | Ataca, daña, conjura y calcula iniciativa empleando exclusivamente **Inteligencia (+5)**. |
| **Control de Campo y Glaciar** | 🟢 | Inmovilización con *Web* de escarcha, teletransportes tácticos y control del *Nightwalker*. |
| **Sostenibilidad y Recuperación** | 🟢 | *Grim Harvest* sana al Caballero cada vez que elimina enemigos con conjuros de nigromancia. |
| **Inmortalidad y Replicación** | 🔵 | Acceso a *Wish*, *Simulacrum* y *Clone* como Mago de 17.º nivel. |

---

## 📜 Reglas de Casa (House Rules) y Ajustes de Mesa

1. **Foco Universal de Batalla:** El espadón mágico infusionado sirve como foco arcano unificado tanto para conjuros de Artífice como de Mago sin requerir una mano libre adicional.
2. **Nivel de Lanzador Multiclase:** Artificer 3 (redondeado hacia arriba = 2 niveles) + Wizard 17 = **Nivel 19 de lanzador de conjuros**, otorgando acceso a la ranura de 9.º nivel y conjuración de *Wish*.
3. **Resistencia del Reborn en el Frente:** La condición de Reborn confiere inmunidad al veneno y ventajas frente a enfermedades, permitiendo al Caballero luchar impertérrito en nubes de *Cloudkill* generadas por sí mismo.