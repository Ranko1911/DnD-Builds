import json

with open("scratch/transcript_Yddy6J-_VMU.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Join the text
full_text = " ".join([x["text"] for x in data])

# Let's search for keywords like "one", "two", "three", "four", "five", "1.", "2.", "3.", "4.", "5."
# We can also print ranges of text
print("--- Priest of the Wilds ---")
print(" ".join([x["text"] for x in data if x["start"] < 130])) # first 2 minutes

print("\n--- Build 2 ---")
print(" ".join([x["text"] for x in data if 130 <= x["start"] < 300])) # 2m to 5m

print("\n--- Sneaky Smasher ---")
print(" ".join([x["text"] for x in data if 300 <= x["start"] < 500])) # 5m to 8m

print("\n--- Warrior of Flame ---")
print(" ".join([x["text"] for x in data if 500 <= x["start"] < 700])) # 8m to 11m

print("\n--- Iron Dancer ---")
print(" ".join([x["text"] for x in data if 700 <= x["start"]])) # 11m to end
