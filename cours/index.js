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


// if(is30YearsOld) {
//     console.log(`Mathieu a 30 ans`)
// } else {
//     console.log(`Mathieu n'a pas 30 ans`)
// }



const bigNb1 = 100
const bigNb2 = 400

//écrire la condition pour afficher le plus grand nombre

// const resultComparison = bigNb1 > bigNb2

// if(resultComparison) {
//     console.log(bigNb1)
// } else {
//     console.log(bigNb2)
// }


// if(bigNb1 > bigNb2) {
//     console.log(bigNb1)
// } else if(bigNb1 < bigNb2) {
//     console.log(bigNb2)
// } else if(bigNb1 == bigNb2) {
//     console.log(bigNb1, bigNb2)
// }


const firstname = "Olivier"
// const firstname2 = "Hamid"
// const firstname3 = "Pauline"

if (firstname == "Hamid") {
    // console.log('bonjour mon cher ' + firstname)
} else if (firstname == "Pauline") {
    // console.log('bonjour ma chère ' + firstname)
} else {
    //Réécrire  le message loggé avec des backticks ``
    // console.log('bonjour ' + firstname + ', je ne connaissais pas ton prénom avant')
    // console.log(`Bonjour ${firstname}, je ne connaissais pas ton prénom avant`)
}




// VARIABLES COMPLEXES : LES TABLEAUX (Array)

let arr1 = [3 ,5 ,0, 204.5, "hello", true, "world"] //On ommence par 0 et non 1

// const firstElement = arr1[4]

let arrResult1 = `${arr1[4]} ${arr1[6]}`


let arrResult2 


if("truthy") {
    arrResult1 = `${arr1[4]} ${arr1[6]}` //hello world
} else {
    arrResult2 = arr1[1] + arr1[3] //209.5
}


// console.log(arrResult2)

arr1[4] = "bonjour"



arr1[3] -= 14.5
// console.log(arr1)


// VARIABLES COMPLEXES : LES OBJETS 

let obj1 = {
    maPremierePropriete : 12,
    maDeuxiemePropriete : 14,
    prop3 : 11,
    prop9 : "hello"
}

// console.log(obj1.prop9)

let identity = {
    firstname: "Paul",
    lastname: "Doazan",
    age: 35,
    town: "Talence"
}

// A l'aide de l'objet précédent, construire la chaine de caractère ==> 
//  Je m'appelle Paul Doazan, j'ai 35 ans et j'habite Talence.

let resultFromObject = `Je m'appelle ${identity.firstname} ${identity.lastname}, j'ai ${identity.age} ans et j'habite ${identity.town}.`

console.log(resultFromObject)


// Créer un deuxième objet identity2, stocker identity et identity2  dans un tableau, et écrire la phrase précédente en utilisant le tableau

let identity2 = {
    firstname: "Mathieu",
    lastname: "Etourneaud",
    age: 31,
    town: "La Teste"
}

let arr2 = [identity, identity2]

arr2[1].lastname

// console.log(`Je m'appelle ${arr2[identity.firstname]} ${arr2[identity.lastname]}, j'ai ${arr2[identity.age]} ans et j'habite ${arr2[identity.town]}.`)