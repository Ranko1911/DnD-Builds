# 🎼 Archivo Técnico: The Conductor — El Director de Batalla y Señor de la Reacción

**Clasificación del Archivero:** 🔵 **Build Roto / META Dominante (Full Tactical Support, Reaction Enabler & Battlefield Puppetmaster)**  
**Reglas:** D&D 5.ª Edición (2014 & 2024 Compatible)  
**Nivel Total:** 20  
**División de Clases:** Cleric (Order Domain) 1 / Bard (College of Glamour) 19  
**Especie:** Hobgoblin (*Monsters of the Multiverse* — *Fey Gift*, *Fortune from the Many*)  
**Trasfondo:** Entretenedor / Virtuoso Militar de la Legión  

---

## 📊 Estadísticas Base y Modificadores (Nivel 20)

| Característica | Puntuación | Modificador | Notas de Optimización |
| :--- | :---: | :---: | :--- |
| **Fuerza (STR)** | 8 | -1 | Dump stat táctico. |
| **Destreza (DEX)** | 14 | +2 | Límite óptimo para aprovechar la Armadura Media (*Half-Plate*). |
| **Constitución (CON)** | 16 | +3 | 15 base + 1 dote (*Resilient: CON* o ASI). Blindaje de concentración. |
| **Inteligencia (INT)** | 8 | -1 | Dump stat. |
| **Sabiduría (WIS)** | 13 | +1 | Requisito de multiclaseo de Clérigo; base para conjuros utilitarios. |
| **Carisma (CHA)** | 20 | +5 | 15 base + 2 racial + 1 *Fey Touched* + 2 ASI. Máxima CD e Inspiraciones. |

* **Puntos de Golpe (HP Base):** $8 + (19 \times 5) + (20 \times 3) = \mathbf{163 \text{ HP Base}}$
* **Clase de Armadura Pasiva (AC):** $15 \text{ (Half-Plate)} + 2 \text{ (DEX)} + 2 \text{ (Sentinel Shield)} = \mathbf{19 \text{ CA Base}}$ (Con *Half-Plate +3* y *Shield +3*: $\mathbf{25 \text{ CA Pasiva}}$).
* **Salvaciones con Competencia:** Destreza ($+8$), Carisma ($+11$) y Constitución ($+9$ vía dote/resilient).
* **Percepción Pasiva e Iniciativa:** Ventaja permanente en Iniciativa y Percepción Pasiva gracias a *Sentinel Shield*.

---

## 🔗 Navegación y Registros del Conservatorio

* **Inventario Actual y Equipo:** [actual inventory list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/the%20conductor%20a%20full%20support%20build%20%20dd%205e/actual%20inventory%20list.md)
* **Bastión Sinfónico y Teatros:** [bastion and downtime.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/the%20conductor%20a%20full%20support%20build%20%20dd%205e/bastion%20and%20downtime.md)
* **Partitura y Matriz de Conjuros:** [spell list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/the%20conductor%20a%20full%20support%20build%20%20dd%205e/spell%20list.md)
* **Arsenal y Adquisiciones Tácticas:** [item list to obtain.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/the%20conductor%20a%20full%20support%20build%20%20dd%205e/item%20list%20to%20obtain.md)
* **Hoja de Ruta (Niveles 1-20):** [roadmap.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/the%20conductor%20a%20full%20support%20build%20%20dd%205e/roadmap.md)
* **Manual de Conversión 2024:** [character guide 2024.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/the%20conductor%20a%20full%20support%20build%20%20dd%205e/character%20guide%202024.md)

---

## 🧮 Motor Matemático del Archivero (LaTeX Math Engine)

### 1. El Bucle de Daño Indirecto: *Silvery Barbs* + *Voice of Authority*
La interacción entre *Voice of Authority* (Clérigo del Orden 1) y *Silvery Barbs* (Nivel 1) es el motor de daño más eficiente del juego:
1. Un enemigo impacta o saca una tirada alta.
2. *The Conductor* lanza *Silvery Barbs* como **Reacción**: fuerza al enemigo a repetir el d20 y concede **Ventaja** al próximo ataque de un aliado (ej. un Pícaro Nivel 20 o Paladín).
3. Al seleccionar a ese aliado como beneficiario del conjuro de Nivel 1, *Voice of Authority* se dispara de inmediato: el aliado utiliza su **Reacción** para realizar un ataque de arma con **Ventaja** en el turno del enemigo.

Dado que el daño de *Sneak Attack* del Pícaro se aplica **una vez por turno** (y no una vez por ronda):

$$\text{Daño de Reacción del Pícaro} = 1\text{d}8 \text{ (Rapier)} + 10\text{d}6 \text{ (Sneak)} + 5 \text{ (DES)} = 4.5 + 35 + 5 = \mathbf{44.5 \text{ Daño Base}}$$

Con Ventaja sobre el d20 frente a CA 19 enemiga (probabilidad de impacto $\mathbb{P} = 1 - (1 - 0.65)^2 = \mathbf{0.8775}$):

$$\mathbb{E}[\text{Daño Regalado por Reacción}] = 0.8775 \times 44.5 + [1 - (0.95)^2] \times (4.5 + 35) = 39.05 + 3.85 = \mathbf{42.90 \text{ Daño Fuera de Turno}}$$

Por tan solo una ranura de Nivel 1 y una Reacción, el Conductor añade $+42.90$ de daño de impacto y anula un crítico hostil.

