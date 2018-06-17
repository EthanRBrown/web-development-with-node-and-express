/* Example-1 */
var http=require("http");       // http module 
// making a node server which will listen at port 3000
http.createServer(function(req,res){        
res.writeHead(200,{'Content-Type':'text/plain'});                       //content type is text plain which refers to plain text
res.end('hello world');
}).listen(3000);     // server listening at port 3000
console.log("sever started at 3000");

