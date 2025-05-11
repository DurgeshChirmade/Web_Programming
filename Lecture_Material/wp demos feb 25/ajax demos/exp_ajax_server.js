var exp = require('express')
var mysql = require('mysql2')

var app = exp();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "knowitdb"
})

con.connect(function(err) {
   if(!err)
	console.log("connected");
   else
	console.log("failed to connect : "+err.toString());
})

app.get('/empnoform', function(req,res) {
    //send html
    res.sendFile(__dirname+"/empform.html");
});

app.get('/greet', function(req,res) {
    const eno = req.query.empno;
    console.log("req received : "+eno);
    const query = "select * from emp where empno = ?"
    con.query(query, [eno], function(err,result) {
        if(!err) {
	     console.log(result.length);
	      if(result.length == 1) {	 	
	     	res.send("<h1> Welcome "+result[0].ENAME +"</h1>");
              }
	      else
		res.send("<h3>"+eno +" Empno not found </h3>");	
        }
    }); 
});

app.all('/*splat' ,function(req,res) {
   res.send("<h4> Invalid URL </h4>");
})

app.listen(9000, function() {
   console.log("exp ajax server -started 9000");
})
