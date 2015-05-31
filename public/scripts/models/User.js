var UserModel = Backbone.Model.extend({
  defaults: {
    _id: null,
    firstName: null,
    lastName: null,
    username: null,
    roles: null
  }
});

var UsersCollection = Backbone.Collection.extend({
  url: 'api/users',
  model: UserModel
});

var users = new UsersCollection();

users.fetch().then(function(){
  console.log(users)
})