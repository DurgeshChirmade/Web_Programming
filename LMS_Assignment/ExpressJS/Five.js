const express=require('express')
const app=express()

const port=9000;

app.use(express.static('../images'));

app.get('/image',(req,res)=>{
    res.sendFile(__dirname+"/form.html");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})