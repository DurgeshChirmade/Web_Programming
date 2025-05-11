var exp = require('express')
var bp = require('body-parser')
var mysql = require('mysql2');

var app = exp();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "shoppingdb"
})

con.connect(function(err){
    if(!err)
       console.log("connected");
    else
       console.log("not connected");
})

app.use(exp.static('images'));
app.use(exp.static('styles'));

app.use(bp.urlencoded({'extended':false}))

app.get('/index', function(req,res) {
     res.write("<h1> Welcome to my website </h1>");
     res.write("<a href='/loginform'> LOGIN </a> <br/> <br/>");  
     res.write("<a href='/registerform'> Register </a> <br/> <br/>");
     res.end(); 
})

app.get('/loginform',function(req,res) {
    res.sendFile(__dirname+"/loginform.html");
});

app.get('/registerform',function(req,res) {
   res.sendFile(__dirname+"/registerform.html");
});

app.get('/logincheck',function(req,res) {
    const uid = req.query.uid;
    const pwd = req.query.pwd;
    const query = "select * from users where u_id = ? and password = ?";
    con.query(query, [uid,pwd], function(err,result) {
        if(!err) {
        }
        else {
        }
    })    
})

app.post('/register',function(req,res) {
    const uid = req.body.uid;
    const pwd = req.body.pwd;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const contact = req.body.contact;
    const mname = "XXX"
    let query = "insert into users values(?,?,?,?,?,?,?)";
    con.query(query, [uid,pwd,fname,mname,lname,email,contact], function(err){
	if(!err)
           res.send("Registration done successfully");
        else {
           res.send("Registration failed");
           console.log("failed : "+err.toString());  
        } 
    });
});

app.all('/*splat' ,function(req,res) {
   res.send("<h4> Invalid URL </h4>");
})


app.listen(9000, function() {
   console.log("exp server -started 9000");
})