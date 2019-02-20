function Player(game) {
  this.game = game
 
  this.width = this.game.tileSize
  this.height = this.game.tileSize

  this.health = 100

  this.refToDig = 0

  this.direction = 0 // up = 1, right = 2, down = 3, left = 4
  this.x = this.game.tileSize * 5
  this.y = this.game.tileSize * 5

  this.setListeners();
}

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    
    if (event.keyCode === this.game.keys.RIGHT && this.x<this.game.canvas.width - this.width-30) {
        this.direction = 2
        if(this.game.mapTracker.checkEnemyRight() === true){
          this.game.player.health -= 10  
        } else{
        this.refToDig = this.game.mapTracker.checkTileStatus(this.direction)
        if (this.refToDig === 3){
          this.game.cave.drawBrokenTile(this.direction)
        } else if (this.refToDig === 4){
          this.game.cave.drawEmptyTile(this.direction)

          this.x += this.game.tileSize
          this.game.mapTracker.updateToFour()
          this.game.mapTracker.playerLocationX +=1
        } else if(this.refToDig === 7){
          this.game.cave.drawBrokenJewel(this.direction)
        } else {
          this.x += this.game.tileSize
          this.game.mapTracker.updateToFour()
          this.game.mapTracker.playerLocationX +=1
        }
      }

    } else if (event.keyCode == this.game.keys.LEFT && this.x > 5) {
        this.direction = 4
        if(this.game.mapTracker.checkEnemyLeft() === true){
          this.game.player.health -= 10  
        } else{
        this.refToDig = this.game.mapTracker.checkTileStatus(this.direction)

        if (this.refToDig === 3){
          this.game.cave.drawBrokenTile(this.direction)
        } else if (this.refToDig === 4){
          this.game.cave.drawEmptyTile(this.direction)

          this.x -= this.game.tileSize
          this.game.mapTracker.updateToFour()
          this.game.mapTracker.playerLocationX -=1
        } else if(this.refToDig === 7){
          this.game.cave.drawBrokenJewel(this.direction)
        } else {
          this.x -= this.game.tileSize
          this.game.mapTracker.updateToFour()
          this.game.mapTracker.playerLocationX -=1
        }
      }
    } else if (event.keyCode == this.game.keys.UP && this.game.background.y < -203) {
        this.direction = 1
        if(this.game.mapTracker.checkEnemyUp() === true){
          this.game.player.health -= 10  
        } else{
          this.refToDig = this.game.mapTracker.checkTileStatus(this.direction)
          if (this.refToDig === 3){
            this.game.cave.drawBrokenTile(this.direction)
          } else if (this.refToDig === 4){
            this.game.cave.drawEmptyTile(this.direction)
  
            this.game.background.y += this.game.tileSize
            this.game.cave.y += this.game.tileSize
            this.game.enemy.y += this.game.tileSize
            this.game.depth -= 2
            this.game.mapTracker.updateToFour()
            this.game.mapTracker.playerLocationY -=1
          } else if(this.refToDig === 7){
            this.game.cave.drawBrokenJewel(this.direction)
          }else {
            this.game.background.y += this.game.tileSize
            this.game.cave.y += this.game.tileSize
            this.game.enemy.y += this.game.tileSize
            this.game.depth -= 2
            this.game.mapTracker.updateToFour()
            this.game.mapTracker.playerLocationY -=1
          } 
      }
    } else if (event.keyCode == this.game.keys.DOWN && this.game.background.y > -2900) {
        this.direction = 3
        if(this.game.mapTracker.checkEnemyDown() === true){
          this.game.player.health -= 10  
        } else{
        this.refToDig = this.game.mapTracker.checkTileStatus(this.direction)
        if (this.refToDig === 3){
          this.game.cave.drawBrokenTile(this.direction)
        } else if (this.refToDig === 4){
          this.game.cave.drawEmptyTile(this.direction)

          this.game.background.y -= this.game.tileSize
          this.game.cave.y -= this.game.tileSize
          this.game.depth += 2
          this.game.enemy.y -= this.game.tileSize
          this.game.mapTracker.updateToFour()
          this.game.mapTracker.playerLocationY +=1
        } else if(this.refToDig === 7){
          this.game.cave.drawBrokenJewel(this.direction)
        }
        else{
          this.game.background.y -= this.game.tileSize
          this.game.cave.y -= this.game.tileSize
          this.game.depth += 2
          this.game.enemy.y -= this.game.tileSize
          this.game.mapTracker.updateToFour()
          this.game.mapTracker.playerLocationY +=1
        }
      }
    } else if(event.keyCode == this.game.keys.SHOP){
      if(this.game.menuActivated === 1){
        this.game.menuActivated = 0
      } else{
      this.game.menuActivated = 1
      }
    }
  }.bind(this)
}
