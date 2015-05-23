SineWave = function(context) {
  var that = this;
  this.x = 0; // initial samples
  this.context = context;
  this.node = context.createScriptProcessor(1024, 1, 1);
  this.node.onaudioprocess = function(event) { that.process(event) };

}

// Processess wave and outputs to

SineWave.prototype.process = function(event) {
  var data = event.outputBuffer.getChannelData(0);
  for (var i = 0; i < data.length; ++i){
    data[i] = Math.sin(this.x++);
  }
}

SineWave.prototype.play = function () {
  this.node.connect(this.context.destination);
}

SineWave.prototype.pause = function () {
  this.node.disconnect();
}
