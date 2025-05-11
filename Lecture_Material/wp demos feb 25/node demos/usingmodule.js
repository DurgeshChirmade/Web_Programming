var mym = require('./mymodule.js');

console.log(mym.msg);

mym.names.forEach(v => {console.log(v.toUpperCase())})

if(mym.isEven(15))
   console.log("Even")
else
   console.log("odd")

console.log(mym.person.fname);	
   

