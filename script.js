'use strict'
/*
console.log("Ashish")


const a = `Mathematics`

console.log(a.slice(3))

console.log(a.split(""))

console.log(a.toUpperCase())

console.log(a.split("e"))
const num = 43.76

console.log(Number.parseInt(num))

console.log(Math.PI)
console.log(Math.trunc(Math.PI))
console.log(Math.pow(5, 7))
console.log(Math.floor(4.3))
console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.min(2, 56, 78, 0.5))
console.log(Math.min(2, 56, 78, 0.5))
console.log(Math.floor(Math.random() * 10) + 1)



//CODING CHALLENGE 1 
//Print random character from your name
const names = `Ashish`

console.log(names.charAt(Math.floor(Math.random() * names.length)))
*/



//Conditionals: If Statements

//Decision Tree
/*
let playerOne = `rock`
let computer = `paper`
if (playerOne === computer) {
    //tie game
} else if (playerOne === 'rock') {
    if (computer === 'paper') {
        //computer wins
    } else {
        //playerOneWIns
    }
} else if (playerOne === 'paper') {
    if (computer === 'scissors') {
        //computer wins
    } else {
        //playerOne wins
    }
} else {
    if (computer === 'rock') {
        //computer wins
    } else {
        //playerOne wins
    }
}
*/



//switch statement
/*
switch (Math.floor(Math.random() * 2 + 1)) {
    case 1:
        console.log(1)
        break
    case 2:
        console.log(2)
        break
    default:
        console.log(`numbers`)
}


let one = `paper`
let comp = `rock`

switch (one) {
    case comp:
        console.log(`tie game`)
        break
    case `rock`:
        if (comp === `paper`) {
            console.log(`comp wins`)
        } else {
            console.log(`one wins`)
        }
        break
    case `paper`:
        if (comp === `scissors`) {
            console.log(`comp wins`)
        } else {
            console.log(`one wins`)
        }
        break
    default:
        if (comp === `rock`) {
            console.log(`comp wins`)
        } else {
            console.log(`one wins`)
        }
}
*/



//ternary operator
/*
let a = 9
z = a < 5 ? console.log(`right`) : console.log(`wrong`)

//user input
let x = prompt(`enter your name:`)
if (x.length != 0) {
    console.log(x)
} else {
    console.log("you didn't enter anything")
}
*/



//Your First InterActive Game
/*
let playGame = confirm(`Shall we play rock , paper or scissors?`)

if (playGame) {
    //play
    let playerChoice = prompt(`please enter rock , paper or scissors`)
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase()
        if (playerOne === `rock` || playerOne === `paper` || playerOne === `scissors`) {
            let computerChoice = Math.floor(Math.random() * 3 + 1)
            let computer = computerChoice === 1 ? `rock` :
                computerChoice === 2 ? `paper` : `scissors`

            let result =
                playerOne === computer ?
                `tie game` :
                playerOne === `rock` && computer === `paper` ?
                `playerOne: ${playerOne} \nComputer: ${computer} \nComputer wins` :
                playerOne === `paper` && computer === `scissors` ?
                `playerOne: ${playerOne} \nComputer: ${computer} \nComputer Wins!` :
                playerOne === `scissors` && computer === `rock` ?
                `playerOne: ${playerOne} \nComputer: ${computer} \nComputer wins!` :
                `playerOne: ${playerOne} \nComputer: ${computer} \nPlayerOne Wins!`

            alert(result)
            let playAgain = confirm(`Play Again?`)
            playAgain ? location.reload() : alert(`ok thanks for playing`)

        } else {
            alert("you didn`t enter rock , paper or scissors.")
        }
    } else {
        alert(`i guess you changed your mind. maybe next time`)
    }
} else {
    alert(`ok ! maybe next time.`)
}
*/



