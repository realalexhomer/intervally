
// Amplitude of pitches


SineWave = function(context) {
  var that = this;
  this.x = 0; // initial samples
  this.context = context;
  this.freq = 440;
  this.amplitude = 0.5;
  this.node = context.createScriptProcessor(1024, 1, 1);
  this.node.onaudioprocess = function(event) { that.process(event) };
  this.sampleRate = this.context.sampleRate;


}

SineWave.prototype.process = function(event) {
  var data = event.outputBuffer.getChannelData(0);
  for (var i = 0; i < data.length; ++i){
    data[i] = this.amplitude * Math.sin( this.x++ / ( this.sampleRate / ( this.freq * 2 * Math.PI )));
  }
}

SineWave.prototype.play = function () {
  this.node.connect(this.context.destination);
}

SineWave.prototype.pause = function () {
  this.node.disconnect();
}

// SineWave.prototype.setFrequency = function ( freq ) {
//   this.freq = freq;
// }


