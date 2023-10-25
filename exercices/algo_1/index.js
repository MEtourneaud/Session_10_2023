const resultDiv = document.querySelector('.result')

const numbers = [2, 12, 23, 5, 89, 8, 3, 104]
const numbers2 = [2, 12, 23, 5, 89, 8, 3, 105]
const numbers3 = [2, 12, 23, 5, 1, 8, 3, 104]


// 1. Ecrire une fonction qui retourne la valeur minimum contenu dans un tableau passé en paramètre

// const result1 = getMinimum(numbers)
// resultDiv.textContent = result1

// function getMinimum(arr) {
//     let result = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < result) {
//             result = arr[i]
//         }
//     }

//     return result
// }

// 2. Ecrire une fonction qui retourne la valeur maximum contenu dans un tableau passé en paramètre

const result2 = getMaximum(numbers)
resultDiv.textContent = result2

function getMaximum(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i]
        }
    }
    return result
}


// 3. Ecrire une fonction qui prend un paramètre un tablea de nombres et qui retourne un nouveau tableau de nombres, qui seront tous supérieurs à la moyenne du tableau en paramètres.

const nbs = [2, 12, 23, 5, 1, 8, 3, 104] 

// let moyenne

const nbsAbove = getNumbersAboveAverage(nbs)

function getNumbersAboveAverage (arr) {
    
    let sum = 0
    let moyenne 

    for (let n = 0; n < arr.length; n++) {
        moyenne = (sum += arr[n]) / arr.length
        // console.log(sum)
    }
    console.log(moyenne)
    
    let compar = []
    for (let n = 1; n < arr.length; n++) {
        if (arr[n] > moyenne) {
            compar.push(arr[n])
        } 
    }
    console.log(compar)
}