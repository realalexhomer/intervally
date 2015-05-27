var canvas = $('canvas').get(0);
console.log(canvas);
canvas.style.background='#cdd'
var context = canvas.getContext('2d');

var dotX = 0;
var dotY = canvas.height/2;
var dx = 1;

function drawXAxis(){
  context.beginPath();
  context.moveTo(0, dotY);
  context.lineWidth = 1;
  context.lineTo(canvas.width, dotY);
  context.stroke();
  console.log('drawing');
}

function draw(x,y){
  context.fillRect(x,y,5,5);
}

function sineY(x){
  var amplitude = 20;
  var period = x/canvas.width/4;
  var freq = 20;
  var phase = 180; //phase angle

  //return wave value at point
  return amplitude * Math.sin(freq*2*Math.PI * period);
}

function animateSinewave(){
  if (dotX > canvas.width){
    dotX-5;
    dotY = canvas.height * 0.5 - 2.5;
  }else{
    dotX += dx;
    dotY = canvas.height * 0.5 - 2.5 + sineY(dotX);
  }

  draw(dotX,dotY);

  var animation = requestAnimationFrame(function(){
    animateSinewave();
    console.log('animating');
  });
}

animateSinewave();