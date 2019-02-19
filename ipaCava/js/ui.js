function Ui(game){
    this.game = game
    this.x = (this.game.width) - 130
    this.y = (this.game.height) - 30
}

Ui.prototype.draw = function (){
    this.game.ctx.font = "20px sans-serif";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("Depth: " +this.game.depth + "m", this.x, this.y);
}