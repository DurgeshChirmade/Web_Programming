const express = require('express')
const mysql = require('mysql2');
const app = express()
const port = 9000

app.use(express.static('..'))

var con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Durgesh@2001',
    database: 'shoppingdb'
});

con.connect((err) => {
    if (err) {
        console.log("connection failed : " + err.toString());
    }
    else {
        console.log("connection successfull");
    }
})

app.get('/check', (req, res) => {
    res.sendFile(__dirname + '/Third.html');
})

app.get('/getUser', (req, res) => {
    console.log(req.query.deptid);
    var str = "select * from users where u_id=? and password=?";
    con.query(str, [req.query.uid,req.query.pwd], (err, result) => {
        
        res.send(str);
    })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})