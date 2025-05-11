var fs = require('fs');

fs.readFile('data.txt', function(err, data) {
	if(!err)
	    console.log(data.toString());	
})

console.log("after reading");