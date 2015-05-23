$( 'document' ).ready(function(){
  var blobs = $( '.blobs' ),
      top   = $( '#top' ),
      bot   = $( '#bot' ),
      lines = $(' #lines');


  var notes = {};

  notes.map = {
    n1: -325, 
    n2: -265, 
    n3: -205,
    n4: -145, 
    n5: -85, 
    n6: -25,
    n7: 30,
    n8: 90,
    n9: 145, 
    n10: 205,
    n11: 265,
    n12: 320
  }


TweenMax.set(top, {
  y: 30
})
TweenMax.set(bot, {
  y: 30
})


function giveAnswer (){
    TweenMax.to(top, 1, {
    scale: .3
  });

  TweenMax.to(bot, 1, {
    scale: .3
  })
  TweenMax.to(top, .5, {x:-100, delay: 1});
  TweenMax.to(bot, .5, {x:100, delay: 1});

  TweenMax.to(top, 3, {y:320,delay:1.7});
  TweenMax.to(bot, 3, {y:320,delay:1.7});
}  

});