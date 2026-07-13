Add-Type -AssemblyName PresentationCore
Add-Type -AssemblyName WindowsBase

$FrameDir = "D:\2026 Spring\790\ThesisWebsite\assets\walk-frames"
$Output = "D:\2026 Spring\790\ThesisWebsite\assets\cat-walk.gif"
$Crop = New-Object System.Windows.Int32Rect(180, 220, 700, 560)
$Scale = 0.42

$encoder = New-Object System.Windows.Media.Imaging.GifBitmapEncoder
$files = Get-ChildItem -LiteralPath $FrameDir -Filter "walk_*.png" | Sort-Object Name

foreach ($file in $files) {
  $stream = [System.IO.File]::OpenRead($file.FullName)
  try {
    $decoder = New-Object System.Windows.Media.Imaging.PngBitmapDecoder(
      $stream,
      [System.Windows.Media.Imaging.BitmapCreateOptions]::PreservePixelFormat,
      [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad
    )
    $source = $decoder.Frames[0]
    $cropped = New-Object System.Windows.Media.Imaging.CroppedBitmap($source, $Crop)
    $scaled = New-Object System.Windows.Media.Imaging.TransformedBitmap(
      $cropped,
      (New-Object System.Windows.Media.ScaleTransform($Scale, $Scale))
    )

    $metadata = New-Object System.Windows.Media.Imaging.BitmapMetadata("gif")
    $metadata.SetQuery("/grctlext/Delay", [UInt16]8)
    $metadata.SetQuery("/grctlext/Disposal", [Byte]2)

    $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($scaled, $null, $metadata, $null))
  }
  finally {
    $stream.Close()
  }
}

$outStream = [System.IO.File]::Create($Output)
try {
  $encoder.Save($outStream)
}
finally {
  $outStream.Close()
}

Write-Output $Output
