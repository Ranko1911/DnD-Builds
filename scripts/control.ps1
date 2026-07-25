# ==============================================================================
# DnD Builds - Panel de Control de Ejecución Local
# ==============================================================================

$ProjectRoot = Split-Path -Path $PSScriptRoot -Parent

function Get-ServerStatus {
    $portActive = Get-NetTCPConnection -LocalPort 4321 -ErrorAction SilentlyContinue
    if ($portActive) {
        return "[ACTIVO] -> http://localhost:4321"
    } else {
        return "[DETENIDO]"
    }
}

function Show-Header {
    Clear-Host
    $status = Get-ServerStatus
    Write-Host "=======================================================" -ForegroundColor Cyan
    Write-Host "   DND BUILDS - PANEL DE CONTROL LOCAL" -ForegroundColor Yellow
    Write-Host "=======================================================" -ForegroundColor Cyan
    Write-Host " Estado Servidor Dev (Puerto 4321): $status" -ForegroundColor White
    Write-Host "=======================================================" -ForegroundColor Cyan
    Write-Host ""
}

function Show-Menu {
    Show-Header
    Write-Host "  [1] Iniciar Servidor de Desarrollo (npm run dev)" -ForegroundColor Green
    Write-Host "  [2] Sincronizar Datos de Builds (npm run sync-data)" -ForegroundColor Cyan
    Write-Host "  [3] Compilar Proyecto para Produccion (npm run build)" -ForegroundColor Yellow
    Write-Host "  [4] Vista Previa de Produccion (npm run preview)" -ForegroundColor Magenta
    Write-Host "  [5] Ejecutar Agente Ollama Local (node ollama-agent.cjs)" -ForegroundColor Blue
    Write-Host "  [6] Abrir Localhost en Navegador (http://localhost:4321)" -ForegroundColor DarkCyan
    Write-Host "  [7] Detener Servidores Node (Liberar Puerto 4321)" -ForegroundColor Red
    Write-Host "  [0] Salir" -ForegroundColor Gray
    Write-Host ""
    Write-Host "=======================================================" -ForegroundColor Cyan
}

Set-Location $ProjectRoot

while ($true) {
    Show-Menu
    $choice = (Read-Host "Selecciona una opcion [0-7]").Trim()

    switch ($choice) {
        "1" {
            Write-Host "`nIniciando Servidor de Desarrollo..." -ForegroundColor Green
            Start-Process "http://localhost:4321"
            Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$ProjectRoot'; npm run dev"
            Write-Host "Servidor iniciado en una nueva ventana." -ForegroundColor Green
            Start-Sleep -Seconds 2
        }
        "2" {
            Write-Host "`nSincronizando datos de builds..." -ForegroundColor Cyan
            npm run sync-data
            Write-Host "`nPresiona Enter para continuar..." -ForegroundColor Gray
            Read-Host | Out-Null
        }
        "3" {
            Write-Host "`nCompilando proyecto..." -ForegroundColor Yellow
            npm run build
            Write-Host "`nPresiona Enter para continuar..." -ForegroundColor Gray
            Read-Host | Out-Null
        }
        "4" {
            Write-Host "`nIniciando vista previa..." -ForegroundColor Magenta
            Start-Process "http://localhost:4321"
            Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$ProjectRoot'; npm run preview"
            Write-Host "Vista previa iniciada en una nueva ventana." -ForegroundColor Green
            Start-Sleep -Seconds 2
        }
        "5" {
            Write-Host "`nEjecutando Agente Ollama Local..." -ForegroundColor Blue
            node ollama-agent.cjs
            Write-Host "`nPresiona Enter para continuar..." -ForegroundColor Gray
            Read-Host | Out-Null
        }
        "6" {
            Write-Host "`nAbriendo http://localhost:4321..." -ForegroundColor DarkCyan
            Start-Process "http://localhost:4321"
            Start-Sleep -Seconds 1
        }
        "7" {
            Write-Host "`nDeteniendo procesos Node.js en ejecucion..." -ForegroundColor Red
            Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
            Write-Host "Procesos de Node detenidos y puerto liberado." -ForegroundColor Green
            Start-Sleep -Seconds 2
        }
        "0" {
            Write-Host "`nHasta luego!" -ForegroundColor Yellow
            exit
        }
        default {
            Write-Host "`nOpcion invalida. Intenta de nuevo." -ForegroundColor Red
            Start-Sleep -Seconds 1
        }
    }
}
