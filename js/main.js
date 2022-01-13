const view = document.querySelector("#view2")
const div = view.querySelector("div")
const h2 = div.querySelector("h2")


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
        view.style.backgroundColor = "purple"
    }, false)

    div.addEventListener("click", (event) => {
        // event.stopPropagation()
        div.style.backgroundColor = "blue"
    }, false)

    h2.addEventListener("click", (event) => {
        // event.stopPropagation()
        event.target.textContent = "Clicked"
    }, false)
}