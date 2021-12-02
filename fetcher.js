var fs = require("fs"); // Load the filesystem module
let URL = process.argv[2]
let filePath = process.argv[3]

const request = require("request")
request(URL,(error,response, body) => {
  console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
})