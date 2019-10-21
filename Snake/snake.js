(function() {
    var board = document.querySelector("#board");
    for (let i = 0; i < 20; i++) {
        var tr = document.createElement("tr");
        tr.setAttribute("id", `${i}`);
        for (let j = 0; j < 20; j++) {
            var td = document.createElement("td");
            td.setAttribute("id", `r${i}c${j}`);
            tr.appendChild(td);
        }
        board.appendChild(tr);
    }
})()
var snakeX = 10;
var snakeY = 10;
var nextX = 0;
var nextY = 0;
var length = 1;
var foodX;
var foodY;

function loop() {
    setInterval(function() {
       	var snakeX0 = snakeX;
        var snakeY0 = snakeY;
        if (snakeX >= 0 && snakeX < 20) {
            snakeX += nextX;
            snakeY += nextY;
        }
        if (snakeX < 0) {
            snakeX = 19;
        }
        if (snakeX >= 20) {
            snakeX = 0;
        }
        if (snakeY < 0) {
            snakeY = 19;
        }
        if (snakeY >= 20) {
            snakeY = 0;
        }
        if (snakeX == foodX && snakeY == foodY) {
            var foodX0 = foodX;
            var foodY0 = foodY;
            length++;
            document.getElementById(`r${foodX}c${foodY}`).classList.remove("food");
            randomFood();
        }
        document.getElementById(`r${snakeX}c${snakeY}`).classList.add("snake");
        document.getElementById(`r${snakeX0}c${snakeY0}`).classList.remove("snake");
    }, 1000);
}

function randomFood() {
    foodX = Math.floor(Math.random() * 20);
    foodY = Math.floor(Math.random() * 20);
    document.getElementById(`r${foodX}c${foodY}`).classList.add("food");
}
document.addEventListener("keydown", function(event) {

    switch (event.keyCode) {
        case 39: // Right
            nextY = 1;
            nextX = 0;
            break;
        case 37: // Left
            nextY = -1;
            nextX = 0;
            break;
        case 38: // UP
            nextX = -1;
            nextY = 0;
            break;
        case 40: //down
            nextX = 1;
            nextY = 0;
            break;
    }
});
window.onload = function() {
	
    loop();
    randomFood();
}