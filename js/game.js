$('document').ready(function(){


  /// MAKE LINES FROM SVG

  var keyOfC  = [
                  523.251,
                  493.883,
                  466.164,
                  440.000,
                  415.305,
                  391.995,
                  369.994,
                  349.228,
                  329.628,
                  311.127,
                  293.665,
                  277.183,
                  261.626
                ]

  var gameSource        =   $( "#game-template").html(),
      // gameTemplate      =   Handlebars.compile(gameSource);
      winHeight         =   $( window ).height(),
      winWidth          =   $( window ).width(),
      topMargin         =   100,
      bottomMargin      =   50,
      numberOfLines     =   13,
      lines             =   {},
      lineWidth         =   winWidth * .8,
      linesX            =   winWidth * .2,
      lineMargin        =   (winHeight + 150) / numberOfLines,
      freqRangeSize     =   findFreqRangeSize(keyOfC),
      lowestFreq        =   findLowestFreq(keyOfC),
      highestFreq       =   findHighestFreq(keyOfC),
      freqToCanvasRatio =   findFreqToCanvasRatio(winHeight, freqRangeSize);


  // var s           =   Snap(),
      // canvas      =   $('#canvas');
      // staffHeight =   lines.line13.y - lines.line1.x,
      // lineCenter  =   lines.line1.x + lineWidth * .5,
      // circle      =   s.circle(lineCenter,lines.line7.y,30),
      // circle2     =   s.circle(lineCenter,lines.line7.y,30);

  // for (var i = 0; i < numberOfLines; i++){
  //   var key = 'line' + (i + 1).toString();
  //   lines[key] = {}
  //   lines[key].x     = winWidth * .2;
  //   lines[key].y     = lineMargin * (i + 1) + 50;
  // }


console.log(winHeight);
  // s.rect(y,x,w,h)




  function drawLines(freqArr){
    for (var i = 0; i < freqArr.length; i++){
      var key = 'line' + (i+1).toString();
      if (!lines[key]) {
        lines[key] = s.rect(10,100,100,10);
        // lines[key].attr('fill', '#D8D8D8');
      } 
    }
  }
  // drawLines(keyOfC);


  // function drawLines(freqsArr){
  //   for (var i = 0; i < freqsArr.length; i++){
  //     var key = 'line' + (i + 1).toString();
  //     if (!lines[key]) {lines[key] = {}};
  //     lines[key].x = linesX;
  //     // lines[key].y = lineMargin * (i + 1) + 50;
  //     lines[key].y = ((highestFreq - freqsArr[i]) * freqToCanvasRatio)+ topMargin;
  //   }
  // }

  console.log(winHeight, freqRangeSize);

  function findFreqToCanvasRatio(canvasHeight, freqRangeSize){
    return (canvasHeight / freqRangeSize);
  }

  console.log(freqToCanvasRatio)

  var test = Snap('#testing');

  test.rect(1,2,2,2);
  // drawLines(keyOfC);

    var data = {
      lines: lines,
      lineWidth: lineWidth
    }

  function findFreqRangeSize(freqArr){
    return freqArr[0] - freqArr[freqArr.length-1];
  }

  function findLowestFreq(freqArr){
    return freqArr[freqArr.length -1];
  }

  function findHighestFreq(freqArr){
    return freqArr[0];
  }

  // console.log(freqRangeSize);


  function changeWave(wave, closestLine){
    wave.setFrequency(keyOfC[closestLine-1])
  }

  function findClosestLine(obj){
//TODO FIND CLOSEST LINE
  }

  wave1.setFrequency()

  // console.log(wave1);

  // $('body').append(gameTemplate(data)); 

      var canvasHeight  =   $( '#canvas' ).height(),
          canvasWidth   =   $( '#canvas' ).width();

      // console.log(canvasHeight);
  /// INSTANTIATE & START USING SNAP

      // bigCircle   =   s.circle(lineCenter, lines.line6.y, 40),

  // circle.parent().addClass("goo");
  // circle.attr('fill','#86E2D5');
  // bindClick();
  // console.log(staffHeight);

  // circle3 = s.circle(winHeight, winHeight, 50);

  // circle.drag();
  // circle2.drag();

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
    circleToLine(circle, 7);
    circleToLine(circle2, 7);
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