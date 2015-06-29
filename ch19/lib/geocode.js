var http = require('http');

module.exports = function(query, cb){

    var options = {
        hostname: 'maps.googleapis.com',
        path: '/maps/api/geocode/json?address=' +
            encodeURIComponent(query) + '&sensor=false',
    };

    http.request(options, function(res){
        var data = '';
        res.on('data', function(chunk){
            data += chunk;
        });
        res.on('end', function(){
            data = JSON.parse(data);
            if(data.results.length){
                cb(null, data.results[0].geometry.location);
            } else {
                cb("No results found.", null);
            }
        });
    }).end();
};
