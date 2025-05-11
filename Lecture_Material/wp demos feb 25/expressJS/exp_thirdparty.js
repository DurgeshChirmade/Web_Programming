var exp = require('express');
var bp = require('body-parser');

var app = exp();
app.use(bp.urlencoded({'extended': false}));
//app.use(bp.json())

app.listen(9000,function(req,res){
    console.log("exp third party middleware");
})

//route handler - /home - get
app.get('/home',function(req,res){
    res.send("<h1> Welcome to Express </h1><br/><a href='http://localhost:9000/loginform'> LOGIN </a>");
})

app.get('/loginform', function(req,res) {
     res.sendFile(__dirname+"/loginform.html");
})

app.post('/logincheck', function(req,res) {
     console.log(req.body.uid)
     console.log(req.body.pwd)
     var uid = req.body.uid;
     var pwd = req.body.pwd;
     if(uid == "bakul" && pwd == "bakul123")
	res.send("<h1> Welcome "+uid+"</h1>");
     else
	res.redirect("/loginform");
})



