const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const Nexmo = require("nexmo")
const socketio = require("socket.io")

// Init app
const app = express();

// Template engine setup
app.set('view engine', 'html')
app.engine('html',ejs.renderFile)

// Public folder creation
app.use(express.static(__dirname + '/public'))

// index route
app.get('/',(req,res)=>{
    res.render('index')
})

//catch data
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})


// Body parse middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


// Define port
const port = 3000

// Start server
const server = app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})