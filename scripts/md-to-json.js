#!/usr/bin/env node
/**
 * Markdown to JSON Converter (md-to-json.js)
 * -----------------------------------------
 * Convierte archivos Markdown o carpetas con archivos .md a objetos JSON.
 */

import fs from 'node:fs';
import path from 'node:path';

function parseFrontmatter(text) {
  const frontmatter = {};
  let content = text;
  const match = text.match(/^\s*---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);

  if (match) {
    const yamlLines = match[1].split('\n');
    content = match[2];
    for (const line of yamlLines) {
      if (line.includes(':')) {
        const [key, ...rest] = line.split(':');
        const val = rest.join(':').trim().replace(/^["']|["']$/g, '');
        frontmatter[key.trim()] = isNaN(val) ? val : Number(val);
      }
    }
  }

  return { frontmatter, content };
}

function parseMarkdownTable(tableLines) {
  const cleanLines = tableLines.map(l => l.trim()).filter(l => l.length > 0 && l.includes('|'));
  if (cleanLines.length < 2) return [];

  const headers = cleanLines[0].split('|').slice(1, -1).map(h => h.trim());
  let startIdx = 1;
  if (cleanLines[1] && cleanLines[1].includes('---')) startIdx = 2;

  const tableData = [];
  for (let i = startIdx; i < cleanLines.length; i++) {
    const values = cleanLines[i].split('|').slice(1, -1).map(v => v.trim());
    if (values.length === headers.length) {
      const row = {};
      headers.forEach((h, idx) => {
        row[h] = values[idx];
      });
      tableData.push(row);
    }
  }

  return tableData;
}

export function markdownToJson(mdText) {
  const { frontmatter, content } = parseFrontmatter(mdText);
  const sections = [];
  const tables = [];

  const lines = content.split('\n');
  let currentSection = { title: 'Main', level: 0, lines: [] };
  let inTable = false;
  let tableBuffer = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.includes('|') && (trimmed.includes('---') || (lines[i + 1] && lines[i + 1].includes('---')))) {
      inTable = true;
      tableBuffer.push(trimmed);
      continue;
    } else if (inTable && trimmed.includes('|')) {
      tableBuffer.push(trimmed);
      continue;
    } else if (inTable) {
      const parsedTable = parseMarkdownTable(tableBuffer);
      if (parsedTable.length > 0) tables.push(parsedTable);
      inTable = false;
      tableBuffer = [];
    }

    const headerMatch = trimmed.match(/^(#{1,6})\s+(.*)/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const title = headerMatch[2].trim();
      currentSection = { title, level, lines: [] };
      sections.push(currentSection);
      continue;
    }

    if (trimmed) {
      currentSection.lines.push(trimmed);
    }
  }

  if (inTable && tableBuffer.length > 0) {
    const parsedTable = parseMarkdownTable(tableBuffer);
    if (parsedTable.length > 0) tables.push(parsedTable);
  }

  return { metadata: frontmatter, sections, tables };
}

function processPath(targetPath) {
  const stat = fs.statSync(targetPath);
  if (stat.isFile()) {
    return markdownToJson(fs.readFileSync(targetPath, 'utf8'));
  } else if (stat.isDirectory()) {
    const result = {};
    const files = fs.readdirSync(targetPath, { recursive: true });
    for (const file of files) {
      if (typeof file === 'string' && file.endsWith('.md')) {
        const fullPath = path.join(targetPath, file);
        if (fs.statSync(fullPath).isFile()) {
          result[file] = markdownToJson(fs.readFileSync(fullPath, 'utf8'));
        }
      }
    }
    return result;
  }
}

// CLI Execution
const args = process.argv.slice(2);
if (args.length > 0) {
  const inputPath = args[0];
  const outputIdx = args.indexOf('-o');
  const outputPath = outputIdx !== -1 ? args[outputIdx + 1] : null;

  try {
    const data = processPath(inputPath);
    const jsonStr = JSON.stringify(data, null, 2);

    if (outputPath) {
      fs.writeFileSync(outputPath, jsonStr, 'utf8');
      console.log(`✓ Convertido con éxito: ${inputPath} -> ${outputPath}`);
    } else {
      console.log(jsonStr);
    }
  } catch (err) {
    console.error('Error convirtiendo Markdown a JSON:', err.message);
    process.exit(1);
  }
}
