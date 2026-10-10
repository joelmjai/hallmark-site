# Downloads every Hallmark product image, brand logo, and the site logo into ./images/
# (matching the paths referenced by js/products.js). Source: hallmarkworld.com's public catalog API.
# Run:  powershell -ExecutionPolicy Bypass -File .\download-images.ps1

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot

$jobs = @(
  @("images/products/500ml-combo-pack-toilet-cleaner-dishwash-liquid-floor-cleaner-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1790840761/hallmark/products/500ml-combo-pack-toilet-cleaner-dishwash-liquid-floor-cleaner/1.png"),
  @("images/products/250ml-combo-pack-toilet-cleaner-dishwash-liquid-floor-cleaner-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1790840540/hallmark/products/250ml-combo-pack-toilet-cleaner-dishwash-liquid-floor-cleaner/1.png"),
  @("images/products/soph-fair-deal-liquid-detergent-5-ltr-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1781154950/hallmark/products/soph-fair-deal-liquid-detergent-5-ltr/1.png"),
  @("images/products/soph-fair-deal-liquid-detergent-5-ltr-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1781154951/hallmark/products/soph-fair-deal-liquid-detergent-5-ltr/2.png"),
  @("images/products/soph-fair-deal-liquid-detergent-5-ltr-3.jpg", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1781154951/hallmark/products/soph-fair-deal-liquid-detergent-5-ltr/3.jpg"),
  @("images/products/soph-fair-deal-liquid-detergent-5-ltr-4.jpg", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1781154952/hallmark/products/soph-fair-deal-liquid-detergent-5-ltr/4.jpg"),
  @("images/products/soph-fair-deal-liquid-detergent-5-ltr-5.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1781155183/hallmark/products/soph-fair-deal-liquid-detergent-5-ltr/5.png"),
  @("images/products/punch-detergent-liquid-5kg-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1788179422/hallmark/products/punch-detergent-liquid-5kg/1.png"),
  @("images/products/punch-detergent-liquid-5kg-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1788179423/hallmark/products/punch-detergent-liquid-5kg/2.png"),
  @("images/products/soph-fair-deal-dishwash-liquid-500ml-green-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1785232468/hallmark/products/soph-fair-deal-dishwash-liquid-500ml-green/1.png"),
  @("images/products/soph-fair-deal-dishwash-liquid-500ml-green-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1784032209/hallmark/products/soph-fair-deal-dishwash-liquid-500ml-green/2.png"),
  @("images/products/soph-fair-deal-dishwash-liquid-500ml-green-3.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1784032231/hallmark/products/soph-fair-deal-dishwash-liquid-500ml-green/3.png"),
  @("images/products/soph-fair-deal-dishwash-liquid-250ml-green-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1785232260/hallmark/products/soph-fair-deal-dishwash-liquid-250ml-green/1.png"),
  @("images/products/soph-fair-deal-dishwash-liquid-250ml-green-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1784032520/hallmark/products/soph-fair-deal-dishwash-liquid-250ml-green/2.png"),
  @("images/products/soph-fair-deal-dishwash-liquid-250ml-green-3.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1784032544/hallmark/products/soph-fair-deal-dishwash-liquid-250ml-green/3.png"),
  @("images/products/emitol-toilet-cleaner-1-ltr-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1785231900/hallmark/products/emitol-toilet-cleaner-1-ltr/1.png"),
  @("images/products/emitol-toilet-cleaner-1-ltr-2.jpg", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1785231900/hallmark/products/emitol-toilet-cleaner-1-ltr/2.jpg"),
  @("images/products/emitol-toilet-cleaner-1-ltr-3.jpg", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1785231901/hallmark/products/emitol-toilet-cleaner-1-ltr/3.jpg"),
  @("images/products/emitol-toilet-cleaner-500ml-single-pc-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1785231507/hallmark/products/emitol-toilet-cleaner-500ml-single-pc/1.png"),
  @("images/products/emitol-toilet-cleaner-500ml-single-pc-2.jpg", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1778172515/hallmark/products/emitol-toilet-cleaner-500ml-single-pc/2.jpg"),
  @("images/products/emitol-toilet-cleaner-500ml-single-pc-3.jpg", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1783516236/hallmark/products/emitol-toilet-cleaner-500ml-single-pc/3.jpg"),
  @("images/products/emitol-toilet-cleaner-250ml-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1785231268/hallmark/products/emitol-toilet-cleaner-250ml/1.png"),
  @("images/products/emitol-toilet-cleaner-250ml-2.jpg", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1785231269/hallmark/products/emitol-toilet-cleaner-250ml/2.jpg"),
  @("images/products/emitol-toilet-cleaner-250ml-3.jpg", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1785231270/hallmark/products/emitol-toilet-cleaner-250ml/3.jpg"),
  @("images/products/soph-fair-deal-detergent-liquid-1-ltr-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1785152867/hallmark/products/soph-fair-deal-detergent-liquid-1-ltr/1.png"),
  @("images/products/soph-fair-deal-detergent-liquid-1-ltr-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1784277546/hallmark/products/soph-fair-deal-detergent-liquid-1-ltr/2.png"),
  @("images/products/soph-fair-deal-detergent-liquid-500ml-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1785152827/hallmark/products/soph-fair-deal-detergent-liquid-500ml/1.png"),
  @("images/products/soph-fair-deal-detergent-liquid-500ml-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1785152828/hallmark/products/soph-fair-deal-detergent-liquid-500ml/2.png"),
  @("images/products/soph-fair-deal-liquid-detergent-1-ltr-pouch-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1784885957/hallmark/products/soph-fair-deal-liquid-detergent-1-ltr-pouch/1.png"),
  @("images/products/soph-fair-deal-liquid-detergent-1-ltr-pouch-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1783070874/hallmark/products/soph-fair-deal-liquid-detergent-1-ltr-pouch/2.png"),
  @("images/products/vita-rich-rice-flakes-avil-400g-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1774879460/hallmark/products/vita-rich-rice-flakes-avil-400g/1.png"),
  @("images/products/river-hill-premium-dust-tea-100g-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1779005640/hallmark/products/river-hill-premium-dust-tea-100g/1.png"),
  @("images/products/river-hill-premium-dust-tea-100g-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1779005640/hallmark/products/river-hill-premium-dust-tea-100g/2.png"),
  @("images/products/fabritt-fabric-conditioner-60ml-highly-perfumed-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1779716994/hallmark/products/499/1.png"),
  @("images/products/fabritt-fabric-conditioner-60ml-highly-perfumed-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1779716995/hallmark/products/499/2.png"),
  @("images/products/soph-fair-deal-washing-powder-rs-10-pack-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1782890119/hallmark/products/soph-fair-deal-washing-powder-rs-10-pack/1.png"),
  @("images/products/soph-fair-deal-washing-powder-rs-10-pack-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1782888547/hallmark/products/soph-fair-deal-washing-powder-rs-10-pack/2.png"),
  @("images/products/soph-mediplus-lavender-handwash-250ml-combo-pack-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1779006542/hallmark/products/soph-mediplus-lavender-handwash-250ml-combo-pack/1.png"),
  @("images/products/soph-mediplus-lavender-handwash-250ml-combo-pack-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1783574815/hallmark/products/soph-mediplus-lavender-handwash-250ml-combo-pack/2.png"),
  @("images/products/soph-fair-deal-liquid-detergent-70ml-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1784095324/hallmark/products/soph-fair-deal-liquid-detergent-70ml/1.png"),
  @("images/products/emitol-floor-cleaner-lavender-250ml-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1784811852/hallmark/products/emitol-floor-cleaner-lavender-250ml/1.png"),
  @("images/products/emitol-floor-cleaner-lavender-250ml-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1784792049/hallmark/products/emitol-floor-cleaner-lavender-250ml/2.png"),
  @("images/products/emitol-floor-cleaner-lavender-500ml-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1784811660/hallmark/products/emitol-floor-cleaner-lavender-500ml/1.png"),
  @("images/products/emitol-floor-cleaner-lavender-500ml-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1784792469/hallmark/products/emitol-floor-cleaner-lavender-500ml/2.png"),
  @("images/products/foline-multi-purpose-cleaning-liquid-1-ltr-each-assorted-set-of-4-pcs-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1779093372/hallmark/products/foline-multi-purpose-cleaning-liquid-1-ltr-each-assorted-set-of-4-pcs/1.png"),
  @("images/products/foline-multi-purpose-cleaning-liquid-1-ltr-each-assorted-set-of-4-pcs-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1779093373/hallmark/products/foline-multi-purpose-cleaning-liquid-1-ltr-each-assorted-set-of-4-pcs/2.png"),
  @("images/products/soph-mediplus-aloevera-handwash-250ml-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1774454489/hallmark/products/soph-mediplus-aloevera-handwash-250ml/1.png"),
  @("images/products/soph-mediplus-aloevera-handwash-250ml-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1783667337/hallmark/products/soph-mediplus-aloevera-handwash-250ml/2.png"),
  @("images/products/soph-fair-deal-dishwash-liquid-500ml-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1781375245/hallmark/products/soph-fair-deal-dishwash-liquid-500ml/1.png"),
  @("images/products/soph-fair-deal-dishwash-liquid-500ml-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1781375245/hallmark/products/soph-fair-deal-dishwash-liquid-500ml/2.png"),
  @("images/products/soph-fair-deal-dishwash-liquid-500ml-3.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1782911965/hallmark/products/soph-fair-deal-dishwash-liquid-500ml/3.png"),
  @("images/products/soph-fair-deal-dishwash-liquid-250ml-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1781376146/hallmark/products/soph-fair-deal-dishwash-liquid-250ml/1.png"),
  @("images/products/soph-fair-deal-dishwash-liquid-250ml-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1781376147/hallmark/products/soph-fair-deal-dishwash-liquid-250ml/2.png"),
  @("images/products/soph-fair-deal-dishwash-liquid-250ml-3.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1782911820/hallmark/products/soph-fair-deal-dishwash-liquid-250ml/3.png"),
  @("images/products/soph-fair-deal-washing-powder-1-1-kg-combo-pack-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1782887959/hallmark/products/soph-fair-deal-washing-powder-1-1-kg-combo-pack/1.png"),
  @("images/products/soph-fair-deal-washing-powder-1-1-kg-combo-pack-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1782887960/hallmark/products/soph-fair-deal-washing-powder-1-1-kg-combo-pack/2.png"),
  @("images/products/hallmark-premium-tissue-box-2-ply-100-pulls-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1782813904/hallmark/products/hallmark-premium-tissue-box-2-ply-100-pulls/1.png"),
  @("images/products/hallmark-premium-tissue-box-2-ply-100-pulls-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1782813905/hallmark/products/hallmark-premium-tissue-box-2-ply-100-pulls/2.png"),
  @("images/products/foline-detergent-powder-500g-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1781597588/hallmark/products/foline-detergent-powder-500g/1.png"),
  @("images/products/soph-fair-deal-detergent-liquid-3-ltr-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1781597751/hallmark/products/soph-fair-deal-detergent-liquid-3-ltr/5.png"),
  @("images/products/river-hill-premium-dust-tea-250g-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1779005249/hallmark/products/river-hill-premium-dust-tea-250g/1.png"),
  @("images/products/river-hill-premium-dust-tea-250g-2.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1779005675/hallmark/products/river-hill-premium-dust-tea-250g/2.png"),
  @("images/products/vita-rich-white-chana-vella-kadala-500g-1.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1774878771/hallmark/products/vita-rich-white-chana-vella-kadala-500g/1.png"),
  @("images/brands/emitol.jpg", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1774452018/hallmark/brands/emitol/logo.jpg"),
  @("images/brands/fabritt.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1773861825/hallmark/brands/fabritt/logo.png"),
  @("images/brands/hallmark.jpg", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1774451925/hallmark/brands/hallmark/logo.jpg"),
  @("images/brands/pdm-maharaja.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1773861893/hallmark/brands/pdm-maharaja/logo.png"),
  @("images/brands/punch.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1788239150/hallmark/brands/punch/logo.png"),
  @("images/brands/river-hill-tea.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1773863135/hallmark/brands/river-hill-tea/logo.png"),
  @("images/brands/soph.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1773863159/hallmark/brands/soph/logo.png"),
  @("images/brands/soph-mediplus-aloevera-handwash-250ml.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1774454134/hallmark/brands/soph-mediplus-aloevera-handwash-250ml/logo.png"),
  @("images/brands/vita-rich.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1773861916/hallmark/brands/vita-rich/logo.png"),
  @("images/logo-white.png", "https://res.cloudinary.com/dif9yrwp2/image/upload/v1773566375/hallmark/assets/img/logo-white.png"),
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
Write-Host "`nDone: $ok of $($jobs.Count) images saved under $root\images"
