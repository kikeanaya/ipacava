function MapTracker(game){
    this.game = game

    this.playerLocationX = this.game.player.x / this.game.tileSize
    this.playerLocationY = 0

    this.digDirection = 0

    this.caveMatrix = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  // Leyenda:
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],  // 0 = espacio vacío
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],  // 1 = ubicación del jugador
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],  // 2 = tile sin tocar
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],  // 3 = tile con 1 golpe
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],  // 4 = espacio sin colisión pero con fondo de caverna
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    ]

    this.hTiles = 15
    this.vTiles = 30
}

MapTracker.prototype.updateToFour = function() {
    this.caveMatrix[this.playerLocationY][this.playerLocationX] = 4
}

MapTracker.prototype.setPlayerLocation = function() {
    this.caveMatrix[this.playerLocationY][this.playerLocationX] = 1
}

MapTracker.prototype.checkTileStatus = function(direction) {
    if(direction===3){ //Dirección hacia abajo
    if(this.caveMatrix[this.playerLocationY + 1][this.playerLocationX] === 2){
        this.caveMatrix[this.playerLocationY + 1][this.playerLocationX] = 3
    } else if(this.caveMatrix[this.playerLocationY + 1][this.playerLocationX] === 3) {
        this.caveMatrix[this.playerLocationY + 1][this.playerLocationX] = 4
    }
    return this.caveMatrix[this.playerLocationY + 1][this.playerLocationX]
    }

    if(direction===2){ //Dirección hacia derecha
        if(this.caveMatrix[this.playerLocationY][this.playerLocationX+1] === 2){
            this.caveMatrix[this.playerLocationY][this.playerLocationX+1] = 3
        } else if(this.caveMatrix[this.playerLocationY][this.playerLocationX+1] === 3) {
            this.caveMatrix[this.playerLocationY][this.playerLocationX+1] = 4
        }
    return this.caveMatrix[this.playerLocationY][this.playerLocationX+1]
    }
    if(direction===4){ //Dirección hacia izquierda
        if(this.caveMatrix[this.playerLocationY][this.playerLocationX-1] === 2){
            this.caveMatrix[this.playerLocationY][this.playerLocationX-1] = 3
        } else if(this.caveMatrix[this.playerLocationY][this.playerLocationX-1] === 3) {
            this.caveMatrix[this.playerLocationY][this.playerLocationX-1] = 4
        }
    return this.caveMatrix[this.playerLocationY][this.playerLocationX-1]
    }
}