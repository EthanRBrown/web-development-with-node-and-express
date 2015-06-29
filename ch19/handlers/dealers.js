var credentials = require('../credentials.js');

exports.home = function(req, res) {
	res.render('dealers', { googleApiKey: credentials.googleApiKey });
}; 
