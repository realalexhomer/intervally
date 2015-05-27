$('document').ready(function(){

  var s               = Snap('#main'),
      waves           = {},
      lineHeight      = 10,
      lineColor       = '#D8D8D8',
      audioContext    = new AudioContext();

  svgFromKey(keyOfC);
  s.addClass('goo');

  function svgFromKey(freqArr){
    var keyObj = makeKeyObj(freqArr);
    findLines(keyObj);
    drawLines(keyObj);
    var test = drawCircle({
      x: 500, 
      y: 500, 
      size: 40, 
      fill:'green'
    });
    test.drag()
    makeWave(test, keyObj);
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
    circle.name = 'circle1'
    return circle;
  }

  function makeWave(circle, keyObj){
    if (!waves[circle.name]){
      waves[circle.name] = new SineWave(audioContext);
      changeFreqOnDrag(circle, waves[circle.name], keyObj);
      waves[circle.name].play();
    }else{
      throw 'circle already has a wave - cannot set more than one wave for a circle.'
    }
  }

  function changeFreqOnDrag(obj, wave, keyObj){
    obj.drag(function(){
      obj.bb = obj.getBBox();
      var freq = keyObj.high - (obj.bb.cy / keyObj.ratio);
      wave.setFrequency(freq);
    })
  }
});