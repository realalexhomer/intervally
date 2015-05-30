// $.get('handlebars-templates/control-panel.hbs', function (data) {
//     console.log(data);
//     var template = Handlebars.compile(data);
//     $('#control-panel-div').append(;
//     // console.log(template(data));
//     // console.log(template);
// }, 'html')

var source   = $("#control-panel").html();
var template = Handlebars.compile(source);
$('#control-panel-div').append(template);