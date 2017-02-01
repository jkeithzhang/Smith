var MongoDB 	= require('mongodb').Db;
var Server 		= require('mongodb').Server;
var i 			= require('./assets');
var mongo_info  = require('../../../config').mongo;

var dbPort		= mongo_info.dbPort;
var dbHost 		= mongo_info.dbHost;
var dbName 		= mongo_info.dbName;
var db = new MongoDB(dbName, new Server(dbHost, dbPort, {auto_reconnect: true}, {w: 1}));
	db.open(function (e, d) {
		if (e) {
			i._err(e);
		} else {
			i._info('connected to database :: ' + dbName);
		}
	});

var nodes 		= db.collection('review');
exports.nodes = function() {
	return nodes;
}
exports.db = function() {
	return db;
}

