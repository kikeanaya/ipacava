function Ground(game) {
  this.game = game

  this.width = this.game.canvas.width / 15
  this.height = this.game.canvas.width / 15

  this.tile = new Image()
  this.tile.src = "img/new.png"
}

Ground.prototype.draw = function(x, y) {
    this.game.ctx.drawImage(this.tile, x, y, this.tileSize, this.tileSize)
    console.log()
}