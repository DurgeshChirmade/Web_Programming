var h = require('http');
var u = require('url');
var f = require('fs');

h.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return;
    }
    var str="Request received at "+new Date()+" for "+req.url+"\n";

    f.appendFile('log.txt',str,(err)=>{
        if(!err){
            console.log("logged successfully");
        }
        else{
            console.log("Error in logged "+err.toString());
            
        }
    })

    res.writeHead(200,{'content-type':'text/html'});
    res.write("<h1>Welcome. Every request is logged.</h1>");
    res.end();
}).listen(9000,()=>{
    console.log("server started 9000");
})