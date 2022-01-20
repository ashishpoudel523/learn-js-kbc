//syntax: addEventListener(event, function, useCapture)





/*//////////////////////////////////////
const doSmthng = () => {
    alert("doing smthng")
}

h2.addEventListener("click", doSmthng, false)
// h2.removeEventListener("click", doSmthng, false)

h2.addEventListener("click", (event) => {
    console.log(event.target)
    event.target.textContent = "Clicked."
})
*/ ///////////////////////////////////////





/*
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete")
        initApp()
    }
})


const initApp = () => {
    const view = document.querySelector("#view2")
    const div = view.querySelector("div")
    const h2 = div.querySelector("h2")

    view.addEventListener("click", (event) => {
        // event.stopPropagation()
        view.classList.toggle("purple")
        view.classList.toggle("darkblue")
    }, false)

    div.addEventListener("click", (event) => {
        // event.stopPropagation()
        view.classList.toggle("blue")
        view.classList.toggle("black")
    }, false)

    h2.addEventListener("click", (event) => {
        // event.stopPropagation()
        const myText = event.target.textContent
        myText == "My 2nd view" ?
            (event.targgrt.textContent = "Clicked") : (event.target.textContent = "My 2nd view")
    }, false)

    const nav = document.querySelector("nav")
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100")
    })

    nav.addEventListener("mouseout", (event) => {
        event.target.classList.remove("height100")
    })

}
*/



//FORM EVENTS HANDLING

/*
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete")
        initApp()
    }
})

const initApp = () => {
    const view3 = document.querySelector("#view3")
    const myForm = view3.querySelector("myForm")
    myForm.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log("submit event")
    })
}
*/


/*web storage api
not part of the DOM - refers to the window API
Available to JS via the global variable: Window

we do not have to type window. It is implied:

*/


/*
const myArray = ["east", "sleep", "code"]

const myObject = {
    name: "Ashish",
    hobbies: ["east", "sleep", "code"],
    logName: function () {
        console.log(this.name)
    }
}


localStorage.setItem("myLocalStore", JSON.stringify(myArray))
const storeLength = localStorage.length
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"))
// console.log(myLocalData)

console.log(storeLength)
*/



//Modules
/*
import playGuitar from "./guitar.js"
import {
    shredding as shred,
    plucking as fingerplucking
} from "./guitar.js"

console.log(playGuitar())
console.log(shred())
console.log(fingerplucking())
*/


/*
import * as Guitar from "./guitar.js"
import User from "./user.js"
const me = new User("email@email.com", "Ashish")
console.log(me)
console.log(me.greeting())
console.log(Guitar.playGuitar())
console.log(Guitar.shredding())
console.log(Guitar.plucking())

*/

//Higher order functions

/*
A higher order function is a function that does at least one of the following: 
Takes one of the more functions as an argument (parameter) 
Return a function as the result
*/

/*
import {
    posts
} from "./posts.js"

posts.forEach((post) => {
    console.log(post)
})

console.clear()

const filteredPosts = posts.filter((post) => {
    return post.userId === 3
})
console.log(filteredPosts)

const mappedPosts = filteredPosts.map((post) => {
    return post.id * 10
})
console.log(mappedPosts)



const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post
})
console.log(reducedPostsValue)
*/


/*
fetch API requires a discussion of callbacks, promises, thenables and async/await


//callbacks
*/


function firstFunction(parameters, callback) {
    callback()
}

//aka callback hell

// firstFunction(para, function () {
//             //do stuff 
//             secondFunction(para, fuction() {
//                 thirdFunction(para, function () {

//                 })
//             })
//         }




//PROMISES

//3  states: pending, fulfilled, rejected






/*
const myPromise = new Promise((resolve, reject) => {
    const error = true
    if (!error) {
        resolve("yes resolved the promises")
    } else {
        reject("no rejected the promises")
    }
})

console.log(myPromise)
*/





/*
myPromise.then(value => {
        return value + 1
    })
    .then(newValue => {
        console.log(newValue)
    })
    .catch(err => {
        console.error(err)
    })
*/

/*
//promises
const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("My next promise resolved.")
    }, 3000)
})

myNextPromise.then(value => {
    console.log(value)
})

myPromise.then(value => {
    console.log(value)
})
*/


// const users = fetch('https://jsonplaceholder.typicode.com/users/')

// //pending
// console.log(users)






/*/////////////////////////
const users = fetch('https://jsonplaceholder.typicode.com/users/').then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(user => {
            console.log(user)
        })
    })
/////////////////////////////////////*/



//async/ await 

// const myUsers = {
//     userList: []
// }
/*
async function myCoolFun() {

}
OR, below method of writing function
*/
/*
const myCoolFun = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/")
    const jsonUserData = await response.json()
    return jsonUserData
}

myCoolFun()



const another = async () => {
    const data = await myCoolFun()
    myUsers.userList = data
    console.log(myUsers.userList)
}


another()
console.log(myUsers.userList)
*/


//workflow funccton
/*
const getAllUsersEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json()
    const userEmailArray = jsonUserData.map(user => {
        return user.email
    })
    postToWebPage(userEmailArray)
}

const postToWebPage = (data) => {
    console.log(data)
}

getAllUsersEmails()
*/



//2nd parameter of Fetch is a object



/*
const requestJoke = async (firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`)

    const jsonResponse = await response.json()
    console.log(jsonResponse.value.joke)
}
requestJoke("Ashish", "Poudel")
*/




//abstract into functions 
//maybe from a form
const getDataFromForm = () => {
    const requestObj = {
        firstName: "Ashish",
        lastName: "Poudel",
        categories: ["nerdy"]
    }
    return requestObj
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`
}

const requestJoke = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const joke = jsonResponse.value.joke
    postJokeToPage(joke)
}

const postJokeToPage = (joke) => {
    console.log(joke)
}

//procedural "workflow" function
const processJokeRequest = async () => {
    const requestData = getDataFromForm()
    const requestUrl = buildRequestUrl(requestData)
    await requestJoke(requestUrl)
    console.log("finished")

}
processJokeRequest()