function Player(game) {
  this.game = game
 
  this.width = this.game.tileSize
  this.height = this.game.tileSize


  this.direction = 0 // left = 1, right = 2
  this.x = this.game.tileSize * 5
  this.y = this.game.tileSize * 4

  this.ipa = new Image()
  this.ipa.src = "img/ipa.png"
  
  this.setListeners();
}

Player.prototype.draw = function() {
  this.game.ctx.drawImage(this.ipa, this.x, this.y, this.width, this.height)
}

Player.prototype.move = function() {

}

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === this.game.keys.RIGHT && this.x<this.game.canvas.width - this.width-30) {
        this.direction = 2
        this.x += this.game.tileSize
    } else if (event.keyCode == this.game.keys.LEFT && this.x > 5) {
        this.direction = 1
        this.x -= this.game.tileSize
    } else if (event.keyCode == this.game.keys.UP && this.game.background.y < -3) {
        this.game.background.y += this.game.tileSize
        this.game.cave.y += this.game.tileSize
        this.game.enemy.y += this.game.tileSize
        this.game.depth -= 2
    } else if (event.keyCode == this.game.keys.DOWN && this.game.background.y > -3200) {
        this.game.background.y -= this.game.tileSize
        this.game.cave.y -= this.game.tileSize
        this.game.depth += 2
        this.game.enemy.y -= this.game.tileSize
    } else if(event.keyCode == this.game.keys.DIG){
        console.log("dig in front of last direction left or right")
    }
  }.bind(this)
}
