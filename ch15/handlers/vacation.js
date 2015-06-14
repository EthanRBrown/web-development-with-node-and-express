var Vacation = require('../models/vacation.js'),
	VacationInSeasonListener = require('../models/vacationInSeasonListener.js');

function convertFromUSD(value, currency){
    switch(currency){
        case 'USD': return value * 1;
        case 'GBP': return value * 0.6;
        case 'BTC': return value * 0.0023707918444761;
        default: return NaN;
    }
}

exports.detail = function(req, res, next){
	Vacation.findOne({ slug: req.params.vacation }, function(err, vacation){
		if(err) return next(err);
		if(!vacation) return next();
		res.render('vacation', { vacation: vacation });
	});
}

exports.list = function(req, res){
    Vacation.find({ available: true }, function(err, vacations){
    	var currency = req.session.currency || 'USD';
        var context = {
            currency: currency,
            vacations: vacations.map(function(vacation){
                return {
                    sku: vacation.sku,
                    name: vacation.name,
                    description: vacation.description,
                    inSeason: vacation.inSeason,
                    price: convertFromUSD(vacation.priceInCents/100, currency),
                    qty: vacation.qty,
                }
            })
        };
        switch(currency){
	    	case 'USD': context.currencyUSD = 'selected'; break;
	        case 'GBP': context.currencyGBP = 'selected'; break;
	        case 'BTC': context.currencyBTC = 'selected'; break;
	    }
        res.render('vacations', context);
    });
};

exports.notifyWhenInSeason = function(req, res){
    res.render('notify-me-when-in-season', { sku: req.query.sku });
};

exports.notifyWhenInSeasonProcessPost = function(req, res){
    VacationInSeasonListener.update(
        { email: req.body.email }, 
        { $push: { skus: req.body.sku } },
        { upsert: true },
	    function(err){
	        if(err) {
	        	console.error(err.stack);
	            req.session.flash = {
	                type: 'danger',
	                intro: 'Ooops!',
	                message: 'There was an error processing your request.',
	            };
	            return res.redirect(303, '/vacations');
	        }
	        req.session.flash = {
	            type: 'success',
	            intro: 'Thank you!',
	            message: 'You will be notified when this vacation is in season.',
	        };
	        return res.redirect(303, '/vacations');
	    }
	);
};