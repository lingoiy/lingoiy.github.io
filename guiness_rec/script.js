var jmps = 0;
var enabled = true;
document.getElementById('myVideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {
      if(enabled) {
        document.getElementById('myVideo').play();
      jmps += 1;
      document.querySelector('.stat').innerHTML = "Blocks placed: " + jmps;
      } else {
        jmps = jmps;
      }
    }
function nullscore() {
  jmps = 0;
  enabled = false;
}