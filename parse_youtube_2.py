import re

filepath = r"C:\Users\ancor\.gemini\antigravity-ide\brain\39ecd47f-018b-4658-bea5-e356403359a9\.system_generated\steps\347\content.md"

try:
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()
    
    print("Length of HTML:", len(html))
    
    # Let's search for "description" in JSON data of the page (ytInitialPlayerResponse or ytInitialData)
    # Often there is a long string "shortDescription"
    desc_match = re.search(r'"shortDescription":"([^"]+)"', html)
    if desc_match:
        print("Short Description:")
        # replace escaped newlines
        desc = desc_match.group(1).replace(r"\n", "\n").replace(r"\"", '"')
        print(desc)
    else:
        print("No shortDescription found in JSON")
        
        # fallback to standard description search
        fallback_desc = re.search(r'name="description"\s+content="([^"]+)"', html, re.IGNORECASE)
        if fallback_desc:
            print("Description Meta:", fallback_desc.group(1))
            
    # Search for the video title
    title_match = re.search(r"<title>([^<]+)</title>", html, re.IGNORECASE)
    if title_match:
        print("Title Tag:", title_match.group(1))
        
except Exception as e:
    print("Error:", e)
