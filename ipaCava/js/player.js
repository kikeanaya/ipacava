function Player(game) {
  this.game = game
 
  this.width = this.game.tileSize
  this.height = this.game.tileSize

  this.health = 100

  this.refToDig = 0

  this.direction = 0 // left = 1, right = 2
  this.x = this.game.tileSize * 5
  this.y = this.game.tileSize * 4

  this.ipa = new Image()
  this.ipa.src = "img/gorilla.png"
  
  this.setListeners();
}

Player.prototype.draw = function() {
  this.game.ctx.drawImage(this.ipa, this.x, this.y, this.width, this.height)
}

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === this.game.keys.RIGHT && this.x<this.game.canvas.width - this.width-30) {
        this.direction = 2
        this.x += this.game.tileSize
        this.game.mapTracker.updateToZero()
        this.game.mapTracker.playerLocationX +=1
    } else if (event.keyCode == this.game.keys.LEFT && this.x > 5) {
        this.direction = 1
        this.x -= this.game.tileSize
        this.game.mapTracker.updateToZero()
        this.game.mapTracker.playerLocationX -=1
    } else if (event.keyCode == this.game.keys.UP && this.game.background.y < -203) {
        this.game.background.y += this.game.tileSize
        this.game.cave.y += this.game.tileSize
        this.game.enemy.y += this.game.tileSize
        this.game.depth -= 2
        this.game.mapTracker.updateToZero()
        this.game.mapTracker.playerLocationY -=1
    } else if (event.keyCode == this.game.keys.DOWN && this.game.background.y > -2900) {
        console.log(this.game.mapTracker.caveMatrix)
        refToDig = this.game.mapTracker.checkTileStatus()
        console.log(refToDig)

        if(refToDig === 2){
          this.game.cave.drawBrokenTile()
          console.log("grita")
        } else if (refToDig === 3){
          console.log("rota una vez")
        } else {
          this.game.background.y -= this.game.tileSize
          this.game.cave.y -= this.game.tileSize
          this.game.depth += 2
          this.game.enemy.y -= this.game.tileSize
          this.game.mapTracker.updateToZero()
          this.game.mapTracker.playerLocationY +=1
        }

    } else if(event.keyCode == this.game.keys.DIG){
        console.log("dig in front of last direction left or right")
    }
  }.bind(this)
}
