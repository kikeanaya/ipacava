function Bone(game, x, y, boneDirection) {
    this.game = game

    this.x = x
    this.y = y
    this.r = 10
    this.boneDirection = boneDirection

    this.width = 30
    this.height = 15
}

Bone.prototype.draw = function(){
  this.game.ctx.beginPath()
  this.game.ctx.fillStyle = "yellow"
  this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
  this.game.ctx.fill()
  this.game.ctx.closePath()
}

Bone.prototype.move = function() {
    if(this.boneDirection === 1){
        this.x += 10
    }
    if(this.boneDirection === 0){
        this.x -= 10
    }
}