var canvas = $('canvas').get(0);
console.log(canvas);
canvas.style.background='#cdd'
var context = canvas.getContext('2d');

var baseY=0;
var halfX= canvas.width/2;
var dy = 1;

function drawYAxis(){
  context.beginPath();
  context.moveTo(halfX, baseY);
  context.lineTo(halfX, canvas.height);
  context.stroke();
  console.log('drawing');
}

drawYAxis();