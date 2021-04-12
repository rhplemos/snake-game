import {gameboard, generateRandomBoardPosition} from '../Board/app.js';
import {collision as snakeCollision, expandSnake} from '../Snake/app.js'

const EXPANSION_RATE = 2;

let foodPosition = generateRandomPosition();

export function update (){
    if (snakeCollision(foodPosition)){
        expandSnake(EXPANSION_RATE);
        foodPosition = generateRandomBoardPosition();
    }        
};

export function draw(){
    const foodElement = document.createElement('div');

    //config css
    foodElement.classList.add('food');

    //position        
    foodElement.style.gridColumnStart = foodPosition.x;
    foodElement.style.gridRowStart = foodPosition.y;

    //append on DOM (colocar no DOM)
    gameboard.appendChild(foodElement)
};

function generateRandomPosition (){
    let newFoodPosition;

    while (newFoodPosition === undefined || snakeCollision(newFoodPosition)){
        newFoodPosition = generateRandomBoardPosition();
    }

    return newFoodPosition
}