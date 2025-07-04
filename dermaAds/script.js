let videos = ["JxS5E-kZc2s", "crJkeIo2ZHY", "tAcjl9S9exw", "MGXj3A5Il4s", "ptuZ_eAHGwU", "KIj_xgQDsdQ"];
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
function adended() {
  window.chrome.webview.postMessage("adended");
}
