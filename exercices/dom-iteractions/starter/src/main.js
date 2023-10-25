/**
 * EXO 4
 * Texte à afficher avec bouton
 */

const form2 = document.querySelector(".form-2")
const textToDisplay2 = document.querySelector(`.text-to-display-2`)
const input2 = document.querySelector(`.input-2`)

form2.addEventListener(`submit`, onForm2Submit)

function onForm2Submit (event){
    event.preventDefault();
    textToDisplay2.textContent = input2.value
}



/**
 * EXO 2
 * Texte à afficher en direct
 */

const input3 = document.querySelector(`.input-3`)
const textToDisplay3 = document.querySelector(`.text-to-display-3`)

input3.addEventListener(`input`, onInput3)

function onInput3 (event) {
    textToDisplay3.textContent = input3.value
}



/**
 * EXO 5
 * Slider
 */

// const input5 = document.querySelector(`.input-5`)
// const textToDisplay5 = document.querySelector(`.text-to-display-5`)

// input5.addEventListener(`input`, slideInput5)

// function slideInput5 () {
//     textToDisplay5.textContent = input5.value
// }

const inputs5 = document.querySelectorAll(`.input-5`)
const textToDisplay5 = document.querySelector(`.text-to-display-5`)


// A EVITER, la boucle for permet d'éviter la répétition du .addEventListener
// inputs5[0].addEventListener(`input`, slideInput5)
// inputs5[1].addEventListener(`input`, slideInput5)

for (let i = 0; i < inputs5.length; i++) {
    inputs5[i].addEventListener(`input`, slideInput5)
}


function slideInput5 (event) {
    textToDisplay5.textContent = event.target.value
}



/**
 * EXO
 */