import json
from youtube_transcript_api import YouTubeTranscriptApi

try:
    video_id = "o6-7L7cx6WI"
    api = YouTubeTranscriptApi()
    transcript_list = api.list(video_id)
    
    try:
        t = transcript_list.find_transcript(["en", "en-US", "es"])
    except Exception:
        t = list(transcript_list)[0]
        
    data = t.fetch().to_raw_data()
    with open("scratch/transcript_o6-7L7cx6WI.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print("Transcript written successfully!")
except Exception as e:
    print("Error:", e)
