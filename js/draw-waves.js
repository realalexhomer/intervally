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

drawXAxis();