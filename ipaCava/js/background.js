function Background(game) {
  this.game = game

  this.back = new Image()
  this.back.src = "img/background.jpeg"
  
  this.x = 0
  this.y = 0

  this.width = this.game.canvas.width
  this.height = 4000
}

Background.prototype.draw = function() {
  this.game.ctx.drawImage(this.back, this.x, this.y, this.width, this.height)
};

Background.prototype.move = function() {
  
};