### 2. Mitigación Táctica por Asalto: *Mantle of Inspiration*
Al usar una Acción Adicional y gastar 1 dado de Inspiración Bárdica:
* Concede **14 Puntos de Golpe Temporales (THP)** a un número de aliados igual a tu modificador de Carisma (hasta **5 aliados**).
* Cada uno de esos aliados puede usar su Reacción para moverse hasta su **velocidad completa sin provocar ataques de oportunidad**.

$$\text{Buffer de Absorción Inmediata} = 5 \times 14 = \mathbf{70.0 \text{ THP Colectivos por Asalto}}$$

Con 5 usos de Inspiración Bárdica que se recargan en cada Descanso Corto (*Font of Inspiration*):

$$\text{Absorción Total por Ciclo Corto} = 5 \times 70 = \mathbf{350.0 \text{ Puntos de Absorción Pasiva}}$$

### 3. Puntos de Golpe Efectivos Colectivos (Team EHP)
* **HP Base del Conductor:** $163$
* **CA Pasiva:** $25$ (con Half-Plate +3 y Escudo +3).
* **Desventaja Enemiga Pasiva:** *Unbreakable Majesty* (Glamour Bard 14) obliga a los enemigos a superar una salvación de Carisma (CD 19) antes de atacarte; si fallan, pierden el ataque o deben redirigirlo.
* **EHP del Escuadrón:** Al sumar *Inspiring Leader* ($25 \text{ THP}$ a 6 criaturas al inicio $= 150 \text{ THP}$) y *Aid* de nivel 8 ($+35 \text{ HP}$ máximos a 3 aliados $= 105 \text{ HP}$), la reserva inicial antes del primer turno es de $\mathbf{+255 \text{ Puntos de Vida Netos}}$ para el grupo.

---

## ⚔️ Bucle Táctico y Economía de Acciones (Action Loop)

```
        [Ronda 0: Pre-Buff del Escuadrón]
   Heroes' Feast (Inmunidad a veneno/miedo + 2d10 HP) + Aid (Nivel 8: +35 Max HP)
                    │
                    ▼
       [Ronda 1: Posicionamiento y Mando]
   Bonus Action: Mantle of Inspiration (70 THP + reposición de 5 aliados sin AdO)
   Acción: Bless (Nivel 1) o Haste sobre el Paladín / Fighter
   Trigger: Voice of Authority otorga 1 ataque inmediato gratis al aliado
                    │
                    ▼
     [Ronda 2: Control Absoluto o Help Spite]
   Acción: Command / Hypnotic Pattern (con Desventaja por Ollamh Harp)
   Bonus Action: Mantle of Majesty (Command gratis cada asalto) o Healing Word
   Trigger: Voice of Authority se activa de nuevo si se curó a un aliado
                    │
                    ▼
     [Reacción Constante en Turnos Enemigos]
   Reacción: Silvery Barbs (anula ataque del jefe + otorga Ventaja + Sneak Attack fuera de turno)
   O Counterspell si un enemigo lanza magia peligrosa
```

* **Acción (Action):** Conjuros de control masivo (*Hypnotic Pattern*, *Forcecage*, *Otto's Irresistible Dance*, *Mass Suggestion*) o bufos prioritarios (*Bless*, *Haste*).
* **Acción Adicional (Bonus Action):** *Mantle of Inspiration* (70 THP + reposicionamiento), *Mantle of Majesty* (*Command* gratuito cada turno), o *Healing Word* (levantar aliados + ataque inmediato).
* **Reacción (Reaction):** *Silvery Barbs* (disparador supremo de *Voice of Authority* con ventaja para el aliado), o *Counterspell*.

---

## 🏷️ Matriz de Evaluación Táctica del Archivero

| Capacidad Táctica | Nivel | Justificación del Archivero |
| :--- | :---: | :--- |
| **Habilitación de Reacciones (DPR Indirecto)** | 🔵 | Genera $>40$ de daño gratuito por asalto en el turno enemigo mediante *Voice of Authority*. |
| **Control de Posicionamiento** | 🔵 | Mueve a 5 aliados simultáneamente sin provocar ataques de oportunidad como acción adicional. |
| **Mitigación y Buffer de Daño** | 🔵 | 350 THP por descanso corto + *Inspiring Leader* + *Aid* masivo. |
| **Control de Masas (CC)** | 🔵 | *Ollamh Harp* impone Desventaja en todas las salvaciones contra hechizos de encantamiento. |
| **Supervivencia Personal (EHP)** | 🟢 | CA 25 pasiva con escudo, salvaciones completas y *Unbreakable Majesty*. |
| **Flexibilidad Arcana** | 🔵 | Acceso a *Wish*, *Mass Heal*, *Counterspell* y *Find Greater Steed* vía *Magical Secrets*. |

---

## 📜 Reglas de Casa (House Rules) y Ajustes de Mesa

1. **Foco Universal Integrado:** El instrumento musical bárdico (*Ollamh Harp* o tamboril) funciona como foco sagrado unificado para conjuros de Clérigo y de Bardo.
2. **Activación de Voice of Authority con Conjuros de Área:** Cuando se lanza un conjuro que afecta a múltiples aliados (como *Bless* o *Aid*), el Conductor elige a uno de los aliados afectados para recibir el ataque de reacción gratuito.
3. **Progresión de Lanzador Completo:** La combinación de Clérigo 1 y Bardo 19 mantiene una progresión de ranuras de nivel 20 al 100% (posee ranura de 9.º nivel).