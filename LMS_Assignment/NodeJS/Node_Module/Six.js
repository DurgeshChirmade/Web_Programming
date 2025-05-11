var h = require('http');
var u = require('url');
var f = require('fs');

h.createServer((req, res) => {

    var part = u.parse(req.url, true);
    var pname = part.pathname;
    console.log(pname);
    var fname = pname.substring(1);
    console.log(fname);
    f.readFile(fname, (err, data) => {
        if (!err) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data.toString());
            res.end();
        }
        else {
            res.writeHead(404, { 'content-type': 'text/html' });
            res.write("<h1> Resource Not Found </h1>");
            res.end();
        }
    })

}).listen(9000, () => {
    console.log("server started 9000");
})