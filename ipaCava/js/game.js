var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  keys: {
    DOWN : 40,
    RIGHT : 39,
    UP : 38,
    LEFT : 37,
    SHOP : 83,
    ITEM1 : 49,
    ITEM2 : 50,
    RETRY : 89,
    HOME : 78
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
  
      if (this.framesCounter > 999) {
        this.framesCounter = 0
      }

      if (this.framesCounter % 50 === 0){
        this.enemy.e1randomDir = Math.floor(Math.random() * 4) + 1  
        console.log(this.enemy.e1randomDir)
        this.enemy.moveEnemy()
        console.log(this.mapTracker.caveMatrix)
      }

      this.mapTracker.setPlayerLocation()
      this.mapTracker.setEnemyLocation()
      

      this.drawAll()

      if(this.player.health <= 0){
        this.stop()
        this.ui.endScreen()
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
    this.endActivated = 0
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },
  stop: function () {
    clearInterval(this.interval);
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

    if (this.player.haveItem1 === 1){
      this.ui.drawItem1()
    }

    if (this.player.haveItem2 === 1){
      this.ui.drawItem2()
    }
  },
}