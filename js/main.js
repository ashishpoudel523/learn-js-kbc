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