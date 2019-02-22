window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      document.body.style.background = "black"
      document.getElementById("start-button").style.display = "none"
      document.getElementById("logo").style.display = "none"
      Game.init("canvas")
    }
  }