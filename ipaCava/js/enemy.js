function Enemy(game) {
    this.game = game

    this.width = this.game.tileSize
    this.height = this.game.tileSize

    this.enemy1x = this.game.tileSize * 11
    this.enemy1y = this.game.tileSize * 10

    this.enemy2x = this.game.tileSize * 9
    this.enemy2y = this.game.tileSize * 10
}
