var assert = require('chai').assert;
var http = require('http');
var rest = require('restler');

suite('API tests', function(){

    var attraction = {
        lat: 45.516011,
        lng: -122.682062,
        name: 'Portland Art Museum',
        description: 'Founded in 1892, the Portland Art Museum\'s colleciton ' +
            'of native art is not to be missed.  If modern art is more to your ' +
            'liking, there are six stories of modern art for your enjoyment.',
        email: 'test@meadowlarktravel.com',
    };

    var base = 'http://api.meadowlark:3000';

    test('should be able to add an attraction', function(done){
        rest.post(base+'/attraction', {data:attraction})
			.on('success', function(data){
				assert.match(data.id, /\w/, 'id must be set');
				done();
			})
			.on('error', function() {
				assert(false, 'Did you remember to alias api.meadowlark to 127.0.0.1 in your /etc/hosts file?');
			});
	
    });

    test('should be able to retrieve an attraction', function(done){
        rest.post(base+'/attraction', {data:attraction}).on('success', function(data){
            rest.get(base+'/attraction/'+data.id)
				.on('success', function(data){
					assert(data.name===attraction.name);
					assert(data.description===attraction.description);
					done();
				})
				.on('error', function() {
					assert(false, 'Did you remember to alias api.meadowlark to 127.0.0.1 in your /etc/hosts file?');
				});
        });
    });

});
