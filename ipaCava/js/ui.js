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

    this.game.ctx.font = "25px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("DEPTH: " +this.game.depth + "m", 1262, 50);
}

Ui.prototype.drawPlayerHealth = function (){
    this.game.ctx.fillStyle = "grey"
    this.game.ctx.fillRect(20, 27, 330, 29)

    this.game.ctx.font = "25px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("HEALTH: " + this.game.player.health, 30, 50);
}

Ui.prototype.drawMoney = function (){
    this.game.ctx.font = "25px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("MONEY: " + this.game.money, 200, 50);
}

Ui.prototype.drawShop = function (){
    this.game.ctx.fillStyle = "grey"
    this.game.ctx.fillRect(500, 210, 500, 350)

    this.game.ctx.font = "30px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("PRESS 1 TO BUY:", 540, 270);
    
    this.game.ctx.drawImage(this.weapon1, 532, 285, this.weaponsWidth, this.weaponsHeight)

    this.game.ctx.font = "30px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("PRESS 2 TO BUY:", 770, 270);

    this.game.ctx.drawImage(this.weapon2, 764, 285, this.weaponsWidth, this.weaponsHeight)

    this.game.ctx.font = "25px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("PRESS 'S' TO EXIT SHOP", 640, 530);
}

Ui.prototype.drawItem1 = function(){
    this.game.ctx.drawImage(this.weapon1, 400, 27, 30, 30)
}