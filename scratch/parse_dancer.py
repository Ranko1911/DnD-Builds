import json

with open("scratch/transcript_o6-7L7cx6WI.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Find any mentions of "dancer" or just print the whole text
full_text = " ".join([x["text"] for x in data])

print("Mentions of dancer or dancer-related keywords:")
for i, x in enumerate(data):
    if "dancer" in x["text"].lower() or "iron" in x["text"].lower() or "singer" in x["text"].lower() or "artificer" in x["text"].lower():
        # print the surrounding context (+- 5 segments)
        start = max(0, i-5)
        end = min(len(data), i+6)
        print(f"--- Context around index {i} (start time: {x['start']}) ---")
        print(" ".join([f"[{idx}]: {data[idx]['text']}" for idx in range(start, end)]))
        print()
