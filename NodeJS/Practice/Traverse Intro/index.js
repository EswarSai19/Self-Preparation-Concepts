// const Person = require("./files/Persons")

// const per1 = new Person("Eswar", 26)
// per1.greeting()

const Logger = require("./logger")
const logger = new Logger()

logger.on('message',(data)=> console.log('Called Listener :', data))


logger.log("Hey There")