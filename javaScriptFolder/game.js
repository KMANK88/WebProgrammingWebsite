var startGame = false;
  
var enemyX = 0,enemyY = 0;
var enemyX2 = 200,enemyY2 = 0;
var enemyX3 = 300,enemyY3 = 0;
var enemyX4 = 400,enemyY4 = 0;
var enemyX5 = 500,enemyY5 = 0;
var enemyX6 = 600,enemyY6 = 0;
var x=400,y = 400;
var canvas1 = document.getElementById('game');
var ctx = canvas1.getContext('2d');
var rand;

$(document).ready(function($){
 
$('#btnCheck').on('click', function() {
  document.getElementById('gameOver').innerHTML = "<h1> Have fun! <h2>";
  startGame = true;
  
 });

$('body').on('keypress', function (e) {
  var actualKeyCode = e.keyCode;               // Get the Unicode value
  var actualCharacter = String.fromCharCode(actualKeyCode);
  
  if(actualCharacter == "w")
  {
      if(y-10 >=0){
      y-=10;
      
      }
  }
  else if(actualCharacter == "a")
  {
    if(x-10 >= 0)
     {
     x-=10;
     }
     
   
  }
  else if(actualCharacter == "s")
  {
  if(y+10 <= 450){
   y+=10;
  
  }
  }
  else if(actualCharacter == "d")
  {
    if(x+10  <= 750){
    x+=10;
 
  }
  }
  
 
})

});
var score=0;
function Score(){
       score++;
      document.getElementById('highScore').innerHTML = "Your Score: " +  score;
      window.localStorage.setItem("score",score);
      return score;
      
}

function randomNum(){
  var num = Math.floor(Math.random() * 750);
  return num;
}

function draw()
{
    //redraw enemys when they reach bottom
    ctx.clearRect(0,0,canvas1.width,canvas1.height);
    ctx.fillStyle="black";
    ctx.fillRect(enemyX, enemyY, 300,50);
    ctx.fillRect(enemyX2, enemyY2, 20,20);
    ctx.fillRect(enemyX3, enemyY3, 100,20);
    ctx.fillRect(enemyX4, enemyY4, 50,50);
    ctx.fillRect(enemyX5, enemyY5, 20,90);
    ctx.fillRect(enemyX6, enemyY6, 200,10);
    ctx.fillStyle="#FF0000";
  ctx.fillRect(x,y,50,50);

  checkCollision(x,y,50,50,enemyX,enemyY,50,300)
  checkCollision(x,y,50,50,enemyX2,enemyY2,20,20)
  checkCollision(x,y,50,50,enemyX3,enemyY3,20,100)
  checkCollision(x,y,50,50,enemyX4,enemyY4,50,50)
  checkCollision(x,y,50,50,enemyX5,enemyY5,90,20)
  checkCollision(x,y,50,50,enemyX6,enemyY6,10,200)

}
var speed =1;
function fallingEnemy()
{
  
  if(startGame)
  {
     

      enemyY +=10  *speed;
      enemyY2 +=10 *speed; 
      enemyY3 +=10 *speed; 
      enemyY4 +=10 *speed; 
      enemyY5 +=10 *speed;  
      enemyY6 +=10 *speed;  


      if(enemyY6+10 >=450){
          enemyY = 0;
          enemyX = randomNum();
          enemyY2 = 0;
          enemyX2 = randomNum();
          enemyY3 = 0;
          enemyX3 = randomNum();
          enemyY4 = 0;
          enemyX4 = randomNum();
          enemyY5 = 0;
          enemyX5 = randomNum();
          enemyY6 = 0;
          enemyX6 = randomNum();
          if(speed <= 8){
               speed =8;
          }else{
          speed++;
           }
      }
  
  }
  
}

setInterval(fallingEnemy,1000);
setInterval(draw,1000/60);
setInterval(Score, 10000);


 


function retrieveScore(){
  window.document.getElementById("result").innerHTML = "Your final score is " + window.localStorage.getItem("score");
}

// This performs simple rectangular collision detection
 
function checkCollision(x1,y1,h1,w1,x2,y2,h2,w2)
{
  
    if (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2)
    {
      document.getElementById('gameOver').innerHTML = "<h1> GAME OVER<h2>";
          startGame = false;
     
     
          return true;  

    }
    else
    {
      return false;      
    }  
}