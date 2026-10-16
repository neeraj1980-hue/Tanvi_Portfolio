@echo off
title Push Tanvi Portfolio to GitHub
color 0b
echo ================================================================
echo          Tanvi Dubey Portfolio - Push to GitHub
echo ================================================================
echo.
echo GitHub requires a Personal Access Token to authenticate.
echo If you don't have one yet, generate it here (takes 20 seconds):
echo https://github.com/settings/tokens/new?scopes=repo^&description=TanviPortfolio
echo.
set /p TOKEN="Paste your GitHub Token (starts with ghp_): "

if "%TOKEN%"=="" (
    echo.
    echo [ERROR] No token entered. Please run again and paste your token.
    echo.
    pause
    exit /b 1
)

echo.
echo Pushing repository to https://github.com/neeraj1980-hue/Tanvi_Portfolio.git ...
git push https://%TOKEN%@github.com/neeraj1980-hue/Tanvi_Portfolio.git main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ================================================================
    echo [SUCCESS] Code pushed successfully to GitHub!
    echo Visit: https://github.com/neeraj1980-hue/Tanvi_Portfolio
    echo ================================================================
) else (
    echo.
    echo [ERROR] Push failed. Please verify your token has 'repo' permissions.
)

echo.
pause
