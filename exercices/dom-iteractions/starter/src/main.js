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
 * EXO 1
 * Click on Me
 */
const divToColor1 = document.querySelector(`.div-to-color-1`)
const btns1 = document.querySelectorAll(`.btn-1`)

btns1.forEach((element) => {
    element.addEventListener(`click`, (event) => {
        divToColor1.style.backgroundColor = event.currentTarget.getAttribute(`data-bg-color`)
    })
})



/**
 * EXO 8
 * Salut tout le monde
 */

const divToColor8 = document.querySelector(`.div-to-color-8`)
const btns8 = document.querySelectorAll(`.btn-8`)

btns8.forEach((element) => {
    element.addEventListener(`click`, (e) => {
        divToColor8.style.backgroundColor = e.currentTarget.getAttribute(`data-color`)
    })
})


/**
 * EXO 7
 * Pick color
 */

const input7 = document.querySelector(`.input-7`)
const divToColor7 = document.querySelector(`.div-to-color-7`)
input7.addEventListener(`input`, onInput7)

function onInput7 (event) {
    divToColor7.style.backgroundColor = event.currentTarget.value
}


/**
 * EXO 6
 * Programming language
 */

const select6 = document.querySelector(`.select-6`)
let textToDisplay6 = document.querySelector(`.text-to-display-6`)

select6.addEventListener(`input`, onSelect6)

function onSelect6 (event) {
    textToDisplay6.textContent = event.currentTarget.value
}


/**
 * EXO 3
 * Trip last
 */

const textToDisplay4 = document.querySelector('.text-to-display-4')
const inputs4 = document.querySelectorAll('.input-4')

inputs4.forEach((element) => {
    element.addEventListener('input', () => {
        // Affichage des dates dans le textContent
        textToDisplay4.textContent = `${inputs4[0].value} - ${inputs4[1].value}`

        let date1 = new Date(inputs4[0].value);
        let date2 = new Date(inputs4[1].value);

        textToDisplay4.textContent = `${(date2 - date1) / (1000 * 60 * 60 * 24)} jours`
    })
})


/**
 * EXO 9
 * Mes intérêts
 */

const checkboxes = document.querySelectorAll(`.checkbox`)
let textToDisplay9 = document.querySelector(`.text-to-display-9`)


/**
 * OPERATEUR TERNAIRE, une condition if else écrite sur une ligne, pour affecter une même * * * variable
 */

checkboxes.forEach((element) => {
    element.addEventListener(`click`, (e) =>{
        let value1 = checkboxes[0].checked ? checkboxes[0].value : ``
        let value2 = checkboxes[1].checked ? checkboxes[1].value : ``

        textToDisplay9.textContent = `${value1} ${value2}`

        // if(checkboxes[0].checked){
        //     value1 = checkboxes[0].value
        // } else {
        //     value1 = ``
        // }
        // if(checkboxes[1].checked){
        //     value2 = checkboxes[1].value
        // } else {
        //     value2 = ``
        // }
        // textToDisplay9.textContent = `${value1} ${value2}`
    })
})