/*
//whilw loops
let myNumber = 0
while (myNumber < 10) {
    console.log(myNumber)
    myNumber++
}





//for loop
let names = `ashish`
for (i = 0; i < names.length; i++) {
    console.log(i)
}


let n = `ashish`
let counter = 0
let myLetter
while (counter <= 3) {
    myLetter = n[counter]
    console.log(myLetter)
    if (counter === 1) {
        counter += 2
        continue
    }
    if (myLetter === `s`)
        break
    counter++
}
console.log(counter)
*/


//functions

function sum(num1, num2) {
  if (num2 === undefined) {
    return num1 + num1
  }
  return num1 + num2
}
console.log(sum(2, 7))


const getUserNameFromEmail = (email) => {
  return email.slice(0, email.indexOf(`@`))
}
console.log(getUserNameFromEmail(`ashishpoudel908@gmal.com`))


const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}
console.log(toProperCase(`aShIsH`))

//functons helps in reusability of codes



//scopes
var x = 1
let y = 2
const z = 3




//local scope
const fun = () => {
  const z = 5
  console.log(y)


  //local scope
  {
    //let y = 4
    console.log(z)
  }
}
//global scope
fun()
console.log(z) //variable in local scope cannot be called by global scope







/*

//arrays
const cars = [`toyota`, `volvo`, `mercedez`]
console.log(cars[1])

cars.push(`tucidos`)

console.log(cars)

cars.unshift(432)

console.log(cars)
cars.shift()
console.log(cars)

console.log(cars[1])

cars.pop[`volvo`]
console.log(cars)

cars.splice(1, 1, `lamborgihini`)

console.log(cars)


const other = [`a`, `b`, 'c', 'd']
console.log(other[3])

console.log(other.join())


const j = cars.concat(other)
console.log(j)

const arko = [...cars, ...other] //... means spread operators for concatination of arrays

console.log(arko)



//previous first game in array and functions
// Rock, Paper, Scissors: Refactored with Functions
const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, or scissors?");
    startGame ? playGame() : alert("Ok, maybe next time.");
  };
  
  // Game flow function
  const playGame = () => {
    while (true) {
      let playerChoice = getPlayerChoice();
      playerChoice = formatPlayerChoice(playerChoice);
      if (playerChoice === "") {
        invalidChoice();
        continue;
      }
      if (!playerChoice) {
        decidedNotToPlay();
        break;
      }
      playerChoice = evaluatePlayerChoice(playerChoice);
      if (!playerChoice) {
        invalidChoice();
        continue;
      }
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      displayResult(result);
      if (askToPlayAgain()) {
        continue;
      } else {
        thanksForPlaying();
        break;
      }
    }
  };
  
  const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors.");
  };
  
  const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
      return playerChoice.trim().toLowerCase();
    } else {
      return false;
    }
  };
  
  const decidedNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
  };
  
  const evaluatePlayerChoice = (playerChoice) => {
    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      return playerChoice;
    } else {
      return false;
    }
  };
  
  const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.");
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
  };
  
  const determineWinner = (player, computer) => {
    const winner =
      player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "scissors"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "scissors" && computer === "rock"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;
  
    return winner;
  };
  
  const displayResult = (result) => {
    alert(result);
  };
  
  const askToPlayAgain = () => {
    return confirm("Play Again?");
  };
  
  const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
  };
  
  initGame();



  */


//JAVASCRIPT OBJECTS
/*
const things = {
  nams: "pen",
  price: 30,
  durability: "1 month",
  function: "writing",
  used_in: ["office", "house", "college"],
  action: function () {
    return `The ${things.nams} is ${things.price} rupees` //backticks
  }

}
console.log(things)
console.log(things.action())



const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vroom"
  }
}

const truck = Object.create(vehicle)
truck.doors = 2
console.log(truck)
console.log(truck.wheels)
console.log(truck.engine())

const car = Object.create(vehicle)
car.door = 4
car.engine = function () {
  return "whoooosh"
}
console.log(car.engine())

const tesla = Object.create(car)
console.log(tesla.wheels)
tesla.engine = function () {
  return "shhhhhh...."
}
console.log(tesla.engine())




const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "AP",
  drums: "John"
}

*/



