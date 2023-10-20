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



console.log(elementInTheMiddle)


