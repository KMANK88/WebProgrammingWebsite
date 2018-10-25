//========================
//Moving ball
var randw = Math.floor((Math.random() * 400));
var randh = Math.floor((Math.random() * 500));
       var canvas = document.getElementById("staticArt");
      var art = canvas.getContext("2d");
       var w = 800;
       var h = 500;


canvas.height =h; canvas.width = w;

var ball = {},
       //gravity = .8,
       bounceFactor = 1.0;
ball = {
   x: randw,
   y: randh,
   
   radius: 15,
   color: "yellow",
   vx: 2,
   vy: 2,
   
   draw: function() {
    art.beginPath();
       art.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
       art.fillStyle = this.color;
       art.fill();
       art.closePath();
   }
};
function clearCanvas() {
    art.clearRect(0, 0, w, h);
}
function update() {
   clearCanvas();
   ball.draw();
   var randx = Math.floor((Math.random() * 10) + 1);
var randy = Math.floor((Math.random() * 10) + 1);
   ball.y += ball.vy;
   //ball.vy = gravity;

  
   
   if(ball.y + ball.radius > h ) {
       //response to top.
       ball.y = h- ball.radius;
       ball.vy *= -bounceFactor;
   }else if( ball.y - ball.radius == 0){
       //response to roof.
       ball.y = ball.radius;
       ball.vy *= -bounceFactor;
   }
   ball.x += ball.vx;
   //ball.vx = gravity;

   if(ball.x + ball.radius > w){
       ball.x = w - ball.radius;
       ball.vx *= -bounceFactor;
   }else if(ball.x - ball.radius == 0){
       ball.x = ball.radius;
       ball.vx *= -bounceFactor;
   }
}

setInterval(update, 1000/60);



  
       //==============
       //Signature
       var Ctx = document.getElementById("signature").getContext("2d"),
            dashLen = 220, dashOffset = dashLen, speed = 5,
            txt = "Karsten Pease", d = 30, i = 0;
        
        Ctx.font = "50px Brush Script MS, sans-serif"; 
        
        
        (function loop() {
          Ctx.clearRect(d, 0, 60, 150);
          Ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
          dashOffset -= speed;                                         // reduce dash length
          Ctx.strokeText(txt[i], d, 90);                               // stroke letter
        
          if (dashOffset > 0) requestAnimationFrame(loop);             // animate
          else {
            Ctx.fillText(txt[i], d, 90);                               // fill final letter
            dashOffset = dashLen;                                      // prep next char
            d += Ctx.measureText(txt[i++]).width + Ctx.lineWidth * Math.random();
            Ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
            Ctx.rotate(Math.random() * 0.005);                         // random rotation
            if (i < txt.length) requestAnimationFrame(loop);
          }
        })();
        