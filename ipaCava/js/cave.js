function Cave(game) {
  this.game = game

  this.x = 0
  this.y = this.game.tileSize * 5

  this.tile = new Image()
  this.tile.src = "img/tile.png"

  this.brokenTile = new Image()
  this.brokenTile.src = "img/tile2.png"

  this.emptyTile = new Image()
  this.emptyTile.src = "img/emptyTile.png"
  
  this.enemy = new Image()
  this.enemy.src = "img/enemy1.png"

  this.ipa = new Image()
  this.ipa.src = "img/gorilla.png"

  this.numberOfHTiles = 15
  this.numberOfVTiles = 30
}

Cave.prototype.draw = function() {   
    this.refY = this.y
    for(var i= 1;i<this.game.mapTracker.caveMatrix.length;i++){
        this.refX = 0
        for(var j=0;j<this.game.mapTracker.caveMatrix[i].length;j++){
            if(this.game.mapTracker.caveMatrix[i][j] === 1){
                this.game.ctx.drawImage(this.tile, this.refX, this.refY, this.game.tileSize, this.game.tileSize)
                this.game.ctx.drawImage(this.ipa, this.game.player.x, this.game.player.y, this.game.tileSize, this.game.tileSize)
                this.refX+=this.game.tileSize
            }
            if(this.game.mapTracker.caveMatrix[i][j] === 2){
                this.game.ctx.drawImage(this.tile, this.refX, this.refY, this.game.tileSize, this.game.tileSize)
                this.refX+=this.game.tileSize
            } else if(this.game.mapTracker.caveMatrix[i][j] === 3){
                this.game.ctx.drawImage(this.brokenTile, this.refX, this.refY, this.game.tileSize, this.game.tileSize)
                this.refX+=this.game.tileSize
            } else if(this.game.mapTracker.caveMatrix[i][j] === 4){
                this.game.ctx.drawImage(this.emptyTile, this.refX, this.refY, this.game.tileSize, this.game.tileSize)
                this.refX+=this.game.tileSize
            } else if(this.game.mapTracker.caveMatrix[i][j] === 5){
                this.game.ctx.drawImage(this.tile, this.refX, this.refY, this.game.tileSize, this.game.tileSize)
                this.game.ctx.drawImage(this.enemy, this.game.enemy.x, this.game.enemy.y, this.game.tileSize, this.game.tileSize)
                this.refX+=this.game.tileSize
            }
        }
        this.refY+=this.game.tileSize
        this.game.ctx.drawImage(this.tile, this.x, this.y+this.game.tileSize, this.game.tileSize, this.game.tileSize)
    }
}

Cave.prototype.drawBrokenTile = function(direction) {
    if(direction === 3){ //when pressing down
        this.game.ctx.drawImage(this.brokenTile, this.game.player.x, this.game.player.y + this.game.tileSize, this.game.tileSize, this.game.tileSize)
    }
    if(direction === 2){ //when pressing right
        this.game.ctx.drawImage(this.brokenTile, this.game.player.x + this.game.tileSize, this.game.player.y, this.game.tileSize, this.game.tileSize)
    }
    if(direction === 2){ //when pressing left
        this.game.ctx.drawImage(this.brokenTile, this.game.player.x - this.game.tileSize, this.game.player.y, this.game.tileSize, this.game.tileSize)
    }
}

Cave.prototype.drawEmptyTile = function() {
    this.game.ctx.drawImage(this.emptyTile, this.game.player.x, this.game.player.y, this.game.tileSize, this.game.tileSize)
}