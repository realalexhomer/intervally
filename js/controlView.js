getTemplateAjax('partials/control-panel.hbs', function(cpTemplate) {
  var body = $('body');
  body.append(cpTemplate({test:'hi'}))
  body.append($('#control-panel').html())
  
})