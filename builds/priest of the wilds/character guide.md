# 🏹 Archivo Técnico: Priest of the Wilds — El Arquero Sagrado de la Canopia

**Clasificación del Archivero:** 🟢 **Build Competitivo / Francotirador Sagrado de Ultra-Largo Alcance (Ranged Nova Striker & Tactical Warden)**  
**Reglas:** D&D 5.ª Edición (2014 & 2024 Compatible)  
**Nivel Total:** 20  
**División de Clases:** Ranger (Fey Wanderer) 12 / Cleric (War Domain) 8  
**Especie:** Humano Variante / Elfo de los Bosques (*Sharpshooter* de origen)  
**Trasfondo:** Guardián Silvestre / Cazador de la Frontera Feérica  

---

## 📊 Estadísticas Base y Modificadores (Nivel 20)

| Característica | Puntuación | Modificador | Notas de Optimización |
| :--- | :---: | :---: | :--- |
| **Fuerza (STR)** | 10 | +0 | Carga neutral. |
| **Destreza (DEX)** | 20 | +5 | 15 base + 1 racial + 4 ASIs. Precisión balística, daño, CA e iniciativa. |
| **Constitución (CON)** | 14 | +2 | Puntos de vida y concentración en conjuros (*Bless*, *Holy Weapon*). |
| **Inteligencia (INT)** | 8 | -1 | Dump stat táctico. |
| **Sabiduría (WIS)** | 16 | +3 | 15 base + 1 racial. CD de conjuros, ataques de *War Priest* y bonus social férico. |
| **Carisma (CHA)** | 10 | +0 | Neutral (sumas Sabiduría $+3$ a pruebas de Carisma vía *Otherworldly Glamour*). |

* **Puntos de Golpe (HP Base):** $10 + (11 \times 6) + (8 \times 5) + (20 \times 2) = \mathbf{156 \text{ HP Base}}$
* **Clase de Armadura Pasiva (AC):** $12 \text{ (Studded Leather)} + 5 \text{ (DEX)} = \mathbf{17 \text{ CA Pasiva}}$ (Con *Studded Leather +3*: $\mathbf{20 \text{ CA Pasiva}}$).
* **Salvaciones con Competencia:** Fuerza ($+6$), Destreza ($+11$).
* **Alcance Balístico Operativo:** 600 pies sin desventaja y sin penalización por cobertura de tres cuartos gracias a *Sharpshooter*.

---

## 🔗 Navegación y Registros del Puesto Silvestre

