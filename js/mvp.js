$('document').ready(function(){

  //Y AND X MARGINS ARE SET TO 50!!!

  var s               = Snap('#main'),
      waves           = {},
      lineHeight      = 10,
      lineColor       = '#D8D8D8',
      audioContext    = new AudioContext();



  svgFromKey(keyOfC);


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
    // drawCircle({
    //   x: 500,
    //   y: keyObj.lines.line7.el.attr("y"),
    //   size: 40,
    //   fill:'pink'
    // });
    makeWave(test);
    test.drag()
    // changeWaveOnDrag(test, waves[test.name], 'cy', SineWave.prototype.setFrequency);
    // console.log(keyObj);
    changeFreqOnDrag(test, waves[test.name], keyObj);
    // test.drag(function(){
    //   var bb = this.getBBox();
    //   console.log(bb);
    // })
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
      console.log(y);
    }
    console.log(keyObj.lines);
  }

  function drawCircle(a){
    var circle = s.circle(a.x, a.y, a.size);
    circle.attr('fill', a.fill);
    circle.name = 'circle1'
    // circle.drag();
    console.log(circle);
    return circle;
  }

  function makeWave(circle){
    if (!waves[circle.name]){
      waves[circle.name] = new SineWave(audioContext);
      waves[circle.name].setFrequency(circle.attr('cy'));
      waves[circle.name].play();
    }else{
      throw 'circle already has a wave - cannot set more than one wave for a circle.'
    }
  }

  function changeWaveOnDrag(obj, wave, objAttr, waveFunc){
    obj.drag(function(){
      obj.bb = obj.getBBox();
      waveFunc.call(wave, obj.bb[objAttr])
    })
  }

  function changeFreqOnDrag(obj, wave, keyObj){
    obj.drag(function(){
      obj.bb = obj.getBBox();
      var y = obj.bb.cy;
      console.log(y);
      // var freq = obj.bb.cy / keyObj.ratio
      // wave.setFrequency(freq);
      // // console.log(, keyObj.ratio)
      // console.log(keyObj);
      // // wave.setFrequency(obj.bb / keyObj.ratio)
      // console.log(wave);

    })
  }

  //
  

  function findFreq(keyObj, y){
    return y / keyObj.ratio;
  }

  function setElFreq(wave, y, ratio){
    wave.setFrequency(y/ratio);
  }

  function assignFreq(el, keyObj){
    // el.drag(setElFreq())

  }




  // draw lines from key

  // draw blobs

  // play sounds in relation to key





});