//node application - server application
var h = require('http');

var server = h.createServer(function(req,res){
     //gets executed only when req is received
     res.writeHead(200, {'content-type':'text/html'});	
     res.write("<h1> Welcome to node server </h1>");
     res.write("<p>"+ req.url+"</p>");	
     res.end();	
});

server.listen(9000, function() {
    console.log("server started port 9000");
})


