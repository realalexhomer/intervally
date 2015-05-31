var express = require('express'),
    app     = express(),
    env     = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config  = require('./server/config/config')[env];

require('./server/config/express')(app, config, express);

require('./server/config/handlebars')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/routes')(app, express);

app.listen(config.port);
console.log('listening on port' + config.port);
