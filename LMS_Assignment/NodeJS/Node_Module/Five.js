var h = require("http");
var u = require("url");

h.createServer((req, res) => {
    var parts = u.parse(req.url, true);
    var nm=parts.query.name;
    var cl=parts.query.color;
    console.log(nm+" "+cl);
    
    res.writeHead(200,{'content-type':'text/html'});
    res.write("<h1 style='color:"+cl+"'>Welcome "+nm+"</h1>");
    res.end();

}).listen(9000, () => {
    console.log("Server Started 9000");
})