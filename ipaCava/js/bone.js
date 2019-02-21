function Bone(game, x, y) {
    this.game = game

    this.x = x
    this.y = y
    this.r = 5

    this.width = 30
    this.height = 15
}

Bone.prototype.draw = function(){
  this.game.ctx.beginPath()
  this.game.ctx.fillStyle = "white"
  this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
  this.game.ctx.fill()
  this.game.ctx.closePath()
}

Bone.prototype.move = function() {
    this.x += 10
}