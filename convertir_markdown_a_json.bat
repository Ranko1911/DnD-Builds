@echo off
title Convertidor de Markdown a JSON - DnD Build Archivist
cls

:MENU
cls
echo ======================================================================
echo           CONVERTIDOR INTERACTIVO DE MARKDOWN A JSON
echo ======================================================================
echo:
echo  1. Convertir un archivo Markdown (.md) especifico a JSON
echo  2. Convertir toda la carpeta "builds\" (MANTENER ORGANIZACION POR ARCHIVOS)
echo  3. Convertir toda la carpeta "builds\" a UN UNICO JSON UNIFICADO
echo  4. Prueba rapida (Convertir roadmap de "Bear with a Flamethrower")
echo  5. Salir
echo:
echo ======================================================================
set /p opcion="Selecciona una opcion (1-5): "

if "%opcion%"=="1" goto ARCHIVO_INDIVIDUAL
if "%opcion%"=="2" goto CARPETAS_ORGANIZADAS
if "%opcion%"=="3" goto ARCHIVO_UNIFICADO
if "%opcion%"=="4" goto PRUEBA_RAPIDA
if "%opcion%"=="5" goto SALIR

echo:
echo [!] Opcion invalida. Intentalo de nuevo.
timeout /t 2 > NUL
goto MENU

:ARCHIVO_INDIVIDUAL
cls
echo ======================================================================
echo             1. CONVERTIR ARCHIVO INDIVIDUAL (.md)
echo ======================================================================
echo:
echo Arrastra y suelta un archivo .md aqui o escribe su ruta completa.
echo (Ejemplo: builds\bear with a flamethrower\roadmap.md)
echo:
set /p filepath="Ruta del archivo .md: "

if "%filepath%"=="" goto MENU

:: Limpiar comillas
set filepath=%filepath:"=%

if not exist "%filepath%" (
    echo:
    echo [ERROR] El archivo "%filepath%" no existe.
    pause
    goto MENU
)

set default_out=%filepath:.md=.json%
echo:
echo Ruta de salida por defecto: %default_out%
set /p outpath="Nombre del archivo JSON de salida (Presiona ENTER para usar por defecto): "

if "%outpath%"=="" set outpath=%default_out%
set outpath=%outpath:"=%

echo:
echo Procesando "%filepath%" -> "%outpath%"...
python "%~dp0scripts\md_to_json.py" "%filepath%" -o "%outpath%"

if %ERRORLEVEL% EQU 0 (
    echo:
    echo [EXITO] Archivo JSON generado correctamente en:
    echo %outpath%
) else (
    echo:
    echo [ERROR] Ocurrio un fallo durante la conversion.
)

echo:
pause
goto MENU

:CARPETAS_ORGANIZADAS
cls
echo ======================================================================
echo     2. CONVERTIR MANTENIENDO ORGANIZACION (CADA .MD CREA SU .JSON)
echo ======================================================================
echo:
echo Se procesara cada archivo .md dentro de la carpeta "builds\",
echo creando su archivo .json correspondiente dentro de la misma carpeta.
echo:
python "%~dp0scripts\md_to_json.py" "%~dp0builds" --separate

if %ERRORLEVEL% EQU 0 (
    echo:
    echo [EXITO] Todos los archivos .md se han convertido a sus respectivos .json
) else (
    echo:
    echo [ERROR] Ocurrio un fallo procesando la carpeta.
)

echo:
pause
goto MENU

:ARCHIVO_UNIFICADO
cls
echo ======================================================================
echo             3. CONVERTIR A UN UNICO ARCHIVO UNIFICADO
echo ======================================================================
echo:
echo Se procesaran todos los archivos .md en un solo "builds_completos.json".
set out_folder=%~dp0builds_completos.json
echo Salida: %out_folder%
echo:
python "%~dp0scripts\md_to_json.py" "%~dp0builds" -o "%out_folder%"

if %ERRORLEVEL% EQU 0 (
    echo:
    echo [EXITO] Todas las builds agrupadas en:
    echo %out_folder%
) else (
    echo:
    echo [ERROR] Ocurrio un fallo procesando la carpeta.
)

echo:
pause
goto MENU

:PRUEBA_RAPIDA
cls
echo ======================================================================
echo             4. PRUEBA RAPIDA - BEAR WITH A FLAMETHROWER
echo ======================================================================
echo:
set sample_in=%~dp0builds\bear with a flamethrower\roadmap.md
set sample_out=%~dp0scratch\prueba_roadmap.json
echo Procesando "%sample_in%"...
python "%~dp0scripts\md_to_json.py" "%sample_in%" -o "%sample_out%"

if %ERRORLEVEL% EQU 0 (
    echo:
    echo [EXITO] Resultado guardado en:
    echo %sample_out%
) else (
    echo:
    echo [ERROR] Ocurrio un fallo en la prueba.
)

echo:
pause
goto MENU

:SALIR
cls
echo Hasta luego!
timeout /t 1 > NUL
exit /b 0
