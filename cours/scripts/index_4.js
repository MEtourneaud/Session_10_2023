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

let setOfColors = [
    {
        bgColor : "black",
        textColor : "white"
    },
    {
        bgColor : "white",
        textColor : "black"
    },
    {
        bgColor : "yellow",
        textColor : "purple"
    },
    {
        bgColor : "green",
        textColor : "red"
    }
]

let colorIndex = 0

myTitle.addEventListener(`click`, onTitleClick)
// myTitle.textContent = "Hello New World !"

function onTitleClick() {
   
    // if(myTitle.style.color == `black`) {
    //     myTitle.textContent = "Hello New World !"
    //     myTitle.style.backgroundColor = "black"
    //     myTitle.style.color = "white"
    // } else {
    //     myTitle.textContent = "Hello World !"
    //     myTitle.style.backgroundColor = "white"
    //     myTitle.style.color = "black"
    // }

    
    myTitle.style.backgroundColor = setOfColors[colorIndex].bgColor
    myTitle.style.color = setOfColors[colorIndex].textColor

    colorIndex++
    if(colorIndex == setOfColors.length - 1){
        colorIndex = 0
    }
}