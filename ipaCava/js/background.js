function Background(game) {
  this.game = game

  this.back = new Image()
  this.back.src = "img/desert.png"
  
  this.x = 0
  this.y = -200

  this.width = this.game.tileSize * 15
  this.height = this.game.canvas.height
}

Background.prototype.draw = function() {
  this.game.ctx.drawImage(this.back, this.x, this.y, this.width, this.height)
};

Background.prototype.move = function() {
  
};