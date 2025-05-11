var exp = require('express')
var mysql = require('mysql2');

var app = exp();

app.use(exp.static('scripts'));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "statecity"
})

con.connect(function(err) {
   if(!err)
	console.log("connected");
   else
	console.log("failed to connect : "+err.toString());
})


app.get('/register',function(req,res) {
      res.sendFile(__dirname+"/register.html");
})

app.get('/getCities',function(req,res) {
     console.log(req.query.stateid);
     //db
     var query='select * from city where stateid=?';
     con.query(query,[req.query.stateid],function(err,result){
	var str="";
	if(!err){
	 console.log(result.length);
	result.forEach(value=>{
	//str+="<option value=' value.cityid '>'+value.name+"</option>";
         str+="<option value='"+value.cityid+"'>"+value.name+"</option>"; 
	
	});
	res.send(str);
	}
})

})

app.all('/*splat' ,function(req,res) {
   res.send("<h4> Invalid URL </h4>");
})


app.listen(9000, function() {
   console.log("exp server -started 9000");
})