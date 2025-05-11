const express=require('express');
const app=express();
const f=require('fs');
const port=9000

app.use(express.static(__dirname));
app.use(express.static('../images'));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/Seven.html");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})