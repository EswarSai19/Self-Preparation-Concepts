const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()

app.get("/api",(req,res)=>{
    res.json({
        message : "Welcome to this API"
    })
})

app.post("/api/posts",(req,res)=>{
    res.json({
        message : "Welcome to posts API"
    })
})

app.post("/api/login",(req,res)=>{
   const user = {
    id : 1, userName : 'eswar', email : 'eswar@gmail.com'
   }
   jwt.sign({user},'secretKey',(err,token)=>{
        res.json({
            token
        })
   })
})

app.listen(8080, (req,res)=>{
    console.log("Server started");
})
