$('document').ready(function(){

  var s           = Snap('#main'),
      lineHeight  = 10,
      lineColor   = '#D8D8D8';



  svgFromKey(keyOfC);


  function svgFromKey(freqArr){
    var keyObj = makeKeyObj(freqArr);
    findLines(keyObj);
    drawLines(keyObj);
    var test = drawCircle({
      x: 0, 
      y: 0, 
      size: 40, 
      fill:'green'
    });
    // drawCircle({
    //   x: 500,
    //   y: keyObj.lines.line7.el.attr("y"),
    //   size: 40,
    //   fill:'pink'
    // });
    test.drag()
    test.drag(function(){
      var bb = this.getBBox();
      console.log(bb);
    })

  }

  function makeKeyObj(freqArr){
    var keyObj = {
      freqArr : freqArr,
      low  : freqArr[freqArr.length-1],
      high   : freqArr[0],
    };

    keyObj.diff = keyObj.high - keyObj.low;
    keyObj.ratio = 1000 / keyObj.diff;

    return keyObj;
  }

  function findLines(keyObj){
    if (!keyObj.lines){
      keyObj.lines = {};
    }else{
      throw "can't run find lines on an object that already has a lines attribute";
    }
    for (var i = 0; i < keyObj.freqArr.length; i++){
      var newKey = 'line' + (i + 1).toString();
      keyObj.lines[newKey] = {};
      keyObj.lines[newKey].freq = keyObj.freqArr[i];
    }
  }

  function drawLines(keyObj){
    var ratio = keyObj.ratio;
    var high  = keyObj.high;
    for (var i = 0; i < keyObj.freqArr.length; i++){
      var lineKey = 'line' + (i + 1).toString();
      var x       = 100,
          y       = (high - keyObj.lines[lineKey].freq) * ratio,
          w       = 1000,
          h       = lineHeight;
      keyObj.lines[lineKey].el = s.rect(x,y,w,h);
      keyObj.lines[lineKey].el.attr('fill', lineColor);
    }
  }

  function drawCircle(a){
    var circle = s.circle(a.x, a.y, a.size);
    circle.attr('fill', a.fill);
    // circle.drag();
    return circle;
  }

  function findFreq(keyObj, x){
    return x / keyObj.ratio;
  }

  function setElFreq(wave, x, ratio){
    wave.setFrequency(x/ratio);
  }

  function assignFreq(el, keyObj){
    // el.drag(setElFreq())

  }




  // draw lines from key

  // draw blobs

  // play sounds in relation to key





});