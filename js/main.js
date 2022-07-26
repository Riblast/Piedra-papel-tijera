const btnPiedra = document.getElementById("BtnPiedra")
const btnPapel = document.getElementById("BtnPapel")
const btnTijera = document.getElementById("BtnTijera")
const userScoreSpan = document.getElementById("userScore")
const computerScoreSpan = document.getElementById("computerScore")
const resultText = document.getElementById("resultText")
let userScore = 0
let computerScore = 0

btnPiedra.addEventListener("click", e =>{
    game("piedra")
})

btnPapel.addEventListener("click", e =>{
    game("papel")
})

btnTijera.addEventListener("click", e =>{
    game("tijera")
})

function getComputerChoice() {
    choices = ["piedra", "papel", "tijera"]
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}
function gameWin(userChoice, computerChoice){
    userScore++
    userScoreSpan.innerHTML = userScore
    computerScoreSpan.innerHTML = computerScore
    resultText.innerHTML = userChoice + " le gana a " + computerChoice + ". Ganaste!"
}

function gameLose(userChoice, computerChoice){
    computerScore++
    computerScoreSpan.innerHTML = computerScore
    userScoreSpan.innerHTML = userScore
    resultText.innerHTML = userChoice + " pierde contra " + computerChoice + ". Perdiste!"
}

function gameDraw(userChoice, computerChoice){
    resultText.innerHTML = userChoice + " contra " + computerChoice + ". Es un empate!"
}
function game(userChoice){
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice){
        case "piedratijera":
        case "papelpiedra":
        case "tijerapapel":
            gameWin(userChoice, computerChoice)
            break;
        case "piedrapapel":
        case "papeltijera":
        case "tijerapiedra":
            gameLose(userChoice, computerChoice)
            break;
        case "piedrapiedra":
        case "papelpapel":
        case "tijeratijera":
            gameDraw(userChoice, computerChoice)
    }
}






// function resultado(eleccion) {
//     switch(eleccion) {
//         case piedra:
//             if(getRandomInt() === piedra){
//                 console.log("empate")
//             }
//             else if(getRandomInt() === papel){
//                 console.log("perdsite")
//             }
//             else{
//                 console.log("ganaste")
//             }
//             break;
//         case papel:
//             if(getRandomInt() === piedra){
//                 console.log("ganaste")
//             }
//             else if(getRandomInt() === papel){
//                 console.log("empate")
//             }
//             else{
//                 console.log("perdiste")
//             }
//                 break;
//         case tijera:
//             if(getRandomInt() === piedra){
//                 console.log("perdiste")
//             }
//             else if(getRandomInt() === papel){
//                 console.log("ganaste")
//             }
//             else{
//                 console.log("empate")
//             }
//             break;
//     }
// }