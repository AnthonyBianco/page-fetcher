const request = require('request');
const fs = require('fs');
let inputRequest = process.argv.slice(2);


request(inputRequest[0], (error, response, body) => {
  fs.writeFile(inputRequest[1], body, (err) => {
    // 0 is going to be website
    // 1 is file of destination
    const byteTotal = fs.statSync(inputRequest[1]);
    const fileSize = byteTotal.size;
    if (err){
      throw err;
    } 
    console.log(`Downloaded and saved ${fileSize} bytes to ${inputRequest[1]}`);
  });
});

// use 