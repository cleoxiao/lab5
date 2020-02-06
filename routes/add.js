var data = require("../data.json");

exports.addFriend = function(request, response) {  
	var inputName = request.query.name;
	var inputDesc = request.query.description;
	var newfriend = {
	 'name': inputName,
	 'description': inputDesc,
	 'imageURL': 'http://lorempixel.com/400/400/people/',
	};
	data.friends.push(newfriend);
	response.render('index', data);
}	