@echo off
:: ================================================================
::  Alumni Portal - Automatic Birthday Wisher Runner
::  Called by Windows Task Scheduler every day at 8:00 AM
::  Logs all output to tracking.log
:: ================================================================
set PHP_EXE=C:\xampp\php\php.exe
if not exist "%PHP_EXE%" set PHP_EXE=D:\xampp\php\php.exe

set SCRIPT=C:\xampp\htdocs\alumni-portal\backend\send_birthday_wishes.php
if not exist "%SCRIPT%" set SCRIPT=D:\xampp\htdocs\alumni-portal\backend\send_birthday_wishes.php
if not exist "%SCRIPT%" set SCRIPT=%~dp0send_birthday_wishes.php

set LOG=%~dp0tracking.log

echo. >> "%LOG%"
echo ======================================================== >> "%LOG%"
echo Task Scheduler Run: %DATE% %TIME% >> "%LOG%"
echo ======================================================== >> "%LOG%"

:: Ensure MySQL is running if XAMPP is installed locally
:: Note: A better approach in production is setting MySQL as a Windows Service.
tasklist /fi "imagename eq mysqld.exe" | find /i "mysqld.exe" > nul
if errorlevel 1 (
    echo MySQL is not running. Attempting to start... >> "%LOG%"
    if exist "C:\xampp\mysql\bin\mysqld.exe" (
        start "" /b "C:\xampp\mysql\bin\mysqld.exe"
        timeout /t 5 > nul
    ) else if exist "D:\xampp\mysql\bin\mysqld.exe" (
        start "" /b "D:\xampp\mysql\bin\mysqld.exe"
        timeout /t 5 > nul
    )
)

"%PHP_EXE%" "%SCRIPT%" >> "%LOG%" 2>&1

echo Finished: %DATE% %TIME% >> "%LOG%"
