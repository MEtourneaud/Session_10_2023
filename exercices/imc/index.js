//1 - On récupère la balise HTML et on la stocke dans un variable en JS
const validationBtn = document.querySelector(".validation-btn")
const resultImc = document.querySelector(".bmi-value")
const inputs = document.querySelectorAll(".bmi-input")

//2 - On déclare un click sur le boutton , à chaque fois qu'on clique, on exécute la fonction associée
validationBtn.addEventListener("click", onBtnClick)


// function onBtnClick() {
//     console.log(inputs[0].value, inputs[1].value)
// }

//Afficher dans la console l'imc ==> poids en kg / taille en m²


const height = inputs[0].value /100
const weight = inputs[1].value

function onBtnClick() {
    let imc = weight /(height * height)

    // if(inputs[1].value <= 0 || inputs[0].value <= 0) {
    //     console.log("Echec")
    // }
    resultImc.textContent = bmi
    

    console.log(imc)
}