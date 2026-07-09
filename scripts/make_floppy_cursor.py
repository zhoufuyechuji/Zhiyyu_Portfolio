from pathlib import Path
from PIL import Image, ImageEnhance


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "vapor-assets" / "source" / "floppy-backup-source.png"
OUT = ROOT / "assets" / "vapor-assets" / "cropped" / "floppy-backup-cursor.png"


def main():
    image = Image.open(SRC).convert("RGBA")
    image = ImageEnhance.Color(image).enhance(0.72)
    image = ImageEnhance.Contrast(image).enhance(0.96)

    pixels = image.load()
    for y in range(image.height):
        for x in range(image.width):
            r, g, b, a = pixels[x, y]
            # Remove the dark CRT background while keeping the disk's dark outlines.
            if r < 22 and g < 28 and b < 58:
                pixels[x, y] = (r, g, b, 0)
            elif r < 34 and g < 42 and b < 76:
                pixels[x, y] = (r, g, b, min(a, 42))

    bbox = image.getbbox()
    if bbox:
        image = image.crop(bbox)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    image.save(OUT)
    print(f"saved {OUT} {image.size}")


if __name__ == "__main__":
    main()
