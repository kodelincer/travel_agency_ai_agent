"""Build index.html (a complete document for GitHub Pages / local use) from src/academy.html.

src/academy.html is a page fragment (title, styles, content, script) so the same
source can also be published as a claude.ai Artifact. Run:  python3 build.py
"""
from pathlib import Path

ROOT = Path(__file__).parent
body = (ROOT / "src" / "academy.html").read_text(encoding="utf-8")
doc = (
    "<!doctype html>\n<html lang=\"en\">\n<head>\n"
    "<meta charset=\"utf-8\">\n"
    "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\">\n"
    "<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}"
    "body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>\n"
    "</head>\n<body>\n" + body + "\n</body>\n</html>\n"
)
(ROOT / "index.html").write_text(doc, encoding="utf-8")
print("wrote index.html (%d bytes)" % len(doc.encode("utf-8")))
