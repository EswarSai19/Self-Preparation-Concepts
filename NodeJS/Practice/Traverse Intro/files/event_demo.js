const fs = require("fs")
const path = require("path")
const eventEmitter = require("events")

class MyEmitter extends eventEmitter{}

const myEmitter = new MyEmitter()

myEmitter.on('event',()=> console.log("event fired!"))

myEmitter.emit('event')
