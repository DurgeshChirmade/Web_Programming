const express = require("express");
const app = express();
const port=9000;

app.get('/greet', function (req, res) {
    res.send("<h1>Welcome to Web App</h1>");
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})