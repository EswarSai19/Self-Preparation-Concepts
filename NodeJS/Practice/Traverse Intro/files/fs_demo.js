const fs = require("fs")
const path = require("path")

// Create folder

// fs.mkdir(path.join(__dirname, "/test"), (err)=>{
//     if(err) throw err;
//     console.log("Folder created...")
// })



// writtens and updates 

// fs.writeFile(path.join(__dirname,"/test","hello.txt"), "Hiring under progress ", (err)=>{
//     if(err) throw err
//     console.log("File created...")

//     fs.appendFile(path.join(__dirname,"/test","hello.txt"), "If you have any doubts, call me", (err)=>{
//         if(err) throw err
//         console.log("File created...")
//     })
// })

// Read folder
// fs.readFile("./test/hello.txt","utf-8",(err,data)=>{
//     console.log(data)
// })

// Rename file
// fs.rename(path.join(__dirname,"/test","hello.txt"), path.join(__dirname,"/test","hiring.txt"), err=>{
//     console.log("File renamed")
// })