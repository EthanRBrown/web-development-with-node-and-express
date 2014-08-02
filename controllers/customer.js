var Customer = require('../models/customer.js');
var customerViewModel = require('../viewModels/customer.js');

exports = {

	registerRoutes: function(app) {
		app.get('/customer/:id', this.home);
		app.get('/customer/:id/preferences', this.preferences);
		app.get('/orders/:id', this.orders);

		app.post('/customer/:id/update', this.ajaxUpdate);
	},

	home: function(req, res, next) {
		var customer = Customer.findById(req.params.id);
		if(!customer) return next(); 	// pass this on to 404 handler
		res.render('customer/home', customerViewModel(customer));
	},

	preferences: function(req, res, next) {
		var customer = Customer.findById(req.params.id);
		if(!customer) return next(); 	// pass this on to 404 handler
		res.render('customer/preferences', customerViewModel(customer));
	},

	orders: function(req, res, next) {
		var customer = Customer.findById(req.params.id);
		if(!customer) return next(); 	// pass this on to 404 handler
		res.render('customer/preferences', customerViewModel(customer));
	},

	ajaxUpdate: function(req, res) {
		var customer = Customer.findById(req.params.id);
		if(!customer) return res.json({ error: 'Invalid ID.'});
		if(req.body.firstName){
			if(typeof req.body.firstName !== 'string' ||
				req.body.firstName.trim() === '')
				return res.json({ error: 'Invalid name.'});
			customer.firstName = req.body.firstName;
		}
		// and so on....
		customer.save();
		return res.json({ success: true });
	},
};
