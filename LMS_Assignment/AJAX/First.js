const express = require('express')
const mysql = require('mysql2');
const app = express()
const port = 9000

app.use(express.static('..'))

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

app.get('/check', (req, res) => {
    res.sendFile(__dirname + '/First.html');
})

app.get('/getEmps', (req, res) => {
    console.log(req.query.empid);
    var str = "select * from emp where empno=?";
    con.query(str, [req.query.empid], (err, result) => {
        var str = "<table border=1 style='border:2px solix red'>";
        str += "<tr>";
        str += "<th>EMPNO</th>";
        str += "<th>ENAME</th>";
        str += "<th>JOB</th>";
        str += "<th>MGR</th>";
        str += "<th>HIREDATE</th>";
        str += "<th>SAL</th>";
        str += "<th>COMM</th>";
        str += "<th>DEPTNO</th>";
        str += "</tr>";
        result.forEach((v) => {
            str += "<tr>";
            str += "<td>" + v.EMPNO + "</td>";
            str += "<td>" + v.ENAME + "</td>";
            str += "<td>" + v.JOB + "</td>";
            str += "<td>" + v.MGR + "</td>";
            str += "<td>" + v.HIREDATE + "</td>";
            str += "<td>" + v.SAL + "</td>";
            str += "<td>" + v.COMM + "</td>";
            str += "<td>" + v.DEPTNO + "</td>";
            str += "</tr>";
        })
        str += "</table>";
        console.log(str);
        res.send(str);
    })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})