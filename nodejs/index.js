const logEvents = require('./logEvents')

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

//initialize object 
const MyEmitter = new MyEmitter()

//add listener for the log
MyEmitter.on('log', (msg) => logEvents(msg))


setTimeout(() => {
    //Emmit event
    myEmitter.emit('log', 'Log event emitted!')
}, 2000)