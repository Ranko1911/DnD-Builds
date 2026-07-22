import os
import shutil

repo_dir = r"d:\repo-vault\Rol\DnDbuilds"

builds_dir = os.path.join(repo_dir, "builds")
docs_dir = os.path.join(repo_dir, "docs")
scratch_dir = os.path.join(repo_dir, "scratch")

os.makedirs(builds_dir, exist_ok=True)
os.makedirs(docs_dir, exist_ok=True)
os.makedirs(scratch_dir, exist_ok=True)

build_folders = [
    "Clocklock", "Wrathful Whisperer", "barbarian from hell", "bear with a flamethrower",
    "beelzebubs ballista", "cursed pirate", "eldritch shadow", "fist of god",
    "furious paradox", "furry fury", "hexbow", "iron dancer", "le biter",
    "light of tomorrow", "magical mischief murder man", "moon guardian",
    "nick nack nabber", "penny pinchin preacher", "priest of the wilds",
    "shadow tank", "sneaky smasher", "spirit caller", "spymaster", "techpriest",
    "tempest", "template", "the bonk", "the bullet", "the fartificer", "warrior of flame"
]

for folder in build_folders:
    src = os.path.join(repo_dir, folder)
    dst = os.path.join(builds_dir, folder)
    if os.path.exists(src) and not os.path.exists(dst):
        print(f"Moving folder {folder} -> builds/{folder}")
        shutil.move(src, dst)

for doc_file in ["implementar.md", "notas.txt"]:
    src = os.path.join(repo_dir, doc_file)
    dst = os.path.join(docs_dir, doc_file)
    if os.path.exists(src):
        print(f"Moving {doc_file} -> docs/{doc_file}")
        shutil.move(src, dst)

src_py = os.path.join(repo_dir, "parse_youtube_2.py")
dst_py = os.path.join(scratch_dir, "parse_youtube_2.py")
if os.path.exists(src_py):
    print(f"Moving parse_youtube_2.py -> scratch/parse_youtube_2.py")
    shutil.move(src_py, dst_py)

print("Reorganization complete!")
