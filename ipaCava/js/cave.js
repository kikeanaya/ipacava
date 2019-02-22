function Cave(game) {
  this.game = game

  this.x = 0
  this.y = this.game.tileSize * 5

  this.tile = new Image()
  this.tile.src = "img/tile.png"

  this.jewelTile = new Image()
  this.jewelTile.src = "img/jewelTile.png"

  this.jewelTile2 = new Image()
  this.jewelTile2.src = "img/jewelTile2.png"

  this.brokenTile = new Image()
  this.brokenTile.src = "img/tile2.png"

  this.emptyTile = new Image()
  this.emptyTile.src = "img/emptyTile.png"
  
  this.catSprites = new Image()
  this.catSprites.src = "img/catSprites.png"

  this.ipaSprites = new Image()
  this.ipaSprites.src = "img/ipaSprites.png"

  this.ipaSprites.frames = 3
  this.ipaSprites.frameIndex = 0

  this.numberOfHTiles = 15
  this.numberOfVTiles = 30  
}

Cave.prototype.draw = function() {   
    this.refY = this.y
    for(var i= 1;i<this.game.mapTracker.caveMatrix.length;i++){
        this.refX = 0
        for(var j=0;j<this.game.mapTracker.caveMatrix[i].length;j++){
                        
            if(this.game.mapTracker.caveMatrix[i][j] === 1){
                this.game.ctx.drawImage(this.emptyTile, this.refX, this.refY, this.game.tileSize, this.game.tileSize)
                this.game.ctx.drawImage(
                    this.ipaSprites,
                    this.ipaSprites.frameIndex * Math.floor(468 / this.ipaSprites.frames),
                    0,
                    Math.floor(468 / this.ipaSprites.frames),
                    156,
                    this.game.player.x-5,
                    this.game.player.y-5,
                    this.game.tileSize+10,
                    this.game.tileSize+10
                  )
                  this.animateImg()
                this.refX+=this.game.tileSize
            } else if(this.game.mapTracker.caveMatrix[i][j] === 2){
                this.game.ctx.drawImage(this.tile, this.refX, this.refY, this.game.tileSize, this.game.tileSize)
                this.refX+=this.game.tileSize
            } else if(this.game.mapTracker.caveMatrix[i][j] === 3){
                this.game.ctx.drawImage(this.brokenTile, this.refX, this.refY, this.game.tileSize, this.game.tileSize)
                this.refX+=this.game.tileSize
            } else if(this.game.mapTracker.caveMatrix[i][j] === 4){
                this.game.ctx.drawImage(this.emptyTile, this.refX, this.refY, this.game.tileSize, this.game.tileSize)
                this.refX+=this.game.tileSize
            } else if(this.game.mapTracker.caveMatrix[i][j] === 5){
                this.game.ctx.drawImage(this.emptyTile, this.refX, this.refY, this.game.tileSize, this.game.tileSize)
                this.game.ctx.drawImage(
                    this.catSprites,
                    this.ipaSprites.frameIndex * Math.floor(468 / this.ipaSprites.frames),
                    0,
                    Math.floor(468 / this.ipaSprites.frames),
                    156,
                    this.game.enemy.enemy1x-5,
                    this.game.enemy.enemy1y-5,
                    this.game.tileSize+10,
                    this.game.tileSize+10
                  )
                  this.refX+=this.game.tileSize
            } else if(this.game.mapTracker.caveMatrix[i][j] === 6){
                this.game.ctx.drawImage(this.jewelTile, this.refX, this.refY, this.game.tileSize, this.game.tileSize)
                this.refX+=this.game.tileSize
            } else if(this.game.mapTracker.caveMatrix[i][j] === 7){
                this.game.ctx.drawImage(this.jewelTile2, this.refX, this.refY, this.game.tileSize, this.game.tileSize)
                this.refX+=this.game.tileSize
            }
        }
        this.refY+=this.game.tileSize
    }
}

Cave.prototype.drawBrokenTile = function(direction) {
    if(direction === 3){ //when pressing down
        this.game.ctx.drawImage(this.brokenTile, this.game.player.x, this.game.player.y + this.game.tileSize, this.game.tileSize, this.game.tileSize)
    }
    if(direction === 2){ //when pressing right
        this.game.ctx.drawImage(this.brokenTile, this.game.player.x + this.game.tileSize, this.game.player.y, this.game.tileSize, this.game.tileSize)
    }
    if(direction === 4){ //when pressing left
        this.game.ctx.drawImage(this.brokenTile, this.game.player.x - this.game.tileSize, this.game.player.y, this.game.tileSize, this.game.tileSize)
    }
    if(direction === 1){ //when pressing up
        this.game.ctx.drawImage(this.brokenTile, this.game.player.x, this.game.player.y - this.game.tileSize, this.game.tileSize, this.game.tileSize)
    }
}

Cave.prototype.drawEmptyTile = function() {
    this.game.ctx.drawImage(this.emptyTile, this.game.player.x, this.game.player.y, this.game.tileSize, this.game.tileSize)
}

Cave.prototype.drawBrokenJewel = function(direction) {
    if(direction === 3){ //when pressing down
        this.game.ctx.drawImage(this.jewelTile2, this.game.player.x, this.game.player.y + this.game.tileSize, this.game.tileSize, this.game.tileSize)
    }
    if(direction === 2){ //when pressing right
        this.game.ctx.drawImage(this.jewelTile2, this.game.player.x + this.game.tileSize, this.game.player.y, this.game.tileSize, this.game.tileSize)
    }
    if(direction === 4){ //when pressing left
        this.game.ctx.drawImage(this.jewelTile2, this.game.player.x - this.game.tileSize, this.game.player.y, this.game.tileSize, this.game.tileSize)
    }   
    if(direction === 1){ //when pressing up
        this.game.ctx.drawImage(this.jewelTile2, this.game.player.x, this.game.player.y - this.game.tileSize, this.game.tileSize, this.game.tileSize)
    }   
}

Cave.prototype.animateImg = function() {
    if (this.game.framesCounter % 40 === 0) {
      this.ipaSprites.frameIndex += 1
  
      if (this.ipaSprites.frameIndex > 2) this.ipaSprites.frameIndex = 0
    }
  }