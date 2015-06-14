var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;

suite('Fortune cookie tests', function(){

    test('getFortune() should return a fortune', function(){
        expect(typeof fortune.getFortune() === 'string');
    });

});
