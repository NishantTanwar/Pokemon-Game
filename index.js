/**
 * Created by Nishant Tanwar on 18-07-2017.
 */
var canvas = document.getElementById('myCanvas');
var pen = canvas.getContext('2d')
pen.fillStyle = "red";

function init() {
    GAME_WIDTH = 1200;
    GAME_HEIGHT = 600;
    GAME_IS_RUNNING = true;
    enemy ={
        x:150,
        y:20,
        w:70,
        h:70,
        speedY:5
    };

    /*enemy2 ={
     x:150,
     y:20,
     w:50,
     h:50,
     speedY:5
     };

     enemy3 ={
     x:150,
     y:20,
     w:50,
     h:50,
     speedY:5
     };

     enemy4 ={
     x:150,
     y:20,
     w:50,
     h:50,
     speedY:5
     };*/

    player ={
        x:0,
        y:120,
        w:70,
        h:70,
        speedX:5,
        moving:false
    };

    goal ={
        x:1150,
        y:120,
        w:50,
        h:50
    };

    //Loading Images
    playerImg = new Image;
    playerImg.src = "Assets/pika.png";


    enemyImg = new Image;
    enemyImg.src = "Assets/gengar.png";


    goalImg = new Image;
    goalImg.src = "Assets/ball.png";


    //clicks the mouse
    canvas.addEventListener('mousedown', function () {
        player.moving=true;
    })
    //release the mouse
    canvas.addEventListener('mouseup', function () {
        player.moving=false;
    });

}
function isColliding(r1,r2){

    var firstCond = Math.abs(r1.x - r2.x) <= 50;

    var secondCond = Math.abs(r1.y-r2.y)<=50;

    return firstCond && secondCond;

}


function draw() {
    pen.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

    pen.drawImage(enemyImg,enemy.x,enemy.y,enemy.w,enemy.h);

    pen.drawImage(playerImg,player.x,player.y,player.w,player.h);

    pen.drawImage(goalImg,goal.x,goal.y,goal.w,goal.h);

}

function update() {
    enemy.y += enemy.speedY;
    if(enemy.y>(GAME_HEIGHT-enemy.h)||enemy.y <0){
        enemy.speedY *= -1;
    }

    if(player.moving==true){
        player.x += player.speedX;
    }

    if(isColliding(player,enemy)){
        GAME_IS_RUNNING = false;
        alert("Game Over");
    }
    if(isColliding(player,goal)){
        GAME_IS_RUNNING = false;
        alert("You Won!");
    }

}

function render() {
    //Game Loop
    draw();
    update();
    console.log("In render");
    if(GAME_IS_RUNNING){
        window.requestAnimationFrame(render)}
}
init();
render();
/* var bird={
 x: 40,
 y: 30,
 speed: 10,
 color: "black",
 jump: function(){
 console.log("Bird is jumping")
 }
 }
 bird.z=20;
 bird.jump();*/


