var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var name = req.query.name;
	var description = req.query.description;

	var newFriend = {
		name:name,
		description:description,
		imageURL:"http://dummy"
	}

	data.friends.push(newFriend);
	res.redirect('/');
 }