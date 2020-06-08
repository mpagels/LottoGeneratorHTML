"use strict"

const buildNumbers = (anzahlNumbers) => {
    let counter = 1
    while (counter <= anzahlNumbers) {
        let x = document.createElement("div")
        x.className = "box"
        x.innerHTML = counter
        container.appendChild(x)
        counter++
    }
} 

const deleteRandomSelection = () => {
    container.childNodes.forEach((x) => {
        if (x.nodeName !== "#text") {
            x.style.backgroundColor = ""
            x.style.color = "black"
        }
    })
}

let container = document.getElementById("container")
buildNumbers(49)

const chooseRandom = () => {
    
    deleteRandomSelection()
    
    let counter = 0
    let choosenNumbers = []
    while (counter < 6) {
        let currentChooseNumber = Math.round((Math.random() * 49))
        if (!choosenNumbers.includes(currentChooseNumber) && currentChooseNumber !== 0) {
            choosenNumbers.push(currentChooseNumber)
            counter++
        }
    }
    // console.log(choosenNumbers)
    choosenNumbers.forEach(num => {

        container.childNodes[num].style.backgroundColor = "#3F87CD"
        container.childNodes[num].style.color = "white"
        trashBtn.classList.remove("deactivate")
    }) 
}

let randomBtn = document.querySelector(".random")
randomBtn.addEventListener("click", chooseRandom)
let trashBtn = document.querySelector(".trash").children[0]
trashBtn.addEventListener("click", () => {
    if (!trashBtn.classList.contains("deactivate")) {
        deleteRandomSelection()
        trashBtn.classList.add("deactivate")
    }
})