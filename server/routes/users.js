var User = require('mongoose').model('User');


module.exports = function(router){

  router.route('/users')
  .post(function(req, res){
    var user = new User();
    user.name = req.body.name;
    user.save(function(err){
      if (err) res.send(err);
      res.json({message: 'user posted'})
    })
  })

  .get(function(req, res){
    User.find(function(err, users){
      if (err) res.send(err);
      res.json(users);
    });
  });


router.route('/WHATEVER OBJECT GOES HERE/:user_id')

  .get(function(req, res) {
      User.findById(req.params.user_id, function(err, user){
        if (err) res.send(err);
        res.json(user);
      })
  
  })
};