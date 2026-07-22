const fs = require('fs').promises;
const path = require('path');
const readline = require('readline/promises');

// Configuración - puedes cambiar el modelo aquí
// Modelos probados con soporte de tools: qwen2.5-coder:3b, qwen2.5-coder:7b, llama3.1:8b
const OLLAMA_MODEL = 'qwen2.5-coder:3b'; 
const OLLAMA_URL = 'http://localhost:11434/api/chat';
const BUILDS_FILE = path.join(__dirname, 'builds.json');

// --- Definición de Herramientas Locales ---

async function listBuilds() {
    try {
        const data = await fs.readFile(BUILDS_FILE, 'utf8');
        return data; // Retorna el JSON de builds tal cual
    } catch (error) {
        return JSON.stringify({ error: `No se pudo leer builds.json: ${error.message}` });
    }
}

async function resolveRealFolder(folderName) {
    // Si la carpeta existe físicamente en la raíz o dentro de builds/, la usamos directamente
    try {
        const stats = await fs.stat(path.join(__dirname, folderName));
        if (stats.isDirectory()) {
            return folderName;
        }
    } catch (e) {}

    try {
        const buildsPath = path.join(__dirname, 'builds', folderName);
        const stats = await fs.stat(buildsPath);
        if (stats.isDirectory()) {
            return path.join('builds', folderName);
        }
    } catch (e) {}

    // Buscar en builds.json
    try {
        const data = await fs.readFile(BUILDS_FILE, 'utf8');
        const builds = JSON.parse(data);
        
        // Buscar por ID exacto
        let match = builds.find(b => b.id.toLowerCase() === folderName.toLowerCase());
        if (match && match.folder) return match.folder;
        
        // Buscar por ID reemplazando guiones por espacios
        const sanitized = folderName.replace(/-/g, ' ').toLowerCase();
        match = builds.find(b => b.id.replace(/-/g, ' ').toLowerCase() === sanitized || 
                                 b.folder.toLowerCase() === sanitized ||
                                 b.folder.replace('builds/', '').toLowerCase() === sanitized);
        if (match && match.folder) return match.folder;
        
        // Si no hay coincidencias, devolvemos el original
        return folderName;
    } catch (error) {
        return folderName;
    }
}

async function listBuildFiles(args) {
    let { folder } = args;
    if (!folder) return JSON.stringify({ error: "Falta el parámetro 'folder'" });
    
    // Resolver carpeta real (por si el modelo confunde ID con nombre de carpeta)
    folder = await resolveRealFolder(folder);
    
    try {
        const targetPath = path.join(__dirname, folder);
        const stats = await fs.stat(targetPath);
        if (!stats.isDirectory()) {
            return JSON.stringify({ error: `'${folder}' no es una carpeta válida.` });
        }
        
        const files = await fs.readdir(targetPath);
        const markdownFiles = files.filter(f => f.endsWith('.md'));
        return JSON.stringify({ folder, files: markdownFiles });
    } catch (error) {
        return JSON.stringify({ error: `Error al leer la carpeta '${folder}': ${error.message}` });
    }
}

async function readBuildFile(args) {
    let { folder, fileName } = args;
    if (!folder || !fileName) {
        return JSON.stringify({ error: "Faltan parámetros 'folder' o 'fileName'" });
    }
    
    // Resolver carpeta real (por si el modelo confunde ID con nombre de carpeta)
    folder = await resolveRealFolder(folder);
    
    try {
        const filePath = path.join(__dirname, folder, fileName);
        
        // Evitar ataques de path traversal básicos
        const relative = path.relative(__dirname, filePath);
        if (relative.startsWith('..') || path.isAbsolute(relative)) {
            return JSON.stringify({ error: "Acceso no autorizado fuera del directorio del proyecto." });
        }

        const content = await fs.readFile(filePath, 'utf8');
        return content;
    } catch (error) {
        return JSON.stringify({ error: `Error al leer el archivo '${fileName}' en '${folder}': ${error.message}` });
    }
}

