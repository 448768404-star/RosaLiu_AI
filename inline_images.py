import base64
from pathlib import Path

BASE = Path(__file__).resolve().parent
html_path = BASE / "index.html"
html = html_path.read_text(encoding="utf-8")

# Collect all local image files referenced in HTML
png_files = {p.name: p for p in BASE.glob("*.png")}

for name, path in png_files.items():
    for quote in ('"', "'"):
        needle = f"src={quote}{name}{quote}"
        if needle in html:
            data = base64.b64encode(path.read_bytes()).decode("ascii")
            mime = "image/png"
            replacement = f"src={quote}data:{mime};base64,{data}{quote}"
            html = html.replace(needle, replacement)

html_path.write_text(html, encoding="utf-8")
print("Inlined images into index.html")
