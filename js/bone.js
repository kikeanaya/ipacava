function Bone(game, x, y, boneDirection) {
    this.game = game

    this.x = x
    this.y = y
    this.boneDirection = boneDirection

    this.r1 = 10
    this.r2 = 20
    this.width = 30
    this.height = 15
}

Bone.prototype.draw = function(){
  if(this.game.player.haveItem2 === 0){
    this.game.ctx.beginPath()
    this.game.ctx.fillStyle = "yellow"
    this.game.ctx.arc(this.x, this.y, this.r1, 0, Math.PI * 2)
    this.game.ctx.fill()
    this.game.ctx.closePath()
    } else if(this.game.player.haveItem2 === 1){
    this.game.ctx.beginPath()
    this.game.ctx.fillStyle = "#4DE82C"
    this.game.ctx.arc(this.x, this.y, this.r2, 0, Math.PI * 2)
    this.game.ctx.fill()
    this.game.ctx.closePath()
    }
}

Bone.prototype.move = function() {
    if(this.boneDirection === 1){
        this.x += 10
    }
    if(this.boneDirection === 0){
        this.x -= 10
    }
}