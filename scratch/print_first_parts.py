import json

with open("scratch/transcript_Yddy6J-_VMU.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print("--- Priest of the Wilds ---")
print(" ".join([x["text"] for x in data if x["start"] < 130]))

print("\n--- Build 2 ---")
print(" ".join([x["text"] for x in data if 130 <= x["start"] < 300]))

print("\n--- Sneaky Smasher ---")
print(" ".join([x["text"] for x in data if 300 <= x["start"] < 500]))
