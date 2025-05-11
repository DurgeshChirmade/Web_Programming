var exp = require('express');

var app = exp();

app.listen(9000, () => {
   console.log("exp serve started - 9000");
})

//general middleware
app.use( function(req,res,next) {
   //to be executed for all requests
   //log the request
   //use fs- append log info
   console.log("general middleware");
   next();
}) 

app.use('/login',function(req,res,next){
    console.log("sp middleware - login");
    next();
})

app.get('/home',function(req,res){
    res.send("<h1> Welcome to Express </h1>");
})

app.get('/login',function(req,res){
    res.send("<h1> Login page </h1>");
})



