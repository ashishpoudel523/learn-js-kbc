/*
Things you should already know:
HTML, CSS, JavaScript
possibly experienced with other libraries and frameworks

How NodeJS differs from Vanilla JS:
1) Node JS runs on a server - not in a broweser (backend not front end)
2) The console is the terminal window
3) Global object instead of window object
4) Has common core modules that we will explore 
5) Common JS modules instead of ES6 modules
6) Missing some JS APIs like fetch
*/
console.log("1st program in Node js")



console.log(global)

const os = require('os')
const path = require('path')
const {
    add,
    subtract,
    multiply,
    divide
} = require('./math')

console.log(add(2, 4))
console.log(subtract(2, 4))
console.log(multiply(2, 4))
console.log(divide(2, 4))



/*
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))


console.log(path.parse(__filename))
*/


const abcFun = (a, b) => {
    return a + b
}

console.log(abcFun(2, 5))