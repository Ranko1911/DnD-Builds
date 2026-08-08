#!/usr/bin/env python3
"""
Markdown to JSON Converter (md_to_json.py)
------------------------------------------
Convierte archivos Markdown (o carpetas completas) a estructurados objetos JSON.
Soporta:
 1. Frontmatter (YAML metadata entre ---)
 2. Estructura por secciones (Encabezados #, ##, ###)
 3. Tablas Markdown a listas de objetos JSON [ { "col1": "val1" } ]
 4. Modo individual o modo mantener carpetas organizadas (crea un .json por cada .md)
"""

import sys
import os
import json
import re
import argparse

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

def parse_frontmatter(text):
    """Extrae metadatos frontmatter YAML si existen."""
    frontmatter = {}
    content = text

    match = re.match(r'^\s*---\s*\n(.*?)\n---\s*\n(.*)$', text, re.DOTALL)
    if match:
        yaml_text, content = match.groups()
        for line in yaml_text.splitlines():
            if ':' in line:
                key, val = line.split(':', 1)
                key = key.strip()
                val = val.strip().strip('"\'')
                if val.isdigit():
                    val = int(val)
                elif val.lower() == 'true':
                    val = True
                elif val.lower() == 'false':
                    val = False
                frontmatter[key] = val

    return frontmatter, content

def parse_markdown_table(table_lines):
    """Convierte una tabla Markdown en una lista de diccionarios JSON."""
    clean_lines = [line.strip() for line in table_lines if line.strip() and '|' in line]
    if len(clean_lines) < 2:
        return []

    headers = [h.strip() for h in clean_lines[0].split('|')[1:-1]]
    start_idx = 1
    if start_idx < len(clean_lines) and '---' in clean_lines[start_idx]:
        start_idx = 2

    table_data = []
    for line in clean_lines[start_idx:]:
        values = [v.strip() for v in line.split('|')[1:-1]]
        if len(values) == len(headers):
            row_dict = dict(zip(headers, values))
            table_data.append(row_dict)

    return table_data

def markdown_to_json(md_text):
    """Parsea el texto Markdown completo a una estructura JSON dict."""
    metadata, content = parse_frontmatter(md_text)

    doc_structure = {
        "metadata": metadata,
        "sections": [],
        "tables": []
    }

    current_section = {
        "title": "Main",
        "level": 0,
        "content": [],
        "subsections": []
    }

    lines = content.splitlines()
    i = 0
    in_table_block = False
    table_lines = []

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if '|' in stripped and ('---' in stripped or (i + 1 < len(lines) and '---' in lines[i + 1])):
            in_table_block = True
            table_lines.append(stripped)
            i += 1
            continue
        elif in_table_block and '|' in stripped:
            table_lines.append(stripped)
            i += 1
            continue
        elif in_table_block:
            parsed_table = parse_markdown_table(table_lines)
            if parsed_table:
                doc_structure["tables"].append(parsed_table)
            in_table_block = False
            table_lines = []

        header_match = re.match(r'^(#{1,6})\s+(.*)', stripped)
        if header_match:
            level = len(header_match.group(1))
            title = header_match.group(2).strip()

            sec = {
                "title": title,
                "level": level,
                "lines": []
            }
            doc_structure["sections"].append(sec)
            current_section = sec
            i += 1
            continue

        if stripped:
            current_section.get("lines", doc_structure["sections"]).append(stripped)

        i += 1

    if in_table_block and table_lines:
        parsed_table = parse_markdown_table(table_lines)
        if parsed_table:
            doc_structure["tables"].append(parsed_table)

    return doc_structure

def convert_folder_separately(folder_path):
    """Convierte cada archivo .md en folder_path a su propio archivo .json en su misma carpeta."""
    count = 0
    print(f"Procesando carpeta '{folder_path}' manteniendo archivos separados...")
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.md'):
                md_path = os.path.join(root, file)
                json_path = os.path.splitext(md_path)[0] + '.json'
                with open(md_path, 'r', encoding='utf-8') as f:
                    data = markdown_to_json(f.read())
                with open(json_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                count += 1
                rel = os.path.relpath(json_path, folder_path)
                print(f"  ✓ [{count}] {file} -> {rel}")
    return count

def process_path(target_path):
    """Procesa un archivo .md o una carpeta en modo bundle."""
    if os.path.isfile(target_path):
        with open(target_path, 'r', encoding='utf-8') as f:
            return markdown_to_json(f.read())
    elif os.path.isdir(target_path):
        folder_result = {}
        for root, _, files in os.walk(target_path):
            for file in files:
                if file.endswith('.md'):
                    full_path = os.path.join(root, file)
                    rel_path = os.path.relpath(full_path, target_path)
                    with open(full_path, 'r', encoding='utf-8') as f:
                        folder_result[rel_path] = markdown_to_json(f.read())
        return folder_result
    else:
        raise ValueError(f"Ruta no encontrada: {target_path}")

def main():
    parser = argparse.ArgumentParser(description="Convertidor de Markdown a JSON")
    parser.add_argument("input", help="Ruta al archivo .md o directorio")
    parser.add_argument("-o", "--output", help="Ruta del archivo .json de salida")
    parser.add_argument("--separate", action="store_true", help="Crear un archivo .json por cada .md en su carpeta correspondiente")
    parser.add_argument("--pretty", action="store_true", default=True, help="Formatear JSON con sangría")

    args = parser.parse_args()

    try:
        if args.separate or (os.path.isdir(args.input) and not args.output):
            count = convert_folder_separately(args.input)
            print(f"\n✓ Se convirtieron {count} archivos .md a sus respectivos archivos .json individuales.")
        else:
            data = process_path(args.input)
            json_output = json.dumps(data, indent=2 if args.pretty else None, ensure_ascii=False)

            if args.output:
                with open(args.output, 'w', encoding='utf-8') as f:
                    f.write(json_output)
                print(f"✓ Convertido con éxito: {args.input} -> {args.output}")
            else:
                print(json_output)

    except Exception as e:
        print(f"Error convirtiendo Markdown a JSON: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
