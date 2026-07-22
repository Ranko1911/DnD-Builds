# Guía de Personaje — Penny Pinchin' Preacher

## General Data

System Standard: D&D 5th Edition (2024 / 5.5e Update)

Character Level: 20

Class Split: Rogue (Soulknife) 18 / Cleric (Twilight Domain) 2

Species: Bugbear (Bicho Bola) + Dote de Origen: Alerta (Alert)

Stats:

* **FUER (STR):** 8 (-1) [[Atributo de descarte]]
* **DES (DEX):** 20 (+5) (15 Base + 1 Racial + 4 ASI) [[Ataques psíquicos, iniciativa, sigilo y CA]]
* **CON:** 14 (+2) (14 Base) [[Puntos de golpe y concentración en conjuros]]
* **INT:** 10 (+0) (10 Base) [[Atributo neutral]]
* **SAB (WIS):** 18 (+4) (15 Base + 2 Racial + 1 Dote Observant) [[Conjuros de clérigo, salvaciones mentales y percepción pasiva]]
* **CAR (CHA):** 8 (-1) [[Atributo de descarte]]

Actual Item List: ./actual inventory list.md

Roadmap de Progresión: ./roadmap.md

Bastión y Tiempo Muerto: ./bastion and downtime.md

Combat Role: Soporte Pasivo Resiliente, Sanador de Emergencia, Infiltrador e Iniciador de Emboscadas (Nova Striker).

## 1. Resource Management & Inventory Rules

*   **Economía de Recursos y Manos:**
    *   **Foco Universal Único:** Su símbolo sagrado está grabado en su escudo (+2 CA). Utiliza sus Hojas Psíquicas (*Psychic Blades*), las cuales se materializan y desvanecen instantáneamente cuando ataca. Esto significa que puede sostener un escudo en una mano y mantener la otra completamente vacía para invocar y lanzar su magia mental sin penalizaciones.
*   **Gestión de Espacios/Ranuras:**
    *   Como clérigo de nivel 2 / pícaro de nivel 18, cuenta con 3 ranuras de conjuros de nivel 1. Las utiliza para mantener *Bless* o lanzar *Faerie Fire*.
    *   Gestiona **1 uso de Canalizar Divinidad (Channel Divinity)** por descanso corto y **Dados de Energía Psíquica (2x PB = 12 dados d12)** por descanso largo.

## 2. Action Economy & Combat Loop

*   **Preparación (Pre-Combate):**
    *   Aplicarse a sí mismo la bendición del vigilante (*Vigilant Blessing*) para obtener ventaja en tiradas de iniciativa. Aplicar *Guidance* sobre el sigilo.
*   **Action:**
    *   **Turno 1 [Emboscada]:** Atacar con sus Hojas Psíquicas al enemigo que aún no haya actuado en el asalto. Aplica el daño de *Surprise Attack* de Bugbear (+2d6) y el *Sneak Attack* (+9d6).
    *   **Turnos 2+:** Si la concentración en *Bless* es prioritaria, mantenerla a salvo mediante el posicionamiento a distancia y Cunning Action. Si se requiere apoyo defensivo, activar *Twilight Sanctuary*.
*   **Bonus Action:**
    *   **Ataque Psíquico Secundario:** Si atacó con su acción principal, puede usar su acción adicional para un segundo ataque psíquico (1d4 + DES + 2d6 si es el turno de sorpresa).
    *   **Cunning Action:** Usar *Hide* o *Disengage* para alejarse del peligro inmediato y proteger su concentración.
*   **Reaction:**
    *   🔵 **Uncanny Dodge:** Reducir el daño a la mitad de cualquier ataque visible.
    *   🟢 **Absorb Elements / Silvery Barbs:** Mitigar daño mágico o forzar fallos enemigos (si está disponible por dotes).

## 3. The META Combo: La Emboscada Atronadora del Vigilante

El combo central maximiza el daño del primer asalto de combate gracias a la iniciativa de Twilight Cleric y el rasgo racial del Bugbear:

1. **[Paso 1]:** Twilight Cleric otorga ventaja permanente en iniciativa mediante *Vigilant Blessing*. Sumado a la dote *Alert*, el Preacher tiene casi asegurado actuar primero.
2. **[Paso 2]:** Al atacar a una criatura que no ha actuado en el combate, el Bugbear añade +2d6 de daño a *cada* impacto de arma.
3. **[Paso 3]:** Se ejecutan dos ataques de Hojas Psíquicas (Acción + Acción Adicional), aplicando el *Sneak Attack* de nivel 18 y el modificador de Destreza en ambos.

🧮 Mathematical Engine (Reglas 2024 / 5.5e):

$$\text{Daño Ataque Principal} = 1d6 (\text{Hoja Psíquica}) + 5 (\text{DES}) + 9d6 (\text{Sneak Attack}) + 2d6 (\text{Surprise Attack Bugbear}) = 12d6 + 5 = 47 \text{ de daño medio}$$

$$\text{Daño Ataque Secundario} = 1d4 (\text{Hoja Psíquica}) + 5 (\text{DES}) + 2d6 (\text{Surprise Attack Bugbear}) = 1d4 + 2d6 + 5 = 14.5 \text{ de daño medio}$$

$$\text{Daño Total Turno 1} = 61.5 \text{ de daño de energía psíquica en el primer asalto}$$

Posteriormente, el Preacher se retira y mantiene *Bless* (+1d4 a ataques y salvaciones para 3 aliados) sin esfuerzo gracias a su alta CA (17 base + escudo = 19 CA) y dotes evasivas de pícaro.

## 4. Cleric (Twilight Domain) Blueprint

El Twilight Domain proporciona capacidades defensivas de soporte masivo con una inversión mínima de niveles:

| Habilidad Divina | Coste | Área | Efecto | Notas |
| :---: | :---: | :--- | :---: | :--- |
| Vigilant Blessing | 0 | Toque | Ventaja permanente en iniciativa | Dura hasta que se use de nuevo o se desactive. |
| Eyes of Night | 0 | Toque | Visión en la oscuridad a 300 pies | Puede compartirse con aliados durante 1 hora. |
| Twilight Sanctuary | 1 CD | Aura de 30 ft | 1d6 + 2 Temp HP al final del turno | Limpia efectos de encanto o miedo. |

## 5. Home Rules

Calcula todas las mecánicas, listas de conjuros, capacidades de combate e inventario bajo las verdades inmutables aprobadas por el DM de esta mesa:
1. **Símbolo Sagrado Universal:** El escudo porta el símbolo sagrado del clérigo de la penumbra y funciona como foco unificado para todos sus conjuros, eliminando la necesidad de guardar y sacar objetos.
2. **Progresión de Conjuros Unificada:** Permite acumular el nivel de clérigo para calcular las ranuras disponibles de nivel 1 de forma óptima para bendiciones tácticas.
