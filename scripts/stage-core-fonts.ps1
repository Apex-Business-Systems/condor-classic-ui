$ErrorActionPreference = "Stop"

$RepoRoot = "C:\Users\bryce\condor-classic-ui"
$SourceRoot = Join-Path $RepoRoot "src\assets\fonts"
$DestRoot = Join-Path $SourceRoot "condor-source"

New-Item -ItemType Directory -Force $DestRoot | Out-Null

function Copy-FirstFont {
    param(
        [Parameter(Mandatory = $true)]
        [string]$ThemeFolder,

        [Parameter(Mandatory = $true)]
        [string]$Pattern,

        [Parameter(Mandatory = $true)]
        [string]$OutputName,

        [switch]$Largest
    )

    $SourceFolder = Join-Path $SourceRoot $ThemeFolder

    if (!(Test-Path $SourceFolder)) {
        Write-Warning "Missing source folder: $SourceFolder"
        return
    }

    $Matches = Get-ChildItem $SourceFolder -File |
        Where-Object { $_.Name -like $Pattern }

    if (!$Matches) {
        Write-Warning "No match in $ThemeFolder for pattern: $Pattern"
        return
    }

    if ($Largest) {
        $Selected = $Matches | Sort-Object Length -Descending | Select-Object -First 1
    } else {
        $Selected = $Matches | Sort-Object Name | Select-Object -First 1
    }

    $Destination = Join-Path $DestRoot $OutputName
    Copy-Item -Force $Selected.FullName $Destination

    Write-Host "Copied $($Selected.Name) -> $OutputName"
}

# Win3x: MS Sans Serif is the UI font.
Copy-FirstFont "win3x" "MS Sans Serif Regular - *.fon" "condor-win3x-ms-sans-serif.fon"

# Win9x: MS Sans Serif is still the classic UI font.
# There may be multiple candidates. This picks the largest by default.
Copy-FirstFont "win9x" "MS Sans Serif Regular - *.fon" "condor-win9x-ms-sans-serif.fon" -Largest

# WinXP: Tahoma for normal UI, Trebuchet MS for Luna title bars.
Copy-FirstFont "winxp" "Tahoma - *.ttf" "condor-winxp-tahoma.ttf" -Largest
Copy-FirstFont "winxp" "Tahoma Bold - *.ttf" "condor-winxp-tahoma-bold.ttf" -Largest
Copy-FirstFont "winxp" "Trebuchet MS - *.ttf" "condor-winxp-trebuchet-ms.ttf" -Largest
Copy-FirstFont "winxp" "Trebuchet MS Bold - *.ttf" "condor-winxp-trebuchet-ms-bold.ttf" -Largest

Write-Host ""
Write-Host "Done. Staged source fonts:"
Write-Host $DestRoot