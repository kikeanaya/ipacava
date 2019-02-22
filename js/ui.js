function Ui(game){
    this.game = game

    this.item1 = new Image()
    this.item1.src = "img/item1.png"

    this.item2 = new Image()
    this.item2.src = "img/item2.png"

    this.itemsWidth = 150
    this.itemsHeight = 150
}

Ui.prototype.drawDepth = function (){
    this.game.ctx.fillStyle = "#530200"
    this.game.ctx.fillRect(1255, 27, 150, 29)

    this.game.ctx.font = "25px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "#fcdeae";
    this.game.ctx.fillText("DEPTH: " +this.game.depth + "m", 1262, 50);
}

Ui.prototype.drawPlayerHealth = function (){
    this.game.ctx.fillStyle = "#530200"
    this.game.ctx.fillRect(20, 27, 320, 29)

    this.game.ctx.fillStyle = "#530200"
    this.game.ctx.fillRect(85, 60, 170, 29)

    this.game.ctx.font = "25px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "#fcdeae";
    this.game.ctx.fillText("HEALTH: " + this.game.player.health, 30, 50);
}

Ui.prototype.drawMoney = function (){
    this.game.ctx.font = "25px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "#fcdeae";
    this.game.ctx.fillText("MONEY: " + this.game.money, 200, 50);

    this.game.ctx.font = "15px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "#fcdeae";
    this.game.ctx.fillText("PRESS 'C' FOR CONTROLS", 93, 80);
}

Ui.prototype.drawShop = function (){
    this.game.ctx.fillStyle = "#530200"
    this.game.ctx.fillRect(500, 210, 500, 350)

    this.game.ctx.font = "30px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "#fcdeae";
    this.game.ctx.fillText("PRESS '1' TO BUY:", 540, 270);

    this.game.ctx.strokeStyle = "#fcdeae"
    this.game.ctx.lineWidth = 5
    this.game.ctx.strokeRect(547, 290, 180, 180)
    
    this.game.ctx.drawImage(this.item1, 562, 305, this.itemsWidth, this.itemsHeight)

    this.game.ctx.font = "15px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "#fcdeae";
    this.game.ctx.fillText("PRICE: 400", 540, 490);

    this.game.ctx.strokeStyle = "#fcdeae"
    this.game.ctx.lineWidth = 5
    this.game.ctx.strokeRect(777, 290, 180, 180)

    this.game.ctx.font = "30px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "#fcdeae";
    this.game.ctx.fillText("PRESS '2' TO BUY:", 765, 270);

    this.game.ctx.drawImage(this.item2, 784, 295, this.itemsWidth+20, this.itemsHeight+20)
    
    this.game.ctx.font = "15px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "#fcdeae";
    this.game.ctx.fillText("PRICE: 1000", 775, 490);

    this.game.ctx.font = "25px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "#fcdeae";
    this.game.ctx.fillText("PRESS 'S' TO EXIT SHOP", 640, 535);
}

Ui.prototype.drawItem1 = function(){
    this.game.ctx.drawImage(this.item1, 360, 27, 30, 30)
}

Ui.prototype.drawItem2 = function(){
    this.game.ctx.drawImage(this.item2, 410, 27, 30, 32)
}

Ui.prototype.drawEnemyHealth = function(){
    this.game.ctx.fillStyle = "#a30910"
    this.game.ctx.fillRect(this.game.enemy.enemy1x +22, this.game.enemy.enemy1y-37, 55, 35)
    
    this.game.ctx.font = "25px Love Ya Like A Sister"
    this.game.ctx.fillStyle = "white"
    this.game.ctx.fillText(this.game.enemy.enemy1Health, this.game.enemy.enemy1x+30, this.game.enemy.enemy1y-11)
}

Ui.prototype.endScreen = function(){
    this.game.ctx.fillStyle = "red"
    this.game.ctx.fillRect(400, 110, 650, 440)

    this.game.ctx.font = "55px Love Ya Like A Sister"
    this.game.ctx.fillStyle = "white"
    this.game.ctx.fillText("YOU FAILED. TRY AGAIN?", 450, 230)

    this.game.ctx.font = "35px Love Ya Like A Sister"
    this.game.ctx.fillStyle = "white"
    this.game.ctx.fillText("PRESS 'Y'", 500, 400)

    this.game.ctx.font = "35px Love Ya Like A Sister"
    this.game.ctx.fillStyle = "white"
    this.game.ctx.fillText("TO RESTART", 480, 450)

    this.game.ctx.font = "35px Love Ya Like A Sister"
    this.game.ctx.fillStyle = "white"
    this.game.ctx.fillText("PRESS 'N'", 800, 400)

    this.game.ctx.font = "35px Love Ya Like A Sister"
    this.game.ctx.fillStyle = "white"
    this.game.ctx.fillText("FOR HOME SCREEN", 730, 450)
}

Ui.prototype.winScreen = function(){
    this.game.ctx.fillStyle = "green"
    this.game.ctx.fillRect(400, 110, 650, 440)

    this.game.ctx.font = "50px Love Ya Like A Sister"
    this.game.ctx.fillStyle = "white"
    this.game.ctx.fillText("YOU BEAT THE ANNOYING CAT", 425, 230)

    this.game.ctx.font = "40px Love Ya Like A Sister"
    this.game.ctx.fillStyle = "white"
    this.game.ctx.fillText("IN " + this.game.seconds + " SECONDS", 620, 290)

    this.game.ctx.font = "35px Love Ya Like A Sister"
    this.game.ctx.fillStyle = "white"
    this.game.ctx.fillText("PRESS 'Y' TO RESTART", 570, 480)
}

Ui.prototype.drawControls = function(){
    this.game.ctx.fillStyle = "#530200"
    this.game.ctx.fillRect(20, 60, 320, 350)

    this.game.ctx.font = "50px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "#fcdeae";
    this.game.ctx.fillText("CONTROLS", 75, 120);

    this.game.ctx.font = "20px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "#fcdeae";
    this.game.ctx.fillText("- 'Z': SHOOT LEFT", 65, 170);
    this.game.ctx.fillText("- 'X': SHOOT RIGHT", 65, 195);
    this.game.ctx.fillText("- 'S': OPEN SHOP", 65, 220);
    this.game.ctx.fillText("- '↑': MOVE UP", 65, 245);
    this.game.ctx.fillText("- '←': MOVE LEFT", 65, 270);
    this.game.ctx.fillText("- '↓': MOVE DOWN", 65, 295);
    this.game.ctx.fillText("- '→': MOVE RIGHT", 65, 320);

}

Ui.prototype.drawSeconds = function(){
    this.game.ctx.font = "80px Love Ya Like A Sister";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText(this.game.seconds, 685, 100);
}