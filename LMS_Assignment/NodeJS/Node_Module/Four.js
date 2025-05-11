var h = require("http");

var server = h.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/html'});	
    res.write("<h1> Welcome to node server </h1>");
    res.write("<p>" + req.url + "</p>");
    res.end();
});

server.listen((9000), () => {
    console.log("server started port 9000");
})