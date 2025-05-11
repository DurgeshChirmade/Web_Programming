const express = require('express');
const bp=require('body-parser');
const mysql = require('mysql2')
const app = express();
const port = 9000;

app.use(bp.urlencoded({'extended': false}));

var con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Durgesh@2001',
    database: 'knowit'
});

con.connect((err) => {
    if (err) {
        console.log("connection failed : " + err.toString());
    }
    else {
        console.log("connection successfull");
    }
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/Nine.html");
})

app.post('/logincheck', (req, res) => {
    const { uid, pwd } = req.body;

    console.log(uid);
    console.log(pwd);


    const sql = 'SELECT * FROM user WHERE uid = ? AND pwd = ?';
    con.query(sql, [uid, pwd], (err, result) => {
        if (err) {
            console.log(err);
            res.send("<h1>Error checking login</h1>");
        } else {
            if (result.length > 0) {
                res.send("<h1>Successful login</h1>");
            } else {
                res.redirect("/login");
            }
        }
    });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})