const express = require("express");
const app = express();
const port = 9000;

app.all('/*splat',function (req, res) {
    res.send("<h1>Welcome to All Request Web</h1>");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})