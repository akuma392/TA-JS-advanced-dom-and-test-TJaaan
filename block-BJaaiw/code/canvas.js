var canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth ;
canvas.height =window.innerHeight ;

var c = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var radius = 10

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

var brickRowCount = 3;
var brickColumnCount = 14;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
let score = 0;

// random color

function getColor() {
    var colorCode = "0123456789abcdef";
    var code = "#";
    for (var count = 0; count < 6; count++) {
      code = code + colorCode[Math.floor(Math.random() * 16)];
    }
    return code;
}
let color = getColor();


// brick
let bricks = [];
for(var a=0; a<brickColumnCount; a++) {
    bricks[a] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[a][r] = { x: 0, y: 0 , status:1};
    }
}
function drawBricks() {
    for(var a=0; a<brickColumnCount; a++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[a][r].status == 1){
                var brickX = (a*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[a][r].x = brickX;
            bricks[a][r].y = brickY;

            c.beginPath();
            c.rect(brickX, brickY, brickWidth, brickHeight);
            c.fillStyle = color;
            c.fill();
            c.closePath();
            }
        }
    }
}


function collisionDetection() {
    for(var a=0; a<brickColumnCount; a++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[a][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert(`YOU WIN, CONGRATULATIONS! your Score is : ${score}`);
                        document.location.reload();
                        clearInterval(interval);
                }}
            }
        }
    }
}


function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function drawPaddle() {
    c.beginPath();
    c.rect(paddleX, canvas.height-paddleHeight - 10, paddleWidth, paddleHeight);
    // c.rect(100,200,100,200);
    // c.fillStyle = "#0095DD";
    c.fillStyle = color;
    c.fill();
    c.closePath();
}

function drawBall(){
    c.beginPath();
c.arc(x, y , radius, 0, Math.PI*2);
// c.fillStyle = "#0095DD";
c.fillStyle =color;
c.fill();
c.closePath();
}

function draw() {
    c.clearRect(0,0,innerWidth,innerHeight);
    drawBricks();
    drawBall();
    collisionDetection();
    drawPaddle();
      if(x + radius >innerWidth || x -radius < 0){
            dx = -dx;
        }

        if( y -radius <0){
            dy = -dy;
        }
        else if(y + radius > innerHeight -10 ){

            if(x > paddleX && x < paddleX + paddleWidth){
                dy =-dy
            }
            else{
                alert(`gaame Over your Score is :${score}`);
            document.location.reload();
            clearInterval(interval);
            }
        }
        if(rightPressed) {
            paddleX += 7;
            if (paddleX + paddleWidth > canvas.width){
                paddleX = canvas.width - paddleWidth;
            }
        }
        else if(leftPressed) {
            paddleX -= 7;
            if (paddleX < 0){
                paddleX = 0;
            }
        }
    

x += dx;
y += dy;
}
var interval = setInterval(draw, 10);
// drawPaddle();
// drawBricks();
// collisionDetection();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);