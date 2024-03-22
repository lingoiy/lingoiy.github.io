var passCode = '<div width=200 height=100 style="background-color: rgba(0, 0, 0, 0.3); border-radius: 40px;" class="pass">Новый пасс<br><label for="mgh">Имя: </label><input type="text" placeholder="Введите текст" value="Новый пасс"><br><label for="mgh">Цена: </label><input type="number" placeholder="Введите число" value="20"><br>Бонусы<br><label for="mgh"> За клик +</label><input type="number" placeholder="Введите число" value="20"></div>'
function addGamePass() {
  document.querySelector('.gp').innerHTML += passCode;
}
function q(a) {
  return document.querySelector(a);
}
function asas(){
  var gpElement = document.querySelector('div.gp');
  var passElement = gpElement.querySelector('.pass');
  gpElement.removeChild(passElement);
}
function clearAll() {
  if(confirm("Вы уверены?")) {
    document.querySelector('.gp').innerHTML = "";
  }
}
function getRandomNumber() {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * 100);  // Генерируем случайное число до 1000 (можно выбрать другое максимальное значение)
  } while (randomNum % 10 === 1 || randomNum % 10 === 2 || randomNum % 10 === 3 || randomNum % 10 === 4); // Проверяем, что последняя цифра не равна 1, 2, 3, или 4
  return randomNum;
}
document.querySelector('label[for="sas"]').innerHTML = "Название валюты (пример: " + getRandomNumber();
function compile_file() {
  const col_bg = q('#c-bg').value;
  const col_fg = q('#c-fg').value;
  const title = q('#title').value;
  const vault = q('#vault_name').value;
  const ft = q('#font').value;
  
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>* {
    font-family: '${ft}', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif;
    font-size: 65px;
                                                
}
.click-counter {
  text-align: center;
}
body {
  background-color: ${col_bg}; 
}
.watermark {
	text-align: center;
	width: 100%;
	height: 200px;
	background-color: gray;
	position: fixed;
	bottom: 0;
	font-size: 30px;
	color: #ffffff;
	}
.watermark a {
	font-size: 30px;
	}</style>
</head>
<body>
<!-- partial:index.partial.html -->
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title>Aboba Clicker</title>      
</head>
<body>
  <div class="click-counter">
  <button id="aboba" class="aabb" style="background-color: ${col_fg}">+1</button>
  <h1 id="aabb" class="aabb" style="color: ${col_fg}">${vault}: 0</h1>
  <button id="tomakenull" class="aabb" hidden="true" style="background-color: ${col_fg}">= 0</button>
  </div>
  <div class="watermark">Made by WavyClck. <a href="#">Learn more...</a></div>
</body>
</html>
<!-- partial -->
  <script>let aboba = 0
let clickPlus = 1;
document.getElementById('aboba').onclick = function() {
  aboba += clickPlus;
  document.getElementById('aabb').textContent = "${vault}: " + aboba;
 document.getElementById('tomakenull').hidden = false;
  
};
document.getElementById('tomakenull').onclick = function() {
  aboba = 0;
  document.getElementById('aabb').textContent = "${vault}: 0";
  document.getElementById('tomakenull').hidden = true;
};</script>

</body>
</html>
`
  // Создаем Blob с заданным контентом
  const blob = new Blob([content], { type: 'text/html' });

  // Создаем ссылку для скачивания
  const url = window.URL.createObjectURL(blob);

  // Создаем ссылку для скачивания файла
  const a = document.createElement('a');
  a.href = url;
  a.download = `${title}__WAVYCLCK.html`;
  document.body.appendChild(a);
  a.click();

// Очищаем ссылку
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);

}