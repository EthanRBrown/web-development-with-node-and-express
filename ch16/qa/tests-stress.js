var loadtest = require('loadtest');
var expect = require('chai').expect;

suite('Stress tests', function(){

      test('Homepage should handle 100 requests in a second', function(done){
          var options = {
              url: 'http://localhost:3000',
              concurrency: 4,
              maxRequests: 10
          };
          loadtest.loadTest(options, function(err,result){
            expect(!err);
            expect(result.totalTimeSeconds < 1);
            done();
          });
      });

});
