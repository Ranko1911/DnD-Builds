#!/usr/bin/env python3
"""
Generator script to create a new D&D Build directory populated from builds/template
by extracting YouTube video transcript and metadata.

Usage:
  python scripts/create_build_from_youtube.py <youtube_url_or_id> [--name "Build Name"]
"""

import sys
import os
import re
import json
import shutil
import urllib.request
import urllib.parse
from youtube_transcript_api import YouTubeTranscriptApi

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEMPLATE_DIR = os.path.join(PROJECT_ROOT, "builds", "template")
BUILDS_JSON = os.path.join(PROJECT_ROOT, "builds.json")

def extract_video_id(url_or_id: str) -> str:
    """Extract YouTube video ID from various URL formats or raw ID."""
    if len(url_or_id) == 11 and not ("/" in url_or_id or "." in url_or_id):
        return url_or_id
    
    match = re.search(r'(?:v=|\/|be\/|embed\/)([a-zA-Z0-9_-]{11})', url_or_id)
    if match:
        return match.group(1)
    raise ValueError(f"Could not extract YouTube video ID from: {url_or_id}")

def fetch_video_metadata(video_id: str) -> dict:
    """Fetch video title and oEmbed info via YouTube oEmbed API."""
    oembed_url = f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={video_id}&format=json"
    try:
        req = urllib.request.Request(oembed_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            return {
                "title": data.get("title", f"Build {video_id}"),
                "author": data.get("author_name", "YouTube Creator"),
            }
    except Exception as e:
        print(f"[Warning] Could not fetch oEmbed metadata: {e}")
        return {"title": f"Build {video_id}", "author": "YouTube"}

def fetch_video_transcript(video_id: str) -> str:
    """Fetch video transcript text using youtube_transcript_api."""
    try:
        api = YouTubeTranscriptApi()
        transcript = api.fetch(video_id, languages=['es', 'en'])
        text = " ".join([getattr(snippet, 'text', str(snippet)) for snippet in transcript])
        return text
    except Exception as e:
        print(f"[Warning] Could not fetch transcript automatically: {e}")
        return ""

def create_build(youtube_url: str, custom_name: str = None, custom_data: dict = None):
    video_id = extract_video_id(youtube_url)
    full_url = f"https://www.youtube.com/watch?v={video_id}"
    
    print(f"Processing YouTube Video: {video_id}")
    meta = fetch_video_metadata(video_id)
    transcript = fetch_video_transcript(video_id)
    
    print(f"Title: {meta['title']}")
    if transcript:
        print(f"Transcript extracted ({len(transcript.split())} words)")
    else:
        print("No transcript found, using template metadata defaults")

    # Determine build properties
    build_name = custom_name or custom_data.get("name") if custom_data else meta['title']
    # Clean folder name
    folder_name = re.sub(r'[^a-zA-Z0-9 _-]', '', build_name).strip().lower()
    if not folder_name:
        folder_name = f"build-{video_id}"

    target_dir = os.path.join(PROJECT_ROOT, "builds", folder_name)
    
    if os.path.exists(target_dir):
        print(f"[Info] Target directory already exists: {target_dir}")
    else:
        os.makedirs(target_dir, exist_ok=True)
        print(f"[OK] Created build folder: builds/{folder_name}")

    # Build metadata defaults
    b_data = {
        "id": custom_data.get("id", folder_name.replace(" ", "-")),
        "name": build_name,
        "classes": custom_data.get("classes", "Fighter 20"),
        "system": custom_data.get("system", "D&D 5e (2024 / 5.5e)"),
        "role": custom_data.get("role", "Atacante de Vanguardia / Especialista Táctico"),
        "folder": f"builds/{folder_name}",
        "youtube": full_url,
        "ratings": custom_data.get("ratings", {
            "dpr": 75,
            "ehp": 70,
            "control": 60,
            "support": 50,
            "complexity": 60,
            "utility": 65
        })
    }

    # Template replacements map
    replacements = {
        "[Nombre del Build]": b_data["name"],
        "[Nivel del Personaje (Total)]": "20",
        "[Clase (Subclase) X / Clase (Subclase) Y]": b_data["classes"],
        "[Clase (Subclase) X / ...]": b_data["classes"],
        "[Especie]": custom_data.get("species", "Humano / Especie Preferida"),
        "[Rol en Combate (ej: Tanque, Control de Campo, Daño de Ráfaga, Sanador)]": b_data["role"],
        "[Describir enfoque principal]": f"Maximizar el rendimiento táctico en combate y sinergias bajo {b_data['system']}.",
        "https://www.youtube.com/watch?v=gZEG5HBO2mo": full_url,
        "[Edición/Reglas aplicadas]": b_data["system"],
        "[Edición / Reglas de Casa]": b_data["system"],
    }

    # Copy template files and perform string replacements
    template_files = os.listdir(TEMPLATE_DIR)
    for fname in template_files:
        src_path = os.path.join(TEMPLATE_DIR, fname)
        dst_path = os.path.join(target_dir, fname)
        if os.path.isfile(src_path):
            with open(src_path, 'r', encoding='utf-8') as f:
                content = f.read()

            for key, val in replacements.items():
                content = content.replace(key, val)

            with open(dst_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  + Written: builds/{folder_name}/{fname}")

    # Update builds.json
    with open(BUILDS_JSON, 'r', encoding='utf-8') as f:
        builds_list = json.load(f)

    # Check if entry already exists in builds.json
    existing_idx = next((i for i, b in enumerate(builds_list) if b.get("id") == b_data["id"]), None)
    if existing_idx is not None:
        builds_list[existing_idx] = b_data
        print(f"[OK] Updated existing build entry in builds.json: '{b_data['name']}'")
    else:
        builds_list.append(b_data)
        print(f"[OK] Appended new build entry to builds.json: '{b_data['name']}'")

    with open(BUILDS_JSON, 'w', encoding='utf-8') as f:
        json.dump(builds_list, f, ensure_ascii=False, indent=2)

    print(f"\n[SUCCESS] Build successfully created! Directory: builds/{folder_name}")
    return b_data

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python scripts/create_build_from_youtube.py <youtube_url_or_id> [build_name_or_json_file]")
        sys.exit(1)

    url_arg = sys.argv[1]
    name_arg = sys.argv[2] if len(sys.argv) > 2 else None

    custom_info = {}
    if name_arg and name_arg.endswith('.json') and os.path.exists(name_arg):
        with open(name_arg, 'r', encoding='utf-8') as f:
            custom_info = json.load(f)
        name_arg = custom_info.get("name")

    create_build(url_arg, custom_name=name_arg, custom_data=custom_info)
