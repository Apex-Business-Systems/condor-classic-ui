$ErrorActionPreference = "Stop"

$RepoRoot = "C:\Users\bryce\condor-classic-ui"
$SourceRoot = Join-Path $RepoRoot "src\assets\fonts\condor-source"
$DestRoot = Join-Path $RepoRoot "src\assets\fonts\condor"
$FontForgeScript = Join-Path $RepoRoot "scripts\convert-font.pe"

New-Item -ItemType Directory -Force $DestRoot | Out-Null

function Convert-FonToTtf {
    param(
        [Parameter(Mandatory = $true)]
        [string]$InputName,

        [Parameter(Mandatory = $true)]
        [string]$OutputName
    )

    $InputPath = Join-Path $SourceRoot $InputName
    $OutputPath = Join-Path $DestRoot $OutputName

    if (!(Test-Path $InputPath)) {
        Write-Warning "Missing input font: $InputPath"
        return
    }

    Write-Host "Converting $InputName -> $OutputName"
    & "C:\Program Files\FontForgeBuilds\bin\fontforge.exe" -script $FontForgeScript $InputPath $OutputPath
}

function Copy-Ttf {
    param(
        [Parameter(Mandatory = $true)]
        [string]$InputName,

        [Parameter(Mandatory = $true)]
        [string]$OutputName
    )

    $InputPath = Join-Path $SourceRoot $InputName
    $OutputPath = Join-Path $DestRoot $OutputName

    if (!(Test-Path $InputPath)) {
        Write-Warning "Missing input font: $InputPath"
        return
    }

    Copy-Item -Force $InputPath $OutputPath
    Write-Host "Copied $InputName -> $OutputName"
}

Convert-FonToTtf "condor-win3x-ms-sans-serif.fon" "condor-win3x-ms-sans-serif.ttf"
Convert-FonToTtf "condor-win9x-ms-sans-serif.fon" "condor-win9x-ms-sans-serif.ttf"

Copy-Ttf "condor-winxp-tahoma.ttf" "condor-winxp-tahoma.ttf"
Copy-Ttf "condor-winxp-tahoma-bold.ttf" "condor-winxp-tahoma-bold.ttf"
Copy-Ttf "condor-winxp-trebuchet-ms.ttf" "condor-winxp-trebuchet-ms.ttf"
Copy-Ttf "condor-winxp-trebuchet-ms-bold.ttf" "condor-winxp-trebuchet-ms-bold.ttf"

Write-Host ""
Write-Host "Done. Browser-usable fonts:"
Write-Host $DestRoot