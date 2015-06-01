
d3.selectAll("h1, p").style("color", function() {

  return "hsl(" + Math.random() * 360 + ",100%,50%)";

});

//Update

var p = d3.select("body").selectAll("p")
  .data([1,2,3])
  .append("p")
  .text(function(d) {
    return "I'll be wave " + d + "!";}
  );


