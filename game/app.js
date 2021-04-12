import { gameboard, isOutsideBoard } from './Board/app.js';
import {SNAKE_SPEED, draw as snakeDraw, update as snakeUpdate, getSnakeHead, hasSelfCollision as hasSnakeSelfCollision} from './Snake/app.js'
import {draw as foodDraw, update as foodUpdate} from './Food/app.js'

let lastTimeRender = 0;

let gameOver = false;

//current time -> miliseconds
function main(currentTime){   
    
    if (gameOver){
        alert('Você perdeu')
    }

    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastTimeRender) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastTimeRender = currentTime;    

    update();

    draw();
 }    

 function update() {
     gameboard.innerHTML = ''
     snakeUpdate();
     foodUpdate();
     checkGameOver();
 };

 function draw() {
     gameboard.innerHTML = ''
     snakeDraw();
     foodDraw();
 };

 function checkGameOver() {
   // is (isOutsideBoard(getSnakeHead()) || hasSnakeSelfCollision()) 
   // {
        //gameOver = true;
   // }
}

window.requestAnimationFrame(main)