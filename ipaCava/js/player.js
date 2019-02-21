function Player(game) {
  this.game = game
 
  this.width = this.game.tileSize
  this.height = this.game.tileSize

  this.health = 100

  this.refToDig = 0

  this.direction = 0                                     
  this.x = this.game.tileSize * 5
  this.y = this.game.tileSize * 5

  this.haveItem1 = 0
  this.haveItem2 = 0

  this.bones = [];

  this.setListeners();
}

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    
    if (event.keyCode === this.game.keys.RIGHT && this.x<this.game.canvas.width - this.width-30) {
      this.direction = 2
      
      if(this.game.mapTracker.checkEnemyRight() === true){
        this.game.player.health -= 30  
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
          this.game.player.health -= 30  
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
          this.game.player.health -= 30  
        }
        else{
          this.refToDig = this.game.mapTracker.checkTileStatus(this.direction)
          if (this.refToDig === 3){
            this.game.cave.drawBrokenTile(this.direction)
          } else if (this.refToDig === 4){
            this.game.cave.drawEmptyTile(this.direction)
  
            this.game.background.y += this.game.tileSize
            this.game.cave.y += this.game.tileSize
            this.game.enemy.enemy1y += this.game.tileSize
            this.game.depth -= 2
            this.game.mapTracker.updateToFour()
            this.game.mapTracker.playerLocationY -=1
          } else if(this.refToDig === 7){
            this.game.cave.drawBrokenJewel(this.direction)
          }else {
            this.game.background.y += this.game.tileSize
            this.game.cave.y += this.game.tileSize
            this.game.enemy.enemy1y += this.game.tileSize
            this.game.depth -= 2
            this.game.mapTracker.updateToFour()
            this.game.mapTracker.playerLocationY -=1
          } 
        }
    } else if (event.keyCode == this.game.keys.DOWN && this.game.background.y > -2900) {
      this.direction = 3

      if(this.game.mapTracker.checkEnemyDown() === true){
        this.game.player.health -= 30  
      } 
      else{
        this.refToDig = this.game.mapTracker.checkTileStatus(this.direction)
        if (this.refToDig === 3){
          this.game.cave.drawBrokenTile(this.direction)
        } else if (this.refToDig === 4){
          this.game.cave.drawEmptyTile(this.direction)

          this.game.background.y -= this.game.tileSize
          this.game.cave.y -= this.game.tileSize
          this.game.depth += 2
          this.game.enemy.enemy1y -= this.game.tileSize
          this.game.mapTracker.updateToFour()
          this.game.mapTracker.playerLocationY +=1
        } else if(this.refToDig === 7){
          this.game.cave.drawBrokenJewel(this.direction)
        }
        else{
          this.game.background.y -= this.game.tileSize
          this.game.cave.y -= this.game.tileSize
          this.game.depth += 2
          this.game.enemy.enemy1y -= this.game.tileSize
          this.game.mapTracker.updateToFour()
          this.game.mapTracker.playerLocationY +=1
        }
      }
    } 
    else if(event.keyCode == this.game.keys.SHOP){
      if(this.game.menuActivated === 1){
        this.game.menuActivated = 0
      } else{
      this.game.menuActivated = 1
      }
    } 
    else if (event.keyCode === this.game.keys.ITEM1 && this.game.menuActivated === 1) {
      if(this.game.money >= 300 && this.haveItem1 === 0){
        this.haveItem1 = 1                                  // Buys Item 1
        this.game.money -= 300                              // Substracts money from player
      } else if(this.haveItem1 === 1){                      // Checks if you already have the item
      } else{
                                                            // Tells the user that they don't have enough money
      }
    } 
    else if(event.keyCode === this.game.keys.ITEM2 && this.game.menuActivated === 1){
      if(this.game.money >= 500 && this.haveItem2 === 0){
        this.haveItem2 = 1                                  // Buys Item 2
        this.game.money -= 500                              // Substracts money from player
      } else if(this.haveItem2 === 1){                      // Checks if you already have the item
      } else{
                                                            // Tells the user that they don't have enough money
      }
    }else if (event.keyCode === this.game.keys.RETRY) {
      this.game.start()
    }
    else if(event.keyCode === this.game.keys.HOME){
    }
    else if (event.keyCode == this.game.keys.SHOOTRIGHT && this.haveItem1 === 1) {
      this.shootRight();
    }else if (event.keyCode == this.game.keys.SHOOTLEFT && this.haveItem1 === 1) {
      this.shootLeft();
    }
  }.bind(this)
}

Player.prototype.shootRight = function() {
  var bone = new Bone(this.game, this.x + this.width, this.y + this.height / 2, 1)

  this.bones.push(bone)
}

Player.prototype.shootLeft = function() {
  var bone = new Bone(this.game, this.x, this.y + this.height / 2, 0)

  this.bones.push(bone)
}

Player.prototype.drawBones = function(){
  this.bones = this.bones.filter(function (bone) {  // Deletes bones out of canvas
    if(bone.x <= 1280 && bone.x>0){
      return true
    }  
  })
  this.bones.forEach(function(bone) {
    bone.draw()
    bone.move()
  })
}

Player.prototype.checkBoneHit = function(){
  this.bones.forEach(function(bone){                // Checks bones collision with enemy
    if(bone.x>this.game.enemy.enemy1x && bone.x<this.game.enemy.enemy1x+10){
      if(bone.y>this.game.enemy.enemy1y&&bone.y<this.game.enemy.enemy1y+this.game.tileSize){
      this.game.enemy.enemy1Health-=10
      }
    }
  }.bind(this))
}