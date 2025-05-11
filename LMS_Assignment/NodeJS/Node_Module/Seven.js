var h = require('http');
var u = require('url');
var f = require('fs');

h.createServer((req, res) => {
    var data = f.readFileSync('many.txt');
    s = parseInt(data.toString());
    s++;
    console.log(s);
    f.writeFileSync('many.txt', s + " ");
    res.end;
}).listen(9000, () => {
    console.log("server started 9000");

})