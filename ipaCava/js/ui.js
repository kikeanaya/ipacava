function Ui(game){
    this.game = game

    this.item1 = new Image()
    this.item1.src = "img/item1.png"

    this.item2 = new Image()
    this.item2.src = "img/item2.png"

    this.itemsWidth = 200
    this.itemsHeight = 200
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
    
    this.game.ctx.drawImage(this.item1, 532, 285, this.itemsWidth, this.itemsHeight)

    this.game.ctx.font = "30px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("PRESS 2 TO BUY:", 770, 270);

    this.game.ctx.drawImage(this.item2, 764, 285, this.itemsWidth, this.itemsHeight)

    this.game.ctx.font = "25px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("PRESS 'S' TO EXIT SHOP", 640, 530);
}

Ui.prototype.drawItem1 = function(){
    this.game.ctx.drawImage(this.item1, 400, 27, 30, 30)
}

Ui.prototype.drawItem2 = function(){
    this.game.ctx.drawImage(this.item2, 500, 27, 30, 30)
}

Ui.prototype.drawEnemyHealth = function(){
    this.game.ctx.fillStyle = "green"
    this.game.ctx.fillRect(this.game.enemy.enemy1x, this.game.enemy.enemy1y-22, 70, 15)
    
    this.game.ctx.font = "15px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "red";
    this.game.ctx.fillText("HEALTH: " + this.game.enemy.enemy1Health, this.game.enemy.enemy1x, this.game.enemy.enemy1y-10);
}

Ui.prototype.endScreen = function(){
    this.game.ctx.fillStyle = "red"
    this.game.ctx.fillRect(400, 110, 650, 440)

    this.game.ctx.font = "55px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("YOU FAILED. TRY AGAIN?", 450, 230);

    this.game.ctx.font = "35px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("PRESS 'Y'", 500, 400);

    this.game.ctx.font = "35px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("TO RESTART", 480, 450);

    this.game.ctx.font = "35px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("PRESS 'N'", 800, 400);

    this.game.ctx.font = "35px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText("FOR HOME SCREEN", 730, 450);
}