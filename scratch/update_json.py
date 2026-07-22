import json

filepath = r"d:\repo-vault\Rol\DnDbuilds\builds.json"
with open(filepath, "r", encoding="utf-8") as f:
    data = json.load(f)

for b in data:
    if not b["folder"].startswith("builds/"):
        b["folder"] = "builds/" + b["folder"]

with open(filepath, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Updated builds.json with builds/ prefix for all items!")