async function createBuild(args) {
    const { id, name, classes, system, role, ratings } = args;
    if (!id || !name || !classes || !system || !role) {
        return JSON.stringify({ error: "Faltan parámetros requeridos para crear la build." });
    }

    try {
        // 1. Leer builds actuales
        let builds = [];
        try {
            const data = await fs.readFile(BUILDS_FILE, 'utf8');
            builds = JSON.parse(data);
        } catch (e) {
            // Si no existe o está vacío, empezamos array nuevo
        }

        // Verificar si ya existe
        if (builds.some(b => b.id === id)) {
            return JSON.stringify({ error: `La build con ID '${id}' ya existe.` });
        }

        // Limpiar nombre de carpeta (quitar caracteres conflictivos)
        const folderName = name.replace(/[^a-zA-Z0-9\s-_]/g, '').trim();
        
        const newBuild = {
            id,
            name,
            classes,
            system,
            role,
            folder: folderName,
            youtube: null,
            ratings: ratings || { dpr: 5, ehp: 5, control: 5, support: 5, complexity: 5 }
        };

        builds.push(newBuild);
        await fs.writeFile(BUILDS_FILE, JSON.stringify(builds, null, 2), 'utf8');

        // 2. Crear la carpeta y archivos base
        const folderPath = path.join(__dirname, folderName);
        await fs.mkdir(folderPath, { recursive: true });

        // Crear una guía básica de personaje
        const guideTemplate = `# ${name} - Guía de Personaje

**Clases:** ${classes}
**Sistema:** ${system}
**Rol:** ${role}

## Introducción
Esta guía fue generada automáticamente para la build de ${name}.

## Hoja de Ruta (Roadmap)
- Nivel 1-4: ...
- Nivel 5-8: ...
- Nivel 9+: ...
`;
        await fs.writeFile(path.join(folderPath, 'character guide.md'), guideTemplate, 'utf8');

        return JSON.stringify({ 
            success: true, 
            message: `Build '${name}' creada exitosamente en builds.json y carpeta '${folderName}' inicializada.`
        });
    } catch (error) {
        return JSON.stringify({ error: `Error al crear la build: ${error.message}` });
    }
}

// Mapa de ejecución de funciones del agente
const toolsMap = {
    listBuilds: () => listBuilds(),
    listBuildFiles: (args) => listBuildFiles(args),
    readBuildFile: (args) => readBuildFile(args),
    createBuild: (args) => createBuild(args)
};

// Declaración de herramientas para Ollama (formato JSON Schema)
const toolsDefinition = [
    {
        type: 'function',
        function: {
            name: 'listBuilds',
            description: 'Lista todas las builds de personajes de D&D registradas en builds.json.',
            parameters: { type: 'object', properties: {} }
        }
    },
    {
        type: 'function',
        function: {
            name: 'listBuildFiles',
            description: 'Lista los archivos Markdown (.md) detallados dentro de la carpeta de una build específica.',
            parameters: {
                type: 'object',
                properties: {
                    folder: {
                        type: 'string',
                        description: 'Nombre de la carpeta de la build (ej. "Clocklock", "cursed pirate").'
                    }
                },
                required: ['folder']
            }
        }
    },
    {
        type: 'function',
        function: {
            name: 'readBuildFile',
            description: 'Lee el contenido completo de un archivo de guía o notas (.md) específico de una build.',
            parameters: {
                type: 'object',
                properties: {
                    folder: {
                        type: 'string',
                        description: 'Nombre de la carpeta de la build.'
                    },
                    fileName: {
                        type: 'string',
                        description: 'Nombre exacto del archivo a leer (ej. "character guide.md", "spell list.md").'
                    }
                },
                required: ['folder', 'fileName']
            }
        }
    },
    {
        type: 'function',
        function: {
            name: 'createBuild',
            description: 'Crea una nueva build de D&D, la guarda en builds.json y crea su carpeta e inicializa una guía.',
            parameters: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        description: 'Identificador único en minúsculas y separado por guiones (ej. "beastmaster-ranger").'
                    },
                    name: {
                        type: 'string',
                        description: 'Nombre descriptivo de la build (ej. "Beastmaster Ranger").'
                    },
                    classes: {
                        type: 'string',
                        description: 'Distribución de clases y niveles (ej. "Ranger 5 / Rogue 3").'
                    },
                    system: {
                        type: 'string',
                        description: 'Sistema de reglas usado (ej. "D&D 5e (2014)" o "D&D 5e (2024 / 5.5e)").'
                    },
                    role: {
                        type: 'string',
                        description: 'El rol principal y secundario en combate/utilidad (ej. "Striker / Scout").'
                    },
                    ratings: {
                        type: 'object',
                        description: 'Puntuaciones estimadas del 1 al 10 en: dpr (daño por turno), ehp (vida efectiva/tanque), control, support, complexity.',
                        properties: {
                            dpr: { type: 'integer' },
                            ehp: { type: 'integer' },
                            control: { type: 'integer' },
                            support: { type: 'integer' },
                            complexity: { type: 'integer' }
                        }
                    }
                },
                required: ['id', 'name', 'classes', 'system', 'role']
            }
        }
    }
];

