#!/usr/bin/env python3
import json
import re
import os

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUILDS_JSON = os.path.join(PROJECT_ROOT, "builds.json")
README_MD = os.path.join(PROJECT_ROOT, "README.md")

def sync_readme():
    with open(BUILDS_JSON, 'r', encoding='utf-8') as f:
        builds = json.load(f)

    total_count = len(builds)

    with open(README_MD, 'r', encoding='utf-8') as f:
        readme_content = f.read()

    # Update counts in text
    readme_content = re.sub(
        r'Catálogo de builds \(\d+ personajes \+ plantilla\)',
        f'Catálogo de builds ({total_count} personajes + plantilla)',
        readme_content
    )
    readme_content = re.sub(
        r'Builds Disponibles \(\d+ Personajes Optimizados\)',
        f'Builds Disponibles ({total_count} Personajes Optimizados)',
        readme_content
    )

    # Build new table
    table_lines = [
        "| Build | Clases | Sistema | Rol | YouTube |",
        "| :--- | :--- | :---: | :--- | :---: |"
    ]

    for b in builds:
        yt_link = f"[Vídeo]({b['youtube']})" if b.get("youtube") else "—"
        name = b.get("name", "")
        classes = b.get("classes", "")
        system = b.get("system", "")
        role = b.get("role", "")
        table_lines.append(f"| **{name}** | {classes} | {system} | {role} | {yt_link} |")

    new_table_str = "\n".join(table_lines)

    # Replace table section
    pattern = r'(\| Build \| Clases \| Sistema \| Rol \| YouTube \|[\s\S]*?)(?=\n\n---|\n\n##|$)'
    readme_content = re.sub(pattern, new_table_str, readme_content, count=1)

    with open(README_MD, 'w', encoding='utf-8') as f:
        f.write(readme_content)

    print(f"[SUCCESS] README.md updated successfully with {total_count} builds!")

if __name__ == "__main__":
    sync_readme()
