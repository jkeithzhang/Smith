/**
 * Module dependencies.
 */
var express 		= require('express'),
	MemoryStore 	= require('connect-mongo')(express),
	app 			= express(),
	http 			= require('http'),
	path 			= require('path');

app.configure(function() {
	// all environments
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/app/server/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.static(path.join(__dirname, '/app/public')));
});

app.configure('development', function() {
	app.use(express.errorHandler());
});
app.listen(app.get('port'));

//Mongod lists:
var RM = require('./app/server/modules/review-manager');
//Routes:
require('./app/server/routes/partials')(app);
require('./app/server/routes/scan-api')(app, RM);
require('./app/server/routes/routes')(app);