const BOARD_SIZE = 21;

export const gameboard = document.getElementById('game-board');

export function generateRandomBoardPosition(){ // gerando uma posição aleatória no gameboard
    return {
        x: Math.floor(Math.random() * BOARD_SIZE) + 1, //math.floor arredonda pra baixo  
        y: Math.floor(Math.random() * BOARD_SIZE) + 1,

    }

}

export function isOutsideBoard(position) {
    return position.x > BOARD_SIZE || position.x < 1 ||
           position.x > BOARD_SIZE || position.y < 1;
}