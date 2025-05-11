var h = require('http');

h.createServer(function(x,y){
     //process the request
     y.writeHead(200, {'content-type':'text/html'});
     if( x.url == "/home") {
         y.write("<h1> This is home page </h1>");
     }
     else if(x.url == '/login') {
         y.write("<h1> Welcome to my app. Please login </h1>");
     }
     else {
         y.write("<h1> Invalid URL </h1>");
     } 
     y.end();
}).listen(9900,function(){
     //after succesfully listening    
     console.log("server - 9900");
});

console.log("end of server");
