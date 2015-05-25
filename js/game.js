$('document').ready(function(){


  /// MAKE LINES FROM SVG

  var gameSource    =   $( "#game-template").html(),
      gameTemplate  =   Handlebars.compile(gameSource);
      winHeight     =   $( window ).height(),
      winWidth      =   $( window ).width(),
      numberOfLines =   12,
      lines         =   {},
      lineWidth     =   winWidth * .8,
      lineMargin    =   (winHeight + 150) / numberOfLines;

  for (var i = 0; i < numberOfLines; i++){
    var key = 'line' + (i + 1).toString();
    lines[key] = {}
    lines[key].x     = winWidth * .2;
    lines[key].y     = lineMargin * (i + 1) + 50;
  }

  var data = {
    lines: lines,
    lineWidth: lineWidth
  }

  $('body').append(gameTemplate(data));


  /// INSTANTIATE & START USING SNAP

  var s           =   Snap("#canvas"),
      canvas      =   $('#canvas'),
      lineCenter  =   lines.line1.x + lineWidth * .5,
      circle      =   s.circle(lineCenter,lines.line6.y,30),
      circle2     =   s.circle(lineCenter,lines.line6.y,30);
      bigCircle   =   s.circle(lineCenter, lines.line6.y, 40),

  circle.parent().addClass("goo");
  circle.attr('fill','#86E2D5');
  bindClick();

  // bigCircle.drag();


  function changeColors(elmArr){
    var color = randFlatColor();
    for (var i = 0; i < elmArr.length; i++){
      elmArr[i].attr('fill', color);
    }
  }

  var flatColors = ['#C0392B', '#DBOA5B', '#AEA8D3', '#446CB3',
                    '#22A7FO', '#1BBC9B', '#00B16A', '#F89406']

  function randFlatColor(){
    return flatColors[Math.floor(Math.random() * 8)]
  }

  function goToLines(line1, line2){

  }
function bindClick(){
  canvas.one('click',function(){
    splitOff();
  setTimeout(function(){
    resetBalls();
  },3000)
    changeColors([circle, circle2, bigCircle]);
  });
  setTimeout(function(){
    bindClick();
  }, 5500)
}
  function splitOff(){
    shrinkAndDie(bigCircle);
    goLeft(circle);
    goRight(circle2);
    setTimeout(function(){
      goToRandLine(circle);
      goToRandLine(circle2);
    },1500)
  }

  function resetBalls(){
    circleToLine(circle, 6);
    circleToLine(circle2, 6);
    setTimeout(function(){
      becomeWholeAgain(bigCircle);
    },800)

  }

  function goToRandLine(circle){
    var rand = Math.floor((Math.random() * 12) + 1);
    circleToLine(circle, rand);
  }

  function goLeft(circleToMove){
    var distance  = lineWidth / 4,
        oldX      = parseInt(circleToMove.node.attributes.cx.value),
        newX      = oldX - distance;

    circleToMove.animate({
      cx: newX
    }, 1000);
  }

  function goBackToCenter(circleToMove){
    circleToMove.animate({
      cx: lineCenter
    }, 1000)
  }

  function goRight(circleToMove){
    var distance  = lineWidth / 4,
        oldX      = parseInt(circleToMove.node.attributes.cx.value),
        newX      = oldX + distance;

    circleToMove.animate({
      cx: newX
    }, 1000);
  }

  function shrinkAndDie(circleToKill){
    circleToKill.animate({
      r: 0
    }, 300)
  }

  function becomeWholeAgain(circleToGrow){
    circleToGrow.animate({
      r:40
    },1000)
  }

  function circleToLine(circle, line){
    var lineKey = 'line' + line.toString();
    console.log(lines[lineKey].y);
    circle.animate({
      cx: lines[lineKey].x + lineWidth * .5,
      cy: lines[lineKey].y,
    },1000);
  }


});