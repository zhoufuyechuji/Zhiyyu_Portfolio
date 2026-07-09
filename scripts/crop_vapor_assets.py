from pathlib import Path
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "vapor-assets" / "source"
OUT = ROOT / "assets" / "vapor-assets" / "cropped"
OUT.mkdir(parents=True, exist_ok=True)


def scaled_box(box, source_size, reference_size):
    sx = source_size[0] / reference_size[0]
    sy = source_size[1] / reference_size[1]
    return tuple(round(value * (sx if index % 2 == 0 else sy)) for index, value in enumerate(box))


def crop_asset(source_name, output_name, box, remove_dark=True, pad=0, reference_size=None):
    source = Image.open(SRC / source_name).convert("RGBA")
    if reference_size:
        box = scaled_box(box, source.size, reference_size)
    crop = source.crop(box)
    if pad:
        canvas = Image.new("RGBA", (crop.width + pad * 2, crop.height + pad * 2), (0, 0, 0, 0))
        canvas.alpha_composite(crop, (pad, pad))
        crop = canvas
    if remove_dark:
        pixels = crop.load()
        for y in range(crop.height):
            for x in range(crop.width):
                r, g, b, a = pixels[x, y]
                # The sheets use a nearly black CRT background. Keep colored/pink/blue UI, fade the dark backing.
                if r < 32 and g < 38 and b < 56:
                    pixels[x, y] = (r, g, b, 0)
                elif r < 48 and g < 54 and b < 74:
                    pixels[x, y] = (r, g, b, min(a, 70))
    crop.save(OUT / output_name)


def main():
    for p in SRC.glob("*.png"):
        im = Image.open(p)
        print(f"{p.name}: {im.size}")

    # desktop-sheet.png is 1792x1001.
    desktop = "desktop-sheet.png"
    desktop_ref = (1792, 1001)
    crop_asset(desktop, "window-now-playing.png", (680, 72, 1038, 318), reference_size=desktop_ref)
    crop_asset(desktop, "window-note.png", (1093, 72, 1351, 324), reference_size=desktop_ref)
    crop_asset(desktop, "window-error.png", (1421, 70, 1710, 271), reference_size=desktop_ref)
    crop_asset(desktop, "window-system.png", (1422, 315, 1707, 486), reference_size=desktop_ref)
    crop_asset(desktop, "window-my-computer.png", (523, 418, 1080, 800), reference_size=desktop_ref)
    crop_asset(desktop, "cassette-code-mix.png", (57, 408, 420, 623), reference_size=desktop_ref)
    crop_asset(desktop, "desktop-folders.png", (63, 64, 618, 177), reference_size=desktop_ref)
    crop_asset(desktop, "desktop-disks.png", (62, 218, 517, 381), reference_size=desktop_ref)
    crop_asset(desktop, "desktop-hearts.png", (1163, 407, 1259, 664), reference_size=desktop_ref)
    crop_asset(desktop, "taskbar.png", (55, 850, 1734, 915), remove_dark=False, reference_size=desktop_ref)

    # cat-sheet.png is 1024x1024.
    cats = "cat-sheet.png"
    icon_ref = (1024, 1024)
    crop_asset(cats, "cat-blue-head.png", (45, 55, 210, 175), reference_size=icon_ref)
    crop_asset(cats, "cat-pink-head.png", (260, 58, 410, 170), reference_size=icon_ref)
    crop_asset(cats, "cat-window.png", (802, 50, 982, 198), reference_size=icon_ref)
    crop_asset(cats, "cat-disk-blue.png", (45, 240, 205, 372), reference_size=icon_ref)
    crop_asset(cats, "cat-sleeping.png", (48, 422, 209, 545), reference_size=icon_ref)
    crop_asset(cats, "cat-monitor.png", (635, 425, 791, 552), reference_size=icon_ref)
    crop_asset(cats, "cat-ufo.png", (826, 420, 1008, 555), reference_size=icon_ref)
    crop_asset(cats, "cat-cursor.png", (44, 570, 147, 664), reference_size=icon_ref)
    crop_asset(cats, "cat-paw.png", (40, 688, 144, 782), reference_size=icon_ref)
    crop_asset(cats, "cat-fish.png", (823, 702, 962, 792), reference_size=icon_ref)
    crop_asset(cats, "cat-sparkles.png", (40, 895, 978, 997), reference_size=icon_ref)

    # ui-sheet.png is 1024x1024.
    ui = "ui-sheet.png"
    crop_asset(ui, "ui-system.png", (37, 40, 260, 180), reference_size=icon_ref)
    crop_asset(ui, "ui-error-small.png", (279, 40, 505, 180), reference_size=icon_ref)
    crop_asset(ui, "ui-note-small.png", (528, 43, 685, 178), reference_size=icon_ref)
    crop_asset(ui, "ui-player.png", (724, 40, 994, 227), reference_size=icon_ref)
    crop_asset(ui, "ui-inbox.png", (38, 218, 352, 469), reference_size=icon_ref)
    crop_asset(ui, "ui-explorer.png", (382, 222, 655, 470), reference_size=icon_ref)
    crop_asset(ui, "ui-welcome.png", (290, 692, 535, 836), reference_size=icon_ref)
    crop_asset(ui, "ui-dialog.png", (41, 694, 261, 837), reference_size=icon_ref)
    crop_asset(ui, "ui-buttons.png", (348, 511, 590, 672), reference_size=icon_ref)
    crop_asset(ui, "ui-search.png", (566, 795, 834, 878), reference_size=icon_ref)
    crop_asset(ui, "ui-icons.png", (677, 262, 962, 407), reference_size=icon_ref)


if __name__ == "__main__":
    main()
