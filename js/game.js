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
    SHOOTRIGHT : 88,
    SHOOTLEFT : 90,
    CONTROLS : 67
  },
  init: function(id){
    this.canvas = document.getElementById(id)

    this.ctx = this.canvas.getContext("2d")

    this.width = window.innerWidth
    this.height = window.innerHeight

    this.canvas.width = this.width
    this.canvas.height = this.height

    this.tileSize = Math.floor(this.canvas.width / 15)

    this.backMusic = new Audio("snd/backmusic.mp3")
    this.moneySound = new Audio("snd/money.wav")
    this.boneSound = new Audio("snd/bone.wav")
    this.fartSound = new Audio("snd/fart.wav")
    this.moneySound.volume = 0.6
    this.backMusic.volume = 0.7

    this.start()
  }, 
  start: function () {
  
    this.backMusic.play()
    this.reset()

    this.interval = setInterval(function () {
      this.clear()
  
      this.framesCounter++
  
      if (this.framesCounter > 999) {
        this.framesCounter = 0
      }

      if (this.framesCounter % 60 === 0){
        this.enemy.e1randomDir = Math.floor(Math.random() * 4) + 1  
        this.enemy.moveEnemy()
        this.incrementSeconds()
        console.log(this.mapTracker.caveMatrix)
      }

      this.mapTracker.setPlayerLocation()
      this.mapTracker.setEnemyLocation()
      
      this.player.checkBoneHit()
      this.drawAll()

      if(this.player.health <= 0){
        this.stop()
        this.ui.endScreen()
      }
      if(this.enemy.enemy1Health <= 0){
        this.stop()
        this.ui.winScreen() 
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
    this.controlsActivated = 0
    this.endActivated = 0
    this.seconds = 0
  
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },
  stop: function () {
    clearInterval(this.interval);
    this.backMusic.pause()
  }, 
  drawAll: function(){
    this.background.draw()
    this.cave.draw()
    this.player.drawBones()
    
    this.ui.drawPlayerHealth()
    this.ui.drawDepth()
    this.ui.drawMoney()
    this.ui.drawEnemyHealth()
    this.ui.drawSeconds()

    if (this.menuActivated === 1){
      this.ui.drawShop()
    }

    if (this.controlsActivated === 1){
      this.ui.drawControls()
    }

    if (this.player.haveItem1 === 1){
      this.ui.drawItem1()
    }

    if (this.player.haveItem2 === 1){
      this.ui.drawItem2()
    }
    },
    incrementSeconds: function(){
      this.seconds +=1
    }
}