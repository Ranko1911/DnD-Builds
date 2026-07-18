import json

with open("scratch/transcript_o6-7L7cx6WI.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print("--- Rest of Transcript from 320 onwards ---")
print(" ".join([f"[{i}]: {x['text']}" for i, x in enumerate(data) if i >= 320]))
