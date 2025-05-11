var exp = require('express');

var app = exp();

app.use(exp.static('images'));

app.listen(9000,function(req,res){
    console.log("exp static middleware");
})

app.get('/image', function(req,res){
     res.send("<img src='Desert.jpeg' width='200' height='200' />");	
})

