var canvas1 = $('canvas').get(0);
var canvas2 = $('canvas').get(1);
var canvas3 = $('canvas').get(2);

var context1 = canvas1.getContext('2d');
var context2 = canvas2.getContext('2d');
var context3 = canvas3.getContext('2d');


canvas1.style.background='#cdd'

var dotX = 0;
var dotY = canvas1.height/2;
var dx = .5;

function draw(x,y, context){
  context.fillRect(x,y,10,1);
}


//generate wave functions

var audioContext = new AudioContext();

//generate two sinewave objects
  wave1 = new SineWave(audioContext);
  wave2 = new SineWave(audioContext);
  console.log(wave1);
//Test Data setup
  wave1.amplitude = 10;


function returnSineValue(x, wave, canvas){
  var amplitude = wave.amplitude;
  var period = x/canvas.width/4;
  var freq = wave.freq/20;
  var phase = 0; //phase angle

  //return wave value at point
  return amplitude * Math.sin(freq*2*Math.PI * period);
}

function animateSinewave(wave, canvas, context){
  if (dotX > canvas.width){
    dotX-5;
    dotY = canvas.height * 0.5 - 2.5;
  }else{
    dotX += dx;
        dotY = canvas.height * 0.5 - 2.5 + returnSineValue(dotX, wave, canvas);
  }

  draw(dotX,dotY, context);
  var animation = requestAnimationFrame(function(){
    animateSinewave(wave,canvas, context);

  });
}


animateSinewave(wave1, canvas1, context1);
