// REVISIONS DE LA VEILLE

let arrExample = [3, 5, 8, 12, 1, 58, 23, 65, 35, 25, 1, 15, 33]

let readFirstElement = true

let index

if(!readFirstElement) {
   index = 0 
} else {
    index = 1
}


let objectExample = {
    prop1 : 6,
    prop2 : 3
}

// console.log(arrExample[arrExample.length -2])


// Récupérer l'élément du tableau placé au milieu du tableau à l'aide de la propriété .length du tableau

let middleIndex

// console.log(arrExample.length)

// let middleIndex = Math.round(arrExample.length / 2) ==> Méthode plus rapide

if(arrExample.length%2 == 0) {
    middleIndex = arrExample.length / 2
} else {
    middleIndex = (arrExample.length - 1) /2
}


let elementInTheMiddle = arrExample[middleIndex]



// console.log(elementInTheMiddle)

arrExample.push(51, 21, 24) // ajout d'éléments à la fin du tableau

// console.log(arrExample)

arrExample.pop() // retrait du dernier élément du tableau




let administrators = ["Paul", "Pierre", "Mathilde"]


//Avant chaque ajout d'admin dans le tableau, tester si le nombre d'admin est supérieur ou égal à 4, si c'est le cas on enlève le dernier élément pour ajouter le nouvel admin, si ce n'est pas le cas ajouter simplement le nouvel admin.


// let newAdmin1 = "Marianne"
// Ajouter Marianne dans le tableau administrators
// administrators.push(newAdmin1)

// if(administrators.length >= 4) {
//     administrators.pop()
// } 
// administrators.push(newAdmin1)


// let newAdmin2 = "Sophie"

// if(administrators.length >= 4) {
//     administrators.pop()
// } 
// administrators.push(newAdmin2)


// let newAdmin3 = "Lucie"

// if(administrators.length >= 4) {
//     administrators.pop()
// } 
// administrators.push(newAdmin3)


// console.log(administrators)



//Ajouter utilisateur si la propriété est true
let newAdmin1 = {
    name: "Marianne",
    admin: true
}

// if(newAdmin1.admin) {
//     administrators.push(newAdmin1.name)
// }


let newAdmin2 = {
    name: "Sophie",
    admin: false
}

// if(newAdmin2.admin) {
//     administrators.push(newAdmin2.name)
// }


let newAdmin3 = {
    name: "Lucie",
    admin: true
}

// if(newAdmin3.admin) {
//     administrators.push(newAdmin3.name)
// }

addUserIfAdmin(newAdmin1)
addUserIfAdmin(newAdmin2)
addUserIfAdmin(newAdmin3)

function addUserIfAdmin(user) {
    if(user.admin) {
        administrators.push(user.name)
    }
}

// console.log(administrators)


// Créer une fonction qui prend en paramètre un objet utilisateur et qui affiche en console la chaine de caractère suivante : "Bonjour ${nom} !"


// welcomeUser(newAdmin1)
// welcomeUser(newAdmin2)
// welcomeUser(newAdmin3)

// function welcomeUser(utilisateur) {
//     if(utilisateur.admin) {
//         console.log(`Bonjour administratrice ${utilisateur.name} !`)
//     } else {
//         console.log(`Bonjour ${utilisateur.name} !`)
//     }
// }


// function welcomeUser(utilisateur) {
//     let strResult = "Bonjour "

//     if(utilisateur.admin) {
//         strResult += "administratrice "
//     }
//     strResult += utilisateur.name + " !"
//     console.log(strResult)
// }


//Créer une fonction à 2 paramètres qui affiche Bonjour Sophie et Lucie !

// buildSentence(newAdmin2, newAdmin3)

// function buildSentence(user1, user2) {
//     console.log(`Bonjour ${user1.name} et ${user2.name} !`)
// }




const town1 = {
    name : "Bordeaux",
    population : 300000,
    superficy : 50,
    twinnings : ["Berlin", "Londres", "Madrid", "Libourne"]
}

const town2 = {
    name : "Lyon",
    population : 500000,
    superficy : 48,
    twinnings : ["Berlin", "Londres", "Madrid", "Libourne", "Rennes", "Varsovie"]

}

const town3 = {
    name : "Paris",
    population : 2000000,
    superficy : 105,
    twinnings : ["Berlin", "Londres", "Madrid", "Libourne", "Rochefort"]

}

// Ecrire une fonction qui prend 2 paramètres, et qui affiche dans la console , le nom de la plus peuplée des deux

// compareTowns(town3, town2)

const biggerTowns = compareTowns(town3, town2)

console.log(biggerTowns.name)

// function compareTowns(pop1, pop2) {
//     if (pop1.population > pop2.population) {
//         console.log(`${pop1.name} est plus grand que ${pop2.name}`)
//     } else {
//         console.log(`${pop2.name} est plus grand que ${pop1.name}`)
//     }
// }

function compareTowns(pop1, pop2) {
    if (pop1.population > pop2.population) {
        return pop1
    } else {
        return pop2
    }
}


// const nb1 = 5
// const nb2 = 7

// const sum = addTwoParameters(nb1, nb2)


// console.log(`Le résultat de la somme de ${nb1} et ${nb2} est égal à ${sum}`)

// function addTwoParameters(arg1, arg2){
//     const result = arg1 + arg2
//     return result
// }

// Ecrire la fonction qui retourne le produit des deux paramètres

const nb1 = 4
const nb2 = 6

const resultProduct = productOfParameters(nb1, nb2)


console.log(`Le résultat du produit de ${nb1} et ${nb2} est égal à ${resultProduct}`)

function productOfParameters(param1, param2) {
    return param1 * param2
}





//Variante  exercices avec les towns, écrire la fonction qui compare 2 villes en paramètres et qui retourne celle qui a lep plus de jumelage

const biggerTwins = compareTwinnings(town3, town2)

function compareTwinnings(twin1, twin2) {
    if (twin1.twinnings > twin2.twinnings) {
        return twin1
    } else {
        return town2
    }
}