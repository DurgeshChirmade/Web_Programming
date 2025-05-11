var h = require('http');
var f = require('fs');
var u = require('url');

h.createServer(function(req,res){
        /*console.log(req.url);
        console.log(u.parse(req.url,true).pathname); */
        if(req.url == '/favicon.ico')
            return;        
        var str = "Request received at "+new Date()+" for "+req.url+"\n";
        f.appendFile('log.txt', str, function(err){
	     if(!err) {
	         console.log("request is logged");
             }
	     else {
                 console.log("request is not logged : "+err.toString()); 
	     }		
	})
        res.writeHead(200, {'content-type':'text/html'});
        res.write("Welcome. Every request is logged");
        res.end();
}).listen(9000,function() {
	console.log("server started 9000"); 
});