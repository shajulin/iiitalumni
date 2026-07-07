@echo off
:: ============================================================
::  Alumni Portal - Automatic Birthday Wisher
::  This script runs daily via Windows Task Scheduler.
::  It sends birthday wishes to all alumni in alumni_details_2024
::  whose DOB (Month + Day) matches today's date.
:: ============================================================

:: Log file path - all runs are recorded here for monitoring
set LOG_FILE=D:\xampp\htdocs\alumni-portal\backend\birthday_cron.log

echo. >> %LOG_FILE%
echo ======================================================== >> %LOG_FILE%
echo Run Started: %date% %time% >> %LOG_FILE%
echo ======================================================== >> %LOG_FILE%

:: Run the PHP birthday wisher script and append output to log
D:\xampp\php\php.exe D:\xampp\htdocs\alumni-portal\backend\send_birthday_wishes.php >> %LOG_FILE% 2>&1

echo Run Finished: %date% %time% >> %LOG_FILE%
echo. >> %LOG_FILE%
