# =====================================================================
#  DnD Builds -- Panel de Control
# =====================================================================
#Requires -Version 5.1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

$Host.UI.RawUI.WindowTitle = "D&D Builds - Panel de Control"

$ROOT = Split-Path -Parent $PSScriptRoot   # raiz del repo

# Colores
$GOLD  = "Yellow"
$DIM   = "DarkGray"
$OK    = "Green"
$ERR   = "Red"
$INFO  = "Cyan"
$WHITE = "White"

# =====================================================================
function Show-Header {
    Clear-Host
    Write-Host ""
    Write-Host "  +---------------------------------------------------------+" -ForegroundColor $GOLD
    Write-Host "  |   D&D  BUILDS  --  Panel de Control                    |" -ForegroundColor $GOLD
    Write-Host "  |   Archivero del Multiverso                              |" -ForegroundColor $GOLD
    Write-Host "  +---------------------------------------------------------+" -ForegroundColor $GOLD
    Write-Host ""
}

function Show-Status {
    Push-Location $ROOT
    $branch  = git rev-parse --abbrev-ref HEAD 2>$null
    $changes = git status --porcelain 2>$null
    $dirty   = if ($changes) { " *" } else { "" }
    $distOk  = Test-Path (Join-Path $ROOT "dist\index.html")

    Write-Host "  Estado" -ForegroundColor $DIM
    Write-Host ""

    $bColor = if ($branch -eq "main" -or $branch -eq "master") { $OK } else { $INFO }
    Write-Host "    Rama    : " -NoNewline -ForegroundColor $DIM
    Write-Host "$branch$dirty" -ForegroundColor $bColor

    Write-Host "    Build   : " -NoNewline -ForegroundColor $DIM
    if ($distOk) {
        $d = (Get-Item (Join-Path $ROOT "dist\index.html")).LastWriteTime.ToString("dd/MM HH:mm")
        Write-Host "OK (generado $d)" -ForegroundColor $OK
    } else {
        Write-Host "Sin build - ejecuta [2] primero" -ForegroundColor $ERR
    }

    if ($changes) {
        $n = ($changes | Measure-Object -Line).Lines
        Write-Host "    Cambios : " -NoNewline -ForegroundColor $DIM
        Write-Host "$n fichero(s) sin commit" -ForegroundColor $GOLD
    }

    Pop-Location
    Write-Host ""
    Write-Host ("  " + ("-" * 57)) -ForegroundColor $DIM
}

function Show-Menu {
    Write-Host ""
    Write-Host "  SETUP" -ForegroundColor $DIM
    Write-Host "   [I]  Setup completo (npm install + build)" -ForegroundColor $GOLD
    Write-Host ""
    Write-Host "  DESARROLLO" -ForegroundColor $DIM
    Write-Host "   [1]  Dev server    (localhost:3000/DnD-Builds)" -ForegroundColor $WHITE
    Write-Host "   [2]  Build prod    (genera dist/)" -ForegroundColor $WHITE
    Write-Host "   [3]  Preview build (sirve dist/ localmente)" -ForegroundColor $WHITE
    Write-Host "   [4]  Abrir en navegador" -ForegroundColor $WHITE
    Write-Host ""
    Write-Host "  GIT" -ForegroundColor $DIM
    Write-Host "   [5]  Estado git    (git status)" -ForegroundColor $WHITE
    Write-Host "   [6]  Commit rapido (add -A + commit)" -ForegroundColor $WHITE
    Write-Host "   [7]  Push a remote (pide confirmacion)" -ForegroundColor $WHITE
    Write-Host "   [8]  Log reciente  (ultimos 10)" -ForegroundColor $WHITE
    Write-Host ""
    Write-Host "  PROYECTO" -ForegroundColor $DIM
    Write-Host "   [9]  Estadisticas (builds, ficheros, palabras)" -ForegroundColor $WHITE
    Write-Host "   [0]  Abrir en VS Code / editor" -ForegroundColor $WHITE
    Write-Host ""
    Write-Host "   [Q]  Salir" -ForegroundColor $DIM
    Write-Host ""
}

function Read-Choice {
    Write-Host "  > " -NoNewline -ForegroundColor $GOLD
    return (Read-Host).Trim().ToUpper()
}

function Wait-Enter {
    Write-Host ""
    Write-Host "  Pulsa ENTER para continuar..." -ForegroundColor $DIM
    Read-Host | Out-Null
}

# =====================================================================
# OPCIONES
# =====================================================================

