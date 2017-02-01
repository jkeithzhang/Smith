var	nodeDB 		= require('./model').nodes();

module.exports = function() {
	this.loadNodes = function(filter, sort, res) {
		switch(filter) {
			case 'free':
				nodeDB.find({ 
					owner : {$exists: false} 
				}, function(err, cursor) {
					cursor.toArray(function(err, rec) {
						res.json(rec);
					})
				});
				break;
			case 'config':
				nodeDB.find({
					ip : {$exists: true} 
				}, {sort: sort}, function(err, cursor) {
					if (err) { console.log('Error') }
					else {
						cursor.toArray(function(err, rec) {
							if(err) {
								console.log('something is fishy')
							} else {
								res.json(rec);
							}
						})
					}
				});
			default:
				
		}
	}
	this.addNode = function(node, res) {
		nodeDB.find({name: node.name}, function(err, cursor) {
			cursor.toArray(function(err, rec) {
				if(rec.length) {
					res.json({error: 'IP exists'})
				} else {
					console.log(node)
					nodeDB.insert({
						name: node.name,
						type: node.type,
						content: node.content,
					});
					res.json('done')
				}
			})
		});
	}
	this.removeNode = function(node, res) {
		nodeDB.findOne({name: node.name}, function(err, result) {
			if (result) {
				nodeDB.remove({name: node.name}, function(e, cur) {
					if (e) {
						console.log('error');
						res.json({error: 'There is an error occur when trying to remove the review!'});
					} else {
						res.json('done');
					}
				});
			} else {
				res.json({error: 'Error, review name doese not exist!'});
			}
		});
	}
}
