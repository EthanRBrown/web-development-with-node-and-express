exports.requestGroupRate = function(req, res){
	res.render('request-group-rate');
}

exports.requestGroupRateProcessPost = function(req, res, next){
	next(new Error('Request group rate processing not yet implemented!'));
}

exports.home = function(req, res, next){
	next(new Error('Contact page not yet implemented!'));
}

exports.homeProcessPost = function(req, res, next){
	next(new Error('Contact page not yet implemented!'));
}