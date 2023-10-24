//REVISIONS

let words = ["Salut", "mon", "ton", "nom", "est", "Pierre"]

let sentence = ""
let exceptions = []

for(let n = 0; n < words.length; n++) {
    // les deux expressions suivantes sont strictement équivalentes 
    //sentence += words[n] ==> sentence = sentence + words[n]

    // if(n != 1) {
    //     sentence += words[n] + " "
    // }

    if(n == 1) {
        exceptions.push(words[n])
        // Le mot clé "continue" permet de passer directment à l'itération suivante, le code ne sera donc pas
        continue        
    }

    sentence += words[n] + " "

    if(n == words.length - 1) {
        sentence += "."
    } else {
        sentence += ` `
    }
   
}

console.log(sentence)

// -------------------------------

const myTitle = document.querySelector(".my-title")

myTitle.addEventListener(`click`, onTitleClick)
// myTitle.textContent = "Hello New World !"

function onTitleClick() {
    myTitle.textContent = "Hello New World !"
}