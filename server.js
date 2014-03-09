//  server.js
//  ----run this bad boy to get the project running as a whole

//  setup =================================================================================

var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var gameManager = require('./app/gameManager.js');

//  configuration =========================================================================

app.configure(function() {

    // set up our express application
    app.use(express.logger('dev')); // log every request to the console
    app.use(express.cookieParser('huehuehue')); // read cookies
    app.use(express.session()); // manages user sessions
    app.use(express.bodyParser()); // get information from html forms
    app.use(express.static(__dirname + '/public')); // for static resources in the public folder

    app.set('view engine', 'ejs'); // set up ejs for templating
});

require('./app/routes.js')(app, gameManager); // load our routes

app.listen(port);