var pg = document;
var btn = pg.querySelector('#submit')
// Добавляем обработку события
btn.onclick = function () { 
  pg.querySelector('.aaa').hidden = false;
  setTimeout(() => {
  location.reload();
}, "2000");
};