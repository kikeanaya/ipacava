function Ui(game){
    this.game = game

    this.weapon1 = new Image()
    this.weapon1.src = "img/weapon1.png"

    this.weapon2 = new Image()
    this.weapon2.src = "img/weapon2.png"

    this.weaponsWidth = 200
    this.weaponsHeight = 200
}

Ui.prototype.drawDepth = function (){
    this.game.ctx.fillStyle = "grey"
    this.game.ctx.fillRect(1255, 27, 150, 29)

    this.game.ctx.font = "25px racing sans one";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("DEPTH: " +this.game.depth + "m", 1262, 50);

}

Ui.prototype.drawPlayerHealth = function (){
    this.game.ctx.fillStyle = "grey"
    this.game.ctx.fillRect(20, 27, 330, 29)

    this.game.ctx.font = "25px racing sans one";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("HEALTH: " + this.game.player.health, 30, 50);
}

Ui.prototype.drawMoney = function (){
    this.game.ctx.font = "25px racing sans one";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("MONEY: " + this.game.money, 200, 50);
}

Ui.prototype.drawShop = function (){
    this.game.ctx.fillStyle = "grey"
    this.game.ctx.fillRect(500, 230, 500, 300)

    this.game.ctx.font = "25px racing sans one";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("BUY: WEAPON1", 550, 270);
    
    this.game.ctx.drawImage(this.weapon1, 532, 285, this.weaponsWidth, this.weaponsHeight)

    this.game.ctx.font = "25px racing sans one";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("BUY: WEAPON2", 780, 270);

    this.game.ctx.drawImage(this.weapon2, 764, 285, this.weaponsWidth, this.weaponsHeight)

}