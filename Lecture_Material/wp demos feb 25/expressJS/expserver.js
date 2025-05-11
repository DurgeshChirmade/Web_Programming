var exp = require('express')
//server side application
var app = exp();

app.listen(9000, function() {
   console.log("exp server started - 9000");
})

//route handler - /home - get
app.get('/home',function(req,res){
    res.send("<h1> Welcome to Express </h1><br/><a href='http://localhost:9000/loginform'> LOGIN </a>");
})

app.get('/loginform', function(req,res) {
     res.sendFile(__dirname+"/loginform.html");
})

app.get('/logincheck', function(req,res) {
    console.log(req.query.uid);
    console.log(req.query.pwd);
    let uid = req.query.uid;
    let pwd = req.query.pwd;
    if(uid =="object" && pwd == "knowit")
        res.send("<h1> Welcome "+uid+"</h1>");
    else
	res.send("<h3>Login is failed</h3>");

})

/*
app.get('/s*',function(req,res) {
   console.log("in general");
});
*/
