import os

import unreal


DEST_ROOT = r"D:\2026 Spring\790\ThesisWebsite\assets\sequence-frames"
SEQUENCES = [
    {
        "slug": "walk",
        "asset_dir": "/Game/ArtAssets/Animation/Ani_Idle_Walk",
        "prefix": "timeline1",
        "count": 20,
    },
    {
        "slug": "sleep",
        "asset_dir": "/Game/ArtAssets/Animation/Ani_Idle_Sleep",
        "prefix": "Idle_Sleep",
        "count": 60,
    },
    {
        "slug": "poop",
        "asset_dir": "/Game/ArtAssets/Animation/Ani_Poop",
        "prefix": "Poop",
        "count": 40,
    },
    {
        "slug": "run",
        "asset_dir": "/Game/ArtAssets/Animation/Ani_Run_Rock",
        "prefix": "Run",
        "count": 16,
    },
    {
        "slug": "scratch",
        "asset_dir": "/Game/ArtAssets/Animation/Ani_ScratchingSofa",
        "prefix": "timeline",
        "count": 26,
    },
    {
        "slug": "warning",
        "asset_dir": "/Game/ArtAssets/Animation/Ani_Warning",
        "prefix": "Warning",
        "count": 30,
    },
]


def export_asset(asset_path, output_path):
    asset = unreal.EditorAssetLibrary.load_asset(asset_path)
    if not asset:
        unreal.log_warning(f"Missing asset: {asset_path}")
        return False

    task = unreal.AssetExportTask()
    task.object = asset
    task.filename = output_path
    task.automated = True
    task.replace_identical = True
    task.prompt = False

    exporter = unreal.TextureExporterPNG()
    task.exporter = exporter

    return unreal.Exporter.run_asset_export_task(task)


def main():
    total = 0
    for sequence in SEQUENCES:
        dest_dir = os.path.join(DEST_ROOT, sequence["slug"])
        os.makedirs(dest_dir, exist_ok=True)

        exported = 0
        for index in range(sequence["count"]):
            name = f"{sequence['prefix']}_{index:05d}"
            asset_path = f"{sequence['asset_dir']}/{name}.{name}"
            output_path = os.path.join(dest_dir, f"{sequence['slug']}_{index:02d}.png")
            if export_asset(asset_path, output_path):
                exported += 1
                total += 1
                unreal.log(f"Exported {output_path}")

        unreal.log(f"{sequence['slug']} frame export complete: {exported} frames")

    unreal.log(f"Sequence export complete: {total} frames")


main()
