function Ui(game){
    this.game = game

    this.depthx = (this.game.width) - 155
    this.depthy = (this.game.height) - 28
}

Ui.prototype.drawDepth = function (){
    this.game.ctx.fillStyle = "grey"
    this.game.ctx.fillRect(1255, 632, 150, 29)

    this.game.ctx.font = "25px racing sans one";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("DEPTH: " +this.game.depth + "m", this.depthx, this.depthy);
}

Ui.prototype.drawPlayerHealth = function (){
    this.game.ctx.fillStyle = "grey"
    this.game.ctx.fillRect(20, 20, 330, 29)

    this.game.ctx.font = "25px racing sans one";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("HEALTH: " + this.game.player.health, 30, 43);
}

Ui.prototype.drawMoney = function (){
    this.game.ctx.font = "25px racing sans one";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("MONEY: " + this.game.money, 200, 43);
}