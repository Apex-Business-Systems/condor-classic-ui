$ErrorActionPreference = "Stop"

$RepoRoot = "C:\Users\bryce\condor-classic-ui"
$SourceRoot = Join-Path $RepoRoot "src\assets\fonts"
$DestRoot = Join-Path $SourceRoot "condor"

New-Item -ItemType Directory -Force $DestRoot | Out-Null

function Copy-Font {
    param(
        [Parameter(Mandatory = $true)]
        [string]$ThemeFolder,

        [Parameter(Mandatory = $true)]
        [string]$Pattern,

        [Parameter(Mandatory = $true)]
        [string]$OutputName
    )

    $SourceFolder = Join-Path $SourceRoot $ThemeFolder

    if (!(Test-Path $SourceFolder)) {
        Write-Warning "Missing source folder: $SourceFolder"
        return
    }

    $Matches = Get-ChildItem $SourceFolder -File |
        Where-Object { $_.Name -like $Pattern } |
        Sort-Object Length -Descending

    if (!$Matches) {
        Write-Warning "No match in $ThemeFolder for pattern: $Pattern"
        return
    }

    $Selected = $Matches[0]
    $Destination = Join-Path $DestRoot $OutputName

    Copy-Item -Force $Selected.FullName $Destination

    Write-Host "Copied $($Selected.Name) -> $OutputName"
}

# Windows 3.x / 9x-era practical substitutes
Copy-Font "win3x" "Arial - *.ttf" "condor-win3x-arial.ttf"
Copy-Font "win3x" "Arial Bold - *.ttf" "condor-win3x-arial-bold.ttf"
Copy-Font "win3x" "Courier New - *.ttf" "condor-win3x-courier-new.ttf"
Copy-Font "win3x" "Courier New Bold - *.ttf" "condor-win3x-courier-new-bold.ttf"

# Windows 9x
Copy-Font "win9x" "Tahoma - *.ttf" "condor-win9x-tahoma.ttf"
Copy-Font "win9x" "Tahoma Bold - *.ttf" "condor-win9x-tahoma-bold.ttf"
Copy-Font "win9x" "Courier New - *.ttf" "condor-win9x-courier-new.ttf"
Copy-Font "win9x" "Courier New Bold - *.ttf" "condor-win9x-courier-new-bold.ttf"

# Windows XP
Copy-Font "winxp" "Tahoma - *.ttf" "condor-winxp-tahoma.ttf"
Copy-Font "winxp" "Tahoma Bold - *.ttf" "condor-winxp-tahoma-bold.ttf"
Copy-Font "winxp" "Trebuchet MS - *.ttf" "condor-winxp-trebuchet.ttf"
Copy-Font "winxp" "Trebuchet MS Bold - *.ttf" "condor-winxp-trebuchet-bold.ttf"
Copy-Font "winxp" "Lucida Console - *.ttf" "condor-winxp-lucida-console.ttf"
Copy-Font "winxp" "Microsoft Sans Serif - *.ttf" "condor-winxp-microsoft-sans-serif.ttf"

Write-Host ""
Write-Host "Done. Staged fonts are in:"
Write-Host $DestRoot