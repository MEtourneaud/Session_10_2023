const title = document.querySelector(`.title`)
title.style.color = `white`

const cards = document.querySelectorAll(`.card`)


for(i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', onCardClick)
}

function onCardClick(event) {
    /**
     * event.target est l'élément html sur lequel l'utilisateur a cliqué, event.currentTarget est l'élément html sur lequel addEventListener a été déclaré
     */
    console.log(event.currentTarget)
}


// var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// });