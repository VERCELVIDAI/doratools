@echo off
echo ============================================================
echo   DORA TOOLS - Git Setup ^& Push to GitHub
echo ============================================================
echo.

:: Check if Git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git is not found in your PATH.
    echo Please install Git for Windows from https://git-scm.com/
    echo or ensure Git is added to your environment variables.
    pause
    exit /b 1
)

echo [1/4] Initializing Git repository...
if not exist ".git" (
    git init
    git branch -M main
)

echo [2/4] Staging files...
git add .

echo [3/4] Committing files...
git commit -m "Initial commit: Dora Tools - Magical Gadget Multi-Tool SaaS Platform (50 Functional Tools)"

echo.
echo ============================================================
echo   Repository Committed Locally!
echo ============================================================
echo.
set /p REPO_URL="Enter your GitHub Repository Remote URL (e.g. https://github.com/username/doratools.git): "

if "%REPO_URL%"=="" (
    echo No remote URL entered. You can add it later using:
    echo   git remote add origin YOUR_REPO_URL
    echo   git push -u origin main
) else (
    echo Adding remote origin...
    git remote remove origin 2>nul
    git remote add origin %REPO_URL%
    echo Pushing to GitHub main branch...
    git push -u origin main
    echo.
    echo [SUCCESS] Pushed to GitHub!
)

pause
