function Enemy(game) {
    this.game = game

    this.width = this.game.tileSize
    this.height = this.game.tileSize

    this.x = this.game.tileSize * 10
    this.y = this.game.tileSize * 5
}
