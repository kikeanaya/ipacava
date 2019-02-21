function Enemy(game) {
    this.game = game

    this.width = this.game.tileSize
    this.height = this.game.tileSize

    this.enemy1x = this.game.tileSize * 11
    this.enemy1y = this.game.tileSize * 10
    this.e1randomDir = 0

    this.enemy2x = this.game.tileSize * 9
    this.enemy2y = this.game.tileSize * 10
}

Enemy.prototype.moveEnemy = function(){

    if(this.e1randomDir===1){ //Dirección hacia arriba
        if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY - 1][this.game.mapTracker.enemy1LocationX] === 4){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX] = 4
            this.game.mapTracker.enemy1LocationY -=1
            this.enemy1y-=this.game.tileSize
        }
    }

    if(this.e1randomDir===2){ //Dirección hacia derecha
        console.log(this.game.mapTracker.enemy1LocationX)

        if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX+1] ===  4){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX] = 4
            this.enemy1x+=this.game.tileSize
            this.game.mapTracker.enemy1LocationX +=1
        } 
    }

    if(this.e1randomDir===3){ //Dirección hacia abajo

        if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY + 1][this.game.mapTracker.enemy1LocationX] ===  4){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX] = 4
            this.enemy1y+=this.game.tileSize
            this.game.mapTracker.enemy1LocationY +=1
        } 
    }

    if(this.e1randomDir===4){ //Dirección hacia izquierda
        console.log(this.game.mapTracker.enemy1LocationX)

        if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX-1] ===  4){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX] = 4
            this.enemy1x-=this.game.tileSize
            this.game.mapTracker.enemy1LocationX -=1
        } 
    }
}
