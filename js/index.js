window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      document.getElementById("start-button").style.display = "none"
      Game.init("canvas")
    }
  }