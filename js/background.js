function Background(game) {
  this.game = game

  this.back = new Image()
  this.back.src = "img/background.jpg"
  
  this.x = 0
  this.y = -200

  this.width = this.game.tileSize * 15
  this.height = this.game.canvas.height + 100
}

Background.prototype.draw = function() {
  this.game.ctx.drawImage(this.back, this.x, this.y, this.width, this.height)
};