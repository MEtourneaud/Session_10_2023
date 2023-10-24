//1 - On récupère la balise HTML et on la stocke dans un variable en JS
const validationBtn = document.querySelector(".validation-btn")
const resultImc = document.querySelector(".bmi-value")
const inputs = document.querySelectorAll(".bmi-input")
const commentError = document.querySelector(".comment")

//2 - On déclare un click sur le boutton , à chaque fois qu'on clique, on exécute la fonction associée
validationBtn.addEventListener("click", onBtnClick)


// function onBtnClick() {
//     console.log(inputs[0].value, inputs[1].value)
// }

//Afficher dans la console l'imc ==> poids en kg / taille en m²



function onBtnClick() {
    const height = inputs[0].value /100
    const weight = inputs[1].value

    // if(inputs[1].value <= 0 || inputs[0].value <= 0) {
    //     console.log("Echec")
    // }

    // vérifier les données utilisateur, pas de valeurs <= 0

    if((!height || height < 0) && (!weight || weight < 0)){
        handleError(`bothError`)
        return
    }

    if(!height || height < 0){
        handleError(`heightError`)
        return
    }

    if(!weight || weight < 0 ){
        handleError(`weightError`)
        return
    }
    const bmi = weight / height ** 2

    resultImc.textContent = bmi
    

    console.log(imc)
}

function checkError() {
    // Implémenter la condition pour préciser le message d'erreur en fonction de la taille ou du poids
    // vérifier les données utilisateur, pas de valeurs <= 0
    if ((!height || height < 0) && (!weight || weight < 0)) {
        comment.textContent = "Les valeurs saisies dans les champs poids ET taille sont incorrectes"
        return true
    }
    if (!weight || weight < 0) {
        comment.textContent = "La valeur saisie dans le champ poids est incorrecte"
        return true
    }
    if (!height || height < 0) {
        comment.textContent = "La valeur saisie dans le champ taille est incorrecte"
        return true
    }

    return false
}