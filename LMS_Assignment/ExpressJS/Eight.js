const express = require("express");
const bp=require('body-parser');
const app = express();

const port=9000;

app.use(bp.urlencoded({'extended': false}));

app.get('/login', (req, res)=> {
    res.sendFile(__dirname+"/Eight.html");
})

app.post('/logincheck',(req,res)=>{

    const {fname,pwd}=req.body;

    console.log(fname);
    console.log(pwd);
    
    if(fname=='object' &&pwd=='knowit'){
        res.send("<h1>Successful login</h1>");
    }
    else{
        res.redirect("/login");
    }
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})