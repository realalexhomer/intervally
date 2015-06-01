this["JST"] = this["JST"] || {};

Handlebars.registerPartial("freqLines", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <svg id=\"freqLines\" width=\"100%\" height=\"100%\" viewBox=\"-50 -50 1100 1100\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n\n    <filter id=\"goo\">\n        <feGaussianBlur in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"10\" />\n        <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" />\n        <feBlend in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" />\n    </filter>\n\n  </svg>";
},"useData":true}));

Handlebars.registerPartial("nav", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "Helloasdfasf there from mr nav <br>";
},"useData":true}));

this["JST"]["public/templates/layouts/main.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials.freqLines,depth0,{"name":"freqLines","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true});