/*
//js classses
class Pizza {
  constructor(pizzaSize) {
    this._size = pizzaSize
    this._crust = "original"
  }
  getCrust() {
    return this._crust
  }
  setCrust(pizzaCrust) {
    this._crust = pizzaCrust
  }
}

class SpecialPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize)
    this.type = "The Works"
  }
  slice() {
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`)
  }
}

const mySpecial = new SpecialPizza("medium")
mySpecial.slice()




//JSON (Javascript Object Notation)

/*JSON is used to send and receive data.
It is a text format that is compleetely language independent.  
*/
/*
const things = {
  nams: "pen",
  price: 30,
  durability: "1 month",
  function: "writing",
  used_in: ["office", "house", "college"],
  action: function () {
    return `The ${things.nams} is ${things.price} rupees` //backticks
  }

}
console.log(things)
console.log(things.action())
console.log(typeof things)

//convert into string
const sendJSON = JSON.stringify(things)
console.log(sendJSON)
console.log(typeof sendJSON)


//again convert to object while receiving from json
const receiveJSON = JSON.parse(sendJSON)
console.log(receiveJSON)
console.log(typeof receiveJSON)




//Error handling

const makeError = () => {
  let i = 1
  while (i <= 2) {
    try {
      throw new customError("This is a custom error!")
      const go = "College"
      go = "School"
    } catch (err) {
      console.error(err.stack)
    } finally {
      console.log("....finally finished")
      i++
    }
  }
}
makeError()

function customError(message) {
  this.message = message
  this.name = "customError"
  this.stack = `${this.name}: ${this.message}`
}




//prime number checking
const number = (prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
  console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

  // looping through 2 to number-1
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
}

// check if number is less than 1
else {
  console.log("The number is not a prime number.");
}

*/

//Document Object Model DOM
const view1 = document.getElementById("view1")
console.log(view1)
const view2 = document.querySelector(".ap") // the dot before class name is used to select class by query  selector whereas # is used to select id
console.log(view2)
view1.style.display = "flex"
// view2.style.display = "flex"


const views = document.getElementsByClassName("view")
console.log(views)

const sameViews = document.querySelectorAll('.view')
console.log(sameViews)

const divs = view1.querySelectorAll("div")
console.log(divs)

const sameDivs = view1.getElementsByTagName("div")
console.log(sameDivs)

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDivs)

for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue"
  // evenDivs[i].style.width = "200px"
  // evenDivs[i].style.height = "200px"
}
const navText = document.querySelector("nav h1")
console.log(navText)
navText.textContent = "Hello World"


const navbar = document.querySelector("nav")

navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right.</p>`

console.log(navbar)
navbar.style.justifyContent = "space-between"

console.log(evenDivs[0])
console.log(evenDivs[0].parentElement)
console.log(evenDivs[0].parentElement.children)
console.log(evenDivs[0].parentElement.childNodes)
console.log(evenDivs[0].parentElement.lastChild)
console.log(evenDivs[0].parentElement.lastElementChild)
console.log(evenDivs[0].parentElement.firstChild)
console.log(evenDivs[0].parentElement.firstElementChild)
console.log(evenDivs[0].nextSibling)
console.log(evenDivs[0].nextElementSibling)
console.log(evenDivs[0].previousSibling)
console.log(evenDivs[0].previousElementSibling)

view1.style.display = "none"
view1.style.display = "flex"
view2.style.flexDirection = "row"
view2.style.flexWrap = "wrap"
view2.style.margin = "10px"

while (view2.lastChild) {
  view2.lastChild.remove()
}

const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div")
  newDiv.textContent = iter
  newDiv.style.backgroundColor = "#000"
  newDiv.style.height = "100px"
  newDiv.style.width = "100px"
  newDiv.style.margin = "10px"
  newDiv.style.display = "flex"
  newDiv.style.justifyContent = "center"
  newDiv.style.alignItems = "center"
  parent.append(newDiv)
}

// createDivs(view2, 10)

for (let i = 1; i <= 12; i++) {
  createDivs(view2, i)
}