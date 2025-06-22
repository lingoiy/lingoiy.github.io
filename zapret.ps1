Add-Type -AssemblyName System.Windows.Forms

# URL РґР»СЏ СЃРєР°С‡РёРІР°РЅРёСЏ (Р·Р°РјРµРЅРёС‚Рµ РЅР° СЂРµР°Р»СЊРЅС‹Р№)
$zipUrl = "https://github.com/Flowseal/zapret-discord-youtube/releases/download/1.6.1/zapret-discord-youtube-1.6.1.rar"

# Р’СЂРµРјРµРЅРЅС‹Р№ С„Р°Р№Р» РґР»СЏ СЃРєР°С‡РёРІР°РЅРёСЏ
$tempZip = "$env:TEMP\zapret_1_6_1.zip"

function Show-FolderBrowserDialog {
    $dialog = New-Object System.Windows.Forms.FolderBrowserDialog
    $dialog.Description = "Р’С‹Р±РµСЂРёС‚Рµ РїР°РїРєСѓ РґР»СЏ СѓСЃС‚Р°РЅРѕРІРєРё"
    $dialog.RootFolder = [System.Windows.Forms.SpecialFolder]::MyComputer
    
    if ($dialog.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) {
        return $dialog.SelectedPath
    }
    return $null
}

function Main {
    try {
        Write-Host "=== РЈСЃС‚Р°РЅРѕРІС‰РёРє ===" -ForegroundColor Cyan
        
        # 1. РЎРєР°С‡РёРІР°РЅРёРµ Р°СЂС…РёРІР°
        Write-Host "РЎРєР°С‡РёРІР°РЅРёРµ Р°СЂС…РёРІР°..." -ForegroundColor Yellow
        $progressPreference = 'silentlyContinue'
        Invoke-WebRequest -Uri $zipUrl -OutFile $tempZip
        $progressPreference = 'Continue'
        
        # 2. Р—Р°РїСЂРѕСЃ РїСѓС‚Рё СѓСЃС‚Р°РЅРѕРІРєРё С‡РµСЂРµР· РґРёР°Р»РѕРіРѕРІРѕРµ РѕРєРЅРѕ
        $installPath = Show-FolderBrowserDialog
        
        if (-not $installPath) {
            Write-Host "Установка отменена пользователем" -ForegroundColor Yellow
            return
        }
        
        # 3. Р Р°СЃРїР°РєРѕРІРєР° Р°СЂС…РёРІР°
        Write-Host "Распаковка архива $installPath" -ForegroundColor Yellow
        Expand-Archive -Path $tempZip -DestinationPath $installPath -Force
        
        # 4. РџРѕРёСЃРє Рё Р·Р°РїСѓСЃРє BAT-С„Р°Р№Р»Р°
        $batFile = Get-ChildItem -Path $installPath -Recurse -Filter "general (ALT2).bat" | Select-Object -First 1
        
        if ($batFile) {
            Write-Host "Запуск файла $($batFile.FullName)" -ForegroundColor Green
            Start-Process -FilePath $batFile.FullName -WorkingDirectory $batFile.DirectoryName
        } else {
            [System.Windows.Forms.MessageBox]::Show("Файл не существует", "OK", "Error")
        }
        
        # РЈРґР°Р»РµРЅРёРµ РІСЂРµРјРµРЅРЅРѕРіРѕ ZIP-С„Р°Р№Р»Р°
        Remove-Item $tempZip -ErrorAction SilentlyContinue
        
    } catch {
        [System.Windows.Forms.MessageBox]::Show("Ошибка: $_", "РћС€РёР±РєР° СѓСЃС‚Р°РЅРѕРІРєРё", "OK", "Error")
        exit 1
    }
}

# Р—Р°РїСѓСЃРє РіР»Р°РІРЅРѕР№ С„СѓРЅРєС†РёРё
Main
