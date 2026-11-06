$repo = "https://github.com/VERCELVIDAI/doratools.git"
$toolsDir = "C:\Users\hks57\AppData\Local\git-portable"

# 1. Check if git is already extracted
$gitBin = "$toolsDir\cmd\git.exe"

if (-not (Test-Path $gitBin)) {
    Write-Output "Downloading standalone Git engine..."
    New-Item -ItemType Directory -Force -Path $toolsDir | Out-Null
    $zipPath = "$env:TEMP\mingit.zip"
    
    # Official MinGit release from git-for-windows
    $minGitUrl = "https://github.com/git-for-windows/git/releases/download/v2.47.1.windows.1/MinGit-2.47.1-64-bit.zip"
    
    Invoke-WebRequest -Uri $minGitUrl -OutFile $zipPath -UseBasicParsing
    Write-Output "Extracting Git..."
    Expand-Archive -Path $zipPath -DestinationPath $toolsDir -Force
    Remove-Item $zipPath -Force -ErrorAction SilentlyContinue
}

if (Test-Path $gitBin) {
    Write-Output "GIT_READY: $gitBin"
    & $gitBin --version

    Write-Output "Initializing repository..."
    & $gitBin init
    & $gitBin branch -M main
    & $gitBin config user.name "VERCELVIDAI"
    & $gitBin config user.email "vercelvidai@users.noreply.github.com"
    & $gitBin remote remove origin 2>$null
    & $gitBin remote add origin $repo

    Write-Output "Staging files..."
    & $gitBin add .

    Write-Output "Committing files..."
    & $gitBin commit -m "Initial commit: Dora Tools - Magical Gadget Multi-Tool SaaS Platform (50 Tools)"

    Write-Output "Pushing to GitHub repository..."
    $result = & $gitBin push -u origin main 2>&1
    Write-Output $result
} else {
    Write-Output "FAILED_TO_PREPARE_GIT"
}
