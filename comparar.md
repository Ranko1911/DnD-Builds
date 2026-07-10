# 📊 Comparativa de Builds de Optimización — Archivero del Multiverso

Este documento analiza y compara las tres builds de optimización teórica basadas en los videos de **d4: D&D Deep Dive** listados en `comparar.txt`. El análisis se realiza bajo las directrices del **Archivero del Multiverso**, evaluando su viabilidad mecánica, DPR, supervivencia y sinergias bajo las reglas de 5.ª Edición.

---

## 🛠️ Perfiles de las Builds Analizadas

### 1. The Warden (Warlock / Druid Multiclass)
*   **Clase/Subclase:** Circle of the Moon Druid 18 / Warlock (Hexblade o Archfey) 2
*   **Concepto:** Tanque pasivo basado en espinas de daño de frío.
*   **Mecánica Core:** Sinergia entre el conjuro de Warlock **Armor of Agathys** y la **Forma Salvaje (Wild Shape)** del Druida de la Luna.

### 2. The Shepherd Druid (d4 #92)
*   **Clase/Subclase:** Circle of the Shepherd Druid 20 (o con dip de 1 nivel de Clérigo de la Vida)
*   **Concepto:** Inundación de la economía de acciones mediante invocaciones potenciadas.
*   **Mecánica Core:** Uso de **Conjure Animals** combinado con el **Tótem del Espíritu (Spirit Totem)** y los rasgos de potenciación de criaturas invocadas (**Mighty Summoner**).

### 3. The Moon Guardian (d4 #101)
*   **Clase/Subclase:** Ancestral Guardian Barbarian 3 / Circle of the Moon Druid 17
*   **Concepto:** Tanque de control de agresividad (Aggro) y mitigación de daño activo.
*   **Mecánica Core:** Combinación de la **Furia (Rage)** del Bárbaro, los **Ancestral Protectors** y la **Forma Salvaje** del Druida de la Luna.

---

## ⚔️ Análisis Mecánico y Sinergias (META)

### 1. El Combo "Warden" (Daño por Retorno)
La fuerza de esta build radica en la interacción matemática del conjuro **Armor of Agathys** lanzado a su máximo nivel ($5.^\circ$ nivel o superior) antes de entrar en forma de bestia. 

*   **Sinergia:** 🔵 **Roto/Indispensable**. Normalmente, un Brujo tiene poca CA y vida para mantener activo el conjuro. Un Druida de la Luna aporta la reserva de HP del animal (ej: Mamut, 136 HP), actuando como un escudo protector para los puntos de golpe temporales.
*   **Matemática de Retorno:** Cada vez que una criatura golpea al personaje con un ataque cuerpo a cuerpo, recibe daño de frío plano sin tirada de salvación ni de ataque.
    $$\text{Daño de Frío Total} = \text{Número de Impactos} \times (5 \times \text{Nivel de Espacio de Conjuro})$$
    Con un espacio de $5.^\circ$ nivel, cada impacto devuelve **25 de daño de frío** garantizados mientras duren los 25 HP temporales. La baja CA de las formas salvajes se convierte en una ventaja táctica para forzar impactos.

### 2. El Ejército del Pastor (Shepherd Druid)
Esta build abusa de la economía de acciones de la 5.ª edición.
*   **Sinergia:** 🔵 **Roto/Indispensable**. El **Tótem del Espíritu del Oso** otorga puntos de golpe temporales a todas las criaturas invocadas en el área, mientras que **Mighty Summoner** hace que sus ataques sean mágicos y añade HP adicional basado en sus Dados de Golpe.
*   **DPR Teórico (Invocación de 8 Velociraptores/Lobos con Ventaja por Pacto de Manada):**
    $$\text{DPR Invocaciones} = 8 \times \left( P(\text{Impacto}) \times \text{Daño Medio} + P(\text{Crítico}) \times \text{Daño Crítico Extra} \right)$$
    Contra CA 18, esto genera un promedio masivo de **85 - 110 DPR** sostenido, superando a casi cualquier build marcial pura del juego.

### 3. La Muralla Espiritual (Moon Guardian)
El tanque definitivo para proteger al grupo.
*   **Sinergia:** 🔵 **Roto/Indispensable**. La resistencia al daño físico otorgada por la **Furia** del Bárbaro se aplica a la vida de la forma salvaje, duplicando efectivamente los puntos de golpe de la bestia.
    $$\text{HP Efectivos (Mammoth)} = \frac{136 \text{ HP}}{0.5 \text{ (Factor de Daño por Resistencia)}} = 272 \text{ EHP}$$
*   **Control de Aggro:** El rasgo **Ancestral Protectors** obliga al primer enemigo impactado a atacar al Druida (que tiene una reserva masiva de EHP), imponiendo desventaja en sus ataques contra los aliados y otorgando resistencia al daño si decide ignorarlo.

---

## ⚖️ Tabla Comparativa de Rendimiento

| Criterio | 🛡️ The Warden (Druid/Warlock) | 🐏 The Shepherd Druid | 🐻 The Moon Guardian (Barb/Druid) |
| :--- | :--- | :--- | :--- |
| **Daño Monobjetivo** | 🟢 **Excelente** (Ataques + Espinas) | 🔵 **Roto** (DPR masivo de summons) | 🟡 **Decente** (Ataque físico + Furia) |
| **Supervivencia (EHP)** | 🟢 **Excelente** (Wildshape + Temp HP) | 🟡 **Decente** (Vulnerable a Focus) | 🔵 **Roto** (Wildshape + Furia Resistencia) |
| **Mitigación para Aliados**| 🔴 **Malo** (Solo tanquea para sí mismo) | 🟢 **Excelente** (Bloqueo de cuerpo y Tótem) | 🔵 **Roto** (Ancestral Protectors) |
| **Dependencia de Recursos**| 🟡 **Decente** (Espacios de conjuro altos) | 🔴 **Malo** (Espacios altos + Concentración) | 🟢 **Excelente** (Uso de Furia y Forma Salvaje) |
| **Complejidad en Mesa** | 🟢 **Fácil** (Combate melee simple) | 🔴 **Complejo** (Gestión de 8+ turnos) | 🟢 **Fácil** (Furia + Atacar para marcar) |

---

## 📋 Dictamen del Archivero del Multiverso

1.  🔴 **Malo/Situacional**: El uso del **Shepherd Druid** en mesas reales si el DM no permite optimización de turnos o limita el número de invocaciones para no ralentizar la partida.
2.  🟢 **Excelente/Fuerte**: **The Warden** como build híbrida de daño y defensa pasiva. Es sumamente divertida de jugar y castiga severamente a enemigos con multiataque cuerpo a cuerpo.
3.  🔵 **Roto/Indispensable (META del Tanque)**: **The Moon Guardian**. Sigue siendo la combinación reina para mitigar daño del grupo y absorber cantidades insanas de daño sin consumir recursos mágicos valiosos, manteniendo al Bárbaro activo en el META de alta optimización.