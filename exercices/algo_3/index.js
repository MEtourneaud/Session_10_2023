import movies from './movies.json' assert {type: 'json'}

// Pour les parcours de tablea, on utlise .forEach()

// a. Logger le premier element du tableau movies

// console.log(movies[0])

// b. Logger l'annee du 4eme element du tableau movies

// console.log(movies[3].year)


// c. Logger le titre du dernier element du tableau movies

// console.log(movies[movies.length - 1].title)

// d. Logger le titre du film qui a la meilleure note

let bestMovie = movies[0]

movies.forEach((element) => {
    if(element.rate >= bestMovie.rate) {
        bestMovie = element
    }
})
// console.log(bestMovie.title)

// e. Logger le titre du film le plus ancien

let oldestMovie = movies[0]

movies.forEach((element) => {
    if(element.year < oldestMovie.year) {
        oldestMovie = element
    }
})
// console.log(oldestMovie.title)

// f. Logger un tablea de tous les titres de film qui ont au minimun 3 acteurs

let movieTitles = []

movies.forEach((element) => {
    if(element.actors.length >= 3) {
        movieTitles.push(element.title)
    }
})
// console.log(movieTitles)


// 1. Ecrire une fonction qui prend en parametre le tableau movies et retourne un nouveau tableau de tous les titres de films


const titleMovies = selectTitlesFromMovies(movies)
// console.log(titleMovies)


function selectTitlesFromMovies(arr) {
    let selectedTitles = []

    arr.forEach((element) => {
        selectedTitles.push(element.title)
    })
    return selectedTitles
}



// 1a. Ecrire une fonction qui prend en parametre le tableau movies et retourne un nouveau tableau de tous les réalisateur de films


// console.log(getAllDirectors(movies))

// function getAllDirectors(arr) {
//     let directors = []

//     arr.forEach((element) => {
//         directors.push(element.director)
//     })
//     return directors
// }
//-----------------------------------------------
// function getAllDirectors(arr) {
//     let directors = arr.map((element) => {
//         return element.director
//     })
//     return directors
// }
//-----------------------------------------------
function getAllDirectors(arr) {
    return arr.map((element) => element.director)
}

// 1b.
// console.log(getAllYears(movies))

function getAllYears(arr) {
    return arr.map((element) => element.year)
}



//A l'aide d'un .map(), logger un tableau qui aura pur valeur 30, 50, 90

const arrExpamples = [3, 5, 9]
// const tens = arrExpamples.map(element => element * 10)
// console.log(arrExpamples.map(element => element * 10))

// function numbers(arr) {
//     return arr.map((element) => element * 10)
// }



let users = [
    {
        name: 'Paul',
        role: 'user'
    },
    {
        name: 'Rihab',
        role: 'admin'
    },
    {
        name: 'Laurian',
        role: 'admin'
    },
    {
        name: 'Céline',
        role: 'client'
    }
]

let admins = users.filter(element => element.role == 'admin')

// console.log(admins)

let numbers = [5, 9, 12, 1, 7, 15]

// A l'aide de la méthode .filter, récupérons un  nouveau tableau qui ne contient que les multiples de 3

let threes = numbers.filter(element => element %3 === 0)
console.log(threes)