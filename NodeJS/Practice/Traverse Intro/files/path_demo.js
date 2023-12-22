const path = require("path")

// file name 
console.log(path.basename(__filename))

// dir name
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename))