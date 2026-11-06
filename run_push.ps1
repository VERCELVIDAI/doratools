$repo = "https://github.com/VERCELVIDAI/doratools.git"

$gitExe = $null

$candidates = @(
    "git",
    "C:\Program Files\Git\cmd\git.exe",
    "C:\Program Files\Git\bin\git.exe",
    "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe",
    "$env:LOCALAPPDATA\Programs\Git\bin\git.exe",
    "C:\Program Files (x86)\Git\cmd\git.exe",
    "C:\ProgramData\chocolatey\bin\git.exe",
    "$env:USERPROFILE\scoop\shims\git.exe"
)

foreach ($c in $candidates) {
    if (Get-Command $c -ErrorAction SilentlyContinue) {
        $gitExe = $c
        break
    }
    if (Test-Path $c) {
        $gitExe = $c
        break
    }
}

# Also search GitHub Desktop's embedded git
if (-not $gitExe) {
    $ghDesktopGit = Get-ChildItem "$env:LOCALAPPDATA\GitHubDesktop\app-*\resources\app\git\cmd\git.exe" -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($ghDesktopGit) {
        $gitExe = $ghDesktopGit.FullName
    }
}

if (-not $gitExe) {
    Write-Output "GIT_NOT_FOUND"
    exit 1
}

Write-Output "USING_GIT: $gitExe"

& $gitExe init
& $gitExe branch -M main
& $gitExe config user.name "VERCELVIDAI"
& $gitExe config user.email "vercelvidai@users.noreply.github.com"
& $gitExe remote remove origin 2>$null
& $gitExe remote add origin $repo
& $gitExe add .
& $gitExe commit -m "Initial commit: Dora Tools - Magical Gadget Multi-Tool Platform (50 Tools)"
$pushResult = & $gitExe push -u origin main 2>&1
Write-Output $pushResult
