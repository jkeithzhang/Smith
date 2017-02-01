module.exports = function(app, RM) {
	app.get('/api/loadNodes', function (req, res) {
		var filter = req.param('filter'),
			sort = JSON.parse(req.param('sort'));
		new RM().loadNodes(filter, sort, res);
	});
	app.post('/api/addNode', function (req, res) {
		var node = JSON.parse(req.param('node'));
		new RM().addNode(node, res);
	});
	app.post('/api/removeNode', function (req, res) {
		var node = JSON.parse(req.param('node'));
		new RM().removeNode(node, res);
	});

}