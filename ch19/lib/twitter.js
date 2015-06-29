var https = require('https');

module.exports = function(twitterOptions){

	// this variable will be invisible outside of this module
	var accessToken;

	// this function will be invisible outside of this module
	function getAccessToken(cb){
		if(accessToken) return cb(accessToken);
		// TODO: get access token
	}

	return {
		search: function(query, count, cb){
			// TODO
		}
	};
};
