var exp = require('express');
//2
var mysql = require('mysql2')

var app = exp();
//3
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "knowitdb"
});
//4
con.connect(function(err) {
   if(err)
	console.log("connection failed : "+err.toString())
   else
	console.log("connection successful ")
})


app.get('/emps', function(req,res) {
    //db conenctivity
    //execute query
    con.query("select * from emp", function(err,result) {
         console.log(result.length)
          if(!err) {
	    var str="<table border=1>";
            result.forEach(function(v) { 
                 str+="<tr>";
		 str+="<td>"+v.EMPNO+"</td>";
                 str+="<td>"+v.ENAME +"</td>";
  	         str+="<td>"+v.JOB +"</td>";
                 str+="</tr>";
            }) 
            str+="</table>";
            res.send(str);
        }
    });

})

app.listen(9000, () => {
   console.log("exp serve started - 9000");
})
