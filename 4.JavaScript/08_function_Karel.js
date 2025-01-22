//Karel Program

//Program 1
function main(){
    move();
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();
}

//*************************************************************************** */
//Program 2

function main(){

    movesFourTimes();
    turnLeft();
    movesFourTimes();
}

function movesFourTimes(){
    move();
    move();
    move();
    move();
}

//****************************************************************************** */
//Program 3

function main(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();

}

//****************************************************************************** */
//Program 4

function main(){
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
}

function diagonalMoveAndBeeper(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
}