const express = require('express')
const app = express()
const f = require('fs');
const port = 9000

app.use((req, res) => {
    if (req.url != '/favicon.ico') {
        var str = "Request received at " + new Date() + " for " + req.url + "\n";
        f.appendFile('log.txt', str, (err) => {
            if (!err) {
                console.log("request is logged");
            }
            else {
                console.log("request is not logged : " + err.toString());

            }
        })
        res.send("<h1>Request logged</h1>");
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})