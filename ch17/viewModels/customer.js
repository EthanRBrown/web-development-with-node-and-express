var Customer = require('../models/customer.js');

// convenience function for joining fields
function smartJoin(arr, separator){
	if(!separator) separator = ' ';
	return arr.filter(function(elt) {
		return elt!==undefined &&
			elt!==null &&
			elt.toString().trim() !== '';
	}).join(separator);
}

var _ = require('underscore');

// get a customer view model
// NOTE: readers of the book will notice that this function differs from the version
// in the book.  Unfortunately, the version in the book is incorrect (Mongoose does not
// oofer an asynchronous version of .findById).  My apologies to my readers.
function getCustomerViewModel(customer, orders){
	var vm = _.omit(customer, 'salesNotes');
	return _.extend(vm, {
		name: smartJoin([vm.firstName, vm.lastName]),
		fullAddress: smartJoin([
			customer.address1,
			customer.address2,
			customer.city + ', ' + 
				customer.state + ' ' + 
				customer.zip,
		], '<br>'),
		orders: orders.map(function(order){
			return {
				orderNumber: order.orderNumber,
				date: order.date,
				status: order.status,
				url: '/orders/' + order.orderNumber,
			};
		}),
	});
}

module.exports = getCustomerViewModel;
