function off() {
document.getElementById("overlay").style.display = "none";
  videoAdsDerma.play();
}
function playend() {
  document.getElementById("overlay2").style.display = "block";
  setTimeout(function(){closeBtn.style.display = "block";}, 5000);
}
function pickLink() {
  let link = "https://youtube.com/embed/" + videos[Math.floor(Math.random() * 6)];
  window.open(link, "_blank", "width=480;height=270;");
}
