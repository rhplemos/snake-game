import { gameboard } from './Board/app.js';
import {SNAKE_SPEED, draw as snakeDraw, update as snakeUpdate} from './Snake/app.js'

let lastTimeRender = 0;

//current time -> miliseconds
function main(currentTime){    

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
 };

 function draw() {
     gameboard.innerHTML = ''
     snakeDraw();
 };

window.requestAnimationFrame(main)