function dl(path){fetch(path)
  .then(response => response.blob())
  .then(blob => {
    // Создаем ссылку на Blob
    const url = window.URL.createObjectURL(blob);
    // Создаем новый элемент <a>, который мы будем использовать для скачивания
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // Устанавливаем атрибут download для элемента <a>
    a.download = 'discord-np.exe';
    // Добавляем элемент <a> в DOM
    document.body.appendChild(a);
    // Имитируем клик по ссылке для начала скачивания
    a.click();
    // Освобождаем URL-объект
    window.URL.revokeObjectURL(url);
    // Удаляем элемент <a> из DOM
    document.body.removeChild(a);
  })
  .catch(error => console.error('Ошибка:', error));}