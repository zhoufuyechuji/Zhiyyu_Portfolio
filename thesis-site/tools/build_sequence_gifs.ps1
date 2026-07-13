Add-Type -AssemblyName PresentationCore
Add-Type -AssemblyName WindowsBase

$Root = "D:\2026 Spring\790\ThesisWebsite\assets\sequence-frames"
$OutDir = "D:\2026 Spring\790\ThesisWebsite\assets"

$Sequences = @(
  @{ Slug = "walk";    Output = "cat-walk.gif";    Crop = @(180, 220, 700, 560); Scale = 0.42; Delay = 8  },
  @{ Slug = "run";     Output = "cat-run.gif";     Crop = @(180, 220, 700, 560); Scale = 0.40; Delay = 7  },
  @{ Slug = "scratch"; Output = "cat-scratch.gif"; Crop = @(260, 260, 520, 500); Scale = 0.42; Delay = 8  },
  @{ Slug = "sleep";   Output = "cat-sleep.gif";   Crop = $null;                 Scale = 0.50; Delay = 10 },
  @{ Slug = "warning"; Output = "cat-warning.gif"; Crop = $null;                 Scale = 0.48; Delay = 8  }
)

foreach ($seq in $Sequences) {
  $encoder = New-Object System.Windows.Media.Imaging.GifBitmapEncoder
  $files = Get-ChildItem -LiteralPath (Join-Path $Root $seq.Slug) -Filter "$($seq.Slug)_*.png" | Sort-Object Name

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

      $metadata = New-Object System.Windows.Media.Imaging.BitmapMetadata("gif")
      $metadata.SetQuery("/grctlext/Delay", [UInt16]$seq.Delay)
      $metadata.SetQuery("/grctlext/Disposal", [Byte]2)

      $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($scaled, $null, $metadata, $null))
    }
    finally {
      $stream.Close()
    }
  }

  $output = Join-Path $OutDir $seq.Output
  $outStream = [System.IO.File]::Create($output)
  try {
    $encoder.Save($outStream)
  }
  finally {
    $outStream.Close()
  }

  Write-Output $output
}
