@echo off
setlocal
set CMD=%1%
set NAME=%2%
set BUCKET=%3%
set SOURCE=%4%


set DEPLOY=gcloud functions deploy %NAME% ^
--region us-central1 ^
--allow-unauthenticated ^
--runtime python310 ^
--entry-point proxy ^
--stage-bucket %BUCKET% ^
%SOURCE% ^
--trigger-http

IF "%CMD%"=="deploy" (
    %DEPLOY%
ELSE (
    echo "NOT VALID"
)

