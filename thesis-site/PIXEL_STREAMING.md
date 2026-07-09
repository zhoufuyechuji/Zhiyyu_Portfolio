# Pixel Streaming Setup

This site is prepared to link to a browser-playable Unreal Engine build through Pixel Streaming.

## Current Build

Packaged Windows build:

```text
D:\2026 Spring\790\Pet\Saved\StagedBuilds\Windows\Pet.exe
```

## Local Demo Flow

1. Open the Unreal Engine Pixel Streaming Signalling Web Server.
2. Start the signalling server locally.
3. Launch the packaged game with:

```powershell
& "D:\2026 Spring\790\Pet\Saved\StagedBuilds\Windows\Pet.exe" -PixelStreamingURL=ws://127.0.0.1:8888 -ResX=1920 -ResY=1080 -Windowed
```

4. Open the browser page served by the Pixel Streaming server.

The website's Web Play panel points to the local stream page. For a public web demo, run the same stack on a GPU machine or cloud instance and update the button URL in `index.html`.
