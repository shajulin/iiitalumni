@echo off
echo ==========================================
echo  Alumni Portal - Birthday Wish Tracker
echo  Starting ngrok public tunnel...
echo ==========================================
echo.

:: Check if XAMPP Apache is running on port 80
netstat -an | findstr ":80 " > nul
if errorlevel 1 (
    echo [ERROR] XAMPP Apache does not appear to be running on port 80.
    echo Please start Apache in XAMPP Control Panel first!
    pause
    exit /b 1
)
echo [OK] XAMPP Apache is running.
echo.

:: Start ngrok on port 80 in background and wait for it to initialize
echo Starting ngrok tunnel on port 80...
start "" "D:\xampp\ngrok\ngrok.exe" http 80
echo Waiting for ngrok to start...
timeout /t 3 /nobreak > nul

:: Get the public URL from ngrok API
echo Fetching ngrok public URL...
for /f "delims=" %%i in ('powershell -command "(Invoke-WebRequest -Uri http://127.0.0.1:4040/api/tunnels -UseBasicParsing | ConvertFrom-Json).tunnels[0].public_url"') do set NGROK_URL=%%i

if "%NGROK_URL%"=="" (
    echo [ERROR] Could not get ngrok URL. Make sure ngrok started correctly.
    echo Check the ngrok window for errors.
    pause
    exit /b 1
)

echo.
echo [SUCCESS] ngrok URL: %NGROK_URL%
echo.

:: Update config.php with the new ngrok URL
echo Updating config.php with new ngrok URL...
powershell -command "(Get-Content 'config.php') -replace \"define\('NGROK_URL', '.*?'\)\", \"define('NGROK_URL', '%NGROK_URL%')\" | Set-Content 'config.php'"

echo [OK] config.php updated!
echo.
echo ==========================================
echo  Tracking Pixel URL is now:
echo  %NGROK_URL%/alumni-portal/backend/track_open.php
echo ==========================================
echo.
echo Now run the birthday wisher script:
echo   D:\xampp\php\php.exe send_birthday_wishes.php
echo.
echo Keep this window open while sending emails!
echo (Closing this window will stop the ngrok tunnel)
echo.
pause
