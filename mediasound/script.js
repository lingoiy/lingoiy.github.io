function uploadAudio() {
    const input = document.getElementById('audioFile');
    const files = input.files;

    if (!files.length) return;

    const allowedExtensions = /^(?:\.mp3|\.wav|\.ogg)$/i; // Разрешенные расширения
    if (!allowedExtensions.test(files[0].name)) {
        alert('Можно загружать только аудиофайлы в форматах MP3, WAV или OGG.');
        return;
    }

    const formData = new FormData();
    formData.append('audio', files[0]);

    uploadFile(formData);
}

// Остальной код остается без изменений
function uploadFile(formData) {
    // ... (остальной код функции uploadFile)
}

// Остальной код остается без изменений
function displayFiles(files) {
    // ... (остальной код функции displayFiles)
}
