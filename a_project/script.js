var pg = document;
var clog = console.log;
var iahtml = pg.insertAdjacentHTML;
var current = 0;
var btn = pg.querySelector('.c')
var ttl = pg.querySelector('title')
const symbols = ["А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я"];
btn.addEventListener("click", function() {
  if (current == symbols.length - 1) {
    current = 0;
    btn.innerHTML = symbols[0];
    ttl.innerHTML = symbols[0];
  } else {
    current += 1;
    btn.innerHTML = symbols[current];
    ttl.innerHTML = symbols[current];
  };
});
