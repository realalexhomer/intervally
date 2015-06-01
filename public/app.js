template = this["JST"]["public/templates/layouts/main.hbs"]
$('body').append(template({}))


var n = Note.fromLatin('A4');  // single note
var afreq = n.frequency();  // returns 440
var name = n.latin();  // returns "A"
var octave = n.octave();  // returns 4 

var cmaj = Note.fromLatin('C4E4G4');  // chord = array of notes
var freq = cmaj[0].frequency();  // returns 261.625...
var name = cmaj[0].latin();  // returns "C"
var octave = cmaj[0].octave();  // returns 4

var c = Note.fromLatin('C4');  // base note for scale
var majorScale = c.scale('major');  // scale = array of notes  


console.log('A4:', n);
console.log('A4 freq:', afreq);

console.log(cmaj)