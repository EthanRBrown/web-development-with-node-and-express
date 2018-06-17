/* Example-1 */
var http=require("http");       // http module 
// making a node server which will listen at port 3000
http.createServer(function(req,res){  
var path = req.url.replace(/\/?/,'').toLowerCase();      
switch(path){
	case '':
			res.writeHead(200,{'Content-Type':'text/plain'});
			res.end('homepage');
			break;
	case 'about':

			res.writeHead(200,{'Content-Type':'text/plain'});
			res.end('About');
			break;
	default: 

			res.writeHead(200,{'Content-Type':'text/plain'});
			res.end('Not Found');
			break;
	}
}).listen(3000);     // server listening at port 3000
console.log("sever started at 3000");

