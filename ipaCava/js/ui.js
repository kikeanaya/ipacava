function Ui(game){
    this.game = game

    this.depthx = (this.game.width) - 130
    this.depthy = (this.game.height) - 30

    this.healthx = 30
    this.healthy = 40
}

Ui.prototype.drawDepth = function (){
    this.game.ctx.fillStyle = "grey"
    this.game.ctx.fillRect(1279, 632, 120, 25)

    this.game.ctx.font = "20px sans-serif";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("DEPTH: " +this.game.depth + "m", this.depthx, this.depthy);
}

Ui.prototype.drawPlayerHealth = function (){
    this.game.ctx.fillStyle = "grey"
    this.game.ctx.fillRect(25, 20, 130, 25)

    this.game.ctx.font = "20px sans-serif";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("HEALTH: " + this.game.player.health, this.healthx, this.healthy);
}