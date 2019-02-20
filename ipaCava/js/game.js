var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  keys: {
    DOWN : 40,
    RIGHT : 39,
    UP : 38,
    LEFT : 37,
    SHOP : 83
  },
  init: function(id){
    this.canvas = document.getElementById(id)

    this.ctx = this.canvas.getContext("2d")

    this.width = window.innerWidth
    this.height = window.innerHeight

    this.canvas.width = this.width
    this.canvas.height = this.height

    this.tileSize = Math.floor(this.canvas.width / 15)

    this.moneySound = new Audio("snd/money.wav");


    this.start()
  }, 
  start: function () {
  
    this.reset()

    this.interval = setInterval(function () {
      this.clear()
  
      this.framesCounter++
  
      if (this.framesCounter > 1000) {
        this.framesCounter = 0
      }

      this.mapTracker.setPlayerLocation()
      this.mapTracker.setEnemyLocation()

      this.drawAll()

      if(this.player.health == 0){
        this.stopGame()
      }


    }.bind(this), 1000 / this.fps)
  },
  reset: function () {
    this.background = new Background(this)
    this.player = new Player(this)
    this.cave = new Cave(this)
    this.enemy = new Enemy(this)
    this.ui = new Ui(this)
    this.mapTracker = new MapTracker(this)
    this.framesCounter = 0
    this.depth = 0
    this.money = 0
    this.menuActivated = 0 // 0: not activated, 1: activated
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }, 
  drawAll: function(){
    this.background.draw()
    this.cave.draw()
    this.ui.drawPlayerHealth()
    this.ui.drawDepth()
    this.ui.drawMoney()

    if (this.menuActivated === 1){
      this.ui.drawShop()
    }
  },
  detectGroundCollision: function(){
    var happens
      if(this.mapTrackerx  >= this.enemy.x-1 && this.player.x <= this.enemy.x+1 && this.player.y  === this.enemy.y ){
        happens = true
      }
  return happens         
  },
  stopGame: function(){
    alert("YOU DIED")
  }
}