function Invoke-Setup {
    Write-Host ""
    Write-Host "  +--------------------------------------------------+" -ForegroundColor $GOLD
    Write-Host "  |  Setup completo: npm install + build             |" -ForegroundColor $GOLD
    Write-Host "  +--------------------------------------------------+" -ForegroundColor $GOLD
    Write-Host ""
    Set-Location $ROOT

    # Paso 1: npm install
    Write-Host "  [1/2] Instalando dependencias..." -ForegroundColor $INFO
    Write-Host ""
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "  ERROR  npm install fallo. Abortando." -ForegroundColor $ERR
        Wait-Enter
        return
    }
    Write-Host ""
    Write-Host "  OK  Dependencias instaladas." -ForegroundColor $OK
    Write-Host ""

    # Paso 2: build
    Write-Host "  [2/2] Generando build de produccion..." -ForegroundColor $INFO
    Write-Host ""
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "  ERROR  Build fallo. Revisa los errores arriba." -ForegroundColor $ERR
        Wait-Enter
        return
    }
    Write-Host ""
    Write-Host "  +-------------------------------------------------+" -ForegroundColor $OK
    Write-Host "  |  Setup completado. El sitio esta listo.         |" -ForegroundColor $OK
    Write-Host "  |  Usa [3] para preview o [1] para dev server.   |" -ForegroundColor $OK
    Write-Host "  +-------------------------------------------------+" -ForegroundColor $OK
    Wait-Enter
}

function Invoke-Dev {
    Write-Host ""
    Write-Host "  >> Arrancando dev server (Ctrl+C para parar)..." -ForegroundColor $INFO
    Write-Host ""
    Set-Location $ROOT
    npm run dev
    Wait-Enter
}

function Invoke-Build {
    Write-Host ""
    Write-Host "  >> Generando build de produccion..." -ForegroundColor $INFO
    Write-Host ""
    Set-Location $ROOT
    npm run build
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "  OK  Build completado." -ForegroundColor $OK
    } else {
        Write-Host ""
        Write-Host "  ERROR  Build fallido. Revisa los errores arriba." -ForegroundColor $ERR
    }
    Wait-Enter
}

function Invoke-Preview {
    Write-Host ""
    if (-not (Test-Path (Join-Path $ROOT "dist\index.html"))) {
        Write-Host "  ERROR  No hay build. Ejecuta [2] primero." -ForegroundColor $ERR
        Wait-Enter
        return
    }
    Write-Host "  >> Sirviendo dist/ en localhost:3000/DnD-Builds (Ctrl+C para parar)..." -ForegroundColor $INFO
    Write-Host ""
    Set-Location $ROOT
    npm run preview
    Wait-Enter
}

function Invoke-OpenBrowser {
    $url = "http://localhost:3000/DnD-Builds"
    Write-Host ""
    Write-Host "  >> Abriendo $url ..." -ForegroundColor $INFO
    Start-Process $url
    Wait-Enter
}

function Invoke-GitStatus {
    Write-Host ""
    Push-Location $ROOT
    git status
    Pop-Location
    Wait-Enter
}

function Invoke-GitCommit {
    Write-Host ""
    Push-Location $ROOT
    $changes = git status --porcelain 2>$null
    if (-not $changes) {
        Write-Host "  No hay cambios que commitear." -ForegroundColor $DIM
        Pop-Location
        Wait-Enter
        return
    }

    Write-Host "  Cambios pendientes:" -ForegroundColor $DIM
    git status --short
    Write-Host ""
    Write-Host "  Mensaje del commit (ENTER para cancelar):" -ForegroundColor $DIM
    Write-Host "  > " -NoNewline -ForegroundColor $GOLD
    $msg = Read-Host
    if ([string]::IsNullOrWhiteSpace($msg)) {
        Write-Host "  Cancelado." -ForegroundColor $DIM
        Pop-Location
        Wait-Enter
        return
    }
    git add -A
    git commit -m $msg
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "  OK  Commit creado." -ForegroundColor $OK
    }
    Pop-Location
    Wait-Enter
}

function Invoke-GitPush {
    Write-Host ""
    Push-Location $ROOT
    $branch = git rev-parse --abbrev-ref HEAD 2>$null
    $remote = git remote get-url origin 2>$null

    Write-Host "  +--------------------------------------------------+" -ForegroundColor $GOLD
    Write-Host "  |  ATENCION: Push a remoto                         |" -ForegroundColor $GOLD
    Write-Host "  +--------------------------------------------------+" -ForegroundColor $GOLD
    Write-Host ""
    Write-Host "  Rama   : $branch" -ForegroundColor $WHITE
    Write-Host "  Remoto : $remote" -ForegroundColor $WHITE
    Write-Host ""
    Write-Host "  Esto publicara los cambios y disparara el deploy" -ForegroundColor $DIM
    Write-Host "  a GitHub Pages si el workflow esta configurado." -ForegroundColor $DIM
    Write-Host ""
    Write-Host "  Confirmas el push? [s/N] " -NoNewline -ForegroundColor $GOLD
    $c = (Read-Host).Trim().ToLower()
    if ($c -eq "s") {
        git push origin $branch
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "  OK  Push completado. GitHub Actions deploying..." -ForegroundColor $OK
            Write-Host "      https://github.com/Ranko1911/DnD-Builds/actions" -ForegroundColor $DIM
        } else {
            Write-Host ""
            Write-Host "  ERROR  Push fallido." -ForegroundColor $ERR
        }
    } else {
        Write-Host "  Cancelado." -ForegroundColor $DIM
    }
    Pop-Location
    Wait-Enter
}

