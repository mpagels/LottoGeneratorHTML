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

let container = document.getElementById("container")
buildNumbers(49)

const chooseRandom = () => {
    
    container.childNodes.forEach((x) => {
        if (x.nodeName !== "#text") {
            x.style.backgroundColor = ""
        }
    })
    
    let counter = 0
    let choosenNumbers = []
    while (counter < 6) {
        let currentChooseNumber = Math.round((Math.random() * 49))
        if (!choosenNumbers.includes(currentChooseNumber) && currentChooseNumber !== 0) {
            choosenNumbers.push(currentChooseNumber)
            counter++
        }

    }
    console.log(choosenNumbers)
    choosenNumbers.forEach(num => {

        container.childNodes[num].style.backgroundColor = "#3F87CD"
    })

    
   
}



let button = document.getElementById("button")
button.addEventListener("click", chooseRandom)

