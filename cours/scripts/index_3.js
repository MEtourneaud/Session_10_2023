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
    hasBike : true,
    isSick : true
}

const person_2 = {
    name : "Mélanie",
    hasCar : true,
    hasBike : false,
    isSick : false
}

const person_3 = {
    name : "Paul",
    hasCar : false,
    hasBike : true,
    isSick : true
}

const person_4 = {
    name : "Sophie",
    hasCar : false,
    hasBike : false,
    isSick : false
}



//Intégrer le paramètre person aux 2 fonctions pour rendre la chaine de caractère dynamique

// canGoToUniversity(person_2)
// canGoToTopOfMountain(person_1)

// Opérateur de comparaison complexe : OR
// function canGoToUniversity(person) {
//     if((person.hasCar || person.hasBike) && !person.isSick) {
//         console.log(`${person.name} peut aller à l'université`)
//     } else {
//         console.log(`${person.name} ne peut pas aller à l'université`)
//     }
// }  

// // Opérateur de comparaison complexe : AND
// function canGoToTopOfMountain(person) {
//     if(person.hasCar && person.hasBike && !person.isSick) {
//         console.log(`${person.name} peut aller au sommet de la montagne`)
//     } else {
//         console.log(`${person.name} ne peut pas aller au sommet de la montagne`)
//     }   
// }


/**
 * LES BOUCLES (d'où on part, jusqu'où on va, comment on y va)
 */



// for(let i = 0; i <= 10; i++) {
//     console.log(`Salut ` + i)
// }

let arr = [3, 5 , 12, 8, 1]


//Ajouter un if dans la boucle pour n'afficher que les éléments dont la valeur est >= 5

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i]>= 5) {
//         console.log(`Element courrant :` + arr[i])
//     }
// }



let numbers = [3, 5 , 12, 8, 1, 4]

//Ecrire une boucle for pour additionner tout les éléments d'un tableau

// let sum = 0

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }

// console.log(sum) // ==> 33

//A l'aide d'une boucle for, trouver la valeur la plus grande dans le tableau

// let max = 0

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > max) {
//        max = numbers[i]
//     }
// }

// console.log(max)

//Afficher uniquement les nombres strictement supérieurs à 4 ==> 5, 12 ,8


 
let filterdNumber = []

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 4) {
//        filterdNumber.push(numbers[i])
//     }
// }

// console.log(filterdNumber)

//Encapsuler le script précédent dans un fonction et y ajouter le paramètre limit

const arrayResult = filterArray(7)

function filterArray(limit) {
    let filterdNumber = []

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > limit) {
           filterdNumber.push(numbers[i])
        }
    }

    console.log(filterdNumber)
    // return filterdNumber
}