function Invoke-GitLog {
    Write-Host ""
    Push-Location $ROOT
    git log --oneline --graph --decorate -10
    Pop-Location
    Wait-Enter
}

function Show-Stats {
    Write-Host ""
    Write-Host "  Estadisticas del proyecto" -ForegroundColor $DIM
    Write-Host ""

    $buildsDir = Join-Path $ROOT "builds"
    $buildDirs = Get-ChildItem $buildsDir -Directory | Where-Object { $_.Name -ne "template" }
    $mdFiles   = Get-ChildItem $buildsDir -Recurse -Filter "*.md"
    $words     = 0
    foreach ($f in $mdFiles) {
        $words += (Get-Content $f.FullName | Measure-Object -Word).Words
    }

    Write-Host "    Builds cataloguados : " -NoNewline -ForegroundColor $DIM
    Write-Host $buildDirs.Count -ForegroundColor $GOLD

    Write-Host "    Ficheros Markdown   : " -NoNewline -ForegroundColor $DIM
    Write-Host $mdFiles.Count -ForegroundColor $GOLD

    Write-Host "    Palabras en docs    : " -NoNewline -ForegroundColor $DIM
    Write-Host ("{0:N0}" -f $words) -ForegroundColor $GOLD

    $nmPath = Join-Path $ROOT "node_modules"
    if (Test-Path $nmPath) {
        $nmMB = (Get-ChildItem $nmPath -Recurse -File -ErrorAction SilentlyContinue |
                 Measure-Object -Property Length -Sum).Sum / 1MB
        Write-Host "    node_modules        : " -NoNewline -ForegroundColor $DIM
        Write-Host ("{0:F0} MB" -f $nmMB) -ForegroundColor $DIM
    }

    $distPath = Join-Path $ROOT "dist"
    if (Test-Path $distPath) {
        $distKB    = (Get-ChildItem $distPath -Recurse -File |
                      Measure-Object -Property Length -Sum).Sum / 1KB
        $distPages = (Get-ChildItem $distPath -Recurse -Filter "index.html").Count
        Write-Host "    Dist - paginas      : " -NoNewline -ForegroundColor $DIM
        Write-Host $distPages -ForegroundColor $OK
        Write-Host "    Dist - tamano       : " -NoNewline -ForegroundColor $DIM
        Write-Host ("{0:F0} KB" -f $distKB) -ForegroundColor $OK
    }

    Wait-Enter
}

function Invoke-Editor {
    Write-Host ""
    if (Get-Command code -ErrorAction SilentlyContinue) {
        Write-Host "  >> Abriendo VS Code..." -ForegroundColor $INFO
        code $ROOT
    } elseif (Get-Command nvim -ErrorAction SilentlyContinue) {
        Write-Host "  >> Abriendo Neovim..." -ForegroundColor $INFO
        nvim $ROOT
    } else {
        Write-Host "  >> Abriendo explorador de ficheros..." -ForegroundColor $INFO
        Start-Process explorer.exe $ROOT
    }
    Wait-Enter
}

# =====================================================================
# BUCLE PRINCIPAL
# =====================================================================
Set-Location $ROOT

while ($true) {
    Show-Header
    Show-Status
    Show-Menu
    $choice = Read-Choice

    switch ($choice) {
        "I" { Invoke-Setup }
        "1" { Invoke-Dev }
        "2" { Invoke-Build }
        "3" { Invoke-Preview }
        "4" { Invoke-OpenBrowser }
        "5" { Invoke-GitStatus }
        "6" { Invoke-GitCommit }
        "7" { Invoke-GitPush }
        "8" { Invoke-GitLog }
        "9" { Show-Stats }
        "0" { Invoke-Editor }
        "Q" {
            Write-Host ""
            Write-Host "  Que los dados te sean favorables!" -ForegroundColor $GOLD
            Write-Host ""
            exit 0
        }
        default {
            Write-Host "  Opcion invalida." -ForegroundColor $ERR
            Start-Sleep -Milliseconds 500
        }
    }
}
