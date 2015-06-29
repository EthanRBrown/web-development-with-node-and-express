var https = require('https'),
	querystring = require('querystring');

module.exports = function(twitterOptions){

	// this variable will be invisible outside of this module
	var accessToken;

	// this function will be invisible outside of this module
	function getAccessToken(cb){
		if(accessToken) return cb(accessToken);

		var bearerToken = Buffer(
			encodeURIComponent(twitterOptions.consumerKey) + ':' +
			encodeURIComponent(twitterOptions.consumerSecret)
		).toString('base64');

		var options = {
			hostname: 'api.twitter.com',
			port: 443,
			method: 'POST',
			path: '/oauth2/token?grant_type=client_credentials',
			headers: {
				'Authorization': 'Basic ' + bearerToken,
			},
		};

		https.request(options, function(res){
			var data = '';
			res.on('data', function(chunk){
				data += chunk;
			});
			res.on('end', function(){
				var auth = JSON.parse(data);
				if(auth.token_type!=='bearer') {
					console.log('Twitter auth failed.');
					return;
				}
				accessToken = auth.access_token;
				cb(accessToken);
			});
		}).end();
	}

	return {
		search: function(query, count, cb){
			getAccessToken(function(accessToken){
				var options = {
					hostname: 'api.twitter.com',
					port: 443,
					method: 'GET',
					path: '/1.1/search/tweets.json?q=' + 
						encodeURIComponent(query) +
						'&count=' + (count || 10),
					headers: {
						'Authorization': 'Bearer ' + accessToken,
					},
				};
				https.request(options, function(res){
					var data = '';
					res.on('data', function(chunk){
						data += chunk;
					});
					res.on('end', function(){
						cb(JSON.parse(data));
					});
				}).end();
			});
		},

		embed: function(statusId, options, cb){
			if(typeof options==='function') {
				cb = options;
				options = {};
			}
			options.id = statusId;
			getAccessToken(function(accessToken){
				var requestOptions = {
					hostname: 'api.twitter.com',
					port: 443,
					method: 'GET',
					path: '/1.1/statuses/oembed.json?' +
						querystring.stringify(options),
					headers: {
						'Authorization': 'Bearer ' + accessToken,
					},
				};
				https.request(requestOptions, function(res){
					var data = '';
					res.on('data', function(chunk){
						data += chunk;
					});
					res.on('end', function(){
						cb(JSON.parse(data));
					});
				}).end();
			});
		},
	};
};
