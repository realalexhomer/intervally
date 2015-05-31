module.exports = function (app, config, express){

  app.use(express.static('public'));

  app.get('/', function (req, res) {
    res.render('../index');
  });

};