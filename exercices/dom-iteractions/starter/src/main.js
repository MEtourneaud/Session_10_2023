/**
 * EXO 4
 * Texte à afficher avec bouton
 */

const form2 = document.querySelector(".form-2")
const textToDisplay2 = document.querySelector(`.text-to-display-2`)
const input2 = document.querySelector(`.input-2`)

form2.addEventListener(`submit`, onForm2Submit)

function onForm2Submit (event){
    textToDisplay2.textContent = input2.value

    event.preventDefault();
    console.log(event)
}



/**
 * EXO 2
 * Texte à afficher en direct
 */
