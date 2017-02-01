module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('review', {title: 'Smith Review'});
	});

 	app.get('*', function(req, res) { 
 		res.render('404', { title: 'Page Not Found'}); 
 	});
}
