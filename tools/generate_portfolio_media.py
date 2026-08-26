from pathlib import Path
import hashlib
import json
import shutil
import subprocess

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "images"
PREVIEWS = ROOT / ".portfolio-media"
MANIFEST = ROOT / "media-manifest.json"

VIDEOS = {".3g2", ".3gp", ".avi", ".m4v", ".mkv", ".mov", ".mp4", ".mpeg", ".mpg", ".ogv", ".ogg", ".webm"}
IMAGE_FORMATS = {".arw", ".avif", ".bmp", ".cr2", ".dib", ".dng", ".gif", ".heic", ".heif", ".ico", ".jpeg", ".jfif", ".jpg", ".jp2", ".jxl", ".nef", ".orf", ".png", ".psd", ".raf", ".raw", ".svg", ".tga", ".tif", ".tiff", ".webp"}

PREVIEWS.mkdir(exist_ok=True)
converter = shutil.which("magick") or shutil.which("convert")
files = {}

if IMAGES.exists():
    for source in sorted(path for path in IMAGES.rglob("*") if path.is_file()):
        relative = source.relative_to(ROOT).as_posix()
        suffix = source.suffix.lower()
        if suffix in VIDEOS:
            files[relative] = {"kind": "video"}
            continue
        if suffix not in IMAGE_FORMATS:
            continue
        record = {"kind": "image"}
        # Always build a browser-sized WebP preview. This keeps huge source PNGs
        # and JPGs out of the live gallery while never changing /images itself.
        if converter:
            digest = hashlib.sha256(relative.encode("utf-8")).hexdigest()[:20]
            preview = PREVIEWS / f"{digest}.webp"
            try:
                subprocess.run([
                    converter, f"{source}[0]", "-auto-orient", "-thumbnail", "2400x2400>",
                    "-strip", "-quality", "86", str(preview)
                ], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                record["preview"] = preview.relative_to(ROOT).as_posix()
            except Exception:
                pass
        files[relative] = record

MANIFEST.write_text(json.dumps({"version": 2, "files": files}, indent=2) + "\n", encoding="utf-8")
