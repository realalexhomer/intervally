this["JST"] = this["JST"] || {};

Handlebars.registerPartial("nav", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "Helloasdfasf there from mr nav <br>";
},"useData":true}));

this["JST"]["public/templates/layouts/main.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\nhi there!!!!! : - )";
},"usePartial":true,"useData":true});