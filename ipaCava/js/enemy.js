function Enemy(game) {
    this.game = game

    this.width = this.game.tileSize
    this.height = this.game.tileSize

    this.x = this.game.tileSize * 10
    this.y = this.game.tileSize * 5

    this.enemy = new Image()
    this.enemy.src = "img/enemy1.png"  
}

Enemy.prototype.draw = function(x, y) {
    this.game.ctx.drawImage(this.enemy, this.x, this.y, this.width, this.height)
}