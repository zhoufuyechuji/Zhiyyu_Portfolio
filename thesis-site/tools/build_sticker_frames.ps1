Add-Type -AssemblyName PresentationCore
Add-Type -AssemblyName WindowsBase

$Root = "D:\2026 Spring\790\ThesisWebsite\assets\sequence-frames"
$OutRoot = "D:\2026 Spring\790\ThesisWebsite\assets\sticker-frames"

$Sequences = @(
  @{ Slug = "walk";    Crop = @(180, 220, 700, 560); Scale = 0.42 },
  @{ Slug = "run";     Crop = @(180, 220, 700, 560); Scale = 0.40 },
  @{ Slug = "scratch"; Crop = @(260, 260, 520, 500); Scale = 0.42 },
  @{ Slug = "sleep";   Crop = $null;                 Scale = 0.50 },
  @{ Slug = "warning"; Crop = $null;                 Scale = 0.48 }
)

foreach ($seq in $Sequences) {
  $sourceDir = Join-Path $Root $seq.Slug
  $outDir = Join-Path $OutRoot $seq.Slug

  if (!(Test-Path -LiteralPath $outDir)) {
    New-Item -ItemType Directory -Path $outDir | Out-Null
  }

  $files = Get-ChildItem -LiteralPath $sourceDir -Filter "$($seq.Slug)_*.png" | Sort-Object Name

  foreach ($file in $files) {
    $stream = [System.IO.File]::OpenRead($file.FullName)
    try {
      $decoder = New-Object System.Windows.Media.Imaging.PngBitmapDecoder(
        $stream,
        [System.Windows.Media.Imaging.BitmapCreateOptions]::PreservePixelFormat,
        [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad
      )
      $source = $decoder.Frames[0]

      if ($seq.Crop) {
        $rect = New-Object System.Windows.Int32Rect($seq.Crop[0], $seq.Crop[1], $seq.Crop[2], $seq.Crop[3])
        $source = New-Object System.Windows.Media.Imaging.CroppedBitmap($source, $rect)
      }

      $scaled = New-Object System.Windows.Media.Imaging.TransformedBitmap(
        $source,
        (New-Object System.Windows.Media.ScaleTransform($seq.Scale, $seq.Scale))
      )

      $encoder = New-Object System.Windows.Media.Imaging.PngBitmapEncoder
      $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($scaled))
      $output = Join-Path $outDir $file.Name
      $outStream = [System.IO.File]::Create($output)
      try {
        $encoder.Save($outStream)
      }
      finally {
        $outStream.Close()
      }
    }
    finally {
      $stream.Close()
    }
  }

  Write-Output $outDir
}
