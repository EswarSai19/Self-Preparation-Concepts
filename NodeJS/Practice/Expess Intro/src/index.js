const express = require("express")
const db = require("./db.json")
const fs = require("fs")


const app = express()

app.get('/', (req,res)=>{
    res.send("Hey there, I m back")
})

// app.get('/posts', (req,res)=>{
//     res.send(db.posts)
// })

app.get('/posts/:id', (req,res)=>{
    let id = +req.params.id
    let posts = db.posts.find((el)=>el.id===id)
    if(posts) res.send(posts)
    else res.send(`Person with ID : ${id} Not found`)
    
})

app.get('/posts', (req,res)=>{
    let {name,msg} = req.query
    let posts = db.posts
    if(name){
       posts =  posts.filter((el)=> el.name=== name)
        res.send(posts)  
    }
    if(msg){
        posts = posts.filter((el)=> el.Message.includes(msg))
        res.send(posts)  
    }           
     res.send(posts)
    
})



app.post('/posts',(req,res)=>{
    db.posts.push({"id":4, "Message":"Message-4"})
    fs.writeFile("./src/db.json", JSON.stringify(db),"utf-8", ()=>{
        res.status(201).set('content-type', 'application/json').send(db.posts)
    })
})


app.listen(8080, ()=>{
    console.log("Server started")
})