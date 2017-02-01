// DEV
var mongo_dev = {
	dbPort: 	27017,
	dbHost: 	'localhost',
	dbName: 	'smith'
};
// PRODUCTION
var mongo_prod = {
	dbPort: 	27017,
	dbHost: 	'localhost',
	dbName: 	'smith'
};
// ENV is 'dev' by default
exports.mongo = global.process.env.NODE_ENV === 'production' ? mongo_prod : mongo_dev;