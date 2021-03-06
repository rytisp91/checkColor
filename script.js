// GETS
const gameBoard = document.getElementById(`gameContainer`)
const cards = document.getElementsByClassName(`smallCard`)

// LISTENERS

// VARS
let board = []
let sampleColors = [
    `black`, `red`,
    `yellow`, `blue`,
    `green`, `gray`,
    `orange`, `pink`
]
let checkArr = []
let usedCards = []

// FUNCTIONS
function random(num) {
    Math.floor(Math.random() * num)
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

generateColors()

function generateColors() {
    for (let i = 0; i < 8; i++) {
        shuffle(sampleColors)
        sampleColors.map(item => {
            board.push(item)
        })
    }
}

generateCards()

function generateCards() {
    board.map((item, index) => {
        let card = document.createElement('div')
        card.classList.add(`smallCard`)
        card.setAttribute('color', item)
        card.addEventListener(`click`, openCard)
        card.setAttribute(`id`, index)

        gameBoard.appendChild(card)
    })

}

function openCard(event) {

    event.target.style.backgroundColor = event.target.attributes[1].value
    checkArr.push({
        id: Number(event.target.id),
        color: event.target.attributes[1].value
    })

    setTimeout(function () { checkMatch() }, 500)
}

function checkMatch() {

    if (checkArr.length > 2) {
        alert(`Whoa! Don't rush ;)`)
        for (let i = 0; i < checkArr.length; i++) {
            cards[checkArr[i].id].style.backgroundColor = `white`
        }
        checkArr = []
    } else {
        if (usedCards.includes(checkArr[1].id)) {
            alert(`Please select unused card!`)
            cards[checkArr[0].id].style.backgroundColor = `white`
            checkArr = []
        } else {
            if (checkArr.length === 2) {
                if (checkArr[0].color === checkArr[1].color && checkArr[0].id !== checkArr[1].id) {
                    usedCards.push(checkArr[1].id, checkArr[0].id)
                    checkArr = []
                    console.log(usedCards);
                } else {
                    cards[checkArr[0].id].style.backgroundColor = `white`
                    cards[checkArr[1].id].style.backgroundColor = `white`
                    checkArr = []
                }
            }
        }
    }
}