// --- Bucle de Razonamiento del Agente ---

// Helper para intentar extraer una llamada a herramienta si el modelo responde en texto plano con JSON
function tryExtractToolCallFromText(content) {
    if (!content) return null;
    const trimmed = content.trim();
    
    // Caso 1: El contenido es directamente un JSON válido
    try {
        const parsed = JSON.parse(trimmed);
        if (parsed.name && parsed.arguments) {
            return [{
                id: 'call_fallback_' + Date.now(),
                type: 'function',
                function: {
                    name: parsed.name,
                    arguments: parsed.arguments
                }
            }];
        }
    } catch (e) {
        // No es JSON directo, continuamos
    }

    // Caso 2: El contenido contiene un bloque de código ```json ... ```
    const jsonBlockRegex = /```json\s*([\s\S]*?)\s*```/;
    const match = trimmed.match(jsonBlockRegex);
    if (match) {
        try {
            const parsed = JSON.parse(match[1].trim());
            if (parsed.name && parsed.arguments) {
                return [{
                    id: 'call_fallback_' + Date.now(),
                    type: 'function',
                    function: {
                        name: parsed.name,
                        arguments: parsed.arguments
                    }
                }];
            }
        } catch (e) {
            // No es JSON válido dentro del bloque
        }
    }

    return null;
}

