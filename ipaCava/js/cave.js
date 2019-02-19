function Cave(game) {
  this.game = game

  this.x = 0
  this.y = this.game.tileSize * 5

  this.tile = new Image()
  this.tile.src = "img/tile.png"
  
  this.numberOfHTiles = 15
  this.numberOfVTiles = 30
}

Cave.prototype.draw = function() {   
    this.refY = this.y
    for(var i= 1;i<this.numberOfVTiles;i++){
        this.refX = 0
        for(var j=0;j<this.numberOfHTiles;j++){
            this.game.ctx.drawImage(this.tile, this.refX, this.refY, this.game.tileSize, this.game.tileSize)
            this.refX+=this.game.tileSize
        }
        this.game.ctx.drawImage(this.tile, this.x, this.y+this.game.tileSize, this.game.tileSize, this.game.tileSize)
        this.refY+=this.game.tileSize
    }
}