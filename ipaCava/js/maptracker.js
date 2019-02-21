function MapTracker(game){
    this.game = game

    this.playerLocationX = this.game.player.x / this.game.tileSize
    this.playerLocationY = 1

    this.enemy1LocationX = this.game.enemy.enemy1x / this.game.tileSize
    this.enemy1LocationY = this.game.enemy.enemy1y/this.game.tileSize -4

    this.enemyClash = false

    this.caveMatrix = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  // Leyenda:
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],  // 0 = espacio vacío
        [2,2,2,2,6,2,2,2,2,2,2,2,2,2,2],  // 1 = ubicación del jugador
        [2,6,2,2,6,2,2,2,2,2,2,6,2,2,2],  // 2 = tile sin tocar
        [2,2,2,2,6,2,2,2,6,2,2,2,2,2,2],  // 3 = tile con 1 golpe
        [2,2,2,2,2,6,2,2,2,2,2,2,2,2,2],  // 4 = espacio sin colisión pero con fondo de caverna
        [2,2,2,2,2,2,2,2,2,4,4,4,4,2,2],  // 5 = enemigo
        [2,2,6,2,2,2,2,2,2,2,2,2,2,6,2],  // 6 = joya sin golpe
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],  // 7 = joya con 1 golpe
        [2,2,2,2,2,2,2,2,2,2,6,2,2,2,2],
        [2,2,2,2,2,6,2,2,2,2,2,2,2,2,2],
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

// SETS PLAYER LOCATION IN MATRIX
MapTracker.prototype.setPlayerLocation = function() {
    this.caveMatrix[this.playerLocationY][this.playerLocationX] = 1
}

// SETS ENEMY LOCATION IN MATRIX
MapTracker.prototype.setEnemyLocation = function() {
    this.caveMatrix[this.enemy1LocationY][this.enemy1LocationX] = 5
}

MapTracker.prototype.checkEnemyUp = function() {
    if(this.caveMatrix[this.playerLocationY-1][this.playerLocationX] === 5 ){ 
        this.enemyClash = true
    } else{
        (this.enemyClash = false)
    }
    return this.enemyClash
}

MapTracker.prototype.checkEnemyRight = function() {
    if(this.caveMatrix[this.playerLocationY][this.playerLocationX+1] === 5 ){
        this.enemyClash = true
    } else{
        (this.enemyClash = false)
    }
    return this.enemyClash
}

MapTracker.prototype.checkEnemyDown = function() {
    if(this.caveMatrix[this.playerLocationY+1][this.playerLocationX] === 5 ){
        this.enemyClash = true
    } else{
        (this.enemyClash = false)
    }
    return this.enemyClash
}

MapTracker.prototype.checkEnemyLeft = function() {
    if(this.caveMatrix[this.playerLocationY][this.playerLocationX-1] === 5 ){
        this.enemyClash = true
    } else{
        (this.enemyClash = false)
    }
    return this.enemyClash
}

// CHECKS STATUS OF TILE WHERE PLAYER IS TRYING TO MOVE
MapTracker.prototype.checkTileStatus = function(direction) {

    if(direction===3){ //Dirección hacia abajo
        if(this.caveMatrix[this.playerLocationY + 1][this.playerLocationX] === 2){
            this.caveMatrix[this.playerLocationY + 1][this.playerLocationX] = 3
        } else if(this.caveMatrix[this.playerLocationY + 1][this.playerLocationX] === 3) {
            this.caveMatrix[this.playerLocationY + 1][this.playerLocationX] = 4
        } else if(this.caveMatrix[this.playerLocationY + 1][this.playerLocationX] === 6){
            this.caveMatrix[this.playerLocationY + 1][this.playerLocationX] = 7
        } else if(this.caveMatrix[this.playerLocationY + 1][this.playerLocationX] === 7) {
            this.game.money += 100
            this.game.moneySound.play()

            this.caveMatrix[this.playerLocationY + 1][this.playerLocationX] = 4
        }
    return this.caveMatrix[this.playerLocationY + 1][this.playerLocationX]
    }

    if(direction===1){ //Dirección hacia arriba
        if(this.caveMatrix[this.playerLocationY - 1][this.playerLocationX] === 2){
            this.caveMatrix[this.playerLocationY - 1][this.playerLocationX] = 3
        } else if(this.caveMatrix[this.playerLocationY - 1][this.playerLocationX] === 3) {
            this.caveMatrix[this.playerLocationY - 1][this.playerLocationX] = 4
        } else if(this.caveMatrix[this.playerLocationY - 1][this.playerLocationX] === 6){
            this.caveMatrix[this.playerLocationY - 1][this.playerLocationX] = 7
        } else if(this.caveMatrix[this.playerLocationY - 1][this.playerLocationX] === 7) {
            this.game.money += 100
            this.game.moneySound.play()

            this.caveMatrix[this.playerLocationY - 1][this.playerLocationX] = 4
        }
    return this.caveMatrix[this.playerLocationY - 1][this.playerLocationX]
    }

    if(direction===2){ //Dirección hacia derecha
        if(this.caveMatrix[this.playerLocationY][this.playerLocationX+1] === 2){
            this.caveMatrix[this.playerLocationY][this.playerLocationX+1] = 3
        } else if(this.caveMatrix[this.playerLocationY][this.playerLocationX+1] === 3) {
            this.caveMatrix[this.playerLocationY][this.playerLocationX+1] = 4
        } else if(this.caveMatrix[this.playerLocationY][this.playerLocationX+1] === 6){
            this.caveMatrix[this.playerLocationY][this.playerLocationX+1] = 7
        } else if(this.caveMatrix[this.playerLocationY][this.playerLocationX+1] === 7) {
            this.game.money += 100
            this.game.moneySound.play()

            this.caveMatrix[this.playerLocationY][this.playerLocationX+1] = 4
        }
    return this.caveMatrix[this.playerLocationY][this.playerLocationX+1]
    }

    if(direction===4){ //Dirección hacia izquierda
        if(this.caveMatrix[this.playerLocationY][this.playerLocationX-1] === 2){
            this.caveMatrix[this.playerLocationY][this.playerLocationX-1] = 3
        } else if(this.caveMatrix[this.playerLocationY][this.playerLocationX-1] === 3) {
            this.caveMatrix[this.playerLocationY][this.playerLocationX-1] = 4
        } else if(this.caveMatrix[this.playerLocationY][this.playerLocationX-1] === 6){
            this.caveMatrix[this.playerLocationY][this.playerLocationX-1] = 7
        } else if(this.caveMatrix[this.playerLocationY][this.playerLocationX-1] === 7) {
            this.game.money += 100
            this.game.moneySound.play()

            this.caveMatrix[this.playerLocationY][this.playerLocationX-1] = 4
        }
    return this.caveMatrix[this.playerLocationY][this.playerLocationX-1]
    }
}