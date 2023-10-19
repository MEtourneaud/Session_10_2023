// Présentation des opérateurs arithmétiques

/*
    Commentaires sur plusieurs lignes
*/


/**
 * Variante de commentaires sur plusieurs lignes
 */


// LES NOMBRES

var myNumber1 = 3 + 2
var myNumber2 = 4


var myResult = myNumber1 - myNumber2


// console.log(myResult)


//Déclaration moderne (en ES6, javascript depuis 2015) de variable 

const myNb1 = 9  //const est fixe
let myNb2 = 3   // let est flexible

myNb2 = 6

myNb2 += 5  // signe "=" obligatoire

const res = myNb1 * myNb2


// console.log(res)



// LES CHAINES DE CARACTERES (string) ["" '' ``]

let myName = "Mathieu"
const lastname = `Etourneaud`
const age = 31


myName += " "
myName += lastname
// myName += ', ' + age + ' ans.'

const resultStr = `${myName} et j'ai ${age} ans.`


// console.log(resultStr)


// LES BOOLEENS

const myBoolean1 = true
const myBoolean2 = false

let myNb = 5

if(myBoolean1) {
    myNb += 7
}



let myAge = 31
// const legalAge = 18
// const isAdult = myAge > legalAge

const is30YearsOld = myAge == 30

// if(isAdult) {
//     console.log(`Mathieu est adulte`)
// }

// if(!isAdult) {
//     console.log(`Mathieu n'est pas adulte`) // ! = négation
// }

// if(isAdult) {
//     console.log(`Mathieu est adulte`)
// } else {
//     console.log(`Mathieu n'est pas adulte`)
// }


if(is30YearsOld) {
    console.log(`Mathieu a 30 ans`)
} else {
    console.log(`Mathieu n'a pas 30 ans`)
}
