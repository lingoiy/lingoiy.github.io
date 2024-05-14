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
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'your_php_script.php', true); // Замените на путь к вашему PHP-скрипту

    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            displayFiles(response.files); // Обрабатываем ответ от сервера
        } else {
            alert('Ошибка при загрузке файла');
        }
    };

    xhr.send(formData);
}

function displayFiles(files) {
    const list = document.getElementById('fileList');
    list.innerHTML = '';

    files.forEach(file => {
        const li = document.createElement('li');
        li.textContent = file.name;
        list.appendChild(li);
    });
}