* **Inventario Actual y Equipo:** [actual inventory list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/priest%20of%20the%20wilds/actual%20inventory%20list.md)
* **Bastión del Puesto de Tiro Silvestre:** [bastion and downtime.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/priest%20of%20the%20wilds/bastion%20and%20downtime.md)
* **Grimorio Silvestre y Matriz de Conjuros:** [spell list.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/priest%20of%20the%20wilds/spell%20list.md)
* **Arsenal y Adquisiciones Tácticas:** [item list to obtain.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/priest%20of%20the%20wilds/item%20list%20to%20obtain.md)
* **Hoja de Ruta (Niveles 1-20):** [roadmap.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/priest%20of%20the%20wilds/roadmap.md)
* **Manual de Conversión 2024:** [character guide 2024.md](file:///d:/repo-vault/Proyectos/Rol/DnDbuilds/builds/priest%20of%20the%20wilds/character%20guide%202024.md)

---

## 🧮 Motor Matemático del Archivero (LaTeX Math Engine)

### 1. Bonificador de Ataque y Mitigación de *Sharpshooter*
Al disparar con Arco Largo $+3$, Estilo de Combate de Arquero y la penalización de *Sharpshooter* ($-5$ a impactar, $+10$ al daño plano):

$$\text{Bono de Ataque Base} = +5 \text{ (DES)} + 6 \text{ (Prof)} + 2 \text{ (Archery)} + 3 \text{ (Arco +3)} - 5 \text{ (Sharpshooter)} = \mathbf{+11 \text{ al Impactar}}$$

Con el conjuro *Bless* activo ($+1\text{d}4$, media $+2.5$):

$$\text{Bono de Ataque Efectivo} = 11 + 2.5 = \mathbf{+13.5}$$

Frente a una CA enemiga típica de $19$:
* Tirada requerida en el dado: $19 - 13.5 = 5.5 \implies 6$ o más.
* Probabilidad de impacto: $\mathbb{P}(\text{Acierto}) = \frac{21 - 6}{20} = \mathbf{0.75} \quad (75.0\%)$.

Si aun así el ataque falla por un margen estrecho, *Guided Strike* (+10 plano) convierte el fallo en un impacto **100% garantizado**.

### 2. Daño por Disparo Sostenido (*Hunter's Mark*)
Cada flecha que impacta acumula:

$$\text{Daño Base} = 1\text{d}8 \text{ (Arco)} + 5 \text{ (DES)} + 10 \text{ (Sharpshooter)} + 3 \text{ (Mágico)} + 1\text{d}6 \text{ (Hunter's Mark)} = 4.5 + 18 + 3.5 = \mathbf{26.0 \text{ Daño}}$$

### 3. Cadencia de 3 Disparos por Asalto (Ataque Extra + *War Priest*)
El Clérigo de Guerra permite realizar un ataque de arma adicional como **Acción Adicional** (*War Priest*, 3 usos por descanso largo):
* **Disparo 1:** $26.0 + 1\text{d}8 \text{ (Divine Strike de Clérigo 8)} = 26.0 + 4.5 = 30.5$
* **Disparo 2:** $26.0 + 1\text{d}6 \text{ (Dreadful Strikes de Fey Wanderer)} = 26.0 + 3.5 = 29.5$
* **Disparo 3 (War Priest):** $26.0$

$$\text{DPR Sostenido (3 Disparos)} = 30.5 + 29.5 + 26.0 = \mathbf{86.0 \text{ Daño a 600 Pies}}$$

### 4. Ciclo Nova: *Holy Weapon* Upcast (Nivel 5)
Sustituyendo *Hunter's Mark* por *Holy Weapon* ($+2\text{d}8 = 9.0$ de daño radiante por impacto en todos los ataques):

$$\text{Daño por Flecha con Holy Weapon} = 1\text{d}8 + 18 + 2\text{d}8 = 4.5 + 18 + 9 = \mathbf{31.5 \text{ Daño por Flecha}}$$
$$\text{DPR Nova Holy Weapon} = (3 \times 31.5) + 4.5 \text{ (Divine Strike)} + 3.5 \text{ (Dreadful Strikes)} = 94.5 + 8.0 = \mathbf{102.5 \text{ Daño Monotarget}}$$

### 5. Puntos de Golpe Efectivos y Seguridad a Distancia (EHP)
* **HP Base:** $156$
* **CA Pasiva:** $20$ (Studded Leather +3 + 5 DEX).
* **Mitigación por Rango:** Operando a 600 pies de distancia sin penalizaciones de cobertura ni desventaja, la inmensa mayoría de monstruos sin armas de asedio tienen probabilidad de impacto **0.00** contra el personaje.
* **Absorción Reactiva:** *Absorb Elements* divide a la mitad cualquier daño elemental a distancia entrante.

---

## ⚔️ Bucle Táctico y Economía de Acciones (Action Loop)

```
        [Ronda 0: Pre-Combate a 600 Pies]
   Lanzar Holy Weapon o Bless + Mimetismo con el follaje (Sigilo +11)
                    │
                    ▼
         [Ronda 1: Salva de Francotirador]
   Acción: Atacar con Arco Largo (2 disparos con Sharpshooter)
   Bonus Action: Ataque extra de War Priest (tercer disparo con Sharpshooter)
   Trigger 1: Guided Strike (+10) si alguna flecha falla
   Trigger 2: Dreadful Strikes aplica 1d6 psíquico; Divine Strike aplica 1d8 radiante
   Daño: 102.5 Daño concentrado a 600 ft
                    │
                    ▼
         [Ronda 2: Control Férico y Kiting]
   Acción: Repetir ataque doble con arco largo
   Bonus Action: Hunter's Mark o reposición con Misty Step
   Reacción: Beguiling Twist (si alguien supera un miedo/encanto, fuerza a otro a chequear)
```

* **Acción (Action):** Ataque doble con arco largo aplicando *Sharpshooter* (-5/+10).
* **Acción Adicional (Bonus Action):** Ataque de arma extra vía *War Priest*, o lanzamiento de *Hunter's Mark* / *Misty Step*.
* **Reacción (Reaction):** *Guided Strike* (+10 a una flecha fallida), *Beguiling Twist* (redirección de encanto o miedo), o *Absorb Elements*.

---

## 🏷️ Matriz de Evaluación Táctica del Archivero

| Capacidad Táctica | Nivel | Justificación del Archivero |
| :--- | :---: | :--- |
| **Alcance Balístico Operativo** | 🔵 | 600 pies de alcance efectivo ignorando cobertura de tres cuartos gracias a *Sharpshooter*. |
| **Daño Monotarget Sostenido** | 🟢 | 86.0 a 102.5 DPR continuo combinando *Sharpshooter*, *Holy Weapon* y *War Priest*. |
| **Garantía de Impacto** | 🟢 | *Guided Strike* (+10) y *Bless* anulan por completo la penalización de -5 de la dote. |
| **Control Social y Férico** | 🟢 | Suma Sabiduría a pruebas de Carisma (*Otherworldly Glamour*) y redirige encantos (*Beguiling Twist*). |
| **Supervivencia y Posicionamiento** | 🟢 | Rango extremo mantiene al francotirador inmune al 90% de las amenazas del manual de monstruos. |
| **Soporte Médico Silvestre** | 🟢 | *Goodberry*, *Aid*, *Healing Spirit* y *Revivify* en la recámara. |

---

## 📜 Reglas de Casa (House Rules) y Ajustes de Mesa

1. **Arco Canalizador Sagrado:** El arco largo consagrado actúa como foco de conjuro unificado tanto para la magia de Explorador como de Clérigo, sin requerir una mano libre adicional para materiales.
2. **Progresión de Lanzador Híbrido:** Con Ranger 12 (6 niveles) + Cleric 8 (8 niveles) = nivel 14 de lanzador, se dispone de ranuras de hasta nivel 7 para upcastear conjuros como *Holy Weapon*, *Aid* o *Spirit Guardians*.
3. **Sinergia de Dreadful Strikes:** El daño psíquico extra de *Dreadful Strikes* ($1\text{d}6$) se activa en el primer impacto de cada criatura diferente en cada turno, permitiendo optimizar el reparto de flechas contra grupos.