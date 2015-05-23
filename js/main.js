// DOM selection and events for playing


$( document ).ready(function(){

  //generate audio context for each sinewave object

    var context = new AudioContext();

  //generate two sinewave objects
   wave1 = new SineWave(context);
   wave2 = new SineWave(context);

  //update wave freq/amp functionality


  //play-pause functionality

    $( '#play-pause-wave-1').click(function() {
        if (wave1.playing == false){
          wave1.play();
          wave1.playing = true;
          $( '#play-pause-wave-1' ).html('Pause')
        }else{
          wave1.pause();
          wave1.playing = false;
          $( '#play-pause-wave-1' ).html('Play')
        }
    })

    $( '#play-pause-wave-2').click(
      function() {
        if(wave2.playing == false){
          wave2.play();
          wave2.playing = true;
          $( '#play-pause-wave-2' ).html('Pause')
        }else{
          wave2.pause();
          wave2.playing = false;
          $( '#play-pause-wave-2' ).html('Play')
        }
      })


    $( '#update-wave-1').click(function() {
      wave1.freq = $('#freq1').val()
      wave1.amplitude = $('#amp1').val()
      console.log(wave1.freq)
    })

    $( '#update-wave-2').click(function() {
      wave2.freq = $('#freq2').val()
      wave2.amplitude = $('#amp2').val()
      console.log(wave2.freq)
    })

