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

// const nbsAbove = getNumbersAboveAverage(nbs)

// function getNumbersAboveAverage (arr) {
    
//     let sum = 0
//     let moyenne 

//     for (let n = 0; n < arr.length; n++) {
//         moyenne = (sum += arr[n]) / arr.length
//         // console.log(sum)
//     }
//     console.log(moyenne)
    
//     let compar = []
//     for (let n = 1; n < arr.length; n++) {
//         if (arr[n] > moyenne) {
//             compar.push(arr[n])
//         } 
//     }
//     console.log(compar)
// }



// Exercice des pizzas
const pizzas = [
    {
        name: 'Margherita',
        price: 11.50,
        ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
        baseTomate: true
    },
    {
        name: 'Regina',
        price: 12,
        ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
        baseTomate: true
    },
    {
        name: '4 saisons',
        price: 15,
        ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
        baseTomate: true
    },
    {
        name: 'Napolitaine',
        price: 14,
        ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
        baseTomate: true
    },
    {
        name: '4 fromages',
        price: 16,
        ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
        baseTomate: true
    },
    {
        name: 'Montagnarde',
        price: 19,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: 'Chèvre-miel',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
    {
        name: 'Hawaïenne',
        price: 17,
        ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
        baseTomate: true
    }
]

const pizzas2 = [
    {
        name: '8 fromages',
        price: 10,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: '12 fromages',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
]

// Ecrire une fonction qui prend en paramètre un tableau de pizzas, et qui retourne un tableau de tous les noms des pizzas

// const namePizza = getNamesPizza(pizzas)
// console.log(namePizza)

// function getNamesPizza(arr) {
//     let pizzasArr = []

//     for(let p = 0; p < arr.length; p++) {
//         pizzasArr.push(arr[p].name)
//     }
//     return pizzasArr
// }


// Ecrire une fonction qui prend en paramètre un tableau de pizzas et qui me retourne la moyenne des prix

// const pizzasPriceAbove = getPriceAverage(pizzas)
// console.log(pizzasPriceAbove)

// function getPriceAverage(arr2) {
    
//     let sum = 0
//     let moyenne 

//     for (let n = 0; n < arr2.length; n++) {
//         moyenne = ((sum += arr2[n].price) / arr2.length).toFixed(2)
//     }
//     return moyenne
// }

// Amélioration, la fonction renvoie un tableau de noms de pizzas dont le prix est supérieur à la moyenne

// const pizzasNamesAbove = getNamesAboveAverage(pizzas)
// console.log(pizzasNamesAbove)

// function getNamesAboveAverage(arr2) {

//     let moyenne = getPriceAverage(arr2)

//     let aboveAvg = []
//     for (let n = 1; n < arr2.length; n++) {
//         if (arr2[n].price > moyenne) {
//             aboveAvg.push(arr2[n].name)
//         } 
//     }
//     return aboveAvg
// }

// Ecrire une fonction qui prend 2 paramètres: le premier : un tableau de pizzas, le deuxième : un nom de pizza. La fonction retourne un tableau d'ingrédients de la pizza dont le nom est passé en paramètre. (getPizzaByName(pizzas, 'Margherita') ==> ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'])

const ingredients = getIngredientsFromName(pizzas, 'Margherita')
console.log(ingredients)


function getIngredientsFromName(arr, pizzaName) {
    let result = `...`

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].name == pizzaName) {
            result = arr[i].ingredients
            break
        }
    }
    return result
}