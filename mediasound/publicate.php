<?php
// Получаем файл из формы
$files = $_FILES['audio'];

// Проверяем, загружен ли какой-либо файл
if ($files['error'][0] == UPLOAD_ERR_OK) {
    // Получаем имя файла
    $filename = $files['name'][0];

    // Получаем временный путь к файлу
    $temp_path = $files['tmp_name'][0];

    // Задаем путь, по которому нужно сохранить файл на сервере
    $target_path = 'uploads/'.$filename; // Обязательно замените 'uploads/' на ваш реальный путь

    // Переименовываем файл, если он уже существует
    if (file_exists($target_path)) {
        $new_filename = uniqid($filename).'.'.$filename;
        $target_path = 'uploads/'.$new_filename;
    }

    // Загружаем файл на сервер
    if (move_uploaded_file($temp_path, $target_path)) {
        // Генерируем HTML-страницу с проигрывателем
        $html = '<html>
        <head>
            <title>Проигрывание аудиофайла</title>
        </head>
        <body>
            <h1>Ваш аудиофайл был успешно загружен!</h1>
            <audio controls>
                <source src="'.$target_path.'" type="audio/mpeg">
                Ваш браузер не поддерживает воспроизведение этого аудиофайла.
            </audio>
            <p>
                <a href="'.$target_path.'">Скачать аудиофайл</a>
            </p>
        </body>
        </html>';
        
        // Задаем заголовки ответа
        header('Content-Type: text/html; charset=utf-8');
        header('Content-Length: '.strlen($html));
        
        // Записываем HTML-код в файл на сервере
        file_put_contents('uploads/audio_page.html', $html); // Замените 'uploads/' на ваш реальный путь
        
        // Отправляем ответ с загруженной HTML-страницей
        echo $html;
    } else {
        // Если загрузка не удалась, выводим ошибку
        echo 'Ошибка загрузки аудиофайла';
    }
}
