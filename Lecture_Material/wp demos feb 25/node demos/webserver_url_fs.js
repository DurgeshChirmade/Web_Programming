var h = require('http');
var u = require('url');
var f = require('fs');

h.createServer(function(req,res){
   var parts = u.parse(req.url, true);  	
   var pname = parts.pathname;
   console.log(pname);
   var fname = pname.substring(1);
   console.log(fname);
   f.readFile(fname, function(err,data) {
       if(!err) {
	   res.writeHead(200, {'content-type':'text/html'});
	   res.write(data.toString());
           res.end();
       }
       else {
	   res.writeHead(404, {'content-type':'text/html'});
	   res.write("<p> Resource not found </p>");
           res.end();
       }
   });
}).listen(9000, function() {
    console.log("server started 9000"); 
})