async function runAgent(messages) {
    let loopCount = 0;
    const maxLoops = 5; // Evitar bucles infinitos si el modelo alucina

    while (loopCount < maxLoops) {
        loopCount++;
        
        const payload = {
            model: OLLAMA_MODEL,
            messages: messages,
            tools: toolsDefinition,
            stream: false
        };

        const response = await fetch(OLLAMA_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Error de Ollama (${response.status}): ${errText}`);
        }

        const data = await response.json();
        const assistantMessage = data.message;
        
        // Extraer tool_calls nativos o intentar el fallback de texto plano
        let toolCalls = assistantMessage.tool_calls || [];
        if (toolCalls.length === 0 && assistantMessage.content) {
            const fallbackCalls = tryExtractToolCallFromText(assistantMessage.content);
            if (fallbackCalls) {
                toolCalls = fallbackCalls;
                // Mutar el mensaje para que el historial sea válido de cara a la API de Ollama
                assistantMessage.tool_calls = fallbackCalls;
                assistantMessage.content = "";
            }
        }

        // Agregar el mensaje del asistente al historial de la conversación
        messages.push(assistantMessage);

        // Si el modelo decide hacer llamadas a herramientas
        if (toolCalls.length > 0) {
            console.log(`\n\x1b[33m[Agente pensando... ejecutando herramienta(s)]\x1b[0m`);
            
            for (const call of toolCalls) {
                const funcName = call.function.name;
                const funcArgs = call.function.arguments;
                
                console.log(`\x1b[90m⚙️  Llamando a: ${funcName}(${JSON.stringify(funcArgs)})\x1b[0m`);
                
                const toolFunc = toolsMap[funcName];
                let resultText;
                
                if (toolFunc) {
                    try {
                        resultText = await toolFunc(funcArgs);
                    } catch (err) {
                        resultText = JSON.stringify({ error: `Excepción ejecutando herramienta: ${err.message}` });
                    }
                } else {
                    resultText = JSON.stringify({ error: `Herramienta '${funcName}' no encontrada.` });
                }
                
                // Añadir el resultado de la herramienta al contexto del chat
                messages.push({
                    role: 'tool',
                    content: resultText,
                    name: funcName
                });
            }
            
            // Volver a iterar el bucle para que el modelo procese el resultado
            continue;
        }

        // Si no hay tool_calls, el modelo nos da su respuesta final.
        // Pero con modelos pequeños, a veces devuelven un JSON vacío '{}' o nada en lenguaje natural
        // cuando han terminado de usar herramientas.
        const trimmedContent = (assistantMessage.content || "").trim();
        const isJsonEmpty = trimmedContent === '{}' || 
                            trimmedContent === '```json\n{}\n```' || 
                            trimmedContent === '```json\n{}```' ||
                            trimmedContent === '';
        
        const hasToolResults = messages.some(m => m.role === 'tool');

        if (isJsonEmpty && hasToolResults) {
            // Eliminar la última respuesta vacía para no confundir al modelo
            messages.pop();
            
            console.log(`\n\x1b[33m[Agente sintetizando respuesta final...]\x1b[0m`);
            
            const finalPayload = {
                model: OLLAMA_MODEL,
                messages: messages, // contiene todo el historial con los resultados de las herramientas
                stream: false
            };

            const finalResponse = await fetch(OLLAMA_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(finalPayload)
            });

            if (!finalResponse.ok) {
                const errText = await finalResponse.text();
                throw new Error(`Error en la síntesis final de Ollama (${finalResponse.status}): ${errText}`);
            }

            const finalData = await finalResponse.json();
            return finalData.message.content;
        }

        return assistantMessage.content;
    }

    return "El agente alcanzó el límite máximo de iteraciones sin dar una respuesta final.";
}

// --- Interfaz de Consola (REPL) ---

async function main() {
    // Verificar si Ollama responde antes de empezar
    try {
        await fetch('http://localhost:11434/');
    } catch (err) {
        console.error('\x1b[31m❌ Error: No se pudo conectar con Ollama en http://localhost:11434. Asegúrate de que Ollama esté ejecutándose.\x1b[0m');
        process.exit(1);
    }

    console.log(`\x1b[36m====================================================\x1b[0m`);
    console.log(`\x1b[36m🧙‍♂️ AGENTE LOCAL DE D&D INICIALIZADO (Ollama - ${OLLAMA_MODEL})\x1b[0m`);
    console.log(`\x1b[32mEste agente puede consultar y administrar tus builds locales.\x1b[0m`);
    console.log(`\x1b[90mEscribe 'salir' para terminar la sesión.\x1b[0m`);
    console.log(`\x1b[36m====================================================\x1b[0m\n`);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const messages = [
        {
            role: 'system',
            content: `Eres un archivador experto del multiverso de Dungeons & Dragons. Ayudas al usuario a organizar, consultar y diseñar builds de personajes de alto rendimiento (Min-Maxing).
Tienes herramientas locales que te permiten ver la base de datos de builds y leer guías de personajes.

REGLAS DE OPERACIÓN IMPORTANTES:
1. NUNCA inventes nombres de carpetas o nombres de archivos. Si no estás seguro del nombre de la carpeta de una build, debes llamar OBLIGATORIAMENTE a listBuilds() primero para ver su propiedad "folder".
2. Si el usuario te pide ayuda sobre un personaje en particular (por ejemplo, "barbarian from hell"), llama primero a listBuilds() para localizar qué carpeta le corresponde exactamente.
3. Para listar los archivos de una build, usa listBuildFiles(folder) pasando el nombre exacto de la carpeta.
4. Para leer un archivo, usa readBuildFile(folder, fileName) con el nombre exacto de la carpeta y del archivo.
5. Elige el archivo a leer según lo que te pregunte el usuario:
   - Si pregunta por "objetos", "items", "armas", "armaduras" o "inventario", prioriza leer "actual inventory list.md" o "item list to obtain.md".
   - Si pregunta por "conjuros", "magias" o "hechizos", prioriza leer "spell list.md".
   - Si pregunta por "roadmap" o niveles, prioriza leer "roadmap.md".
   - Si pregunta por guías generales, lee "character guide.md".
6. Responde siempre en español de forma concisa, completa e inteligente basándote en los datos leídos.`
        }
    ];

    while (true) {
        const userInput = await rl.question('\x1b[34m👤 Tú > \x1b[0m');
        
        if (userInput.trim().toLowerCase() === 'salir') {
            break;
        }

        if (!userInput.trim()) continue;

        messages.push({ role: 'user', content: userInput });

        try {
            const answer = await runAgent(messages);
            console.log(`\n\x1b[32m🧙‍♂️ Agente >\x1b[0m ${answer}\n`);
        } catch (error) {
            console.error(`\n\x1b[31m❌ Error en la llamada al agente: ${error.message}\x1b[0m\n`);
            // Retirar el último mensaje de usuario si falló la llamada para mantener limpio el historial
            messages.pop();
        }
    }

    rl.close();
    console.log('\n¡Hasta pronto, aventurero!');
}

main();
