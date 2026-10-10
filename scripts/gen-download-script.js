const fs = require("fs");
const path = require("path");

const jobs = JSON.parse(fs.readFileSync(path.join(__dirname, "raw", "image-jobs.json"), "utf8"));

const lines = jobs.map((j) => `  @("${j.local.replace(/\\/g, "/")}", "${j.url}"),`);

const ps1 = `# Downloads every Hallmark product image, brand logo, and the site logo into ./images/
# (matching the paths referenced by js/products.js). Source: hallmarkworld.com's public catalog API.
# Run:  powershell -ExecutionPolicy Bypass -File .\\download-images.ps1

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot

$jobs = @(
${lines.join("\n")}
  @("images/logo-white.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1773566375/hallmark/assets/img/logo-white.png")
)

$dirs = $jobs | ForEach-Object { Join-Path $root (Split-Path $_[0] -Parent) } | Select-Object -Unique
foreach ($d in $dirs) { New-Item -ItemType Directory -Force -Path $d | Out-Null }

$ok = 0
foreach ($j in $jobs) {
  $out = Join-Path $root $j[0]
  try {
    Invoke-WebRequest -Uri $j[1] -OutFile $out -UseBasicParsing
    Write-Host "OK   $($j[0])"; $ok++
  } catch {
    Write-Host "FAIL $($j[0]) -> $($_.Exception.Message)" -ForegroundColor Red
  }
}
Write-Host "\`nDone: $ok of $($jobs.Count) images saved under $root\\images"
`;

fs.writeFileSync(path.join(__dirname, "..", "download-images.ps1"), ps1);
console.log("Wrote download-images.ps1 with", jobs.length + 1, "jobs");
