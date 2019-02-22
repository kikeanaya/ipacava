function Enemy(game) {
    this.game = game

    this.width = this.game.tileSize
    this.height = this.game.tileSize

    this.enemy1x = this.game.tileSize * 11
    this.enemy1y = this.game.tileSize * 10
    this.e1randomDir = 0
    this.enemy1Health = 500
}

Enemy.prototype.moveEnemy = function(){

    if(this.e1randomDir===1){ //Dirección hacia arriba
        if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY - 1][this.game.mapTracker.enemy1LocationX] === 4){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX] = 4
            this.game.mapTracker.enemy1LocationY -=1
            this.enemy1y-=this.game.tileSize
        }else if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY - 1][this.game.mapTracker.enemy1LocationX] === 2){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY - 1][this.game.mapTracker.enemy1LocationX] = 3
        }else if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY - 1][this.game.mapTracker.enemy1LocationX] === 3){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX] = 4
            this.game.mapTracker.enemy1LocationY -=1
            this.enemy1y-=this.game.tileSize
        } else if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY - 1][this.game.mapTracker.enemy1LocationX] === 1){
            this.game.player.health-=30
        }
    }

    if(this.e1randomDir===2){ //Dirección hacia derecha
        if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX+1] ===  4){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX] = 4
            this.enemy1x+=this.game.tileSize
            this.game.mapTracker.enemy1LocationX +=1
        }else if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX+1] === 2){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX+1] = 3
        }else if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX+1] === 3){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX] = 4
            this.game.mapTracker.enemy1LocationX +=1
            this.enemy1x+=this.game.tileSize
        }else if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX+1] === 1){
            this.game.player.health-=30
        }
    }

    if(this.e1randomDir===3){ //Dirección hacia abajo

        if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY + 1][this.game.mapTracker.enemy1LocationX] ===  4){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX] = 4
            this.enemy1y+=this.game.tileSize
            this.game.mapTracker.enemy1LocationY +=1
        }else if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY+1][this.game.mapTracker.enemy1LocationX] === 2){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY+1][this.game.mapTracker.enemy1LocationX] = 3
        }else if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY+1][this.game.mapTracker.enemy1LocationX] === 3){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX] = 4
            this.game.mapTracker.enemy1LocationY +=1
            this.enemy1y+=this.game.tileSize
        }else if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY+1][this.game.mapTracker.enemy1LocationX] === 1){
            this.game.player.health-=30
        }
    }

    if(this.e1randomDir===4){ //Dirección hacia izquierda

        if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX-1] ===  4){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX] = 4
            this.enemy1x-=this.game.tileSize
            this.game.mapTracker.enemy1LocationX -=1
        }else if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX-1] === 2){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX-1] = 3
        }else if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX-1] === 3){
            this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX] = 4
            this.game.mapTracker.enemy1LocationX -=1
            this.enemy1x-=this.game.tileSize
        } else if(this.game.mapTracker.caveMatrix[this.game.mapTracker.enemy1LocationY][this.game.mapTracker.enemy1LocationX-1] === 1){
            this.game.player.health-=30
        }
    }
}
