var h = require('http');
var u = require('url');
h.createServer(function(req,res){
    var url_parts = u.parse( req.headers.host+req.url , true);  //decoded and parsed  
    //console.log(JSON.stringify(url_parts));
    console.log(url_parts.host);
    console.log(url_parts.pathname);
    console.log(url_parts.query.nm);
    console.log(url_parts.query.color);
    var nm = url_parts.query.nm;
    var cl = url_parts.query.color
    res.writeHead(200, {'content-type':'text/html'});
    res.write("<h1 style='color: "+cl+"'> Welcome "+ nm +"</h1>");
    res.end();    
}).listen(9000,function() {
    console.log("server started - 9000");
});


