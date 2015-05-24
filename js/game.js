$('document').ready(function(){

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


});