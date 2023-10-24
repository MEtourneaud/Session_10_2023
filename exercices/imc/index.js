const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] }
];

//1 - On récupère la balise HTML et on la stocke dans un variable en JS
const validationBtn = document.querySelector(".validation-btn")
const resultImc = document.querySelector(".bmi-value")
const inputs = document.querySelectorAll(".bmi-input")
const comment = document.querySelector(".comment")

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
    // const bmi = Math.round((weight / height ** 2) *100) /100
    const bmi = weight / height ** 2


    resultImc.textContent = bmi.toFixed(2)

    //Adapter l'affichage de l'interface, couleur du bmi-value et textContent de comment en fonction de la de bmi
    //1 - Sélectionner le bon élément dans le tableau
    //2 - Appliquer le .color et textContent

    let oneLineHasBeenFound = false

    for(let b = 0; b < BMIData.length; b++) {   
        if(bmi > BMIData[b].range[0] && bmi <= BMIData[b].range[1]){
            resultImc.style.color = BMIData[b].color
            comment.textContent = BMIData[b].name
            oneLineHasBeenFound = true
        }
    }
    if(!oneLineHasBeenFound) {
        resultImc.style.color = `purple`
        comment.textContent = `obésité morbide`
    }
}



function handleError(typeError) {
    resultImc.textContent = 0
    resultImc.style.color = `black`
    
    //Implémenter la condition pour préciser le message d'erreur en fonction de la taille ou du poids
    if(typeError == `heightError`) {
        comment.textContent = "La valeur saisie dans le champ taille est incorrecte"
    } else {
        comment.textContent = "La valeur saisie dans le champ poids est incorrecte"
    } 
    if(typeError == `bothError`) {
        comment.textContent = "Les valeurs saisies dans les champ tailles ET poids sont incorrectes"
    }
}