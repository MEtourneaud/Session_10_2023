// REVISIONS

// const monday = "lundi"
// const tuesday = "mardi"

// displayMessage(monday)
// displayMessage(tuesday)
// displayMessage(`samedi`)



// function displayMessage(day){
//     let hello = "Salut"
//     console.log(`${hello} c'est ${day}`)
// }



const person_1 = {
    name : "Pierre",
    hasCar : true,
    hasBike : true
}

const person_2 = {
    name : "Mélanie",
    hasCar : true,
    hasBike : false
}

const person_3 = {
    name : "Paul",
    hasCar : false,
    hasBike : true
}

const person_4 = {
    name : "Sophie",
    hasCar : false,
    hasBike : false
}



//Intégrer le paramètre person aux 2 fonctions pour rendre la chaine de caractère dynamique

canGoToUniversity(person_1.name)
canGoToTopOfMountain(person_4.name)

function canGoToUniversity(person){
    console.log(`${person} peut aller à l'université`)
}


function canGoToTopOfMountain(person){
    console.log(`${person} ne peut pas aller au sommet de la montagne`)
}