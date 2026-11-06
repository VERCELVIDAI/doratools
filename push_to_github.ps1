# DORA TOOLS - Git Setup & Push to GitHub Script
param(
    [string]$RemoteUrl = ""
)

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "   DORA TOOLS - Git Setup & Push to GitHub" -ForegroundColor Yellow
Write-Host "============================================================" -ForegroundColor Cyan

# Locate Git
$gitCmd = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitCmd) {
    # Check default paths
    $defaultPaths = @(
        "C:\Program Files\Git\cmd\git.exe",
        "C:\Program Files\Git\bin\git.exe",
        "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe",
        "C:\Program Files (x86)\Git\cmd\git.exe"
    )
    foreach ($p in $defaultPaths) {
        if (Test-Path $p) {
            $gitCmd = $p
            break
        }
    }
}

if (-not $gitCmd) {
    Write-Host "[ERROR] Git was not found on this machine." -ForegroundColor Red
    Write-Host "Please download Git from https://git-scm.com/download/win and run this script again." -ForegroundColor White
    exit 1
}

$git = if ($gitCmd -is [string]) { $gitCmd } else { $gitCmd.Source }
Write-Host "Using Git binary at: $git" -ForegroundColor Green

# 1. Init
if (-not (Test-Path ".git")) {
    Write-Host "[1/4] Initializing Git repository..." -ForegroundColor Cyan
    & $git init
    & $git branch -M main
}

# 2. Stage
Write-Host "[2/4] Staging all files..." -ForegroundColor Cyan
& $git add .

# 3. Commit
Write-Host "[3/4] Committing repository..." -ForegroundColor Cyan
& $git commit -m "Initial commit: Dora Tools - Magical Gadget Multi-Tool SaaS Platform (50 Functional Tools)"

# 4. Remote & Push
if (-not $RemoteUrl) {
    $RemoteUrl = Read-Host "Enter your GitHub Repository URL (e.g. https://github.com/username/doratools.git)"
}

if ($RemoteUrl) {
    Write-Host "[4/4] Pushing to GitHub repository: $RemoteUrl" -ForegroundColor Cyan
    & $git remote remove origin 2>$null
    & $git remote add origin $RemoteUrl
    & $git push -u origin main
    Write-Host "`n[SUCCESS] Successfully pushed to GitHub!" -ForegroundColor Green
} else {
    Write-Host "No URL provided. You can push anytime with:" -ForegroundColor Yellow
    Write-Host "  git remote add origin YOUR_GITHUB_URL"
    Write-Host "  git push -u origin main"
}
