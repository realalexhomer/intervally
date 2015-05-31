function getTemplateAjax(path, callback) {
  var source;
  var template;

  $.ajax({
    url: path,
      success: function(data) {
        source    = data;
        template  = Handlebars.compile(source);

        //execute the callback if passed
        if (callback) callback(template);
      }
  });
}

// Thanks for this code goes to http://www.jblotus.com/2011/05/24/keeping-your-handlebars-js-templates-organized/