var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var db = require('./model/db');
var blogModel = require('./model/blog');
var blogRoutes = require('./routes/blog');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var app = express();

require('./config/passport')(passport); // pass passport for configuration
app.set('port', (process.env.PORT || 5000));

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(express.static('public'));

// routes ======================================================================
require('./routes/userRoutes.js')(app, passport); // load routes & pass in app & fully configed passport
app.use('/api/blogs', blogRoutes);

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
}); 