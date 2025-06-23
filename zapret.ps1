Add-Type -AssemblyName System.Windows.Forms

# URL для скачивания RAR-архива
$zipUrl = "https://lingoiy.github.io/zap1.6.1.zip"

# Временный файл для скачивания
$tempZip = "$env:TEMP\zapret_1_6_1.zip"

function Show-FolderBrowserDialog {
    $dialog = New-Object System.Windows.Forms.FolderBrowserDialog
    $dialog.Description = "Выберите папку для распаковки"
    
    if ($dialog.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) {
        return $dialog.SelectedPath
    }
    return $null
}

function Main {
    try {
        Write-Host "=== Скачивание и распаковка архива ===" -ForegroundColor Cyan
        
        # Скачивание архива
        Write-Host "Скачивание архива..." -ForegroundColor Yellow
        Invoke-WebRequest -Uri $zipUrl -OutFile $tempZip
        
        # Выбор папки для распаковки
        $installPath = Show-FolderBrowserDialog
        
        if (-not $installPath) {
            Write-Host "Выбор папки отменен" -ForegroundColor Yellow
            return
        }
        
        # Распаковка архива
        Write-Host "Распаковка в папку $installPath" -ForegroundColor Yellow
        Expand-Archive -Path $tempZip -DestinationPath $installPath -Force
        
        # Поиск и запуск файла general (ALT2).bat
        $batFile = Get-ChildItem -Path $installPath -Recurse -Filter "general (ALT2).bat" | Select-Object -First 1
        
        if ($batFile) {
            Write-Host "Запуск файла $($batFile.FullName)" -ForegroundColor Green
            Start-Process -FilePath $batFile.FullName -WorkingDirectory $batFile.DirectoryName -Verb RunAs
        } else {
            [System.Windows.Forms.MessageBox]::Show("Файл не найден", "Ошибка", "OK", "Error")
        }
        
        # Удаление временного файла
        Remove-Item $tempZip -ErrorAction SilentlyContinue
        
    } catch {
        [System.Windows.Forms.MessageBox]::Show("Ошибка: $_", "Ошибка", "OK", "Error")
        exit 1
    }
}

# Запуск основной функции
Main
