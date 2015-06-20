var Browser = require('zombie'),
	assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function(){

	setup(function(){
		browser = new Browser();
	});

	// we removed our old crosspage tests now that we've gotten rid of the "tours" pages;
	// we should probably add new ones for the new "vacations" pages at some point!

});
